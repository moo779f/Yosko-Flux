import React from 'react';
import { Language } from '../types';
import { YoskoFluxLogo } from './YoskoFluxLogo';
import {
  GraduationCap,
  Award,
  BookOpen,
  Zap,
  Battery,
  Pi,
  CheckSquare,
  ArrowRight,
  ArrowLeft,
  Target,
  Sparkles,
  UserCheck
} from 'lucide-react';

interface AboutViewProps {
  language: Language;
  onBackToHome: () => void;
  papersCount: number;
}

export const AboutView: React.FC<AboutViewProps> = ({
  language,
  onBackToHome,
  papersCount,
}) => {
  const isEn = language === 'en';

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* Back button */}
      <div>
        <button
          onClick={onBackToHome}
          className="btn-raw-secondary px-3.5 py-1.5 font-serif text-xs font-bold flex items-center gap-2 cursor-pointer"
        >
          {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          {isEn ? 'Back to Research Portal' : 'العودة لبوابة البحث والأبحاث'}
        </button>
      </div>

      {/* Main Profile Card */}
      <div className="border border-neutral-200 rounded-2xl bg-white p-4 sm:p-8 md:p-10 font-serif">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-200">
          <img
            src="/logo.png"
            alt="YOSKO FLUX"
            className="h-10 sm:h-12 w-auto object-contain"
            style={{ maxHeight: '48px', maxWidth: '220px', width: 'auto', height: 'auto' }}
          />
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="bg-black text-white px-2.5 py-1 font-serif text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md">
              {isEn ? 'OFFICIAL RESEARCH PORTAL' : 'المستودع البحثي الرسمي'}
            </span>
            <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-1 font-serif text-[10px] sm:text-xs font-bold rounded-md">
              {isEn ? 'ENGINEERING & RESEARCH PORTFOLIO' : 'ملف الأبحاث والمشاريع الهندسية'}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black mb-2">
          {isEn
            ? 'Mustafa | High-School Graduate Preparing for Electrical Engineering'
            : 'مصطفى | خريج ثانوية يستعد لدراسة الهندسة الكهربائية'}
        </h1>

        <p className="font-mono text-xs sm:text-sm text-neutral-500 mb-5">
          {isEn
            ? 'Originally from Chad • Residing in Al-Qassim (Buraidah) • Self-Directed Engineering Portfolio'
            : 'من جمهورية تشاد • مقيم في القصيم (بريدة) • ملف التعلم الذاتي والمشاريع الهندسية'}
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-neutral-200 my-5 font-mono text-xs bg-neutral-50 rounded-xl px-4">
          <div>
            <span className="text-neutral-500 block text-[11px]">
              {isEn ? 'Current Status:' : 'الحالة الراهنة:'}
            </span>
            <span className="font-bold text-black text-xs sm:text-sm">
              {isEn ? 'High-School Graduate • Chad / Buraidah' : 'خريج ثانوية • تشاد / القصيم (بريدة)'}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[11px]">
              {isEn ? 'Future Discipline:' : 'الدراسة المستهدفة:'}
            </span>
            <span className="font-bold text-black text-xs sm:text-sm">
              {isEn ? 'B.Sc. Electrical Engineering' : 'بكالوريوس الهندسة الكهربائية'}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[11px]">
              {isEn ? 'Documented Study Work:' : 'المواد والأبحاث الموثقة:'}
            </span>
            <span className="font-bold text-black text-xs sm:text-sm">
              {papersCount} {isEn ? 'Articles & 6 Projects' : 'مقالات و 6 مشاريع عملية'}
            </span>
          </div>
        </div>

        {/* Narrative & Motivation */}
        <div className="space-y-4 text-neutral-800 leading-relaxed text-xs sm:text-base">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black mt-5">
            {isEn
              ? 'About Mustafa & The YOSKO FLUX Journey'
              : 'عن مصطفى وقصة منصة YOSKO FLUX'}
          </h2>
          <p className="font-serif font-medium text-black bg-neutral-50 p-4 border border-neutral-200 rounded-xl">
            {isEn
              ? '“I am a high-school graduate from Chad with a strong interest in Electrical Engineering, Physics, Power Systems and Renewable Energy. YOSKO FLUX documents my self-directed learning through technical articles, mathematical analysis, simulations and engineering projects.”'
              : '«أنا خريج ثانوية من تشاد، ولدي شغف كبير بالهندسة الكهربائية، الفيزياء، شبكات القدرة، والطاقة المتجددة. توثق منصة YOSKO FLUX رحلتي في التعلم الذاتي من خلال المقالات التقنية، التحليلات الرياضية، المحاكاة الحاسوبية، والمشاريع الهندسية التطبيقية قبل الالتحاق بالجامعة.»'}
          </p>
          <p>
            {isEn
              ? 'I currently reside in Al-Qassim (Buraidah). Rather than waiting passively for university classes to begin, I chose to dedicate this period to rigorous self-study: deriving circuit differential equations, building circuit simulations in Falstad and PhET, calculating real power flows, and understanding how solar panels and batteries integrate with the electrical grid.'
              : 'أقيم حالياً في القصيم (بريدة). بدلاً من الانتظار السلبي لبدء الدراسة الجامعية، قررت استثمار هذه الفترة في الدراسة الذاتية الجادة: اشتقاق المعادلات التفاضلية للدوائر، وبناء نماذج المحاكاة على Falstad و PhET، وحساب تدفقات القدرة الحقيقية، وفهم تكامل الألواح الشمسية والبطاريات مع الشبكة الكهربائية.'}
          </p>
          <p>
            {isEn
              ? 'This website does not claim professional engineering status or university researcher credentials. It is a genuine, authentic learning lab demonstrating my curiosity, technical discipline, mathematical competence, and serious preparation for an Electrical Engineering degree.'
              : 'هذا الموقع لا يدّعي أنني مهندس محترف أو باحث أكاديمي، بل هو مختبر تعلم شخصي حقيقي يعكس شغفي وانضباطي التقني وقدرتي الرياضية واستعدادي الأكاديمي الصادق لدراسة الهندسة الكهربائية.'}
          </p>

          <h3 className="text-base sm:text-lg font-bold font-headline text-black mt-5">
            {isEn ? 'Core Exploration Areas:' : 'المجالات والاهتمامات البحثية الرئيسية:'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
            <div className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50">
              <div className="font-bold text-black mb-1">
                {isEn ? 'Electrical Engineering' : 'الهندسة الكهربائية'}
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {isEn
                  ? 'Phasor representations, AC resonance in RLC circuits, impedance matching, and power factor compensation.'
                  : 'المخططات الطورية، دوائر الرنين المتوالية والمتوازية، حسابات المعاوقة، وتحسين معامل القدرة.'}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50">
              <div className="font-bold text-black mb-1">
                {isEn ? 'Energy Systems' : 'أنظمة الطاقة والشبكات'}
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {isEn
                  ? 'Smart grid dynamics, rotational inertia in renewable integration, and battery storage buffering.'
                  : 'القصور الذاتي الدوراني للشبكات مع الطاقة الشمسية والرياح، وبنوك بطاريات التخزين BESS.'}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50">
              <div className="font-bold text-black mb-1">
                {isEn ? 'Applied Mathematics' : 'الرياضيات التطبيقية'}
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {isEn
                  ? 'Fourier series, harmonic decomposition of distorted waves, and Gibbs phenomenon analysis.'
                  : 'متسلسلات وتحويلات فورييه، التحليل التوافقي لإشارات القدرة غير الجيبية، وظاهرة غيبس.'}
              </p>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold font-headline text-black mt-5">
            {isEn ? 'Structure of Each Published Study:' : 'منهجية البناء في كل مادة بحثية:'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
            <div className="border border-neutral-200 rounded-xl p-3 bg-neutral-50">
              <div className="font-bold text-black mb-1">
                {isEn ? '1. Theoretical Rigor' : '1. الشرح والتحليل النظري'}
              </div>
              <p className="text-[11px] text-neutral-600">
                {isEn
                  ? 'Clear mathematical derivation with contextual concept notes.'
                  : 'صياغة واشتقاق المعادلات الحاكمة مع توضيحات للمفاهيم.'}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3 bg-neutral-50">
              <div className="font-bold text-black mb-1">
                {isEn ? '2. Live Visual Simulation' : '2. المحاكاة الحركية التفاعلية'}
              </div>
              <p className="text-[11px] text-neutral-600">
                {isEn
                  ? 'Real-time 60FPS visual waveform simulators.'
                  : 'محركات محاكاة بصرية تفاعلية حية بسرعة 60 إطاراً بالثانية.'}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3 bg-neutral-50">
              <div className="font-bold text-black mb-1">
                {isEn ? '3. Self-Assessment' : '3. قياس الاستيعاب'}
              </div>
              <p className="text-[11px] text-neutral-600">
                {isEn
                  ? 'Post-reading comprehension quiz with explanatory solutions.'
                  : 'اختبار تقييم ختامي مع تصحيح فوري وشرح تفصيلي للحلول.'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="btn-raw-primary px-5 py-2.5 font-mono text-xs font-bold cursor-pointer"
          >
            {isEn ? 'Browse Research & Lessons Now' : 'تصفح الأبحاث والدروس الآن'}
          </button>
          <span className="font-mono text-[11px] text-neutral-500">
            {isEn ? 'Personal, Non-profit Educational Project' : 'مستودع شخصي وتثقيفي غير ربحي'}
          </span>
        </div>
      </div>
    </div>
  );
};
