import React, { useState } from 'react';
import { CURRICULUM_16_ARTICLES } from '../data/topics/curriculum16';
import { Language, ResearchPaper } from '../types';
import { MathFormula } from './MathFormula';
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Battery,
  Search,
  CheckCircle2,
  ExternalLink,
  Tag,
  Clock
} from 'lucide-react';

interface EducationalArticlesViewProps {
  language: Language;
  onOpenArticleDetail?: (articleId: string) => void;
  onOpenProject?: (projectId: string) => void;
}

export const EducationalArticlesView: React.FC<EducationalArticlesViewProps> = ({
  language,
  onOpenArticleDetail,
  onOpenProject
}) => {
  const isEn = language === 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryGroups = [
    { id: 'all', titleAr: 'كافة المقالات الـ 16', titleEn: 'All 16 Articles', count: 16 },
    { id: 'foundations', titleAr: '1. الأساسيات والدوائر (1-4)', titleEn: '1. Foundations (1-4)', count: 4 },
    { id: 'ac_signals', titleAr: '2. التيار المتردد والإشارات (5-8)', titleEn: '2. AC & Signals (5-8)', count: 4 },
    { id: 'power_engineering', titleAr: '3. هندسة القوى (9-11)', titleEn: '3. Power Engineering (9-11)', count: 3 },
    { id: 'renewable_energy', titleAr: '4. الطاقة المتجددة (12-16)', titleEn: '4. Renewable Energy (12-16)', count: 5 }
  ];

  const filteredArticles = CURRICULUM_16_ARTICLES.filter((art) => {
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'foundations' && art.category !== 'foundations') return false;
      if (selectedCategory === 'ac_signals' && art.category !== 'ac_signals') return false;
      if (selectedCategory === 'power_engineering' && art.category !== 'power_engineering') return false;
      if (selectedCategory === 'renewable_energy' && art.category !== 'renewable_energy') return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q) || art.titleEn.toLowerCase().includes(q);
      const matchAbstract = art.abstract.toLowerCase().includes(q) || (art.abstractEn && art.abstractEn.toLowerCase().includes(q));
      const matchQuestion =
        (art.investigationQuestion && art.investigationQuestion.toLowerCase().includes(q)) ||
        (art.investigationQuestionEn && art.investigationQuestionEn.toLowerCase().includes(q));
      return matchTitle || matchAbstract || matchQuestion;
    }
    return true;
  });

  // Project linkage map
  const projectLinkMap: Record<number, { num: string; id: string; titleAr: string; titleEn: string }> = {
    1: { num: 'PROJECT 01', id: 'project-01-voltage-divider', titleAr: 'مجزئ الجهد', titleEn: 'Voltage Divider' },
    2: { num: 'PROJECT 01', id: 'project-01-voltage-divider', titleAr: 'مجزئ الجهد', titleEn: 'Voltage Divider' },
    3: { num: 'PROJECT 01', id: 'project-01-voltage-divider', titleAr: 'مجزئ الجهد', titleEn: 'Voltage Divider' },
    4: { num: 'PROJECT 02', id: 'project-02-rc-circuit', titleAr: 'دائرة شحن المكثف RC', titleEn: 'RC Charging Circuit' },
    5: { num: 'PROJECT 03', id: 'project-03-rlc-resonance', titleAr: 'رنين الدوائر المتوالية RLC', titleEn: 'Series RLC Resonance' },
    6: { num: 'PROJECT 03', id: 'project-03-rlc-resonance', titleAr: 'رنين الدوائر المتوالية RLC', titleEn: 'Series RLC Resonance' },
    7: { num: 'PROJECT 03', id: 'project-03-rlc-resonance', titleAr: 'رنين الدوائر المتوالية RLC', titleEn: 'Series RLC Resonance' },
    8: { num: 'PROJECT 03', id: 'project-03-rlc-resonance', titleAr: 'رنين الدوائر المتوالية RLC', titleEn: 'Series RLC Resonance' },
    9: { num: 'PROJECT 06', id: 'project-06-solar-battery-grid', titleAr: 'منظومة الطاقة والشبكة', titleEn: 'Solar + Battery + Grid' },
    10: { num: 'PROJECT 06', id: 'project-06-solar-battery-grid', titleAr: 'منظومة الطاقة والشبكة', titleEn: 'Solar + Battery + Grid' },
    11: { num: 'PROJECT 06', id: 'project-06-solar-battery-grid', titleAr: 'منظومة الطاقة والشبكة', titleEn: 'Solar + Battery + Grid' },
    12: { num: 'PROJECT 05', id: 'project-05-solar-irradiance-temp', titleAr: 'أداء اللوح الشمسي والحرارة', titleEn: 'Solar Output vs Sunlight / Temp' },
    13: { num: 'PROJECT 05', id: 'project-05-solar-irradiance-temp', titleAr: 'أداء اللوح الشمسي والحرارة', titleEn: 'Solar Output vs Sunlight / Temp' },
    14: { num: 'PROJECT 04', id: 'project-04-solar-battery-load', titleAr: 'نظام الطاقة الشمسية والبطارية', titleEn: 'Solar Panel + Battery + Load' },
    15: { num: 'PROJECT 06', id: 'project-06-solar-battery-grid', titleAr: 'منظومة الطاقة والشبكة', titleEn: 'Solar + Battery + Grid' },
    16: { num: 'PROJECT 06', id: 'project-06-solar-battery-grid', titleAr: 'منظومة الطاقة والشبكة', titleEn: 'Solar + Battery + Grid' }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn max-w-6xl mx-auto font-serif pb-16">
      {/* Header Hub Banner */}
      <section className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-8 md:p-10 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase rounded-md tracking-wider">
                {isEn ? 'ELECTRICAL ENGINEERING CURRICULUM' : 'المسار التعليمي للهندسة الكهربائية'}
              </span>
              <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-0.5 font-mono text-[11px] rounded-md font-bold">
                16 {isEn ? 'Structured Articles' : 'مقالة تخصصية متدرجة'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black">
              {isEn ? 'Technical Articles & Engineering Fundamentals' : 'المقالات الهندسية والفيزيائية التأسيسية'}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 font-serif max-w-3xl leading-relaxed">
              {isEn
                ? 'Organized into 4 progressive disciplines: Foundations, AC & Signals, Power Engineering, and Renewable Energy. Each article follows a 10-step pedagogical structure connecting theory to practical circuit calculations and experiments.'
                : 'منظمة في 4 مراحل تعليمية متدرجة: الأساسيات والدوائر، التيار المتردد والإشارات، هندسة القوى، والطاقة المتجددة. يتبع كل مقال هيكلاً تعليمياً من 10 خطوات يربط النظرية بالحسابات والمحاكاة.'}
            </p>
          </div>

          <div className="p-3 border border-neutral-200 rounded-xl bg-neutral-50 font-mono text-xs text-center shrink-0">
            <span className="text-neutral-500 block text-[10px] uppercase">
              {isEn ? 'Progression' : 'التدرج العلمي'}
            </span>
            <span className="font-bold text-black text-xs">
              01 → 16 Sequential
            </span>
          </div>
        </div>

        {/* 4 Category Filters + Search */}
        <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {categoryGroups.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50 hover:border-black'
                }`}
              >
                <span>{isEn ? cat.titleEn : cat.titleAr}</span>
              </button>
            ))}
          </div>

          <div className="relative min-w-[200px] sm:min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute start-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search articles...' : 'ابحث في المقالات...'}
              className="w-full ps-8 pe-3 py-1.5 border border-neutral-200 rounded-lg text-xs font-mono bg-neutral-50/70 focus:outline-none focus:border-black"
            />
          </div>
        </div>
      </section>

      {/* 16 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredArticles.map((article) => {
          const indexNum = article.progressionIndex || 1;
          const linkedProject = projectLinkMap[indexNum];

          return (
            <div
              key={article.id}
              className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-6 space-y-3.5 hover:border-black hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 rounded">
                      {indexNum < 10 ? `ARTICLE 0${indexNum}` : `ARTICLE ${indexNum}`}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase font-bold">
                      {isEn ? article.progressionCategoryEn : article.progressionCategory}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTimeMinutes} {isEn ? 'min' : 'دقائق'}</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    onClick={() => onOpenArticleDetail && onOpenArticleDetail(article.id)}
                    className="text-lg sm:text-xl font-black font-headline text-black hover:underline cursor-pointer leading-tight"
                  >
                    {isEn ? article.titleEn : article.title}
                  </h3>

                  {/* Investigation question (01 - The Question) */}
                  {article.investigationQuestion && (
                    <div className="mt-2 p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs font-serif text-neutral-800">
                      <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase block mb-0.5">
                        {isEn ? '01 — The Question:' : '٠١ — السؤال الجوهري:'}
                      </span>
                      <p className="line-clamp-2 leading-relaxed">
                        {isEn ? article.investigationQuestionEn || article.investigationQuestion : article.investigationQuestion}
                      </p>
                    </div>
                  )}

                  {/* Abstract */}
                  <p className="text-xs sm:text-sm text-neutral-600 font-serif mt-2 line-clamp-3 leading-relaxed">
                    {isEn ? article.abstractEn || article.abstract : article.abstract}
                  </p>
                </div>

                {/* Key takeaway or formula preview */}
                {article.contentSections && article.contentSections[0] && article.contentSections[0].equations && article.contentSections[0].equations[0] && (
                  <div className="p-2 border border-neutral-200 rounded-lg bg-white overflow-x-auto text-xs font-mono">
                    <span className="text-[10px] text-neutral-400 block mb-0.5">
                      {isEn ? 'Key Equation:' : 'المعادلة المحورية:'}
                    </span>
                    <MathFormula formula={article.contentSections[0].equations[0]} block={false} />
                  </div>
                )}
              </div>

              {/* Bottom Card Footer: Linked Project + Read Article Button */}
              <div className="pt-3 border-t border-neutral-100 space-y-2">
                {linkedProject && (
                  <div className="flex items-center justify-between text-xs font-mono bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                    <span className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-black" />
                      {isEn ? 'Applied Project:' : 'المشروع المرتبط:'}
                    </span>
                    <button
                      onClick={() => onOpenProject && onOpenProject(linkedProject.id)}
                      className="font-bold text-neutral-900 hover:text-black hover:underline cursor-pointer flex items-center gap-1 text-[11px]"
                    >
                      <span className="bg-black text-white px-1.5 py-0.2 rounded text-[10px]">
                        {linkedProject.num}
                      </span>
                      <span className="truncate max-w-[140px]">
                        {isEn ? linkedProject.titleEn : linkedProject.titleAr}
                      </span>
                      {isEn ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
                    </button>
                  </div>
                )}

                <button
                  onClick={() => onOpenArticleDetail && onOpenArticleDetail(article.id)}
                  className="w-full btn-raw-secondary min-h-[38px] px-3.5 py-1.5 font-mono text-xs font-bold flex items-center justify-center gap-1.5 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all"
                >
                  <span>{isEn ? 'Read Complete 10-Step Article' : 'قراءة المقال الكامل (الهيكل ذو الـ 10 خطوات)'}</span>
                  {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
