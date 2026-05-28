import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Manipal University',
    period: '2025 — 2027',
    location: 'Jaipur, India',
    desc: 'Advanced studies in computer science, software engineering, database systems, and enterprise IT. Focus on networking, systems administration, and application development.',
    color: 'cyan',
  },
  {
    degree: 'Bachelor of Computer Applications — Cyber Security',
    short: 'BCA Cyber Security',
    institution: 'ICFAI University',
    period: '2022 — 2025',
    location: 'Jaipur, India',
    desc: 'Specialized undergraduate degree in cybersecurity fundamentals, ethical hacking, network security, digital forensics, and information security management.',
    color: 'purple',
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-500/30', dot: 'bg-cyan-500', badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30', icon: 'text-cyan-400' },
  purple: { border: 'border-purple-500/30', dot: 'bg-purple-500', badge: 'text-purple-400 bg-purple-500/10 border-purple-500/30', icon: 'text-purple-400' },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 08. ACADEMIA'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-600 to-transparent opacity-30" />
          <div className="space-y-8">
            {education.map((edu, i) => {
              const c = colorMap[edu.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.2 }}
                  className="relative flex gap-8"
                >
                  <div className="relative flex-shrink-0 flex items-start pt-6">
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-dark-900 z-10 shadow-lg`} />
                  </div>
                  <div className={`flex-1 glass rounded-2xl p-6 border ${c.border} hover-glow`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap className={`w-5 h-5 ${c.icon}`} />
                          <h3 className="font-display text-xl font-bold text-white">{edu.short}</h3>
                        </div>
                        <p className="text-slate-300 font-medium">{edu.degree}</p>
                        <p className={`font-semibold text-sm mt-1 ${c.icon}`}>{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${c.badge}`}>
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
