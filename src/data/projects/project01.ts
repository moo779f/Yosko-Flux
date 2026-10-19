import { EngineeringProject } from './types';

export const project01: EngineeringProject = {
  id: 'project-01-voltage-divider',
  projectNumber: 'PROJECT 01',
  numberInt: 1,
  title: 'مجزئ الجهد: فهم كيفية توزيع الجهد الكهربائي في الدوائر',
  titleEn: 'Voltage Divider: Understanding How Voltage Is Distributed',
  subtitle: 'التحقيق في تأثير نسبة المقاومات على جهد الخرج وتطبيق قانون أوم في دوائر التوالي',
  subtitleEn: 'Investigating how resistor ratios govern output voltage and applying Ohm\'s Law to series circuits',
  engineeringQuestion: 'كيف يؤثر تغيير نسبة المقاومات (R2 / R1) على جهد الخرج (Vout) في مجزئ الجهد الكهربائي؟',
  engineeringQuestionEn: 'How does changing the resistance ratio (R2 / R1) affect the output voltage of a voltage divider?',
  whyItMatters: 'مجزئ الجهد هو أول وأبسط دائرة تحليلية يواجهها مهندس الكهرباء. بالرغم من بساطته، فهو الأساس الرياضي لقراءة الحساسات التناظرية (مثل حساسات الحرارة NTC والضوء LDR)، وتوليد جهود مرجعية للمتحكمات الدقيقة، وضبط مستويات الإشارة الصوتية عبر مقاييس الجهد (Potentiometers). كما يعلمنا مبدأ هبوط الجهد وأهمية ممانعة الدخل لمنع تحميل الدائرة.',
  whyItMattersEn: 'The voltage divider is the foundational analytical circuit in electrical engineering. It is the working principle behind analog sensor reading (LDRs, thermistors), reference voltage biasing, and potentiometer volume control, teaching the crucial distinction between unloaded division and loading effects.',
  difficulty: 'Foundation',
  difficultyAr: 'المستوى الأساسي',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Falstad Circuit Simulator', 'Scientific Calculator', 'Ohm\'s Law Model'],
  concepts: ['قانون أوم (Ohm\'s Law)', 'دوائر التوالي (Series Circuits)', 'تجزئة الجهد (Voltage Division)', 'نسبة المقاومة (Resistance Ratio)'],
  conceptsEn: ['Ohm\'s Law', 'Series Circuits', 'Voltage Division', 'Resistance Ratio'],

  prerequisites: [
    {
      name: 'الجهد الكهربائي (Voltage - V)',
      nameEn: 'Voltage (V)',
      description: 'فرق الجهد الكهروستاتيكي بين نقطتين مقاساً بالفولت (V)، وهو الضغط الذي يدفع الإلكترونات للتحرك.',
      descriptionEn: 'The electrostatic potential difference between two points measured in volts (V), representing energy per unit charge.'
    },
    {
      name: 'التيار الكهربائي (Current - I)',
      nameEn: 'Current (I)',
      description: 'معدل سريان الشحنات الكهربائية عبر مقطع الموصل مقاساً بالأمبير (A) حيث 1A = 1 كولوم في الثانية.',
      descriptionEn: 'The rate of electrical charge flow measured in amperes (A), where 1 A = 1 coulomb per second.'
    },
    {
      name: 'المقاومة الكهربائية (Resistance - R)',
      nameEn: 'Resistance (R)',
      description: 'مقاومة المادة لمرور التيار مقاسة بالأوم (Ω).',
      descriptionEn: 'The opposition a material presents to electric current, measured in ohms (Ω).'
    },
    {
      name: 'قانون أوم (Ohm\'s Law)',
      nameEn: 'Ohm\'s Law',
      description: 'العلاقة الخطية V = I × R التي تربط الجهد بالتيار والمقاومة.',
      descriptionEn: 'The linear governing equation V = I × R relating voltage, current, and resistance.'
    }
  ],

  componentsParameters: [
    { component: 'مصدر جهد مستمر (DC Source)', componentEn: 'DC Voltage Source (Vs)', value: '10.0 V', purpose: 'توفير فرق جهد مستمر ثابت للدائرة', purposeEn: 'Provides stable DC electrical potential' },
    { component: 'مقاومة علوية (Resistor R1)', componentEn: 'Top Resistor (R1)', value: '1.0 kΩ (1000 Ω)', purpose: 'تحديد التيار وهبوط الجهد الأولي', purposeEn: 'Current limiting and first potential drop' },
    { component: 'مقاومة سفلية (Resistor R2)', componentEn: 'Bottom Resistor (R2)', value: '1.0 kΩ (1000 Ω)', purpose: 'قياس جهد الخرج عبر طرفيها', purposeEn: 'Output voltage measurement across terminals' },
    { component: 'التأريض المرجعي (Ground / GND)', componentEn: 'Ground Reference (GND)', value: '0.0 V', purpose: 'نقطة المرجع الصفرية لقياس الجهود المطلقة', purposeEn: 'Zero-volt reference plane for absolute potentials' }
  ],

  diagram: {
    ascii: `
       +10 V DC Source (Vs)
              │
              ▼
            ┌───┐
            │   │ R1 = 1 kΩ
            └───┘
              │
              ├───● Vout (Midpoint Output)
              │
            ┌───┐
            │   │ R2 = 1 kΩ
            └───┘
              │
              ▼
             GND (0 V)
`,
    diagramType: 'voltage_divider',
    description: 'دائرة مجزئ جهد متوالية: يتصل القطب الموجب بـ R1، وتتصل نقطة الخرج Vout بين R1 و R2، ويتصل الطرف السفلي لـ R2 بالتأريض GND.',
    descriptionEn: 'Series voltage divider: Positive rail feeds R1, output node Vout sits between R1 and R2, and R2 terminates at GND.'
  },

  mathematicalModel: {
    summary: 'وفق قانون كيرشوف للجهد (KVL) وقانون أوم، يمر تيار واحد متطابق I عبر المقاومتين الموصولتين على التوالي. المقاومة الكلية هي حاصل الجمع، وجهد الخرج هو هبوط الجهد على المقاومة السفلية.',
    summaryEn: 'According to KVL and Ohm\'s Law, identical current flows through both series resistors. Total resistance is their sum, and output voltage is the Ohm drop across R2.',
    equations: [
      {
        name: 'المقاومة الكلية لدائرة التوالي',
        nameEn: 'Total Series Resistance',
        formula: 'R_{total} = R_1 + R_2',
        variableDefinitions: [
          { variable: 'R_{total}', meaning: 'المقاومة الكلية المكافئة للدائرة', meaningEn: 'Total equivalent loop resistance', unit: 'Ω' },
          { variable: 'R_1', meaning: 'المقاومة العلوية', meaningEn: 'Top branch resistor', unit: 'Ω' },
          { variable: 'R_2', meaning: 'المقاومة السفلية', meaningEn: 'Bottom branch resistor', unit: 'Ω' }
        ]
      },
      {
        name: 'تيار الحلقة المستمر',
        nameEn: 'Loop Current',
        formula: 'I = \\frac{V_s}{R_{total}}',
        variableDefinitions: [
          { variable: 'I', meaning: 'شدة التيار الكهربائي في الحلقة', meaningEn: 'Current flowing through the loop', unit: 'A' },
          { variable: 'V_s', meaning: 'جهد مصدر التغذية المستمر', meaningEn: 'DC supply potential', unit: 'V' },
          { variable: 'R_{total}', meaning: 'المقاومة الكلية المكافئة', meaningEn: 'Total loop resistance', unit: 'Ω' }
        ]
      },
      {
        name: 'قانون مجزئ الجهد النهائي',
        nameEn: 'Voltage Divider Equation',
        formula: 'V_{out} = V_s \\times \\left( \\frac{R_2}{R_1 + R_2} \\right)',
        variableDefinitions: [
          { variable: 'V_{out}', meaning: 'جهد الخرج المقاس عبر R2', meaningEn: 'Output voltage across R2', unit: 'V' },
          { variable: 'V_s', meaning: 'جهد المصدر المستمر (10 V)', meaningEn: 'Supply voltage (10 V)', unit: 'V' },
          { variable: 'R_1, R_2', meaning: 'قيم المقاومات الفردية', meaningEn: 'Individual resistance values', unit: 'Ω' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب المقاومة الكلية المكافئة (Rtotal)',
      stepEn: '1. Calculate Total Loop Resistance (Rtotal)',
      formula: 'R_{total} = R_1 + R_2',
      substitution: 'R_{total} = 1000\\,\\Omega + 1000\\,\\Omega',
      result: '2000',
      unit: 'Ω (2.0 kΩ)'
    },
    {
      step: '2. حساب تيار الدائرة المار في كلا المقاومين (I)',
      stepEn: '2. Calculate Loop Current (I) via Ohm\'s Law',
      formula: 'I = \\frac{V_s}{R_{total}}',
      substitution: 'I = \\frac{10.0\\text{ V}}{2000\\,\\Omega}',
      result: '0.005',
      unit: 'A (5.0 mA)'
    },
    {
      step: '3. حساب هبوط الجهد على المقاومة السفلية R2 (Vout)',
      stepEn: '3. Calculate Output Voltage across R2 (Vout)',
      formula: 'V_{out} = I \\times R_2 = 10\\text{ V} \\times \\left(\\frac{1000}{2000}\\right)',
      substitution: 'V_{out} = 0.005\\text{ A} \\times 1000\\,\\Omega',
      result: '5.00',
      unit: 'V'
    }
  ],

  predictionBeforeSimulation: 'قبل فتح المحاكي: بما أن المقاومتين متطابقتان تماماً (R1 = R2 = 1 kΩ)، فإن الضغط الكهربائي سيتوزع بالتساوي 50% لكل مقاومة. لذلك أتوقع أن يقرأ الفولتميتر عند نقطة المنتصف 5.00 V تماماً، وأن يقرأ الأميتر 5.00 mA.',
  predictionBeforeSimulationEn: 'Prediction before opening simulator: Since both resistors are identical (R1 = R2 = 1 kΩ), voltage drop should be symmetrically split 50/50. I predict Vout will measure exactly 5.00 V and current will measure 5.00 mA.',

  simulationSetup: {
    toolName: 'Falstad Circuit Simulator',
    simulatorUrl: 'https://www.falstad.com/circuit/',
    stepByStepProcedure: [
      'افتح محاكي Falstad عبر الرابط الرسمي: https://www.falstad.com/circuit/.',
      'اختر Circuits → Blank Circuit لبدء مساحة عمل نظيفة.',
      'اضغط مفتاح "v" لإضافة مصدر جهد مستمر (DC Voltage Source)، واسحبه رأسياً واضبط قيمته على 10 V بالنقر المزدوج عليه.',
      'اضغط مفتاح "r" لإضافة مقاومة R1 واضبط قيمتها على 1.0 kΩ (1000 Ω).',
      'اضغط مفتاح "r" مجدداً لإضافة مقاومة R2 رأسياً أسفل R1 واضبط قيمتها على 1.0 kΩ.',
      'اضغط مفتاح "g" لإضافة تأريض (Ground) في أسفل المقاومة R2.',
      'اضغط مفتاح "w" لتوصيل الأسلاك بين المصدر و R1 و R2 والتأريض.',
      'انقر بالزر الأيمن على العقدة بين R1 و R2 واختر "Show Voltmeter" أو أضف مخرج جهد (Output) لقراءة Vout.'
    ],
    stepByStepProcedureEn: [
      'Navigate to Falstad Circuit Simulator at https://www.falstad.com/circuit/.',
      'Select Circuits → Blank Circuit to start on a fresh canvas.',
      'Press "v" to insert a DC Voltage Source, drag vertically, double-click and set to 10 V.',
      'Press "r" to add resistor R1 and set resistance to 1.0 kΩ (1000 Ω).',
      'Press "r" to place resistor R2 directly below R1, set to 1.0 kΩ.',
      'Press "g" to attach a Ground terminal to the bottom lead of R2.',
      'Press "w" to route copper wires connecting source positive to R1, R1 to R2, and R2 to ground.',
      'Right-click the junction between R1 and R2 and select "Show Voltmeter" to display Vout.'
    ],
    measurementPoints: [
      'نقطة قطب المصدر الموجب: التحقق من ثبات 10.0 V.',
      'عقدة الخرج Vout (بين R1 و R2): قياس جهد التجزئة نسبة للأرضي.',
      'سلك التغذية الرئيسي: قياس شدة تيار الحلقة بواسطة الأميتر.'
    ],
    measurementPointsEn: [
      'Source positive terminal: Verify 10.0 V rail.',
      'Midpoint node Vout: Measure divided potential relative to GND.',
      'Series loop rail: Measure total current in milliamperes.'
    ],
    whatToChange: 'قم بتغيير قيم R1 و R2 تدريجياً لاختبار الحالات الأربع: (1k, 1k)، (1k, 2k)، (2k, 1k)، و (4k, 1k).',
    whatToChangeEn: 'Change resistor values R1 and R2 across the four test cases: (1k, 1k), (1k, 2k), (2k, 1k), and (4k, 1k).',
    whatToObserve: 'راقب كيف يرتفع جهد الخرج Vout عندما تزيد نسبة R2 بالنسبة إلى R1، وكيف ينخفض التيار الكلي كلما زادت المقاومة الكلية.',
    whatToObserveEn: 'Observe how Vout climbs as the ratio R2/R1 increases, and note current declining as total resistance rises.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'الحساب اليدوي', titleEn: 'Hand Calculation', instruction: 'احسب Rtotal و I و Vout على الورق لكل حالة من الحالات الأربع باستخدام Vout = Vs × R2 / (R1 + R2).', instructionEn: 'Calculate Rtotal, I, and Vout manually for all 4 cases using Ohm\'s Law on paper.' },
    { stepNum: 2, title: 'بناء الدائرة في المحاكي', titleEn: 'Build in Simulator', instruction: 'افتح محاكي Falstad وابنِ الدائرة بمصدر 10V ومقاومين وتأريض وفق التعليمات الموضحة.', instructionEn: 'Open Falstad and assemble the 10V source, two resistors, and ground.' },
    { stepNum: 3, title: 'تغيير القيم', titleEn: 'Change Values', instruction: 'عدل قيم R1 و R2 لكل حالة وسجل القراءات الرقمية المستقرة في جدول البيانات.', instructionEn: 'Adjust resistor values for each case and record simulator readings.' },
    { stepNum: 4, title: 'تسجيل القياسات', titleEn: 'Record Measurements', instruction: 'سجل قراءة الفولتميتر لـ Vout وقراءة الأميتر لـ I لكل حالة.', instructionEn: 'Tabulate measured Vout and current I from the simulator.' },
    { stepNum: 5, title: 'رسم المنحنى البياني', titleEn: 'Plot Graph', instruction: 'ارسم منحنى بياني يوضح نسبة المقاومات (R2 / R1) على المحور السيني مقابل جهد الخرج Vout على المحور الصادي.', instructionEn: 'Plot resistance ratio (R2/R1) on X-axis versus output voltage Vout on Y-axis.' },
    { stepNum: 6, title: 'مقارنة النتائج والخطأ', titleEn: 'Compare & Error', instruction: 'قارن النتيجة النظرية بنتيجة المحاكاة واحسب نسبة الاختلاف: |sim - theory| / theory × 100%.', instructionEn: 'Compute percentage difference between theory and simulation.' },
    { stepNum: 7, title: 'كتابة الاستنتاج الهندسي', titleEn: 'Write Conclusion', instruction: 'دون ملاحظاتك حول تأثير نسبة المقاومات وسبب عدم صلاحية مجزئ الجهد لتغذية الأحمال الثقيلة.', instructionEn: 'Summarize findings regarding resistance ratios and loading limitations.' }
  ],

  expectedResult: 'تطابق رياضي تام بين نظرية قانون أوم والمحاكاة: في الحالة الأساسية Vout = 5.00 V و I = 5.00 mA بنسبة خطأ 0.0%.',
  expectedResultEn: 'Exact mathematical agreement between Ohm\'s Law and simulation: Baseline Vout = 5.00 V and I = 5.00 mA with 0.0% error.',

  comparisonTable: [
    {
      parameter: 'المقاومة الكلية (Rtotal)',
      parameterEn: 'Total Resistance (Rtotal)',
      theoretical: '2000 Ω',
      simulated: '2000 Ω',
      difference: '0.0 Ω',
      percentageError: '0.0%',
      unit: 'Ω',
      notes: 'تطابق تام (R1 + R2)',
      notesEn: 'Exact match (R1 + R2)'
    },
    {
      parameter: 'تيار الحلقة (Current I)',
      parameterEn: 'Loop Current (I)',
      theoretical: '5.00 mA',
      simulated: '5.000 mA',
      difference: '0.000 mA',
      percentageError: '0.0%',
      unit: 'mA',
      notes: '10 V / 2000 Ω',
      notesEn: '10 V / 2000 Ω'
    },
    {
      parameter: 'جهد الخرج (Vout)',
      parameterEn: 'Output Voltage (Vout)',
      theoretical: '5.00 V',
      simulated: '5.000 V',
      difference: '0.000 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: 'نصف جهد الدخل بدقة',
      notesEn: 'Exactly half of supply'
    }
  ],

  sweepTable: {
    title: 'جدول مقارنة حالات مجزئ الجهد الأربع (Calculated vs Simulation)',
    titleEn: 'Four Voltage Divider Cases Comparison Table',
    headers: ['الحالة', 'R1 (kΩ)', 'R2 (kΩ)', 'النسبة R2/R1', 'R_total (kΩ)', 'التيار I (mA)', 'Vout المحسوب (V)', 'Vout بالمحاكي (V)', 'نسبة الخطأ %'],
    headersEn: ['Case', 'R1 (kΩ)', 'R2 (kΩ)', 'Ratio R2/R1', 'R_total (kΩ)', 'Current I (mA)', 'Calculated Vout (V)', 'Simulated Vout (V)', 'Error %'],
    rows: [
      { cells: ['Case A (تطابق)', '1.0', '1.0', '1.00', '2.0', '5.00', '5.00', '5.000', '0.0%'] },
      { cells: ['Case B (R2 أكبر)', '1.0', '2.0', '2.00', '3.0', '3.33', '6.67', '6.667', '0.0%'] },
      { cells: ['Case C (R1 أكبر)', '2.0', '1.0', '0.50', '3.0', '3.33', '3.33', '3.333', '0.0%'] },
      { cells: ['Case D (R1 كبير)', '4.0', '1.0', '0.25', '5.0', '2.00', '2.00', '2.000', '0.0%'] }
    ]
  },

  graphs: [
    {
      id: 'proj01-ratio-vs-vout',
      title: 'العلاقة بين نسبة المقاومات (R2 / R1) وجهد الخرج Vout',
      titleEn: 'Resistance Ratio (R2 / R1) vs Output Voltage (Vout)',
      xAxisLabel: 'نسبة المقاومات (R2 / R1)',
      xAxisLabelEn: 'Resistance Ratio (R2 / R1)',
      yAxisLabel: 'جهد الخرج Vout (فولت)',
      yAxisLabelEn: 'Output Voltage Vout (V)',
      dataPoints: [
        { x: 0.25, y: 2.00, label: 'Case D (R2/R1 = 0.25 → Vout = 2.00V)' },
        { x: 0.50, y: 3.33, label: 'Case C (R2/R1 = 0.50 → Vout = 3.33V)' },
        { x: 1.00, y: 5.00, label: 'Case A (R2/R1 = 1.00 → Vout = 5.00V)' },
        { x: 2.00, y: 6.67, label: 'Case B (R2/R1 = 2.00 → Vout = 6.67V)' }
      ],
      notes: 'المنحنى يظهر نمواً متصاعداً غير خطي متناقص الميل مع اقتراب Vout من جهد المصدر Vs = 10 V عندما تكون R2 >> R1.',
      notesEn: 'Curve demonstrates asymptotic growth approaching source voltage Vs = 10V as R2 >> R1.'
    }
  ],

  engineeringInterpretation: 'توضح النتائج أن جهد الخرج لا يتحدد بالقيم المطلقة للمقاومات بل بنسبتها المتبادلة. إذا استخدمنا R1 = 10 kΩ و R2 = 10 kΩ، فسنحصل على نفس جهد الخرج 5.00 V تماماً، لكن مع تيار أصغر بعشر مرات (0.5 mA بدلاً من 5.0 mA). اختيار قيم المقاومات في الهندسة يمثل موازنة (Trade-off): المقاومات الصغيرة تستهلك طاقة مستمرة أكبر (P = V² / R)، بينما المقاومات الكبيرة جداً تجعل الدائرة شديدة التأثر بالضوضاء وتأثير التحميل (Loading Effect) عند توصيل أحمال خارجية.',
  engineeringInterpretationEn: 'Results demonstrate that output voltage depends strictly on resistance ratios rather than absolute magnitudes. Setting R1 = R2 = 10 kΩ yields the exact same 5.00 V output but consumes 1/10th the idle current. The engineering trade-off is that small resistances waste quiescent power, whereas excessively large resistances make the node vulnerable to noise and loading distortion.',

  sourcesOfErrorAndLimitations: [
    'افتراض أن مصدر الجهد مثالي بدون مقاومة داخلية (Internal Resistance R_s = 0 Ω).',
    'افتراض أن المقاومات مثالية بدون تفاوت تصنيعي (Zero tolerance vs real ±5% or ±1% resistors).',
    'افتراض أن جهاز القياس يمتلك ممانعة دخل لا نهائية (Infinite Input Impedance) بحيث لا يسحب تياراً من العقدة.',
    'إهمال التأثير الحراري وتغير المقاومة مع ارتفاع درجة الحرارة (Temperature Coefficient).'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'Assumed an ideal voltage source with zero internal resistance (Rs = 0 Ω).',
    'Assumed nominal resistor values without manufacturing tolerance (0% vs real ±1% / ±5%).',
    'Assumed ideal measuring instruments with infinite input impedance drawing zero current.',
    'Neglected thermal drift and temperature coefficient of resistance.'
  ],

  whatILearned: [
    'تعلمت كيف يحكم قانون أوم وقوانين التوالي توزيع الجهد عبر المكونات بنسب دقيقة.',
    'فهمت كيفية صياغة توقع مسبق قبل فتح المحاكي ومطابقته رقمياً مع نتائج القياس.',
    'أدركت أن مجزئ الجهد مفيد للإشارات والمراجع فقط، ولا يصلح كمصدر قدرة للأجهزة لأنه يبدد طاقة حرارية مستمرة.'
  ],
  whatILearnedEn: [
    'Learned how Ohm\'s Law and series loop rules mathematically partition voltage according to resistance ratios.',
    'Mastered forming a hypothesis and theoretical prediction before opening the simulator to verify against recorded data.',
    'Recognized that resistive dividers are meant for signals and reference voltages, not power supply delivery.'
  ],

  whatIWouldStudyNext: [
    'تأثير الحمل الخارجي (Loading Effect): توصيل مقاومة حمل R_load بالتوازي مع R2 وملاحظة هبوط الجهد.',
    'دراسة متبوعة بمكبر العمليات العازل (Op-Amp Voltage Follower / Buffer) لعزل نقطة الخرج.',
    'بناء الدائرة عملياً على لوحة تجارب (Breadboard) ومقارنة قراءة ملتيميتر حقيقي مع المحاكاة والحساب النظري.'
  ],
  whatIWouldStudyNextEn: [
    'Investigate the loading effect by attaching a load resistor in parallel with R2 to observe voltage sag.',
    'Study how an operational amplifier voltage follower (buffer) eliminates loading error.',
    'Assemble the circuit physically on a breadboard to measure real-world resistor tolerance deviations.'
  ],

  completionChecklist: [
    { task: 'حساب الحالات الأربع يدوياً على الورق بالقوانين المحددة', taskEn: 'Calculate all 4 cases manually on paper with exact formulas', checked: true },
    { task: 'بناء الدائرة في محاكي Falstad وتوصيل التأريض ومجسات القياس', taskEn: 'Build schematic in Falstad with ground and measurement probes', checked: true },
    { task: 'تسجيل قراءات الجهد والتيار لكل حالة من الحالات الأربع', taskEn: 'Record simulated voltage and current for all 4 test cases', checked: true },
    { task: 'إنشاء جدول المقارنة وحساب نسبة الاختلاف المئوية', taskEn: 'Generate comparison table and compute percentage differences', checked: true },
    { task: 'رسم المنحنى البياني لنسبة R2/R1 مقابل Vout', taskEn: 'Plot resistance ratio vs output voltage curve', checked: true },
    { task: 'كتابة التفسير الهندسي ومصادر الخطأ', taskEn: 'Document engineering interpretation and model limitations', checked: true }
  ],

  sources: [
    { title: 'OpenStax University Physics Vol 2 - Chapter 10: DC Circuits', source: 'OpenStax College (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel' },
    { title: 'Falstad Interactive Circuit Simulator', source: 'Paul Falstad Educational Web Tools', url: 'https://www.falstad.com/circuit/' },
    { title: 'Voltage Divider Tutorial & Applications', source: 'MIT OpenCourseWare - Circuits and Electronics (6.002)', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
  ],

  // Legacy mappings for full compatibility
  objective: 'التحقق الرياضي والعملي عبر المحاكاة من كيفية تجزئة جهد المصدر المستمر (10V) بين مقاومتين، وإثبات تأثير نسبة المقاومات على جهد الخرج بدقة.',
  objectiveEn: 'Mathematically calculate and simulate how a 10V DC source is divided across resistors, proving how resistance ratios govern midpoint output voltage.',
  engineeringConcept: 'مجزئ الجهد هو دائرة خطية بسيطة تحول جهداً مرتفعاً إلى جهد منخفض بنسبة ثابتة تحكمها قيم المقاومات، وهو الأساس لقراءة الحساسات التناظرية والجهود المرجعية.',
  engineeringConceptEn: 'A voltage divider is a foundational linear circuit producing an output voltage that is a fraction of its input, essential for reference voltage biasing and analog sensors.',
  theory: 'عند توصيل مقاومتين R1 و R2 على التوالي بمصدر جهد مستمر Vs، يمر نفس التيار I عبر كل من المقاومتين وفق قانون أوم: Vout = Vs × (R2 / (R1 + R2)).',
  theoryEn: 'When two resistors R1 and R2 are wired in series across Vs, the exact same current flows through both per Ohm\'s Law: Vout = Vs × (R2 / (R1 + R2)).',
  technicalSummary: {
    input: 'Vs = 10.0 V DC (مصدر مستمر)',
    inputEn: 'Vs = 10.0 V DC (Ideal Source)',
    components: 'R1 = 1.0 kΩ, R2 = 1.0 kΩ (الحالة الأساسية)',
    componentsEn: 'R1 = 1.0 kΩ, R2 = 1.0 kΩ (Baseline)',
    calculatedResult: 'R_total = 2.0 kΩ, I = 5.0 mA, Vout = 5.00 V',
    calculatedResultEn: 'R_total = 2.0 kΩ, I = 5.0 mA, Vout = 5.00 V',
    simulatedResult: 'Simulation Result: I = 5.000 mA, Vout = 5.000 V (Falstad)',
    simulatedResultEn: 'Simulation Result: I = 5.000 mA, Vout = 5.000 V (Falstad)'
  }
};
