'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import { FiGithub, FiLinkedin, FiMail, FiFacebook, FiInstagram, FiArrowDown, FiDownload } from 'react-icons/fi'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

const socialLinks = [
  { icon: FiFacebook, href: 'https://www.facebook.com/share/1CKy8LKQQk/', label: 'Facebook' },
  { icon: FiInstagram, href: 'https://www.instagram.com/abdullah_zahoor2004?igsi=MTdhMTJ0eW52dmZhNA==', label: 'Instagram' },
  { icon: FiGithub, href: 'https://github.com/abdullahz19', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abdullah-zahoor-48b2652a1', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:Abdullah.19062004@gmail.com', label: 'Email' },
]

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{ background: 'var(--bg)' }}
    >
      {/* 3D Canvas */}
      <Scene3D />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(31,227,242,0.05) 0%, transparent 60%), radial-gradient(ellipse at 30% 50%, rgba(14,165,233,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-24 sm:py-28 lg:py-32 w-full overflow-hidden">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 sm:gap-16 items-center">
        <div className="max-w-3xl min-w-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-mono mb-6 sm:mb-8 glass max-w-full"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse shrink-0"
              style={{ background: 'var(--accent)' }}
            />
            <span style={{ color: 'var(--accent)' }} className="whitespace-normal">Available for internship & jobs</span>
          </motion.div>

          {/* Name */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="font-display font-extrabold leading-[0.95] mb-4 whitespace-nowrap"
  style={{
    color: 'var(--text)',
    fontSize: 'clamp(2.2rem, 10vw, 6rem)',
  }}
>
  Abdullah
  <br />
  <span className="gradient-text">Zahoor</span>
</motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl font-body mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            <span style={{ color: 'var(--text)' }}>I build </span>
            <TypeAnimation
              sequence={[
                'Web Applications', 2000,
                'Flutter Apps', 2000,
                'Beautiful UIs', 2000,
                'Full Stack Projects', 2000,
                'Creative Solutions', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: 'var(--accent)', fontWeight: 600 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 font-body"
            style={{ color: 'var(--text-muted)' }}
          >
           Software Engineer specializing in building modern, scalable, and user-focused digital solutions.
           Passionate about crafting digital experiences with React, Flutter, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(31,227,242,0.4)' }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-black font-body transition-all"
              style={{ background: 'var(--accent)' }}
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold glass font-body transition-all"
              style={{
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
              }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/ABDULLAHRESUME2026.pdf"
              download
              className="flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm font-semibold font-body transition-all"
              style={{ color: 'var(--accent)' }}
            >
              <FiDownload size={16} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3 sm:gap-4 flex-wrap"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center transition-all shrink-0"
                aria-label={label}
                style={{ color: 'var(--text-muted)' }}
              >
                <Icon size={18} />
              </motion.a>
            ))}

            <div
              className="h-px flex-1 min-w-6 max-w-24 ml-1 sm:ml-2"
              style={{ background: 'var(--border)' }}
            />
            <span className="text-xs font-mono whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
              Connect with me
            </span>
          </motion.div>
        </div>

        {/* Right - Photo in glowing oval frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto lg:mx-0 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-72 h-80 md:w-[22rem] md:h-[27rem]"
          >
            {/* Glow behind the photo */}
            <div
              className="absolute inset-[-40px] blur-3xl opacity-60"
              style={{
                background: 'radial-gradient(circle, var(--accent) 0%, transparent 65%)',
              }}
            />
            {/* Rotating dashed ring accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full pointer-events-none"
              style={{ border: '1.5px dashed rgba(31,227,242,0.35)' }}
            />
            {/* Oval clipped photo */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: '50%',
                border: '3px solid var(--accent)',
                boxShadow: '0 0 70px rgba(31,227,242,0.5), inset 0 0 40px rgba(31,227,242,0.15)',
              }}
            >
              <Image
                src="/images/abdullah.jpg"
                alt="Abdullah Zahoor"
                fill
                priority
                sizes="352px"
                className="object-cover"
                style={{ objectPosition: '50% 20%', filter: 'contrast(1.05)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.5) 100%)' }}
              />
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
        whileHover={{ color: 'var(--accent)' }}
      >
        <span className="text-xs font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
