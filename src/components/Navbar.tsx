import React from 'react';
import {
  User,
  Search,
  Newspaper,
  Globe,
  Cpu
} from 'lucide-react';
import { Language } from '../types';

export type AppView =
  | 'home'
  | 'projects'
  | 'project-detail'
  | 'educational'
  | 'path'
  | 'certificates'
  | 'news'
  | 'about'
  | 'detail';

interface NavbarProps {
  activeView: AppView;
  language: Language;
  onToggleLanguage: () => void;
  onNavigateHome: () => void;
  onNavigateProjects?: () => void;
  onNavigateEducational: () => void;
  onNavigateLearningPath?: () => void;
  onNavigateCertificates?: () => void;
  onNavigateNews: () => void;
  onNavigateAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  language,
  onToggleLanguage,
  onNavigateHome,
  onNavigateProjects,
  onNavigateEducational,
  onNavigateLearningPath,
  onNavigateCertificates,
  onNavigateNews,
  onNavigateAbout
}) => {
  const isEn = language === 'en';

  return (
    <header className="border border-neutral-200 rounded-xl sm:rounded-2xl bg-white mb-5 sm:mb-8 shadow-2xs">
      <div className="px-3 py-2 sm:px-5 sm:py-2.5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-4">
        {/* Official YOSKO FLUX Logo Symbol */}
        <div
          onClick={onNavigateHome}
          className="flex items-center cursor-pointer flex-shrink-0"
          title="YOSKO FLUX Home"
        >
          <img
            src="/logo-symbol.png"
            alt="YOSKO FLUX"
            className="h-8 sm:h-9 w-auto object-contain shrink-0"
            style={{ maxHeight: '36px', maxWidth: '120px', width: 'auto', height: 'auto' }}
          />
        </div>

        {/* Navigation buttons - fully responsive with clean horizontal scrolling on mobile */}
        <nav className="flex items-center gap-1 sm:gap-1.5 font-serif text-[11px] sm:text-xs md:text-sm font-bold overflow-x-auto max-w-full pb-1 sm:pb-0">
          {/* 1. Search / All Papers */}
          <button
            onClick={onNavigateHome}
            className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
              activeView === 'home' || activeView === 'detail'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <Search className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'Home / Papers' : 'الرئيسية والأبحاث'}</span>
          </button>

          {/* 2. 8 Applied Projects */}
          {onNavigateProjects && (
            <button
              onClick={onNavigateProjects}
              className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
                activeView === 'projects' || activeView === 'project-detail'
                  ? 'border-black bg-black text-white'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{isEn ? 'Projects (8)' : 'المشاريع (8)'}</span>
            </button>
          )}

          {/* 3. Educational Articles */}
          <button
            onClick={onNavigateEducational}
            className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
              activeView === 'educational'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <Globe className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'Articles' : 'المقالات'}</span>
          </button>

          {/* 4. Learning Path Roadmap */}
          {onNavigateLearningPath && (
            <button
              onClick={onNavigateLearningPath}
              className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
                activeView === 'path'
                  ? 'border-black bg-black text-white'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
              }`}
            >
              <span className="truncate">{isEn ? 'Roadmap' : 'مسار التعلم'}</span>
            </button>
          )}

          {/* 5. Certificates */}
          {onNavigateCertificates && (
            <button
              onClick={onNavigateCertificates}
              className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
                activeView === 'certificates'
                  ? 'border-black bg-black text-white'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
              }`}
            >
              <span className="truncate">{isEn ? 'Certificates' : 'الشهادات'}</span>
            </button>
          )}

          {/* 6. News */}
          <button
            onClick={onNavigateNews}
            className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
              activeView === 'news'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'News' : 'أخبار'}</span>
          </button>

          {/* 7. About */}
          <button
            onClick={onNavigateAbout}
            className={`min-h-[32px] sm:min-h-[34px] px-2.5 sm:px-3 py-1 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center shrink-0 ${
              activeView === 'about'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <User className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'About' : 'حول'}</span>
          </button>

          {/* Bilingual Language Switcher Button */}
          <button
            onClick={onToggleLanguage}
            title={isEn ? 'تبديل للغة العربية' : 'Switch to English'}
            className="min-h-[32px] sm:min-h-[34px] px-2.5 py-1 border border-neutral-300 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-all cursor-pointer flex items-center justify-center gap-1 font-serif font-bold text-center text-xs shrink-0"
          >
            <span className="truncate">{isEn ? 'عربي' : 'EN'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
