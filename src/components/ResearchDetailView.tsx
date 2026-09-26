import React, { useState, useRef, useEffect } from 'react';
import { ResearchPaper, Language } from '../types';
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Share2,
  Download,
  Clock,
  Tag,
  BookOpen,
  Bookmark,
  Award,
  Video,
  Play,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info,
  FileText,
  CheckSquare,
  ListOrdered
} from 'lucide-react';
import { SimulationViewer } from './Simulations';
import { QuizSection } from './QuizSection';
import { MathFormula } from './MathFormula';
import { SimulationWithGuide } from './SimulationWithGuide';
import { ResearchExampleFigure } from './ResearchExampleFigure';

interface ResearchDetailViewProps {
  paper: ResearchPaper;
  language: Language;
  onBack: () => void;
  startAtQuiz?: boolean;
}

export const ResearchDetailView: React.FC<ResearchDetailViewProps> = ({
  paper,
  language,
  onBack,
  startAtQuiz,
}) => {
  const isEn = language === 'en';
  const [copied, setCopied] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'normal' | 'large'>('normal');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [simEngine, setSimEngine] = useState<'builtin' | 'phet'>(
    paper.type === 'article' || paper.id.startsWith('paper-edu') ? 'phet' : 'builtin'
  );

  const phetData = {
    'paper-intro-electrons-grid': {
      name: 'PhET Circuit Construction Kit: DC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-geek-guide': {
      name: 'PhET Circuit Construction Kit: DC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-foundations-ohm': {
      name: 'PhET Circuit Construction Kit: DC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-foundations-kirchhoff': {
      name: 'PhET Circuit Construction Kit: DC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-foundations-capacitors-inductors': {
      name: 'PhET Circuit Construction Kit: AC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-signal-waveforms': {
      name: 'PhET Fourier: Making Waves',
      url: 'https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html',
      link: 'https://phet.colorado.edu/en/simulations/fourier-making-waves',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-ac-sinewaves': {
      name: 'PhET Circuit Construction Kit: AC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-rlc-resonance': {
      name: 'PhET Circuit Construction Kit: AC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'lesson-rlc-resonance': {
      name: 'PhET Circuit Construction Kit: AC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-fourier-harmonics': {
      name: 'PhET Fourier: Making Waves',
      url: 'https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html',
      link: 'https://phet.colorado.edu/en/simulations/fourier-making-waves',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-fourier-analysis': {
      name: 'PhET Fourier: Making Waves',
      url: 'https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html',
      link: 'https://phet.colorado.edu/en/simulations/fourier-making-waves',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-power-factor': {
      name: 'PhET Circuit Construction Kit: AC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-power-transmission': {
      name: 'PhET Circuit Construction Kit: DC',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
      link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-solar-grid': {
      name: 'PhET Energy Forms and Changes',
      url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html',
      link: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-batteries-storage': {
      name: 'PhET Energy Forms and Changes',
      url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html',
      link: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'paper-renewable-frequency': {
      name: 'PhET Energy Forms and Changes',
      url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html',
      link: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    },
    'article-smart-grid-inertia': {
      name: 'PhET Energy Forms and Changes',
      url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html',
      link: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
      attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
    }
  }[paper.id] || {
    name: 'PhET Circuit Construction Kit: DC',
    url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    link: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).'
  };

  // Section references for clean in-page navigation
  const abstractRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const theoryRef = useRef<HTMLDivElement>(null);
  const simRef = useRef<HTMLDivElement>(null);
  const referencesRef = useRef<HTMLDivElement>(null);
  const quizSectionRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (startAtQuiz) {
      const timer = setTimeout(() => {
        quizSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [startAtQuiz]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    setDownloadNotice(true);
    setTimeout(() => {
      window.print();
      setDownloadNotice(false);
    }, 400);
  };

  const getCategoryLabel = () => {
    switch (paper.category) {
      case 'electricity':
        return isEn ? 'Electrical Engineering' : 'الهندسة الكهربائية';
      case 'energy':
        return isEn ? 'Energy Systems & Grids' : 'أنظمة الطاقة والشبكات';
      case 'mathematics':
        return isEn ? 'Applied Mathematics' : 'الرياضيات التطبيقية';
    }
  };

  const getTypeLabel = () => {
    switch (paper.type) {
      case 'research':
        return isEn ? 'Research Paper' : 'ورقة بحثية';
      case 'lesson':
        return isEn ? 'Video Lecture' : 'درس ومحاضرة';
      case 'article':
        return isEn ? 'Educational Article' : 'مقال تثقيفي';
    }
  };

  const tocItems = [
    { id: 'abstract', num: 1, label: isEn ? 'Executive Summary' : 'ملخص الورقة وأبرز النتائج', ref: abstractRef },
    ...(paper.videoUrl ? [{ id: 'video', num: 2, label: isEn ? 'Video Lecture' : 'المحاضرة المرئية والشرح', ref: videoRef }] : []),
    { id: 'theory', num: paper.videoUrl ? 3 : 2, label: isEn ? 'Theoretical Derivation & Equations' : 'التحليل النظري والمعادلات الحاكمة', ref: theoryRef },
    ...(paper.simulationType !== 'none' ? [{ id: 'sim', num: paper.videoUrl ? 4 : 3, label: isEn ? 'Interactive Simulation' : 'محرك المحاكاة التفاعلية', ref: simRef }] : []),
    ...(paper.references && paper.references.length > 0 ? [{ id: 'refs', num: paper.videoUrl ? (paper.simulationType !== 'none' ? 5 : 4) : (paper.simulationType !== 'none' ? 4 : 3), label: isEn ? 'References' : 'المراجع الأكاديمية والتوثيق', ref: referencesRef }] : []),
    { id: 'quiz', num: paper.videoUrl ? (paper.simulationType !== 'none' ? 6 : 5) : (paper.simulationType !== 'none' ? 5 : 4), label: isEn ? 'Comprehension Quiz' : 'اختبار قياس الاستيعاب', ref: quizSectionRef },
  ];

  return (
    <div className="space-y-4 sm:space-y-8 max-w-4xl mx-auto px-0 sm:px-0">
      {/* Top Academic Toolbar - Clean, smooth border */}
      <div className="print:hidden border border-neutral-200 rounded-2xl p-2.5 sm:p-3.5 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 font-mono text-xs">
        <div className="flex items-center justify-between sm:justify-start gap-2">
          <button
            onClick={onBack}
            className="btn-raw-secondary w-full sm:w-auto min-h-[36px] sm:min-h-[38px] px-3 sm:px-4 py-1.5 flex items-center justify-center gap-1.5 font-bold cursor-pointer text-xs"
          >
            {isEn ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            <span>{isEn ? 'Back to Repository' : 'العودة لفهرس الأبحاث'}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-start sm:justify-end">
          {/* Font Size Toggle */}
          <div className="border border-neutral-200 rounded-lg bg-neutral-50 flex items-center text-xs font-bold min-h-[36px] overflow-hidden">
            <button
              onClick={() => setFontSizeClass('normal')}
              className={`px-2.5 py-1 min-h-[34px] ${fontSizeClass === 'normal' ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-100'}`}
              title={isEn ? 'Normal font' : 'خط عادي'}
            >
              A
            </button>
            <div className="w-[1px] h-4 bg-neutral-300" />
            <button
              onClick={() => setFontSizeClass('large')}
              className={`px-2.5 py-1 min-h-[34px] ${fontSizeClass === 'large' ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-100'}`}
              title={isEn ? 'Large font' : 'تكبير الخط'}
            >
              A+
            </button>
          </div>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            className="btn-raw-primary min-h-[36px] sm:min-h-[38px] px-3 sm:px-3.5 py-1.5 flex items-center justify-center gap-1.5 font-bold cursor-pointer text-xs"
            title={isEn ? 'Download or Save as PDF' : 'تنزيل أو حفظ البحث بصيغة PDF'}
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>

          {/* Jump to Quiz */}
          <button
            onClick={() => scrollTo(quizSectionRef)}
            className="bg-black text-white hover:bg-neutral-800 min-h-[36px] sm:min-h-[38px] px-3 sm:px-4 py-1.5 flex items-center justify-center gap-1.5 font-bold cursor-pointer text-xs rounded-lg transition-colors"
            title={isEn ? 'Go to quiz questions' : 'الانتقال المباشر لأسئلة الاختبار'}
          >
            <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isEn ? `Go to Quiz (${paper.quiz.length})` : `الانتقال للاختبار (${paper.quiz.length})`}</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="btn-raw-secondary min-h-[36px] sm:min-h-[38px] px-3 py-1.5 flex items-center justify-center gap-1.5 cursor-pointer text-xs font-bold"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? (isEn ? 'Copied' : 'تم') : (isEn ? 'Share' : 'مشاركة')}</span>
          </button>
        </div>
      </div>

      {/* PDF Download Toast Notice */}
      {downloadNotice && (
        <div className="print:hidden border border-neutral-200 rounded-xl bg-yellow-50 p-3 sm:p-4 text-xs font-mono font-bold flex items-center justify-between text-neutral-900">
          <span>
            {isEn
              ? 'Opening Print view: Select "Save as PDF" to download the complete paper.'
              : 'جاري فتح نافذة الطباعة: اختر "حفظ بتنسيق PDF" (Save as PDF) لتنزيل البحث كاملاً.'}
          </span>
          <span className="bg-black text-white px-2 py-0.5 text-xs rounded-md">PDF</span>
        </div>
      )}

      {/* MAIN RESEARCH DOCUMENT - CLEAN FLUID EDITORIAL CANVAS (Border-free on mobile for optimal fit) */}
      <article className="bg-white px-3 py-5 sm:p-10 md:p-12 border-0 sm:border sm:border-neutral-200 sm:rounded-2xl font-serif space-y-6 sm:space-y-10">
        {/* Document Header */}
        <header className="border-b border-neutral-200 pb-5 sm:pb-7 space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs">
            <span className="bg-black text-white px-2.5 py-0.5 sm:py-1 font-bold uppercase text-[11px] sm:text-xs rounded-md">
              {getCategoryLabel()}
            </span>
            <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2.5 py-0.5 sm:py-1 font-bold uppercase text-[11px] sm:text-xs rounded-md">
              {getTypeLabel()}
            </span>
            <span className="text-neutral-500 flex items-center gap-1 mr-1 text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5" />
              {paper.readingTimeMinutes} {isEn ? 'min read' : 'دقيقة قراءة'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-headline text-black leading-tight">
            {isEn ? paper.titleEn || paper.title : paper.title}
          </h1>

          {paper.titleEn && !isEn && (
            <div className="font-mono text-xs sm:text-base text-neutral-500 font-medium">
              {paper.titleEn}
            </div>
          )}

          {/* Author & Academic Goals */}
          <div className="py-3 my-3 border-y border-neutral-200 font-mono text-xs text-neutral-700 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <span className="text-neutral-500 block text-[10px] sm:text-[11px] uppercase mb-0.5">
                {isEn ? 'Researcher / Author:' : 'إعداد وتوثيق:'}
              </span>
              <span className="font-bold text-black text-xs sm:text-sm">
                {isEn ? 'Mustafa | Independent Researcher' : 'مصطفى | باحث وهاوٍ مستقل'}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] sm:text-[11px] uppercase mb-0.5">
                {isEn ? 'Academic Focus:' : 'الغاية الأكاديمية:'}
              </span>
              <span className="font-bold text-black text-xs sm:text-sm">
                {isEn ? 'Electrical Eng. University Portfolio' : 'ملف التقديم الجامعي في الهندسة'}
              </span>
            </div>
          </div>

          {/* Direct Assessment Gateway Banner - Unmissable jump button */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <div className="font-sans font-bold text-xs sm:text-sm text-neutral-900">
                  {isEn ? 'Comprehension Quiz Available' : 'اختبار قياس الاستيعاب متاح لهذا البحث'}
                </div>
                <div className="font-mono text-[11px] text-neutral-500">
                  {paper.quiz.length} {isEn ? 'interactive questions testing core concepts' : 'أسئلة تفاعلية موضوعة لقياس فهمك للمادة'}
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollTo(quizSectionRef)}
              className="btn-raw-primary py-2 px-3.5 text-xs font-mono font-bold flex items-center justify-center gap-1.5 shrink-0 rounded-lg cursor-pointer"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>{isEn ? 'Go to Quiz Questions' : 'انتقل إلى أسئلة الاختبار الآن'}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Compact Collapsible Index Bar */}
          <div className="border border-neutral-200 rounded-xl bg-neutral-50/80 p-2.5 sm:p-3 font-mono text-xs mt-3">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="w-full min-h-[38px] flex items-center justify-between text-neutral-800 font-bold hover:text-black cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ListOrdered className="w-4 h-4 text-black" />
                <span className="text-xs sm:text-sm">{isEn ? 'Table of Contents' : 'فهرس محاور البحث (انتقال سريع)'}</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
            </button>

            {isTocOpen && (
              <div className="mt-2.5 pt-2.5 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.ref);
                      setIsTocOpen(false);
                    }}
                    className="text-start p-2 min-h-[36px] hover:bg-neutral-200/60 rounded-lg flex items-center gap-2 text-neutral-800 hover:text-black cursor-pointer transition-colors"
                  >
                    <span className="font-bold bg-white border border-neutral-200 rounded px-1.5 py-0.5 text-[10px]">
                      0{item.num}
                    </span>
                    <span className="hover:underline">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* SECTION 1: EXECUTIVE ABSTRACT & KEY FINDINGS */}
        <section ref={abstractRef} className="space-y-4">
          <div className="border-r-4 rtl:border-r-4 ltr:border-l-4 border-neutral-900 bg-neutral-50/60 rounded-xl pr-4 sm:pr-6 pl-3 py-3 space-y-3">
            <div className="font-mono text-xs font-bold uppercase text-neutral-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-black" />
              <span>{isEn ? 'Executive Summary & Key Findings' : 'ملخص الورقة وأبرز النتائج الجوهرية'}</span>
            </div>

            <p className="text-sm sm:text-lg leading-relaxed text-neutral-900 font-medium">
              {isEn ? paper.abstractEn || paper.abstract : paper.abstract}
            </p>

            {paper.keyFindings && paper.keyFindings.length > 0 && (
              <div className="border-t border-neutral-200 pt-3 mt-3 space-y-2">
                <div className="font-mono text-xs font-bold text-neutral-600">
                  {isEn ? 'Core Conclusions:' : 'الاستنتاجات الأساسية:'}
                </div>
                <ul className="space-y-2 font-sans text-xs sm:text-base text-neutral-900">
                  {(isEn ? paper.keyFindingsEn || paper.keyFindings : paper.keyFindings).map(
                    (finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                        <span className="font-mono font-bold text-[10px] sm:text-xs bg-black text-white px-2 py-0.5 rounded mt-0.5 flex-shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="leading-relaxed">{finding}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: EMBEDDED VIDEO LECTURE */}
        {paper.videoUrl && (
          <section ref={videoRef} className="space-y-3 sm:space-y-4 pt-3 border-t border-neutral-200">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
              <div className="flex items-center gap-2">
                <span className="bg-black text-white p-1 rounded-md">
                  <Video className="w-4 h-4" />
                </span>
                <h3 className="font-black text-lg sm:text-xl font-headline">
                  {isEn
                    ? paper.videoTitleEn || paper.videoTitle || 'Lecture Video'
                    : paper.videoTitle || 'المحاضرة المرئية والشرح المرفق'}
                </h3>
              </div>

              <a
                href={paper.videoUrl.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg transition-colors"
                title={isEn ? 'Watch on YouTube in new tab' : 'فتح المقطع على YouTube مباشرة'}
              >
                <Play className="w-3 h-3 text-red-600" />
                <span>{isEn ? 'Watch on YouTube ↗' : 'مشاهدة على YouTube ↗'}</span>
              </a>
            </div>

            {/* Video Player */}
            <div className="aspect-video w-full overflow-hidden border border-neutral-200 rounded-xl bg-black">
              <iframe
                src={paper.videoUrl}
                title={paper.videoTitle || paper.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Direct YouTube Fallback Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-neutral-100 rounded-xl border border-neutral-200 text-xs">
              <div className="flex items-center gap-2 text-neutral-700">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span>
                  {isEn
                    ? 'If the embedded player is blocked by browser permissions, watch directly on YouTube:'
                    : 'إذا ظهر الفيديو غير متاح داخل الإطار بسبب قيود المتصفح أو مزود الخدمة، افتحه مباشرة:'}
                </span>
              </div>
              <a
                href={paper.videoUrl.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-mono font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0 shadow-xs"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isEn ? 'Open Video on YouTube' : 'فتح المقطع على YouTube مباشرة'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {paper.videoTopics && (
              <div className="border border-neutral-200 rounded-xl bg-neutral-50 p-3 sm:p-4 font-mono text-xs">
                <div className="font-bold text-neutral-700 mb-1.5 text-[11px] sm:text-xs">
                  {isEn ? 'Lecture Outline & Timestamps:' : 'المحاور والنقاط الزمنية في المقطع:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-neutral-700 text-[11px] sm:text-xs">
                  {(isEn ? paper.videoTopicsEn || paper.videoTopics : paper.videoTopics).map(
                    (topic, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                        <span>{topic}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* SECTION 3: THEORETICAL ANALYSIS & EQUATIONS */}
        <section ref={theoryRef} className="space-y-7 sm:space-y-9 pt-3 border-t border-neutral-200">
          {paper.contentSections.map((section, secIdx) => {
            const explanatoryNotes = ((paper.explanatoryNotes || paper.marginalia || []) as any[]).filter(
              (n) => n.sectionIndex === secIdx
            );

            return (
              <div key={secIdx} className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-black font-headline text-black border-b border-neutral-200 pb-2">
                  {isEn ? section.headingEn || section.heading : section.heading}
                </h2>

                <div
                  className={`text-neutral-800 leading-relaxed font-normal whitespace-pre-line ${
                    fontSizeClass === 'large'
                      ? 'text-base sm:text-lg leading-loose'
                      : 'text-sm sm:text-base leading-relaxed'
                  }`}
                >
                  {isEn ? section.bodyEn || section.body : section.body}
                </div>

                {/* Mathematical Equations */}
                {section.equations && section.equations.length > 0 && (
                  <div className="my-3 sm:my-5 py-3 border-y border-neutral-200 space-y-2">
                    <div className="font-mono text-xs uppercase font-bold text-neutral-600 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <Bookmark className="w-3.5 h-3.5 text-neutral-500" />
                        {isEn ? 'Governing Equations' : 'المعادلات والصيغ الحاكمة'}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-neutral-500">
                        {isEn ? 'Analytical Formula' : 'صيغة تحليلية'}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {section.equations.map((eq, eqIdx) => (
                        <MathFormula key={eqIdx} rawEquation={eq} language={language} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Dedicated Research Example Figure (صور ورسومات خاصة بكل بحث) */}
                {section.exampleFigure && (
                  <ResearchExampleFigure figure={section.exampleFigure} language={language} />
                )}

                {/* Inline Media Embed (PhET simulation with interactive guide, or YouTube video) */}
                {section.mediaEmbed && (
                  section.mediaEmbed.type === 'phet' ? (
                    <SimulationWithGuide
                      simulationUrl={section.mediaEmbed.url}
                      simulationTitle={isEn ? section.mediaEmbed.titleEn || section.mediaEmbed.title || 'PhET Simulation' : section.mediaEmbed.title || 'محاكي PhET التفاعلي'}
                      guideType={
                        section.mediaEmbed.url.includes('fourier')
                          ? 'fourier_waves'
                          : section.mediaEmbed.url.includes('circuit-construction-kit-ac')
                          ? 'ac_rlc'
                          : section.mediaEmbed.url.includes('energy-forms')
                          ? 'grid_solar'
                          : 'dc_circuit'
                      }
                      language={language}
                    />
                  ) : (
                    <div className="my-4 sm:my-6 space-y-2.5 border border-neutral-200 rounded-2xl p-3 sm:p-5 bg-neutral-50/60">
                      {section.mediaEmbed.title && (
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-2.5">
                          <div className="flex items-center gap-2 font-headline font-bold text-sm sm:text-base text-black">
                            <span className="bg-red-600 text-white text-[10px] sm:text-xs px-2.5 py-0.5 font-mono font-bold rounded-md flex items-center gap-1">
                              <Video className="w-3 h-3" /> Video
                            </span>
                            <span>{isEn ? section.mediaEmbed.titleEn || section.mediaEmbed.title : section.mediaEmbed.title}</span>
                          </div>

                          <a
                            href={section.mediaEmbed.url.replace('/embed/', '/watch?v=')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono font-bold text-red-600 hover:text-red-700 flex items-center gap-1 bg-white border border-red-200 px-2 py-0.5 rounded shadow-2xs"
                          >
                            <Play className="w-2.5 h-2.5" />
                            <span>{isEn ? 'Watch on YouTube ↗' : 'مشاهدة على YouTube ↗'}</span>
                          </a>
                        </div>
                      )}

                      <div className="relative w-full rounded-xl overflow-hidden border border-neutral-300 bg-black shadow-xs">
                        <iframe
                          src={section.mediaEmbed.url}
                          title={section.mediaEmbed.title || 'Embedded Media'}
                          className="aspect-video w-full min-h-[260px] sm:min-h-[340px] border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>

                      {section.mediaEmbed.caption && (
                        <p className="text-xs font-serif text-neutral-600 italic px-1">
                          {isEn ? section.mediaEmbed.captionEn || section.mediaEmbed.caption : section.mediaEmbed.caption}
                        </p>
                      )}
                    </div>
                  )
                )}

                {/* Key takeaway callout */}
                {section.keyTakeaway && (
                  <div className="border-r-4 rtl:border-r-4 ltr:border-l-4 border-neutral-900 bg-neutral-50 rounded-xl p-3 sm:p-4 text-xs sm:text-sm font-semibold text-neutral-900">
                    <span className="font-mono font-bold text-[10px] sm:text-xs uppercase text-neutral-500 block mb-0.5">
                      {isEn ? 'Key Takeaway:' : 'خلاصة الفكرة:'}
                    </span>
                    {isEn ? section.keyTakeawayEn || section.keyTakeaway : section.keyTakeaway}
                  </div>
                )}

                {/* Explanatory concept notes */}
                {explanatoryNotes.length > 0 && (
                  <div className="pt-2 border-t border-neutral-200 space-y-1.5 font-mono text-[11px] sm:text-xs text-neutral-700">
                    <div className="font-bold text-black flex items-center gap-1.5 pb-1">
                      <Info className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{isEn ? 'Technical Concept Notes:' : 'ملاحظات إيضاحية للمفاهيم والمصطلحات:'}</span>
                    </div>
                    {explanatoryNotes.map((noteItem) => (
                      <div key={noteItem.id} className="text-neutral-700 leading-normal">
                        {noteItem.term && (
                          <span className="font-bold text-black ml-1 sm:ml-1.5">
                            {isEn ? noteItem.termEn || noteItem.term : noteItem.term}:
                          </span>
                        )}
                        <span>{isEn ? noteItem.noteEn || noteItem.note || noteItem.definition : noteItem.note || noteItem.definition}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Expandable Deep Dive Section */}
          {paper.deepDiveContent && (
            <div className="border-t border-neutral-200 pt-4 mt-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold uppercase text-neutral-800">
                  {isEn ? 'Extended Analytical Derivation' : 'ملحق التحليل الرياضي والهندسي المعمق'}
                </span>

                <button
                  onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
                  className="btn-raw-secondary min-h-[36px] px-3 py-1 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer rounded-lg"
                >
                  <span>
                    {isDeepDiveOpen
                      ? (isEn ? 'Collapse Analysis' : 'طي التحليل')
                      : (isEn ? 'Read More Analysis' : 'اقرأ المزيد')}
                  </span>
                  {isDeepDiveOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {isDeepDiveOpen ? (
                <div className="mt-3 p-3.5 sm:p-5 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-xs sm:text-base leading-relaxed text-neutral-900">
                  <p className="whitespace-pre-line">
                    {isEn ? paper.deepDiveContentEn || paper.deepDiveContent : paper.deepDiveContent}
                  </p>
                </div>
              ) : (
                <p className="font-mono text-[11px] sm:text-xs text-neutral-500">
                  {isEn
                    ? 'Click "Read More Analysis" to expand the mathematical sensitivity derivation and matrix equations.'
                    : 'اضغط على زر «اقرأ المزيد» أعلاه لعرض الاشتقاقات التفاضلية الموسعة وتحليلات الحساسية الديناميكية.'}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Quick Transition Callout to Assessment */}
        <div className="border border-neutral-200 rounded-xl p-3 sm:p-4 bg-neutral-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="text-xs sm:text-sm font-sans font-semibold text-neutral-800">
            {isEn
              ? 'Ready to test your comprehension? You can jump straight to the questions.'
              : 'هل ترغب باختبار مدى استيعابك للمفاهيم؟ يمكنك الانتقال مباشرة للأسئلة.'}
          </div>
          <button
            onClick={() => scrollTo(quizSectionRef)}
            className="btn-raw-secondary py-1.5 px-3 text-xs font-mono font-bold flex items-center justify-center gap-1.5 shrink-0 rounded-lg cursor-pointer hover:bg-neutral-200"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>{isEn ? 'Jump to Quiz' : 'انتقال للاختبار'}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* SECTION 4: INTERACTIVE VISUAL SIMULATION (Fitted for mobile without redundant side borders) */}
        {paper.simulationType !== 'none' && (
          <section ref={simRef} className="my-5 sm:my-8 border-y sm:border sm:rounded-2xl border-neutral-200 -mx-3 sm:mx-0 px-3 py-4 sm:p-6 bg-white overflow-hidden">
            <div className="border-b border-neutral-200 pb-3 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-black text-white px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold uppercase inline-block rounded-md">
                    {isEn ? 'Interactive Simulation Engine' : 'محرك المحاكاة التفاعلية'}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">
                    {simEngine === 'builtin' ? '[CANVAS 60FPS]' : '[PhET LAB CC-BY-4.0]'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black font-headline mt-1">
                  {isEn ? 'Visual Waveform & System Response' : 'راسم الاستجابة والتحليل الحركي للظاهرة'}
                </h3>
              </div>

              {/* Simulation Switcher */}
              <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl border border-neutral-200 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setSimEngine('builtin')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    simEngine === 'builtin'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {isEn ? 'Interactive Canvas' : 'المحاكي المدمج'}
                </button>
                <button
                  type="button"
                  onClick={() => setSimEngine('phet')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    simEngine === 'phet'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {isEn ? 'PhET Official Lab' : 'محاكي PhET التفاعلي'}
                </button>
              </div>
            </div>

            {simEngine === 'builtin' ? (
              <SimulationViewer type={paper.simulationType} />
            ) : (
              <SimulationWithGuide
                simulationUrl={phetData.url}
                simulationTitle={phetData.name}
                guideType={
                  paper.id.includes('fourier') || paper.id.includes('waveform') || paper.id === 'paper-signal-waveforms' || paper.id === 'paper-edu-3'
                    ? 'fourier_waves'
                    : paper.id.includes('transmission') || paper.id === 'paper-power-transmission' || paper.id === 'paper-edu-1'
                    ? 'transmission_grid'
                    : paper.id.includes('solar') || paper.id.includes('battery') || paper.id.includes('renewable') || paper.id.includes('grid') || paper.id === 'paper-edu-4'
                    ? 'grid_solar'
                    : paper.id.includes('ac') || paper.id.includes('rlc') || paper.id.includes('resonance') || paper.id.includes('power-factor') || paper.id === 'paper-edu-2'
                    ? 'ac_rlc'
                    : 'dc_circuit'
                }
                language={language}
              />
            )}
          </section>
        )}

        {/* SECTION 5: REFERENCES */}
        {paper.references && paper.references.length > 0 && (
          <section ref={referencesRef} className="border-t border-neutral-200 pt-4 sm:pt-6 font-mono text-[11px] sm:text-xs">
            <h3 className="font-bold text-xs sm:text-sm uppercase text-black mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-neutral-500" />
              {isEn ? 'Academic References & Readings:' : 'المراجع الأكاديمية والكتب المعتمدة:'}
            </h3>
            <ol className="space-y-1.5 list-decimal list-inside text-neutral-700 pr-1">
              {paper.references.map((ref, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-black font-medium">{ref}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-200">
          <span className="font-mono text-xs font-bold flex items-center gap-1 text-neutral-500">
            <Tag className="w-3.5 h-3.5" />
            {isEn ? 'Tags:' : 'الوسوم:'}
          </span>
          {(isEn ? paper.tagsEn || paper.tags : paper.tags).map((t, idx) => (
            <span
              key={idx}
              className="border border-neutral-200 px-2.5 py-0.5 font-mono text-[10px] sm:text-xs bg-neutral-50 text-neutral-700 font-medium rounded-md"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* SECTION 6: COMPREHENSION QUIZ - TARGET DESTINATION */}
        <section id="quiz-section" ref={quizSectionRef} className="mt-8 border-t border-neutral-200 pt-6 scroll-mt-6">
          <div className="mb-4 bg-neutral-50 border border-neutral-200 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shrink-0" />
              <span className="font-mono text-xs font-bold text-neutral-800">
                {isEn ? 'Comprehension & Verification Section' : 'قسم أسئلة قياس استيعاب البحث'}
              </span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-neutral-500 hover:text-black text-xs font-mono underline cursor-pointer"
            >
              {isEn ? '↑ Back to Top' : '↑ العودة لأعلى البحث'}
            </button>
          </div>

          <QuizSection
            questions={paper.quiz}
            paperTitle={isEn ? paper.titleEn || paper.title : paper.title}
            language={language}
          />
        </section>
      </article>

      {/* Bottom Actions Toolbar */}
      <div className="print:hidden border border-neutral-200 rounded-2xl p-3 sm:p-4 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
        <button
          onClick={onBack}
          className="btn-raw-secondary min-h-[42px] px-5 py-2 font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
        >
          {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          {isEn ? 'Back to All Papers' : 'العودة لكافة الأبحاث'}
        </button>

        <button
          onClick={handleDownloadPDF}
          className="btn-raw-primary min-h-[42px] px-5 py-2 font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          {isEn ? 'Download Paper as PDF' : 'تنزيل البحث بصيغة PDF'}
        </button>
      </div>

      {/* Floating Mobile Button to Jump Directly to Quiz */}
      <div className="sm:hidden fixed bottom-5 end-4 z-40 print:hidden">
        <button
          onClick={() => scrollTo(quizSectionRef)}
          className="shadow-2xl bg-black text-white hover:bg-neutral-800 px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 border border-neutral-700 active:scale-95 transition-all cursor-pointer"
          aria-label={isEn ? 'Go to quiz questions' : 'الانتقال لأسئلة الاختبار'}
        >
          <CheckSquare className="w-4 h-4 text-emerald-400" />
          <span>{isEn ? `Quiz (${paper.quiz.length})` : `الأسئلة (${paper.quiz.length})`}</span>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      </div>
    </div>
  );
};
