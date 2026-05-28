import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Link as LinkedinIcon, GitBranch as GithubIcon, Mail, ChevronDown, Terminal } from 'lucide-react';

const typingLines = [
  'Senior Infrastructure Engineer',
  'Network Security Specialist',
  'FortiGate Firewall Expert',
  'SentinelOne EDR Operator',
  'SOC Operations Engineer',
  'Threat Hunter & Analyst',
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const current = typingLines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setLineIndex(l => (l + 1) % typingLines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  const ctaButtons = [
    { label: 'Download Resume', icon: <Download className="w-4 h-4" />, href: '#resume', primary: true },
    { label: 'LinkedIn', icon: <LinkedinIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/in/krishandhar-sharma/', primary: false },
    { label: 'GitHub', icon: <GithubIcon className="w-4 h-4" />, href: 'https://github.com/Krishandhar11', primary: false },
    { label: 'Contact Me', icon: <Mail className="w-4 h-4" />, href: '#contact', primary: false },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest">SYSTEM ONLINE — AVAILABLE FOR OPPORTUNITIES</span>
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl sm:text-7xl font-black mb-4 tracking-wider"
        >
          <span className="block text-white">KRISHANDHAR</span>
          <span className="block neon-text">SHARMA</span>
        </motion.h1>

        {/* Terminal typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="glass border border-cyan-500/20 rounded-xl p-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3 border-b border-cyan-500/10 pb-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-1.5 ml-2">
              <Terminal className="w-3 h-3 text-cyan-500" />
              <span className="font-mono text-xs text-slate-500">krishandhar@portfolio:~$</span>
            </div>
          </div>
          <p className="font-mono text-sm text-slate-400 mb-1">
            <span className="text-cyan-400">role</span> = "
            <span className="text-green-400">{displayed}</span>
            <span className="cursor-blink text-cyan-400">|</span>"
          </p>
          <p className="font-mono text-xs text-slate-600">
            <span className="text-purple-400">tagline</span> = "Building secure enterprise infrastructure, defending networks & automating cybersecurity ops"
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building secure enterprise infrastructure, defending networks, and automating cybersecurity operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {ctaButtons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith('http') ? '_blank' : undefined}
              rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-medium transition-all duration-300 btn-glow ${
                btn.primary
                  ? 'bg-cyan-500 text-dark-900 hover:bg-cyan-400 shadow-lg shadow-cyan-500/30'
                  : 'glass border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300'
              }`}
            >
              {btn.icon}
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyan-500/50"
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />
    </section>
  );
}
