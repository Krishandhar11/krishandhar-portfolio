import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Link as LinkedinIcon, GitBranch as GithubIcon, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: 'Direct Email', value: 'krishandhar11@gmail.com', href: 'mailto:krishandhar11@gmail.com?subject=Portfolio%20Inquiry', color: 'cyan' },
  { icon: <LinkedinIcon className="w-5 h-5" />, label: 'LinkedIn', value: '/in/krishandhar-sharma', href: 'https://www.linkedin.com/in/krishandhar-sharma/', color: 'blue' },
  { icon: <GithubIcon className="w-5 h-5" />, label: 'GitHub', value: '/krishandhar-sharma', href: 'https://github.com/Krishandhar11', color: 'purple' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Jaipur, India', href: '#', color: 'green' },
];

const colorMap = {
  cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  blue: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  purple: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  green: 'text-green-400 border-green-500/30 bg-green-500/10',
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center lg:text-left"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 10. GET IN TOUCH'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Contact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left Side - Context Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6 border border-cyan-500/20 h-full">
              <h3 className="font-display text-xl font-bold text-white mb-3">Let's Collaborate</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I am currently looking for new opportunities in cybersecurity engineering, cloud infrastructure support, and technical administration.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a job opening, a project idea, or just want to connect over network security—reach out via any of these channels!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Fast Connection Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 space-y-3"
          >
            {/* Primary Email CTA Card */}
            <motion.a
              href="mailto:krishandhar11@gmail.com?subject=Portfolio%20Inquiry"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="flex flex-col sm:flex-row items-center justify-between p-6 glass rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/5 to-transparent hover:border-cyan-400 transition-all hover-glow group cursor-pointer"
            >
              <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                <div className="p-3 rounded-xl border text-cyan-400 border-cyan-500/30 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">
                  <Mail className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-white">Start an Email</p>
                  <p className="font-mono text-xs text-cyan-400">krishandhar11@gmail.com</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-2 font-mono text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                LAUNCH APP
              </div>
            </motion.a>

            {/* Other Social Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {contactInfo.filter(info => info.label !== 'Direct Email').map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex flex-col items-center justify-center p-4 glass rounded-xl border border-white/5 hover:border-white/20 transition-all text-center group"
                >
                  <div className={`p-2.5 rounded-lg border mb-2 ${colorMap[info.color as keyof typeof colorMap]}`}>
                    {info.icon}
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{info.label}</p>
                  <p className="text-slate-300 text-xs font-medium truncate max-w-full group-hover:text-white transition-colors">{info.value}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}