import { Brain, Monitor, ChevronRight, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BranchSelector({ rtuData, onSelect, currentStep, selections }) {
  const { selectedBranch, selectedSemester } = selections;

  if (currentStep === 'branch') {
    return (
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-2">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>RTU Kota 5-Unit Examination Sprint Engine</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black gradient-text tracking-tight font-heading leading-tight">
            Targeted Exam Preparation for RTU B.Tech
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Diagnose unit-wise knowledge gaps across Part A (2M), Part B (5M), and Part C (10M), calculate Marks at Risk, and synthesize an AI study roadmap.
          </p>

          {/* Quick Blueprint Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="badge-neutral text-[11px] py-1 px-3">
              <Layers className="w-3 h-3 mr-1" /> 5 Units / Subject
            </span>
            <span className="badge-neutral text-[11px] py-1 px-3">
              <Award className="w-3 h-3 mr-1" /> 70/30 External Ratio
            </span>
            <span className="badge-neutral text-[11px] py-1 px-3">
              <BookOpen className="w-3 h-3 mr-1" /> 3-Unit Minimum Rule
            </span>
          </div>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {rtuData.branches?.map((branch, idx) => {
            const isAI = branch.branch_id === 'ai';
            const activeSemesters = branch.semesters?.filter(s => s.subjects?.length > 0).length || 0;

            return (
              <motion.button
                key={branch.branch_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect('branch', branch)}
                className="glass-card-hover p-8 text-left group relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Ambient glow accent */}
                <div className={`absolute -right-12 -top-12 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none ${
                  isAI ? 'bg-violet-500' : 'bg-blue-500'
                }`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xl ${
                      isAI 
                        ? 'bg-violet-500/10 border-violet-500/30 text-violet-400 shadow-violet-500/20' 
                        : 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-blue-500/20'
                    }`}>
                      {isAI ? <Brain className="w-7 h-7" /> : <Monitor className="w-7 h-7" />}
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.06] border border-white/[0.1] text-gray-300">
                      B.Tech 2026
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors font-heading">
                    {isAI ? 'Artificial Intelligence (AI)' : 'Computer Science (CSE)'}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {branch.branch_name}
                  </p>
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-white/[0.06] mt-6">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                    <span>{activeSemesters} Semesters Available</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-gray-400 flex items-center justify-center transition-all">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  }

  if (currentStep === 'semester') {
    const validSemesters = selectedBranch?.semesters?.filter(s => s.subjects?.length > 0) || [];
    
    // Group semesters by year
    const years = [
      { year: 1, label: '1st Year', sems: validSemesters.filter(s => s.year === 1) },
      { year: 2, label: '2nd Year', sems: validSemesters.filter(s => s.year === 2) },
      { year: 3, label: '3rd Year', sems: validSemesters.filter(s => s.year === 3) },
      { year: 4, label: '4th Year', sems: validSemesters.filter(s => s.year === 4) },
    ].filter(y => y.sems.length > 0);

    return (
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {selectedBranch?.branch_id === 'ai' ? 'Artificial Intelligence' : 'Computer Science & Engineering'}
          </div>
          <h2 className="text-3xl font-bold gradient-text font-heading">Select Academic Semester</h2>
          <p className="text-gray-400 text-xs md:text-sm">Choose your current semester to access syllabus-aligned diagnostic tests</p>
        </div>

        <div className="space-y-6">
          {years.map(yr => (
            <div key={yr.year} className="glass-card p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider">
                <span>{yr.label} (Year {yr.year})</span>
                <span className="text-[11px] text-cyan-400">{yr.sems.length} Semesters Active</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {yr.sems.map((sem, idx) => (
                  <motion.button
                    key={sem.semester}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => onSelect('semester', sem)}
                    className="p-4 rounded-xl bg-white/[0.04] hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-violet-600/20 border border-white/[0.08] hover:border-blue-500/40 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-medium">Semester</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="text-2xl font-black text-white mt-1 group-hover:text-cyan-300 font-heading">
                      0{sem.semester}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>{sem.subjects?.length || 0} Core Subjects</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (currentStep === 'subject') {
    return (
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Semester {selectedSemester?.semester} • Year {selectedSemester?.year}
          </div>
          <h2 className="text-3xl font-bold gradient-text font-heading">Select Subject Assessment</h2>
          <p className="text-gray-400 text-xs md:text-sm">Each subject diagnostic contains 10 questions mapped directly across all 5 RTU units</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedSemester?.subjects?.map((subj, idx) => (
            <motion.button
              key={subj.code}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect('subject', subj)}
              className="glass-card-hover p-6 text-left group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                    {subj.code}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 bg-white/[0.05] px-2 py-0.5 rounded">
                    3 Credits
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading leading-snug">
                  {subj.name}
                </h3>
              </div>

              <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <span>{subj.units?.length || 5} Units</span>
                  <span>•</span>
                  <span>10 Curated MCQs</span>
                </div>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Begin Diagnostic →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  }

  return null;
}
