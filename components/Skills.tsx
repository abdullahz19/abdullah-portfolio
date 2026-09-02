'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'var(--accent)',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'C / C++', level: 70 },
      { name: 'Dart', level: 80 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Web Development',
    color: 'var(--electric)',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'React.js', level: 82 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    title: 'Mobile & Backend',
    color: 'var(--neon)',
    skills: [
      { name: 'Flutter', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'REST APIs', level: 78 },
      { name: 'Git / GitHub', level: 80 },
    ],
  },
]

const certifications = [
  'Web Development',
  'Linux Tutorial',
  'Apps with Flutter',
  'Introduction to SQL',
  'English Language',
]

function SkillBar({ name, level, color, inView, delay }: {
  name: string; level: number; color: string; inView: boolean; delay: number
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-body font-medium" style={{ color: 'var(--text)' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'var(--surface2)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      className="py-32 relative"
      style={{ background: 'var(--surface)' }}
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(31,227,242,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-mono mb-3" style={{ color: 'var(--accent)' }}>
            02. skills
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold" style={{ color: 'var(--text)' }}>
            My Toolkit
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
                  {cat.title}
                </h3>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  inView={inView}
                  delay={ci * 0.1 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="font-display font-bold text-xl mb-6" style={{ color: 'var(--text)' }}>
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                className="px-4 py-2 rounded-full text-sm font-body font-medium"
                style={{
                  background: 'rgba(31,227,242,0.1)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(31,227,242,0.2)',
                }}
              >
                ✓ {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
