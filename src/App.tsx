import React, { useState, useEffect } from 'react';
import { ResearchPaper, TopicCategory, Language } from './types';
import { INITIAL_PAPERS } from './data/initialData';
import { Navbar, AppView } from './components/Navbar';
import { ResearchCard } from './components/ResearchCard';
import { ResearchDetailView } from './components/ResearchDetailView';
import { AboutView } from './components/AboutView';
import { NewsView } from './components/NewsView';
import { EducationalArticlesView } from './components/EducationalArticlesView';
import { ProjectsView } from './components/ProjectsView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { CertificatesView } from './components/CertificatesView';
import { LearningPathView } from './components/LearningPathView';
import { ENGINEERING_PROJECTS, EngineeringProject } from './data/projectsData';
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
  Globe
} from 'lucide-react';

const STORAGE_KEY = 'yosko_flux_academic_papers_v10';

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
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return INITIAL_PAPERS.map((initP) => {
            const found = parsed.find((p: ResearchPaper) => p.id === initP.id);
            return found ? { ...initP, viewsCount: found.viewsCount } : initP;
          });
        }
      }
    } catch (e) {
      console.error('Failed to parse saved papers:', e);
    }
    return INITIAL_PAPERS;
  });

  const [activeView, setActiveView] = useState<AppView>('home');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [selectedProject, setSelectedProject] = useState<EngineeringProject | null>(null);
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

  const handleOpenProjectById = (projectId: string) => {
    const proj = ENGINEERING_PROJECTS.find((p) => p.id === projectId) || ENGINEERING_PROJECTS[0];
    setSelectedProject(proj);
    setActiveView('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticleById = (articleId: string) => {
    const matched =
      papers.find((p) => p.id === articleId) ||
      papers.find((p) => p.id.includes(articleId) || articleId.includes(p.id)) ||
      papers[0];
    handleOpenPaper(matched);
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
    if (filterCat === 'power_engineering' || filterCat === 'power_transmission') {
      return (
        paperCat === 'power_engineering' ||
        paperCat === 'electrical_power' ||
        paperCat === 'power_transmission' ||
        paperCat === 'power_systems'
      );
    }
    if (filterCat === 'renewable_energy') {
      return (
        paperCat === 'solar_energy' ||
        paperCat === 'batteries' ||
        paperCat === 'electrical_grid' ||
        paperCat === 'renewable_energy' ||
        paperCat === 'energy'
      );
    }
    if (filterCat === 'mathematics') {
      return paperCat === 'mathematics';
    }
    return paperCat === filterCat;
  };

  // Filtered papers
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
        onNavigateProjects={() => {
          setActiveView('projects');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateEducational={() => {
          setActiveView('educational');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateLearningPath={() => {
          setActiveView('path');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCertificates={() => {
          setActiveView('certificates');
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
          <section className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-10 md:p-12 relative shadow-2xs">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
              {/* Official Brand Masthead */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-center items-center py-1 sm:py-2">
                  <img
                    src="/logo.png"
                    alt="YOSKO FLUX"
                    className="h-auto object-contain mx-auto select-none transition-all"
                    style={{ maxHeight: '58px', maxWidth: '280px', width: 'auto', height: 'auto' }}
                  />
                </div>
                <div className="text-xs sm:text-sm font-serif text-neutral-800 font-bold tracking-wide">
                  {isEn
                    ? 'Self-Directed Learning Portfolio • Electrical Engineering Prep'
                    : 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية • مصطفى'}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed sm:leading-loose px-2 font-serif">
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
                  <span>{isEn ? 'Self-Directed Portfolio' : 'ملف التعلم الذاتي'}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick News Banner Callout */}
          <div className="border border-neutral-200 rounded-xl bg-neutral-50/70 p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 font-serif text-xs">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-2 py-0.5 font-bold uppercase flex items-center gap-1 text-[11px] rounded-md font-serif">
                <Newspaper className="w-3.5 h-3.5" />
                {isEn ? 'Latest Update' : 'آخر تحديث'}
              </span>
              <span className="font-medium text-neutral-700 font-serif">
                {isEn
                  ? 'New engineering circuit simulations, mathematical derivations, and technical progress notes.'
                  : 'تمت إضافة تحليلات الدوائر الرياضية ونماذج المحاكاة الستة وتحديثات التقدم في صفحة الأخبار.'}
              </span>
            </div>
            <button
              onClick={() => {
                setActiveView('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-raw-secondary px-3 py-1 font-bold flex items-center gap-1 cursor-pointer rounded-lg font-serif"
            >
              <span>{isEn ? 'Visit News Page' : 'زيارة صفحة الأخبار'}</span>
              {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Articles & Papers Section */}
          <section className="space-y-4 sm:space-y-5">
            <div className="border-b border-neutral-200 pb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-headline text-black">
                  {isEn ? 'Curriculum Articles & Studies' : 'المقالات والأوراق التعليمية'}
                </h2>
                <span className="bg-black text-white px-2 py-0.5 font-serif text-xs font-bold rounded-md">
                  {filteredPapers.length} {isEn ? 'items' : 'مادة'}
                </span>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 py-1 font-serif text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded-md font-bold border transition-all cursor-pointer font-serif ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {isEn ? 'All Categories' : 'كافة الأقسام'} ({papers.length})
              </button>
              <button
                onClick={() => setSelectedCategory('foundations')}
                className={`px-3 py-1 rounded-md font-bold border transition-all cursor-pointer font-serif ${
                  selectedCategory === 'foundations'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {isEn ? 'Foundations' : 'الأساسيات والدوائر'}
              </button>
              <button
                onClick={() => setSelectedCategory('ac_signals')}
                className={`px-3 py-1 rounded-md font-bold border transition-all cursor-pointer font-serif ${
                  selectedCategory === 'ac_signals'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {isEn ? 'AC & Signals' : 'التيار المتردد والإشارات'}
              </button>
              <button
                onClick={() => setSelectedCategory('power_transmission')}
                className={`px-3 py-1 rounded-md font-bold border transition-all cursor-pointer font-serif ${
                  selectedCategory === 'power_transmission'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {isEn ? 'Power Engineering' : 'هندسة القوى'}
              </button>
              <button
                onClick={() => setSelectedCategory('renewable_energy')}
                className={`px-3 py-1 rounded-md font-bold border transition-all cursor-pointer font-serif ${
                  selectedCategory === 'renewable_energy'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {isEn ? 'Renewable Energy' : 'الطاقة المتجددة والشبكة'}
              </button>
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
                  {isEn ? 'No articles match your search' : 'لم يتم العثور على مواد تطابق بحثك'}
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
                  {isEn ? 'Clear filters & show all' : 'إلغاء التصفية وعرض الكل'}
                </button>
              </div>
            )}
          </section>

          {/* ============================================================== */}
          {/* PROMINENT PROJECTS SHORTCUT SECTION AT THE BOTTOM OF HOME      */}
          {/* اختصار واضح ومباشر للمشاريع الهندسية التطبيقية الـ 6             */}
          {/* ============================================================== */}
          <section className="border-2 border-black rounded-2xl bg-neutral-50 p-6 sm:p-8 font-serif shadow-xs">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-300 pb-5 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-black text-white px-2.5 py-0.5 text-xs font-mono font-bold uppercase rounded">
                    {isEn ? 'ENGINEERING PROJECTS' : 'المشاريع الهندسية التطبيقية'}
                  </span>
                  <span className="text-xs text-neutral-600 font-bold">
                    {isEn ? '6 Complete Interactive Labs' : '٦ مشاريع بمحاكيات رسمية وحسابات يدوية'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-headline text-black">
                  {isEn ? 'Applied Engineering Projects' : 'اختصار المشاريع الهندسية التطبيقية'}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                  {isEn
                    ? 'Explore 6 self-directed laboratory projects complete with official interactive simulators (Falstad CircuitJS & PhET), IEEE Std 315 schematics, step-by-step hand calculations, and experimental validation tables.'
                    : 'استكشف ٦ مشاريع مخبرية وتطبيقية متكاملة تتضمن المحاكيات الأصلية (Falstad و PhET)، ومخططات IEEE القياسية، وخطوات الحساب اليدوي، وجداول مقارنة النتائج النظرية بالمحاكاة.'}
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveView('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-raw-primary min-h-[42px] px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shrink-0 rounded-xl cursor-pointer"
              >
                <span>{isEn ? 'Open All 6 Projects Directory' : 'فتح صفحة المشاريع كاملة'}</span>
                <span>{isEn ? '→' : '←'}</span>
              </button>
            </div>

            {/* Quick Cards Grid for the 6 Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {ENGINEERING_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    setSelectedProject(proj);
                    setActiveView('project-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-neutral-300 hover:border-black rounded-xl p-4 sm:p-5 bg-white hover:bg-neutral-100/70 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold bg-black text-white px-2 py-0.5 rounded text-[11px]">
                        {proj.projectNumber}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-600 font-bold">
                        {isEn ? proj.difficulty : proj.difficultyAr}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-black group-hover:underline font-headline leading-snug">
                      {isEn ? proj.titleEn : proj.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {isEn ? proj.subtitleEn : proj.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] text-neutral-500 font-semibold">
                      {proj.simulationSetup.toolName}
                    </span>
                    <span className="font-bold text-black flex items-center gap-1 group-hover:underline">
                      <span>{isEn ? 'Open Project' : 'فتح المشروع'}</span>
                      <span>{isEn ? '→' : '←'}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: PROJECTS OVERVIEW */}
      {activeView === 'projects' && (
        <ProjectsView
          language={language}
          onSelectProject={(project) => {
            setSelectedProject(project);
            setActiveView('project-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* VIEW: PROJECT DETAIL VIEW */}
      {activeView === 'project-detail' && selectedProject && (
        <ProjectDetailView
          project={selectedProject}
          language={language}
          onBack={() => {
            setActiveView('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* VIEW: LEARNING PATH ROADMAP */}
      {activeView === 'path' && (
        <LearningPathView
          language={language}
          onOpenArticle={(articleId) => {
            handleOpenArticleById(articleId);
          }}
          onOpenProject={(projectId) => {
            handleOpenProjectById(projectId);
          }}
        />
      )}

      {/* VIEW: CERTIFICATES & COURSEWORK */}
      {activeView === 'certificates' && (
        <CertificatesView
          language={language}
          onNavigateProjects={() => {
            setActiveView('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* VIEW: EDUCATIONAL ARTICLES CURRICULUM */}
      {activeView === 'educational' && (
        <EducationalArticlesView
          language={language}
          onOpenArticleDetail={(articleId) => {
            handleOpenArticleById(articleId);
          }}
          onOpenProject={(projectId) => {
            handleOpenProjectById(projectId);
          }}
        />
      )}

      {/* VIEW: NEWS PAGE */}
      {activeView === 'news' && (
        <NewsView
          language={language}
          onBackToHome={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* VIEW: ABOUT */}
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

      {/* VIEW: FULL ARTICLE READING VIEW (10-step pedagogical structure) */}
      {activeView === 'detail' && selectedPaper && (
        <ResearchDetailView
          paper={papers.find((p) => p.id === selectedPaper.id) || selectedPaper}
          language={language}
          startAtQuiz={startAtQuiz}
          onBack={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateProjects={() => {
            setActiveView('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Academic Institutional Footer */}
      <footer className="print:hidden border-t border-neutral-200 bg-white pt-12 pb-10 mt-16 font-serif text-xs text-neutral-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-neutral-200">
          {/* Column 1: Brand & Academic Statement */}
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
                className="h-8 sm:h-9 w-auto object-contain"
                style={{ maxHeight: '36px', maxWidth: '160px', width: 'auto', height: 'auto' }}
              />
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed font-serif">
              {isEn
                ? 'Yosko Flux documents self-directed engineering learning in electrical circuits, power dynamics, mathematics, and renewable energy, supported by real simulations, calculations, and structured projects.'
                : 'يوسكو فلوكس توثق مسيرة التعلم الذاتي في الدوائر الكهربائية، وديناميكا القوى، والرياضيات التطبيقية، والطاقة المتجددة عبر نماذج المحاكاة التفاعلية، والاشتقاقات، والمشاريع الهندسية.'}
            </p>

            <div className="font-mono text-[11px] text-neutral-500">
              <span className="font-bold text-black">{isEn ? 'Status:' : 'الحالة:'}</span>{' '}
              {isEn ? 'High-School Graduate • Independent Learning' : 'خريج ثانوية • ملف تعلم ذاتي'}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-bold text-sm sm:text-base font-serif">
                {isEn ? 'Engineering Sections' : 'أقسام المنصة'}
              </h3>
              <div className="w-6 h-0.5 bg-black rounded-full mt-1.5" />
            </div>

            <ul className="space-y-2 text-xs font-serif">
              <li>
                <button
                  onClick={() => {
                    setActiveView('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start font-bold"
                >
                  {isEn ? <ChevronRight className="w-3.5 h-3.5 text-black" /> : <ChevronLeft className="w-3.5 h-3.5 text-black" />}
                  <span>{isEn ? 'Engineering Projects (6 Projects)' : 'المشاريع الهندسية (6 مشاريع)'}</span>
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
                  {isEn ? <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />}
                  <span>{isEn ? 'Curriculum Articles (16 Topics)' : 'المقالات التأسيسية (16 موضوعاً)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('path');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />}
                  <span>{isEn ? 'Learning Path Roadmap' : 'خارطة مسار التعلم'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('certificates');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-neutral-600 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer text-start"
                >
                  {isEn ? <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />}
                  <span>{isEn ? 'Course Certificates (OpenLearn & Cisco)' : 'الشهادات والمساقات المعتمدة'}</span>
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
                  {isEn ? <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />}
                  <span>{isEn ? 'News & Progress Updates' : 'الأخبار وتحديثات التقدم'}</span>
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
                  {isEn ? <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />}
                  <span>{isEn ? 'About Mustafa & The Lab' : 'عن مصطفى والملف الشخصي'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Disciplines */}
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-bold text-sm sm:text-base font-serif">
                {isEn ? 'Study Disciplines' : 'المجالات التخصصية'}
              </h3>
              <div className="w-6 h-0.5 bg-black rounded-full mt-1.5" />
            </div>

            <ul className="space-y-2 text-xs font-serif">
              <li>
                <button
                  onClick={() => {
                    setActiveView('educational');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-600 hover:text-black text-start"
                >
                  {isEn ? '1. Foundations (Ohm & Kirchhoff)' : '١. الأساسيات (قانون أوم وكيرشوف)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('educational');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-600 hover:text-black text-start"
                >
                  {isEn ? '2. AC & Signals (Phasors & RLC Resonance)' : '٢. التيار المتردد (الطور ورنين RLC)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('educational');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-600 hover:text-black text-start"
                >
                  {isEn ? '3. Power Engineering (Power Factor & Grid)' : '٣. هندسة القوى (معامل القدرة والنقل)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('educational');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-600 hover:text-black text-start"
                >
                  {isEn ? '4. Renewable Energy (PV, Battery & Grid)' : '٤. الطاقة المتجددة (الخلايا والبطاريات)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-bold text-sm sm:text-base font-serif">
                {isEn ? 'Contact Information' : 'معلومات التواصل'}
              </h3>
              <div className="w-6 h-0.5 bg-black rounded-full mt-1.5" />
            </div>

            <div className="space-y-2.5 text-xs font-serif text-neutral-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <div className="font-semibold text-neutral-900">
                    {isEn ? 'Al-Qassim - Buraidah, Saudi Arabia' : 'القصيم - بريدة، المملكة العربية السعودية'}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {isEn ? 'Origin: Chad • Aspiring EE Student' : 'الأصل: جمهورية تشاد • طالب يستعد للهندسة الكهربائية'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black shrink-0" />
                <a
                  href="mailto:mos77yasco@gmail.com"
                  className="hover:underline font-mono text-[11px] text-neutral-900"
                >
                  mos77yasco@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <div className="font-semibold text-neutral-900">
                    {isEn ? 'Collaboration & Review' : 'التعاون والمراجعة الفنية'}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {isEn
                      ? 'Open for Engineering Projects, Simulations & Feedback'
                      : 'متاح للتعاون في المشاريع الهندسية، المحاكاة، والتطوير التقني'}
                  </div>
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

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-black transition-colors cursor-pointer text-xs font-bold"
          >
            <span>{isEn ? 'Back to top' : 'العودة للأعلى'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-black" />
          </button>
        </div>
      </footer>
    </div>
  );
}
