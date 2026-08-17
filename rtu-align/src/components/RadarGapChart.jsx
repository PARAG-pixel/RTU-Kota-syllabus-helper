import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Activity, Table, PieChart, Flame } from 'lucide-react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-3 text-xs border-white/20 shadow-2xl">
        <p className="text-white font-bold">{data.fullTitle}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-slate-400">Diagnostic Mastery:</span>
          <span className={`font-mono font-bold ${
            data.score >= 80 ? 'text-emerald-300' : data.score >= 40 ? 'text-amber-300' : 'text-rose-300'
          }`}>
            {data.score}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default function RadarGapChart({ results }) {
  const [viewMode, setViewMode] = useState('radar'); // 'radar' | 'table'

  const chartData = results.unitDetails.map(u => ({
    unit: `U${u.unit}`,
    fullTitle: `Unit ${u.unit}: ${u.title}`,
    score: u.score,
    fullMark: 100,
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bento-card"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-heading">5-Unit Mastery Radar</h3>
            <p className="text-[11px] text-slate-400">RTU Syllabus Unit-by-Unit Performance Profile</p>
          </div>
        </div>

        {/* View Mode Switcher (Accessible A11y Requirement) */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-white/[0.08]">
          <button
            onClick={() => setViewMode('radar')}
            className={`p-1.5 rounded-md text-xs transition-colors focus-ring ${
              viewMode === 'radar' ? 'bg-violet-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
            title="Switch to Radar Polygon View"
            aria-label="Radar Polygon View"
          >
            <PieChart className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded-md text-xs transition-colors focus-ring ${
              viewMode === 'table' ? 'bg-violet-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
            title="Switch to Accessible Data Table View"
            aria-label="Accessible Data Table View"
          >
            <Table className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      
      {/* Dynamic View: Radar Chart or Accessible Data Table */}
      <div className="h-[280px] w-full my-2 flex items-center justify-center">
        {viewMode === 'radar' ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="72%">
              <PolarGrid stroke="rgba(255,255,255,0.12)" />
              <PolarAngleAxis 
                dataKey="unit" 
                tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono, Inter' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fill: '#94a3b8', fontSize: 9 }}
                axisLine={false}
              />
              <Radar
                name="Mastery"
                dataKey="score"
                stroke="#8b5cf6"
                fill="url(#radarGradient)"
                fillOpacity={0.65}
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#0a0f1e' }}
                animationDuration={1000}
              />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.85} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.25} />
                </radialGradient>
              </defs>
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          /* Accessible Data Table View per UI-UX Pro Max WCAG Guidelines */
          <div className="w-full h-full overflow-y-auto pr-1">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] text-slate-400">
                  <th className="py-2 font-semibold">Unit</th>
                  <th className="py-2 font-semibold">Syllabus Module</th>
                  <th className="py-2 font-semibold text-center">Score</th>
                  <th className="py-2 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {results.unitDetails.map(u => (
                  <tr key={u.unit} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 font-mono font-bold text-cyan-300">U{u.unit}</td>
                    <td className="py-2.5 text-slate-200 truncate max-w-[140px]" title={u.title}>
                      <div className="truncate font-medium">{u.title}</div>
                      {u.highYield <= 2 && (
                        <span className="text-[10px] text-rose-300 flex items-center gap-0.5 mt-0.5">
                          <Flame className="w-2.5 h-2.5" /> High Yield
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 text-center font-mono font-bold">
                      <span className={u.status === 'strong' ? 'text-emerald-300' : u.status === 'moderate' ? 'text-amber-300' : 'text-rose-300'}>
                        {u.score}%
                      </span>
                    </td>
                    <td className="py-2.5 text-right">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        u.status === 'strong' ? 'badge-success' : u.status === 'moderate' ? 'badge-warning' : 'badge-critical'
                      }`}>
                        {u.status === 'strong' ? 'Strong' : u.status === 'moderate' ? 'Moderate' : 'Critical'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Unit Badges Breakdown */}
      <div className="grid grid-cols-5 gap-1.5 pt-3 border-t border-white/[0.06]">
        {results.unitDetails.map(u => (
          <div key={u.unit} className="p-2 rounded-xl bg-white/[0.03] text-center border border-white/[0.04]">
            <span className="text-[10px] font-mono text-slate-400 block">U{u.unit}</span>
            <div className={`text-sm font-black font-mono mt-0.5 ${
              u.status === 'strong' ? 'text-emerald-300' : 
              u.status === 'moderate' ? 'text-amber-300' : 
              'text-rose-300'
            }`}>
              {u.score}%
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

