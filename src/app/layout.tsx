import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n-context";
import { ThemeProvider } from "@/lib/theme-context";
import { Inter_Tight, Newsreader, JetBrains_Mono } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: "QYI AI - AI Native Developer | Web Apps & Mobile Solutions",
  description: "Independent AI developer creating innovative web applications, mobile apps, and AI-powered tools. Go bigger, Do fast with cutting-edge AI solutions.",
  keywords: "AI developer, web applications, mobile apps, artificial intelligence, machine learning, AI tools, developer portfolio",
  authors: [{ name: "QYI AI" }],
  creator: "QYI AI",
  openGraph: {
    title: "QYI AI - AI Native Developer | Web Apps & Mobile Solutions",
    description: "Independent AI developer creating innovative web applications, mobile apps, and AI-powered tools. Go bigger, Do fast with cutting-edge AI solutions.",
    url: "https://qyi-ai.com",
    siteName: "QYI AI",
    images: [
      {
        url: "https://qyi-ai.com/preview.png",
        width: 1200,
        height: 630,
        alt: "QYI AI - AI Native Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QYI AI - AI Native Developer",
    description: "Go bigger, Do fast. Independent AI developer creating innovative AI applications.",
    creator: "@qyi_ai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "QYI AI",
              jobTitle: "AI Native Developer",
              description: "Independent AI developer creating innovative web applications, mobile apps, and AI-powered tools",
              url: "https://qyi-ai.com",
              sameAs: [
                "https://github.com/qyi-ai",
                "https://twitter.com/qyi_ai",
                "https://youtube.com/@qyi-ai"
              ],
              knowsAbout: ["Artificial Intelligence", "Machine Learning", "Web Development", "Mobile Development", "Computer Vision"]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
