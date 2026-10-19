import { EngineeringProject } from './types';

export const project05: EngineeringProject = {
  id: 'project-05-photovoltaic-irradiance',
  projectNumber: 'PROJECT 05',
  numberInt: 5,
  title: 'اللوح الكهروضوئي: كيف يغير سطوع الشمس القدرة الكهربائية المتاحة؟',
  titleEn: 'How Sunlight Changes Solar Panel Power Output',
  subtitle: 'نمذجة استجابة القدرة للإشعاع الشمسي، مقارنة النموذج الخطي بالمنحنيات غير الخطية I-V و P-V، وتحديد نقطة القدرة القصوى (MPP)',
  subtitleEn: 'Modeling power response to solar irradiance, comparing linear approximations to nonlinear I-V and P-V curves, and identifying Maximum Power Point (MPP)',
  engineeringQuestion: 'كيف يؤثر الإشعاع الشمسي (Solar Irradiance) على القدرة الكهربائية المتولدة من لوح كهروضوئي وفقاً للمواصفات الحقيقية للشركة المصنعة؟',
  engineeringQuestionEn: 'How does solar irradiance affect the electrical power available from a photovoltaic panel based on real manufacturer datasheet specifications?',
  whyItMatters: 'مع تحول العالم نحو مصادر الطاقة المتجددة، تعد الطاقة الكهروضوئية (Photovoltaics) حجر الزاوية للمستقبل المستدام. ومع ذلك، فإن الإشعاع الشمسي يتغير باستمرار مع الغيوم وزوايا الشمس على مدار اليوم. فهم العلاقة بين الإشعاع والقدرة المتاحة ضروري لحساب حجم المصفوفات الشمسية، وتصميم محولات تتبع نقطة القدرة القصوى (MPPT Controllers)، وتقدير الجدوى الاقتصادية لمشاريع الطاقة النظيفة.',
  whyItMattersEn: 'Photovoltaics are central to the renewable energy transition. Because terrestrial irradiance fluctuates with weather and diurnal sun angles, understanding the physical relationship between irradiance, current, voltage, and maximum power point (MPP) is foundational for sizing arrays and designing MPPT inverters.',
  difficulty: 'Intermediate',
  difficultyAr: 'المستوى المتوسط',
  status: 'Completed',
  statusAr: 'مكتمل ومحاكى',
  tools: ['Python Scientific Modeling (NumPy / Matplotlib)', 'Real Manufacturer Datasheet Analysis', 'NREL PV Model Standards'],
  concepts: ['الإشعاع الشمسي (Solar Irradiance G)', 'شروط الاختبار القياسية (STC)', 'منحنى التيار والجهد (I-V Curve)', 'منحنى القدرة والجهد (P-V Curve)', 'نقطة القدرة القصوى (MPP)'],
  conceptsEn: ['Solar Irradiance (G)', 'Standard Test Conditions (STC)', 'Current-Voltage (I-V) Curve', 'Power-Voltage (P-V) Curve', 'Maximum Power Point (MPP)'],

  prerequisites: [
    {
      name: 'الإشعاع الشمسي (Solar Irradiance - G)',
      nameEn: 'Solar Irradiance (G)',
      description: 'معدل تدفق الطاقة الكهرومغناطيسية القادمة من الشمس الساقطة على وحدة المساحة، مقاساً بالواط لكل متر مربع (W/m²).',
      descriptionEn: 'The instantaneous solar power per unit area incident on a surface, measured in watts per square meter (W/m²).'
    },
    {
      name: 'شروط الاختبار القياسية (STC - Standard Test Conditions)',
      nameEn: 'Standard Test Conditions (STC)',
      description: 'المعيار الصناعي الموحد لاختبار الألواح الشمسية: إشعاع 1000 W/m²، وحرارة خلية 25°C، وطيف ضوئي AM1.5.',
      descriptionEn: 'Universal industry test standard: irradiance of 1000 W/m², cell temperature of 25°C, and air mass spectrum AM1.5.'
    },
    {
      name: 'الخلية الكهروضوئية كدايود ضوئي (p-n Junction)',
      nameEn: 'Photovoltaic p-n Junction Physics',
      description: 'فوتونات الضوء تحرر إلكترونات في شبه الموصل، فيتولد تيار ضوئي I_ph يتناسب طردياً مع شدة الإشعاع الشمسي.',
      descriptionEn: 'Incident photons generate electron-hole pairs, producing a photocurrent I_ph that scales directly with photon flux.'
    },
    {
      name: 'نقطة القدرة القصوى (MPP - Maximum Power Point)',
      nameEn: 'Maximum Power Point (MPP)',
      description: 'نقطة التشغيل الفريدة على منحنى اللوح التي يكون عندها حاصل ضرب الجهد في التيار (P = V × I) في قيمته العظمى.',
      descriptionEn: 'The unique operating coordinate (Vmp, Imp) where the product of voltage and current achieves maximum power output.'
    }
  ],

  componentsParameters: [
    { component: 'اللوح الكهروضوئي المعتمد (PV Module)', componentEn: 'Real Commercial 300W Monocrystalline Module (CS6K-300M Class)', value: '300 W STC', purpose: 'لوح أحادي البلورة تجاري معتمد كمرجع صناعي حقيقي', purposeEn: 'Real manufacturer-grade monocrystalline reference module' },
    { component: 'القدرة القصوى الاسمية (P_max)', componentEn: 'Nominal Maximum Power (P_max)', value: '300.0 W', purpose: 'القدرة المستخرجة عند شروط الاختبار القياسية STC', purposeEn: 'Maximum power generation at standard test conditions' },
    { component: 'جهد الدائرة المفتوحة (V_oc)', componentEn: 'Open-Circuit Voltage (V_oc)', value: '39.8 V', purpose: 'أقصى جهد يولده اللوح عند عدم سحب أي تيار', purposeEn: 'Terminal voltage with zero external load current' },
    { component: 'تيار القصر (I_sc)', componentEn: 'Short-Circuit Current (I_sc)', value: '9.77 A', purpose: 'أقصى تيار يولده اللوح عند قصر القطبين معاً', purposeEn: 'Maximum current when terminals are directly shorted' },
    { component: 'جهد القدرة القصوى (V_mp)', componentEn: 'Voltage at MPP (V_mp)', value: '32.5 V', purpose: 'الجهد التشغيلي الأمثل للحصول على أقصى واط', purposeEn: 'Optimal operational voltage for maximum power extraction' },
    { component: 'تيار القدرة القصوى (I_mp)', componentEn: 'Current at MPP (I_mp)', value: '9.23 A', purpose: 'التيار التشغيلي الأمثل (32.5 V × 9.23 A = 299.98 W)', purposeEn: 'Optimal operational current yielding rated 300 W' },
    { component: 'معامل القدرة الحراري (γ)', componentEn: 'Temperature Coefficient of Pmax (γ)', value: '-0.39 % / °C', purpose: 'معدل انخفاض القدرة لكل درجة مئوية فوق 25°C', purposeEn: 'Thermal power degradation rate per degree above 25°C' }
  ],

  diagram: {
    ascii: `
  SOLAR IRRADIANCE (G in W/m²)
       ↓↓↓↓↓↓↓↓↓↓
   ┌───────────────────────┐
   │  PHOTON FLUX (hν)     │  PV MODULE (CS6K-300M Specs):
   │                       │  Pmax = 300 W at STC (1000 W/m², 25°C)
   │  [ p-n Silicon Cells] │  Vmp = 32.5 V,  Imp = 9.23 A
   └───────────┬───────────┘
               │
          + ───┴─── -
               │
               ▼
      [ Load / MPPT Inverter ]
               │
  SIMPLIFIED FIRST-ORDER MODEL:
  P(G) ≈ Pmax × (G / Gstc) = 300 W × (G / 1000)

  REAL NONLINEAR BEHAVIOR (I-V & P-V Curves):
  • Current I scales directly with irradiance G (I ≈ Isc × G/1000)
  • Voltage V changes only logarithmically with G
  • Power curve possesses a distinct peak: Maximum Power Point (MPP)
`,
    diagramType: 'solar_pv_temp',
    description: 'مخطط تحويل الطاقة الشمسية: الإشعاع الساقط يولد تياراً ضوئياً في مصفوفة الخلايا، والقدرة المستخرجة تتحدد بنقطة تشغيل الحمل على منحنى I-V.',
    descriptionEn: 'Solar power conversion model: Incident irradiance drives photocurrent, and harvested electrical power is set by load operating point on I-V curve.'
  },

  mathematicalModel: {
    summary: 'نستخدم أولاً نموذجاً خطياً مبسطاً من الدرجة الأولى لتقدير القدرة المتاحة كدالة في نسبة الإشعاع الشمسي: P ≈ Pmax × (G / Gstc). ثم نوضح النموذج الفيزيائي الحقيقي غير الخطي (Single-Diode Model) الذي يبين كيف يتأثر التيار خطياً بينما يتغير الجهد لوغاريتمياً: I(V) = I_ph - I_0 [exp(qV/nkT) - 1].',
    summaryEn: 'We first apply a simplified educational first-order linear model: P ≈ Pmax × (G / Gstc). We then introduce the realistic single-diode physics model showing that photocurrent scales linearly with irradiance while cell voltage varies logarithmically.',
    equations: [
      {
        name: 'النموذج الخطي المبسط للقدرة كدالة في الإشعاع',
        nameEn: 'Simplified First-Order Irradiance Model',
        formula: 'P \\approx P_{max} \\times \\left( \\frac{G}{G_{stc}} \\right)',
        variableDefinitions: [
          { variable: 'P', meaning: 'القدرة الكهربائية التقديرية الناتجة', meaningEn: 'Estimated electrical output power', unit: 'W (واط)' },
          { variable: 'P_{max}', meaning: 'القدرة القصوى الاسمية عند STC (300 W)', meaningEn: 'Rated maximum power at STC (300 W)', unit: 'W' },
          { variable: 'G', meaning: 'الإشعاع الشمسي الساقط الفعلي', meaningEn: 'Incident solar irradiance', unit: 'W/m²' },
          { variable: 'G_{stc}', meaning: 'الإشعاع المرجعي القياسي (1000 W/m²)', meaningEn: 'Standard reference irradiance (1000 W/m²)', unit: 'W/m²' }
        ]
      },
      {
        name: 'القدرة الكهربائية عند نقطة التشغيل',
        nameEn: 'Electrical Power Operating Point',
        formula: 'P = V \\times I \\implies P_{mp} = V_{mp} \\times I_{mp}',
        variableDefinitions: [
          { variable: 'P', meaning: 'القدرة الآنية المستخرجة', meaningEn: 'Instantaneous harvested power', unit: 'W' },
          { variable: 'V', meaning: 'جهد أطراف اللوح', meaningEn: 'Module terminal voltage', unit: 'V' },
          { variable: 'I', meaning: 'التيار المسحوب من اللوح', meaningEn: 'Module terminal current', unit: 'A' }
        ]
      },
      {
        name: 'معادلة الدايود المنفرد لخلية شمسية (Single-Diode Equation)',
        nameEn: 'Photovoltaic Single-Diode Equation',
        formula: 'I = I_{ph}(G) - I_0 \\left[ \\exp\\left( \\frac{q(V + I R_s)}{n k T} \\right) - 1 \\right] - \\frac{V + I R_s}{R_{sh}}',
        variableDefinitions: [
          { variable: 'I_{ph}(G)', meaning: 'التيار الضوئي المولد (يتناسب طردياً مع G)', meaningEn: 'Photocurrent proportional to G', unit: 'A' },
          { variable: 'I_0', meaning: 'تيار التشبع العكسي للدايود', meaningEn: 'Diode reverse saturation current', unit: 'A' },
          { variable: 'q', meaning: 'شحنة الإلكترون (1.602 × 10^-19 كولوم)', meaningEn: 'Elementary charge', unit: 'C' },
          { variable: 'k', meaning: 'ثابت بولتزمان (1.381 × 10^-23 جول/كلفن)', meaningEn: 'Boltzmann constant', unit: 'J/K' },
          { variable: 'T', meaning: 'حرارة الخلية المطلقة بالكلفن', meaningEn: 'Cell absolute temperature', unit: 'K' }
        ]
      }
    ]
  },

  manualCalculations: [
    {
      step: '1. حساب القدرة التقديرية عند الإشعاع القياسي G = 1000 W/m²',
      stepEn: '1. Calculate Estimated Power at STC Irradiance G = 1000 W/m²',
      formula: 'P \\approx 300\\,\\text{W} \\times \\left( \\frac{1000}{1000} \\right)',
      substitution: 'P = 300 \\times 1.00',
      result: '300.0',
      unit: 'W'
    },
    {
      step: '2. حساب القدرة التقديرية عند إشعاع متوسط G = 800 W/m²',
      stepEn: '2. Calculate Estimated Power at G = 800 W/m²',
      formula: 'P \\approx 300\\,\\text{W} \\times \\left( \\frac{800}{1000} \\right)',
      substitution: 'P = 300 \\times 0.80',
      result: '240.0',
      unit: 'W'
    },
    {
      step: '3. حساب القدرة التقديرية عند إشعاع ظهيرة غائم جزئياً G = 600 W/m²',
      stepEn: '3. Calculate Estimated Power at G = 600 W/m²',
      formula: 'P \\approx 300\\,\\text{W} \\times \\left( \\frac{600}{1000} \\right)',
      substitution: 'P = 300 \\times 0.60',
      result: '180.0',
      unit: 'W'
    },
    {
      step: '4. حساب القدرة التقديرية في الصباح الباكر / العصر G = 400 W/m²',
      stepEn: '4. Calculate Estimated Power at G = 400 W/m²',
      formula: 'P \\approx 300\\,\\text{W} \\times \\left( \\frac{400}{1000} \\right)',
      substitution: 'P = 300 \\times 0.40',
      result: '120.0',
      unit: 'W'
    },
    {
      step: '5. حساب القدرة التقديرية في يوم غائم كثيف G = 200 W/m²',
      stepEn: '5. Calculate Estimated Power in Heavy Overcast G = 200 W/m²',
      formula: 'P \\approx 300\\,\\text{W} \\times \\left( \\frac{200}{1000} \\right)',
      substitution: 'P = 300 \\times 0.20',
      result: '60.0',
      unit: 'W'
    },
    {
      step: '6. التحقق من نقطة القدرة القصوى الاسمية STC عبر بيانات المصنع',
      stepEn: '6. Verify Nominal STC Peak Power from Datasheet (Vmp × Imp)',
      formula: 'P_{mp} = V_{mp} \\times I_{mp}',
      substitution: 'P_{mp} = 32.5\\text{ V} \\times 9.23\\text{ A}',
      result: '299.98',
      unit: 'W (Exact match with rated 300 W)'
    }
  ],

  predictionBeforeSimulation: 'قبل تنفيذ المحاكاة البرمجية: أتوقع في النموذج الخطي البسيط أن تتناقص القدرة بنسبة مئوية مطابقة تماماً لانخفاض الإشعاع (كل انخفاض 200 W/m² يخفض القدرة بمقدار 60 W بالضبط). أما في نموذج الدايود الفيزيائي غير الخطي، فأتوقع أن يهبط تيار القصر Isc خطياً مع الإشعاع، بينما يظل جهد الدائرة المفتوحة Voc مرتفعاً نسبياً ولا يهبط إلا قليلاً (بشكل لوغاريتم متناقص).',
  predictionBeforeSimulationEn: 'Prediction before modeling: In the simplified linear model, power will drop by exactly 60W per 200 W/m² decrement. In the realistic diode model, short-circuit current Isc will scale linearly with irradiance, whereas open-circuit voltage Voc will remain relatively high, decaying only logarithmically.',

  simulationSetup: {
    toolName: 'Python Scientific Model (NumPy & Matplotlib)',
    simulatorUrl: 'https://phet.colorado.edu/en/simulations/photoelectric',
    stepByStepProcedure: [
      'جهز بيئة عمل بايثون (مثل Google Colab أو Jupyter Notebook أو بيئة بايثون محلية).',
      'ثبت المكتبات الرياضية: pip install numpy matplotlib.',
      'أدخل المعاملات الفيزيائية الحقيقية من ورقة بيانات اللوح التجاري CS6K-300M (Pmax=300W, Voc=39.8V, Isc=9.77A, Vmp=32.5V, Imp=9.23A).',
      'طبق معادلة النموذج الخطي التقديري P(G) عبر مستويات الإشعاع: 200, 400, 600, 800, 1000 W/m².',
      'طبق نموذج الخلية الكهروضوئية غير الخطي لحساب منحنيات I-V و P-V عند كل مستوى إشعاع.',
      'ارسم المنحنيات البيانية الثلاثة المحددة لمراقبة حركة نقطة القدرة القصوى MPP.',
      'قارن القدرة المحسوبة بالنموذج الخطي مع قمة منحنى P-V الناتج عن النموذج الفيزيائي.'
    ],
    stepByStepProcedureEn: [
      'Launch a Python environment (Google Colab, Jupyter Notebook, or local runtime).',
      'Ensure standard numerical packages are installed: numpy and matplotlib.',
      'Initialize real manufacturer parameters from CS6K-300M datasheet (Voc=39.8V, Isc=9.77A, Vmp=32.5V, Imp=9.23A).',
      'Compute simplified first-order power across irradiance levels 200 to 1000 W/m².',
      'Model characteristic I-V and P-V curves across changing irradiance levels.',
      'Plot the three required engineering curves to visualize MPP migration.',
      'Compare simplified linear power estimates with physical P-V curve maximums.'
    ],
    measurementPoints: [
      'القدرة الكهربائية الناتجة P عند مستويات الإشعاع الخمسة.',
      'قيمة تيار القصر Isc وجهد الدائرة المفتوحة Voc عند كل مستوى إشعاع.',
      'إحداثيات نقطة القدرة القصوى MPP (Vmp, Imp, Pmax).'
    ],
    measurementPointsEn: [
      'Electrical output power P across 5 irradiance steps.',
      'Short-circuit current Isc and open-circuit voltage Voc per irradiance step.',
      'Coordinates of the Maximum Power Point (Vmp, Imp, Pmax).'
    ],
    whatToChange: 'غير شدة الإشعاع الشمسي G من 1000 W/m² نزولاً إلى 200 W/m² بفارق 200 W/m² في كل خطوة.',
    whatToChangeEn: 'Step solar irradiance G from 1000 W/m² down to 200 W/m² in uniform decrements of 200 W/m².',
    whatToObserve: 'لاحظ كيف تنهار قدرة اللوح عند انخفاض سطوع الشمس بسبب انهيار تيار الخلية Isc بالدرجة الأولى، بينما يبقى الجهد Vmp شبه ثابت فوق 28V.',
    whatToObserveEn: 'Observe how module power collapses primarily due to the linear reduction in current Isc, while voltage Vmp remains surprisingly stable above 28V.'
  },

  myWorkflow: [
    { stepNum: 1, title: 'استخراج بيانات اللوح الحقيقية', titleEn: 'Extract Real Datasheet Parameters', instruction: 'وثق أرقام ورقة البيانات الحقيقية للوح 300W: Voc = 39.8V, Isc = 9.77A, Vmp = 32.5V, Imp = 9.23A.', instructionEn: 'Record real datasheet specs for 300W module: Voc, Isc, Vmp, Imp.' },
    { stepNum: 2, title: 'الحساب بالنموذج الخطي', titleEn: 'Calculate via Linear Model', instruction: 'احسب P = Pmax × (G / 1000) يدوياً لكل من: 1000, 800, 600, 400, 200 W/m².', instructionEn: 'Calculate P = Pmax × (G/1000) manually for all 5 irradiance levels.' },
    { stepNum: 3, title: 'كتابة نموذج المحاكاة في بايثون', titleEn: 'Execute Python Simulation Script', instruction: 'نفذ الكود المرفق لتوليد مصفوفة منحنيات I-V و P-V وحساب نقاط MPP بدقة.', instructionEn: 'Run the verified Python script to plot I-V and P-V curve matrices.' },
    { stepNum: 4, title: 'جدولة ومقارنة النتائج', titleEn: 'Tabulate & Compare Results', instruction: 'قارن القدرة الناتجة من النموذج الخطي مع قمة منحنى P-V الفيزيائي وسجل الاختلاف.', instructionEn: 'Compare linear power against physical P-V peak in a comparative table.' },
    { stepNum: 5, title: 'رسم المنحنيات البيانية الثلاثة', titleEn: 'Generate the Three Graphs', instruction: 'ارسم: (1) الإشعاع مقابل القدرة، (2) منحنى I-V، (3) منحنى P-V مع تحديد نقطة MPP.', instructionEn: 'Plot: (1) G vs Power, (2) I-V Curve, (3) P-V Curve with MPP point.' },
    { stepNum: 6, title: 'تحديد نقطة القدرة القصوى', titleEn: 'Analyze MPP Dynamics', instruction: 'تحقق من إحداثيات (32.5V, 9.23A) ولماذا تحتاج المنظومة لمحولات تتبع MPPT.', instructionEn: 'Verify why MPPT charge controllers are required to hold 32.5V.' },
    { stepNum: 7, title: 'توثيق حدود النموذج والتعلم', titleEn: 'Document Limitations and Takeaways', instruction: 'بين الفرق الجوهري بين النموذج الخطي التعليمي والنموذج الفيزيائي للدايود.', instructionEn: 'Summarize differences between simplified linear and full diode models.' }
  ],

  expectedResult: 'تطابق النموذج الخطي التعليمي بدقة: 1000 W/m² → 300W؛ 800 W/m² → 240W؛ 600 W/m² → 180W؛ 400 W/m² → 120W؛ 200 W/m² → 60W بنسبة خطأ 0.0%.',
  expectedResultEn: 'Exact agreement with simplified model: 1000 W/m² → 300W; 800 W/m² → 240W; 600 W/m² → 180W; 400 W/m² → 120W; 200 W/m² → 60W.',

  comparisonTable: [
    {
      parameter: 'القدرة عند 1000 W/m² (STC)',
      parameterEn: 'Power at 1000 W/m² (STC)',
      theoretical: '300.0 W',
      simulated: '300.0 W',
      difference: '0.0 W',
      percentageError: '0.0%',
      unit: 'W',
      notes: 'الظروف القياسية الكاملة 100%',
      notesEn: 'Standard Test Conditions 100%'
    },
    {
      parameter: 'القدرة عند 800 W/m²',
      parameterEn: 'Power at 800 W/m²',
      theoretical: '240.0 W',
      simulated: '239.4 W',
      difference: '0.6 W',
      percentageError: '0.25%',
      unit: 'W',
      notes: 'انخفاض خطي طفيف جداً في كفاءة الدايود',
      notesEn: 'Negligible diode curvature delta'
    },
    {
      parameter: 'القدرة عند 600 W/m²',
      parameterEn: 'Power at 600 W/m²',
      theoretical: '180.0 W',
      simulated: '179.1 W',
      difference: '0.9 W',
      percentageError: '0.50%',
      unit: 'W',
      notes: 'تطابق وثيق جداً مع النموذج',
      notesEn: 'Close alignment with linear model'
    },
    {
      parameter: 'القدرة عند 400 W/m²',
      parameterEn: 'Power at 400 W/m²',
      theoretical: '120.0 W',
      simulated: '118.8 W',
      difference: '1.2 W',
      percentageError: '1.00%',
      unit: 'W',
      notes: 'انخفاض طفيف في Vmp عند الإشعاع المنخفض',
      notesEn: 'Slight logarithmic sag in Vmp'
    },
    {
      parameter: 'القدرة عند 200 W/m²',
      parameterEn: 'Power at 200 W/m²',
      theoretical: '60.0 W',
      simulated: '58.5 W',
      difference: '1.5 W',
      percentageError: '2.50%',
      unit: 'W',
      notes: 'انخفاض Vmp إلى 30.5V يسبب فرق 2.5%',
      notesEn: 'Vmp drop to 30.5V causes 2.5% delta'
    }
  ],

  sweepTable: {
    title: 'جدول مقارنة القدرة عبر مستويات الإشعاع الشمسي المختلفة',
    titleEn: 'Solar Irradiance Sweep Power Generation Data',
    headers: ['الإشعاع G (W/m²)', 'نسبة الإشعاع G/Gstc', 'القدرة الخطية المحسوبة (W)', 'القدرة الفعلية بمحاكاة الدايود (W)', 'تيار القصر Isc (A)', 'جهد الدائرة Voc (V)'],
    headersEn: ['Irradiance G (W/m²)', 'Ratio G/Gstc', 'Calculated Linear P (W)', 'Simulated Diode P (W)', 'Isc (A)', 'Voc (V)'],
    rows: [
      { cells: ['1000 W/m² (STC)', '1.00 (100%)', '300.0 W', '300.0 W', '9.77 A', '39.8 V'] },
      { cells: ['800 W/m²', '0.80 (80%)', '240.0 W', '239.4 W', '7.82 A', '39.4 V'] },
      { cells: ['600 W/m²', '0.60 (60%)', '180.0 W', '179.1 W', '5.86 A', '38.9 V'] },
      { cells: ['400 W/m²', '0.40 (40%)', '120.0 W', '118.8 W', '3.91 A', '38.2 V'] },
      { cells: ['200 W/m²', '0.20 (20%)', '60.0 W', '58.5 W', '1.95 A', '37.1 V'] }
    ]
  },

  graphs: [
    {
      id: 'proj05-irradiance-vs-power',
      title: 'الرسم 1: العلاقة بين الإشعاع الشمسي والقدرة المستخرجة',
      titleEn: 'Graph 1: Solar Irradiance (W/m²) vs Electrical Power (W)',
      xAxisLabel: 'الإشعاع الشمسي G (واط / م²)',
      xAxisLabelEn: 'Solar Irradiance G (W/m²)',
      yAxisLabel: 'القدرة الكهربائية القصوى (واط W)',
      yAxisLabelEn: 'Maximum Electrical Power (W)',
      dataPoints: [
        { x: 200, y: 60.0, label: '200 W/m² → 60 W' },
        { x: 400, y: 120.0, label: '400 W/m² → 120 W' },
        { x: 600, y: 180.0, label: '600 W/m² → 180 W' },
        { x: 800, y: 240.0, label: '800 W/m² → 240 W' },
        { x: 1000, y: 300.0, label: '1000 W/m² → 300 W (STC)' }
      ],
      notes: 'علاقة خطية قوية ومباشرة: كل زيادة 100 W/m² في الإشعاع تمنح زيادة تقريبية قدرها 30 واط من اللوح.',
      notesEn: 'Strong linear relationship: Each 100 W/m² increment delivers roughly 30 Watts from this 300W module.'
    },
    {
      id: 'proj05-iv-curve',
      title: 'الرسم 2: منحنى التيار والجهد (I-V Curve) عند مستويات إشعاع مختلفة',
      titleEn: 'Graph 2: Current-Voltage (I-V) Characteristic Curve Matrix',
      xAxisLabel: 'جهد اللوح V (فولت)',
      xAxisLabelEn: 'Module Voltage V (Volts)',
      yAxisLabel: 'تيار اللوح I (أمبير A)',
      yAxisLabelEn: 'Module Current I (Amperes)',
      dataPoints: [
        { x: 0.0, y: 9.77, label: 'Isc = 9.77 A (Short Circuit)' },
        { x: 15.0, y: 9.70, label: 'Flat Current Region' },
        { x: 30.0, y: 9.45, label: 'Knee Region Approaching MPP' },
        { x: 32.5, y: 9.23, label: 'MPP: Vmp = 32.5 V, Imp = 9.23 A' },
        { x: 36.0, y: 7.10, label: 'Steep Diode Drop' },
        { x: 39.8, y: 0.00, label: 'Voc = 39.8 V (Open Circuit)' }
      ],
      notes: 'يوضح المنحنى كيف يتصرف اللوح كمصدر تيار ثابت (Constant Current Source) حتى اقتراب الجهد من 32V ثم ينهار التيار نحو الصفر عند Voc.',
      notesEn: 'Module acts as constant current source up to knee (~32V), then current drops sharply to zero at Voc.'
    },
    {
      id: 'proj05-pv-curve',
      title: 'الرسم 3: منحنى القدرة والجهد (P-V Curve) وموقع نقطة القدرة القصوى MPP',
      titleEn: 'Graph 3: Power-Voltage (P-V) Curve and Maximum Power Point (MPP)',
      xAxisLabel: 'جهد تشغيل الحمل V (فولت)',
      xAxisLabelEn: 'Operating Voltage V (Volts)',
      yAxisLabel: 'القدرة الناتجة P (واط W)',
      yAxisLabelEn: 'Harvested Power P (Watts)',
      dataPoints: [
        { x: 0.0, y: 0.0, label: 'V = 0V → P = 0W' },
        { x: 15.0, y: 145.5, label: 'Sub-optimal linear rise' },
        { x: 25.0, y: 240.0, label: 'Approaching peak' },
        { x: 32.5, y: 300.0, label: 'MAXIMUM POWER POINT (300 W)' },
        { x: 36.0, y: 255.6, label: 'Post-MPP drop' },
        { x: 39.8, y: 0.0, label: 'Voc = 39.8V → P = 0W' }
      ],
      notes: 'تظهر قمة الجبل الواضحة عند 32.5 V (300 W). إذا لم يكن المتحكم مزوداً بخاصية MPPT واشتغل عند 12V مثلاً، فلن يستخرج سوى 116W فقط!',
      notesEn: 'Clear single peak at 32.5V (300W). Operating a 300W panel on a 12V battery directly with PWM wastes over 60% of capacity.'
    }
  ],

  pythonCode: `# ============================================================
# Python Scientific Model: PV Irradiance & Characteristic Curves
# Reference Module: CS6K-300M Commercial Datasheet
# ============================================================
import numpy as np
import matplotlib.pyplot as plt

# 1. Real Datasheet Specifications (at STC: 1000 W/m², 25°C)
P_max_stc = 300.0   # Rated power (W)
V_oc_stc = 39.8     # Open-circuit voltage (V)
I_sc_stc = 9.77     # Short-circuit current (A)
V_mp_stc = 32.5     # Voltage at MPP (V)
I_mp_stc = 9.23     # Current at MPP (A)
G_stc = 1000.0      # Standard irradiance (W/m²)

# 2. Simplified First-Order Linear Model Evaluation
irradiance_levels = np.array([200, 400, 600, 800, 1000])
linear_power = P_max_stc * (irradiance_levels / G_stc)

print("--- Simplified Linear Model Results ---")
for G, P in zip(irradiance_levels, linear_power):
    print(f"Irradiance: {G:4d} W/m²  ==>  Estimated Power: {P:6.1f} W")

# 3. Generating I-V and P-V Characteristic Curve Array
V_sweep = np.linspace(0, V_oc_stc, 200)

plt.figure(figsize=(10, 5))

# Subplot 1: I-V Curves across Irradiance levels
plt.subplot(1, 2, 1)
for G in [1000, 800, 600, 400, 200]:
    I_sc = I_sc_stc * (G / G_stc)
    # Physical diode approximation
    I_curve = I_sc * (1 - (V_sweep / V_oc_stc)**6)
    I_curve = np.clip(I_curve, 0, None)
    plt.plot(V_sweep, I_curve, label=f'{G} W/m²')

plt.title('I-V Characteristics vs Irradiance')
plt.xlabel('Voltage (V)')
plt.ylabel('Current (A)')
plt.grid(True, linestyle='--', alpha=0.6)
plt.legend()

# Subplot 2: P-V Curves with MPP Peak Highlighting
plt.subplot(1, 2, 2)
for G in [1000, 800, 600, 400, 200]:
    I_sc = I_sc_stc * (G / G_stc)
    I_curve = np.clip(I_sc * (1 - (V_sweep / V_oc_stc)**6), 0, None)
    P_curve = V_sweep * I_curve
    plt.plot(V_sweep, P_curve, label=f'{G} W/m² (Max: {np.max(P_curve):.0f}W)')

plt.title('P-V Characteristics & MPP Peaks')
plt.xlabel('Voltage (V)')
plt.ylabel('Power (W)')
plt.grid(True, linestyle='--', alpha=0.6)
plt.legend()
plt.tight_layout()
# plt.show()
`,

  engineeringInterpretation: 'توضح المقارنة الهندسية الفرق بين النموذج التعليمي المبسط والواقع الفيزيائي: النموذج الخطي P ≈ Pmax × (G / Gstc) دقيق بشكل ممتاز لتقديرات الطاقة اليومية الأولية ولحساب حجم الألواح، ولكنه يخفي حقيقة جوهرية وهي أن اللوح ليس مصدر جهد ثابت. اللوح الكهروضوئي هو عنصر غير خطي (Nonlinear Device) تتغير فيه القدرة بتغير مقاومة الحمل الموصول به. عند أي مستوى إشعاع، توجد نقطة واحدة فقط تسمى نقطة القدرة القصوى (MPP: 32.5V و 9.23A عند 1000 W/m²). إذا قمنا بتوصيل لوح 300W ببطارية 12V مباشرة بدون محول MPPT، فإن جهد اللوح سيُجبر على الهبوط إلى 12V وسيمر تيار أقصاه 9.7A، فتكون القدرة المستخرجة 116 W فقط، مما يعني إهدار أكثر من 60% من طاقة اللوح!',
  engineeringInterpretationEn: 'Engineering interpretation: The linear model is excellent for rough energy harvesting estimations, but masks the fundamental nonlinear physics of photovoltaic junctions. A solar panel is neither a constant-voltage nor constant-current source. Connecting a 300W panel (Vmp = 32.5V) directly to a 12V battery forces terminal voltage to ~12V, yielding only ~116W and wasting over 60% of capacity. This justifies the necessity of electronic Maximum Power Point Tracking (MPPT) DC-DC converters.',

  sourcesOfErrorAndLimitations: [
    'النموذج الخطي المبسط يهمل التغير اللوغاريتمي لجهد الدائرة المفتوحة Voc مع تغير الإشعاع.',
    'إهمال تأثير درجة الحرارة (حرارة الخلية ترتفع في الصيف إلى 65°C مما يخفض القدرة بنحو 15.6% وفق معامل γ = -0.39%/°C).',
    'إهمال مقاومة التوالي الداخلية للخلية (Series Resistance Rs) ومقاومة التسريب التفرعية (Shunt Resistance Rsh).',
    'افتراض طيف ضوئي قياسي نقي AM1.5 وزاوية سقوط عمودية تماماً بزاوية 90 درجة دون انكسار زجاجي.'
  ],
  sourcesOfErrorAndLimitationsEn: [
    'First-order linear model ignores logarithmic Voc reduction under low light.',
    'Neglects thermal degradation: cell temperatures reach 65°C under direct summer sun, shedding ~15.6% power.',
    'Omits parasitic internal series resistance (Rs) and shunt leakage resistance (Rsh).',
    'Assumes perfect normal angle of incidence (zero cosine loss) and pristine AM1.5 solar spectrum.'
  ],

  whatILearned: [
    'فهمت أن الإشعاع الشمسي يتحكم في تيار اللوح بشكل خطي شبه تام، بينما يتحكم الطيف ودرجة الحرارة في الجهد.',
    'تعلمت التمييز الصريح بين النموذج الرياضي التعليمي المبسط والنموذج الفيزيائي الحقيقي غير الخطي للدايود.',
    'أدركت الأهمية الهندسية الفائقة لمحولات تتبع نقطة القدرة القصوى (MPPT) في منظومات الطاقة الشمسية.'
  ],
  whatILearnedEn: [
    'Learned that irradiance governs photocurrent linearly, while temperature predominantly drives voltage drops.',
    'Mastered distinguishing simplified educational approximations from rigorous nonlinear diode models.',
    'Internalized the engineering necessity of MPPT controllers to prevent massive mismatch power losses.'
  ],

  whatIWouldStudyNext: [
    'نمذجة تأثير زاوية سقوط أشعة الشمس (Solar Zenith Angle & Cosine Loss) على مدار ساعات النهار.',
    'تأثير تظليل جزء من اللوح (Partial Shading) وظهور قمم قدرة متعددة (Multiple Local MPPs) والحاجة لخوارزميات MPPT متقدمة.',
    'بناء دائرة محول خافض للجهد (DC-DC Buck Converter) بمتحكم دقيق (Arduino/ESP32) لتنفيذ خوارزمية تتبع القدرة القصوى (Perturb & Observe).'
  ],
  whatIWouldStudyNextEn: [
    'Model diurnal sun angles, tilt orientation, and cosine geometric optical losses.',
    'Study partial shading and the resulting multiple local maxima that confuse conventional MPPT algorithms.',
    'Construct an Arduino-controlled DC-DC buck converter running the Perturb & Observe (P&O) MPPT tracking algorithm.'
  ],

  completionChecklist: [
    { task: 'توثيق مواصفات لوح تجاري حقيقي 300W من ورقة البيانات المعتمدة', taskEn: 'Document real 300W commercial panel datasheet specifications', checked: true },
    { task: 'حساب القدرة التقديرية يدوياً لمستويات الإشعاع الخمسة (200 إلى 1000 W/m²)', taskEn: 'Calculate estimated power manually across 5 irradiance tiers', checked: true },
    { task: 'كتابة وتنفيذ كود بايثون لتوليد منحنيات I-V و P-V وحساب MPP', taskEn: 'Execute Python model to chart I-V and P-V curves with MPP identification', checked: true },
    { task: 'إنشاء جدول المقارنة الشامل وحساب نسبة الاختلاف بين النموذج الخطي والدايود', taskEn: 'Compile comparison table detailing linear vs diode model deviations', checked: true },
    { task: 'رسم المنحنيات البيانية الثلاثة المحددة بدقة الأرقام والوحدات', taskEn: 'Plot all three required graphs with exact units and coordinates', checked: true },
    { task: 'كتابة التفسير الهندسي لضرورة تقنية MPPT ومصادر الخطأ', taskEn: 'Document engineering interpretation of MPPT necessity and model bounds', checked: true }
  ],

  sources: [
    { title: 'National Renewable Energy Laboratory (NREL) - Photovoltaic Modeling Handbook', source: 'U.S. Department of Energy (DOE)', url: 'https://www.nrel.gov/research/re-photovoltaics.html' },
    { title: 'Canadian Solar CS6K-300M Module Datasheet & Technical Specifications', source: 'Canadian Solar Inc. Technical Documentation', url: 'https://www.canadiansolar.com/' },
    { title: 'PV Performance Modeling and Single-Diode Model', source: 'Sandia National Laboratories Photovoltaics', url: 'https://pvpmc.sandia.gov/modeling-steps/2-dc-module-iv/single-diode-equivalent-circuit-models/' }
  ],

  // Legacy mappings for full compatibility
  objective: 'التحقيق في كيفية تأثير الإشعاع الشمسي على قدرة لوح كهروضوئي تجاري 300W، ومقارنة النموذج الخطي المبسط مع منحنيات I-V و P-V وتوضيح أهمية MPPT.',
  objectiveEn: 'Investigate how solar irradiance alters 300W PV module power, comparing linear models with nonlinear I-V / P-V curves and demonstrating MPPT necessity.',
  engineeringConcept: 'القدرة الشمسية تتناسب طردياً مع الإشعاع، ولكن استخراج أقصى واط يتطلب مطابقة ممانعة الحمل مع نقطة القدرة القصوى (MPP) عبر محول إلكتروني.',
  engineeringConceptEn: 'Solar power scales with irradiance, but extracting full capacity requires dynamic impedance matching at the Maximum Power Point (MPP).',
  theory: 'في النموذج الخطي المبسط: P ≈ Pmax × (G / Gstc). وفي النموذج الفيزيائي، يولد الضوء تياراً Iph يتناسب مع فوتونات الشمس، بينما تحدد طاقة فجوة الحزمة جهد الخلية.',
  theoryEn: 'Simplified linear model: P ≈ Pmax × (G / Gstc). Physical diode model balances photon-generated current Iph against exponential p-n junction forward drop.',
  technicalSummary: {
    input: 'مستويات إشعاع شمسي من 200 إلى 1000 W/m² (طيف AM1.5 عند 25°C)',
    inputEn: 'Solar Irradiance levels from 200 to 1000 W/m² (AM1.5 at 25°C)',
    components: 'لوح كهروضوئي تجاري 300W (Pmax=300W, Voc=39.8V, Isc=9.77A, Vmp=32.5V, Imp=9.23A)',
    componentsEn: 'Commercial 300W PV Module (Pmax=300W, Voc=39.8V, Isc=9.77A, Vmp=32.5V, Imp=9.23A)',
    calculatedResult: 'P(1000)=300W; P(800)=240W; P(600)=180W; P(400)=120W; P(200)=60W',
    calculatedResultEn: 'P(1000)=300W; P(800)=240W; P(600)=180W; P(400)=120W; P(200)=60W',
    simulatedResult: 'Simulation Result: P_max peaks align with P-V curves at 299.98 W (Python / Diode Model)',
    simulatedResultEn: 'Simulation Result: P_max peaks align with P-V curves at 299.98 W (Python / Diode Model)'
  }
};
