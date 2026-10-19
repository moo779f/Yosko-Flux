import { EngineeringProject } from './types';

export const project02: EngineeringProject = {
  id: 'project-02-kirchhoff-laws',
  projectNumber: 'PROJECT 02',
  numberInt: 2,
  title: 'قوانين كيرشوف: حل وتوزيع الجهود والتيارات في الدوائر متعددة المسارات',
  titleEn: 'Kirchhoff\'s Laws: Solving a Circuit With Multiple Paths',
  subtitle: 'التحقق الحسابي والمحاكاتي لقانون كيرشوف للتيار (KCL) عند العقد وقانون الجهد (KVL) في الحلقات المغلقة',
  subtitleEn: 'Mathematical and simulation verification of Kirchhoff\'s Current Law (KCL) at nodes and Voltage Law (KVL) around loops',
  engineeringQuestion: 'كيف يُستخدم قانونا كيرشوف للتيار (KCL) والجهد (KVL) لتحديد التيارات والجهود المجهولة في شبكة دوائر كهربائية متعددة المسارات؟',
  engineeringQuestionEn: 'How can Kirchhoff\'s Current Law and Voltage Law be used to determine unknown currents and voltages in a circuit with multiple paths?',
  whyItMatters: 'لا تتكون الدوائر الهندسية الحقيقية من حلقة واحدة بسيطة؛ بل من شبكات معقدة تتفرع فيها المسارات وتتداخل فيها مصادر الطاقة والمقاومات. قوانين كيرشوف (المشتقة من مبادئ حفظ الشحنة وحفظ الطاقة الأساسية في الفيزياء) هي الأداة الرياضية العالمية لحل أي شبكة خطية وتحديد التيارات في كل فرع والجهود عند كل عقدة.',
  whyItMattersEn: 'Practical engineering systems are multi-loop networks rather than single-component loops. Kirchhoff\'s Laws, rooted in fundamental conservation of charge and energy, provide the universal analytical bedrock for node-voltage and mesh-current circuit analysis.',
  difficulty: 'Foundation',
  difficultyAr: 'المستوى الأساسي',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Falstad Circuit Simulator', 'Scientific Calculator', 'KCL & KVL Matrix Solver'],
  concepts: ['قانون كيرشوف للتيار (KCL)', 'قانون كيرشوف للجهد (KVL)', 'تفرع التوازي (Parallel Branches)', 'حفظ الشحنة والطاقة'],
  conceptsEn: ['Kirchhoff\'s Current Law (KCL)', 'Kirchhoff\'s Voltage Law (KVL)', 'Parallel Branches', 'Conservation of Charge & Energy'],

  prerequisites: [
    {
      name: 'العقدة الكهربائية (Circuit Node)',
      nameEn: 'Circuit Node',
      description: 'نقطة اتصال تلتقي فيها نهايات عنصرين أو أكثر في الدائرة الكهربائية.',
      descriptionEn: 'A connection point or junction where two or more circuit branches meet.'
    },
    {
      name: 'الحلقة المغلقة (Closed Loop / Mesh)',
      nameEn: 'Closed Loop / Mesh',
      description: 'أي مسار مغلق متصل يبدأ من عقدة وينتهي عند نفس العقدة دون المرور بأي عقدة مرتين.',
      descriptionEn: 'Any continuous conducting closed path starting and ending at the same node.'
    },
    {
      name: 'مبدأ حفظ الشحنة الكهربائية',
      nameEn: 'Conservation of Electric Charge',
      description: 'الشحنات الكهربائية لا تفنى ولا تستحدث؛ أي شحنة تدخل إلى عقدة يجب أن تخرج منها.',
      descriptionEn: 'Charge can neither be created nor destroyed; total charge entering a junction must equal charge exiting.'
    },
    {
      name: 'مبدأ حفظ الطاقة الكهربائية',
      nameEn: 'Conservation of Electrical Energy',
      description: 'الطاقة التي يكتسبها التيار من المصدر تستهلك بالكامل في هبوط الجهد عبر مكونات الدائرة.',
      descriptionEn: 'The potential energy gained across energy sources is completely dissipated across circuit elements.'
    }
  ],

  componentsParameters: [
    { component: 'مصدر جهد مستمر رئيسي (DC Source)', componentEn: 'DC Main Voltage Source (Vs)', value: '12.0 V', purpose: 'تغذية شبكة التوازي والتوالي بجهد مستمر ثابت', purposeEn: 'Feeds both parallel and series test topologies' },
    { component: 'مقاوم الفرع الأول (Resistor R1)', componentEn: 'Branch 1 Resistor (R1)', value: '1.0 kΩ (1000 Ω)', purpose: 'الفرع الأول ذو المقاومة المنخفضة الذي يمرر تياراً أكبر', purposeEn: 'Low-impedance branch drawing higher current' },
    { component: 'مقاوم الفرع الثاني (Resistor R2)', componentEn: 'Branch 2 Resistor (R2)', value: '2.0 kΩ (2000 Ω)', purpose: 'الفرع الثاني ذو المقاومة المضاعفة الذي يمرر نصف تيار الفرع الأول', purposeEn: 'Higher impedance branch drawing half the current' },
    { component: 'أميترات قياس التيار (Inline Ammeters)', componentEn: 'Inline Ammeters', value: '3 أجهزة افتراضية', purpose: 'قياس التيار الكلي Itot وتياري الفرعين I1 و I2 للتحقق من KCL', purposeEn: 'Measures Itot, I1, and I2 to verify ΣIin = ΣIout' }
  ],

  diagram: {
    ascii: `
CIRCUIT 1: KCL PARALLEL BRANCHES (ΣIin = ΣIout)
                 ┌───[ Ammeter 1: I1 ]───[ R1 = 1 kΩ ]───┐
                 │                                       │
  +12V Source ───● (Node A)                             ● (Node B) ─── GND
    [ Itot ]     │                                       │
                 └───[ Ammeter 2: I2 ]───[ R2 = 2 kΩ ]───┘

CIRCUIT 2: KVL SERIES LOOP (ΣV = 0)
  +12V Source ───[ R1 = 1 kΩ (ΔV1=4V) ]───[ R2 = 2 kΩ (ΔV2=8V) ]─── GND (0V)
`,
    diagramType: 'kirchhoff_circuit',
    description: 'دائرتان مستقلتان: الدائرة الأولى تمثل فرعين متوازيين متصلين بجهد 12V لاختبار KCL، والدائرة الثانية تمثل حلقة توالي لاختبار KVL.',
    descriptionEn: 'Two test circuits: Circuit 1 has two parallel branches across 12V for KCL, and Circuit 2 forms a series loop for KVL.'
  },

  mathematicalModel: {
    summary: 'قانون كيرشوف للتيار ينص على أن المجموع الجبري للتيارات عند أي عقدة يساوي صفراً (ΣI_in = ΣI_out). قانون كيرشوف للجهد ينص على أن المجموع الجبري لفروق الجهد في أي مسار مغلق يساوي صفراً (ΣV = 0).',
    summaryEn: 'KCL states that the algebraic sum of currents entering any node equals currents leaving (ΣI_in = ΣI_out). KVL dictates that the algebraic sum of all potential changes around a closed loop is zero (ΣV = 0).',
    equations: [
      {
        name: 'قانون كيرشوف للتيار (KCL)',
        nameEn: 'Kirchhoff\'s Current Law (KCL)',
        formula: '\\sum I_{in} = \\sum I_{out} \\implies I_{tot} = I_1 + I_2',
        variableDefinitions: [
          { variable: 'I_{tot}', meaning: 'التيار الكلي الصادر من المصدر', meaningEn: 'Total current from power source', unit: 'A' },
          { variable: 'I_1', meaning: 'التيار المتدفق عبر الفرع الأول R1', meaningEn: 'Current flowing through branch 1', unit: 'A' },
          { variable: 'I_2', meaning: 'التيار المتدفق عبر الفرع الثاني R2', meaningEn: 'Current flowing through branch 2', unit: 'A' }
        ]
      },
      {
        name: 'تيارات الفروع بالتوازي',
        nameEn: 'Parallel Branch Currents',
        formula: 'I_1 = \\frac{V_s}{R_1}, \\quad I_2 = \\frac{V_s}{R_2}',
        variableDefinitions: [
          { variable: 'V_s', meaning: 'جهد المصدر المستمر (12 V)', meaningEn: 'Supply voltage (12 V)', unit: 'V' },
          { variable: 'R_1, R_2', meaning: 'مقاومتا الفرعين', meaningEn: 'Branch resistances', unit: 'Ω' }
        ]
      },
      {
        name: 'قانون كيرشوف للجهد في حلقة التوالي (KVL)',
        nameEn: 'Kirchhoff\'s Voltage Law (KVL)',
        formula: 'V_s - V_1 - V_2 = 0 \\implies V_s = I R_1 + I R_2',
        variableDefinitions: [
          { variable: 'V_s', meaning: 'جهد المصدر (+12 V)', meaningEn: 'Supply voltage (+12 V)', unit: 'V' },
          { variable: 'V_1, V_2', meaning: 'هبوط الجهد على R1 و R2 على التوالي', meaningEn: 'Voltage drops across R1 and R2', unit: 'V' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب تيار الفرع الأول بالتوازي (I1)',
      stepEn: '1. Calculate Branch 1 Current in Parallel Circuit (I1)',
      formula: 'I_1 = \\frac{V_s}{R_1}',
      substitution: 'I_1 = \\frac{12.0\\text{ V}}{1000\\,\\Omega}',
      result: '0.012',
      unit: 'A (12.0 mA)'
    },
    {
      step: '2. حساب تيار الفرع الثاني بالتوازي (I2)',
      stepEn: '2. Calculate Branch 2 Current in Parallel Circuit (I2)',
      formula: 'I_2 = \\frac{V_s}{R_2}',
      substitution: 'I_2 = \\frac{12.0\\text{ V}}{2000\\,\\Omega}',
      result: '0.006',
      unit: 'A (6.0 mA)'
    },
    {
      step: '3. حساب التيار الكلي عبر قانون كيرشوف للتيار (KCL)',
      stepEn: '3. Calculate Total Current via KCL (Itot = I1 + I2)',
      formula: 'I_{tot} = I_1 + I_2',
      substitution: 'I_{tot} = 12.0\\text{ mA} + 6.0\\text{ mA}',
      result: '18.0',
      unit: 'mA (0.018 A)'
    },
    {
      step: '4. حساب تيار الدائرة في حلقة التوالي لـ KVL (I_series)',
      stepEn: '4. Calculate Current for Series KVL Loop (I_series)',
      formula: 'I_{series} = \\frac{V_s}{R_1 + R_2}',
      substitution: 'I_{series} = \\frac{12.0\\text{ V}}{1000 + 2000\\,\\Omega} = \\frac{12}{3000}',
      result: '0.004',
      unit: 'A (4.0 mA)'
    },
    {
      step: '5. التحقق من قانون كيرشوف للجهد (KVL): V1 و V2',
      stepEn: '5. Verify Kirchhoff\'s Voltage Law (KVL): V1 and V2',
      formula: 'V_1 = I R_1, \\quad V_2 = I R_2, \\quad V_1 + V_2 = V_s',
      substitution: 'V_1 = 4\\text{mA} \\times 1\\text{k}\\Omega = 4.0\\text{V}; \\; V_2 = 4\\text{mA} \\times 2\\text{k}\\Omega = 8.0\\text{V} \\implies 4.0 + 8.0',
      result: '12.0',
      unit: 'V (Matches Vs exactly)'
    }
  ],

  predictionBeforeSimulation: 'قبل فتح المحاكي: في دائرة التوازي، الفرع الأقل مقاومة (1kΩ) سيسحب ضعف تيار الفرع الأكبر (2kΩ)، ومجموعهما يجب أن يساوي تيار السلك الرئيسي (18 mA). في دائرة التوالي، سيهبط 4V على المقاوم الأول و 8V على المقاوم الثاني، ومجموعهما يجب أن يساوي تماماً 12.0 V بدون أي متبقٍ.',
  predictionBeforeSimulationEn: 'Prediction before simulation: In parallel, branch 1 (1kΩ) will draw twice the current of branch 2 (2kΩ), summing to exactly 18 mA. In series, voltage drops will be 4.0V and 8.0V, summing strictly to 12.0V.',

  simulationSetup: {
    toolName: 'Falstad Circuit Simulator',
    simulatorUrl: 'https://www.falstad.com/circuit/',
    stepByStepProcedure: [
      'افتح محاكي Falstad عبر https://www.falstad.com/circuit/.',
      'بناء دائرة KCL: أضف مصدر جهد 12V مستمر (v).',
      'مد سلكاً إلى عقدة اتصال (Node A)، ثم فرع السلك إلى مسارين رأسيين.',
      'في المسار الأول، ضع مقاومة R1 = 1 kΩ وأميتر على التوالي معها.',
      'في المسار الثاني، ضع مقاومة R2 = 2 kΩ وأميتر على التوالي معها.',
      'اجمع نهايتي المسارين عند عقدة سفلية (Node B) متصلة بالقطب السالب والتأريض.',
      'ضع أميتر على السلك الرئيسي الخارج من المصدر لمشاهدة التيار الكلي Itot.',
      'بناء دائرة KVL: على نفس اللوحة جانباً، أضف مصدر 12V موصولاً على التوالي مع R1 (1kΩ) ثم R2 (2kΩ) والتأريض.',
      'قس الجهد عبر R1 والجهد عبر R2 باستخدام الفولتميتر.'
    ],
    stepByStepProcedureEn: [
      'Open Falstad Circuit Simulator at https://www.falstad.com/circuit/.',
      'Build KCL circuit: Insert a 12V DC source (press "v").',
      'Extend wire to junction Node A, splitting into two parallel branches.',
      'Insert branch 1 resistor R1 = 1 kΩ with an inline ammeter.',
      'Insert branch 2 resistor R2 = 2 kΩ with an inline ammeter.',
      'Recombine both branches at Node B, returning to negative terminal and ground.',
      'Insert a main inline ammeter directly exiting the 12V source.',
      'Build KVL circuit: Assemble a 12V source in series with R1 (1kΩ) and R2 (2kΩ) returning to ground.',
      'Place voltmeters across R1 and R2 to record individual drops.'
    ],
    measurementPoints: [
      'تيار الخط الرئيسي Itot عند مخرج مصدر 12V.',
      'تيار الفرع الأول I1 المار عبر R1 (1 kΩ).',
      'تيار الفرع الثاني I2 المار عبر R2 (2 kΩ).',
      'فرق الجهد V1 عبر طرفي R1 في دائرة التوالي.',
      'فرق الجهد V2 عبر طرفي R2 في دائرة التوالي.'
    ],
    measurementPointsEn: [
      'Main loop current Itot exiting 12V supply.',
      'Branch current I1 through R1 (1 kΩ).',
      'Branch current I2 through R2 (2 kΩ).',
      'Voltage drop V1 across R1 in series loop.',
      'Voltage drop V2 across R2 in series loop.'
    ],
    whatToChange: 'غير قيمة R2 من 2 kΩ إلى 1 kΩ أو 4 kΩ في كلتا الدائرتين، وراقب إعادة توزيع التيار في التوازي وهبوط الجهد في التوالي.',
    whatToChangeEn: 'Vary R2 from 2 kΩ to 1 kΩ or 4 kΩ in both topologies and observe current redistribution and voltage balancing.',
    whatToObserve: 'لاحظ أن مجموع التيارات في التوازي يتطابق دائماً مع التيار الكلي مهما تغيرت القيم، وأن مجموع الجهود في التوالي يساوي جهد المصدر دائماً.',
    whatToObserveEn: 'Observe that sum of parallel currents strictly equals source current, and sum of series drops strictly equals supply voltage.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'الحساب النظري اليدوي', titleEn: 'Hand Derivation', instruction: 'احسب I1 = 12V/1kΩ و I2 = 12V/2kΩ و Itot = I1+I2. ثم احسب V1 و V2 في التوالي على الورق.', instructionEn: 'Calculate I1, I2, Itot, V1, and V2 manually using Ohm\'s and Kirchhoff\'s laws.' },
    { stepNum: 2, title: 'بناء دائرة التوازي والتوالي في المحاكي', titleEn: 'Build Both Circuits in Falstad', instruction: 'نفذ المخططين في المحاكي وضع أجهزة القياس عند العقد والحلقات.', instructionEn: 'Construct both topologies in Falstad and place ammeters/voltmeters.' },
    { stepNum: 3, title: 'تشغيل المحاكاة', titleEn: 'Run Simulation', instruction: 'شغل المحاكي وسجل القراءات المستقرة للتيارات والجهود في جدول الملاحظات.', instructionEn: 'Run simulation and record steady-state readings into data table.' },
    { stepNum: 4, title: 'تسجيل قراءات الفروع', titleEn: 'Record Branch Readings', instruction: 'تحقق من قراءة الأميتر الرئيسي وقارنها بمجموع قراءات أميترات الفروع.', instructionEn: 'Verify main ammeter equals the algebraic sum of branch ammeters.' },
    { stepNum: 5, title: 'حساب نسبة الاختلاف المئوية', titleEn: 'Calculate Percentage Error', instruction: 'طبق معادلة نسبة الخطأ: |sim - theory| / theory × 100% لكل قراءة.', instructionEn: 'Calculate percentage difference: |sim - theory| / theory × 100%.' },
    { stepNum: 6, title: 'التحقق من مبدأ الحفظ', titleEn: 'Verify Conservation Principles', instruction: 'أثبت أن شحنة العقدة محفوظة (ΣIin = ΣIout) وأن طاقة الحلقة محفوظة (ΣV = 0).', instructionEn: 'Demonstrate charge conservation at nodes and energy conservation in loops.' },
    { stepNum: 7, title: 'تدوين التفسير الهندسي', titleEn: 'Write Engineering Summary', instruction: 'اشرح كيف تمثل قوانين كيرشوف الأساس لتحليل الدوائر الشبكية المعقدة.', instructionEn: 'Document how KCL/KVL form the mathematical basis for multi-loop networks.' }
  ],

  expectedResult: 'تطابق تام: تيار الفرع الأول 12.0 mA وتيار الفرع الثاني 6.0 mA والتيار الكلي 18.0 mA في التوازي. في التوالي V1 = 4.0 V و V2 = 8.0 V ومجموعهما 12.0 V بنسبة خطأ 0.0%.',
  expectedResultEn: 'Exact match: Branch 1 = 12.0 mA, Branch 2 = 6.0 mA, Total = 18.0 mA in parallel. In series, V1 = 4.0 V, V2 = 8.0 V, sum = 12.0 V with 0.0% error.',

  comparisonTable: [
    {
      parameter: 'تيار الفرع 1 بالتوازي (I1)',
      parameterEn: 'Parallel Branch 1 Current (I1)',
      theoretical: '12.00 mA',
      simulated: '12.000 mA',
      difference: '0.000 mA',
      percentageError: '0.0%',
      unit: 'mA',
      notes: '12 V / 1 kΩ',
      notesEn: '12 V / 1 kΩ'
    },
    {
      parameter: 'تيار الفرع 2 بالتوازي (I2)',
      parameterEn: 'Parallel Branch 2 Current (I2)',
      theoretical: '6.00 mA',
      simulated: '6.000 mA',
      difference: '0.000 mA',
      percentageError: '0.0%',
      unit: 'mA',
      notes: '12 V / 2 kΩ',
      notesEn: '12 V / 2 kΩ'
    },
    {
      parameter: 'التيار الكلي بالتوازي (Itot)',
      parameterEn: 'Total Parallel Current (Itot)',
      theoretical: '18.00 mA',
      simulated: '18.000 mA',
      difference: '0.000 mA',
      percentageError: '0.0%',
      unit: 'mA',
      notes: 'إثبات KCL: 12 + 6 = 18 mA',
      notesEn: 'KCL verified: 12 + 6 = 18 mA'
    },
    {
      parameter: 'هبوط الجهد V1 (حلقة التوالي)',
      parameterEn: 'Series Loop Drop V1 across R1',
      theoretical: '4.00 V',
      simulated: '4.000 V',
      difference: '0.000 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: '4 mA × 1 kΩ',
      notesEn: '4 mA × 1 kΩ'
    },
    {
      parameter: 'هبوط الجهد V2 (حلقة التوالي)',
      parameterEn: 'Series Loop Drop V2 across R2',
      theoretical: '8.00 V',
      simulated: '8.000 V',
      difference: '0.000 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: '4 mA × 2 kΩ',
      notesEn: '4 mA × 2 kΩ'
    },
    {
      parameter: 'مجموع جهود الحلقة (V1 + V2)',
      parameterEn: 'Sum of Series Drops (V1 + V2)',
      theoretical: '12.00 V',
      simulated: '12.000 V',
      difference: '0.000 V',
      percentageError: '0.0%',
      unit: 'V',
      notes: 'إثبات KVL: 4 + 8 = 12 V = Vs',
      notesEn: 'KVL verified: 4 + 8 = 12 V = Vs'
    }
  ],

  graphs: [
    {
      id: 'proj02-parallel-current-split',
      title: 'توزيع التيارات عند العقدة بالتوازي وفق قانون كيرشوف للتيار (KCL)',
      titleEn: 'KCL Node Current Split: Branch 1 vs Branch 2 vs Total',
      xAxisLabel: 'المسار المقاس',
      xAxisLabelEn: 'Measurement Branch',
      yAxisLabel: 'شدة التيار (mA)',
      yAxisLabelEn: 'Current (mA)',
      dataPoints: [
        { x: 'الفرع 1 (1kΩ)', y: 12.0, label: 'I1 = 12.0 mA' },
        { x: 'الفرع 2 (2kΩ)', y: 6.0, label: 'I2 = 6.0 mA' },
        { x: 'الخط الرئيسي', y: 18.0, label: 'Itot = 18.0 mA (KCL Sum)' }
      ],
      notes: 'يوضح الرسم كيف ينقسم التيار الكلي عند العقدة بنسبة عكسية مع المقاومات، ثم يجتمع مجدداً ليحافظ على الشحنة.',
      notesEn: 'Graph shows total current splitting inversely proportional to resistance and recombining downstream.'
    }
  ],

  engineeringInterpretation: 'تؤكد النتائج أن التيار الكهربائي يسلك جميع المسارات المتاحة بالتوازي، ولكن بكميات تتناسب عكسياً مع مقاومة كل فرع: الفرع الأول بمقاومة 1kΩ سحب ضعف تيار الفرع الثاني (12 mA مقابل 6 mA). هذا المفهوم حيوي في شبكات التوزيع الكهربائية المنزلية، حيث توصل جميع الأجهزة بالتوازي على جهد 220V/110V ثابتاً، وكل جهاز يسحب تياراً يتحدد بقدرته ومقاومته دون التأثير على عمل الأجهزة الأخرى. في التوالي، أثبتت التجربة أن الجهد ينقسم بينما يبقى التيار ثابتاً، وهو سبب استخدام التوالي في دوائر الحماية والمصاهر (Fuses).',
  engineeringInterpretationEn: 'Results demonstrate that current takes all parallel paths simultaneously, distributing inversely proportional to resistance. This underpins domestic utility wiring where appliances operate in parallel under fixed voltage, each drawing current independently. Conversely, the series loop proves uniform current and partitioned voltage, governing fuse and protection breaker designs.',

  sourcesOfErrorAndLimitations: [
    'المحاكي يفترض أسلاك توصيل مثالية بمقاومة صفرية (Wire Resistance Rw = 0 Ω). في الشبكات الحقيقية، هبوط الجهد على الأسلاك الطويلة يغير التوزيع قليلاً.',
    'افتراض أن أجهزة الأميتر تمتلك مقاومة داخلية صفرية تماماً (Zero Shunt Resistance). في الواقع، يمتلك الأميتر مقاومة تحويلية صغيرة تسبب هبوط جهد طفيف.',
    'افتراض عدم وجود ضوضاء أو تداخل كهرومغناطيسي على العقد.',
    'إهمال التأثير الحراري على قيم المقاومات أثناء مرور التيار.'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'Assumed ideal zero-resistance copper conductors; real long cables introduce parasitic wire drops.',
    'Assumed ideal ammeters with zero internal shunt impedance.',
    'Assumed pure DC state devoid of electromagnetic interference at junction nodes.',
    'Neglected Joule self-heating (P = I²R) altering resistance values.'
  ],

  whatILearned: [
    'فهمت المعنى الفيزيائي لقانون كيرشوف للتيار (KCL): العقدة لا تخزن شحنات ولا تولدها، لذلك المجموع دائماً صفر.',
    'فهمت المعنى الفيزيائي لقانون كيرشوف للجهد (KVL): الجهد الكهربائي هو طاقة لكل وحدة شحنة، وإذا درت حلقة كاملة وعدت لنفس النقطة فإن التغير الصافي في الطاقة صفر.',
    'تعلمت كيفية قياس التيارات على فروع متعددة في المحاكي وتطبيق معادلة نسبة الخطأ |sim - theory| / theory × 100% بدقة.'
  ],
  whatILearnedEn: [
    'Grasped the physical intuition of KCL: nodes cannot store or create charge, enforcing ΣIin = ΣIout.',
    'Understood KVL as energy conservation per unit charge: moving around a complete loop returns net potential change to zero.',
    'Practiced measuring multi-branch currents in simulation and systematically evaluating error percentages.'
  ],

  whatIWouldStudyNext: [
    'تطبيق طريقة جهد العقد (Nodal Analysis) وطريقة تيارات الحلقات (Mesh Current Method) على شبكات ثلاثية الحلقات.',
    'حل دوائر الجسور المقاومية (Wheatstone Bridge) التي لا يمكن تبسيطها بتوالي وتوازي بسيط وتحتاج لقوانين كيرشوف الصريحة.',
    'دراسة مبرهنة ثيفينين ونورتون (Thevenin & Norton Theorems) لتبسيط الشبكات المعقدة إلى مصدر واحد ومقاومة واحدة.'
  ],
  whatIWouldStudyNextEn: [
    'Formulate formal Nodal Analysis and Mesh Current matrix equations for three-loop networks.',
    'Solve Wheatstone Bridge circuits where simple series/parallel reduction fails.',
    'Investigate Thevenin and Norton equivalent circuits to reduce complex multi-branch systems to a single equivalent source.'
  ],

  completionChecklist: [
    { task: 'اشتقاق تيارات فرعي التوازي I1 و I2 وتيار المصدر Itot يدوياً', taskEn: 'Derive parallel branch currents I1, I2, and Itot manually', checked: true },
    { task: 'اشتقاق هبوط الجهد V1 و V2 في حلقة التوالي يدوياً', taskEn: 'Derive series loop drops V1 and V2 manually', checked: true },
    { task: 'بناء كلا الدائرتين في محاكي Falstad ووضع أميترات وفولتميترات القياس', taskEn: 'Construct both circuits in Falstad with ammeters and voltmeters', checked: true },
    { task: 'تسجيل نتائج المحاكاة وتأكيد تطابق ΣIin مع ΣIout و ΣV مع Vs', taskEn: 'Record simulation results and verify KCL and KVL sums', checked: true },
    { task: 'إعداد جدول مقارنة النتائج وحساب نسبة الاختلاف المئوية لكل معيار', taskEn: 'Assemble results comparison table with percentage differences', checked: true },
    { task: 'كتابة التفسير الهندسي لشبكات التوزيع ومصادر الخطأ', taskEn: 'Document engineering interpretation and physical limitations', checked: true }
  ],

  sources: [
    { title: 'OpenStax University Physics Vol 2 - Chapter 10: Kirchhoff\'s Rules', source: 'OpenStax College (Rice University)', url: 'https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules' },
    { title: 'Falstad Circuit Simulator - Kirchhoff Laws Example', source: 'Paul Falstad Educational Web Tools', url: 'https://www.falstad.com/circuit/' },
    { title: 'MIT 6.002 Circuit Analysis & Kirchhoff\'s Laws', source: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
  ],

  // Legacy mappings for full compatibility
  objective: 'التحقق الرياضي والمحاكاتي من قوانين كيرشوف للتيار (KCL) والجهد (KVL) في دوائر التوازي والتوالي.',
  objectiveEn: 'Mathematically derive and computationally verify KCL and KVL across parallel branches and series loops.',
  engineeringConcept: 'قوانين كيرشوف هي الركيزة الأساسية لحل أي شبكة دوائر كهربائية عبر معادلات حفظ الشحنة وحفظ الطاقة.',
  engineeringConceptEn: 'Kirchhoff\'s Laws are the cornerstone for solving any multi-loop circuit network based on charge and energy conservation.',
  theory: 'ينص KCL على أن مجموع التيارات الداخلة إلى عقدة يساوي مجموع التيارات الخارجة منها. وينص KVL على أن مجموع فروق الجهد في أي حلقة مغلقة يساوي صفراً.',
  theoryEn: 'KCL states that sum of currents entering a node equals sum exiting. KVL states that the algebraic sum of voltages around any closed loop equals zero.',
  technicalSummary: {
    input: 'Vs = 12.0 V DC (مصدر تيار مستمر)',
    inputEn: 'Vs = 12.0 V DC (DC Power Supply)',
    components: 'R1 = 1.0 kΩ, R2 = 2.0 kΩ, 3 أجهزة أميتر وفولتميتر',
    componentsEn: 'R1 = 1.0 kΩ, R2 = 2.0 kΩ, inline ammeters and voltmeters',
    calculatedResult: 'KCL: I1=12mA, I2=6mA, Itot=18mA | KVL: V1=4V, V2=8V, Vtot=12V',
    calculatedResultEn: 'KCL: I1=12mA, I2=6mA, Itot=18mA | KVL: V1=4V, V2=8V, Vtot=12V',
    simulatedResult: 'Simulation Result: Itot = 18.000 mA, V1 = 4.000 V, V2 = 8.000 V (Falstad)',
    simulatedResultEn: 'Simulation Result: Itot = 18.000 mA, V1 = 4.000 V, V2 = 8.000 V (Falstad)'
  }
};
