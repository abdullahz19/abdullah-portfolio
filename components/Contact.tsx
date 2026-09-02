'use client'

import { useRef, useState, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiPhone,  FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'Abdullah.19062004@gmail.com', href: 'mailto:Abdullah.19062004@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+92 335 330 3381', href: 'tel:+923353303381' },
  { icon: FiMapPin, label: 'Location', value: 'Karachi, Pakistan', href: '#' },
]



export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Using mailto as the free email solution
    const mailtoLink = `mailto:Abdullah.19062004@gmail.com?subject=${encodeURIComponent(
      form.subject || `Portfolio Contact from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`

    window.location.href = mailtoLink
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 500)
  }

  return (
    <section
      id="contact"
      className="py-32 relative"
      style={{ background: 'var(--surface)' }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          
          <h2 className="font-display text-5xl md:text-6xl font-extrabold" style={{ color: 'var(--text)' }}>
            Let's Talk
          </h2>
          <p className="mt-4 max-w-lg font-body" style={{ color: 'var(--text-muted)' }}>
            Have a project in mind or want to hire me? I'd love to hear from you.
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5 mb-10">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass rounded-2xl p-5 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(31,227,242,0.1)', color: 'var(--accent)' }}
                  >
                    <info.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      {info.label}
                    </div>
                    <div className="text-sm font-body font-medium group-hover:gradient-text transition-all break-words"
                      style={{ color: 'var(--text)' }}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            
           

            {/* Fun element */}
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-10 glass rounded-3xl p-6 font-mono text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              <div style={{ color: 'var(--accent)' }}>{'// Let\'s build something amazing'}</div>
              <div className="mt-2">
                <span style={{ color: 'var(--electric)' }}>const</span>{' '}
                <span style={{ color: 'var(--text)' }}>result</span> ={' '}
                <span style={{ color: 'var(--neon)' }}>await</span>{' '}
                collaborate()
              </div>
              <div className="mt-1">
                <span style={{ color: 'var(--electric)' }}>return</span>{' '}
                <span style={{ color: 'var(--accent)' }}>"🚀 Something great"</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                    style={{
                      background: 'var(--surface2)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                    style={{
                      background: 'var(--surface2)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="How can I help?"
                  className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                  style={{
                    background: 'var(--surface2)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all resize-none"
                  style={{
                    background: 'var(--surface2)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(31,227,242,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl text-sm font-semibold text-black font-body flex items-center justify-center gap-2 transition-all"
                style={{
                  background: status === 'sent' ? '#12C4D6' : 'var(--accent)',
                  opacity: status === 'sending' ? 0.8 : 1,
                }}
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'sent' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
