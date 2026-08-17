import { useState, useMemo, useEffect, useCallback } from 'react';

import { CheckCircle, XCircle, Clock, ArrowRight, CornerDownLeft, Flame, Sparkles } from 'lucide-react';

import { generateAIQuestion } from '../services/geminiChatService';

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function DiagnosticQuiz({ subject, onComplete, onOpenTutor }) {
  const [allQuestions, setAllQuestions] = useState([]);
  
  // Initial load
  useEffect(() => {
    let globalQIndex = 0;
    const initial = subject.units.flatMap((unit, uIdx) =>
      unit.questions.map(q => {
        globalQIndex++;
        return {
          ...q,
          unitNumber: uIdx + 1,
          unitTitle: unit.title,
          isHighYield: (unit.high_yield ?? 3) <= 2,
          options: shuffleArray(q.options),
          isAI: false
        };
      })
    );
    setAllQuestions(initial);
  }, [subject]);

  // Background AI generation
  useEffect(() => {
    if (allQuestions.length === 0) return;
    
    // Use a simple ref-like pattern on the window to prevent StrictMode double-firing
    if (window._aiQuestionsGeneratedForSubject === subject.code) return;
    window._aiQuestionsGeneratedForSubject = subject.code;

    const generateAsync = async () => {
      for (let i = 0; i < subject.units.length; i++) {
        const unit = subject.units[i];
        
        // Generate 4 questions concurrently
        const promises = Array.from({ length: 4 }).map(() => generateAIQuestion(subject, i + 1, unit.topics));
        const aiQs = await Promise.all(promises);
        
        const validQs = aiQs.filter(q => q && q.q && q.options && q.answer).map(q => ({
          ...q,
          id: `ai_${Math.random().toString(36).substr(2, 9)}`,
          unitNumber: i + 1,
          unitTitle: unit.title,
          isHighYield: (unit.high_yield ?? 3) <= 2,
          options: shuffleArray(q.options),
          isAI: true
        }));

        if (validQs.length > 0) {
          setAllQuestions(prev => {
            const next = [...prev];
            const lastIdx = next.findLastIndex(q => q.unitNumber === i + 1 && !q.isAI);
            if (lastIdx !== -1) {
              next.splice(lastIdx + 1, 0, ...validQs);
            } else {
              next.push(...validQs);
            }
            return next;
          });
        }
      }
    };
    
    generateAsync();
  }, [subject, allQuestions.length]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Live timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(Math.round((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  const currentQ = useMemo(() => {
    return allQuestions[currentIdx] || { options: [], q: '', answer: '', unitNumber: 1, unitTitle: '', isHighYield: false };
  }, [allQuestions, currentIdx]);

  const progress = allQuestions.length > 0 ? ((currentIdx + 1) / allQuestions.length) * 100 : 0;
  const isLastQuestion = currentIdx === allQuestions.length - 1;

  const handleOptionSelect = useCallback((option) => {
    if (showResult) return;
    setSelectedOption(option);
  }, [showResult]);

  const handleConfirm = useCallback(() => {
    if (!selectedOption) return;

    if (!showResult) {
      setAnswers(prev => ({ ...prev, [currentQ.id]: selectedOption }));
      setShowResult(true);
    } else {
      if (isLastQuestion) {
        const finalAnswers = { ...answers, [currentQ.id]: selectedOption };
        const elapsed = Math.round((Date.now() - startTime) / 1000);
        onComplete(finalAnswers, elapsed);
      } else {
        setCurrentIdx(prev => prev + 1);
        setSelectedOption(null);
        setShowResult(false);
      }
    }
  }, [selectedOption, showResult, currentQ.id, isLastQuestion, answers, startTime, onComplete]);

  // Keyboard accessibility: 1-4, A-D to select, Enter to submit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key.toLowerCase();
      if (!showResult && currentQ?.options) {
        if (key === 'a' || key === '1') handleOptionSelect(currentQ.options[0]);
        else if (key === 'b' || key === '2') handleOptionSelect(currentQ.options[1]);
        else if (key === 'c' || key === '3') handleOptionSelect(currentQ.options[2]);
        else if (key === 'd' || key === '4') handleOptionSelect(currentQ.options[3]);
      }

      if (key === 'enter') {
        e.preventDefault();
        handleConfirm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, showResult, handleOptionSelect, handleConfirm]);

  const isCorrect = selectedOption === currentQ.answer;

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="slide-up max-w-2xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            {subject.code}
          </span>
          <h2 className="text-xl font-bold text-white mt-1 font-heading">{subject.name}</h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 border border-white/[0.08] px-3 py-1.5 rounded-xl text-xs text-gray-300">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono">{formatTimer(secondsElapsed)}</span>
        </div>
      </div>

      {/* Progress & Unit Pill */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="font-semibold text-gray-300">
            Question <span className="text-white font-bold">{currentIdx + 1}</span> of {allQuestions.length}
          </span>

          <div className="flex items-center gap-2">
            {currentQ.isHighYield && (
              <span className="badge-critical text-[10px] py-0.5 px-2">
                <Flame className="w-3 h-3 mr-0.5 text-rose-400" /> High Yield
              </span>
            )}
            <span className="text-gray-300 font-medium">
              Unit {currentQ.unitNumber}: {currentQ.unitTitle?.length > 25 ? currentQ.unitTitle.substring(0, 23) + '...' : currentQ.unitTitle}
            </span>
          </div>
        </div>

        <div className="progress-bar">
          <div className="slide-up progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Question Card */}
      
        <div className="slide-up glass-card p-6 md:p-8 space-y-6">
          <div className="flex items-start gap-3.5">
            <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 text-blue-400 font-bold text-sm flex items-center justify-center font-mono">
              Q{currentIdx + 1}
            </span>
            <p className="text-white text-base md:text-lg font-medium leading-relaxed">
              {currentQ.q}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {currentQ.options?.map((opt, idx) => {
              let optClass = 'option-card';
              if (showResult) {
                if (opt === currentQ.answer) optClass += ' correct';
                else if (opt === selectedOption && !isCorrect) optClass += ' incorrect';
              } else if (opt === selectedOption) {
                optClass += ' selected';
              }

              const letter = String.fromCharCode(65 + idx);

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(opt)}
                  className={`${optClass} w-full text-left flex items-center gap-3.5 py-3.5 px-4`}
                  disabled={showResult}
                >
                  <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-all ${opt === selectedOption
                      ? 'border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'border-white/[0.12] bg-white/[0.04] text-gray-400'
                    }`}>
                    {letter}
                  </span>
                  <span className="text-sm text-gray-200 font-medium flex-1">{opt}</span>
                  {showResult && opt === currentQ.answer && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 ml-auto flex-shrink-0" />
                  )}
                  {showResult && opt === selectedOption && !isCorrect && opt !== currentQ.answer && (
                    <XCircle className="w-5 h-5 text-rose-400 ml-auto flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback message */}
          {showResult && (
            <div
              className={`p-4 rounded-xl text-sm border flex items-start gap-3 ${isCorrect
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                }`}
            >
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <div className="font-bold">
                  {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                </div>
                {!isCorrect && (
                  <div className="text-xs text-gray-300 mt-1">
                    Correct Option: <span className="font-semibold text-white">{currentQ.answer}</span>
                  </div>
                )}
                {currentQ.topic && (
                  <div className="text-[11px] text-gray-400 mt-1">
                    RTU Syllabus Topic: <span className="text-gray-200">{currentQ.topic}</span>
                  </div>
                )}
                {currentQ.topic && onOpenTutor && (
                  <button
                    type="button"
                    onClick={() => onOpenTutor(currentQ.topic, currentQ.unitNumber)}
                    className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 text-violet-200 text-xs font-semibold transition-all cursor-pointer group"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-12 transition-transform" />
                    <span>Deep-dive with AI Topic Tutor →</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      

      {/* Action Button & Shortcuts Hint */}
      <div className="space-y-3">
        <button
          onClick={handleConfirm}
          disabled={!selectedOption}
          className={`btn-primary w-full flex items-center justify-center gap-2 py-3.5 ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          <span className="font-bold">
            {!showResult ? 'Submit Answer' : isLastQuestion ? 'Complete Assessment & View Gap Analysis' : 'Next Question'}
          </span>
          <ArrowRight className="w-4 h-4" />
          <span className="hidden sm:inline-flex items-center text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded ml-1 opacity-80">
            <CornerDownLeft className="w-3 h-3 mr-0.5" /> ↵
          </span>
        </button>

        <p className="text-center text-[11px] text-gray-500">
          Pro-tip: Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-300 font-mono text-[10px]">A</kbd>-<kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-300 font-mono text-[10px]">D</kbd> or <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-300 font-mono text-[10px]">1</kbd>-<kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-300 font-mono text-[10px]">4</kbd> on your keyboard, and press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-300 font-mono text-[10px]">Enter</kbd> to proceed.
        </p>
      </div>

      {/* Progress step dots / Segmented mini-bar */}
      <div className="flex flex-wrap justify-center items-center gap-1.5 pt-2 max-w-full px-2">
        {allQuestions.map((q, idx) => (
          <div
            key={q.id || idx}
            className={`transition-all duration-300 rounded-full ${idx === currentIdx
                ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-blue-500 shadow-md shadow-blue-500/50'
                : idx < currentIdx
                  ? (answers[q.id] === q.answer ? 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400' : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-rose-400')
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/10'
              }`}
            title={`Question ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
