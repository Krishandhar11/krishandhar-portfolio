import { motion } from 'framer-motion';
import { Shield, Heart, Link as LinkedinIcon, GitBranch as GithubIcon, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-12 px-4 border-t border-cyan-500/10">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="font-display font-bold text-xl neon-text">KS</span>
            </div>
            <p className="font-display text-lg font-bold text-white tracking-wider mb-1">
              Securing Infrastructure.
            </p>
            <p className="font-display text-lg font-bold neon-text tracking-wider mb-1">
              Defending Networks.
            </p>
            <p className="font-display text-lg font-bold text-purple-400 tracking-wider">
              Building the Future.
            </p>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: <LinkedinIcon className="w-4 h-4" />, href: 'https://linkedin.com' },
              { icon: <GithubIcon className="w-4 h-4" />, href: 'https://github.com' },
              { icon: <Mail className="w-4 h-4" />, href: 'mailto:krishandhar11@gmail.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-2.5 glass rounded-lg border border-cyan-500/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between w-full pt-6 border-t border-white/5 flex-wrap gap-4">
            <p className="font-mono text-xs text-slate-600">
              © 2026 Krishandhar Sharma. All rights reserved.
            </p>
            <div className="flex items-center gap-1 font-mono text-xs text-slate-600">
              Built with <Heart className="w-3 h-3 text-pink-500 mx-1 fill-pink-500" /> React + Vite + Tailwind
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 glass rounded-xl border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
