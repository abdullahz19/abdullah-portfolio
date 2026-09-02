'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    desc: 'A responsive online store with product catalog and cart functionality built with HTML, CSS, JavaScript, and Bootstrap.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Web',
    color: '#1FE3F2',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'E-Commerce (React)',
    desc: 'Re-developed the e-commerce platform using React.js with reusable components and significantly improved performance.',
    tags: ['React.js', 'JavaScript', 'CSS'],
    category: 'Web',
    color: '#0EA5E9',
    icon: '⚛️',
  },
  {
    id: 3,
    title: 'Weather App',
    desc: 'Real-time weather forecast application using live API integration with beautiful dynamic UI updates.',
    tags: ['JavaScript', 'API', 'CSS'],
    category: 'Web',
    color: '#1FE3F2',
    icon: '🌤️',
  },
  {
    id: 4,
    title: 'Todo List App',
    desc: 'Task management app featuring add, update, and delete functionalities with proper state management.',
    tags: ['React', 'State Management'],
    category: 'Web',
    color: '#7DD3FC',
    icon: '✅',
  },
  {
    id: 5,
    title: 'Notepad Chatting Box',
    desc: 'A communication-based notepad system enabling real-time messaging functionality.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web',
    color: '#0EA5E9',
    icon: '💬',
  },
  {
    id: 6,
    title: 'Quiz Game',
    desc: 'Interactive quiz application with dynamic question loading, scoring, and multiple difficulty levels.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web',
    color: '#1FE3F2',
    icon: '🧠',
  },
  {
    id: 7,
    title: 'School Management System',
    desc: 'Comprehensive management system for school operations including student records and administration.',
    tags: ['Python', 'MySQL', 'Backend'],
    category: 'System',
    color: '#7DD3FC',
    icon: '🏫',
  },
  {
    id: 8,
    title: 'Inventory Management (Healthcare)',
    desc: 'Designed a healthcare inventory management system for tracking medical supplies and equipment.',
    tags: ['Python', 'MySQL', 'Backend'],
    category: 'System',
    color: '#0EA5E9',
    icon: '🏥',
  },
  {
    id: 9,
    title: 'Flutter Networking App',
    desc: 'Computer Communication and Networking concepts visualized in a Flutter mobile application.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    category: 'Mobile',
    color: '#1FE3F2',
    icon: '📡',
  },
  {
    id: 10,
    title: 'Snake Game (Flutter)',
    desc: 'Classic snake game built with Flutter featuring smooth gameplay and score tracking.',
    tags: ['Flutter', 'Dart', 'Game'],
    category: 'Mobile',
    color: '#7DD3FC',
    icon: '🐍',
  },
  {
    id: 11,
    title: 'Remote Control Car',
    desc: 'Hardware-based remote control car project with full documentation and control interface.',
    tags: ['Hardware', 'IoT', 'Documentation'],
    category: 'Hardware',
    color: '#0EA5E9',
    icon: '🚗',
  },
]

const categories = ['All', 'Web', 'Mobile', 'System', 'Hardware']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-32 relative" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(125,211,252,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          
          <h2 className="font-display text-5xl md:text-6xl font-extrabold" style={{ color: 'var(--text)' }}>
            What I've Built
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full text-sm font-body font-medium transition-all"
              style={
                activeCategory === cat
                  ? { background: 'var(--accent)', color: '#000' }
                  : { background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-3xl p-7 group cursor-pointer relative overflow-hidden"
              >
                {/* Colored top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                {/* Icon & Category */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{project.icon}</span>
                  <span
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{ color: project.color, background: `${project.color}15` }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold text-lg mb-3 group-hover:gradient-text transition-all"
                  style={{ color: 'var(--text)' }}
                >
                  {project.title}
                </h3>

                {/* Desc */}
                <p className="text-sm leading-relaxed mb-5 font-body" style={{ color: 'var(--text-muted)' }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded"
                      style={{ background: 'var(--surface2)', color: 'var(--text-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href="https://github.com/abdullahz19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono transition-all opacity-50 group-hover:opacity-100"
                  style={{ color: project.color }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={14} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/abdullahz19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(31,227,242,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-sm font-semibold font-body"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
            >
              <FiGithub size={18} />
              See All on GitHub
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
