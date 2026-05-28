import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Link as LinkedinIcon, GitBranch as GithubIcon, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'krishandhar11@gmail.com', href: 'mailto:krishandhar11@gmail.com', color: 'cyan' },
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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-cyan-500 text-sm tracking-widest mb-2">{'// 10. GET IN TOUCH'}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-underline inline-block">
            Contact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 border border-cyan-500/20 mb-6">
              <h3 className="font-display text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed">
                Open to discussions about cybersecurity roles, infrastructure opportunities, collaboration on security projects, or just a good technical conversation about SOC operations and threat hunting.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 glass rounded-xl border transition-all hover-glow group`}
                >
                  <div className={`p-2 rounded-lg border ${colorMap[info.color as keyof typeof colorMap]}`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500">{info.label}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl border border-cyan-500/20 p-6">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                      { id: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                    ].map(field => (
                      <div key={field.id}>
                        <label className="block font-mono text-xs text-slate-500 mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all font-mono"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-500 mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Cybersecurity Role / Collaboration"
                      value={formData.subject}
                      onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-500 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity or what you'd like to discuss..."
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-mono resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-dark-900 font-display font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 disabled:opacity-60 transition-all btn-glow"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND MESSAGE
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
