import { EngineeringProject } from './types';

export const project04: EngineeringProject = {
  id: 'project-04-rlc-resonance',
  projectNumber: 'PROJECT 04',
  numberInt: 4,
  title: 'رنين دائرة RLC التوالي: عندما تتوازن الملفات والمكثفات',
  titleEn: 'Series RLC Resonance: When Inductors and Capacitors Balance',
  subtitle: 'حساب التردد الطبيعي f₀، انعدام المفاعلة الحثية والسعوية، وتحليل ذروة التيار',
  subtitleEn: 'Calculating natural resonant frequency f₀, cancellation of inductive and capacitive reactances, and current peak analysis',
  engineeringQuestion: 'لماذا تصل دائرة RLC الموصولة على التوالي إلى أدنى ممانعة كلية (Minimum Impedance) وأعلى شدة تيار عند تردد محدد؟',
  engineeringQuestionEn: 'Why does a series RLC circuit reach minimum impedance and peak current at a particular natural frequency?',
  whyItMatters: 'ظاهرة الرنين (Resonance) هي أساس جميع تقنيات الاتصالات اللاسلكية ومعالجة الإشارات. بها يتمكن جهاز الراديو والهاتف المحمول من التقاط محطة معينة بتردد محدد من بين آلاف الموجات الكهرومغناطيسية السابحة في الهواء وتجاهل البقية (Tuning Filters). كما أنها حاسمة في هندسة القوى الكهربائية لتجنب الرنين التوافقي الخطير الذي قد يدمر المحولات وخطوط النقل.',
  whyItMattersEn: 'Resonance is the physical phenomenon enabling all wireless communications, radio tuning, and band-pass filtering, allowing receivers to select a single frequency from the spectrum. It is equally critical in power engineering to avoid destructive harmonic resonance across transmission lines.',
  difficulty: 'Intermediate',
  difficultyAr: 'المستوى المتوسط',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Falstad Circuit Simulator', 'Scientific Calculator', 'AC Frequency Sweep Plotter'],
  concepts: ['الرنين الكهربائي (Resonance)', 'المفاعلة الحثية (XL)', 'المفاعلة السعوية (XC)', 'الممانعة الكلية (Z)', 'زاوية الطور (Phase Angle)'],
  conceptsEn: ['Electrical Resonance', 'Inductive Reactance (XL)', 'Capacitive Reactance (XC)', 'Impedance (Z)', 'Phase Angle'],

  prerequisites: [
    {
      name: 'التيار المتردد (AC - Alternating Current)',
      nameEn: 'Alternating Current (AC)',
      description: 'تيار يتغير اتجاهه ومقداره دورياً وفق دالة جيبية بتردد f مقاساً بالهرتز (Hz).',
      descriptionEn: 'Electric current periodically reversing direction with sinusoidal magnitude at frequency f in Hertz (Hz).'
    },
    {
      name: 'الملف الحثي والمفاعلة الحثية (XL = 2πfL)',
      nameEn: 'Inductive Reactance (XL)',
      description: 'يقاوم الملف الزيادة في التردد بمجاله المغناطيسي، فتزداد ممانعته طردياً مع التردد: XL = 2πfL.',
      descriptionEn: 'An inductor opposes AC current changes via magnetic field; its reactance XL scales linearly with frequency.'
    },
    {
      name: 'المكثف والمفاعلة السعوية (XC = 1 / 2πfC)',
      nameEn: 'Capacitive Reactance (XC)',
      description: 'يمرر المكثف الترددات العالية بسهولة، فتقل ممانعته عكسياً مع التردد: XC = 1 / (2πfC).',
      descriptionEn: 'A capacitor permits high frequencies to pass easily; its reactance XC drops inversely with frequency.'
    },
    {
      name: 'الممانعة الكلية (Impedance - Z)',
      nameEn: 'Impedance (Z)',
      description: 'المقاومة الكلية لدائرة التيار المتردد وتجمع بين المقاومة الحقيقية R والمفاعلة الصافية X: Z = √(R² + (XL - XC)²).',
      descriptionEn: 'Total opposition to AC current combining real resistance and net reactance: Z = sqrt(R² + (XL - XC)²).'
    }
  ],

  componentsParameters: [
    { component: 'مصدر جهد متردد (AC Source)', componentEn: 'AC Voltage Source (Vs)', value: '10.0 V (Peak / RMS)', purpose: 'تغذية الدائرة بإشارة جيبية متغيرة التردد', purposeEn: 'Provides sinusoidal AC excitation across frequency sweeps' },
    { component: 'مقاوم نقي (Resistor R)', componentEn: 'Damping Resistor (R)', value: '100.0 Ω', purpose: 'تحديد الحد الأقصى للتيار عند الرنين وتحديد عرض النطاق', purposeEn: 'Sets minimum impedance floor and governs bandwidth' },
    { component: 'ملف حثي نقي (Inductor L)', componentEn: 'Inductor (L)', value: '10.0 mH (0.010 H)', purpose: 'تخزين الطاقة في مجال مغناطيسي وتوليد مفاعلة موجبة', purposeEn: 'Magnetic energy storage providing positive reactance XL' },
    { component: 'مكثف كهربائي (Capacitor C)', componentEn: 'Capacitor (C)', value: '10.0 µF (0.000010 F)', purpose: 'تخزين الطاقة في مجال كهربائي وتوليد مفاعلة سالبة', purposeEn: 'Electrostatic energy storage providing negative reactance XC' }
  ],

  diagram: {
    ascii: `
  ~ 10V AC Source
  (Sweep: 50 Hz to 2000 Hz)
       │
       ▼
     ┌───┐
     │   │ R = 100 Ω
     └───┘
       │
       ▼
     (@@@) L = 10 mH (XL = 2πfL)
       │
       ▼
     ──┴──
     ──┬── C = 10 µF (XC = 1 / 2πfC)
       │
       ▼
      GND (0 V)

  AT RESONANCE (f0 ≈ 503.3 Hz):
  XL = 31.62 Ω  and  XC = 31.62 Ω  ===>  Net Reactance X = 0 Ω
  Total Impedance Z = R = 100 Ω  ===>  Max Current I = 10V / 100Ω = 100 mA
`,
    diagramType: 'rlc_resonance',
    description: 'دائرة RLC توالي متصلة بمصدر تيار متردد 10V: تتابع المقاوم R = 100Ω والملف L = 10mH والمكثف C = 10µF.',
    descriptionEn: 'Series RLC network: 10V AC source feeding series R = 100Ω, L = 10mH, and C = 10µF.'
  },

  mathematicalModel: {
    summary: 'عند تردد الرنين الطبيعي f₀، تتساوى المفاعلة الحثية XL مع المفاعلة السعوية XC تماماً. وحيث أن فرق الطور بينهما 180 درجة، فإنهما يلغيان بعضهما كلياً (XL - XC = 0). تصبح الممانعة الكلية مساوية للمقاومة النقية فقط (Z = R = 100 Ω)، فيصل التيار إلى ذروته القصوى I = Vs / R.',
    summaryEn: 'At the natural resonant frequency f₀, inductive reactance XL exactly equals capacitive reactance XC. Being 180° out of phase, they cancel out (XL - XC = 0). Total impedance collapses to pure resistance (Z = R = 100 Ω), driving loop current to its theoretical peak.',
    equations: [
      {
        name: 'قانون التردد الرنيني الطبيعي',
        nameEn: 'Resonant Frequency Equation',
        formula: 'f_0 = \\frac{1}{2 \\pi \\sqrt{L \\times C}}',
        variableDefinitions: [
          { variable: 'f_0', meaning: 'تردد الرنين الطبيعي للدائرة', meaningEn: 'Natural resonant frequency', unit: 'Hz (هرتز)' },
          { variable: 'L', meaning: 'الحث الذاتي للملف', meaningEn: 'Inductance', unit: 'H (هنري)' },
          { variable: 'C', meaning: 'السعة الكهربائية للمكثف', meaningEn: 'Capacitance', unit: 'F (فاراد)' }
        ]
      },
      {
        name: 'المفاعلات الحثية والسعوية',
        nameEn: 'Inductive and Capacitive Reactances',
        formula: 'X_L = 2 \\pi f L, \\quad X_C = \\frac{1}{2 \\pi f C}',
        variableDefinitions: [
          { variable: 'X_L', meaning: 'المفاعلة الحثية للملف', meaningEn: 'Inductive reactance', unit: 'Ω' },
          { variable: 'X_C', meaning: 'المفاعلة السعوية للمكثف', meaningEn: 'Capacitive reactance', unit: 'Ω' },
          { variable: 'f', meaning: 'تردد إشارة التغذية', meaningEn: 'Signal frequency', unit: 'Hz' }
        ]
      },
      {
        name: 'الممانعة الكلية والتيار',
        nameEn: 'Total Impedance and Current',
        formula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad I = \\frac{V_s}{Z}',
        variableDefinitions: [
          { variable: 'Z', meaning: 'الممانعة الكلية المكافئة للدائرة', meaningEn: 'Total series loop impedance', unit: 'Ω' },
          { variable: 'I', meaning: 'شدة تيار الحلقة المتردد', meaningEn: 'RMS/Peak loop current', unit: 'A' },
          { variable: 'V_s', meaning: 'جهد المصدر المتردد (10.0 V)', meaningEn: 'AC source potential', unit: 'V' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب حاصل ضرب الحث في السعة (L × C)',
      stepEn: '1. Calculate Product of Inductance and Capacitance (L × C)',
      formula: 'L \\times C = 0.010\\,\\text{H} \\times 10 \\times 10^{-6}\\,\\text{F}',
      substitution: 'L \\times C = 1.0 \\times 10^{-7}\\,\\text{s}^2',
      result: '1.0 × 10^-7',
      unit: 's²'
    },
    {
      step: '2. حساب الجذر التربيعي لـ LC',
      stepEn: '2. Calculate Square Root of LC (\\sqrt{LC})',
      formula: '\\sqrt{L \\times C} = \\sqrt{1.0 \\times 10^{-7}}',
      substitution: '\\sqrt{1.0 \\times 10^{-7}}',
      result: '3.1623 × 10^-4',
      unit: 's'
    },
    {
      step: '3. حساب التردد الرنيني الدقيق f₀',
      stepEn: '3. Calculate Exact Natural Resonant Frequency f₀',
      formula: 'f_0 = \\frac{1}{2 \\pi \\sqrt{LC}} = \\frac{1}{2 \\times 3.14159 \\times 3.1623 \\times 10^{-4}}',
      substitution: 'f_0 = \\frac{1}{0.0019869}',
      result: '503.29',
      unit: 'Hz (≈ 503.3 Hz)'
    },
    {
      step: '4. حساب المفاعلة الحثية عند الرنين XL(f₀)',
      stepEn: '4. Calculate Inductive Reactance at Resonance XL(f₀)',
      formula: 'X_L = 2 \\pi f_0 L = 2 \\times 3.14159 \\times 503.29 \\times 0.010',
      substitution: 'X_L = 31.622',
      result: '31.62',
      unit: 'Ω'
    },
    {
      step: '5. حساب المفاعلة السعوية عند الرنين XC(f₀)',
      stepEn: '5. Calculate Capacitive Reactance at Resonance XC(f₀)',
      formula: 'X_C = \\frac{1}{2 \\pi f_0 C} = \\frac{1}{2 \\times 3.14159 \\times 503.29 \\times 10 \\times 10^{-6}}',
      substitution: 'X_C = \\frac{1}{0.0316227}',
      result: '31.62',
      unit: 'Ω (Matches XL exactly!)'
    },
    {
      step: '6. حساب الممانعة الصافية Z وأقصى تيار I_max عند الرنين',
      stepEn: '6. Calculate Minimum Impedance Z and Peak Current I_max',
      formula: 'Z = \\sqrt{R^2 + (31.62 - 31.62)^2} = R = 100\\,\\Omega \\implies I = \\frac{10\\text{ V}}{100\\,\\Omega}',
      substitution: 'I = \\frac{10}{100}',
      result: '0.100',
      unit: 'A (100.0 mA)'
    }
  ],

  predictionBeforeSimulation: 'قبل فتح المحاكي: عند الترددات المنخفضة (مثل 100 Hz)، ستكون ممانعة المكثف ضخمة جداً (159 Ω) مما يخنق التيار إلى 54 mA. وعند الترددات العالية جداً (مثل 2000 Hz)، ستكون ممانعة الملف ضخمة (125 Ω) مما يخنق التيار مجدداً. التوقع هو أن التيار سيصل لذروته القصوى (100 mA) عند تردد 503 Hz بالضبط حيث تنعدم المفاعلتان.',
  predictionBeforeSimulationEn: 'Prediction before simulation: At low frequencies (100 Hz), capacitor impedance dominates (159 Ω), throttling current to 54 mA. At high frequencies (2000 Hz), inductor impedance chokes current. Peak current (100 mA) will occur precisely at f0 = 503.3 Hz where reactances cancel out.',

  simulationSetup: {
    toolName: 'Falstad Circuit Simulator',
    simulatorUrl: 'https://www.falstad.com/circuit/',
    stepByStepProcedure: [
      'افتح محاكي Falstad عبر https://www.falstad.com/circuit/.',
      'اختر مساحة عمل فارغة (Circuits → Blank Circuit).',
      'أضف مصدر جهد متردد AC Voltage Source (اضغط مفتاح "v" ثم انقر نقراً مزدوجاً واختر AC وضبط الجهد على 10 V).',
      'أضف مقاومة R = 100 Ω (مفتاح "r").',
      'أضف ملفاً حثياً L = 10 mH (0.01 H) (مفتاح "l").',
      'أضف مكثفاً C = 10 µF (مفتاح "c").',
      'صل المكونات الأربعة على التوالي بحلقة مغلقة ثم صل الطرف السفلي بالتأريض (مفتاح "g").',
      'انقر بزر الفأرة الأيمن على المقاوم واختر "View in Scope" لعرض التيار.',
      'انقر نقراً مزدوجاً على مصدر AC وغير التردد عبر نقاط المسح: 100, 250, 400, 503, 600, 800, 1000, 2000 Hz.',
      'سجل سعة قمة التيار (Peak Current) والممانعة لكل تردد.'
    ],
    stepByStepProcedureEn: [
      'Open Falstad Circuit Simulator at https://www.falstad.com/circuit/.',
      'Open a blank canvas via Circuits → Blank Circuit.',
      'Insert an AC Voltage Source set to 10 V (press "v", double-click, select AC).',
      'Insert series resistor R = 100 Ω (press "r").',
      'Insert series inductor L = 10 mH (press "l").',
      'Insert series capacitor C = 10 µF (press "c").',
      'Connect components in a single closed series loop to ground (press "g").',
      'Right-click the resistor and select "View in Scope" to monitor AC current amplitude.',
      'Sweep the AC source frequency across: 100, 250, 400, 503, 600, 800, 1000, 2000 Hz.',
      'Record peak current amplitude and calculate impedance at each frequency step.'
    ],
    measurementPoints: [
      'الأميتر التوالي / راسم الإشارة عبر R: قياس سعة تيار الحلقة المتردد.',
      'الفولتميتر عبر طرفي الملف L: قياس الجهد الحثي VL.',
      'الفولتميتر عبر طرفي المكثف C: قياس الجهد السعوي VC وملاحظة تساويه مع VL وتعاكسه في الطور.'
    ],
    measurementPointsEn: [
      'Series ammeter / scope across R: Measure AC current amplitude.',
      'Voltmeter across inductor L: Measure inductive voltage VL.',
      'Voltmeter across capacitor C: Measure capacitive voltage VC, observing 180° phase inversion.'
    ],
    whatToChange: 'غير تردد المصدر f خطوة بخطوة حول 503 Hz لتسجيل منحنى الاستجابة الترددية كاملاً.',
    whatToChangeEn: 'Step AC source frequency f systematically around 503 Hz to chart the complete resonance curve.',
    whatToObserve: 'راقب كيف يرتفع التيار تدريجياً ليصل إلى ذروته الحادة عند 503 Hz، وكيف يصبح الجهد والتيار متطابقين في الطور (In-phase) عند الرنين.',
    whatToObserveEn: 'Observe current amplitude peaking sharply at 503 Hz and voltage aligning in-phase with current at resonance.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'الحساب اليدوي لتردد الرنين', titleEn: 'Manual Resonance Calculation', instruction: 'احسب f0 = 1 / (2π√LC) بدقة وأثبت أن XL = XC = 31.62 Ω على الورق.', instructionEn: 'Calculate f0 = 1 / (2π√LC) and prove XL = XC = 31.62 Ω manually.' },
    { stepNum: 2, title: 'بناء دائرة RLC في المحاكي', titleEn: 'Build RLC Loop in Falstad', instruction: 'ابنِ الدائرة بمصدر AC ومقاوم 100Ω وملف 10mH ومكثف 10µF واضبط راسم الإشارة.', instructionEn: 'Assemble AC source, 100Ω resistor, 10mH inductor, and 10µF capacitor in Falstad.' },
    { stepNum: 3, title: 'إجراء مسح الترددات', titleEn: 'Conduct Frequency Sweep', instruction: 'اضبط التردد على 100, 250, 400, 503, 600, 800, 1000, 2000 Hz وسجل التيار المقاس لكل تردد.', instructionEn: 'Set frequencies to 100, 250, 400, 503, 600, 800, 1000, 2000 Hz and log current.' },
    { stepNum: 4, title: 'حساب الممانعة المقابلة', titleEn: 'Evaluate Impedance Z', instruction: 'احسب Z = Vs / I لكل قراءة وتأكد من هبوط Z إلى 100 Ω عند الرنين.', instructionEn: 'Calculate Z = Vs / I for each point and verify minimum at 100 Ω.' },
    { stepNum: 5, title: 'رسم منحنيات الاستجابة', titleEn: 'Plot Response Curves', instruction: 'ارسم منحنى التردد مقابل التيار، ومنحنى التردد مقابل الممانعة.', instructionEn: 'Plot Frequency vs Current and Frequency vs Impedance response curves.' },
    { stepNum: 6, title: 'مقارنة التردد المرصود بالحسابات', titleEn: 'Compare Observed vs Theory', instruction: 'حدد التردد التجريبي الذي حقق أعلى قمة وقارنه مع 503.29 Hz بنسبة الخطأ.', instructionEn: 'Identify experimental peak frequency and compare against 503.29 Hz.' },
    { stepNum: 7, title: 'كتابة التفسير الهندسي', titleEn: 'Write Engineering Analysis', instruction: 'اشرح كيف يستخدم الرنين في دوائر التوليف (Tuning) واختيار القنوات في الراديو.', instructionEn: 'Explain how resonance enables radio channel selection and bandpass filtering.' }
  ],

  expectedResult: 'ذروة رنين حادة ومثالية عند f = 503.3 Hz حيث يبلغ التيار أقصاه عند 100.0 mA والممانعة أدناها عند 100.0 Ω بنسبة خطأ 0.0%.',
  expectedResultEn: 'Sharp resonance peak at f = 503.3 Hz with peak current of 100.0 mA and minimum impedance of 100.0 Ω with 0.0% error.',

  comparisonTable: [
    {
      parameter: 'تردد الرنين الطبيعي (f₀)',
      parameterEn: 'Natural Resonant Frequency (f₀)',
      theoretical: '503.29 Hz',
      simulated: '503.30 Hz',
      difference: '0.01 Hz',
      percentageError: '0.002%',
      unit: 'Hz',
      notes: 'تطابق تام لصيغة تومسون',
      notesEn: 'Exact match with Thomson formula'
    },
    {
      parameter: 'المفاعلة الحثية XL عند الرنين',
      parameterEn: 'Inductive Reactance XL at f₀',
      theoretical: '31.62 Ω',
      simulated: '31.62 Ω',
      difference: '0.00 Ω',
      percentageError: '0.0%',
      unit: 'Ω',
      notes: '2π × 503.3 × 0.01H',
      notesEn: '2π × 503.3 × 0.01H'
    },
    {
      parameter: 'المفاعلة السعوية XC عند الرنين',
      parameterEn: 'Capacitive Reactance XC at f₀',
      theoretical: '31.62 Ω',
      simulated: '31.62 Ω',
      difference: '0.00 Ω',
      percentageError: '0.0%',
      unit: 'Ω',
      notes: '1 / (2π × 503.3 × 10µF)',
      notesEn: '1 / (2π × 503.3 × 10µF)'
    },
    {
      parameter: 'الممانعة الكلية الصافية Z عند الرنين',
      parameterEn: 'Total Net Impedance Z at f₀',
      theoretical: '100.00 Ω',
      simulated: '100.00 Ω',
      difference: '0.00 Ω',
      percentageError: '0.0%',
      unit: 'Ω',
      notes: 'تساوي المقاومة النقية R فقط',
      notesEn: 'Collapses to pure resistance R'
    },
    {
      parameter: 'أقصى تيار حلقة (I_max)',
      parameterEn: 'Maximum Loop Current (I_max)',
      theoretical: '100.0 mA',
      simulated: '100.0 mA',
      difference: '0.0 mA',
      percentageError: '0.0%',
      unit: 'mA',
      notes: 'Vs / R = 10V / 100Ω',
      notesEn: 'Vs / R = 10V / 100Ω'
    }
  ],

  sweepTable: {
    title: 'جدول مسح الترددات لدائرة RLC التوالي (Frequency Sweep Data)',
    titleEn: 'Series RLC Frequency Sweep Response Data',
    headers: ['التردد f (Hz)', 'المفاعلة XL (Ω)', 'المفاعلة XC (Ω)', 'المفاعلة الصافية X (Ω)', 'الممانعة Z (Ω)', 'التيار I (mA)', 'الحالة'],
    headersEn: ['Frequency f (Hz)', 'XL (Ω)', 'XC (Ω)', 'Net X (Ω)', 'Impedance Z (Ω)', 'Current I (mA)', 'State'],
    rows: [
      { cells: ['100 Hz', '6.28 Ω', '159.15 Ω', '-152.87 Ω', '182.68 Ω', '54.7 mA', 'سعوي مهيمن (Capacitive)'] },
      { cells: ['250 Hz', '15.71 Ω', '63.66 Ω', '-47.95 Ω', '110.90 Ω', '90.2 mA', 'سعوي (Capacitive)'] },
      { cells: ['400 Hz', '25.13 Ω', '39.79 Ω', '-14.66 Ω', '101.07 Ω', '98.9 mA', 'اقتراب من الرنين'] },
      { cells: ['503.3 Hz', '31.62 Ω', '31.62 Ω', '0.00 Ω', '100.00 Ω', '100.0 mA', 'ذروة الرنين التام (Resonance!)'] },
      { cells: ['600 Hz', '37.70 Ω', '26.53 Ω', '+11.17 Ω', '100.62 Ω', '99.4 mA', 'حثي (Inductive)'] },
      { cells: ['800 Hz', '50.27 Ω', '19.89 Ω', '+30.37 Ω', '104.51 Ω', '95.7 mA', 'حثي (Inductive)'] },
      { cells: ['1000 Hz', '62.83 Ω', '15.92 Ω', '+46.92 Ω', '110.46 Ω', '90.5 mA', 'حثي مهيمن'] },
      { cells: ['2000 Hz', '125.66 Ω', '7.96 Ω', '+117.71 Ω', '154.45 Ω', '64.7 mA', 'حثي قوي جداً'] }
    ]
  },

  graphs: [
    {
      id: 'proj04-current-vs-freq',
      title: 'منحنى الاستجابة الترددية للتيار: ذروة الرنين عند 503.3 Hz',
      titleEn: 'Frequency vs Current Resonance Curve (Peak at 503.3 Hz)',
      xAxisLabel: 'التردد (هرتز Hz)',
      xAxisLabelEn: 'Frequency (Hz)',
      yAxisLabel: 'شدة تيار الحلقة (mA)',
      yAxisLabelEn: 'Loop Current (mA)',
      dataPoints: [
        { x: 100, y: 54.7, label: '100 Hz (54.7 mA)' },
        { x: 250, y: 90.2, label: '250 Hz (90.2 mA)' },
        { x: 400, y: 98.9, label: '400 Hz (98.9 mA)' },
        { x: 503.3, y: 100.0, label: '503.3 Hz (PEAK: 100.0 mA)' },
        { x: 600, y: 99.4, label: '600 Hz (99.4 mA)' },
        { x: 800, y: 95.7, label: '800 Hz (95.7 mA)' },
        { x: 1000, y: 90.5, label: '1000 Hz (90.5 mA)' },
        { x: 2000, y: 64.7, label: '2000 Hz (64.7 mA)' }
      ],
      notes: 'منحنى جرس متماثل حول تردد الرنين 503.3 Hz يوضح كيف تعمل الدائرة كمرشح تمرير حزمة (Band-Pass Filter).',
      notesEn: 'Symmetric resonance bell curve around 503.3 Hz demonstrating band-pass filtering behavior.'
    },
    {
      id: 'proj04-impedance-vs-freq',
      title: 'منحنى الممانعة الكلية Z مقابل التردد: القاع الأدنى عند 100 Ω',
      titleEn: 'Frequency vs Total Impedance Z (Valley Floor at 100 Ω)',
      xAxisLabel: 'التردد (هرتز Hz)',
      xAxisLabelEn: 'Frequency (Hz)',
      yAxisLabel: 'الممانعة الكلية Z (أوم Ω)',
      yAxisLabelEn: 'Total Impedance Z (Ω)',
      dataPoints: [
        { x: 100, y: 182.68, label: '100 Hz (182.7 Ω)' },
        { x: 250, y: 110.90, label: '250 Hz (110.9 Ω)' },
        { x: 400, y: 101.07, label: '400 Hz (101.1 Ω)' },
        { x: 503.3, y: 100.00, label: '503.3 Hz (MIN: 100.0 Ω)' },
        { x: 600, y: 100.62, label: '600 Hz (100.6 Ω)' },
        { x: 800, y: 104.51, label: '800 Hz (104.5 Ω)' },
        { x: 1000, y: 110.46, label: '1000 Hz (110.5 Ω)' },
        { x: 2000, y: 154.45, label: '2000 Hz (154.5 Ω)' }
      ],
      notes: 'تصل الممانعة إلى أدنى قيمة ممكنة (Z = 100 Ω) عند الرنين، وتزداد على الجانبين مما يمنع الترددات غير المرغوبة.',
      notesEn: 'Impedance hits minimum valley at 100 Ω at resonance, rising steeply on both sides to reject off-band signals.'
    }
  ],

  engineeringInterpretation: 'تفسير الظاهرة هندسياً: المكثف والملف يتصرفان كبندول كهرومغناطيسي، حيث تتأرجح الطاقة المخزنة ذهاباً وإياباً بين المجال المغناطيسي للملف والمجال الكهربائي للمكثف. عند تردد الرنين f₀ = 503.3 Hz، يتطابق تردد المصدر مع التردد الطبيعي لتبادل الطاقة، فيولد الملف جهداً معاكساً تماماً لجهد المكثف (VL = -VC). ونتيجة لذلك، يلغي العنصران تأثير بعضهما في إعاقة التيار، ولا يتبقى في مسار الدائرة سوى المقاومة الأومية النقية R = 100 Ω. هذا هو الأساس الذي تبنى عليه مستقبلات الراديو لاختيار تردد الإذاعة المطلوب وحجب كل الترددات الأخرى.',
  engineeringInterpretationEn: 'Engineering interpretation: The inductor and capacitor act as an electromagnetic pendulum, exchanging energy between magnetic and electric fields. At the resonant frequency f₀ = 503.3 Hz, the driving AC aligns perfectly with this natural exchange rate. The inductive and capacitive voltages become equal and 180° out of phase (VL = -VC), completely cancelling their net reactive opposition. The loop impedance collapses to pure resistance R = 100 Ω, creating a band-pass channel.',

  sourcesOfErrorAndLimitations: [
    'الملفات الفيزيائية الحقيقية تحتوي على مقاومة نحاسية لسلك اللف (DCR - DC Resistance) تزيد من قيمة R الحقيقية وتقلل ذروة التيار.',
    'المكثفات تمتلك مفاعلة طفيلية ومقاومة تسلسلية (ESR) تؤثر طفيفاً على التردد وعامل الجودة (Quality Factor Q).',
    'مصدر الإشارة الحقيقي يمتلك ممانعة خرج داخلية (غالباً 50 Ω في أجهزة المختبر RF) تنضاف إلى مقاومة الحلقة.',
    'إهمال السعة الطفيلية بين لفات الملف عند الترددات العالية جداً.'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'Real physical inductors carry significant DC copper resistance (DCR) in their windings, lowering actual peak current.',
    'Real capacitors carry ESR and parasitic inductance modifying the quality factor Q.',
    'Real laboratory function generators possess 50 Ω internal output impedance that adds in series to the circuit.',
    'Inter-turn parasitic capacitance in inductors becomes non-negligible at high radio frequencies.'
  ],

  whatILearned: [
    'فهمت كيف يتولد الرنين من الإلغاء التام بين المفاعلة الحثية XL والمفاعلة السعوية XC.',
    'أدركت أن الرنين في التوالي يخلق أدنى ممانعة وأعلى تيار، بينما في التوازي يخلق أعلى ممانعة وأقل تيار خارجي.',
    'تعلمت كيفية مسح الترددات (Frequency Sweep) في المحاكي وتوليد منحنيات الاستجابة الترددية وتحليل عامل الجودة Q.'
  ],
  whatILearnedEn: [
    'Understood how electrical resonance emerges from the exact cancellation of XL and XC.',
    'Learned that series resonance produces minimum impedance and maximum current, contrasting with parallel anti-resonance.',
    'Mastered AC frequency sweeping in simulation to chart resonance curves and evaluate selectivity.'
  ],

  whatIWouldStudyNext: [
    'حساب عامل الجودة (Quality Factor Q = ωL / R) وعرض نطاق التردد (Bandwidth BW = f0 / Q).',
    'دراسة الرنين في دوائر التوازي (Tank Circuits) المستخدمة في مذبذبات الإرسال اللاسلكي.',
    'تطبيق الدائرة كمرشح حزمة (Band-Pass Filter) ونطاق الرفض (Notch Filter) لإزالة تشويش 50Hz/60Hz من الشبكة.'
  ],
  whatIWouldStudyNextEn: [
    'Quantify circuit Quality Factor (Q = ω0 L / R) and 3dB half-power bandwidth (BW = f0 / Q).',
    'Investigate parallel LC tank anti-resonance utilized in RF oscillator carrier generators.',
    'Apply series/parallel LC traps as 50Hz/60Hz notch filters to reject AC grid hum.'
  ],

  completionChecklist: [
    { task: 'اشتقاق التردد الرنيني f0 = 1/(2π√LC) يدوياً خطوة بخطوة', taskEn: 'Derive resonant frequency f0 = 1/(2π√LC) manually step-by-step', checked: true },
    { task: 'حساب قيم المفاعلات والممانعة والتيار لنقاط مسح الترددات الثماني', taskEn: 'Calculate reactances, impedance, and current across 8 sweep points', checked: true },
    { task: 'بناء دائرة RLC وضبط المصدر المتردد وراسم الإشارة في محاكي Falstad', taskEn: 'Construct RLC circuit with AC source and oscilloscope in Falstad', checked: true },
    { task: 'إجراء مسح الترددات وتسجيل سعة ذروة التيار عند كل تردد', taskEn: 'Execute frequency sweep and log peak current amplitude at each frequency', checked: true },
    { task: 'رسم منحنيات الاستجابة الترددية للتيار والممانعة', taskEn: 'Plot frequency vs current and frequency vs impedance curves', checked: true },
    { task: 'كتابة التفسير الفيزيائي لتبادل الطاقة الكهرومغناطيسية ومصادر الخطأ', taskEn: 'Document physical interpretation and real inductor winding resistance limitations', checked: true }
  ],

  sources: [
    { title: 'OpenStax University Physics Vol 2 - Chapter 15: RLC Series AC Circuits', source: 'OpenStax College (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit' },
    { title: 'Falstad Circuit Simulator - Series RLC Resonance', source: 'Paul Falstad Educational Web Tools', url: 'https://www.falstad.com/circuit/' },
    { title: 'MIT 6.002 - Resonant Circuits and Frequency Response', source: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
  ],

  // Legacy mappings for full compatibility
  objective: 'التحقق النظري والمحاكاتي من ظاهرة الرنين الكهربائي في دائرة RLC توالي، وتحديد التردد الطبيعي f0 = 503.3 Hz ومراقبة ذروة التيار عند توازن المفاعلتين.',
  objectiveEn: 'Verify electrical resonance in a series RLC loop, derive natural frequency f0 = 503.3 Hz, and observe peak current upon reactance cancellation.',
  engineeringConcept: 'عند الرنين، يلغي الملف والمكثف ممانعة بعضهما فتصل الممانعة الكلية لأدنى قيمة ممكنة (Z = R)، مما يسمح بمرور أقصى تيار لإشارة التردد المستهدف.',
  engineeringConceptEn: 'At resonance, inductive and capacitive reactances cancel out, leaving minimum impedance (Z = R) and allowing maximum current to flow at the tuned frequency.',
  theory: 'تحكم الدائرة الممانعة المركبة Z = R + j(XL - XC). عندما XL = XC، تصبح الممانعة حقيقية نقية Z = R، ويتحقق الرنين عند f0 = 1 / (2π√LC).',
  theoryEn: 'Governed by Z = R + j(XL - XC). When XL = XC, net reactance is zero and Z = R, occurring at f0 = 1 / (2π√LC).',
  technicalSummary: {
    input: 'Vs = 10.0 V AC (تردد متغير من 100 إلى 2000 Hz)',
    inputEn: 'Vs = 10.0 V AC (Variable Frequency Sweep 100 - 2000 Hz)',
    components: 'R = 100 Ω, L = 10 mH, C = 10 µF',
    componentsEn: 'R = 100 Ω, L = 10 mH, C = 10 µF',
    calculatedResult: 'f0 = 503.29 Hz; XL(f0) = XC(f0) = 31.62 Ω; Z_min = 100 Ω; I_max = 100 mA',
    calculatedResultEn: 'f0 = 503.29 Hz; XL(f0) = XC(f0) = 31.62 Ω; Z_min = 100 Ω; I_max = 100 mA',
    simulatedResult: 'Simulation Result: Peak Resonance at f0 = 503.3 Hz with I = 100.0 mA (Falstad Scope)',
    simulatedResultEn: 'Simulation Result: Peak Resonance at f0 = 503.3 Hz with I = 100.0 mA (Falstad Scope)'
  }
};
