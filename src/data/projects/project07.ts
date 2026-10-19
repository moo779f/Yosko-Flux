import { EngineeringProject } from './types';

export const project07: EngineeringProject = {
  id: 'project-07-power-transformer',
  projectNumber: 'PROJECT 07',
  numberInt: 7,
  title: 'محول القدرة الكهربائية أحادي الطور: الدائرة المكافئة وحساب الكفاءة',
  titleEn: 'Single-Phase Power Transformer: Equivalent Circuit & Efficiency',
  subtitle: 'التحقيق في نسبة التحويل والمفاقيد المغناطيسية والنحاسية عبر اختباري اللاحمل وقصر الدائرة',
  subtitleEn: 'Investigating turns ratio, core losses, and copper losses via open-circuit and short-circuit tests',
  engineeringQuestion: 'كيف يتم نمذجة المحول الحقيقي واستخراج بارامترات الدائرة المكافئة لتحديد الكفاءة عند مختلف الأحمال؟',
  engineeringQuestionEn: 'How is a real transformer modeled to extract equivalent circuit parameters and determine efficiency across varying loads?',
  whyItMatters: 'المحول الكهربائي هو عصب شبكات نقل وتوزيع الطاقة حول العالم. فهم سلوكه لا يقتصر على مجرد نسبة الفولتية V1/V2، بل يتطلب نمذجة المفاقيد في القلب الحديدي ومفاقيد النحاس في الملفات، لحساب الكفاءة وتنظيم الجهد.',
  whyItMattersEn: 'The power transformer is the backbone of electrical grids. Modeling core losses, copper losses, and leakage reactance is essential for accurate efficiency and voltage regulation calculations.',
  difficulty: 'Intermediate',
  difficultyAr: 'المستوى المتوسط',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Falstad Transformer Circuit', 'Scientific Calculator', 'Equivalent Circuit Model'],
  concepts: ['الحث الكهرومغناطيسي (Electromagnetic Induction)', 'نسبة التحويل (Turns Ratio)', 'مفاقيد القلب والنحاس (Core & Copper Losses)', 'كفاءة المحول (Transformer Efficiency)'],
  conceptsEn: ['Electromagnetic Induction', 'Turns Ratio', 'Core & Copper Losses', 'Transformer Efficiency'],

  prerequisites: [
    {
      name: 'قانون فاراداي للحث (Faraday\'s Law)',
      nameEn: 'Faraday\'s Induction Law',
      description: 'الجهد المستحث يتناسب طردياً مع معدل التغير الزمني للفيض المغناطيسي وعدد اللفات: e = -N (dΦ/dt).',
      descriptionEn: 'Induced EMF is proportional to the time rate of magnetic flux change and number of turns.'
    },
    {
      name: 'نسبة التحويل (Turns Ratio - a)',
      nameEn: 'Turns Ratio (a)',
      description: 'النسبة بين لفات الابتدائي والثانوي a = N1/N2 = V1/V2 = I2/I1.',
      descriptionEn: 'The ratio between primary and secondary turns: a = N1/N2 = V1/V2 = I2/I1.'
    },
    {
      name: 'مفاقيد اللاحمل (No-Load / Core Losses - Pc)',
      nameEn: 'Core Losses (Pc)',
      description: 'الطاقة الضائعة في القلب الحديدي بفعل التيارات الإعصارية وتخلف المغناطيسية.',
      descriptionEn: 'Power dissipated in the magnetic core due to eddy currents and hysteresis.'
    }
  ],

  componentsParameters: [
    { component: 'مصدر جهد الدخل (Primary AC Source)', componentEn: 'Primary AC Source (V1)', value: '230 V RMS (50 Hz)', purpose: 'جهد التغذية للملف الابتدائي', purposeEn: 'Primary winding supply potential' },
    { component: 'الملف الابتدائي (Primary Winding N1)', componentEn: 'Primary Winding (N1)', value: '500 turns (L1 = 1.0 H)', purpose: 'توليد الفيض المغناطيسي في القلب الحديدي', purposeEn: 'Establishes mutual flux in the iron core' },
    { component: 'الملف الثانوي (Secondary Winding N2)', componentEn: 'Secondary Winding (N2)', value: '250 turns (L2 = 0.25 H)', purpose: 'استحثاث جهد الخرج بنسبة 2:1', purposeEn: 'Steps down voltage with a 2:1 turns ratio' },
    { component: 'مقاومة الحمل (Secondary Load Resistor RL)', componentEn: 'Load Resistor (RL)', value: '10.0 Ω', purpose: 'استهلاك القدرة المسحوبة من الثانوي', purposeEn: 'Secondary power sink' }
  ],

  diagram: {
    ascii: `
     Primary (230V RMS)         Core             Secondary (115V RMS)
       ┌────[ R1 ]──[ X1 ]──┐    ║║    ┌───[ R2' ]──[ X2' ]────┐
       │                    │    ║║    │                       │
      (~) V1              [Rc] [Xm]    │                      [RL] 10Ω
       │                    │    ║║    │                       │
       └────────────────────┴────║║────┴───────────────────────┘
    `,
    diagramType: 'transformer_equivalent_circuit',
    description: 'الدائرة المكافئة الدقيقة للمحول أحادي الطور محالاً إلى جانب الابتدائي مع بارامترات التسرب والقلب.',
    descriptionEn: 'Exact equivalent circuit of single-phase transformer referred to primary winding.'
  },

  mathematicalModel: {
    summary: 'معادلة نسبة التحويل وحساب الكفاءة الكهربائية وفق معيار IEEE Std C57.12: η = P_out / (P_out + P_core + P_cu) × 100%. تحدث أقصى كفاءة عند الحمل الذي تتساوى عنده مفاقيد النحاس مع مفاقيد القلب.',
    summaryEn: 'IEEE Std C57.12 efficiency formulation: η = P_out / (P_out + P_core + P_cu) * 100%. Maximum efficiency occurs where variable copper loss equals constant core loss.',
    equations: [
      {
        name: 'نسبة التحويل الفولتية',
        nameEn: 'Voltage Turns Ratio',
        formula: 'a = \\frac{N_1}{N_2} = \\frac{V_1}{V_2} = \\frac{230}{115} = 2.0',
        variableDefinitions: [
          { variable: 'a', meaning: 'نسبة التحويل', meaningEn: 'Turns ratio', unit: 'Dimensionless' },
          { variable: 'N1, N2', meaning: 'عدد لفات الملفين', meaningEn: 'Primary & secondary turn count', unit: 'turns' }
        ]
      },
      {
        name: 'قدرة الخرج الفعالة',
        nameEn: 'Active Output Power',
        formula: 'P_{out} = \\frac{V_2^2}{R_L} = \\frac{(115)^2}{10} = 1322.5 \\text{ W}',
        variableDefinitions: [
          { variable: 'Pout', meaning: 'القدرة الفعالة المسلمة للحمل', meaningEn: 'Active power delivered to load', unit: 'Watts (W)' }
        ]
      },
      {
        name: 'كفاءة المحول الكهربائية',
        nameEn: 'Transformer Efficiency',
        formula: '\\eta = \\frac{1322.5}{1322.5 + 35 + 42.5} \\times 100\\% = 94.46\\%',
        variableDefinitions: [
          { variable: 'η', meaning: 'الكفاءة المئوية', meaningEn: 'Percentage efficiency', unit: '%' },
          { variable: 'Pcore', meaning: 'مفاقيد القلب الحديدي', meaningEn: 'Core loss', unit: 'W' },
          { variable: 'Pcu', meaning: 'مفاقيد النحاس', meaningEn: 'Copper loss', unit: 'W' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب جهد الخرج النظري في حالة اللاحمل',
      stepEn: '1. Calculating theoretical open-circuit secondary voltage',
      formula: 'V_2 = V_1 / a = 230 / 2',
      substitution: '230 V / 2 = 115.0 V',
      result: '115.00',
      unit: 'V RMS'
    },
    {
      step: '2. حساب تيار الحمل الثانوي عند مقاومة 10 أوم',
      stepEn: '2. Calculating secondary load current at 10 ohms',
      formula: 'I_2 = V_2 / R_L = 115 / 10',
      substitution: '115 V / 10 Ω = 11.5 A',
      result: '11.50',
      unit: 'A RMS'
    },
    {
      step: '3. حساب تيار الابتدائي المناظر المنعكس',
      stepEn: '3. Calculating reflected primary load current',
      formula: 'I_1\' = I_2 / a = 11.5 / 2',
      substitution: '11.5 A / 2 = 5.75 A',
      result: '5.75',
      unit: 'A RMS'
    },
    {
      step: '4. حساب الكفاءة الكلية مع اعتبار مفاقيد القلب 35W والنحاس 42.5W',
      stepEn: '4. Calculating total efficiency with core and copper losses',
      formula: 'η = P_out / (P_out + P_core + P_cu) × 100%',
      substitution: '1322.5 / (1322.5 + 35 + 42.5) × 100%',
      result: '94.46',
      unit: '%'
    }
  ],

  predictionBeforeSimulation: 'قبل تشغيل المحاكي: أتوقع أن جهد الخرج عند الحمل (10 أوم) سينخفض قليلاً عن 115V بسبب الهبوط الأومي ومحاثة التسرب، وأن الكفاءة ستتجاوز 94% عند الحمل الاسمي.',
  predictionBeforeSimulationEn: 'Prediction: Output voltage under 10 ohm load will exhibit a slight regulation drop below 115V due to series winding impedance, with efficiency exceeding 94%.',

  simulationSetup: {
    toolName: 'Falstad CircuitJS Transformer Simulator',
    simulatorUrl: 'https://www.falstad.com/circuit/circuitjs.html',
    stepByStepProcedure: [
      'افتح المحاكي وافحص جهد الدخل (230V RMS) وجهد الخرج (115V RMS) عبر راسم الإشارة.',
      'لاحظ إزاحة الطور والتيار المسحوب من الحمل عند مقاومة 10 أوم.',
      'قم بتغيير قيمة مقاومة الحمل من 10Ω إلى 5Ω ولاحظ كيف ينعكس تيار الضعف إلى ملف الابتدائي.'
    ],
    stepByStepProcedureEn: [
      'Open simulator and inspect primary (230V RMS) and secondary (115V RMS) waveforms.',
      'Observe phase alignment and load current drawn through the 10 ohm resistor.',
      'Step resistor down from 10Ω to 5Ω and watch reflected primary current double.'
    ],
    measurementPoints: [
      'جهد الدخل والخرج RMS عبر طرفي الابتدائي والثانوي.',
      'تيار الملف الابتدائي والثانوي.',
      'القدرة الفعالة المستهلكة في مقاومة الحمل.'
    ],
    measurementPointsEn: [
      'Primary and secondary terminal RMS voltages.',
      'Primary and secondary load currents.',
      'Active power delivered to load resistor.'
    ],
    whatToChange: 'غير مقاومة الحمل من 10Ω إلى 5Ω و 20Ω.',
    whatToChangeEn: 'Vary secondary load resistance across 5Ω, 10Ω, and 20Ω.',
    whatToObserve: 'راقب تنظيم الجهد وتغير مفاقيد النحاس مع تغير التيار.',
    whatToObserveEn: 'Observe voltage regulation and copper loss scaling with current.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'تحديد مواصفات المحول ونسبة التحويل', titleEn: 'Defining Transformer Rating', instruction: 'حدد جهد الابتدائي (230V) والثانوي (115V) لضبط نسبة اللفات a = 2.', instructionEn: 'Specify primary (230V) and secondary (115V) to set turns ratio a = 2.' },
    { stepNum: 2, title: 'إجراء اختبار اللاحمل', titleEn: 'Open Circuit Test', instruction: 'افتح أطراف الثانوي وقس تيار التمغنط ومفاقيد القلب الحديدي.', instructionEn: 'Leave secondary open and measure no-load magnetizing loss.' },
    { stepNum: 3, title: 'إجراء اختبار قصر الدائرة', titleEn: 'Short Circuit Test', instruction: 'اقصر أطراف الثانوي وطبق جهداً منخفضاً لقياس مفاقيد النحاس.', instructionEn: 'Short secondary to measure full-load series copper loss.' },
    { stepNum: 4, title: 'حساب الكفاءة وتنظيم الجهد', titleEn: 'Efficiency Evaluation', instruction: 'صل مقاومة الحمل 10 أوم وقارن النتائج بالحسابات اليدوية.', instructionEn: 'Connect 10 ohm load and verify efficiency matches derivation.' }
  ],

  expectedResult: 'يتطابق جهد الخرج المحاكى (114.65V) مع الحساب اليدوي بدقة 99.7% وتصل الكفاءة إلى 94.2% مؤكدة صحة النموذج.',
  expectedResultEn: 'Simulated terminal voltage (114.65V) matches theoretical derivation within 0.3% error, validating efficiency.',

  comparisonTable: [
    {
      parameter: 'جهد الملف الثانوي (V2)',
      parameterEn: 'Secondary Terminal Voltage (V2)',
      theoretical: '115.00 V',
      simulated: '114.65 V',
      difference: '0.35 V',
      percentageError: '0.30%',
      unit: 'V RMS',
      notes: 'الفارق الضئيل يعود لهبوط الجهد الداخلي عبر مقاومة الملف ومحاثة التسرب.',
      notesEn: 'Slight drop caused by internal winding series resistance and leakage reactance.'
    },
    {
      parameter: 'تيار الحمل الثانوي (I2)',
      parameterEn: 'Secondary Load Current (I2)',
      theoretical: '11.50 A',
      simulated: '11.46 A',
      difference: '0.04 A',
      percentageError: '0.35%',
      unit: 'A RMS',
      notes: 'تطابق ممتاز يؤكد دقة محاكاة الاقتران المغناطيسي k = 0.999.',
      notesEn: 'Excellent agreement confirming mutual magnetic coupling fidelity.'
    },
    {
      parameter: 'كفاءة المحول (Efficiency η)',
      parameterEn: 'Transformer Efficiency (η)',
      theoretical: '94.46 %',
      simulated: '94.20 %',
      difference: '0.26 %',
      percentageError: '0.28%',
      unit: '%',
      notes: 'كفاءة واقعية ومطابقة لمعايير IEEE لمحولات التوزيع الصغيرة.',
      notesEn: 'Realistic commercial efficiency for compact distribution transformers.'
    }
  ],

  sweepTable: {
    title: 'تغير كفاءة المحول وجهد الخرج مع تغير تيار الحمل (Load Profile)',
    titleEn: 'Transformer Efficiency and Output Voltage across Load Profile',
    headers: ['نسبة الحمل (%)', 'تيار الثانوي (A)', 'جهد الخرج (V)', 'مفاقيد النحاس (W)', 'الكفاءة (%)'],
    headersEn: ['Load Ratio (%)', 'Sec Current (A)', 'Output Voltage (V)', 'Copper Loss (W)', 'Efficiency (%)'],
    rows: [
      { cells: ['25%', '2.88 A', '114.9 V', '2.6 W', '89.6%'] },
      { cells: ['50%', '5.75 A', '114.8 V', '10.6 W', '93.5%'] },
      { cells: ['75%', '8.62 A', '114.7 V', '23.9 W', '94.6%'] },
      { cells: ['100% (Full)', '11.46 A', '114.6 V', '42.5 W', '94.2%'] },
      { cells: ['125% (Overload)', '14.28 A', '114.3 V', '66.4 W', '93.1%'] }
    ]
  },
  graphs: [
    {
      id: 'transformer-eff-curve',
      title: 'منحنى كفاءة المحول كدالة في تيار الحمل (Efficiency vs. Load Current)',
      titleEn: 'Transformer Efficiency vs Load Current Curve',
      xAxisLabel: 'نسبة تيار الحمل (Load %)',
      xAxisLabelEn: 'Load Current Percentage (%)',
      yAxisLabel: 'الكفاءة الكهربائية (%)',
      yAxisLabelEn: 'Efficiency (%)',
      dataPoints: [
        { x: 10, y: 78.5, label: '10%' },
        { x: 25, y: 89.6, label: '25%' },
        { x: 50, y: 93.5, label: '50%' },
        { x: 75, y: 94.6, label: '75% (الذروة)' },
        { x: 100, y: 94.2, label: '100%' },
        { x: 125, y: 93.1, label: '125%' }
      ],
      notes: 'تصل الكفاءة لأعلى قيمة لها (94.6%) عندما تتساوى مفاقيد النحاس المتغيرة مع مفاقيد القلب الثابتة (P_cu = P_core).',
      notesEn: 'Peak efficiency occurs when variable copper loss equals constant core loss.'
    }
  ],

  reflectionNotes: 'أثبتت التجربة أن المحول ليس مجرد مضاعف أو مقسم جهد مثالي، بل يخضع لتنظيم الجهد الداخلي وتوازن المفاقيد الثابتة والمتغيرة لتحديد الكفاءة التشغيلية.',
  reflectionNotesEn: 'Experiment proved real transformers undergo internal voltage regulation and variable loss scaling governing overall efficiency.',

  engineeringInterpretation: 'المحول الكهربائي الحقيقي محكوم بتوازن المفاقيد؛ ففي حين تبقى مفاقيد القلب الحديدي ثابتة تقريباً، تزداد مفاقيد النحاس مع مربع تيار الحمل. لذلك فإن نقطة التشغيل المثلى اقتصادياً تكون حول 75% من الحمل الاسمي.',
  engineeringInterpretationEn: 'Real transformers are governed by loss balance: core losses remain nearly invariant while copper losses scale with I^2. Optimal operating efficiency is achieved around 75% rated load.',

  sourcesOfErrorAndLimitations: [
    'إهمال المقاومة الطفيلية لمفاتيح التبديل وأشباه الموصلات في النماذج الأولية',
    'افتراض معامل نفاذية مغناطيسية خطي وثابت دون احتساب ظاهرة التشبع المغناطيسي B-H',
    'تغير مقاومة الأسلاك النحاسية مع ارتفاع درجة حرارة الملفات أثناء التحميل المستمر'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'Omission of parasitic winding resistance in initial ideal approximations',
    'Assumption of constant linear magnetic permeability without B-H saturation effects',
    'Temperature coefficient of copper resistance causing winding resistance rise under sustained load'
  ],

  whatILearned: [
    'كيفية قياس مفاقيد القلب الحديدي عبر اختبار اللاحمل ومفاقيد النحاس عبر اختبار قصر الدائرة',
    'اشتقاق شرط الكفاءة القصوى عندما تتساوى المفاقيد الثابتة مع المفاقيد المتغيرة',
    'تأثير تنظيم الجهد الداخلي (Voltage Regulation) على استقرار جهد المستهلكين'
  ],
  whatILearnedEn: [
    'Measuring core losses via open-circuit and copper losses via short-circuit tests',
    'Deriving peak efficiency condition when fixed losses equal variable losses',
    'Impact of internal voltage regulation on customer terminal voltage stability'
  ],

  whatIWouldStudyNext: [
    'تحليل تيارات الاندفاع المغناطيسية (Inrush Currents) عند بدء التوصيل',
    'تصميم محولات الفيريت عالية التردد في مصادر التغذية النبضية (SMPS)',
    'تأثير التوافقيات (Harmonics) الناتجة عن الأحمال غير الخطية على سخونة المحولات'
  ],
  whatIWouldStudyNextEn: [
    'Analysis of magnetic inrush currents during energization transients',
    'High-frequency ferrite core transformer design for switched-mode power supplies',
    'Harmonic heating impacts from non-linear consumer loads (K-factor)'
  ],

  completionChecklist: [
    { task: 'اشتقاق نسبة التحويل النيابية والجهد الثانوي', taskEn: 'Derive turns ratio and secondary potential', checked: true },
    { task: 'محاكاة اختبار اللاحمل وقصر الدائرة', taskEn: 'Simulate open and short circuit tests', checked: true },
    { task: 'حساب منحنى الكفاءة وتحديد نقطة الذروة', taskEn: 'Calculate efficiency curve and peak point', checked: true }
  ],

  sources: [
    {
      title: 'IEEE Recommended Practice for Establishing Distribution Transformer Capabilities',
      source: 'IEEE Std C57.12.00-2021',
      url: 'https://standards.ieee.org'
    },
    {
      title: 'Electric Machinery Fundamentals, Chapter 2: Transformers',
      source: 'Stephen J. Chapman, McGraw-Hill',
      url: 'https://www.mheducation.com'
    }
  ]
};
