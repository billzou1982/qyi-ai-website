"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n-context';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile menu when navigating

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
      : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}>
      <div className="w-full px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              ⚡
            </div>
            <span className="text-xl font-bold text-gray-900">QYI AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Academy Highlight Link */}
            <a
              href="https://academy.qyi-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative group"
            >
              <span className="relative z-10">{t('nav.academy')}</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
            </a>

            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('apps')}
              className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
            >
              {t('nav.apps')}
            </button>
            <Link
              href="/ai-tools"
              className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
            >
              {t('nav.aiTools')}
            </Link>
            <button
              onClick={() => scrollToSection('video-tutorials')}
              className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
            >
              {t('nav.blog')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
            >
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors min-w-[60px]"
            >
              {language}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              {language}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md animate-fade-in">
            <div className="py-4 space-y-1">
              {/* Academy link in mobile menu - highlighted */}
              <a
                href="https://academy.qyi-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block mx-4 mb-3 px-4 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-lg text-center shadow-md"
              >
                {t('nav.academy')} →
              </a>

              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-500 font-medium transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('apps')}
                className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-500 font-medium transition-colors"
              >
                {t('nav.apps')}
              </button>
              <Link
                href="/ai-tools"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-500 font-medium transition-colors"
              >
                {t('nav.aiTools')}
              </Link>
              <button
                onClick={() => scrollToSection('video-tutorials')}
                className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-500 font-medium transition-colors"
              >
                {t('nav.blog')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-500 font-medium transition-colors"
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
