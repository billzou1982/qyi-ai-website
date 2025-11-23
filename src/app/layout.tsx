import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
