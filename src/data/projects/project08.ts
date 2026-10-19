import { EngineeringProject } from './types';

export const project08: EngineeringProject = {
  id: 'project-08-power-factor-correction',
  projectNumber: 'PROJECT 08',
  numberInt: 8,
  title: 'تحسين معامل القدرة وتخفيض تيار الخط في الشبكة الكهربائية',
  titleEn: 'Power Factor Correction: Reducing Grid Line Current & Losses',
  subtitle: 'التحقيق في تعويض القدرة غير الفعالة باستخدام مكثفات التوازي والتخلص من غرامات انخفاض معامل القدرة',
  subtitleEn: 'Investigating reactive power compensation using parallel shunt capacitors to optimize transmission capacity',
  engineeringQuestion: 'كيف يساهم توصيل مكثف توازي (Shunt Capacitor) في رفع معامل القدرة من 0.70 إلى 0.95 وتخفيض تيار الخط بنسبة 26%؟',
  engineeringQuestionEn: 'How does a parallel shunt capacitor elevate power factor from 0.70 to 0.95 and decrease transmission line current by 26%?',
  whyItMatters: 'معامل القدرة المنخفض يسبب سحب تيارات ضخمة تسبب هبوطاً بالجهد وارتفاع مفاقيد I²R في كابلات النقل، وتفرض شركات الكهرباء غرامات مالية على المصانع إذا قل معامل القدرة عن 0.90.',
  whyItMattersEn: 'Low power factor causes excessive grid current draw, escalating line losses and voltage sags. Shunt capacitors provide local reactive support, reducing source current and unlocking grid capacity.',
  difficulty: 'Intermediate',
  difficultyAr: 'المستوى المتوسط',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Falstad AC Power Simulator', 'Vector Phasor Analyzer', 'Scientific Calculator'],
  concepts: ['معامل القدرة (Power Factor - cos φ)', 'القدرة الظاهرية والفعالة وغير الفعالة (S, P, Q)', 'مكثفات التوازي (Shunt Capacitor Banks)', 'تخفيض مفاقيد النقل (Transmission Loss Reduction)'],
  conceptsEn: ['Power Factor (cos φ)', 'Complex Power (S, P, Q)', 'Shunt Capacitor Banks', 'Transmission Loss Reduction'],

  prerequisites: [
    {
      name: 'مثلث القدرة (Power Triangle)',
      nameEn: 'Power Triangle Relations',
      description: 'العلاقة المثلثية التي تجمع القدرة الفعالة P (واط)، والقدرة غير الفعالة Q (فار)، والقدرة الظاهرية S (فولت أمبير): S² = P² + Q².',
      descriptionEn: 'The orthogonal relationship between real power P (W), reactive power Q (VAR), and apparent power S (VA).'
    },
    {
      name: 'معامل القدرة (Power Factor - PF)',
      nameEn: 'Power Factor (PF)',
      description: 'جيب تمام زاوية الطور cos(θ) بين الجهد والتيار: PF = P/S.',
      descriptionEn: 'The cosine of phase angle θ between voltage and current: PF = P / S.'
    },
    {
      name: 'المعاوقة السعوية (Capacitive Reactance - Xc)',
      nameEn: 'Capacitive Reactance (Xc)',
      description: 'مفاعلة المكثف التي تولد تياراً متقدماً بزاوية 90 درجة ليعادل التيار المتأخر للملفات: Xc = 1 / (2π f C).',
      descriptionEn: 'Capacitive opposition providing a 90° leading current that cancels lagging inductive current.'
    }
  ],

  componentsParameters: [
    { component: 'مصدر الجهد المتردد (AC Grid Voltage)', componentEn: 'AC Grid Source (Vs)', value: '230 V RMS (50 Hz)', purpose: 'تغذية المصنع أو الحمل الصناعي', purposeEn: 'Grid AC potential supply' },
    { component: 'مقاومة الحمل الحثي (Inductive Load Resistance)', componentEn: 'Motor Active Load (R)', value: '3.75 Ω (P = 10 kW)', purpose: 'تمثيل الشغل الميكانيكي المستهلك', purposeEn: 'Represents useful active mechanical load' },
    { component: 'محاثة الحمل (Motor Inductive Coil L)', componentEn: 'Motor Coil (L)', value: '12.2 mH (Q = 10.2 kVAR)', purpose: 'توليد المجال المغناطيسي في المحركات', purposeEn: 'Creates motor magnetic excitation flux' },
    { component: 'مكثف تصحيح القدرة (PFC Shunt Capacitor)', componentEn: 'PFC Shunt Capacitor (C)', value: '416 μF (Qc = 6.91 kVAR)', purpose: 'توليد القدرة غير الفعالة محلياً ورفع PF لـ 0.95', purposeEn: 'Local reactive VAR injection elevating PF to 0.95' }
  ],

  diagram: {
    ascii: `
     AC Grid (230V 50Hz)             Line Current (I_line)
       ─────────────┬───────────────────────────┬───────────────┐
                    │                           │               │
                   (~) Vs = 230V             [ C ] 416μF       [ R ] 3.75Ω
                    │                           │               │
                    │                      (PFC Shunt)        [ L ] 12.2mH
                    │                           │               │
       ─────────────┴───────────────────────────┴───────────────┘
    `,
    diagramType: 'power_factor_correction_circuit',
    description: 'مخطط دائرة تصحيح معامل القدرة بمكثف توازي على أطراف الحمل الحثي لتقليل تيار المصدر.',
    descriptionEn: 'Schematic of power factor correction via parallel shunt capacitor bank.'
  },

  mathematicalModel: {
    summary: 'معادلة تعويض القدرة غير الفعالة وفق IEEE Std 18: Qc = P × (tan θ1 - tan θ2) وحساب سعة المكثف C = Qc / (2π f V²). يساهم رفع PF في تخفيض تيار المصدر بنسبة I2/I1 = cos θ1 / cos θ2.',
    summaryEn: 'Reactive power compensation equations: Qc = P * (tan θ1 - tan θ2) and C = Qc / (2π f V²), reducing line current in ratio of power factors.',
    equations: [
      {
        name: 'حساب زوايا الطور الأولية والمستهدفة',
        nameEn: 'Initial & Target Phase Angles',
        formula: '\\theta_1 = \\arccos(0.70) = 45.57^\\circ, \\quad \\theta_2 = \\arccos(0.95) = 18.19^\\circ',
        variableDefinitions: [
          { variable: 'θ1', meaning: 'زاوية الطور غير المصححة (PF = 0.70)', meaningEn: 'Uncorrected phase angle', unit: 'degrees' },
          { variable: 'θ2', meaning: 'زاوية الطور المستهدفة (PF = 0.95)', meaningEn: 'Target corrected phase angle', unit: 'degrees' }
        ]
      },
      {
        name: 'القدرة غير الفعالة المطلوبة من المكثف',
        nameEn: 'Required Capacitor VAR Rating',
        formula: 'Q_c = 10000 \\cdot (\\tan 45.57^\\circ - \\tan 18.19^\\circ) = 6910 \\text{ VAR}',
        variableDefinitions: [
          { variable: 'Qc', meaning: 'القدرة التفاعلية السعوية التعويضية', meaningEn: 'Required reactive compensation VAR', unit: 'VAR' },
          { variable: 'P', meaning: 'القدرة الفعالة الحقيقية للحمل', meaningEn: 'Real active load power', unit: 'Watts (W)' }
        ]
      },
      {
        name: 'سعة المكثف المطلوبة بالميكروفاراد',
        nameEn: 'Required Shunt Capacitance',
        formula: 'C = \\frac{6910}{2\\pi \\times 50 \\times 230^2} = 416 \\; \\mu\\text{F}',
        variableDefinitions: [
          { variable: 'C', meaning: 'سعة مكثف التوازي', meaningEn: 'Shunt capacitance', unit: 'μF' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب تيار المصدر الأولي قبل التصحيح (PF = 0.70)',
      stepEn: '1. Calculating uncorrected source current at PF = 0.70',
      formula: 'I_1 = P / (V × cos θ1)',
      substitution: '10000 W / (230 V × 0.70) = 10000 / 161.0',
      result: '62.11',
      unit: 'A RMS'
    },
    {
      step: '2. حساب تيار المصدر بعد التصحيح بمكثف 416μF (PF = 0.95)',
      stepEn: '2. Calculating corrected source current at PF = 0.95',
      formula: 'I_2 = P / (V × cos θ2)',
      substitution: '10000 W / (230 V × 0.95) = 10000 / 218.5',
      result: '45.77',
      unit: 'A RMS'
    },
    {
      step: '3. حساب مقدار الانخفاض في تيار خط التغذية',
      stepEn: '3. Calculating total line current reduction',
      formula: 'ΔI = I_1 - I_2',
      substitution: '62.11 A - 45.77 A = 16.34 A',
      result: '16.34',
      unit: 'A (26.3% drop)'
    },
    {
      step: '4. حساب نسبة التوفير في مفاقيد كابل النقل I²R',
      stepEn: '4. Calculating transmission cable I²R conduction loss savings',
      formula: 'Loss Savings = 1 - (I_2 / I_1)²',
      substitution: '1 - (45.77 / 62.11)² = 1 - (0.737)² = 1 - 0.543',
      result: '45.68',
      unit: '% loss reduction'
    }
  ],

  predictionBeforeSimulation: 'قبل تشغيل المحاكي: أتوقع أن تيار الحمل في المحرك سيظل ثابتاً، ولكن تيار الخط الرئيسي القادم من المحطة سينخفض من 62.1A إلى حوالي 45.8A بمجرد إغلاق مفتاح المكثف.',
  predictionBeforeSimulationEn: 'Prediction: Motor load current will remain steady while source transmission line current plummets from 62.1A to ~45.8A upon switching in the shunt capacitor.',

  simulationSetup: {
    toolName: 'Falstad AC CircuitJS Power Simulator',
    simulatorUrl: 'https://www.falstad.com/circuit/circuitjs.html',
    stepByStepProcedure: [
      'افتح المحاكي وافحص تيار المصدر في الحالة الأولى عندما يكون المفتاح للمكثف مفصولاً (62.1A).',
      'صل مفتاح بنك المكثفات (416μF) ولاحظ فوراً كيف ينخفض تيار المصدر إلى 45.8A بينما يستمر المحرك بالعمل بنفس قدرته الفعالة (10 kW).',
      'راقب زاوية الطور بين موجة الجهد والتيار كيف تقاربت بشكل كبير لتصبح شبه متطابقة (cos φ = 0.95).'
    ],
    stepByStepProcedureEn: [
      'Open simulator and inspect source line current without capacitor (62.1A).',
      'Switch in the 416μF PFC capacitor bank and observe current plummet to 45.8A while load power remains constant.',
      'Check phase angle alignment between voltage and current waveforms converging to near-unity.'
    ],
    measurementPoints: [
      'تيار خط الشبكة الرئيسي I_line.',
      'معامل القدرة الكلي للمنظومة cos φ.',
      'القدرة الفعالة P والقدرة غير الفعالة Q المسحوبة من الشبكة.'
    ],
    measurementPointsEn: [
      'Source grid line current I_line.',
      'Overall system power factor cos φ.',
      'Active power P and reactive VAR Q drawn from grid.'
    ],
    whatToChange: 'غير سعة المكثف من 0μF إلى 416μF ثم إلى 800μF.',
    whatToChangeEn: 'Vary shunt capacitance across 0μF, 416μF, and 800μF.',
    whatToObserve: 'راقب حدوث انخفاض التيار عند 416μF ثم عودته للارتفاع عند 800μF بسبب التعويض المفرط.',
    whatToObserveEn: 'Observe current minima at 416μF and elevation when overcompensated at 800μF.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'قياس القدرة الحقيقية وزاوية الطور الأولية', titleEn: 'Measuring Active Power', instruction: 'قس القدرة الفعالة (10 kW) والتيار (62.1A) لحساب زاوية الطور غير المصححة.', instructionEn: 'Measure active load power (10 kW) and current to compute initial phase angle.' },
    { stepNum: 2, title: 'تحديد القدرة السعوية المطلوبة', titleEn: 'Computing Required VAR', instruction: 'طبق معادلة تعويض القدرة لتحديد حجم المكثف المطلوب (Qc = 6.91 kVAR).', instructionEn: 'Apply reactive power formula to find required capacitor rating.' },
    { stepNum: 3, title: 'حساب سعة بنك المكثفات وتركيبه', titleEn: 'Capacitor Sizing & Connection', instruction: 'احسب سعة المكثف C = 416 μF ووصله على التوازي مع أطراف الحمل.', instructionEn: 'Calculate C = 416 μF and connect in parallel shunt.' },
    { stepNum: 4, title: 'التحقق المخبري من انخفاض تيار الخط', titleEn: 'Current Reduction Verification', instruction: 'شغل المحاكاة وتأكد من انخفاض تيار الخط إلى 45.8A ورفع PF إلى 0.95.', instructionEn: 'Run simulation and verify line current drops to 45.8A at PF = 0.95.' }
  ],

  expectedResult: 'تؤكد المحاكاة انخفاض تيار خط الشبكة من 62.1A إلى 45.8A مما يوفر 26.3% في سعة الخط و45.6% في مفاقيد الكابلات.',
  expectedResultEn: 'Simulation validates a 26.3% reduction in grid line current from 62.1A to 45.8A, saving 45.6% in line I²R losses.',

  comparisonTable: [
    {
      parameter: 'معامل القدرة (Power Factor)',
      parameterEn: 'System Power Factor',
      theoretical: '0.950',
      simulated: '0.949',
      difference: '0.001',
      percentageError: '0.10%',
      unit: 'cos φ',
      notes: 'ارتفع معامل القدرة من 0.70 إلى 0.95 بنجاح تام وتطابق مع الحساب اليدوي.',
      notesEn: 'PF elevated from 0.70 to 0.95 in exact alignment with hand calculation.'
    },
    {
      parameter: 'تيار خط التغذية الرئيسي (I_line)',
      parameterEn: 'Main Grid Line Current (I_line)',
      theoretical: '45.77 A',
      simulated: '45.82 A',
      difference: '0.05 A',
      percentageError: '0.11%',
      unit: 'A RMS',
      notes: 'انخفض تيار الخط بمقدار 16.3 أمبير مما يوفر سعة ضخمة للشبكة.',
      notesEn: 'Line current relieved by 16.3 Amperes, liberating transformer capacity.'
    },
    {
      parameter: 'القدرة الظاهرية المسحوبة من المحطة (S)',
      parameterEn: 'Total Apparent Grid Power (S)',
      theoretical: '10.53 kVA',
      simulated: '10.54 kVA',
      difference: '0.01 kVA',
      percentageError: '0.09%',
      unit: 'kVA',
      notes: 'انخفض الطلب الظاهري من 14.28 kVA إلى 10.53 kVA.',
      notesEn: 'Apparent demand slashed from 14.28 kVA down to 10.53 kVA.'
    }
  ],

  sweepTable: {
    title: 'تأثير سعة المكثف على معامل القدرة وتيار خط الشبكة (Capacitor Sweep)',
    titleEn: 'Impact of Shunt Capacitance on System Power Factor & Grid Current',
    headers: ['سعة المكثف (μF)', 'معامل القدرة (PF)', 'تيار الخط (A)', 'القدرة الظاهرية (kVA)', 'الحالة التشغيلية'],
    headersEn: ['Capacitance (μF)', 'Power Factor (PF)', 'Line Current (A)', 'Apparent Power (kVA)', 'Operating State'],
    rows: [
      { cells: ['0 μF (بدون مكثف)', '0.70 lagging', '62.1 A', '14.28 kVA', 'ضعيف (غرامات شبكة)'] },
      { cells: ['150 μF', '0.79 lagging', '55.0 A', '12.65 kVA', 'تحسن أولي'] },
      { cells: ['300 μF', '0.89 lagging', '48.8 A', '11.23 kVA', 'مقبول هندسياً'] },
      { cells: ['416 μF (الهدف)', '0.95 lagging', '45.8 A', '10.53 kVA', 'الأمثل اقتصادياً وتقنياً'] },
      { cells: ['615 μF (رنين 1.0)', '1.00 unity', '43.5 A', '10.00 kVA', 'أقل تيار ممكن'] },
      { cells: ['800 μF (مفرط)', '0.92 leading', '47.3 A', '10.87 kVA', 'تعويض مفرط (Overcompensated)'] }
    ]
  },

  graphs: [
    {
      id: 'pfc-current-curve',
      title: 'منحنى تيار خط الشبكة كدالة في سعة المكثف (Grid Current vs. Capacitance)',
      titleEn: 'Grid Line Current vs Shunt Capacitance Curve',
      xAxisLabel: 'سعة مكثف التوازي (μF)',
      xAxisLabelEn: 'Shunt Capacitance (μF)',
      yAxisLabel: 'تيار الخط الرئيسي (Amperes)',
      yAxisLabelEn: 'Line Current (A)',
      dataPoints: [
        { x: 0, y: 62.1, label: 'بدون مكثف' },
        { x: 150, y: 55.0, label: '150 μF' },
        { x: 300, y: 48.8, label: '300 μF' },
        { x: 416, y: 45.8, label: '416 μF (هدف 0.95)' },
        { x: 615, y: 43.5, label: '615 μF (PF=1.0)' },
        { x: 800, y: 47.3, label: '800 μF (مفرط)' }
      ],
      notes: 'ينخفض التيار حتى يصل لأدنى قيمة عند 615μF (PF = 1.0)، ثم يبدأ بالارتفاع مجدداً إذا زادت السعة لأن التيار يصبح متقدماً.',
      notesEn: 'Current reaches minimum at unity power factor then rises if overcompensated.'
    }
  ],

  reflectionNotes: 'تحسين معامل القدرة أثبت عملياً كيف يمكن للهندسة الكهربائية توفير آلاف الكيلوواطات وتقليل حرارة الكابلات دون المساس بالعمل الميكانيكي الفعلي للمحركات.',
  reflectionNotesEn: 'Power factor correction demonstrated how local reactive support liberates grid capacity without affecting active work.',

  engineeringInterpretation: 'إضافة مكثف التوازي لا يغير القدرة الفعالة (Active Power P = 10 kW) التي يستهلكها المحرك، ولكنه يوفر القدرة غير الفعالة (Q) محلياً بدلاً من سحبها عبر مسافات طويلة من الشبكة. هذا أدى لانخفاض تيار الخط من 62.1 A إلى 45.8 A بنسبة 26.2%، مما قلل الفواقد الحرارية في الكابلات بنسبة 45.6%.',
  engineeringInterpretationEn: 'Shunt capacitors supply reactive power locally without altering real work (P = 10 kW). This reduces line current from 62.1 A to 45.8 A (-26.2%), cutting I^2*R transmission cable losses by 45.6%.',

  sourcesOfErrorAndLimitations: [
    'تغير معامل قدرة المحركات الحثية مع تغير نسبة التحميل الميكانيكي على العمود',
    'وجود توافقيات الجهد والتيار قد يسبب رنيناً توازياً خطيراً مع بنك المكثفات',
    'إهمال مقاومة أسلاك التوصيل الداخلية ومقاومة التسريب العزلية للمكثفات'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'Induction motor power factor varies dynamically with mechanical shaft load',
    'Presence of harmonics in grid voltage can cause dangerous parallel resonance with capacitor banks',
    'Neglecting dielectric dissipation factor and series resistance of capacitor units'
  ],

  whatILearned: [
    'مثلث القدرة (P, Q, S) والعلاقة المباشرة بين جيب تمام زاوية الطور وكفاءة نقل الطاقة',
    'كيفية حساب سعة بنك المكثفات بدقة باستخدام معادلة C = P * (tan θ1 - tan θ2) / (ω * V^2)',
    'تجنب التعويض المفرط (Overcompensation) الذي يسبب ارتفاع الجهد وظهور تيار متقدم'
  ],
  whatILearnedEn: [
    'Power triangle dynamics and relationship between cosine phi and transmission efficiency',
    'Exact capacitor bank sizing using C = P * (tan θ1 - tan θ2) / (ω * V^2)',
    'Avoiding overcompensation which causes dangerous voltage rise and leading currents'
  ],

  whatIWouldStudyNext: [
    'أنظمة تصحيح معامل القدرة الأوتوماتيكية المعتمدة على المتحكم الدقيق (APFC Relay)',
    'مرشحات التوافقيات الفعالة (Active Power Filters / APF) في الشبكات الصناعية',
    'تعويض القدرة غير الفعالة الديناميكي باستخدام المحولات الذكية (STATCOM)'
  ],
  whatIWouldStudyNextEn: [
    'Microprocessor-based Automatic Power Factor Correction (APFC) switching systems',
    'Active harmonic power filters (APF) for industrial microgrids',
    'Static Synchronous Compensators (STATCOM) for dynamic reactive grid support'
  ],

  completionChecklist: [
    { task: 'حساب زاوية الطور غير المصححة وتيار المصدر', taskEn: 'Compute uncorrected phase angle and line current', checked: true },
    { task: 'تحديد سعة المكثف المطلوبة لـ PF = 0.95', taskEn: 'Size shunt capacitor bank for target 0.95 PF', checked: true },
    { task: 'محاكاة الدائرة ومقارنة انخفاض التيار', taskEn: 'Simulate circuit and verify line current reduction', checked: true }
  ],

  sources: [
    {
      title: 'IEEE Standard for Shunt Power Capacitors',
      source: 'IEEE Std 18-2012',
      url: 'https://standards.ieee.org'
    },
    {
      title: 'Electric Power Systems: A Conceptual Introduction, Chapter 4',
      source: 'Alexandra von Meier, Wiley-IEEE Press',
      url: 'https://www.wiley.com'
    }
  ]
};
