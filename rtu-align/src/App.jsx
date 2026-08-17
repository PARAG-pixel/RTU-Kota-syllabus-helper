import { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import BranchSelector from './components/BranchSelector';
import DiagnosticQuiz from './components/DiagnosticQuiz';
import RadarGapChart from './components/RadarGapChart';
import MarksAtRisk from './components/MarksAtRisk';
import SprintRoadmap from './components/SprintRoadmap';
import TopicTutorDrawer from './components/TopicTutorDrawer';
import { evaluateQuiz } from './services/scoringEngine';
import { generateLocalRoadmap, generateGeminiRoadmap } from './services/roadmapGenerator';
import { fetchRtuData } from './services/supabaseClient';
import { motion } from 'framer-motion';
import { RotateCcw, Loader2, AlertCircle, ArrowRight, Flame, CheckCircle2, ShieldAlert } from 'lucide-react';

function App() {
  // Data State
  const [rtuData, setRtuData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [dataError, setDataError] = useState(null);

  // Navigation State
  const [step, setStep] = useState('branch'); // branch | semester | subject | quiz | results | roadmap
  const [selectionStep, setSelectionStep] = useState('branch'); // sub-step within selection

  // Selection State
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Results State
  const [quizResults, setQuizResults] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [quizTime, setQuizTime] = useState(0);
  const [isGeneratingRoadmap, setIsGeneratingRoadmap] = useState(false);

  // AI Topic Tutor State
  const [tutorModal, setTutorModal] = useState({ isOpen: false, topic: '', unitNumber: 1 });

  const handleOpenTutor = useCallback((topic, unitNumber = 1) => {
    setTutorModal({ isOpen: true, topic, unitNumber });
  }, []);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AQ.Ab8RN6KWXPPM3PVKLS-3Yog2aTR9VxfPgbxqSj15OZTKHXLBdQ';

  // Load Data
  const loadData = useCallback((force = false) => {
    setLoadingData(true);
    setDataError(null);
    fetchRtuData(force)
      .then(data => {
        setRtuData(data);
        setLoadingData(false);
      })
      .catch(err => {
        console.error(err);
        setDataError(err.message);
        setLoadingData(false);
      });
  }, []);

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  const goBack = useCallback(() => {
    if (step === 'roadmap') {
      setStep('results');
      return;
    }
    if (step === 'results') {
      setStep('quiz');
      setQuizResults(null);
      return;
    }
    if (step === 'quiz') {
      setStep('branch');
      setSelectionStep('subject');
      return;
    }
    if (step === 'branch') {
      if (selectionStep === 'subject') {
        setSelectionStep('semester');
        setSelectedSubject(null);
      } else if (selectionStep === 'semester') {
        setSelectionStep('branch');
        setSelectedSemester(null);
      }
    }
  }, [step, selectionStep]);

  const handleBranchSelect = useCallback((type, value) => {
    if (type === 'branch') {
      setSelectedBranch(value);
      setSelectionStep('semester');
    } else if (type === 'semester') {
      setSelectedSemester(value);
      setSelectionStep('subject');
    } else if (type === 'subject') {
      setSelectedSubject(value);
      setStep('quiz');
    }
  }, []);

  const handleQuizComplete = useCallback((answers, elapsed) => {
    const results = evaluateQuiz(answers, selectedSubject);
    setQuizResults(results);
    setQuizTime(elapsed);
    setStep('results');

    // Auto-generate roadmap using local engine first for instant speed
    const rm = generateLocalRoadmap(selectedSubject, results, 5);
    setRoadmap(rm);
  }, [selectedSubject]);

  const handleGenerateRoadmap = useCallback(async (days) => {
    setIsGeneratingRoadmap(true);
    try {
      if (GEMINI_API_KEY?.trim()) {
        const rm = await generateGeminiRoadmap(GEMINI_API_KEY, selectedSubject, quizResults, days);
        setRoadmap(rm);
      } else {
        const rm = generateLocalRoadmap(selectedSubject, quizResults, days);
        setRoadmap(rm);
      }
    } finally {
      setIsGeneratingRoadmap(false);
    }
  }, [GEMINI_API_KEY, selectedSubject, quizResults]);

  const handleRestart = useCallback(() => {
    setStep('branch');
    setSelectionStep('branch');
    setSelectedBranch(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setQuizResults(null);
    setRoadmap(null);
  }, []);

  // Build breadcrumb
  const breadcrumb = [];
  if (selectedBranch) breadcrumb.push(selectedBranch.branch_id === 'ai' ? 'AI' : 'CSE');
  if (selectedSemester) breadcrumb.push(`Sem ${selectedSemester.semester}`);
  if (selectedSubject) breadcrumb.push(selectedSubject.name);
  if (step === 'quiz') breadcrumb.push('Diagnostic');
  if (step === 'results') breadcrumb.push('Gap Analysis');
  if (step === 'roadmap') breadcrumb.push('Sprint Roadmap');

  const canGoBack = step !== 'branch' || selectionStep !== 'branch';

  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern">
      <Navbar 
        breadcrumb={breadcrumb.length > 0 ? breadcrumb : null}
        onBack={goBack}
        canGoBack={canGoBack}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 py-8 md:py-10">
        {loadingData ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
              </div>
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-white font-heading">Syncing RTU Kota Curriculum</h3>
              <p className="text-xs text-gray-400">Loading branches, subjects, and diagnostic question banks...</p>
            </div>
          </div>
        ) : dataError ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center max-w-md mx-auto">
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Database Connection Notice</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{dataError}</p>
            <button
              onClick={() => loadData(true)}
              className="btn-primary flex items-center gap-2 mt-2"
            >
              <RotateCcw className="w-4 h-4" /> Retry Connection
            </button>
          </div>
        ) : (
          <>
            {/* Branch / Semester / Subject Selection */}
            {step === 'branch' && rtuData && (
              <BranchSelector
                rtuData={rtuData}
                onSelect={handleBranchSelect}
                currentStep={selectionStep}
                selections={{ selectedBranch, selectedSemester, selectedSubject }}
              />
            )}

            {/* Diagnostic Quiz */}
            {step === 'quiz' && selectedSubject && (
              <DiagnosticQuiz
                subject={selectedSubject}
                onComplete={handleQuizComplete}
                onOpenTutor={handleOpenTutor}
              />
            )}

            {/* Gap Analysis Bento Grid Dashboard */}
            {step === 'results' && quizResults && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                {/* Hero Summary Bento Card */}
                <div className="bento-card bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-950/40 border-blue-500/20">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-lg border border-cyan-500/20">
                          {selectedSubject.code}
                        </span>
                        <span className="text-xs text-slate-400">
                          Completed in <span className="text-white font-bold">{quizTime}s</span>
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-white font-heading">
                        {selectedSubject.name}
                      </h2>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                        Diagnostic assessment evaluated against the official RTU Kota 70/30 Examination Scheme.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-950/80 border border-white/[0.08] p-4 rounded-2xl flex-shrink-0">
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Exam Readiness</div>
                        <div className={`text-3xl font-black font-heading ${
                          quizResults.overallReadiness >= 70 ? 'text-emerald-300' :
                          quizResults.overallReadiness >= 40 ? 'text-amber-300' :
                          'text-rose-300'
                        }`}>
                          {quizResults.overallReadiness}%
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                        quizResults.overallReadiness >= 70 
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : quizResults.overallReadiness >= 40
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                      }`}>
                        {quizResults.overallReadiness >= 70 ? <CheckCircle2 className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two-Column Bento Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <RadarGapChart results={quizResults} />
                  <MarksAtRisk results={quizResults} />
                </div>

                {/* Unit-wise Deep Dive Bento Card */}
                <div className="bento-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-white font-heading">Unit-by-Unit Deep Dive</h3>
                    <span className="text-xs text-gray-400">{quizResults.unitDetails.length} Syllabus Units</span>
                  </div>

                  <div className="space-y-3" role="list">
                    {quizResults.unitDetails.map(u => (
                      <div 
                        key={u.unit} 
                        onClick={() => handleOpenTutor(u.title, u.unit)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleOpenTutor(u.title, u.unit);
                          }
                        }}
                        role="button"
                        aria-label={`Open AI Topic Tutor for Unit ${u.unit}: ${u.title}`}
                        className="p-4 rounded-xl bg-slate-950/50 border border-white/[0.05] flex items-center gap-4 hover:border-violet-500/40 hover:bg-slate-900/80 transition-all cursor-pointer group focus-ring"
                        title={`Click to learn "${u.title}" with AI Topic Tutor`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-violet-500/30 flex items-center justify-center text-xs font-bold text-slate-300 group-hover:text-cyan-300 font-mono flex-shrink-0">
                          U{u.unit}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2 truncate">
                              <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                                {u.title}
                              </span>
                              {u.highYield <= 2 && (
                                <span className="badge-critical text-[9px] py-0 px-1.5">
                                  <Flame className="w-2.5 h-2.5 mr-0.5" /> High Yield
                                </span>
                              )}
                              <span className="text-[10px] text-violet-300 font-medium hidden sm:inline-flex opacity-0 group-hover:opacity-100 transition-opacity">
                                • Ask AI Tutor →
                              </span>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className={`text-xs font-bold font-mono ${
                                u.status === 'strong' ? 'text-emerald-300' :
                                u.status === 'moderate' ? 'text-amber-300' :
                                'text-rose-300'
                              }`}>
                                {u.score}%
                              </span>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                u.status === 'strong' ? 'badge-success' :
                                u.status === 'moderate' ? 'badge-warning' :
                                'badge-critical'
                              }`}>
                                {u.correct}/{u.total} Correct
                              </span>
                            </div>
                          </div>

                          <div 
                            className="h-1.5 rounded-full bg-slate-800 overflow-hidden"
                            role="progressbar"
                            aria-valuenow={u.score}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`Unit ${u.unit} score`}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${u.score}%` }}
                              transition={{ duration: 0.8, delay: u.unit * 0.08 }}
                              className={`h-full rounded-full ${
                                u.status === 'strong' ? 'bg-emerald-400' :
                                u.status === 'moderate' ? 'bg-amber-400' :
                                'bg-rose-400'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setStep('roadmap');
                      handleGenerateRoadmap(5);
                    }}
                    className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-sm md:text-base font-bold shadow-xl shadow-blue-500/25"
                  >
                    <span>Generate AI Sprint Roadmap</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <button 
                    onClick={handleRestart} 
                    className="btn-secondary flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold"
                  >
                    <RotateCcw className="w-4 h-4" /> Start New Assessment
                  </button>
                </div>
              </motion.div>
            )}

            {/* Sprint Roadmap View */}
            {step === 'roadmap' && roadmap && (
              <div className="space-y-6">
                <SprintRoadmap
                  roadmap={roadmap}
                  onRegenerate={handleGenerateRoadmap}
                  isRegenerating={isGeneratingRoadmap}
                  onOpenTutor={handleOpenTutor}
                />
                
                <div className="flex justify-center pt-4">
                  <button onClick={handleRestart} className="btn-secondary flex items-center gap-2 text-xs font-semibold">
                    <RotateCcw className="w-4 h-4" /> New Assessment Session
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* AI Topic Tutor Drawer Modal */}
      <TopicTutorDrawer
        isOpen={tutorModal.isOpen}
        onClose={() => setTutorModal(prev => ({ ...prev, isOpen: false }))}
        topic={tutorModal.topic}
        unitNumber={tutorModal.unitNumber}
        subject={selectedSubject}
      />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#060913]/60 py-6 text-center text-xs text-gray-500">
        <p>RTU-Align • Rajasthan Technical University Kota (2026 Scheme) • AI Exam Sprint Engine</p>
      </footer>
    </div>
  );
}

export default App;
