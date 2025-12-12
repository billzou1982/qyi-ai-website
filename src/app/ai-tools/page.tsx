"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { toolsData, Tool } from "@/lib/tools-data";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

export default function AiToolsPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(toolsData[0].id);

  // Handle scroll to update active category
  useEffect(() => {
    const handleScroll = () => {
      const sections = toolsData.map((cat) => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveCategory(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveCategory(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation - Sticky */}
          <aside className="lg:w-64 flex-shrink-0 hidden lg:block h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto pr-2">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                {t('toolsPage.categories')}
              </h3>
              {toolsData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category.id
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-l-4 border-transparent"
                    }`}
                >
                  {language === 'CN' ? category.name_cn || category.name : category.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Mobile Category Select */}
          <div className="lg:hidden mb-6 sticky top-20 z-40 bg-gray-50 py-2">
            <select
              value={activeCategory}
              onChange={(e) => scrollToCategory(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {toolsData.map((category) => (
                <option key={category.id} value={category.id}>
                  {language === 'CN' ? category.name_cn || category.name : category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-16">
            <div className="text-center lg:text-left mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('toolsPage.title')}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {t('toolsPage.subtitle')}
              </p>
            </div>

            {toolsData.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-24"
              >
                <div className="mb-6 border-b border-gray-200 pb-4">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    {language === 'CN' ? category.name_cn || category.name : category.name}
                    <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.tools.length}
                    </span>
                  </h2>
                  <p className="text-gray-500 mt-1">{language === 'CN' ? category.description_cn || category.description : category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.tools.map((tool, index) => (
                    <ToolCard key={index} tool={tool} language={language} t={t} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function ToolCard({ tool, language, t }: { tool: Tool, language: string, t: (key: string) => string }) {
  const displayName = language === 'CN' ? tool.name_cn || tool.name : tool.name;
  const displayDesc = language === 'CN' ? tool.description_cn || tool.description : tool.description;
  const displayTags = language === 'CN' ? tool.tags_cn || tool.tags : tool.tags;

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white rounded-xl border border-gray-200 p-5 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col">
        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          {tool.isHot && (
            <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-red-100">
              {t('toolsPage.hot')}
            </span>
          )}
          {tool.isNew && (
            <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-green-100">
              {t('toolsPage.new')}
            </span>
          )}
        </div>

        <div className="flex items-start gap-4 mb-3">
          {/* Icon Placeholder - Generated from Name */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-lg flex-shrink-0 border border-blue-100 font-bold text-blue-600">
            {displayName.charAt(0)}
          </div>

          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
              {displayName}
            </h3>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {displayTags?.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 flex-grow">
          {displayDesc}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-50 flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {new URL(tool.url).hostname.replace('www.', '')}
          </span>
          <span className="text-xs text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
            {t('toolsPage.visitWebsite')} →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
