'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiFacebook, FiInstagram, FiHeart } from 'react-icons/fi'

const links = [
  { icon: FiFacebook, href: 'https://facebook.com/your-username', label: 'Facebook' },
  { icon: FiInstagram, href: 'https://instagram.com/your-username', label: 'Instagram' },
  { icon: FiGithub, href: 'https://github.com/abdullahz19', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abdullah-zahoor-48b2652a1', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:Abdullah.19062004@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-xl">
          <span className="gradient-text">AZ</span>
          <span style={{ color: 'var(--text)' }}>.</span>
        </div>

        <p className="text-sm font-body flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
           Abdullah Zahoor 
        </p>

        <div className="flex gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.15 }}
              className="transition-all"
              style={{ color: 'var(--text-muted)' }}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
