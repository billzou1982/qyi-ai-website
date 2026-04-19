"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n-context';
import { useTheme } from '@/lib/theme-context';
import { Sun, Moon, Monitor } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-3.5 h-3.5" />;
    if (theme === 'dark') return <Moon className="w-3.5 h-3.5" />;
    return <Monitor className="w-3.5 h-3.5" />;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border'
        : 'bg-background/80 backdrop-blur-md border-b border-border/50'
    }`}>
      <div className="w-full px-4 md:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-xs text-[#D97757] tracking-widest select-none">◆</span>
            <span className="font-serif text-lg font-medium tracking-tight text-foreground group-hover:text-[#D97757] transition-colors">
              QYI AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://academy.qyi-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#D97757] text-[#D97757] text-sm font-medium rounded hover:bg-[#D97757] hover:text-white transition-all duration-200"
            >
              {t('nav.academy')}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('apps')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.apps')}
            </button>
            <Link
              href="/ai-tools"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.aiTools')}
            </Link>
            <button
              onClick={() => scrollToSection('writing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.blog')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="p-1.5 text-muted-foreground hover:text-foreground border border-border rounded transition-colors"
              aria-label="Toggle theme"
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="font-mono text-xs text-muted-foreground hover:text-foreground border border-border px-2.5 py-1.5 rounded transition-colors"
            >
              {language}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={cycleTheme}
              className="p-1.5 text-muted-foreground hover:text-foreground border border-border rounded transition-colors"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
            <button
              onClick={toggleLanguage}
              className="font-mono text-xs text-muted-foreground hover:text-foreground border border-border px-2 py-1.5 rounded transition-colors"
            >
              {language}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md animate-fade-in">
            <div className="py-4 space-y-1">
              <a
                href="https://academy.qyi-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 mx-4 mb-3 px-4 py-2.5 border border-[#D97757] text-[#D97757] font-medium rounded text-sm"
              >
                {t('nav.academy')} →
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('apps')}
                className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {t('nav.apps')}
              </button>
              <Link
                href="/ai-tools"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {t('nav.aiTools')}
              </Link>
              <button
                onClick={() => scrollToSection('writing')}
                className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {t('nav.blog')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
