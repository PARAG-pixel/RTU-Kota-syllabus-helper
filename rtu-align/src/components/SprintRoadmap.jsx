import { useState } from 'react';

import { Clock, Target, ChevronDown, ChevronUp, Zap, BookOpen, AlertCircle, Printer, CheckSquare, Square, Loader2, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export default function SprintRoadmap({ roadmap, onRegenerate, isRegenerating = false, onOpenTutor }) {
  const [expandedDay, setExpandedDay] = useState(0);
  const [completedMilestones, setCompletedMilestones] = useState({});

  const dayOptions = [3, 5, 7];

  const priorityColors = {
    CRITICAL: { bg: 'bg-rose-500/15', border: 'border-rose-500/30', text: 'text-rose-400', dot: 'bg-rose-400' },
    MODERATE: { bg: 'bg-amber-500/15', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-400' },
    REVISION: { bg: 'bg-emerald-500/15', border: 'border-emerald-500/30', text: 'text-emerald-400', dot: 'bg-emerald-400' },
    HIGH: { bg: 'bg-rose-500/15', border: 'border-rose-500/30', text: 'text-rose-400', dot: 'bg-rose-400' },
  };

  const toggleMilestone = (key) => {
    setCompletedMilestones(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  // Calculate total milestones completed across the entire sprint
  const allMilestonesCount = roadmap.sprintPlan?.reduce((acc, d) => acc + (d.milestones?.length || 0), 0) || 0;
  const completedCount = Object.values(completedMilestones).filter(Boolean).length;
  const overallProgress = allMilestonesCount > 0 ? Math.round((completedCount / allMilestonesCount) * 100) : 0;

  return (
    <div className="slide-up space-y-6">
      {/* Top Banner: Sprint Overview & Duration Switcher */}
      <div className="glass-card p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Zap className="w-4 h-4" />
            </span>
            <h2 className="text-2xl font-bold text-white font-heading">
              AI-Orchestrated Revision Sprint
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed pt-1">
            {roadmap.masteryAdvice}
          </p>
        </div>

        {/* Controls: Target Days Selector & Print Button */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 border border-white/[0.08] rounded-xl">
            {dayOptions.map(d => (
              <button
                key={d}
                disabled={isRegenerating}
                onClick={() => onRegenerate(d)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  roadmap.targetDays === d 
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {d} Days
              </button>
            ))}
          </div>

          <button
            onClick={handlePrint}
            className="btn-secondary py-2 px-3.5 text-xs flex items-center gap-2"
            title="Print or Save PDF Revision Sheet"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-semibold">Print Sheet</span>
          </button>
        </div>
      </div>

      {/* Progress & Engine Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-gray-400 font-medium">Sprint Completion</div>
            <div className="text-xl font-bold text-white font-heading mt-0.5">
              {completedCount} <span className="text-xs text-gray-400 font-normal">/ {allMilestonesCount} Done</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${overallProgress}%` }} />
            </div>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Sprint Duration</div>
            <div className="text-xl font-bold text-white font-heading mt-0.5">
              {roadmap.targetDays} Days Revision
            </div>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Synthesis Engine</div>
            <div className="text-sm font-bold text-white mt-0.5 flex items-center gap-1.5">
              {roadmap.source === 'gemini' ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Gemini AI Active
                </span>
              ) : (
                <span className="text-blue-400">Offline Heuristic Engine</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Loading State during AI regeneration */}
      {isRegenerating ? (
        <div className="glass-card p-12 text-center space-y-3">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto" />
          <h4 className="text-base font-bold text-white font-heading">Re-orchestrating Sprint with Gemini AI</h4>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            Recalculating unit hour allocations, RTU PYQs, and daily milestone distribution...
          </p>
        </div>
      ) : (
        /* Vertical Connected Timeline */
        <div className="relative pl-6 md:pl-8 space-y-4 before:absolute before:left-3 md:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-violet-500 before:to-transparent">
          {roadmap.sprintPlan?.map((day, idx) => {
            const colors = priorityColors[day.priorityLevel] || priorityColors.MODERATE;
            const isExpanded = expandedDay === idx;

            // Day completion calculation
            const dayMilestones = day.milestones || [];
            const dayCompletedCount = dayMilestones.filter((_, mIdx) => !!completedMilestones[`${idx}-${mIdx}`]).length;

            return (
              <div className="slide-up relative">
                {/* Timeline node icon */}
                <div className={`absolute -left-6 md:-left-8 top-5 w-4 h-4 rounded-full border-2 border-[#060913] ${
                  dayCompletedCount === dayMilestones.length && dayMilestones.length > 0
                    ? 'bg-emerald-400 shadow-md shadow-emerald-400/50'
                    : isExpanded 
                      ? 'bg-blue-400 shadow-md shadow-blue-400/50' 
                      : 'bg-slate-700'
                }`} />

                {/* Day Card */}
                <div className={`glass-card transition-all ${isExpanded ? 'border-blue-500/40 shadow-xl' : 'hover:border-white/[0.14]'}`}>
                  <button
                    onClick={() => setExpandedDay(isExpanded ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Day Pill */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex flex-col items-center justify-center font-heading">
                        <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Day</span>
                        <span className="text-lg font-black text-white">{day.day}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="text-sm md:text-base font-bold text-white truncate font-heading">
                            Unit {day.focusUnit}: {day.unitTitle}
                          </h4>
                          <span className={`${colors.bg} ${colors.text} border ${colors.border} px-2 py-0.5 rounded-full text-[10px] font-bold`}>
                            {day.priorityLevel}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-cyan-400" /> {day.allocatedHours} Hours
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Target className="w-3.5 h-3.5 text-violet-400" /> {dayMilestones.length} Milestones
                          </span>
                          {day.score !== undefined && (
                            <>
                              <span>•</span>
                              <span className={`font-semibold ${
                                day.score >= 80 ? 'text-emerald-400' : day.score >= 40 ? 'text-amber-400' : 'text-rose-400'
                              }`}>
                                Baseline: {day.score}%
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      {dayMilestones.length > 0 && (
                        <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                          {dayCompletedCount}/{dayMilestones.length} Done
                        </span>
                      )}
                      <div className="p-1.5 rounded-lg bg-white/[0.04] text-gray-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Milestone & Topics Checklist */}
                  
                    {isExpanded && (
                      <div className="slide-up overflow-hidden border-t border-white/[0.06] bg-slate-950/40 p-5 md:p-6 space-y-5">
                        {/* Interactive Milestone Checkboxes */}
                        {dayMilestones.length > 0 && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                                Actionable Study Checklist
                              </h5>
                              <span className="text-[11px] text-cyan-400 font-medium">Click milestone to complete</span>
                            </div>

                            <div className="space-y-2">
                              {dayMilestones.map((m, mIdx) => {
                                const milestoneKey = `${idx}-${mIdx}`;
                                const isChecked = !!completedMilestones[milestoneKey];

                                return (
                                  <div
                                    key={mIdx}
                                    onClick={() => toggleMilestone(milestoneKey)}
                                    className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                                      isChecked 
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-gray-400' 
                                        : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-gray-200'
                                    }`}
                                  >
                                    {isChecked ? (
                                      <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    ) : (
                                      <Square className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className={`text-xs md:text-sm leading-relaxed ${isChecked ? 'line-through opacity-70' : ''}`}>
                                      {m}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Focus Topics: Prominent AI Topic Master Deck */}
                        {day.topics && day.topics.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <div className="bg-gradient-to-r from-violet-900/30 via-indigo-900/20 to-cyan-900/20 border border-violet-500/30 rounded-2xl p-4 md:p-5 relative overflow-hidden">
                              {/* Ambient glow */}
                              <div className="absolute right-0 top-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30 flex-shrink-0">
                                    <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                                  </div>
                                  <div>
                                    <h5 className="text-xs sm:text-sm font-bold text-white font-heading uppercase tracking-wider">
                                      AI Topic Master • Deep-Dive Coaching
                                    </h5>
                                    <p className="text-[11px] text-gray-300">
                                      Tap any topic below to open the dedicated RTU Professor lesson & interactive chat
                                    </p>
                                  </div>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 self-start sm:self-auto">
                                  <span>{day.topics.length} Syllabus Modules</span>
                                </span>
                              </div>

                              {/* Large Prominent Topic Cards Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                                {day.topics.map((t, tIdx) => (
                                  <button
                                    key={tIdx}onClick={() => onOpenTutor && onOpenTutor(t, day.focusUnit)}
                                    className="p-3.5 sm:p-4 rounded-xl bg-[#080d1e]/90 hover:bg-violet-950/40 border border-violet-500/25 hover:border-violet-400/60 shadow-lg shadow-black/40 text-left transition-all flex items-center justify-between gap-3 group cursor-pointer"
                                    title={`Click to open AI Topic Tutor for "${t}"`}
                                  >
                                    <div className="flex items-start gap-3 min-w-0">
                                      <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0 mt-0.5 group-hover:bg-violet-500 group-hover:text-white transition-all">
                                        <BookOpen className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug break-words">
                                          {t}
                                        </div>
                                        <div className="text-[10px] text-gray-400 flex items-center gap-1.5 mt-0.5">
                                          <span>Unit {day.focusUnit}</span>
                                          <span>•</span>
                                          <span className="text-violet-400 font-medium">Part A/B/C Blueprint</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-violet-500/10 group-hover:bg-cyan-500/20 text-violet-300 group-hover:text-cyan-300 border border-violet-500/20 group-hover:border-cyan-500/30 text-[10px] font-bold flex-shrink-0 transition-all">
                                      <Sparkles className="w-3 h-3 text-cyan-400" />
                                      <span className="hidden sm:inline">Learn</span>
                                      <span>→</span>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* RTU Exam Tip Box */}
                        <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                          <div className="text-xs text-gray-300 leading-relaxed">
                            <span className="font-bold text-violet-300">RTU Exam Blueprint Note:</span> Unit {day.focusUnit} accounts for up to <span className="font-bold text-white">17 marks</span> (2 Marks in Part A compulsory + 5 Marks in Part B + 10 Marks in Part C). Mastering this unit secures your 3-Unit Minimum Baseline.
                          </div>
                        </div>
                      </div>
                    )}
                  
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
