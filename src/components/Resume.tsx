import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, CheckCircle, Star } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 09. DOCUMENT'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Resume
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl border border-cyan-500/20 overflow-hidden"
        >
          {/* Preview header */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/5 px-8 py-6 border-b border-cyan-500/10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Krishandhar Sharma — Resume</h3>
                  <p className="font-mono text-sm text-slate-500">Senior Infrastructure & Network Security Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
                <Star className="w-3.5 h-3.5 text-green-400 fill-green-400" />
                <span className="font-mono text-xs text-green-400 font-bold">ATS OPTIMIZED</span>
              </div>
            </div>
          </div>

          {/* Resume preview mockup */}
          <div className="p-8">
            <div className="bg-white/3 rounded-xl border border-white/5 p-6 mb-6 space-y-4">
              {/* Mock resume preview lines */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-32 h-4 bg-cyan-500/30 rounded" />
                <div className="w-24 h-3 bg-white/10 rounded" />
              </div>
              {[
                { w1: 'w-20', w2: 'w-48', w3: 'w-32' },
                { w1: 'w-24', w2: 'w-40', w3: 'w-28' },
                { w1: 'w-16', w2: 'w-52', w3: 'w-36' },
                { w1: 'w-28', w2: 'w-44', w3: 'w-24' },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`${row.w1} h-2.5 bg-purple-500/20 rounded`} />
                  <div className={`${row.w2} h-2.5 bg-white/8 rounded`} />
                  <div className={`${row.w3} h-2.5 bg-white/5 rounded`} />
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="h-2 bg-cyan-500/10 rounded" />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'ATS Friendly Format', icon: '✓' },
                { label: 'Keyword Optimized', icon: '✓' },
                { label: 'Single Page Clean Layout', icon: '✓' },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  {f.label}
                </div>
              ))}
            </div>

            {/* Download button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-dark-900 font-display font-bold text-lg tracking-wider shadow-lg shadow-cyan-500/30 btn-glow hover:shadow-cyan-500/50 transition-all"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD RESUME
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
