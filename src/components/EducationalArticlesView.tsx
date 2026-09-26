import React, { useState } from 'react';
import { EDUCATIONAL_ARTICLES, GOOGLE_SITES_GUIDE_STEPS, EducationalArticle } from '../data/educationalArticles';
import { Language } from '../types';
import { SimulationWithGuide } from './SimulationWithGuide';
import { MathFormula } from './MathFormula';
import {
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  HelpCircle,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  FileCode,
  Share2,
  CheckCircle2,
  Lightbulb,
  Video,
  Play
} from 'lucide-react';

interface EducationalArticlesViewProps {
  language: Language;
  onOpenArticleDetail?: (articleId: string) => void;
}

export const EducationalArticlesView: React.FC<EducationalArticlesViewProps> = ({
  language,
  onOpenArticleDetail,
}) => {
  const isEn = language === 'en';
  const [selectedArticleId, setSelectedArticleId] = useState<string>(EDUCATIONAL_ARTICLES[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState<boolean>(true);

  const activeArticle =
    EDUCATIONAL_ARTICLES.find((a) => a.id === selectedArticleId) || EDUCATIONAL_ARTICLES[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const copyFullArticlePackage = (article: EducationalArticle) => {
    let fullText = `${article.title}\n\n${article.paragraphs.join('\n\n')}`;
    if (article.equations && article.equations.length > 0) {
      fullText += `\n\n[الصيغ والمعادلات الرياضية]:\n${article.equations.join('\n')}`;
    }
    fullText += `\n\n${article.tryItYourselfPrompt}\n\n[كود التضمين للمحاكي PhET]:\n${article.embedCodeHtml}`;
    if (article.videoEmbedHtml) {
      fullText += `\n\n[كود التضمين للفيديو المرئي]:\n${article.videoEmbedHtml}`;
    }
    fullText += `\n\n[سطر النسبة القانوني]:\n${article.attribution}`;
    handleCopy(fullText, `package-${article.id}`);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Header Hub Banner */}
      <section className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] sm:text-xs font-bold uppercase rounded-md">
                {isEn ? 'Educational Content & Publishing Kit' : 'محتوى تثقيفي • الطاقة والكهرباء'}
              </span>
              <span className="border border-neutral-200 bg-neutral-50 text-neutral-600 px-2 py-0.5 font-mono text-[11px] rounded-md font-semibold">
                {isEn ? `${EDUCATIONAL_ARTICLES.length} Articles + Google Sites Guide` : `${EDUCATIONAL_ARTICLES.length} مقالات جاهزة للنشر + دليل Google Sites`}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-headline text-black">
              {isEn
                ? 'Educational Electricity Articles & PhET Interactive Labs'
                : 'المقالات التثقيفية الجاهزة للنشر مع محاكيات PhET'}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 font-serif max-w-2xl leading-relaxed">
              {isEn
                ? 'Four structured public-education articles on power, resonance, wave analysis, and solar energy in Chad. Ready to be exported directly to Google Sites with one-click interactive embed codes.'
                : 'أربع مقالات علمية مبسطة ومعدة بعناية للنشر العام في مواقع Google Sites أو المنصات التعليمية، مزودة بمحاكيات PhET التفاعلية المرخصة وأزرار نسخ فورية لنصوص المقالات وأكواد التضمين.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="btn-raw-secondary px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer rounded-lg border border-neutral-200 hover:bg-neutral-100"
            >
              <HelpCircle className="w-4 h-4 text-neutral-700" />
              <span>{showGuide ? (isEn ? 'Hide Guide' : 'إخفاء دليل الرفع') : (isEn ? 'Show Google Sites Guide' : 'عرض دليل الرفع')}</span>
              {showGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Google Sites Step-by-Step Interactive Guide Box */}
        {showGuide && (
          <div className="mt-5 p-4 sm:p-5 bg-neutral-50/80 border border-neutral-200 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <h3 className="font-headline font-bold text-sm sm:text-base text-neutral-900">
                  {isEn ? 'Google Sites Quick Upload Guide (5 Minutes per Article)' : 'دليل الرفع السريع في Google Sites (5 دقائق لكل مقالة)'}
                </h3>
              </div>
              <a
                href="https://sites.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-neutral-900 underline hover:text-neutral-600 flex items-center gap-1"
              >
                <span>sites.google.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {GOOGLE_SITES_GUIDE_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white p-3 sm:p-3.5 border border-neutral-200 rounded-lg space-y-1 shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <h4 className="font-bold text-xs text-neutral-900">
                      {isEn ? step.titleEn : step.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed font-sans ps-7">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-amber-900 text-xs flex items-center gap-2 font-mono">
              <span className="font-bold shrink-0">⚠ {isEn ? 'Mandatory Rule:' : 'شرط قانوني إلزامي:'}</span>
              <span>
                {isEn
                  ? 'Always include the Attribution line beneath each embedded simulation. It is the sole requirement to use PhET simulations for free under CC-BY-4.0.'
                  : 'لا تنسَ وضع سطر النسبة (Attribution) تحت كل محاكي في موقعك — هو الشرط القانوني الوحيد لاستخدام محاكيات PhET مجانًا وفق رخصة المشاع الإبداعي CC-BY-4.0.'}
              </span>
            </div>
          </div>
        )}
      </section>

      {/* Article Selector Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 font-serif">
        {EDUCATIONAL_ARTICLES.map((article) => {
          const isSelected = article.id === selectedArticleId;
          return (
            <button
              key={article.id}
              onClick={() => setSelectedArticleId(article.id)}
              className={`p-3 sm:p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'border-black bg-black text-white shadow-sm'
                  : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-800'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span
                  className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {isEn ? `Article ${article.articleNumber}` : `المقالة ${article.articleNumber}`}
                </span>
                <span className="font-mono text-[10px] opacity-75">
                  {article.readingTimeMinutes} {isEn ? 'min' : 'د'}
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm line-clamp-2 leading-snug">
                {isEn ? article.titleEn : article.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Main Selected Article Detail Card */}
      <article className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-8 space-y-6">
        {/* Article Meta Bar & Quick Copy Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
              {isEn ? `Educational Article #${activeArticle.articleNumber}` : `المقالة التثقيفية #${activeArticle.articleNumber}`}
            </span>
            <h2 className="text-xl sm:text-3xl font-black font-headline text-black">
              {isEn ? activeArticle.titleEn : activeArticle.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onOpenArticleDetail && (
              <button
                onClick={() => onOpenArticleDetail(activeArticle.id)}
                className="btn-raw-secondary px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer rounded-lg border border-neutral-300 hover:bg-neutral-100"
                title={isEn ? 'Open Full Interactive Study Mode' : 'فتح في قارئ الأبحاث التفاعلي الكامل'}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{isEn ? 'Interactive Study & Quiz' : 'الدراسة التفاعلية والاختبار'}</span>
              </button>
            )}

            <button
              onClick={() => copyFullArticlePackage(activeArticle)}
              className="btn-raw-primary px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer rounded-lg bg-black text-white hover:bg-neutral-800"
              title={isEn ? 'Copy full package' : 'نسخ المقالة كاملة مع كود المحاكي والنسبة'}
            >
              {copiedKey === `package-${activeArticle.id}` ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isEn ? 'Package Copied!' : 'تم نسخ المقالة بالكامل!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Copy Full Package' : 'نسخ حزمة النشر كاملة'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Concepts tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[11px] font-bold text-neutral-500">
            {isEn ? 'Key Themes:' : 'المحاور والمفاهيم:'}
          </span>
          {activeArticle.keyConcepts.map((concept, idx) => (
            <span
              key={idx}
              className="border border-neutral-200 px-2 py-0.5 font-mono text-[11px] bg-neutral-50 text-neutral-700 rounded-md"
            >
              {concept}
            </span>
          ))}
        </div>

        {/* Article Text Content */}
        <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-neutral-800">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="font-mono text-xs font-bold text-neutral-500">
              {isEn ? 'Article Body (Copy to Text Box)' : 'نص المقالة (جاهز للصق في مربع النص):'}
            </span>
            <button
              onClick={() =>
                handleCopy(
                  `${activeArticle.title}\n\n${activeArticle.paragraphs.join('\n\n')}`,
                  `text-${activeArticle.id}`
                )
              }
              className="text-xs font-mono font-bold text-neutral-900 hover:text-black flex items-center gap-1 cursor-pointer"
            >
              {copiedKey === `text-${activeArticle.id}` ? (
                <span className="text-emerald-600 flex items-center gap-1">
                  <Check className="w-3 h-3" /> {isEn ? 'Copied' : 'تم النسخ'}
                </span>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> {isEn ? 'Copy Text' : 'نسخ النص'}
                </>
              )}
            </button>
          </div>

          {activeArticle.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="leading-relaxed">
              {para}
            </p>
          ))}

          {/* Mathematical Formulas Section */}
          {activeArticle.equations && activeArticle.equations.length > 0 && (
            <div className="pt-2 border-t border-neutral-100 space-y-2">
              <span className="font-mono text-xs font-bold text-neutral-600 block">
                {isEn ? 'Governing Equations & Formulas:' : 'الصيغ والمعادلات الرياضية الحاكمة:'}
              </span>
              <div className="space-y-2.5">
                {activeArticle.equations.map((eq, eqIdx) => (
                  <MathFormula key={eqIdx} rawEquation={eq} language={language} />
                ))}
              </div>
            </div>
          )}

          {/* Try It Yourself callout */}
          <div className="p-3.5 bg-neutral-50 border-r-4 rtl:border-r-4 ltr:border-l-4 border-black rounded-lg text-neutral-900 font-semibold text-xs sm:text-sm">
            {activeArticle.tryItYourselfPrompt}
          </div>
        </div>

        {/* Video Lecture Template Section */}
        {activeArticle.videoUrl && (
          <section className="border border-neutral-200 rounded-2xl p-4 sm:p-6 bg-white space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-200 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-red-600 text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase rounded-md flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    {isEn ? 'Video Template' : 'فيديو الشرح المرفق'}
                  </span>
                  <span className="font-mono text-xs font-bold text-neutral-800">
                    {isEn ? activeArticle.videoTitleEn || activeArticle.videoTitle : activeArticle.videoTitle}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 font-mono mt-1">
                  {isEn
                    ? 'Official verified video ready for embedding in Google Sites.'
                    : 'فيديو توضيحي معتمد وجاهز للتضمين في Google Sites بنقرة واحدة.'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {activeArticle.videoEmbedHtml && (
                  <button
                    onClick={() => handleCopy(activeArticle.videoEmbedHtml || '', `video-embed-${activeArticle.id}`)}
                    className="btn-raw-secondary px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer rounded-lg border border-neutral-300 hover:bg-neutral-100"
                    title={isEn ? 'Copy Video HTML code' : 'نسخ كود HTML للفيديو'}
                  >
                    {copiedKey === `video-embed-${activeArticle.id}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{isEn ? 'Video Code Copied!' : 'تم نسخ كود الفيديو!'}</span>
                      </>
                    ) : (
                      <>
                        <FileCode className="w-3.5 h-3.5 text-red-600" />
                        <span>{isEn ? 'Copy Video Code' : 'نسخ كود HTML للفيديو'}</span>
                      </>
                    )}
                  </button>
                )}

                {activeArticle.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${activeArticle.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-raw-secondary px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 rounded-lg border border-red-200 text-red-600 bg-red-50 hover:bg-red-100"
                  >
                    <Play className="w-3 h-3" />
                    <span>{isEn ? 'Open on YouTube ↗' : 'مشاهدة على YouTube ↗'}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Embedded Video Player */}
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-neutral-300 bg-black shadow-xs">
              <iframe
                src={activeArticle.videoUrl}
                title={activeArticle.videoTitle || 'Educational Video'}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Interactive PhET Simulation Live View */}
        <section className="border border-neutral-200 rounded-2xl p-4 sm:p-6 bg-neutral-50/50 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-200 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase rounded-md">
                  PhET Interactive Lab
                </span>
                <span className="font-mono text-xs font-bold text-neutral-700">
                  {activeArticle.phetSimulationName}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 font-mono mt-1">
                {isEn ? 'Interactive simulation embedded live below — students can run experiments directly here or on your Google Site.' : 'المحاكي يعمل مباشرة أدناه — يمكن للطلاب التفاعل معه هنا أو في موقع Google Sites الخاص بك.'}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(activeArticle.embedCodeHtml, `embed-${activeArticle.id}`)}
                className="btn-raw-secondary px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer rounded-lg border border-neutral-300 hover:bg-neutral-100"
                title={isEn ? 'Copy HTML code for Google Sites' : 'نسخ كود التضمين لـ Google Sites'}
              >
                {copiedKey === `embed-${activeArticle.id}` ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isEn ? 'Embed Code Copied!' : 'تم نسخ كود التضمين!'}</span>
                  </>
                ) : (
                  <>
                    <FileCode className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Copy Embed Code' : 'نسخ كود HTML للمحاكي'}</span>
                  </>
                )}
              </button>

              <a
                href={activeArticle.phetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-raw-secondary px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-100"
              >
                <span>{isEn ? 'PhET Link' : 'رابط PhET'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* The Embed Frame with Blueprint and Step-by-Step Guide */}
          <SimulationWithGuide
            simulationUrl={activeArticle.phetEmbedUrl}
            simulationTitle={activeArticle.phetSimulationName}
            guideType={activeArticle.targetDiagramType || 'dc_circuit'}
            language={language}
          />

          {/* Legal Attribution Box */}
          <div className="p-3 bg-white border border-neutral-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] sm:text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-neutral-800 block">
                {isEn ? 'Required Attribution Line (Paste under embed in Google Sites):' : 'سطر النسبة الإلزامي (ألصقه تحت المحاكي في Google Sites):'}
              </span>
              <span className="text-neutral-600 select-all font-sans">
                {activeArticle.attribution}
              </span>
            </div>

            <button
              onClick={() => handleCopy(activeArticle.attribution, `attr-${activeArticle.id}`)}
              className="btn-raw-secondary px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1 shrink-0 rounded-md border border-neutral-300 cursor-pointer"
            >
              {copiedKey === `attr-${activeArticle.id}` ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>{isEn ? 'Copied' : 'تم النسخ'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>{isEn ? 'Copy Attribution' : 'نسخ سطر النسبة'}</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Ready-to-Copy HTML Embed Code Block for easy preview */}
        <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-neutral-700 flex items-center gap-1.5">
              <FileCode className="w-3.5 h-3.5 text-neutral-500" />
              {isEn ? 'HTML Embed Code for Google Sites:' : 'كود الـ HTML للتضمين في Google Sites:'}
            </span>
            <button
              onClick={() => handleCopy(activeArticle.embedCodeHtml, `code-${activeArticle.id}`)}
              className="text-xs font-mono font-bold text-neutral-900 underline hover:text-black cursor-pointer"
            >
              {copiedKey === `code-${activeArticle.id}` ? (isEn ? 'Copied!' : 'تم النسخ!') : (isEn ? 'Copy' : 'نسخ')}
            </button>
          </div>
          <pre className="font-mono text-[11px] sm:text-xs bg-white p-3 border border-neutral-200 rounded-lg overflow-x-auto text-neutral-800 dir-ltr text-left">
            {activeArticle.embedCodeHtml}
          </pre>
        </div>
      </article>
    </div>
  );
};
