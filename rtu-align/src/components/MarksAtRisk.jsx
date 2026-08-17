import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ShieldCheck, ShieldAlert, Info, X } from 'lucide-react';

export default function MarksAtRisk({ results }) {
  const { marksAtRisk, partALoss, partBLoss, partCLoss, severityLevel } = results;
  const [showPatternInfo, setShowPatternInfo] = useState(false);

  const severityConfig = {
    critical: { icon: ShieldAlert, color: 'text-rose-300', bg: 'bg-rose-500/10', border: 'border-rose-500/30', label: 'High Risk Intervention' },
    warning: { icon: AlertTriangle, color: 'text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/30', label: 'Moderate Risk' },
    safe: { icon: ShieldCheck, color: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'Exam Ready' },
  };

  const config = severityConfig[severityLevel] || severityConfig.warning;
  const Icon = config.icon;

  const estimatedScore = Math.max(0, 100 - marksAtRisk);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bento-card relative"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl border ${config.bg} ${config.border} ${config.color}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-white font-heading">Marks at Risk</h3>
              <button
                onClick={() => setShowPatternInfo(!showPatternInfo)}
                className="text-slate-400 hover:text-cyan-300 p-0.5 rounded focus-ring"
                title="View RTU 70/30 Scheme Explanation"
                aria-label="View RTU 70/30 Scheme Explanation"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[11px] text-slate-400">RTU 70/30 Pattern Marks Vulnerability</p>
          </div>
        </div>

        <span className={`${config.bg} ${config.color} border ${config.border} px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1`}>
          {config.label}
        </span>
      </div>

      {/* Info Popover on RTU 70/30 Blueprint */}
      <AnimatePresence>
        {showPatternInfo && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-3.5 my-2 rounded-xl bg-slate-950/90 border border-cyan-500/30 text-xs text-slate-300 space-y-1.5 shadow-xl relative"
          >
            <button
              onClick={() => setShowPatternInfo(false)}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="font-bold text-cyan-300 font-heading">RTU Examination Blueprint:</div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              • <strong>Part A (20M):</strong> 10 compulsory questions (2 per unit, 2M each).<br/>
              • <strong>Part B (30M):</strong> 6 derivations/analytical questions (5M each).<br/>
              • <strong>Part C (50M):</strong> 5 design/numerical problems (10M each).
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Big Number & Expected Score */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4 text-center">
          <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Marks at Risk</div>
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-4xl md:text-5xl font-black font-heading mt-1 ${config.color}`}
          >
            {marksAtRisk}
          </motion.div>
          <span className="text-[10px] text-slate-500">out of 100 total marks</span>
        </div>

        <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4 text-center">
          <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Projected Score</div>
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-4xl md:text-5xl font-black font-heading mt-1 ${
              estimatedScore >= 70 ? 'text-emerald-300' : estimatedScore >= 50 ? 'text-amber-300' : 'text-rose-300'
            }`}
          >
            {estimatedScore}
          </motion.div>
          <span className="text-[10px] text-cyan-300 font-semibold">
            {estimatedScore >= 53 ? '✓ Passes 3-Unit Rule' : '⚠ Below 53M Target'}
          </span>
        </div>
      </div>

      {/* RTU Part Breakdown */}
      <div className="space-y-3 pt-2">
        <PartBar label="Part A (10 × 2M Short Questions)" lost={partALoss} total={20} color="from-blue-500 to-cyan-500" />
        <PartBar label="Part B (6 × 5M Analytical Derivations)" lost={partBLoss} total={30} color="from-indigo-500 to-violet-500" />
        <PartBar label="Part C (5 × 10M Long / Numerical)" lost={partCLoss} total={50} color="from-violet-500 to-rose-500" />
      </div>

      {/* Unit Status Chips */}
      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.06] mt-4">
        <StatBox value={results.strongUnits} label="Strong Units" color="text-emerald-300" bg="bg-emerald-500/10" border="border-emerald-500/20" />
        <StatBox value={results.moderateUnits} label="Moderate" color="text-amber-300" bg="bg-amber-500/10" border="border-amber-500/20" />
        <StatBox value={results.weakUnits} label="Critical Gaps" color="text-rose-300" bg="bg-rose-500/10" border="border-rose-500/20" />
      </div>
    </motion.div>
  );
}

function PartBar({ label, lost, total, color }) {
  const safePercent = Math.max(0, Math.min(100, ((total - lost) / total) * 100));
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-slate-300 font-medium text-[11px]">{label}</span>
        <span className="text-slate-400 font-mono text-[11px]">
          <span className="text-rose-400 font-bold">-{lost}</span> / {total}M
        </span>
      </div>
      <div 
        className="h-2 rounded-full bg-slate-800 border border-white/[0.04] overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(safePercent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${safePercent}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function StatBox({ value, label, color, bg, border }) {
  return (
    <div className={`${bg} border ${border} rounded-xl p-2.5 text-center`}>
      <div className={`text-xl font-black font-heading ${color}`}>{value}</div>
      <div className="text-[10px] text-slate-400 font-medium mt-0.5">{label}</div>
    </div>
  );
}

