import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Network, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    color: 'cyan',
    skills: [
      'FortiGate Firewall', 'SentinelOne EDR/XDR', 'SOC Operations',
      'Threat Hunting', 'Incident Response', 'IOC Analysis',
      'IPS/IDS', 'Vulnerability Management', 'Security Audits', 'CTI Enrichment',
    ],
  },
  {
    title: 'Networking',
    icon: <Network className="w-5 h-5" />,
    color: 'purple',
    skills: [
      'CCNA Concepts', 'VLANs', 'Routing & Switching',
      'VPN (SSL/IPsec)', 'SD-WAN', 'LAN/WAN',
      'TCP/IP', 'DNS/DHCP', 'Subnetting', 'Network Troubleshooting',
    ],
  },
  {
    title: 'Infrastructure',
    icon: <Server className="w-5 h-5" />,
    color: 'green',
    skills: [
      'Active Directory', 'Windows Server', 'NAS Storage',
      'IT Operations', 'Patch Management', 'Endpoint Security', 'AWS (Fundamentals)',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench className="w-5 h-5" />,
    color: 'pink',
    skills: [
      'FortiGate', 'SentinelOne', 'Wireshark',
      'Nmap', 'Splunk', 'IOC & CTI Platforms',
    ],
  },
];

const colorMap = {
  cyan: {
    border: 'border-cyan-500/20',
    header: 'bg-cyan-500/10 text-cyan-400',
    tag: 'bg-cyan-500/8 border-cyan-500/20 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/15',
  },
  purple: {
    border: 'border-purple-500/20',
    header: 'bg-purple-500/10 text-purple-400',
    tag: 'bg-purple-500/8 border-purple-500/20 text-purple-300 hover:border-purple-400/50 hover:bg-purple-500/15',
  },
  green: {
    border: 'border-green-500/20',
    header: 'bg-green-500/10 text-green-400',
    tag: 'bg-green-500/8 border-green-500/20 text-green-300 hover:border-green-400/50 hover:bg-green-500/15',
  },
  pink: {
    border: 'border-pink-500/20',
    header: 'bg-pink-500/10 text-pink-400',
    tag: 'bg-pink-500/8 border-pink-500/20 text-pink-300 hover:border-pink-400/50 hover:bg-pink-500/15',
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 03. CAPABILITIES'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, ci) => {
            const c = colorMap[cat.color as keyof typeof colorMap];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15 }}
                className={`glass rounded-2xl p-6 border ${c.border} hover-glow`}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${c.header} mb-5 font-mono text-sm font-medium`}>
                  {cat.icon}
                  {cat.title}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.15 + si * 0.04 + 0.2 }}
                      whileHover={{ scale: 1.06 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 cursor-default ${c.tag}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
