import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Network, Server, Target, Cpu, Lock } from 'lucide-react';

const passions = [
  { icon: <Shield className="w-5 h-5" />, label: 'SOC Operations', color: 'text-cyan-400' },
  { icon: <Network className="w-5 h-5" />, label: 'Network Architecture', color: 'text-purple-400' },
  { icon: <Target className="w-5 h-5" />, label: 'Threat Detection', color: 'text-green-400' },
  { icon: <Server className="w-5 h-5" />, label: 'Infra Automation', color: 'text-pink-400' },
  { icon: <Cpu className="w-5 h-5" />, label: 'EDR/XDR Operations', color: 'text-yellow-400' },
  { icon: <Lock className="w-5 h-5" />, label: 'Secure Architecture', color: 'text-orange-400' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 01. WHO AM I'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 hover-glow">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm <span className="text-cyan-400 font-semibold">Krishandhar Sharma</span>, a Senior Infrastructure & Network Security Engineer with hands-on expertise in enterprise-grade cybersecurity operations, network infrastructure management, and endpoint security.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-glow">
              <p className="text-slate-400 leading-relaxed">
                At <span className="text-purple-400 font-medium">Choice Finserv Private Limited</span>, I manage IT infrastructure across <span className="text-cyan-400 font-medium">75+ branches</span>, operate FortiGate firewalls, lead SentinelOne EDR/XDR operations, and drive IS audit compliance — building resilient security postures for enterprise environments.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-glow">
              <p className="text-slate-400 leading-relaxed">
                My passion lies at the intersection of <span className="text-green-400 font-medium">network security</span>, <span className="text-yellow-400 font-medium">threat intelligence</span>, and <span className="text-pink-400 font-medium">infrastructure automation</span>. I'm constantly expanding my knowledge — currently pursuing advanced certifications and building cybersecurity tooling.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '75+', label: 'Branches Managed' },
                { value: '4+', label: 'Certifications' },
                { value: '2+', label: 'Years Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover-glow"
                >
                  <div className="font-display text-2xl font-bold neon-text">{stat.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Passions grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">{'>'}</span> Areas of Passion
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {passions.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/30 transition-all cursor-default"
                  >
                    <span className={p.color}>{p.icon}</span>
                    <span className="text-slate-300 text-sm font-medium">{p.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career mindset card */}
            <div className="glass rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Career Growth Mindset</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Driven by continuous learning — from CCNA fundamentals to enterprise SOC operations, FortiGate mastery, and advanced threat intelligence. Every challenge is an opportunity to level up defenses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
