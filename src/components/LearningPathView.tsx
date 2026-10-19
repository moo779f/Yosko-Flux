import React from 'react';
import { Language } from '../types';
import {
  Compass,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Cpu,
  Layers,
  Zap,
  Battery,
  Sun,
  Activity,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export interface LearningStage {
  id: string;
  stepNumber: string;
  title: string;
  titleEn: string;
  domain: string;
  domainEn: string;
  description: string;
  descriptionEn: string;
  coreFormulas: string[];
  articleIds: string[];
  articleTitles: { ar: string; en: string; id: string }[];
  projectIds: string[];
  projectTitles: { ar: string; en: string; id: string; num: string }[];
  academicReferences: { title: string; institution: string; url: string }[];
}

interface LearningPathViewProps {
  language: Language;
  onOpenArticle: (articleId: string) => void;
  onOpenProject: (projectId: string) => void;
}

export const LEARNING_STAGES: LearningStage[] = [
  // 1. BASIC CIRCUITS
  {
    id: 'stage-basic-circuits',
    stepNumber: '01',
    title: 'الدوائر الأساسية وقانون أوم (Basic Circuits)',
    titleEn: 'Basic Circuits & Ohm\'s Law',
    domain: 'الدوائر الكهربائية المستمرة DC',
    domainEn: 'DC Circuit Fundamentals',
    description: 'فهم فرق الجهد الكهروستاتيكي، وتدفق الشحنات (التيار)، والمقاومة الأومية، والتحليل الخطي لدوائر التوالي عبر مجزئ الجهد.',
    descriptionEn: 'Electrostatic potential difference, electric charge flow rate, ohmic resistance, and series voltage division governed by Ohm\'s Law.',
    coreFormulas: ['V = I · R', 'R_total = R_1 + R_2', 'V_out = V_s · (R_2 / (R_1 + R_2))', 'P = V · I = I² · R'],
    articleIds: ['paper-foundations-ohm'],
    articleTitles: [
      { id: 'paper-foundations-ohm', ar: 'فهم الكهرباء: الجهد والتيار والمقاومة وقانون أوم', en: 'Voltage, Current and Resistance: Ohm\'s Law' }
    ],
    projectIds: ['project-01-voltage-divider'],
    projectTitles: [
      { id: 'project-01-voltage-divider', num: 'PROJECT 01', ar: 'مجزئ الجهد: فهم كيفية توزيع الجهد الكهربائي', en: 'Voltage Divider: Understanding How Voltage Is Distributed' }
    ],
    academicReferences: [
      { title: 'OpenStax University Physics Vol 2 - Chapter 9: Ohm\'s Law', institution: 'OpenStax (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law' },
      { title: 'MIT 6.002: Circuits & Electronics - Lecture 1', institution: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
    ]
  },

  // 2. CIRCUIT ANALYSIS
  {
    id: 'stage-circuit-analysis',
    stepNumber: '02',
    title: 'تحليل الدوائر وقوانين كيرشوف (Circuit Analysis)',
    titleEn: 'Circuit Analysis & Kirchhoff\'s Laws',
    domain: 'الشبكات متعددة المسارات',
    domainEn: 'Multi-Branch Networks',
    description: 'حل وتوزيع التيارات والجهود في الشبكات المتشعبة عبر قانون كيرشوف للتيار عند العقد (KCL) وقانون الجهد في الحلقات (KVL).',
    descriptionEn: 'Solving unknown branch currents and node voltages across multi-loop networks via Kirchhoff\'s Current Law and Voltage Law.',
    coreFormulas: ['Σ I_in = Σ I_out', 'Σ V_loop = 0', 'I_1 = V_s / R_1', 'I_tot = I_1 + I_2'],
    articleIds: ['paper-foundations-kirchhoff'],
    articleTitles: [
      { id: 'paper-foundations-kirchhoff', ar: 'قوانين كيرشوف: رياضيات الدوائر متعددة المسارات', en: 'Kirchhoff\'s Laws & Multi-Branch Circuit Equations' }
    ],
    projectIds: ['project-02-kirchhoff-laws'],
    projectTitles: [
      { id: 'project-02-kirchhoff-laws', num: 'PROJECT 02', ar: 'قوانين كيرشوف: حل وتوزيع الجهود والتيارات', en: 'Kirchhoff\'s Laws: Solving a Circuit With Multiple Paths' }
    ],
    academicReferences: [
      { title: 'OpenStax University Physics Vol 2 - Chapter 10: Kirchhoff\'s Rules', institution: 'OpenStax (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules' },
      { title: 'MIT 6.002: Circuits & Electronics - Node Method', institution: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
    ]
  },

  // 3. DYNAMIC CIRCUITS
  {
    id: 'stage-dynamic-circuits',
    stepNumber: '03',
    title: 'الدوائر الديناميكية وتخزين الطاقة (Dynamic Circuits)',
    titleEn: 'Dynamic Circuits & Transient Dynamics',
    domain: 'الاستجابة العابرة عبر الزمن',
    domainEn: 'Time-Domain Transients',
    description: 'المكثفات كعناصر تخزين كهروستاتيكية، اشتقاق الثابت الزمني τ = RC، وتحليل منحنى الشحن الأسي عبر الزمن.',
    descriptionEn: 'Electrostatic energy storage in capacitors, time constant τ = RC derivation, and first-order exponential charging and discharging transients.',
    coreFormulas: ['τ = R · C', 'V_c(t) = V_s · (1 - e^(-t / τ))', 'i(t) = C · (dv_C / dt)', 'q(t) = C · v_C(t)'],
    articleIds: ['paper-foundations-reactance'],
    articleTitles: [
      { id: 'paper-foundations-reactance', ar: 'أين تذهب الطاقة؟ المكثفات والملفات والمجالات', en: 'Where Does Energy Go? Capacitors & Inductors' }
    ],
    projectIds: ['project-03-rc-circuit'],
    projectTitles: [
      { id: 'project-03-rc-circuit', num: 'PROJECT 03', ar: 'دائرة شحن وتفريغ المكثف (RC): مراقبة تخزين الطاقة', en: 'RC Charging: Watching a Capacitor Store Energy' }
    ],
    academicReferences: [
      { title: 'OpenStax University Physics Vol 2 - Chapter 10: RC Circuits', institution: 'OpenStax (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits' },
      { title: 'MIT 6.002 - Transient Response of First-Order Circuits', institution: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
    ]
  },

  // 4. AC & RESONANCE
  {
    id: 'stage-ac-resonance',
    stepNumber: '04',
    title: 'التيار المتردد والرنين الكهربائي (AC / Resonance)',
    titleEn: 'AC Circuits & Series RLC Resonance',
    domain: 'الاستجابة الترددية والمعاوقة المركبة',
    domainEn: 'Frequency-Domain & Complex Impedance',
    description: 'توليد الموجات الجيبية المترددة، المفاعلات الحثية والسعوية (XL, XC)، انعدام المفاعلة الصافية عند تردد الرنين الطبيعي f₀، وتدفق أقصى تيار.',
    descriptionEn: 'Sinusoidal AC excitation, reactive opposition, resonance condition where XL cancels XC, and frequency-domain bandpass filtering.',
    coreFormulas: ['f_0 = 1 / (2π√LC)', 'X_L = 2πfL', 'X_C = 1 / (2πfC)', 'Z = √(R² + (X_L - X_C)²)'],
    articleIds: ['paper-ac-sinewaves', 'paper-rlc-resonance'],
    articleTitles: [
      { id: 'paper-ac-sinewaves', ar: 'دوائر AC والطور: لماذا نستخدم الموجات الجيبية؟', en: 'AC Circuits and Phase: Why Sine Waves?' },
      { id: 'paper-rlc-resonance', ar: 'رنين RLC المتوالي: النظرية والحسابات الرياضية', en: 'Series RLC Resonance: Theory & Frequency Response' }
    ],
    projectIds: ['project-04-rlc-resonance'],
    projectTitles: [
      { id: 'project-04-rlc-resonance', num: 'PROJECT 04', ar: 'رنين دائرة RLC التوالي: عندما تتوازن الملفات والمكثفات', en: 'Series RLC Resonance: When Inductors and Capacitors Balance' }
    ],
    academicReferences: [
      { title: 'OpenStax University Physics Vol 2 - Chapter 15: Resonance in AC Circuits', institution: 'OpenStax (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit' },
      { title: 'MIT 6.002 - Resonant Circuits & Quality Factor Q', institution: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
    ]
  },

  // 5. PHOTOVOLTAICS
  {
    id: 'stage-photovoltaics',
    stepNumber: '05',
    title: 'الطاقة الكهروضوئية وسلوك الألواح (Photovoltaics)',
    titleEn: 'Photovoltaic Solar Generation',
    domain: 'فيزياء أشباه الموصلات والتحويل الضوئي',
    domainEn: 'Semiconductor Conversion Physics',
    description: 'الظاهرة الكهروضوئية في خلايا السيليكون، استجابة القدرة لشدة الإشعاع الشمسي، منحنيات I-V و P-V، وتتبع نقطة القدرة القصوى (MPPT).',
    descriptionEn: 'Photovoltaic energy conversion, irradiance scaling, characteristic I-V and P-V curve modeling, and Maximum Power Point (MPP) extraction.',
    coreFormulas: ['P ≈ P_max · (G / G_stc)', 'P = V · I', 'P_mp = V_mp · I_mp', 'I = I_ph - I_0(e^(qV/nkT) - 1)'],
    articleIds: ['paper-solar-grid'],
    articleTitles: [
      { id: 'paper-solar-grid', ar: 'الطاقة الشمسية والشبكة الكهربائية: المنظومة المتكاملة', en: 'Solar Energy & Electrical Grid: The Integrated System' }
    ],
    projectIds: ['project-05-photovoltaic-irradiance'],
    projectTitles: [
      { id: 'project-05-photovoltaic-irradiance', num: 'PROJECT 05', ar: 'اللوح الكهروضوئي: كيف يغير سطوع الشمس القدرة المتاحة؟', en: 'How Sunlight Changes Solar Panel Power Output' }
    ],
    academicReferences: [
      { title: 'National Renewable Energy Laboratory (NREL) - Photovoltaic Modeling', institution: 'U.S. Department of Energy (DOE)', url: 'https://www.nrel.gov/research/re-photovoltaics.html' },
      { title: 'Sandia National Laboratories PV Performance Modeling Collaborative', institution: 'Sandia National Labs', url: 'https://pvpmc.sandia.gov/' }
    ]
  },

  // 6. SOLAR + BATTERY ENERGY SYSTEM
  {
    id: 'stage-solar-battery-system',
    stepNumber: '06',
    title: 'منظومات الطاقة والتخزين (Solar + Battery System)',
    titleEn: 'Solar + Battery + Load Energy System',
    domain: 'هندسة المنظومات والتوازن اليومي',
    domainEn: 'System-Level Energy Sizing',
    description: 'التكامل الهندسي بين التوليد الشمسي النهاري المتقطع وتخزين البطاريات الكيميائي لتغذية حمل مستمر على مدار 24 ساعة، وحساب مسار SOC.',
    descriptionEn: 'Holistic system integration balancing intermittent diurnal solar generation with battery storage to sustain a continuous 150W load over 24 hours.',
    coreFormulas: ['E = V · Ah', 'P_net(t) = P_solar(t) - P_load(t)', 'SOC(t+1) = SOC(t) + [E_in · η - E_out] / E_usable', 't_autonomy = E_usable / P_load'],
    articleIds: ['paper-batteries-storage', 'paper-renewable-frequency'],
    articleTitles: [
      { id: 'paper-batteries-storage', ar: 'البطاريات وتخزين الطاقة: الكيمياء في خدمة استقرار المنظومة', en: 'Battery Energy Storage Systems' },
      { id: 'paper-renewable-frequency', ar: 'تكامل الطاقة المتجددة وتردد الشبكة الكهربائية', en: 'Renewable Integration and Grid Frequency' }
    ],
    projectIds: ['project-06-solar-battery-system'],
    projectTitles: [
      { id: 'project-06-solar-battery-system', num: 'PROJECT 06', ar: 'نظام الطاقة الشمسية والبطارية والحمل: هل تصمد البطارية 24 ساعة؟', en: 'Can a Battery Keep a Solar-Powered Load Running?' }
    ],
    academicReferences: [
      { title: 'NREL System Advisor Model (SAM) Technical Guidance', institution: 'National Renewable Energy Laboratory', url: 'https://sam.nrel.gov/' },
      { title: 'IEEE Standards for Energy Storage Sizing (IEEE 1561)', institution: 'IEEE Standards Association', url: 'https://standards.ieee.org/' }
    ]
  }
];

export const LearningPathView: React.FC<LearningPathViewProps> = ({
  language,
  onOpenArticle,
  onOpenProject
}) => {
  const isEn = language === 'en';

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto font-serif pb-16">
      {/* Header Banner */}
      <section className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-2xs space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase rounded-md tracking-wider">
            {isEn ? 'CURRICULUM & ENGINEERING ROADMAP' : 'خارطة مسار التعلم الهندسي المتدرج'}
          </span>
          <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-0.5 font-mono text-[11px] rounded-md font-bold">
            6 {isEn ? 'Core Progression Stages' : 'مراحل تخصصية متتابعة'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black">
          {isEn ? 'Self-Directed Electrical Engineering Learning Progression' : 'مسار التعلم الذاتي التطبيقي في الهندسة الكهربائية'}
        </h1>

        <p className="text-xs sm:text-sm text-neutral-600 font-serif max-w-3xl leading-relaxed">
          {isEn
            ? 'A structured engineering progression designed for a student preparing for university Electrical Engineering: advancing from basic DC circuits to multi-branch circuit analysis, transient dynamic circuits, AC resonance, photovoltaic modeling, and system-level solar-battery balancing.'
            : 'خارطة طريق تعليمية متدرجة تبدأ من القوانين الأساسية وتتطور هندسياً: من دوائر التوالي ومجزئ الجهد، إلى قوانين كيرشوف، وديناميكا المكثفات والشحن الأسي، ورنين التيار المتردد RLC، ونمذجة الألواح الكهروضوئية، وموازنة الطاقة في منظومة شمسية وبطارية على مدار 24 ساعة.'}
        </p>

        {/* Quick Progression Flow Bar */}
        <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
          <span className="font-bold text-neutral-800">{isEn ? 'PROGRESSION:' : 'التسلسل:'}</span>
          {[
            '01. BASIC CIRCUITS',
            '02. CIRCUIT ANALYSIS',
            '03. DYNAMIC CIRCUITS',
            '04. AC / RESONANCE',
            '05. PHOTOVOLTAICS',
            '06. ENERGY SYSTEMS'
          ].map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded text-neutral-700 font-bold">
                {step}
              </span>
              {idx < 5 && <span className="text-neutral-400 font-bold">→</span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* The 6 Progressive Stages */}
      <div className="space-y-6">
        {LEARNING_STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-7 shadow-2xs hover:border-black/50 transition-all space-y-4"
          >
            {/* Stage Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-black text-white font-mono text-sm font-black flex items-center justify-center shrink-0">
                  {stage.stepNumber}
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold block">
                    {isEn ? stage.domainEn : stage.domain}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black font-headline text-black">
                    {isEn ? stage.titleEn : stage.title}
                  </h2>
                </div>
              </div>

              <span className="font-mono text-xs font-bold text-neutral-500 bg-neutral-50 border border-neutral-200 px-2.5 py-1 rounded-md self-start sm:self-center">
                Stage {stage.stepNumber} of 06
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif">
              {isEn ? stage.descriptionEn : stage.description}
            </p>

            {/* Core Governing Formulas */}
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-1.5 font-mono text-xs">
              <span className="text-[10px] font-bold text-neutral-500 uppercase block">
                {isEn ? 'Core Governing Equations:' : 'المعادلات والقوانين الحاكمة:'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {stage.coreFormulas.map((formula, fIdx) => (
                  <span
                    key={fIdx}
                    className="bg-white border border-neutral-200 px-2.5 py-1 rounded-md font-bold text-black text-[11px]"
                  >
                    {formula}
                  </span>
                ))}
              </div>
            </div>

            {/* Linked Real Engineering Projects & Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {/* Linked Engineering Project */}
              <div className="p-3.5 bg-neutral-900 text-white rounded-xl space-y-2 font-mono text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase mb-1">
                    <span>{isEn ? 'Applied Engineering Project:' : 'المشروع الهندسي التطبيقي المباشر:'}</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm font-headline leading-snug">
                    {isEn ? stage.projectTitles[0]?.en : stage.projectTitles[0]?.ar}
                  </h3>
                </div>

                <button
                  onClick={() => onOpenProject(stage.projectIds[0])}
                  className="mt-2 w-full bg-emerald-500 hover:bg-emerald-400 text-black py-1.5 px-3 rounded-lg font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors text-xs"
                >
                  <span>{isEn ? 'Open Project Lab' : 'فتح صفحة المشروع والمحاكاة'}</span>
                  {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Linked Academic Articles */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2 font-serif text-xs flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                    {isEn ? 'Theoretical Foundational Papers:' : 'المقالات والأوراق النظرية التأسيسية:'}
                  </span>
                  <div className="space-y-1.5">
                    {stage.articleTitles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => onOpenArticle(art.id)}
                        className="font-bold text-neutral-900 hover:underline cursor-pointer flex items-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                        <span className="truncate">{isEn ? art.en : art.ar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Real Reference Link */}
                <div className="pt-2 border-t border-neutral-200 text-[11px] font-mono text-neutral-600 flex items-center justify-between">
                  <span className="truncate">{stage.academicReferences[0]?.institution}</span>
                  <a
                    href={stage.academicReferences[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>{isEn ? 'Source' : 'المصدر'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
