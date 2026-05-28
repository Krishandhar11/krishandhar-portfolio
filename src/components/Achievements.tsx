import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Cpu, Eye, BarChart3, Award, Target } from 'lucide-react';

const achievements = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    value: 1,
    suffix: '.5+',
    label: 'Years in Enterprise SecOps',
    desc: 'Hands-on enterprise-grade cybersecurity and infrastructure operations experience',
    color: 'cyan',
  },
  {
    icon: <Award className="w-7 h-7" />,
    value: 1,
    suffix: '',
    label: 'Promoted to Senior Engineer',
    desc: 'Promoted from IT Infrastructure Engineer to Senior Infrastructure & Network Security Engineer based on performance',
    color: 'yellow',
    isText: true,
    textVal: '↑ Promoted',
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    value: 2,
    suffix: '+',
    label: 'Enterprise Security Platforms',
    desc: 'Managed enterprise firewall (FortiGate) and endpoint security (SentinelOne) operations at scale',
    color: 'green',
  },
  {
    icon: <Eye className="w-7 h-7" />,
    value: 100,
    suffix: '%',
    label: 'Endpoint Visibility',
    desc: 'Improved endpoint security monitoring and threat detection coverage across the organization',
    color: 'pink',
  },
  {
    icon: <Target className="w-7 h-7" />,
    value: 5,
    suffix: '%',
    label: 'TryHackMe Top 5%',
    desc: 'Ranked in the top 5% of global users on TryHackMe — active threat hunting and CTF practice',
    color: 'purple',
    prefix: 'Top ',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    value: 10,
    suffix: '+',
    label: 'Certifications Earned',
    desc: 'CEH, ISC2 CC, FortiGate Operator, and CCNA training completed',
    color: 'orange',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  cyan:   { border: 'border-cyan-500/20',   bg: 'bg-cyan-500/10',   text: 'text-cyan-400',   glow: 'shadow-cyan-500/10' },
  purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/10' },
  green:  { border: 'border-green-500/20',  bg: 'bg-green-500/10',  text: 'text-green-400',  glow: 'shadow-green-500/10' },
  pink:   { border: 'border-pink-500/20',   bg: 'bg-pink-500/10',   text: 'text-pink-400',   glow: 'shadow-pink-500/10' },
  yellow: { border: 'border-yellow-500/20', bg: 'bg-yellow-500/10', text: 'text-yellow-400', glow: 'shadow-yellow-500/10' },
  orange: { border: 'border-orange-500/20', bg: 'bg-orange-500/10', text: 'text-orange-400', glow: 'shadow-orange-500/10' },
};

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const step = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-black counter-glow">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 06. IMPACT'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Achievements
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const c = colorMap[ach.color];
            return (
              <motion.div
                key={ach.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass rounded-2xl p-6 border ${c.border} shadow-lg ${c.glow} cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} ${c.text} mb-4`}>
                  {ach.icon}
                </div>
                <div className={`${c.text} mb-1`}>
                  {ach.isText ? (
                    <span className="font-display text-3xl font-black counter-glow">{ach.textVal}</span>
                  ) : (
                    <Counter value={ach.value} suffix={ach.suffix} prefix={ach.prefix} />
                  )}
                </div>
                <div className="font-semibold text-white text-sm mb-2">{ach.label}</div>
                <p className="text-slate-500 text-xs leading-relaxed">{ach.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
