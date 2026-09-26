import React, { useState } from 'react';
import { NewsItem, Language } from '../types';
import { NEWS_ITEMS } from '../data/newsData';
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  GraduationCap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface NewsViewProps {
  language: Language;
  onBackToHome: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ language, onBackToHome }) => {
  const isEn = language === 'en';
  const [expandedId, setExpandedId] = useState<string | null>(NEWS_ITEMS[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* Navigation & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="btn-raw-secondary px-3.5 py-1.5 font-mono text-xs font-bold flex items-center gap-2 cursor-pointer"
        >
          {isEn ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          {isEn ? 'Back to Research Portal' : 'العودة لبوابة الأبحاث والدروس'}
        </button>

        <span className="font-mono text-xs border border-neutral-200 rounded-lg bg-neutral-50 px-2.5 py-1 font-medium text-neutral-700">
          {isEn ? `${NEWS_ITEMS.length} Updates` : `${NEWS_ITEMS.length} تحديثات`}
        </span>
      </div>

      {/* Main Header Card */}
      <div className="border border-neutral-200 rounded-2xl bg-neutral-50/80 p-5 sm:p-8">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="bg-black text-white px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-md">
            <GraduationCap className="w-3.5 h-3.5" />
            {isEn ? 'Research Logs & Admission Journey' : 'سجل الأبحاث ورحلة القبول الجامعي'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black mb-2">
          {isEn ? 'Latest News & Project Updates' : 'آخر الأخبار ومستجدات المشاريع'}
        </h1>

        <p className="font-mono text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-3xl">
          {isEn
            ? 'A dedicated journal documenting my self-directed studies, mathematical simulations, and personal research papers prepared for electrical engineering university admission.'
            : 'مدونة وسجل توثيقي مخصص لمتابعة مشاريعي الهندسية الذاتية، التطورات الرياضية، ومستجدات ملف التقديم الجامعي لتخصص الهندسة الكهربائية.'}
        </p>
      </div>

      {/* News List */}
      <div className="space-y-4 sm:space-y-5">
        {NEWS_ITEMS.map((item) => {
          const isExpanded = expandedId === item.id;
          const title = isEn ? item.titleEn : item.title;
          const summary = isEn ? item.summaryEn : item.summary;
          const content = isEn ? item.contentEn : item.content;
          const readTime = isEn ? item.readTimeEn : item.readTime;

          return (
            <article
              key={item.id}
              className="border border-neutral-200 rounded-2xl bg-white transition-all overflow-hidden"
            >
              {/* Header section */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="border border-neutral-200 rounded-md bg-neutral-50 px-2 py-0.5 font-bold flex items-center gap-1 text-[11px] text-neutral-800">
                      <Tag className="w-3 h-3" />
                      {item.category === 'electricity'
                        ? (isEn ? 'Electrical Eng.' : 'هندسة كهربائية')
                        : item.category === 'energy'
                        ? (isEn ? 'Energy Systems' : 'أنظمة طاقة')
                        : item.category === 'mathematics'
                        ? (isEn ? 'Mathematics' : 'رياضيات')
                        : (isEn ? 'General Update' : 'تحديث عام')}
                    </span>
                    <span className="text-neutral-500 flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {readTime}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-neutral-400 uppercase">
                    #{item.id}
                  </span>
                </div>

                <h2
                  onClick={() => toggleExpand(item.id)}
                  className="text-lg sm:text-xl font-black font-headline text-black cursor-pointer hover:underline mb-2 leading-snug"
                >
                  {title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                  {summary}
                </p>

                {/* Expanded Full Content */}
                {isExpanded && (
                  <div className="mt-3 pt-3 space-y-2.5 font-sans text-xs sm:text-sm text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-xl p-3 sm:p-4 leading-relaxed">
                    {content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Tags and toggle action */}
                <div className="mt-3 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="border border-neutral-200 rounded-md bg-neutral-50 text-neutral-700 px-2 py-0.5 font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="btn-raw-secondary min-h-[36px] px-3 py-1 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer rounded-lg"
                  >
                    <span>{isExpanded ? (isEn ? 'Close Story' : 'طي التفاصيل') : (isEn ? 'Read Full Update' : 'قراءة التقرير كاملاً')}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Back Button */}
      <div className="pt-2 text-center">
        <button
          onClick={onBackToHome}
          className="btn-raw-primary px-6 py-2.5 font-mono text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
        >
          {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          {isEn ? 'Back to Research Portal' : 'العودة لبوابة الأبحاث والدروس'}
        </button>
      </div>
    </div>
  );
};
