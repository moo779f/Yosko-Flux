import React from 'react';
import { ENGINEERING_CERTIFICATES } from '../data/certificatesData';
import { Language } from '../types';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Shield,
  Layers,
  FileCheck,
  ArrowRight,
  ArrowLeft,
  Info
} from 'lucide-react';

interface CertificatesViewProps {
  language: Language;
  onNavigateProjects: () => void;
}

export const CertificatesView: React.FC<CertificatesViewProps> = ({
  language,
  onNavigateProjects
}) => {
  const isEn = language === 'en';

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn max-w-5xl mx-auto font-serif pb-12">
      {/* Header Banner */}
      <section className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-8 md:p-10 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase rounded-md tracking-wider">
            {isEn ? 'ACADEMIC COURSEWORK & CERTIFICATES' : 'الشهادات والمساقات الدراسية'}
          </span>
          <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-0.5 font-mono text-[11px] rounded-md font-bold">
            {ENGINEERING_CERTIFICATES.length} {isEn ? 'Verified Modules' : 'مساقات دراسية موثقة'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black">
          {isEn ? 'Foundational Coursework & Technical Certificates' : 'الدورات التأسيسية والشهادات الفنية المعتمدة'}
        </h1>

        <p className="text-xs sm:text-sm text-neutral-600 font-serif max-w-3xl leading-relaxed">
          {isEn
            ? 'Structured, self-paced university and industry foundation courses completed as part of independent preparation for Electrical Engineering degree studies. Presented honestly with direct links to the official course catalogs.'
            : 'مساقات تعليمية وأكاديمية تأسيسية تم إكمالها ذاتياً في إطار التحضير الأكاديمي لدراسة الهندسة الكهربائية. موثقة بأمانة وشفافية ودون أي تضخيم مع روابط الوصول الرسمية للدورات.'}
        </p>

        {/* Candid Disclosure Note */}
        <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-start gap-2.5 font-mono text-xs text-neutral-700">
          <Info className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-serif text-[12px] sm:text-xs">
            {isEn
              ? 'Transparency note: These certificates document verified introductory study completed prior to university enrollment. They represent curiosity, discipline, and self-directed foundational preparation in basic electronics and network security.'
              : 'تنويه شفاف: توثق هذه الشهادات دراسة تمهيدية منتهية قبل الالتحاق بالجامعة، وهي تعبر عن الالتزام بالتعلم الذاتي والتحضير الجاد لأساسيات الإلكترونيات والأمن السيبراني.'}
          </p>
        </div>
      </section>

      {/* Certificates Cards */}
      <div className="space-y-6">
        {ENGINEERING_CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-7 md:p-8 space-y-4 hover:border-black/60 transition-colors shadow-2xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-neutral-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
                    {isEn ? cert.categoryEn : cert.category}
                  </span>
                  <span>•</span>
                  <span className="font-mono text-[11px] text-neutral-600">
                    {isEn ? cert.levelEn : cert.level}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black font-headline text-black">
                  {isEn ? cert.titleEn : cert.title}
                </h2>

                <div className="font-mono text-xs font-bold text-neutral-800">
                  {isEn ? cert.providerEn : cert.provider}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="border border-neutral-300 bg-neutral-50 px-2.5 py-1 rounded-md font-mono text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>{isEn ? cert.statusEn : cert.status}</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-800 font-serif leading-relaxed">
              {isEn ? cert.descriptionEn : cert.description}
            </p>

            {/* Key Topics List */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs font-bold text-neutral-600 uppercase block">
                {isEn ? 'Core Topics Studied:' : 'المحاور والمفاهيم المدروسة:'}
              </span>
              <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-neutral-800">
                {(isEn ? cert.keyTopicsLearnedEn : cert.keyTopicsLearned).map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[10px] bg-neutral-100 border border-neutral-200 text-neutral-800 px-1.5 py-0.2 rounded mt-0.5 shrink-0">
                      ✓
                    </span>
                    <span className="leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Link & Verification note */}
            <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <span className="text-neutral-500 text-[11px] font-serif">
                {isEn ? cert.verificationNoteEn : cert.verificationNote}
              </span>

              <a
                href={cert.officialCourseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-raw-secondary min-h-[36px] px-3.5 py-1.5 font-bold flex items-center justify-center gap-1.5 rounded-lg cursor-pointer shrink-0 hover:bg-neutral-100"
              >
                <span>{isEn ? 'Official Course Page' : 'صفحة المساق الرسمية'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action to view Projects */}
      <section className="border border-neutral-200 rounded-2xl bg-neutral-50 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-serif">
        <div className="space-y-1 text-center sm:text-start">
          <div className="font-black text-base sm:text-lg text-black font-headline">
            {isEn ? 'See Practical Engineering Applications' : 'اطّلع على التطبيقات الهندسية العملية'}
          </div>
          <p className="text-xs sm:text-sm text-neutral-600">
            {isEn
              ? 'Explore circuit simulations, mathematical derivations, and renewable energy models inspired by this foundation.'
              : 'استكشف نماذج محاكاة الدوائر والاشتقاقات الرياضية وتطبيقات الطاقة المتجددة المبنية على هذا التأسيس.'}
          </p>
        </div>

        <button
          onClick={onNavigateProjects}
          className="btn-raw-primary min-h-[40px] px-5 py-2 font-mono text-xs font-bold flex items-center gap-2 rounded-lg cursor-pointer shrink-0"
        >
          <span>{isEn ? 'Explore Engineering Projects' : 'استعراض المشاريع الهندسية'}</span>
          {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
        </button>
      </section>
    </div>
  );
};
