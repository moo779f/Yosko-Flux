import { EngineeringProject } from './types';

export const project03: EngineeringProject = {
  id: 'project-03-rc-circuit',
  projectNumber: 'PROJECT 03',
  numberInt: 3,
  title: 'دائرة شحن وتفريغ المكثف (RC): مراقبة تخزين الطاقة الكهربائية عبر الزمن',
  titleEn: 'RC Charging: Watching a Capacitor Store Energy',
  subtitle: 'الاستجابة العابرة عبر الزمن، اشتقاق الثابت الزمني τ = RC، وتحليل منحنى الشحن الأسي',
  subtitleEn: 'Transient time-domain dynamics, derivation of time constant τ = RC, and exponential charging analysis',
  engineeringQuestion: 'كيف يتغير جهد المكثف الكهربائي مع مرور الزمن عند توصيله بمصدر تيار مستمر عبر مقاومة كهربائية؟',
  engineeringQuestionEn: 'How does a capacitor\'s voltage change over time when connected to a DC source through a resistor?',
  whyItMatters: 'المكثفات والملفات هي عناصر تخزين طاقة ديناميكية تنقلنا من تحليل الدوائر الثابتة إلى دوائر الزمن والتردد. فهم الثابت الزمني τ = RC ضروري لتصميم دوائر التوقيت (Timers)، ودوائر تنقية وتنعيم الجهد في مزودات الطاقة (Power Supply Smoothing)، وفلاتر التردد المنخفض (Low-Pass Filters)، ودوائر إزالة الارتداد الميكانيكي للمفاتيح (Switch Debouncing).',
  whyItMattersEn: 'Capacitors introduce dynamic time-dependent behavior into circuits. Mastering the RC time constant τ = RC is vital for timing circuits (555 timers), DC power supply ripple filtering, audio low-pass filtering, and switch debouncing circuits in embedded hardware.',
  difficulty: 'Intermediate',
  difficultyAr: 'المستوى المتوسط',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Falstad Circuit Simulator', 'Scientific Calculator', 'Oscilloscope Waveform Display'],
  concepts: ['المكثف الكهربائي (Capacitor)', 'السعة الكهربائية (Capacitance)', 'الثابت الزمني τ = RC', 'الشحن الأسي (Exponential Charging)', 'الاستجابة العابرة (Transient Response)'],
  conceptsEn: ['Capacitor', 'Capacitance', 'Time Constant τ = RC', 'Exponential Charging', 'Transient Response'],

  prerequisites: [
    {
      name: 'المكثف الكهربائي (Capacitor)',
      nameEn: 'Capacitor',
      description: 'مكون إلكتروني يخزن الطاقة الكهربائية في مجال كهروستاتيكي بين لوحين موصلين مفصولين بعازل.',
      descriptionEn: 'A passive two-terminal component storing electric energy in an electrostatic field between dielectric-separated plates.'
    },
    {
      name: 'السعة الكهربائية (Capacitance - C)',
      nameEn: 'Capacitance (C)',
      description: 'النسبة بين الشحنة المخزنة Q وفرق الجهد V (C = Q / V) مقاسة بالفاراد (Farad - F). 1 فاراد سعة ضخمة جداً لذا نستخدم الميكروفاراد (µF).',
      descriptionEn: 'The ratio of electric charge Q to potential difference V (C = Q/V), measured in Farads (F).'
    },
    {
      name: 'التيار الإزاحي ومعدل تغير الجهد',
      nameEn: 'Capacitor Current Relationship',
      description: 'تيار المكثف يرتبط بمعدل تغير الجهد عبره: i(t) = C · (dv/dt). الجهد عبر المكثف لا يمكن أن يتغير لحظياً.',
      descriptionEn: 'Current is proportional to the rate of voltage change: i(t) = C · (dv/dt). Voltage across a capacitor cannot jump instantaneously.'
    },
    {
      name: 'الدوال الأسية والتفريغ الطبيعي (e^-x)',
      nameEn: 'Exponential Functions',
      description: 'الدوال التي يصف فيها معدل التغير نسبة من القيمة اللحظية، حيث e هو الأساس الطبيعي (≈ 2.71828).',
      descriptionEn: 'Mathematical functions describing natural decay and saturation where rate of change is proportional to remaining headroom.'
    }
  ],

  componentsParameters: [
    { component: 'مصدر جهد مستمر (DC Source)', componentEn: 'DC Voltage Source (Vs)', value: '10.0 V', purpose: 'توفير جهد الشحن المستمر', purposeEn: 'Provides constant charging potential step' },
    { component: 'مقاوم الشحن (Resistor R)', componentEn: 'Charging Resistor (R)', value: '1.0 kΩ (1000 Ω)', purpose: 'تقييد تيار الشحن الأولي وتحديد الثابت الزمني', purposeEn: 'Limits initial inrush current and sets time constant' },
    { component: 'مكثف كهربائي (Capacitor C)', componentEn: 'Electrolytic Capacitor (C)', value: '1000 µF (0.001 F)', purpose: 'تخزين الشحنات الكهربائية وبناء فرق الجهد تدريجياً', purposeEn: 'Stores charge and establishes transient voltage build-up' },
    { component: 'مفتاح تحكم (SPST Switch)', componentEn: 'SPST Switch', value: 'تشغيل / إيقاف', purpose: 'بدء عملية الشحن بدقة عند اللحظة t = 0s', purposeEn: 'Triggers charging transient precisely at t = 0s' }
  ],

  diagram: {
    ascii: `
        Switch (Closed at t = 0)
          ┌──/ ──┐
          │      │
  +10V ───┴──────┴───[ R = 1 kΩ ]───● Node Vc(t)
                                     │
                                   ┌─┴─┐
                                   │   │ C = 1000 µF
                                   │   │ (Electrostatic Storage)
                                   └─┬─┘
                                     │
  GND ───────────────────────────────┴───────────────── GND (0V)
`,
    diagramType: 'rc_circuit',
    description: 'دائرة RC توالي تتكون من مصدر 10V ومفتاح تشغيل ومقاوم 1 kΩ ومكثف 1000 µF متصل بالأرضي مع راسم إشارة لقياس Vc(t).',
    descriptionEn: 'Series RC circuit: 10V DC rail, switch, 1 kΩ charging resistor, and 1000 µF capacitor to ground with oscilloscope.'
  },

  mathematicalModel: {
    summary: 'بتطبيق قانون كيرشوف للجهد: Vs = i(t)·R + Vc(t). بالتعويض عن i(t) = C·(dVc/dt)، نحصل على المعادلة التفاضلية: RC(dVc/dt) + Vc(t) = Vs. بحلها مع شرط Vc(0) = 0V، ينتج قانون الشحن الأسي المشهور: Vc(t) = Vs · (1 - e^(-t / RC)).',
    summaryEn: 'Applying KVL: Vs = R·i(t) + Vc(t). Substituting i(t) = C·(dVc/dt) gives the first-order differential equation RC(dVc/dt) + Vc(t) = Vs. Solving with Vc(0) = 0 yields the exponential law: Vc(t) = Vs · (1 - e^(-t/RC)).',
    equations: [
      {
        name: 'الثابت الزمني لدائرة RC',
        nameEn: 'RC Time Constant (τ)',
        formula: '\\tau = R \\times C',
        variableDefinitions: [
          { variable: '\\tau', meaning: 'الثابت الزمني للدائرة (تاو)', meaningEn: 'Circuit time constant (tau)', unit: 's (ثانية)' },
          { variable: 'R', meaning: 'مقاومة الشحن', meaningEn: 'Charging resistance', unit: 'Ω (أوم)' },
          { variable: 'C', meaning: 'سعة المكثف الكهربائي', meaningEn: 'Capacitance', unit: 'F (فاراد)' }
        ]
      },
      {
        name: 'معادلة جهد المكثف اللحظي أثناء الشحن',
        nameEn: 'Instantaneous Capacitor Voltage Equation',
        formula: 'V_c(t) = V_s \\times \\left( 1 - e^{-\\frac{t}{\\tau}} \\right)',
        variableDefinitions: [
          { variable: 'V_c(t)', meaning: 'جهد المكثف عند اللحظة الزمنية t', meaningEn: 'Instantaneous capacitor voltage at time t', unit: 'V' },
          { variable: 'V_s', meaning: 'جهد المصدر المستمر (10.0 V)', meaningEn: 'DC supply voltage (10.0 V)', unit: 'V' },
          { variable: 't', meaning: 'الزمن المنقضي منذ إغلاق المفتاح', meaningEn: 'Time elapsed since switch closure', unit: 's' },
          { variable: 'e', meaning: 'الأساس الطبيعي للوغاريتمات (≈ 2.71828)', meaningEn: 'Euler\'s number (approx 2.71828)', unit: 'dimensionless' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب الثابت الزمني للدائرة (τ = R × C)',
      stepEn: '1. Calculate Time Constant (τ = R × C)',
      formula: '\\tau = R \\times C = 1000\\,\\Omega \\times 0.001\\,\\text{F}',
      substitution: '\\tau = 1000 \\times 0.001',
      result: '1.00',
      unit: 's (1.00 ثانية)'
    },
    {
      step: '2. حساب الجهد عند البداية t = 0 s',
      stepEn: '2. Calculate Voltage at Initial Instant t = 0 s',
      formula: 'V_c(0) = 10 \\times (1 - e^0) = 10 \\times (1 - 1)',
      substitution: 'V_c(0) = 10 \\times 0',
      result: '0.00',
      unit: 'V'
    },
    {
      step: '3. حساب الجهد عند t = 0.5 s (نصف ثابت زمني)',
      stepEn: '3. Calculate Voltage at t = 0.5 s (Half Time Constant)',
      formula: 'V_c(0.5) = 10 \\times (1 - e^{-0.5/1}) = 10 \\times (1 - 0.6065)',
      substitution: 'V_c(0.5) = 10 \\times 0.3935',
      result: '3.93',
      unit: 'V'
    },
    {
      step: '4. حساب الجهد عند t = 1.0 s (الثابت الزمني τ = 1s: علامة 63.2%)',
      stepEn: '4. Calculate Voltage at t = 1.0 s (Time Constant τ = 1s: 63.2% Milestone)',
      formula: 'V_c(1.0) = 10 \\times (1 - e^{-1.0/1}) = 10 \\times (1 - 0.3679)',
      substitution: 'V_c(1.0) = 10 \\times 0.6321',
      result: '6.32',
      unit: 'V'
    },
    {
      step: '5. حساب الجهد عند t = 2.0 s (اثنان تاو 2τ)',
      stepEn: '5. Calculate Voltage at t = 2.0 s (2τ)',
      formula: 'V_c(2.0) = 10 \\times (1 - e^{-2.0/1}) = 10 \\times (1 - 0.1353)',
      substitution: 'V_c(2.0) = 10 \\times 0.8647',
      result: '8.65',
      unit: 'V'
    },
    {
      step: '6. حساب الجهد عند t = 3.0 s (ثلاثة تاو 3τ: علامة 95.0%)',
      stepEn: '6. Calculate Voltage at t = 3.0 s (3τ: 95.0% Milestone)',
      formula: 'V_c(3.0) = 10 \\times (1 - e^{-3.0/1}) = 10 \\times (1 - 0.0498)',
      substitution: 'V_c(3.0) = 10 \\times 0.9502',
      result: '9.50',
      unit: 'V'
    },
    {
      step: '7. حساب الجهد عند t = 5.0 s (خمسة تاو 5τ: الاستقرار التام 99.3%)',
      stepEn: '7. Calculate Voltage at t = 5.0 s (5τ: Full Steady State 99.3%)',
      formula: 'V_c(5.0) = 10 \\times (1 - e^{-5.0/1}) = 10 \\times (1 - 0.0067)',
      substitution: 'V_c(5.0) = 10 \\times 0.9933',
      result: '9.93',
      unit: 'V'
    }
  ],

  predictionBeforeSimulation: 'قبل فتح المحاكي: عندما نغلق المفتاح عند t=0s، سيكون جهد المكثف 0.00V وتيار الشحن في أقصى ذروته (10 mA). بعد مرور ثانية واحدة بالضبط (t = 1.0 s = τ)، أتوقع أن يرتفع جهد المكثف إلى 6.32 V (63.2% من جهد المصدر). بعد 5 ثوانٍ (5τ)، سيصل الجهد إلى 9.93 V ويصبح المكثف شبه مشحون بالكامل.',
  predictionBeforeSimulationEn: 'Prediction before simulation: At switch closure t=0, capacitor voltage is zero and inrush current peaks at 10 mA. At exactly t = 1.0 s (1τ), voltage should reach 6.32 V (63.2%). At t = 5.0 s (5τ), voltage will reach 9.93 V, reaching full steady state.',

  simulationSetup: {
    toolName: 'Falstad Circuit Simulator',
    simulatorUrl: 'https://www.falstad.com/circuit/',
    stepByStepProcedure: [
      'افتح محاكي Falstad عبر https://www.falstad.com/circuit/.',
      'اختر مساحة عمل فارغة (Circuits → Blank Circuit).',
      'أضف مصدر تيار مستمر 10.0V (مفتاح "v").',
      'أضف مفتاح تحكم SPST مفرد (مفتاح "s") بعد القطب الموجب مباشرة لتشغيل الشحن يدوياً.',
      'أضف مقاومة R = 1.0 kΩ (1000 Ω) (مفتاح "r") متصلة بالمفتاح.',
      'أضف مكثفاً كهربائياً C = 1000 µF (مفتاح "c") متصلاً بين المقاوم والأرضي (Ground "g").',
      'انقر بزر الفأرة الأيمن على المكثف واختر "View in Scope" لفتح راسم الإشارة (Oscilloscope).',
      'تأكد من ضبط سرعة المحاكاة في الشريط السفلي لتستطيع مراقبة الثانية بوضوح.',
      'أغلق المفتاح وسجل قراءة الجهد اللحظية عند t = 0.5s و 1.0s و 2.0s و 3.0s و 5.0s.',
      'لإعادة التجربة: انقر بزر الفأرة الأيمن على المكثف واختر "Properties" وضع الجهد الابتدائي = 0V.'
    ],
    stepByStepProcedureEn: [
      'Open Falstad Circuit Simulator at https://www.falstad.com/circuit/.',
      'Start a blank canvas via Circuits → Blank Circuit.',
      'Insert a 10.0V DC Source (press "v").',
      'Insert an SPST Switch (press "s") right after the positive terminal.',
      'Insert a 1.0 kΩ resistor (press "r") in series with the switch.',
      'Insert a 1000 µF capacitor (press "c") to ground (press "g").',
      'Right-click the capacitor and choose "View in Scope" to monitor voltage vs time waveform.',
      'Adjust simulation speed to comfortably observe seconds progression.',
      'Close switch and record instantaneous voltage at 0.5s, 1.0s, 2.0s, 3.0s, and 5.0s.',
      'To repeat/reset: right-click capacitor, choose Properties, and reset voltage to 0.0V.'
    ],
    measurementPoints: [
      'طرف المكثف الموجب Vc(t) نسبة إلى الأرضي: قياس جهد الشحن اللحظي.',
      'مسار المقاوم R: قياس تيار الشحن المتناقص أسياً i(t).',
      'شاشة راسم الإشارة (Scope): التقاط منحنى الشحن الأسي الصاعد.'
    ],
    measurementPointsEn: [
      'Capacitor positive node Vc(t) relative to GND.',
      'Series resistor branch to monitor exponentially decaying current i(t).',
      'Oscilloscope window capturing the logarithmic-style saturation curve.'
    ],
    whatToChange: 'غير سعة المكثف من 1000 µF إلى 500 µF (يقلل τ إلى 0.5s ويتسارع الشحن)، ثم جرب 2000 µF (يزيد τ إلى 2.0s ويتباطأ الشحن).',
    whatToChangeEn: 'Vary capacitor from 1000 µF to 500 µF (τ drops to 0.5s, charging twice as fast), then to 2000 µF (τ rises to 2.0s, slowing down).',
    whatToObserve: 'لاحظ كيف أن الجهد لا يقفز فورياً، بل يبدأ بميل حاد ثم يتناقص معدل الشحن تدريجياً كلما اقترب جهد المكثف من جهد المصدر.',
    whatToObserveEn: 'Observe that voltage cannot change instantaneously; charging rate starts steep and flattens out as headroom diminishes.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'الحساب اليدوي للدوال الأسية', titleEn: 'Hand Calculation of Exponential Values', instruction: 'احسب الثابت الزمني τ = RC ثم احسب Vc عند 0s, 0.5s, 1s, 2s, 3s, 5s باستخدام الآلة الحاسبة.', instructionEn: 'Calculate τ = RC, then evaluate Vc(t) at 0s, 0.5s, 1s, 2s, 3s, 5s manually.' },
    { stepNum: 2, title: 'بناء دائرة RC في المحاكي', titleEn: 'Construct RC Circuit in Falstad', instruction: 'ابنِ الدائرة بمصدر 10V ومفتاح ومقاوم 1kΩ ومكثف 1000µF وتأريض، وافتح راسم الإشارة.', instructionEn: 'Assemble 10V source, switch, 1kΩ resistor, 1000µF capacitor, and open the Scope.' },
    { stepNum: 3, title: 'تشغيل الشحن عند t = 0', titleEn: 'Initiate Charging at t = 0', instruction: 'أغلق المفتاح لبدء تدفق الشحنات وسجل الزمن وقيمة الجهد على فترات متزامنة.', instructionEn: 'Close switch to start charging and log timestamps with voltage values.' },
    { stepNum: 4, title: 'تسجيل نقاط البيانات', titleEn: 'Record Data Points', instruction: 'سجل قراءة الفولتميتر عند كل نقطة زمنية واملأ جدول القياسات التجريبية.', instructionEn: 'Log voltmeter readings at designated times into comparison table.' },
    { stepNum: 5, title: 'رسم منحنى الجهد مع الزمن', titleEn: 'Plot Voltage vs Time Graph', instruction: 'ارسم منحنى بياني يوضح الزمن (بالثواني) على المحور الأفقي مقابل جهد المكثف (بالفولت) على المحور الرأسي.', instructionEn: 'Plot time (s) on X-axis versus capacitor voltage Vc (V) on Y-axis.' },
    { stepNum: 6, title: 'مقارنة النظرية بالمحاكاة', titleEn: 'Compare Theory vs Simulation', instruction: 'قارن القيمة المحسوبة نظرياً بالقيمة المقاسة في المحاكي عند t = τ = 1s واحسب نسبة الخطأ.', instructionEn: 'Verify the 63.2% milestone at t = τ and compute error percentage.' },
    { stepNum: 7, title: 'كتابة التفسير الفيزيائي', titleEn: 'Write Physical Explanation', instruction: 'اشرح فيزيائياً لماذا لا يصل المكثف إلى 10V لحظياً وكيف يفسر ذلك سلوك المقاومة والمجال الكهروستاتيكي.', instructionEn: 'Explain physically why a capacitor cannot charge instantaneously.' }
  ],

  expectedResult: 'تطابق كامل للمنحنى الأسي: عند t = 1.0s يصل الجهد إلى 6.32 V، وعند t = 5.0s يصل إلى 9.93 V بنسبة خطأ 0.0% في بيئة المحاكاة المثالية.',
  expectedResultEn: 'Exact exponential match: At t = 1.0s, Vc reaches 6.32 V; at t = 5.0s, Vc reaches 9.93 V with 0.0% error in simulation.',

  comparisonTable: [
    {
      parameter: 'جهد البداية Vc(0s)',
      parameterEn: 'Initial Voltage Vc(0s)',
      theoretical: '0.00 V',
      simulated: '0.000 V',
      difference: '0.000 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: 'المكثف مفرغ تماماً في البداية',
      notesEn: 'Fully discharged at start'
    },
    {
      parameter: 'الجهد عند t = 0.5 s (0.5τ)',
      parameterEn: 'Voltage at t = 0.5 s (0.5τ)',
      theoretical: '3.93 V',
      simulated: '3.935 V',
      difference: '0.005 V',
      percentageError: '0.1%',
      unit: 'V',
      notes: '39.3% من جهد المصدر',
      notesEn: '39.3% of supply'
    },
    {
      parameter: 'الجهد عند t = 1.0 s (1τ الثابت الزمني)',
      parameterEn: 'Voltage at t = 1.0 s (1τ Milestone)',
      theoretical: '6.32 V',
      simulated: '6.321 V',
      difference: '0.001 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: 'العلامة الهندسية الشهيرة 63.2%',
      notesEn: 'Famous 63.2% engineering milestone'
    },
    {
      parameter: 'الجهد عند t = 2.0 s (2τ)',
      parameterEn: 'Voltage at t = 2.0 s (2τ)',
      theoretical: '8.65 V',
      simulated: '8.647 V',
      difference: '0.003 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: '86.5% شحن',
      notesEn: '86.5% charged'
    },
    {
      parameter: 'الجهد عند t = 3.0 s (3τ)',
      parameterEn: 'Voltage at t = 3.0 s (3τ)',
      theoretical: '9.50 V',
      simulated: '9.502 V',
      difference: '0.002 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: '95.0% شحن',
      notesEn: '95.0% charged'
    },
    {
      parameter: 'الجهد عند t = 5.0 s (5τ الاستقرار الكامل)',
      parameterEn: 'Voltage at t = 5.0 s (5τ Steady State)',
      theoretical: '9.93 V',
      simulated: '9.933 V',
      difference: '0.003 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: '99.3% استقرار تام عملياً',
      notesEn: '99.3% considered full steady state'
    }
  ],

  sweepTable: {
    title: 'جدول نقاط الشحن الأسي عبر الزمن (Theoretical vs Simulation)',
    titleEn: 'RC Exponential Charging Time Series Data',
    headers: ['الزمن t (ثانية)', 'نسبة الزمن من τ', 'Vc النظري (V)', 'Vc بالمحاكي (V)', 'نسبة الشحن %', 'تيار الشحن i(t) (mA)'],
    headersEn: ['Time t (s)', 'Time / τ', 'Theoretical Vc (V)', 'Simulated Vc (V)', 'Charge %', 'Current i(t) (mA)'],
    rows: [
      { cells: ['0.0 s', '0.0 τ', '0.00 V', '0.000 V', '0.0%', '10.00 mA'] },
      { cells: ['0.5 s', '0.5 τ', '3.93 V', '3.935 V', '39.3%', '6.07 mA'] },
      { cells: ['1.0 s', '1.0 τ', '6.32 V', '6.321 V', '63.2%', '3.68 mA'] },
      { cells: ['2.0 s', '2.0 τ', '8.65 V', '8.647 V', '86.5%', '1.35 mA'] },
      { cells: ['3.0 s', '3.0 τ', '9.50 V', '9.502 V', '95.0%', '0.50 mA'] },
      { cells: ['5.0 s', '5.0 τ', '9.93 V', '9.933 V', '99.3%', '0.07 mA'] }
    ]
  },

  graphs: [
    {
      id: 'proj03-rc-charging-curve',
      title: 'منحنى شحن المكثف الأسي: الجهد Vc(t) مقابل الزمن المنقضي t',
      titleEn: 'Capacitor Voltage Vc(t) vs Time (s) Charging Curve',
      xAxisLabel: 'الزمن المنقضي t (بالثواني)',
      xAxisLabelEn: 'Time Elapsed t (seconds)',
      yAxisLabel: 'جهد المكثف Vc (فولت)',
      yAxisLabelEn: 'Capacitor Voltage Vc (V)',
      dataPoints: [
        { x: 0.0, y: 0.00, label: 't = 0.0s (0V)' },
        { x: 0.5, y: 3.93, label: 't = 0.5s (3.93V)' },
        { x: 1.0, y: 6.32, label: 't = 1.0s (τ: 6.32V)' },
        { x: 2.0, y: 8.65, label: 't = 2.0s (2τ: 8.65V)' },
        { x: 3.0, y: 9.50, label: 't = 3.0s (3τ: 9.50V)' },
        { x: 5.0, y: 9.93, label: 't = 5.0s (5τ: 9.93V)' }
      ],
      notes: 'يوضح المنحنى التباطؤ الأسي الحتمي: في أول ثانية يكتسب المكثف 6.32V، بينما يحتاج 4 ثوانٍ إضافية ليكتسب الـ 3.61V المتبقية.',
      notesEn: 'The graph highlights exponential deceleration: 6.32V is accumulated in the first second, while the next 3.61V takes 4 full seconds.'
    }
  ],

  engineeringInterpretation: 'لماذا لا يصل المكثف إلى 10V فورياً؟ التفسير الفيزيائي: يتطلب بناء الجهد تراكم شحنات فيزيائية حقيقية Q = C × V على لوحي المكثف. لكي تتحرك هذه الشحنات، يجب أن تتدفق كتيار كهربائي i(t). لكن وجود المقاومة R = 1 kΩ يحد من هذا التدفق وفق قانون أوم: في اللحظة الأولى t=0 يكون فرق الجهد عبر المقاوم 10V كاملة، فيمر تيار قدره 10 mA. وبمجرد أن يبدأ المكثف بالشحن ويرتفع جهده، ينخفض فرق الجهد المتبقي عبر المقاوم (Vs - Vc)، فيقل التيار تدريجياً، مما يبطئ معدل الشحن باستمرار حتى يصل إلى الصفر عند الامتلاء.',
  engineeringInterpretationEn: 'Why doesn\'t the capacitor charge instantly? Physical reason: Developing potential requires accumulating physical charge Q = C × V on the plates. Charge flow is current i(t), which is strictly throttled by the series resistor R = 1 kΩ. Initially, all 10V drops across R, producing 10 mA. As the capacitor charges, remaining drop across R decreases (Vs - Vc), choking off current and asymptotically flattening the charging curve.',

  sourcesOfErrorAndLimitations: [
    'المكثفات الحقيقية تمتلك تيار تسريب داخلي (Leakage Current) ومقاومة تسلسلية مكافئة (ESR) تؤخر الشحن وتبدد حرارة.',
    'تفاوت سعة المكثفات الكيميائية (Electrolytic Capacitors) كبير جداً في الواقع ويصل إلى ±20%.',
    'المحاكي يفترض ثبات درجة الحرارة وعدم انهيار العازل الكهربائي (Dielectric Breakdown).',
    'مقاومة أسلاك التوصيل والمفتاح الميكانيكي مهملة في نموذج المحاكاة المثالي.'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'Real electrolytic capacitors suffer from internal leakage current and Equivalent Series Resistance (ESR).',
    'Real physical capacitors carry high manufacturing tolerance (typically ±20%).',
    'Simulation assumes constant temperature and infinite dielectric breakdown threshold.',
    'Switch contact bounce and wire resistance are idealized as zero.'
  ],

  whatILearned: [
    'فهمت أن المكثف يعارض التغير المفاجئ في الجهد، وأن الثابت الزمني τ = RC هو المقياس الطبيعي لسرعة استجابة الدائرة.',
    'تعلمت القيمة الهندسية لعلامة 63.2% (1τ) وعلامة 99.3% (5τ) التي تعتبر المعيار الصناعي للاستقرار.',
    'أتقنت استخدام راسم الإشارة (Scope) في المحاكي وتتبع منحنيات الجهد اللحظية ومطابقتها مع الدوال الأسية المحسوبة.'
  ],
  whatILearnedEn: [
    'Understood that capacitors strictly oppose instantaneous voltage jumps, governed by time constant τ = RC.',
    'Internalized the engineering significance of 1τ (63.2%) and 5τ (99.3%) as steady-state benchmarks.',
    'Mastered virtual oscilloscope waveform capture and matching empirical curves to mathematical models.'
  ],

  whatIWouldStudyNext: [
    'دائرة التفريغ: دراسة سلوك تفريغ المكثف عبر مقاومة Vc(t) = Vo · e^(-t/RC).',
    'استخدام دائرة RC كمرشح تمرير منخفض للترددات (Low-Pass Filter) وحساب تردد القطع fc = 1 / (2πRC).',
    'تطبيق الدائرة في توليد نبضات التوقيت باستخدام المؤقت الشهير NE555 IC.'
  ],
  whatIWouldStudyNextEn: [
    'Discharge dynamics: model discharging through a resistor via Vc(t) = Vo · e^(-t/RC).',
    'Low-pass AC filtering: calculate corner cut-off frequency fc = 1 / (2πRC).',
    'Astable and monostable timing circuits using the classic NE555 timer IC.'
  ],

  completionChecklist: [
    { task: 'حساب الثابت الزمني τ = RC يدوياً بالأرقام والوحدات', taskEn: 'Calculate time constant τ = RC manually with SI units', checked: true },
    { task: 'حساب الجهد عند النقاط الزمنية 0s, 0.5s, 1s, 2s, 3s, 5s بالقانون الأسي', taskEn: 'Calculate voltage at 0s, 0.5s, 1s, 2s, 3s, 5s via exponential formula', checked: true },
    { task: 'بناء دائرة RC بمفتاح وراسم إشارة في محاكي Falstad', taskEn: 'Construct RC circuit with switch and oscilloscope in Falstad', checked: true },
    { task: 'تسجيل قراءات الجهد بالمحاكي عند الثواني المحددة ومقارنتها', taskEn: 'Record simulated voltages at timestamps and compare with theory', checked: true },
    { task: 'رسم المنحنى البياني الزمني للجهد Vc(t)', taskEn: 'Plot time-domain voltage curve Vc(t)', checked: true },
    { task: 'كتابة التفسير الفيزيائي لسبب عدم الشحن اللحظي ومصادر الخطأ', taskEn: 'Document physical interpretation and capacitor ESR limitations', checked: true }
  ],

  sources: [
    { title: 'OpenStax University Physics Vol 2 - Chapter 10: RC Circuits', source: 'OpenStax College (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits' },
    { title: 'Falstad Circuit Simulator - RC Transient Example', source: 'Paul Falstad Educational Web Tools', url: 'https://www.falstad.com/circuit/' },
    { title: 'Capacitor Fundamentals and Transient Analysis', source: 'MIT OpenCourseWare (6.002)', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
  ],

  // Legacy mappings for full compatibility
  objective: 'نمذجة سلوك شحن المكثف عند تطبيق جهد مستمر V = 10V عبر مقاومة R = 1kΩ ومكثف C = 1000µF، واشتقاق الثابت الزمني τ = RC ومقارنة منحنى الجهد الأسي مع المحاكاة.',
  objectiveEn: 'Model capacitor charging dynamics with V = 10V, R = 1kΩ, C = 1000µF, derive τ = RC, and track the exponential curve against simulation.',
  engineeringConcept: 'المكثف لا يشحن فورياً؛ بل يعارض التغير المفاجئ في الجهد لأن تراكم الشحنات يستغرق زمناً يحكمه الثابت الزمني τ = RC.',
  engineeringConceptEn: 'Capacitors oppose instantaneous voltage changes because accumulating electrostatic charge requires finite time governed by τ = RC.',
  theory: 'تحكم دائرة RC المعادلة التفاضلية: RC(dVc/dt) + Vc = Vs، وحلها يعطي صيغة الشحن الأسي Vc(t) = Vs(1 - e^(-t/RC)). عند t = τ يصل الجهد إلى 63.2%.',
  theoryEn: 'Governed by RC(dVc/dt) + Vc = Vs, yielding Vc(t) = Vs(1 - e^(-t/RC)). At t = τ, voltage reaches ~63.2% of supply.',
  technicalSummary: {
    input: 'Vs = 10.0 V DC (خطوة دخل عند t = 0)',
    inputEn: 'Vs = 10.0 V DC (Step Input at t = 0)',
    components: 'R = 1.0 kΩ, C = 1000 µF, مفتاح SPST',
    componentsEn: 'R = 1.0 kΩ, C = 1000 µF, SPST Switch',
    calculatedResult: 'τ = 1.00 s; Vc(1s) = 6.32 V; Vc(5s) = 9.93 V',
    calculatedResultEn: 'τ = 1.00 s; Vc(1s) = 6.32 V; Vc(5s) = 9.93 V',
    simulatedResult: 'Simulation Result: Vc(1.0s) = 6.321 V, Vc(5.0s) = 9.933 V (Falstad Scope)',
    simulatedResultEn: 'Simulation Result: Vc(1.0s) = 6.321 V, Vc(5.0s) = 9.933 V (Falstad Scope)'
  }
};
