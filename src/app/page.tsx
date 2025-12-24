"use client";

import dynamic from 'next/dynamic';
import { SparklesPreviewDark } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import { StaticSpotlight } from "@/components/ui/static-spotlight";
import { useIsMobile } from "@/lib/use-mobile";

// Dynamically import heavy 3D components for better performance (desktop only)
const EnhancedRobot = dynamic(
  () => import('@/components/ui/enhanced-robot').then(mod => ({ default: mod.EnhancedRobot })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse text-blue-400">Loading 3D Scene...</div>
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
        <div className="animate-pulse text-blue-400">Loading Interactive Demo...</div>
      </div>
    )
  }
);

const SplineAppCard = dynamic(
  () => import('@/components/ui/spline-demo').then(mod => ({ default: mod.SplineAppCard })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl animate-pulse"></div>
    )
  }
);
import {
  Bot,
  Zap,
  Mail,
  Linkedin,
  Github,
  Play,
  Terminal,
  Video,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

export default function Home() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  return (
    <div>
      <Navbar />

      {/* Hero Section - Left/Right Layout */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 to-slate-950 -mt-16 pt-16 flex items-center">
        {/* 背景层 - z-0 */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <SparklesPreviewDark />
        </div>
        {/* SplineHeroBackground removed to eliminate geometric shapes */}

        {/* Spotlight 光圈效果 - z-2 */}
        <div className="absolute inset-0 z-2">
          <StaticSpotlight
            className="left-1/4 top-1/3"
            size="small"
            fill="white"
          />
        </div>

        {/* 内容层 - z-10 */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-[2fr_3fr] gap-6 md:gap-8 items-center h-full py-8 md:py-16">

              {/* Left Side - Content */}
              <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1 px-4 md:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white tracking-wider leading-tight whitespace-nowrap">
                  {t('hero.title')}
                </h1>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-sm mx-auto md:mx-0">
                  <a
                    href="#apps"
                    className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center text-sm"
                  >
                    {t('hero.explore')}
                  </a>
                  <a
                    href="#contact"
                    className="px-4 md:px-6 py-2 md:py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 text-center text-sm"
                  >
                    {t('hero.contact')}
                  </a>
                </div>
              </div>

              {/* Right Side - 3D Robot with Welcome */}
              <div className="flex justify-center items-center order-1 md:order-2 relative z-20 overflow-visible">
                {!isMobile ? (
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] relative">
                    <EnhancedRobot />
                  </div>
                ) : (
                  <div className="w-full h-[350px] flex items-center justify-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
                      <Sparkles className="w-32 h-32 text-blue-400 relative z-10 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">{t('about.title')}</h2>
            <div className="flex justify-center mb-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200 group-hover:scale-105 transition-transform duration-500">
                  <Bot className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-all duration-300">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.role')}</h3>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                {t('about.desc1')}
              </p>
              <p>
                {t('about.desc2')}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
              {[
                "Machine Learning", "Deep Learning", "Computer Vision", "NLP",
                "Python", "TensorFlow", "PyTorch", "React", "Next.js", "Node.js",
                "AWS", "Docker", "Kubernetes"
              ].map((skill) => (
                <span key={skill} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-medium hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experience Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">{t('interactive.title')}</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">{t('interactive.subtitle')}</p>
          </div>

          <div className="flex justify-center">
            {!isMobile ? (
              <div className="w-full max-w-4xl h-[500px]">
                <SplineRobotProfessional />
              </div>
            ) : (
              <div className="w-full max-w-4xl min-h-[400px] flex flex-col items-center justify-center text-center px-6 py-12 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                  <Bot className="w-24 h-24 text-blue-400 relative z-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('interactive.mobileTitle')}</h3>
                <p className="text-slate-300 max-w-md leading-relaxed">
                  {t('interactive.mobileMessage')}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Web Applications Section */}
      <section id="apps" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">{t('apps.title')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('apps.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('apps.app1.title'),
                desc: t('apps.app1.desc'),
                tags: ["NLP", "Computer Vision", "Cloud"]
              },
              {
                title: t('apps.app2.title'),
                desc: t('apps.app2.desc'),
                tags: ["Generative AI", "Deep Learning", "API"]
              },
              {
                title: t('apps.app3.title'),
                desc: t('apps.app3.desc'),
                tags: ["ML", "Data Science", "React"]
              }
            ].map((app, index) => (
              <div key={index} className="group">
                {!isMobile ? (
                  <SplineAppCard />
                ) : (
                  <div className="h-full min-h-[320px] p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
                      <Bot className="w-16 h-16 text-blue-600 relative z-10" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{app.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {app.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white text-blue-600 text-xs font-medium rounded-full border border-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article & Video Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Articles */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <span className="p-2 bg-blue-100 rounded-lg text-blue-600"><Terminal size={24} /></span>
                {t('articles.title')}
              </h3>
              <div className="space-y-8">
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wide">{t('articles.art1.tag')}</span>
                    <span className="text-slate-400 text-xs">Dec 2024</span>
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{t('articles.art1.title')}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t('articles.art1.desc')}
                  </p>
                </div>

                <div className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full uppercase tracking-wide">{t('articles.art2.tag')}</span>
                    <span className="text-slate-400 text-xs">Nov 2024</span>
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{t('articles.art2.title')}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t('articles.art2.desc')}
                  </p>
                </div>

                <div className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full uppercase tracking-wide">{t('articles.art3.tag')}</span>
                    <span className="text-slate-400 text-xs">Oct 2024</span>
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-green-600 transition-colors">{t('articles.art3.title')}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t('articles.art3.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Content */}
            <div id="video-tutorials">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <span className="p-2 bg-red-100 rounded-lg text-red-600"><Video size={24} /></span>
                {t('videos.title')}
              </h3>
              <div className="space-y-8">
                {/* Video Card 1 */}
                <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                        <h4 className="text-white font-semibold text-lg drop-shadow-md">{t('videos.vid1.title')}</h4>
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">12:34</div>
                    </div>
                    {/* Video Info */}
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{t('videos.vid1.title')}</h4>
                      <div className="text-sm text-gray-500 mb-2">15K views • 2 days ago</div>
                      <p className="text-gray-600 text-sm">{t('videos.vid1.desc')}</p>
                    </div>
                  </div>
                </div>

                {/* Video Card 2 */}
                <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                        <h4 className="text-white font-semibold text-lg drop-shadow-md">{t('videos.vid2.title')}</h4>
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">18:45</div>
                    </div>
                    {/* Video Info */}
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{t('videos.vid2.title')}</h4>
                      <div className="text-sm text-gray-500 mb-2">8.2K views • 1 week ago</div>
                      <p className="text-gray-600 text-sm">{t('videos.vid2.desc')}</p>
                    </div>
                  </div>
                </div>

                {/* Video Card 3 */}
                <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                        <h4 className="text-white font-semibold text-lg drop-shadow-md">{t('videos.vid3.title')}</h4>
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">25:12</div>
                    </div>
                    {/* Video Info */}
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{t('videos.vid3.title')}</h4>
                      <div className="text-sm text-gray-500 mb-2">12K views • 2 weeks ago</div>
                      <p className="text-gray-600 text-sm">{t('videos.vid3.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a href="https://youtube.com/@qyi-ai" target="_blank" rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:text-blue-600">
                  {t('videos.subscribe')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:contact@qyi.ai"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {t('contact.getInTouch')}
            </a>
            <a
              href="https://linkedin.com/in/qyi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {t('contact.connect')}
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/20">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h3>
              <p className="text-slate-400 group-hover:text-blue-400 transition-colors">contact@qyi.ai</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/20">
                <Linkedin className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.linkedin')}</h3>
              <p className="text-slate-400 group-hover:text-blue-400 transition-colors">@qyi-ai</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/20">
                <Github className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.github')}</h3>
              <p className="text-slate-400 group-hover:text-blue-400 transition-colors">@qyi-ai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  )
}