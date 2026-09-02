import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const siteUrl = 'https://abdullahzahoor.live'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abdullah Zahoor | Software Engineer & Full Stack Developer',
    template: '%s | Abdullah Zahoor',
  },
  description:
    'Abdullah Zahoor — Software Engineer and Full Stack Developer specializing in React, Flutter, and Next.js. View projects, skills, and get in touch.',
  keywords: [
    'Abdullah',
    'Abdullah Zahoor',
    'Abdullah Zahoor Karachi',
    'Abdullah Zahoor developer',
    'Abdullah Zahoor portfolio',
    'Software Engineer',
    'Full Stack Developer',
    'Flutter Developer',
    'React Developer',
    'Web Developer Karachi',
    'Ziauddin University',
  ],
  authors: [{ name: 'Abdullah Zahoor', url: siteUrl }],
  creator: 'Abdullah Zahoor',
  publisher: 'Abdullah Zahoor',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Abdullah Zahoor',
    title: 'Abdullah Zahoor | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Abdullah Zahoor — Software Engineer and Full Stack Developer specializing in React, Flutter, and Next.js.',
    locale: 'en_US',
    images: [
      {
        url: '/images/abdullah.jpg',
        width: 800,
        height: 800,
        alt: 'Abdullah Zahoor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Zahoor | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Abdullah Zahoor — Software Engineer and Full Stack Developer specializing in React, Flutter, and Next.js.',
    images: ['/images/abdullah.jpg'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdullah Zahoor',
  alternateName: 'Abdullah',
  url: siteUrl,
  image: `${siteUrl}/images/abdullah.jpg`,
  jobTitle: 'Software Engineer & Full Stack Developer',
  description:
    'Software Engineer and Full Stack Developer specializing in React, Flutter, and Next.js.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Ziauddin University',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karachi',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://github.com/abdullahz19',
    'https://www.linkedin.com/in/abdullah-zahoor-48b2652a1',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
