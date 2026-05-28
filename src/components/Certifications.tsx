import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, BookOpen } from 'lucide-react';

const certs = [
  {
    name: 'Certified Ethical Hacker',
    short: 'CEH',
    issuer: 'EC-Council',
    color: 'from-red-500/20 to-orange-500/10',
    border: 'border-red-500/30',
    badge: 'bg-red-500/10 text-red-400 border-red-500/30',
    icon: '🛡️',
    certified: true,
    description: 'Advanced ethical hacking and penetration testing methodologies for enterprise environments.',
  },
  {
    name: 'Certified in Cybersecurity',
    short: 'CC',
    issuer: 'ISC2',
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: '🔐',
    certified: true,
    description: 'Foundational cybersecurity principles, incident response, access control, and network security.',
  },
  {
    name: 'FortiGate Operator',
    short: 'FCOA',
    issuer: 'Fortinet',
    color: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/30',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: '🔥',
    certified: true,
    description: 'FortiGate firewall operations including policy management, VPN, IPS, and web filtering.',
  },
  {
    name: 'CCNA Trained',
    short: 'CCNA',
    issuer: 'Cisco',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/30',
    badge: 'bg-green-500/10 text-green-400 border-green-500/30',
    icon: '🌐',
    certified: false,
    description: 'Comprehensive training in switching, VLAN configuration, routing protocols, and network troubleshooting.',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 05. CREDENTIALS'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative glass rounded-2xl p-6 border ${cert.border} cursor-default overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-50 rounded-2xl`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/3 to-transparent rounded-2xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{cert.icon}</div>

                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md ${cert.badge} font-mono text-xs font-bold mb-3 border ${cert.border}`}>
                  <Award className="w-3 h-3" />
                  {cert.short}
                </div>

                <h3 className="font-display text-base font-bold text-white mb-1 leading-tight">{cert.name}</h3>
                <p className="font-mono text-xs text-slate-500 mb-3">{cert.issuer}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{cert.description}</p>

                {cert.certified ? (
                  <div className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Certified & Active
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    Trained — In Progress
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
