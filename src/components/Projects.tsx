import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch as GithubIcon, ExternalLink, Shield, Eye, Bot, Mail, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'FortiGate Firewall Deployment & Secure Network Architecture',
    icon: <Shield className="w-6 h-6" />,
    color: 'cyan',
    tags: ['FortiGate', 'IPS', 'VPN', 'NAT', 'Network Security'],
    description: 'Enterprise-grade firewall deployment with comprehensive security policies, NAT configuration, SSL/IPsec VPN, IPS engine, web filtering, and traffic monitoring for secure network segmentation.',
    features: [
      'Firewall policy management & NAT configuration',
      'SSL/IPsec VPN setup for remote access',
      'IPS & web filtering rule management',
      'Traffic monitoring and alerting',
      'Secure network segmentation design',
    ],
    gradient: 'from-cyan-500/10 to-blue-500/5',
    border: 'border-cyan-500/30',
  },
  {
    title: 'SentinelOne EDR/XDR Security Operations',
    icon: <Eye className="w-6 h-6" />,
    color: 'purple',
    tags: ['SentinelOne', 'EDR', 'XDR', 'Incident Response', 'Threat Detection'],
    description: 'End-to-end endpoint security operations covering monitoring, threat detection, incident response lifecycle, endpoint isolation, and root cause analysis in enterprise environments.',
    features: [
      'Enterprise endpoint monitoring dashboard',
      'Automated threat detection & alerting',
      'Incident response lifecycle management',
      'Endpoint isolation & quarantine workflows',
      'Root cause analysis & threat investigation',
    ],
    gradient: 'from-purple-500/10 to-violet-500/5',
    border: 'border-purple-500/30',
  },
  {
    title: 'Infra & Cybersecurity Support Chatbot',
    icon: <Bot className="w-6 h-6" />,
    color: 'green',
    tags: ['AI', 'Python', 'IT Automation', 'Security'],
    description: 'AI-powered IT support and cybersecurity troubleshooting assistant that automates L1/L2 support workflows, integrates knowledge base, and provides smart security guidance.',
    features: [
      'AI-powered troubleshooting assistant',
      'IT support workflow automation',
      'Security troubleshooting decision trees',
      'Knowledge base integration & retrieval',
      'Smart contextual response system',
    ],
    gradient: 'from-green-500/10 to-emerald-500/5',
    border: 'border-green-500/30',
  },
  {
    title: 'Phishing Email Analyzer',
    icon: <Mail className="w-6 h-6" />,
    color: 'pink',
    tags: ['Python', 'OSINT', 'IOC', 'Email Security', 'CTI'],
    description: 'Comprehensive phishing email analysis tool that performs header inspection, URL inspection, attachment scanning, IOC extraction, and risk scoring for threat intelligence enrichment.',
    features: [
      'Email header forensic analysis',
      'URL reputation inspection & scanning',
      'Malicious attachment detection',
      'Automated risk scoring engine',
      'IOC extraction & CTI enrichment',
    ],
    gradient: 'from-pink-500/10 to-rose-500/5',
    border: 'border-pink-500/30',
  },
];

const colorMap = {
  cyan: { tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: 'text-cyan-400 bg-cyan-500/10', bullet: 'text-cyan-400' },
  purple: { tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: 'text-purple-400 bg-purple-500/10', bullet: 'text-purple-400' },
  green: { tag: 'bg-green-500/10 text-green-400 border-green-500/20', icon: 'text-green-400 bg-green-500/10', bullet: 'text-green-400' },
  pink: { tag: 'bg-pink-500/10 text-pink-400 border-pink-500/20', icon: 'text-pink-400 bg-pink-500/10', bullet: 'text-pink-400' },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 04. BUILT THINGS'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => {
            const c = colorMap[proj.color as keyof typeof colorMap];
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className={`glass rounded-2xl border ${proj.border} overflow-hidden group cursor-default`}
              >
                {/* Top bar */}
                <div className={`bg-gradient-to-r ${proj.gradient} px-6 pt-6 pb-4`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${c.icon}`}>
                      {proj.icon}
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 glass rounded-lg hover:border-white/20 transition-colors"
                        title="GitHub"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-400 hover:text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 glass rounded-lg hover:border-white/20 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white leading-snug mb-3">{proj.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map(tag => (
                      <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-mono border ${c.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 pb-6 pt-4">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                  <div className="space-y-1.5">
                    {proj.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-400">
                        <ChevronRight className={`w-4 h-4 ${c.bullet} shrink-0`} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
