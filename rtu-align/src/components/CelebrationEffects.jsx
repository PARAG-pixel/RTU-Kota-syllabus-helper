import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Disc3, X } from 'lucide-react';

/**
 * Trigger party popper confetti animation from a coordinate or center screen
 */
export function triggerPartyPopper(origin = { x: 0.5, y: 0.6 }) {
  try {
    // 1st primary burst
    confetti({
      particleCount: 55,
      spread: 70,
      origin,
      colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'],
      disableForReducedMotion: true,
      zIndex: 9999,
    });

    // 2nd delayed sparkling stars burst
    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: Math.max(0, origin.x - 0.15), y: origin.y },
        shapes: ['star', 'circle'],
        colors: ['#fbbf24', '#34d399', '#60a5fa'],
        zIndex: 9999,
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: Math.min(1, origin.x + 0.15), y: origin.y },
        shapes: ['star', 'circle'],
        colors: ['#a78bfa', '#f472b6', '#38bdf8'],
        zIndex: 9999,
      });
    }, 120);
  } catch (err) {
    console.error('Confetti trigger error:', err);
  }
}

/**
 * Animated DJ Disco Ball Overlay when a complete Unit or significant milestone streak is mastered
 */
export function DjBallOverlay({ isOpen, unitTitle = 'Unit Mastery', onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti bursts from both bottom corners towards center
      triggerPartyPopper({ x: 0.5, y: 0.4 });
      
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden pointer-events-auto">
        {/* Backdrop Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Ambient Pulsing Spotlights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="w-[650px] h-[650px] opacity-35 bg-gradient-to-tr from-cyan-500/30 via-violet-500/30 to-amber-500/30 blur-3xl rounded-full"
          />
        </div>

        {/* Celebratory Modal Card */}
        <motion.div
          initial={{ scale: 0.3, y: -80, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative z-10 max-w-sm w-full glass-card p-6 md:p-8 border-violet-500/40 text-center shadow-2xl flex flex-col items-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            title="Close celebration"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Hanging Wire from Ceiling */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-slate-500 to-slate-300 -mt-8 mb-1 opacity-70" />

          {/* Rolling / Rotating Metallic DJ Disco Ball */}
          <div className="relative my-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="w-24 h-24 rounded-full disco-ball disco-facet relative flex items-center justify-center shadow-2xl shadow-violet-500/50 border border-white/60"
            >
              {/* Core light reflection */}
              <div className="w-6 h-6 rounded-full bg-white/70 blur-[2px]" />
            </motion.div>

            {/* Rotating Light Ray Beams */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute -inset-4 rounded-full pointer-events-none border-2 border-dashed border-cyan-400/40 animate-pulse"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute -inset-8 rounded-full pointer-events-none border border-violet-400/30"
            />
          </div>

          {/* Badge & Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 space-y-2"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-violet-500/20 text-amber-300 border border-amber-500/30 shadow-lg">
              <Disc3 className="w-3.5 h-3.5 animate-spin text-amber-400" />
              <span>UNIT COMPLETED!</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white font-heading tracking-tight leading-snug">
              {unitTitle}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed px-2">
              All revision milestones checked off! You unlocked critical exam points for this syllabus module.
            </p>
          </motion.div>

          {/* Audio Visualizer Waves Indicator */}
          <div className="flex items-center justify-center gap-1 mt-5 h-6">
            {[40, 90, 60, 100, 75, 45, 85, 30].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: ['20%', `${h}%`, '30%'] }}
                transition={{ repeat: Infinity, duration: 0.6 + i * 0.1, ease: 'easeInOut' }}
                className="w-1 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full"
              />
            ))}
          </div>

          <button
            onClick={onClose}
            className="btn-primary w-full mt-6 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-amber-300" />
            <span>Keep The Momentum Going</span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
