
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Activity } from 'lucide-react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-3 text-xs border-white/20 shadow-2xl">
        <p className="text-white font-bold">{data.fullTitle}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400">Diagnostic Mastery:</span>
          <span className={`font-mono font-bold ${
            data.score >= 80 ? 'text-emerald-400' : data.score >= 40 ? 'text-amber-400' : 'text-rose-400'
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
  const chartData = results.unitDetails.map(u => ({
    unit: `Unit ${u.unit}`,
    fullTitle: `Unit ${u.unit}: ${u.title}`,
    score: u.score,
    fullMark: 100,
  }));

  return (
    <div className="slide-up bento-card">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-heading">5-Unit Mastery Radar</h3>
            <p className="text-[11px] text-gray-400">RTU Syllabus Unit-by-Unit Performance Profile</p>
          </div>
        </div>

        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
          5 Units
        </span>
      </div>
      
      {/* Radar Chart Container */}
      <div className="h-[280px] w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="72%">
            <PolarGrid stroke="rgba(255,255,255,0.09)" />
            <PolarAngleAxis 
              dataKey="unit" 
              tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 600, fontFamily: 'Inter' }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: '#64748b', fontSize: 9 }}
              axisLine={false}
            />
            <Radar
              name="Mastery"
              dataKey="score"
              stroke="#8b5cf6"
              fill="url(#radarGradient)"
              fillOpacity={0.6}
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#0a0f1e' }}
              animationDuration={1200}
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
      </div>

      {/* Unit Badges Breakdown */}
      <div className="grid grid-cols-5 gap-1.5 pt-3 border-t border-white/[0.06]">
        {results.unitDetails.map(u => (
          <div key={u.unit} className="p-2 rounded-xl bg-white/[0.03] text-center border border-white/[0.04]">
            <span className="text-[10px] font-mono text-gray-400 block">U{u.unit}</span>
            <div className={`text-sm font-black font-mono mt-0.5 ${
              u.status === 'strong' ? 'text-emerald-400' : 
              u.status === 'moderate' ? 'text-amber-400' : 
              'text-rose-400'
            }`}>
              {u.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
