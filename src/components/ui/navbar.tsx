"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n-context';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
            <button className="p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}