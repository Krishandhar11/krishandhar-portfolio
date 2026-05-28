import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

const loadingLines = [
  'Initializing secure environment...',
  'Loading cybersecurity modules...',
  'Establishing encrypted connection...',
  'Authenticating credentials...',
  'Portfolio ready.',
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setLineIndex(i => {
        if (i < loadingLines.length - 1) return i + 1;
        clearInterval(lineInterval);
        return i;
      });
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + 4;
      });
    }, 60);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center"
        >
          <div className="cyber-grid absolute inset-0 opacity-30" />

          <div className="relative z-10 w-80 text-center">
            {/* Logo */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Shield className="w-16 h-16 text-cyan-500" />
                <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20" />
              </div>
            </motion.div>

            <h1 className="font-display text-2xl font-bold neon-text mb-1">KRISHANDHAR SHARMA</h1>
            <p className="font-mono text-xs text-slate-500 mb-8 tracking-widest">PORTFOLIO v2.0 — INITIALIZING</p>

            {/* Terminal output */}
            <div className="glass rounded-xl p-4 mb-4 text-left border border-cyan-500/20">
              {loadingLines.slice(0, lineIndex + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`font-mono text-xs mb-1 ${i === lineIndex ? 'text-cyan-400' : 'text-slate-600'}`}
                >
                  <span className="text-green-500 mr-2">{'>'}</span>
                  {line}
                  {i === lineIndex && <span className="cursor-blink ml-1">_</span>}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full loading-bar rounded-full"
              />
            </div>
            <p className="font-mono text-xs text-slate-600 mt-2">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
