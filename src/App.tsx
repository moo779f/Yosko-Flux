import React, { useState, useEffect } from 'react';
import { ResearchPaper, TopicCategory, Language } from './types';
import { INITIAL_PAPERS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { ResearchCard } from './components/ResearchCard';
import { ResearchDetailView } from './components/ResearchDetailView';
import { AboutView } from './components/AboutView';
import { NewsView } from './components/NewsView';
import { EducationalArticlesView } from './components/EducationalArticlesView';
import { YoskoFluxLogo } from './components/YoskoFluxLogo';
import {
  Search,
  Zap,
  Battery,
  Pi,
  Layers,
  X,
  Newspaper,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ArrowUp,
  Share2,
  BookOpen,
  Globe,
} from 'lucide-react';

const STORAGE_KEY = 'yosko_flux_academic_papers_v8';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const isEn = language === 'en';

  // Synchronize HTML dir and lang
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isEn ? 'ltr' : 'rtl';
  }, [language]);

  const [papers] = useState<ResearchPaper[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved papers:', e);
    }
    return INITIAL_PAPERS;
  });

  const [activeView, setActiveView] = useState<'home' | 'news' | 'about' | 'detail' | 'educational'>('home');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [startAtQuiz, setStartAtQuiz] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | 'all'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'article' | 'research'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenPaper = (paper: ResearchPaper, directToQuiz = false) => {
    setSelectedPaper(paper);
    setStartAtQuiz(directToQuiz);
    setActiveView('detail');
    if (!directToQuiz) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const matchesCategory = (paperCat: TopicCategory, filterCat: string) => {
    if (filterCat === 'all') return true;
    if (filterCat === 'foundations') {
      return paperCat === 'foundations' || paperCat === 'basic_circuits' || paperCat === 'electrical_circuits';
    }
    if (filterCat === 'ac_signals') {
      return paperCat === 'ac_signals';
    }
    if (filterCat === 'power_transmission') {
      return paperCat === 'electrical_power' || paperCat === 'power_transmission' || paperCat === 'power_systems';
    }
    if (filterCat === 'renewable_energy') {
      return paperCat === 'solar_energy' || paperCat === 'batteries' || paperCat === 'electrical_grid' || paperCat === 'renewable_energy' || paperCat === 'energy';
    }
    if (filterCat === 'mathematics') {
      return paperCat === 'mathematics';
    }
    return paperCat === filterCat;
  };

  // Filtered papers (Search query + Category + Type)
  const filteredPapers = papers.filter((p) => {
    if (selectedType === 'article' && p.type !== 'article') return false;
    if (selectedType === 'research' && p.type === 'article') return false;
    if (selectedCategory !== 'all' && !matchesCategory(p.category, selectedCategory)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q) || (p.titleEn && p.titleEn.toLowerCase().includes(q));
      const matchAuthor = p.author.toLowerCase().includes(q) || (p.authorEn && p.authorEn.toLowerCase().includes(q));
      const matchAbstract = p.abstract.toLowerCase().includes(q) || (p.abstractEn && p.abstractEn.toLowerCase().includes(q));
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(q)) || (p.tagsEn && p.tagsEn.some((t) => t.toLowerCase().includes(q)));
      return matchTitle || matchAuthor || matchAbstract || matchTags;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-black font-serif p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Top Navigation Bar with View Tabs and AR/EN Language Switcher */}
      <Navbar
        activeView={activeView}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onNavigateHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateEducational={() => {
          setActiveView('educational');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateNews={() => {
          setActiveView('news');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setActiveView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* VIEW 1: HOME - SEARCH PORTAL FIRST AND FOREMOST */}
      {activeView === 'home' && (
        <main className="space-y-6 sm:space-y-8">
          {/* Scientific Journal Search Portal */}
          <section className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-10 md:p-12 relative">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
              {/* Official Brand Masthead */}
              <div className="space-y-3">
                <div className="flex justify-center pb-2">
                  <img
                    src="/logo.png"
                    alt="YOSKO FLUX"
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain mx-auto select-none"
                  />
                </div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  {isEn ? 'Self-Directed Learning Portfolio • Electrical Engineering Prep' : 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية • مصطفى'}
                </div>
                <p className="text-xs sm:text-sm font-serif text-neutral-600 max-w-xl mx-auto leading-relaxed">
                  {isEn
                    ? 'A structured engineering learning journey: from basic circuits and AC signals to power transmission, solar energy, batteries, and electrical grid balance.'
                    : 'مسار تعلم هندسي متدرج: من قوانين الدوائر الأساسية والتيار المتردد إلى نقل القدرة، والطاقة الشمسية، والبطاريات، وثبات تردد الشبكة الكهربائية.'}
                </p>
              </div>

              {/* Integrated Cohesive Search Bar */}
              <div className="max-w-2xl mx-auto pt-1 sm:pt-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="relative flex items-center bg-white border border-neutral-300 rounded-xl p-1 sm:p-1.5 transition-all focus-within:border-black focus-within:ring-2 focus-within:ring-black/5"
                >
                  <div className="ps-2.5 sm:ps-3 text-neutral-400 pointer-events-none flex items-center shrink-0">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
                  </div>

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      isEn
                        ? 'Search title, keyword, author, or equation (e.g. Fourier, RLC, Phasor)...'
                        : 'ابحث بالعنوان، الكلمات المفتاحية، أو المعادلة (مثل Phasor, RLC, Fourier)...'
                    }
                    className="w-full bg-transparent py-2 px-3 text-xs sm:text-sm font-serif placeholder:text-neutral-400 focus:outline-none text-neutral-900"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="p-1.5 me-1 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-md cursor-pointer transition-colors shrink-0"
                      title={isEn ? 'Clear search' : 'مسح البحث'}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    type="submit"
                    className="bg-black hover:bg-neutral-800 text-white px-4 sm:px-6 py-2 font-serif text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>{isEn ? 'Search' : 'بحث'}</span>
                  </button>
                </form>

                {/* Scholarly Metadata Micro-Bar */}
                <div className="flex items-center justify-center gap-3 sm:gap-6 mt-3 font-serif text-[10px] sm:text-[11px] text-neutral-500 font-medium">
                  <span>{isEn ? 'Open Access' : 'وصول مفتوح'}</span>
                  <span>•</span>
                  <span>{isEn ? 'Interactive Simulations' : 'محاكاة رياضية وهندسية'}</span>
                  <span>•</span>
                  <span>{isEn ? 'Academic Portfolio' : 'ملف القبول الأكاديمي'}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick News Banner Callout */}
          <div className="border border-neutral-200 rounded-xl bg-neutral-50/70 p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-2 py-0.5 font-bold uppercase flex items-center gap-1 text-[11px] rounded-md">
                <Newspaper className="w-3.5 h-3.5" />
                {isEn ? 'Latest Update' : 'آخر تحديث'}
              </span>
              <span className="font-medium text-neutral-700">
                {isEn
                  ? 'New project logs & university portfolio updates added to the News page.'
                  : 'تمت إضافة تحديثات جديدة حول مشاريع الدوائر والتحضير للتقديم الجامعي.'}
              </span>
            </div>
            <button
              onClick={() => {
                setActiveView('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-raw-secondary px-3 py-1 font-bold flex items-center gap-1 cursor-pointer rounded-lg"
            >
              <span>{isEn ? 'Visit News Page' : 'زيارة صفحة الأخبار'}</span>
              {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* الأوراق والأبحاث المطابقة */}
          <section className="space-y-4 sm:space-y-5">
            <div className="border-b border-neutral-200 pb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-headline text-black">
                  {isEn ? 'Matched Research Papers & Lessons' : 'الأوراق والأبحاث المطابقة'}
                </h2>
                <span className="bg-black text-white px-2 py-0.5 font-mono text-xs font-bold rounded-md">
                  {filteredPapers.length} {isEn ? 'items' : 'مادة'}
                </span>
              </div>
            </div>

            {/* شريط خيارات وتصنيفات البحث - نوع المحتوى والتصنيفات */}
            <div className="flex flex-col gap-3 py-1">
              {/* Type Switcher */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold border transition-all cursor-pointer ${
                    selectedType === 'all'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  {isEn ? 'All Content' : 'جميع المواد'} ({papers.length})
                </button>
                <button
                  onClick={() => setSelectedType('article')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedType === 'article'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Educational Articles (Ready)' : 'المقالات التثقيفية (جاهزة للنشر)'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${selectedType === 'article' ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                    {papers.filter((p) => p.type === 'article').length}
                  </span>
                </button>
                <button
                  onClick={() => setSelectedType('research')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedType === 'research'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Academic Research' : 'الأوراق التخصصية'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${selectedType === 'research' ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                    {papers.filter((p) => p.type !== 'article').length}
                  </span>
                </button>
              </div>

              {/* Category Pills & Reset */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-100 pt-2.5">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {[
                    {
                      id: 'all',
                      label: isEn ? 'All Progression' : 'كل مسار التعلم',
                      count: papers.length,
                      icon: Layers
                    },
                    {
                      id: 'foundations',
                      label: isEn ? 'Basic Circuits' : 'الأساسيات والدوائر',
                      count: papers.filter((p) => matchesCategory(p.category, 'foundations')).length,
                      icon: Zap
                    },
                    {
                      id: 'ac_signals',
                      label: isEn ? 'AC & Signals' : 'التيار المتردد والإشارات',
                      count: papers.filter((p) => matchesCategory(p.category, 'ac_signals')).length,
                      icon: Pi
                    },
                    {
                      id: 'power_transmission',
                      label: isEn ? 'Power & Transmission' : 'القدرة ونقل الطاقة',
                      count: papers.filter((p) => matchesCategory(p.category, 'power_transmission')).length,
                      icon: Zap
                    },
                    {
                      id: 'renewable_energy',
                      label: isEn ? 'Solar & Grid' : 'الطاقة الشمسية والشبكة',
                      count: papers.filter((p) => matchesCategory(p.category, 'renewable_energy')).length,
                      icon: Battery
                    },
                    {
                      id: 'mathematics',
                      label: isEn ? 'Mathematics' : 'رياضيات',
                      count: papers.filter((p) => matchesCategory(p.category, 'mathematics')).length,
                      icon: Pi
                    },
                  ].map((cat) => {
                    const Icon = cat.icon;
                    const active = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id as TopicCategory | 'all')}
                        className={`px-2.5 py-1 border rounded-lg text-xs font-serif font-medium flex items-center gap-1.5 cursor-pointer transition-all ${
                          active
                            ? 'border-black bg-black text-white font-bold'
                            : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{cat.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 font-mono rounded ${
                            active
                              ? 'bg-neutral-800 text-white'
                              : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {(selectedCategory !== 'all' || selectedType !== 'all' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedType('all');
                      setSearchQuery('');
                    }}
                    className="font-serif text-xs text-neutral-600 underline hover:text-black cursor-pointer px-1 py-1"
                  >
                    {isEn ? 'Reset Filters' : 'إعادة ضبط التصفية'}
                  </button>
                )}
              </div>
            </div>

            {filteredPapers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredPapers.map((paper) => (
                  <ResearchCard
                    key={paper.id}
                    paper={paper}
                    language={language}
                    onOpenPaper={handleOpenPaper}
                  />
                ))}
              </div>
            ) : (
              <div className="border border-neutral-200 rounded-2xl p-8 sm:p-12 text-center bg-neutral-50 font-serif">
                <div className="text-lg sm:text-xl font-bold mb-2 text-black font-headline">
                  {isEn ? 'No research papers match your search' : 'لم يتم العثور على أبحاث تطابق بحثك'}
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 mb-5 max-w-md mx-auto">
                  {isEn
                    ? 'No materials found matching this query or filter. Try clearing filters or searching other keywords.'
                    : 'لا توجد نتائج مطابقة لمصطلح البحث أو التصنيف المحدد. يمكنك تجربة كلمات بحث أخرى أو إلغاء التصفية.'}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn-raw-primary px-5 py-2.5 text-xs font-bold cursor-pointer"
                >
                  {isEn ? 'Clear filters & show all papers' : 'إلغاء التصفية وعرض كافة الأبحاث'}
                </button>
              </div>
            )}
          </section>
        </main>
      )}

      {/* VIEW 2: DEDICATED SEPARATE NEWS PAGE */}
      {activeView === 'news' && (
        <NewsView
          language={language}
          onBackToHome={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* VIEW: DEDICATED EDUCATIONAL ARTICLES & GOOGLE SITES KIT */}
      {activeView === 'educational' && (
        <EducationalArticlesView
          language={language}
          onOpenArticleDetail={(articleId) => {
            const matched =
              papers.find((p) => (p.id === 'paper-intro-electrons-grid' || p.id === 'paper-geek-guide') && (articleId === 'edu-article-intro' || articleId === 'edu-article-geek-guide')) ||
              papers.find((p) => p.id === 'paper-foundations-ohm' && articleId === 'edu-article-ohm') ||
              papers.find((p) => (p.id === 'paper-signal-waveforms' || p.id === 'paper-edu-3') && articleId === 'edu-article-3') ||
              papers.find((p) => (p.id === 'paper-rlc-resonance' || p.id === 'lesson-rlc-resonance') && articleId === 'edu-article-rlc') ||
              papers.find((p) => (p.id === 'paper-power-transmission' || p.id === 'paper-edu-1') && articleId === 'edu-article-transmission') ||
              papers.find((p) => (p.id === 'paper-solar-grid' || p.id === 'paper-edu-4') && articleId === 'edu-article-4') ||
              papers.find((p) => p.id === articleId || p.id === `paper-${articleId}` || p.id === `paper-${articleId.replace('edu-article-', '')}`);
            if (matched) {
              handleOpenPaper(matched);
            }
          }}
        />
      )}

      {/* VIEW 3: ABOUT / الملف الأكاديمي والشخصي */}
      {activeView === 'about' && (
        <AboutView
          language={language}
          onBackToHome={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          papersCount={papers.length}
        />
      )}

      {/* VIEW 4: FULL ARTICLE READING VIEW (صفحة موحدة مع خيار PDF وبدون كلمة هوامش) */}
      {activeView === 'detail' && selectedPaper && (
        <ResearchDetailView
          paper={selectedPaper}
          language={language}
          startAtQuiz={startAtQuiz}
          onBack={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Academic Institutional Footer - Structured 4-Column Layout using Native Site Colors (Black, White, Neutral) */}
      <footer className="print:hidden border-t border-neutral-200 bg-white pt-12 pb-10 mt-16 font-serif text-xs text-neutral-700">
        {/* Main 4-Column Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-neutral-200">
          
          {/* Column 1: Brand & Academic Platform Statement (Rightmost in RTL) */}
          <div className="space-y-3.5">
            <div
              onClick={() => {
                setActiveView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="YOSKO FLUX"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed font-serif">
              {isEn
                ? 'Yosko Flux is a specialized repository for scholarly and engineering research, featuring investigations in electrical circuits, grid inertia systems, and applied Fourier analysis, equipped with interactive simulations and comprehension assessments for academic admission.'
                : 'منصة يوسكو فلوكس (Yosko Flux) للمحتوى العلمي والأبحاث الهندسية، تشمل أبحاثاً ودراسات في الهندسة الكهربائية، تحليل نظم الطاقة، والرياضيات التطبيقية، مدعومة بنماذج محاكاة تفاعلية واختبارات استيعاب لملف القبول الجامعي.'}
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                }}
                className="w-8 h-8 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-black hover:text-white hover:border-black text-neutral-700 flex items-center justify-center transition-all cursor-pointer"
                title={isEn ? 'Share repository link' : 'نسخ رابط المستودع'}
                aria-label="Share"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setActiveView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-black hover:text-white hover:border-black text-neutral-700 flex items-center justify-center transition-all cursor-pointer"
                title={isEn ? 'About the researcher' : 'نبذة عن الباحث'}
                aria-label="About"
              >
                <GraduationCap className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setActiveView('home');
                  setSelectedCategory('all');
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-black hover:text-white hover:border-black text-neutral-700 flex items-center justify-center transition-all cursor-pointer"
                title={isEn ? 'Open Papers' : 'تصفح الأبحاث'}
                aria-label="Papers"
              >
                <BookOpen className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (روابط سريعة) */}
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-bold text-sm sm:text-base font-serif">
                {isEn ? 'Quick Links' : 'روابط سريعة'}
              </h3>
              <div className="w-6 h-0.5 bg-black rounded-full mt-1.5" />
            </div>

            <ul className="space-y-2.5 text-xs font-serif">
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    setSelectedCategory('all');
                    setSearchQuery('');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Full Research Archive' : 'أرشيف الأبحاث الكامل'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Advanced Search Engine' : 'محرك البحث المتقدم'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('educational');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span className="font-bold text-black">{isEn ? 'Educational Articles & PhET Labs' : 'المقالات التثقيفية ودليل Google Sites'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('news');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'News & Updates' : 'الأخبار والمستجدات'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'About Researcher & Portfolio' : 'حول الباحث والمسيرة العلمية'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (papers.length > 0) {
                      handleOpenPaper(papers[0], false);
                    }
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Interactive Simulation Lab' : 'معامل المحاكاة التفاعلية'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Disciplines (المصادر) */}
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-bold text-sm sm:text-base font-serif">
                {isEn ? 'Resources & Fields' : 'المصادر والمجالات'}
              </h3>
              <div className="w-6 h-0.5 bg-black rounded-full mt-1.5" />
            </div>

            <ul className="space-y-2.5 text-xs font-serif">
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    setSelectedCategory('electricity');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Electrical Engineering (AC & Resonance)' : 'أبحاث الهندسة الكهربائية والطورية'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    setSelectedCategory('energy');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Energy Systems & Rotational Inertia' : 'أنظمة الطاقة والقصور الذاتي'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    setSelectedCategory('mathematics');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Applied Mathematics & Fourier Series' : 'الرياضيات التطبيقية وفورييه'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (papers.length > 0) {
                      handleOpenPaper(papers[0], true);
                    }
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black shrink-0 transition-colors" />
                  )}
                  <span>{isEn ? 'Comprehension & Quiz Bank' : 'بنك أسئلة واختبارات الاستيعاب'}</span>
                </button>
              </li>
              <li>
                <span className="text-neutral-500 flex items-center gap-1.5">
                  {isEn ? (
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  ) : (
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  )}
                  <span>{isEn ? 'Open Scholarly Access Policy' : 'سياسة الوصول الحر والمفتوح'}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification (معلومات الاتصال) */}
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-bold text-sm sm:text-base font-serif">
                {isEn ? 'Contact Information' : 'معلومات الاتصال'}
              </h3>
              <div className="w-6 h-0.5 bg-black rounded-full mt-1.5" />
            </div>

            <div className="space-y-3 text-xs font-serif text-neutral-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <div className="font-semibold text-neutral-900">{isEn ? 'Riyadh, Saudi Arabia' : 'الرياض، المملكة العربية السعودية'}</div>
                  <div className="text-[11px] text-neutral-500">{isEn ? 'University Admission Dossier' : 'ملف القبول الأكاديمي والبحثي'}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-black shrink-0" />
                <a
                  href="mailto:mos77yasco@gmail.com"
                  className="hover:underline font-mono text-[11px] text-neutral-900"
                >
                  mos77yasco@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <div className="font-semibold text-neutral-900">{isEn ? 'Academic Evaluation Status' : 'حالة التقييم الأكاديمي'}</div>
                  <div className="text-[11px] text-neutral-500">{isEn ? 'Ready for Admissions Review' : 'متاح للجان القبول والتحكيم الجامعي'}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <div className="font-semibold text-neutral-900">{isEn ? 'Access & Review Window' : 'المراجعة والاستعراض'}</div>
                  <div className="text-[11px] text-neutral-500">{isEn ? 'Continuous Open Access • 2026' : 'متاح للمطالعة المفتوحة طوال الأسبوع'}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-xs font-serif">
          <div className="text-center sm:text-start">
            {isEn
              ? 'YOSKO FLUX © 2026 • SCIENCE / ENGINEERING / TOMORROW • All rights reserved.'
              : 'يوسكو فلوكس (Yosko Flux) © 2026 • العلوم / الهندسة / المستقبل • جميع الحقوق محفوظة كملف علمي مستقل.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-neutral-700 hover:text-black transition-colors cursor-pointer text-xs font-bold"
            >
              <span>{isEn ? 'Back to top' : 'العودة للأعلى'}</span>
              <ArrowUp className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
