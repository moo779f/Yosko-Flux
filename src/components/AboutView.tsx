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
          className="btn-raw-secondary px-3.5 py-1.5 font-mono text-xs font-bold flex items-center gap-2 cursor-pointer"
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
          />
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="bg-black text-white px-2.5 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md">
              {isEn ? 'OFFICIAL RESEARCH PORTAL' : 'المستودع البحثي الرسمي'}
            </span>
            <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-1 font-mono text-[10px] sm:text-xs font-bold rounded-md">
              {isEn ? 'ADMISSIONS DOSSIER' : 'ملف القبول الجامعي'}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black mb-2">
          {isEn
            ? 'Mustafa | Aspiring Electrical Engineering Student & Researcher'
            : 'مصطفى | باحث وهاوٍ في الهندسة الكهربائية والرياضيات'}
        </h1>

        <p className="font-mono text-xs sm:text-sm text-neutral-500 mb-5">
          {isEn
            ? 'Independent Self-Directed Research & Study Logs • Prepared for University Admissions'
            : 'أبحاث ودراسات شخصية وتثقيفية • مشروع إعداد ملف القبول الجامعي في الهندسة'}
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-neutral-200 my-5 font-mono text-xs bg-neutral-50 rounded-xl px-4">
          <div>
            <span className="text-neutral-500 block text-[11px]">
              {isEn ? 'Current Status:' : 'الحالة الأكاديمية:'}
            </span>
            <span className="font-bold text-black text-xs sm:text-sm">
              {isEn ? 'Recent Graduate (Prep for University)' : 'حديث تخرج (في مرحلة التقديم الجامعي)'}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[11px]">
              {isEn ? 'Target Discipline:' : 'التخصص المستهدف:'}
            </span>
            <span className="font-bold text-black text-xs sm:text-sm">
              {isEn ? 'B.Sc. Electrical Engineering' : 'بكالوريوس الهندسة الكهربائية'}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[11px]">
              {isEn ? 'Published Papers & Lessons:' : 'المواد والأبحاث المنشورة:'}
            </span>
            <span className="font-bold text-black text-xs sm:text-sm">
              {papersCount} {isEn ? 'Papers & Studies' : 'أوراق ودروس موثقة'}
            </span>
          </div>
        </div>

        {/* Narrative & Motivation */}
        <div className="space-y-4 text-neutral-800 leading-relaxed text-xs sm:text-base">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black mt-5 flex items-center gap-2">
            <Target className="w-5 h-5 text-black" />
            <span>
              {isEn
                ? 'Purpose of this Platform & Academic Journey'
                : 'الغاية من المستودع وقصة هذه الأبحاث'}
            </span>
          </h2>
          <p>
            {isEn
              ? 'I am Mustafa, a recent graduate with an earnest passion for electrical circuits, renewable power generation, and applied mathematical physics. While I have not yet earned the formal title of an engineer, I built this independent repository to document my self-study, conduct rigorous research, and assemble a solid academic portfolio for my university applications.'
              : 'أنا مصطفى، خريج حديث وشغوف بعالم الدوائر الكهربائية، استقرار شبكات الطاقة، والتحليلات الرياضية المرتبطة بها. لم أنل بعد لقب مهندس، وقمت بإنشاء هذا المستودع العلمي ليكون منصة بحثية شخصية وتثقيفية أدوّن فيها حصيلة دراساتي الذاتية وأشاركها مع زملائي، وكنواة لملف إنجازاتي وأعمالي (Portfolio) الموجه للتقديم على كليات الهندسة المرموقة.'}
          </p>
          <p>
            {isEn
              ? 'Rather than waiting for the university lecture hall, I believe true engineering mindset begins with proactive curiosity: analyzing governing differential equations, coding interactive waveform simulations, and verifying theoretical claims.'
              : 'أؤمن أن الشغف الحقيقي بالهندسة يبدأ بالبحث والمبادرة الذاتية قبل دخول قاعات الجامعة؛ من خلال تفكيك المعادلات التفاضلية الحاكمة، وبناء نماذج المحاكاة التفاعلية، واختبار المفاهيم المعملية.'}
          </p>

          <h3 className="text-base sm:text-lg font-bold font-headline text-black mt-5">
            {isEn ? 'Core Exploration Areas:' : 'المجالات والاهتمامات البحثية الرئيسية:'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
            <div className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50">
              <div className="font-bold text-black mb-1 flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>{isEn ? 'Electrical Engineering' : 'الهندسة الكهربائية'}</span>
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {isEn
                  ? 'Phasor representations, AC resonance in RLC circuits, impedance matching, and power factor compensation.'
                  : 'المخططات الطورية، دوائر الرنين المتوالية والمتوازية، حسابات المعاوقة، وتحسين معامل القدرة.'}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50">
              <div className="font-bold text-black mb-1 flex items-center gap-1.5">
                <Battery className="w-4 h-4" />
                <span>{isEn ? 'Energy Systems' : 'أنظمة الطاقة والشبكات'}</span>
              </div>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {isEn
                  ? 'Smart grid dynamics, rotational inertia in renewable integration, and battery storage buffering.'
                  : 'القصور الذاتي الدوراني للشبكات مع الطاقة الشمسية والرياح، وبنوك بطاريات التخزين BESS.'}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 bg-neutral-50">
              <div className="font-bold text-black mb-1 flex items-center gap-1.5">
                <Pi className="w-4 h-4" />
                <span>{isEn ? 'Applied Mathematics' : 'الرياضيات التطبيقية'}</span>
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
