import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight, Award } from 'lucide-react';

const experiences = [
  {
    company: 'Choice Finserv Private Limited',
    role: 'Senior Infrastructure & Network Security Engineer',
    period: 'Aug 2025 — Present',
    location: 'Jaipur, India',
    color: 'cyan',
    responsibilities: [
      'Managed IT infrastructure support for branches and Head Office',
      'Configured and managed FortiGate Firewalls — policies, NAT, VPN, IPS, web filtering',
      'Operated SentinelOne EDR/XDR: endpoint monitoring, threat detection & response',
      'Led incident response investigations and threat analysis workflows',
      'Administered Active Directory, Windows Servers, and user lifecycle management',
      'Performed IS audit support and compliance documentation activities',
      'Managed LAN/WAN and SD-WAN infrastructure across distributed offices',
      'Delivered L1/L2 infrastructure and security support to end users',
      'Conducted patch management, vulnerability assessment, and mitigation',
      'Maintained IT documentation, runbooks, and SOC process guides',
    ],
  },
  {
    company: 'Institute of Network Solutions',
    role: 'CCNA Networking Intern',
    promoted: false,
    period: 'Internship',
    location: 'Jaipur, Rajasthan',
    color: 'purple',
    responsibilities: [
      'Implemented VLANs and inter-VLAN routing configurations',
      'Configured routing and switching protocols on Cisco devices',
      'Set up and documented LAN topologies and structured cabling',
      'Performed RJ45 crimping and physical network infrastructure work',
      'Executed network troubleshooting on live and lab environments',
      'Applied IP addressing, subnetting, and CIDR calculations',
    ],
  },
];

const colorMap = {
  cyan: {
    border: 'border-cyan-500/30',
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
  purple: {
    border: 'border-purple-500/30',
    dot: 'bg-purple-500',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 02. CAREER PATH'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-600 to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const c = colorMap[exp.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                  className="relative flex gap-6 md:gap-10"
                >
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${c.dot} shadow-lg ${c.glow} ring-4 ring-dark-900 mt-6 z-10`} />
                  </div>

                  <div className={`flex-1 glass rounded-2xl p-6 border ${c.border} hover-glow`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className={`w-4 h-4 ${c.icon}`} />
                          <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        {exp.promoted && (
                          <div className="flex items-center gap-1.5 mb-2">
                            <Award className="w-3.5 h-3.5 text-yellow-400" />
                            <span className="font-mono text-xs text-yellow-400">{exp.prev} — Promoted on performance</span>
                          </div>
                        )}
                        <p className={`font-semibold text-sm ${c.icon}`}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${c.badge}`}>
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {exp.responsibilities.map((r, ri) => (
                        <motion.div
                          key={ri}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: idx * 0.2 + ri * 0.05 + 0.4 }}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <ChevronRight className={`w-4 h-4 ${c.icon} shrink-0 mt-0.5`} />
                          <span>{r}</span>
                        </motion.div>
                      ))}
                    </div>
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
