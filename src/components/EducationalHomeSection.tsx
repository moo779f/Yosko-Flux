import React, { useState } from 'react';
import { EDUCATIONAL_ARTICLES, GOOGLE_SITES_GUIDE_STEPS, EducationalArticle } from '../data/educationalArticles';
import { Language } from '../types';
import {
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lightbulb,
  Play,
  Share2,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';

interface EducationalHomeSectionProps {
  language: Language;
  onOpenArticleDetail?: (articleId: string) => void;
}

export const EducationalHomeSection: React.FC<EducationalHomeSectionProps> = ({
  language,
  onOpenArticleDetail,
}) => {
  const isEn = language === 'en';
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(EDUCATIONAL_ARTICLES[0].id);
  const [activeSimId, setActiveSimId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleCopy = (text: string, key: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const copyFullArticlePackage = (article: EducationalArticle, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const fullText = `${article.title}\n\n${article.paragraphs.join('\n\n')}\n\n${article.tryItYourselfPrompt}\n\n[كود التضمين للمحاكي في Google Sites]:\n${article.embedCodeHtml}\n\n[سطر النسبة]:\n${article.attribution}`;
    handleCopy(fullText, `pkg-${article.id}`, e);
  };

  return (
    <section className="border-2 border-black rounded-2xl bg-white p-4 sm:p-7 shadow-xs space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase rounded-md flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              {isEn ? 'Educational Section' : 'محتوى الموقع التثقيفي'}
            </span>
            <span className="border border-neutral-300 bg-neutral-100 text-neutral-800 px-2 py-0.5 font-mono text-[11px] font-bold rounded-md">
              {isEn ? `Energy & Electricity • ${EDUCATIONAL_ARTICLES.length} Ready Articles` : `الطاقة والكهرباء • ${EDUCATIONAL_ARTICLES.length} مقالات جاهزة للنشر`}
            </span>
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 font-mono text-[11px] font-bold rounded-md flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {isEn ? '+ PhET Simulations' : '+ محاكيات PhET ودليل الرفع'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-headline text-black">
            {isEn
              ? 'Educational Electricity Articles & PhET Interactive Labs'
              : 'مقالات الطاقة والكهرباء التثقيفية (جاهزة للنشر مع PhET)'}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 font-serif max-w-3xl leading-relaxed">
            {isEn
              ? `${EDUCATIONAL_ARTICLES.length} foundational articles designed for public and high-school education, accompanied by licensed PhET interactive simulations and a Google Sites upload guide.`
              : `${EDUCATIONAL_ARTICLES.length} مقالات علمية مصاغة بأسلوب مبسط يبدأ من أمثلة الحياة اليومية ويتدرج نحو المفاهيم الهندسية، مع إمكانية تجربة المحاكيات مباشرة هنا أو نسخ الأكواد والنصوص لرفعها فوراً في Google Sites.`}
          </p>
        </div>

        {/* Action Toggle for Google Sites Guide */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="btn-raw-secondary px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer rounded-lg border border-neutral-300 hover:bg-neutral-100"
          >
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>{showGuide ? (isEn ? 'Hide Guide' : 'إخفاء دليل الرفع') : (isEn ? 'Google Sites Guide' : 'دليل الرفع في Google Sites')}</span>
            {showGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Collapsible Google Sites Guide */}
      {showGuide && (
        <div className="p-4 sm:p-5 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-headline font-bold text-sm sm:text-base text-neutral-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              {isEn ? 'Google Sites Upload Guide (5 Minutes per Article)' : 'دليل الرفع في Google Sites (خمس دقائق لكل مقالة)'}
            </h3>
            <a
              href="https://sites.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-neutral-900 underline hover:text-black flex items-center gap-1"
            >
              <span>sites.google.com ↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GOOGLE_SITES_GUIDE_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white p-3 border border-neutral-200 rounded-lg space-y-1 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </span>
                  <h4 className="font-bold text-xs text-neutral-900">
                    {isEn ? step.titleEn : step.title}
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-600 leading-relaxed font-sans ps-7">
                  {step.instruction}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950 text-xs font-mono flex items-start sm:items-center gap-2">
            <span className="font-bold shrink-0">تنبيه:</span>
            <span>
              {isEn
                ? 'Do not forget the attribution line below each embedded simulation. It is the sole requirement to use PhET simulations for free under CC-BY-4.0.'
                : 'لا تنسَ سطر النسبة (Attribution) تحت كل محاكي — هو الشرط الوحيد لاستخدام محاكيات PhET مجاناً وفق رخصة المشاع الإبداعي CC-BY-4.0.'}
            </span>
          </div>
        </div>
      )}

      {/* The 4 Articles Grid / List */}
      <div className="space-y-4">
        {EDUCATIONAL_ARTICLES.map((article) => {
          const isExpanded = expandedArticleId === article.id;
          const isSimActive = activeSimId === article.id;

          return (
            <div
              key={article.id}
              className={`border rounded-xl transition-all ${
                isExpanded
                  ? 'border-neutral-950 bg-white shadow-sm ring-1 ring-neutral-950/5'
                  : 'border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-neutral-300'
              }`}
            >
              {/* Article Card Header / Title Bar */}
              <div
                onClick={() => setExpandedArticleId(isExpanded ? null : article.id)}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-black text-white font-mono text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{article.articleNumber}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase">
                        {isEn ? `Article ${article.articleNumber}` : `المقالة ${article.articleNumber}`}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="font-mono text-[11px] text-neutral-500">
                        {article.readingTimeMinutes} {isEn ? 'min read' : 'دقائق قراءة'}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="font-mono text-[11px] text-neutral-600 bg-neutral-100 px-1.5 py-0.2 rounded">
                        PhET: {article.phetSimulationName.split('(')[0]}
                      </span>
                    </div>

                    <h3 className="font-headline font-black text-base sm:text-lg text-black hover:text-neutral-800 transition-colors">
                      {isEn ? article.titleEn : article.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    type="button"
                    onClick={(e) => copyFullArticlePackage(article, e)}
                    className="btn-raw-secondary px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-100"
                    title={isEn ? 'Copy full article package' : 'نسخ المقالة كاملة مع كود المحاكي لـ Google Sites'}
                  >
                    {copiedKey === `pkg-${article.id}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">{isEn ? 'Copied!' : 'تم النسخ!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Copy Package' : 'نسخ لـ Google Sites'}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="p-1.5 text-neutral-500 hover:text-black rounded-lg border border-neutral-200 bg-white"
                    aria-label="Expand"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expanded Article Body & Interactive Simulation */}
              {isExpanded && (
                <div className="border-t border-neutral-200 p-4 sm:p-6 space-y-5 bg-white rounded-b-xl animate-fadeIn">
                  {/* Key themes badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold text-neutral-500">
                      {isEn ? 'Concepts:' : 'المفاهيم:'}
                    </span>
                    {article.keyConcepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className="border border-neutral-200 px-2 py-0.5 font-mono text-[11px] bg-neutral-50 text-neutral-700 rounded-md"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-3.5 font-serif text-sm sm:text-base leading-relaxed text-neutral-800">
                    {article.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* "Try it yourself" prompt */}
                  <div className="p-3.5 bg-neutral-50 border-r-4 rtl:border-r-4 ltr:border-l-4 border-black rounded-lg text-neutral-900 font-semibold text-xs sm:text-sm">
                    {article.tryItYourselfPrompt}
                  </div>

                  {/* Simulation launcher / Live Embed Container */}
                  <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/70 space-y-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase rounded">
                            PhET Simulation
                          </span>
                          <h4 className="font-mono font-bold text-xs sm:text-sm text-neutral-900">
                            {article.phetSimulationName}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          type="button"
                          onClick={() => setActiveSimId(isSimActive ? null : article.id)}
                          className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 rounded-lg border transition-all cursor-pointer ${
                            isSimActive
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-100'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>{isSimActive ? (isEn ? 'Close Simulation' : 'إغلاق المحاكي') : (isEn ? 'Launch Interactive Lab' : 'تشغيل المحاكي التفاعلي ⚡')}</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => handleCopy(article.embedCodeHtml, `code-${article.id}`, e)}
                          className="btn-raw-secondary px-2.5 py-1.5 text-xs font-mono font-bold flex items-center gap-1 rounded-lg border border-neutral-300 hover:bg-neutral-100"
                          title="نسخ كود الـ HTML للمحاكي"
                        >
                          {copiedKey === `code-${article.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{isEn ? 'Copied!' : 'تم النسخ!'}</span>
                            </>
                          ) : (
                            <>
                              <FileCode className="w-3.5 h-3.5" />
                              <span>{isEn ? 'Copy Embed Code' : 'نسخ كود التضمين'}</span>
                            </>
                          )}
                        </button>

                        <a
                          href={article.phetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-raw-secondary px-2.5 py-1.5 text-xs font-mono font-bold flex items-center gap-1 rounded-lg border border-neutral-300 hover:bg-neutral-100"
                        >
                          <span>{isEn ? 'PhET Page ↗' : 'صفحة PhET ↗'}</span>
                        </a>
                      </div>
                    </div>

                    {/* Interactive Frame when launched */}
                    {isSimActive && (
                      <div className="mt-3 space-y-2 animate-fadeIn">
                        <div className="rounded-xl overflow-hidden border border-neutral-300 bg-white">
                          <iframe
                            src={article.phetEmbedUrl}
                            title={article.phetSimulationName}
                            className="w-full min-h-[460px] sm:min-h-[520px] border-none"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Required Attribution line */}
                    <div className="p-2.5 bg-white border border-neutral-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px]">
                      <div className="space-y-0.5">
                        <span className="font-bold text-neutral-800">
                          {isEn ? 'Legal Attribution (Paste below embed in Google Sites):' : 'سطر النسبة القانوني (ألصقه تحت المحاكي في Google Sites):'}
                        </span>
                        <p className="text-neutral-600 select-all font-sans">
                          {article.attribution}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleCopy(article.attribution, `attr-${article.id}`, e)}
                        className="btn-raw-secondary px-2.5 py-1 text-[11px] font-mono font-bold flex items-center gap-1 shrink-0 rounded-md border border-neutral-300 cursor-pointer"
                      >
                        {copiedKey === `attr-${article.id}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>{isEn ? 'Copied' : 'تم النسخ'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{isEn ? 'Copy' : 'نسخ'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
