import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, ShieldAlert } from 'lucide-react';

export default function MarksAtRisk({ results }) {
  const { marksAtRisk, partALoss, partBLoss, partCLoss, severityLevel } = results;

  const severityConfig = {
    critical: { icon: ShieldAlert, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30', label: 'High Risk Intervention' },
    warning: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', label: 'Moderate Risk' },
    safe: { icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'Exam Ready' },
  };

  const config = severityConfig[severityLevel] || severityConfig.warning;
  const Icon = config.icon;

  const estimatedScore = Math.max(0, 100 - marksAtRisk);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bento-card"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl border ${config.bg} ${config.border} ${config.color}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-heading">Marks at Risk</h3>
            <p className="text-[11px] text-gray-400">RTU 70/30 Pattern Marks Vulnerability</p>
          </div>
        </div>

        <span className={`${config.bg} ${config.color} border ${config.border} px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1`}>
          {config.label}
        </span>
      </div>

      {/* Big Number & Expected Score */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4 text-center">
          <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Marks at Risk</div>
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-4xl md:text-5xl font-black font-heading mt-1 ${config.color}`}
          >
            {marksAtRisk}
          </motion.div>
          <span className="text-[10px] text-gray-500">out of 100 total marks</span>
        </div>

        <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4 text-center">
          <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Projected Score</div>
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-4xl md:text-5xl font-black font-heading mt-1 ${
              estimatedScore >= 70 ? 'text-emerald-400' : estimatedScore >= 50 ? 'text-amber-400' : 'text-rose-400'
            }`}
          >
            {estimatedScore}
          </motion.div>
          <span className="text-[10px] text-cyan-400 font-semibold">
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
        <StatBox value={results.strongUnits} label="Strong Units" color="text-emerald-400" bg="bg-emerald-500/10" border="border-emerald-500/20" />
        <StatBox value={results.moderateUnits} label="Moderate" color="text-amber-400" bg="bg-amber-500/10" border="border-amber-500/20" />
        <StatBox value={results.weakUnits} label="Critical Gaps" color="text-rose-400" bg="bg-rose-500/10" border="border-rose-500/20" />
      </div>
    </motion.div>
  );
}

function PartBar({ label, lost, total, color }) {
  const safePercent = Math.max(0, Math.min(100, ((total - lost) / total) * 100));
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-gray-300 font-medium text-[11px]">{label}</span>
        <span className="text-gray-400 font-mono text-[11px]">
          <span className="text-rose-400 font-bold">-{lost}</span> / {total}M
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-800 border border-white/[0.04] overflow-hidden">
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
      <div className="text-[10px] text-gray-400 font-medium mt-0.5">{label}</div>
    </div>
  );
}
