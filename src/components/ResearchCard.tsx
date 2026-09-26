import React from 'react';
import { ResearchPaper, Language } from '../types';
import { Clock, ArrowLeft, ArrowRight, BookOpen, CheckSquare } from 'lucide-react';

interface ResearchCardProps {
  paper: ResearchPaper;
  language: Language;
  onOpenPaper: (paper: ResearchPaper, directToQuiz?: boolean) => void;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ paper, language, onOpenPaper }) => {
  const isEn = language === 'en';

  const getCategoryLabel = () => {
    switch (paper.category) {
      case 'electricity':
        return isEn ? 'Electrical Eng.' : 'هندسة كهربائية';
      case 'energy':
        return isEn ? 'Energy Systems' : 'أنظمة الطاقة';
      case 'mathematics':
        return isEn ? 'Applied Math' : 'رياضيات تطبيقية';
    }
  };

  const getTypeLabel = () => {
    switch (paper.type) {
      case 'research':
        return isEn ? 'Research Paper' : 'ورقة بحثية';
      case 'lesson':
        return isEn ? 'Video Lesson' : 'درس ومحاضرة';
      case 'article':
        return isEn ? 'Educational Article' : 'مقال تثقيفي';
    }
  };

  return (
    <div className="border border-neutral-200 rounded-xl bg-white p-4 sm:p-6 flex flex-col justify-between hover:border-neutral-400 transition-all">
      {/* Top Header info with comfortable spacing */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="border border-neutral-200 bg-neutral-50 text-neutral-800 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase rounded-md">
              {getCategoryLabel()}
            </span>
            <span className="bg-black text-white px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase rounded-md">
              {getTypeLabel()}
            </span>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-neutral-500 flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5" />
            {paper.readingTimeMinutes} {isEn ? 'min' : 'دقيقة'}
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onOpenPaper(paper)}
          className="text-lg sm:text-xl font-black font-headline text-black leading-snug cursor-pointer hover:underline"
        >
          {isEn ? paper.titleEn || paper.title : paper.title}
        </h3>

        {paper.titleEn && !isEn && (
          <div className="font-mono text-[11px] sm:text-xs text-neutral-500 font-medium">
            {paper.titleEn}
          </div>
        )}

        {/* Abstract */}
        <p className="font-serif text-xs sm:text-sm text-neutral-700 leading-relaxed line-clamp-3">
          {isEn ? paper.abstractEn || paper.abstract : paper.abstract}
        </p>

        {/* Tags with clean spacious layout */}
        <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px] sm:text-[11px]">
          {(isEn ? paper.tagsEn || paper.tags : paper.tags).slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-600 font-medium rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-3.5 mt-3.5 border-t border-neutral-200 space-y-2.5">
        <div className="flex items-center justify-between font-serif text-[11px] sm:text-xs text-neutral-500">
          <span className="font-medium text-neutral-600">{isEn ? 'Academic Portfolio' : 'ملف التقديم الأكاديمي'}</span>
          <span className="font-bold text-black">
            {paper.quiz.length} {isEn ? 'Questions' : 'أسئلة تقييم'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            onClick={() => onOpenPaper(paper, false)}
            className="btn-raw-primary min-h-[40px] py-2 px-3 font-serif text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer rounded-lg"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isEn ? 'Read Paper' : 'مطالعة البحث'}</span>
          </button>

          <button
            onClick={() => onOpenPaper(paper, true)}
            className="border border-neutral-300 hover:border-black bg-neutral-50 hover:bg-neutral-100 text-neutral-900 min-h-[40px] py-2 px-3 font-serif text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer rounded-lg transition-colors"
            title={isEn ? 'Go directly to quiz questions' : 'انتقال مباشر لأسئلة الاختبار'}
          >
            <CheckSquare className="w-3.5 h-3.5 text-black" />
            <span>{isEn ? 'Take Quiz' : 'أسئلة الاختبار'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
