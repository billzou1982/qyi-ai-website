"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from './translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get cookie value
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

// Helper function to set cookie with cross-subdomain support
function setCookie(name: string, value: string, domain: string = '.qyi-ai.com') {
  if (typeof document === 'undefined') return;

  const maxAge = 31536000; // 1 year in seconds
  document.cookie = `${name}=${value}; path=/; domain=${domain}; max-age=${maxAge}; SameSite=Lax`;
}

// Convert Language type to locale string
function languageToLocale(lang: Language): 'en' | 'zh' {
  return lang === 'EN' ? 'en' : 'zh';
}

// Convert locale string to Language type
function localeToLanguage(locale: string): Language {
  return locale === 'zh' ? 'CN' : 'EN';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  // Initialize language preference from cookie or localStorage
  useEffect(() => {
    // Priority 1: Read from cookie (for cross-subdomain support)
    const localeCookie = getCookie('locale');
    if (localeCookie && (localeCookie === 'en' || localeCookie === 'zh')) {
      const lang = localeToLanguage(localeCookie);
      setLanguage(lang);
      // Sync to localStorage for fallback
      localStorage.setItem('language', lang);
      return;
    }

    // Priority 2: Read from localStorage (legacy support)
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'EN' || savedLang === 'CN')) {
      setLanguage(savedLang);
      // Sync to cookie
      setCookie('locale', languageToLocale(savedLang));
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);

    // Save to localStorage (backward compatibility)
    localStorage.setItem('language', lang);

    // Save to cookie with cross-subdomain support
    const locale = languageToLocale(lang);
    setCookie('locale', locale);
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === 'EN' ? 'CN' : 'EN');
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = translations[language];

    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }

    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
