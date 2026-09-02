# Abdullah Zahoor — Portfolio

A modern, animated Next.js portfolio with 3D Three.js scene, dark/light theme toggle, and smooth Framer Motion animations.

---

## 🚀 Quick Start

### Step 1 — Initialize Next.js project

```bash
npx create-next-app@14.2.5 abdullah-portfolio --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
cd abdullah-portfolio
```

### Step 2 — Copy all files from this zip into the project folder

Replace the auto-generated files with the ones from this zip. The folder structure is:

```
abdullah-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ThemeProvider.tsx
│   ├── Navbar.tsx
│   ├── Scene3D.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── CursorGlow.tsx
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

### Step 3 — Install dependencies

```bash
npm install @react-three/fiber @react-three/drei three framer-motion next-themes react-type-animation react-icons react-scroll @emailjs/browser
npm install --save-dev @types/three @types/react-scroll
```

### Step 4 — Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy for FREE on Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
3. Click "Add New Project" → Select your repo
4. Click "Deploy" — done! 100% free.

Your site will be live at: `https://your-repo-name.vercel.app`

---

## ✨ Features

- **3D Animated Scene** — Three.js animated sphere with distortion, floating rings, particles
- **Dark / Light Theme** — Toggle in navbar, persisted to localStorage
- **Type Animation** — Animated role text in hero section
- **Framer Motion** — Smooth scroll animations throughout
- **Cursor Glow** — Custom glowing cursor effect (desktop)
- **Project Filter** — Filter projects by category
- **Contact Form** — Opens default email client (100% free, no backend needed)
- **Fully Responsive** — Mobile-friendly with hamburger menu

---

## 🎨 Customization

- **Colors** — Edit CSS variables in `app/globals.css`
- **Projects** — Edit the `projects` array in `components/Projects.tsx`
- **Skills** — Edit `skillCategories` in `components/Skills.tsx`
- **Links** — Update GitHub/LinkedIn URLs in components

---

## 📦 Tech Stack (All FREE)

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework |
| Three.js + R3F | 3D animations |
| Framer Motion | Scroll animations |
| Tailwind CSS | Styling |
| React Icons | Icon library |
| React Type Animation | Typing effect |
| Vercel | Hosting (free) |
