import { GraduationCap, ArrowLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ breadcrumb, onBack, canGoBack }) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-[#060913]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 md:px-8 py-3.5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Back + Brand Logo */}
        <div className="flex items-center gap-3">
          {canGoBack && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="p-2 min-w-[40px] min-h-[40px] rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus-ring flex items-center justify-center"
              title="Go Back"
              aria-label="Go to previous step"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          )}

          <div 
            className="flex items-center gap-3 cursor-pointer focus-ring rounded-xl p-1" 
            onClick={canGoBack ? onBack : undefined}
            tabIndex={canGoBack ? 0 : undefined}
            onKeyDown={(e) => {
              if (canGoBack && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onBack();
              }
            }}
            role={canGoBack ? 'button' : undefined}
            aria-label="RTU-Align Brand Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 p-0.5 shadow-lg shadow-blue-500/25 flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0f1e]/90 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white tracking-tight font-heading">RTU-Align</h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  2026 Scheme
                </span>
              </div>
              <p className="text-[11px] text-slate-400 -mt-0.5 font-normal">Rajasthan Technical University Sprint Engine</p>
            </div>
          </div>
        </div>

        {/* Center: Dynamic Breadcrumbs */}
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="hidden md:flex items-center gap-2 text-xs bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-xl" aria-label="Breadcrumb navigation">
            {breadcrumb.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3 h-3 text-slate-500" />}
                <span className={idx === breadcrumb.length - 1 ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                  {item}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* Right: Automated Gemini AI Engine Badge */}
        <div className="flex items-center gap-2.5">
          <div className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Gemini AI Active</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-node"></span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

