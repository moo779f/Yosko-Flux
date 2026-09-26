import React from 'react';
import { User, Search, Newspaper, Globe } from 'lucide-react';
import { Language } from '../types';
import { YoskoFluxLogo } from './YoskoFluxLogo';

interface NavbarProps {
  activeView: 'home' | 'news' | 'about' | 'detail' | 'educational';
  language: Language;
  onToggleLanguage: () => void;
  onNavigateHome: () => void;
  onNavigateEducational: () => void;
  onNavigateNews: () => void;
  onNavigateAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  language,
  onToggleLanguage,
  onNavigateHome,
  onNavigateEducational,
  onNavigateNews,
  onNavigateAbout,
}) => {
  const isEn = language === 'en';

  return (
    <header className="border border-neutral-200 rounded-2xl bg-white mb-4 sm:mb-6 shadow-xs">
      <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        {/* Official YOSKO FLUX Logo Header - Only the symbol without bottom text */}
        <div
          onClick={onNavigateHome}
          className="flex items-center justify-between sm:justify-start cursor-pointer flex-shrink-0"
        >
          <img
            src="/logo-symbol.png"
            alt="YOSKO FLUX"
            className="h-9 sm:h-11 w-auto object-contain shrink-0"
          />
          <span className="sm:hidden border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-0.5 font-mono text-[10px] font-bold rounded-md ms-2">
            {isEn ? 'PORTFOLIO' : 'ملف التقديم'}
          </span>
        </div>

        {/* Navigation buttons */}
        <div className="w-full sm:w-auto grid grid-cols-5 sm:flex items-center gap-1 sm:gap-2 font-serif text-[11px] sm:text-sm font-bold pt-1 sm:pt-0 border-t border-neutral-100 sm:border-0">
          <button
            onClick={onNavigateHome}
            className={`min-h-[38px] px-2 sm:px-3.5 py-1.5 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center ${
              activeView === 'home'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <Search className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'Search' : 'الأبحاث'}</span>
          </button>

          <button
            onClick={onNavigateEducational}
            className={`min-h-[38px] px-2 sm:px-3.5 py-1.5 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center ${
              activeView === 'educational'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <Globe className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'Articles' : 'المقالات'}</span>
          </button>

          <button
            onClick={onNavigateNews}
            className={`min-h-[38px] px-2 sm:px-3.5 py-1.5 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center ${
              activeView === 'news'
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{isEn ? 'News' : 'أخبار'}</span>
          </button>

          <button
            onClick={onNavigateAbout}
            className={`min-h-[38px] px-2 sm:px-3.5 py-1.5 border rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 text-center ${
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
            className="min-h-[38px] px-2 sm:px-3 py-1.5 border border-neutral-200 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-all cursor-pointer flex items-center justify-center gap-1 font-bold text-center"
          >
            <span className="truncate">{isEn ? 'عربي' : 'EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
