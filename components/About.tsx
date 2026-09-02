'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiLayers, FiZap, FiGlobe } from 'react-icons/fi'

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '3', label: 'Languages' },
  { value: '7th', label: 'Semester' },
]

const traits = [
  { icon: FiCode, title: 'Clean Code', desc: 'Writing readable, maintainable and scalable code' },
  { icon: FiLayers, title: 'Full Stack', desc: 'Frontend to backend, I cover the whole stack' },
  { icon: FiZap, title: 'Fast Learner', desc: 'Quickly adapting to new technologies and frameworks' },
  { icon: FiGlobe, title: 'Multilingual', desc: 'English, Urdu, and Arabic speaker' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative" style={{ background: 'var(--bg)' }}>
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          
          <h2 className="font-display text-5xl md:text-6xl font-extrabold" style={{ color: 'var(--text)' }}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Avatar photo */}
            <div className="relative mb-10 w-fit">
              <div
                className="relative w-48 h-48 rounded-full overflow-hidden"
                style={{ border: '3px solid var(--accent)', boxShadow: '0 0 40px rgba(31,227,242,0.35)' }}
              >
                <Image
                  src="/images/abdullah.jpg"
                  alt="Abdullah Zahoor"
                  fill
                  sizes="192px"
                  className="object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl glass flex items-center justify-center text-2xl font-mono"
                style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
              >
                &lt;/&gt;
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-black"
                style={{ background: 'var(--accent)' }}
              >
                SE Student
              </motion.div>
            </div>

            <div className="space-y-5" style={{ color: 'var(--text-muted)' }}>
              <p className="text-lg leading-relaxed font-body">
                I'm <span style={{ color: 'var(--text)', fontWeight: 600 }}>Abdullah Zahoor</span>, a
                passionate {' '}
                <span style={{ color: 'var(--accent)' }}>Software Engineer</span> at
                Ziauddin University, Karachi.
              </p>
              <p className="leading-relaxed font-body">
                I love turning complex problems into elegant, functional software. From e-commerce
                platforms to hardware projects like a remote-control car — I enjoy building things
                that make a difference.
              </p>
              <p className="leading-relaxed font-body">
                Currently seeking internship or full-time opportunities where I can apply my skills
                in web development, mobile apps, and software engineering.
              </p>
            </div>

            {/* Quick info */}
            <div className="mt-8 space-y-3">
              {[
                ['Location', 'Karachi, Pakistan'],
                ['Email', 'Abdullah.19062004@gmail.com'],
                ['Phone', '+92 335 330 3381'],
                ['University', 'Ziauddin University'],
              ].map(([key, val]) => (
                <div key={key} className="flex items-center gap-3 font-body">
                  <span className="text-xs font-mono w-20 shrink-0" style={{ color: 'var(--accent)' }}>
                    {key}:
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text)' }}>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats & Traits */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div
                    className="font-display text-4xl font-extrabold gradient-text mb-1"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Traits */}
            <div className="space-y-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-5 flex items-start gap-4"
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(31,227,242,0.1)', color: 'var(--accent)' }}
                  >
                    <trait.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>
                      {trait.title}
                    </h4>
                    <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>
                      {trait.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
