"use client";

import dynamic from 'next/dynamic';
import { Navbar } from "@/components/ui/navbar";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { useIsMobile } from "@/lib/use-mobile";
import { Mail, Linkedin, Github, Play, Terminal, Video, FileText, Hand, Image } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

const EnhancedRobot = dynamic(
  () => import('@/components/ui/enhanced-robot').then(mod => ({ default: mod.EnhancedRobot })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-xs text-[#D97757] animate-pulse tracking-widest">LOADING 3D</span>
      </div>
    )
  }
);

const SplineRobotProfessional = dynamic(
  () => import('@/components/ui/spline-robot-scene').then(mod => ({ default: mod.SplineRobotProfessional })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-xs text-[#D97757] animate-pulse tracking-widest">LOADING SCENE</span>
      </div>
    )
  }
);

function HeroSvgFallback() {
  return (
    <svg viewBox="0 0 200 200" className="w-48 h-48 text-[#D97757]" fill="none" stroke="currentColor">
      <circle cx="100" cy="100" r="78" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="100" cy="100" r="50" strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="100" cy="100" r="24" strokeWidth="2" />
      <line x1="22" y1="100" x2="178" y2="100" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="100" y1="22" x2="100" y2="178" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="45" y1="45" x2="155" y2="155" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="155" y1="45" x2="45" y2="155" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="100" cy="100" r="4" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const apps = [
    {
      title: t('apps.app4.title'),
      desc: t('apps.app4.desc'),
      tags: ["Content Creation", "AI Writing"],
      url: "https://opal.google/?flow=drive:/1d99AfQwquu7yl5MfAPm0nnP7Una_L8H8&shared&mode=app",
      icon: FileText,
    },
    {
      title: t('apps.app5.title'),
      desc: t('apps.app5.desc'),
      tags: ["Computer Vision", "Three.js"],
      url: "/hand-particle-flow/index.html",
      icon: Hand,
    },
    {
      title: t('apps.app6.title'),
      desc: t('apps.app6.desc'),
      tags: ["Video Analysis", "YouTube"],
      url: null,
      icon: Video,
    },
    {
      title: t('apps.app7.title'),
      desc: t('apps.app7.desc'),
      tags: ["Social Media", "Xiaohongshu"],
      url: null,
      icon: Image,
    },
  ];

  const articles = [
    {
      tag: t('articles.art1.tag'),
      date: "Dec 2024",
      title: t('articles.art1.title'),
      desc: t('articles.art1.desc'),
    },
    {
      tag: t('articles.art2.tag'),
      date: "Nov 2024",
      title: t('articles.art2.title'),
      desc: t('articles.art2.desc'),
    },
    {
      tag: t('articles.art3.tag'),
      date: "Oct 2024",
      title: t('articles.art3.title'),
      desc: t('articles.art3.desc'),
    },
  ];

  const videos = [
    {
      title: t('videos.vid1.title'),
      desc: t('videos.vid1.desc'),
      duration: "12:34",
      views: "15K",
    },
    {
      title: t('videos.vid2.title'),
      desc: t('videos.vid2.desc'),
      duration: "18:45",
      views: "8.2K",
    },
    {
      title: t('videos.vid3.title'),
      desc: t('videos.vid3.desc'),
      duration: "25:12",
      views: "12K",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen -mt-14 pt-14 flex items-center bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center py-16 md:py-24">

            {/* Left — Content */}
            <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
              <div className="space-y-2">
                <p className="font-mono text-xs text-[#D97757] tracking-[0.2em] uppercase">
                  AI Native Developer
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-foreground">
                  {t('hero.title')}
                </h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                {t('about.desc1')}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#apps"
                  className="px-5 py-2.5 bg-[#D97757] text-white text-sm font-medium rounded hover:bg-[#c4673e] transition-colors"
                >
                  {t('hero.explore')}
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded hover:border-[#D97757] hover:text-[#D97757] transition-colors"
                >
                  {t('hero.contact')}
                </a>
              </div>
            </div>

            {/* Right — 3D Robot */}
            <div className="flex justify-center items-center order-1 md:order-2">
              {!isMobile ? (
                <div className="w-full h-[300px] md:h-[360px] lg:h-[420px]">
                  <ErrorBoundary fallback={<HeroSvgFallback />}>
                    <EnhancedRobot />
                  </ErrorBoundary>
                </div>
              ) : (
                <HeroSvgFallback />
              )}
            </div>

          </div>
        </div>

        {/* Subtle rule accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#D97757] tracking-widest">01</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-3">
            {t('about.title')}
          </h2>
          <p className="font-mono text-xs text-[#D97757] tracking-widest uppercase mb-8">
            {t('about.role')}
          </p>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
            <p>{t('about.desc1')}</p>
            <p>{t('about.desc2')}</p>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Stack
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              {[
                "Machine Learning", "Deep Learning", "Computer Vision", "NLP",
                "Python", "TensorFlow", "PyTorch", "React", "Next.js",
                "Node.js", "AWS", "Docker"
              ].join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Apps ── */}
      <section id="apps" className="py-24 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#D97757] tracking-widest">02</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-3">
            {t('apps.title')}
          </h2>
          <p className="text-muted-foreground text-sm mb-12 max-w-xl">
            {t('apps.subtitle')}
          </p>

          <div className="divide-y divide-border">
            {apps.map((app, i) => {
              const Icon = app.icon;
              const inner = (
                <div className="py-6 flex items-start gap-6 group cursor-default">
                  <span className="font-mono text-xs text-[#D97757] pt-1 w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl font-normal text-foreground group-hover:text-[#D97757] transition-colors">
                        {app.title}
                      </h3>
                      {app.url && (
                        <span className="text-[#D97757] text-lg shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                      {app.desc}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                      {app.tags.map(tag => (
                        <span key={tag} className="font-mono text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );

              return app.url ? (
                <a
                  key={i}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-secondary/30 transition-colors -mx-2 px-2 rounded"
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="opacity-70">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Interactive ── */}
      <section className="py-24 bg-secondary/20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#D97757] tracking-widest">03</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-3">
            {t('interactive.title')}
          </h2>
          <p className="text-muted-foreground text-sm mb-12">
            {t('interactive.subtitle')}
          </p>
          <div className="flex justify-center">
            {!isMobile ? (
              <div className="w-full h-[460px] rounded border border-border overflow-hidden">
                <ErrorBoundary fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">3D UNAVAILABLE</span>
                  </div>
                }>
                  <SplineRobotProfessional />
                </ErrorBoundary>
              </div>
            ) : (
              <div className="w-full min-h-[200px] flex flex-col items-center justify-center text-center py-12 border border-border rounded">
                <HeroSvgFallback />
                <p className="font-mono text-xs text-muted-foreground mt-4 tracking-wide">
                  {t('interactive.mobileMessage')}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Writing ── */}
      <section id="writing" className="py-24 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#D97757] tracking-widest">04</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex items-center gap-3 mb-12">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground">
              {t('articles.title')}
            </h2>
          </div>

          <div className="divide-y divide-border">
            {articles.map((art, i) => (
              <article key={i} className="py-8 group cursor-pointer hover:bg-secondary/30 transition-colors -mx-2 px-2 rounded">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#D97757] border border-[#D97757]/40 px-2 py-0.5 rounded">
                    {art.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{art.date}</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-foreground group-hover:text-[#D97757] transition-colors mb-2">
                  {art.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  {art.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Tutorials ── */}
      <section id="video-tutorials" className="py-24 bg-secondary/20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#D97757] tracking-widest">05</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-3">
              <Video className="w-4 h-4 text-muted-foreground" />
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground">
                {t('videos.title')}
              </h2>
            </div>
            <a
              href="https://youtube.com/@qyi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#D97757] hover:underline tracking-wide"
            >
              {t('videos.subscribe')}
            </a>
          </div>

          <div className="divide-y divide-border">
            {videos.map((vid, i) => (
              <div key={i} className="py-6 flex items-start gap-6 group cursor-pointer hover:bg-secondary/30 transition-colors -mx-2 px-2 rounded">
                <div className="flex items-center justify-center w-10 h-10 border border-border rounded shrink-0 group-hover:border-[#D97757] group-hover:text-[#D97757] text-muted-foreground transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-normal text-foreground group-hover:text-[#D97757] transition-colors mb-1">
                    {vid.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    {vid.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{vid.duration}</span>
                    <span className="font-mono text-xs text-muted-foreground">{vid.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#D97757] tracking-widest">06</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-foreground mb-4 max-w-2xl">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-base mb-10 max-w-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href="mailto:contact@qyi.ai"
              className="px-5 py-2.5 bg-[#D97757] text-white text-sm font-medium rounded hover:bg-[#c4673e] transition-colors"
            >
              {t('contact.getInTouch')}
            </a>
            <a
              href="https://linkedin.com/in/qyi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded hover:border-[#D97757] hover:text-[#D97757] transition-colors"
            >
              {t('contact.connect')}
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { icon: Mail, label: t('contact.email'), value: "contact@qyi.ai", href: "mailto:contact@qyi.ai" },
              { icon: Linkedin, label: t('contact.linkedin'), value: "@qyi-ai", href: "https://linkedin.com/in/qyi-ai" },
              { icon: Github, label: t('contact.github'), value: "@qyi-ai", href: "https://github.com/qyi-ai" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-3 group"
              >
                <Icon className="w-4 h-4 text-[#D97757] shrink-0" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground tracking-wide uppercase">{label}</p>
                  <p className="text-sm text-foreground group-hover:text-[#D97757] transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#D97757]">◆</span>
            <span className="font-serif text-sm text-muted-foreground">QYI AI</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
