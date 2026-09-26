import { ResearchPaper } from '../../types';

export const FOUNDATIONS_TOPICS: ResearchPaper[] = [
  // TOPIC 1: Understanding Electricity: Voltage, Current and Resistance
  {
    id: 'paper-foundations-ohm',
    title: 'فهم الكهرباء: الجهد والتيار والمقاومة',
    titleEn: 'Understanding Electricity: Voltage, Current and Resistance',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-01',
    category: 'foundations',
    type: 'article',
    progressionIndex: 1,
    progressionCategory: 'الأساسيات والدوائر',
    progressionCategoryEn: 'Foundations & Circuits',
    readingTimeMinutes: 6,
    expId: 'FOUND-01 • فهم الكهرباء وقانون أوم',
    statusTag: 'FOUNDATIONAL STUDY // أساسي',
    statusTagEn: 'FOUNDATIONAL STUDY',
    busStandard: 'OHM LAW • V = I · R',
    investigationQuestion: 'ما الذي يتدفق في السلك عند إغلاق المفتاح؟ ولماذا تحتاج المكونات إلى مقاومة محددة لحمايتها من الاحتراق؟',
    investigationQuestionEn: 'What physically flows in a conductor when a circuit closes, and why do components require specific resistance to prevent burnout?',
    motivation: 'عندما بدأت بتجميع أول دائرة على لوحة التجارب (Breadboard)، أحرقت صماماً ثنائياً مشعاً (LED) في ثانية واحدة لأنني وصلته مباشرة ببطارية 9 فولت دون مقاومة! تلك الحادثة دفعتني للبحث: أردت أن أفهم العلاقة الفيزيائية بين الجهد والتيار والمقاومة فهماً عميقاً بدلاً من مجرد حفظ الحروف V = IR.',
    motivationEn: 'When I built my first breadboard circuit, I burned out an LED in one second by connecting it directly to a 9V battery without a resistor! That pushed me to deeply understand the physical relationship between voltage, current, and resistance.',
    abstract: 'رحلة استكشافية تبدأ من حركة الإلكترونات الحرة داخل الموصلات النحاسية، وصولاً إلى صياغة قانون أوم الأساسي V = I · R. نقارن بين فرق الجهد الكهربائي كضغط دافع، وشدة التيار كمعدل لتدفق الشحنات، والمقاومة كاحتكاك ذري يعيق هذا التدفق ويحوله إلى حرارة أو ضوء.',
    abstractEn: 'An exploratory investigation starting from free electron drift in copper conductors to the physical intuition behind Ohm\'s Law V = I · R, comparing electrical potential difference, charge flow rate, and atomic resistance.',
    keyFindings: [
      'الجهد الكهربائي (V) هو الشغل اللازم لنقل وحدة الشحنة، ويمثل قوة الضغط الدافعة للإلكترونات.',
      'شدة التيار (I) هي معدل تدفق الشحنة بالزمن (1 أمبير = 1 كولوم في الثانية ≈ 6.24 × 10¹⁸ إلكترون/ث).',
      'المقاومة (R) تسبب تبديداً للطاقة الكهربائية على شكل حرارة بفعل تصادم الإلكترونات بذرات الموصل (P = I²·R).'
    ],
    whatILearned: [
      'فهمت أن البطارية لا تصنع إلكترونات جديدة، بل توفر فرق الجهد الذي يدفع الإلكترونات الموجودة أصلاً في ذرات السلك.',
      'تعلمت كيف أحسب المقاومة المناسبة لحماية أي LED: R = (V_supply - V_led) / I_led.',
      'أدركت أن قانون أوم يربط ثلاثة متغيرات حيوية تحكم كل دائرة كهربائية في بيوتنا وأجهزتنا.'
    ],
    whatILearnedEn: [
      'A battery does not create new electrons; it supplies potential difference pushing electrons already present in the wire.',
      'How to calculate current-limiting resistors: R = (V_supply - V_led) / I_led.',
      'Ohm\'s law governs the relationship between the three primary circuit variables.'
    ],
    nextStudyGoals: [
      'دراسة كيفية تعامل الدوائر المعقدة متعددة الحلقات والتفرعات مع حفظ الطاقة والشحنة عبر قوانين كيرشوف.'
    ],
    nextStudyGoalsEn: [
      'Study multi-loop circuits and conservation laws using Kirchhoff\'s Laws.'
    ],
    contentSections: [
      {
        heading: '1. الشحنة والجهد والتيار: الصورة الفيزيائية المجهرية',
        headingEn: '1. Charge, Voltage and Current: The Microscopic Picture',
        body: 'الكهرباء في أبسط صورها هي حركة جسيمات دقيقة سالبة الشحنة تسمى الإلكترونات.\nفي سلك نحاسي، تملك ذرات النحاس إلكترونات تكافؤ حرة تتحرك عشوائياً. عندما نصل بطارية، ينشأ مجال كهربائي داخل السلك يمارس قوة على هذه الإلكترونات، مما يجبرها على الانجراف في اتجاه منتظم (Drift Velocity).\n\n- فرق الجهد (Voltage - V): يُقاس بالفولت (V)، وهو مقياس للطاقة الممنوحة لكل وحدة شحنة (1 Volt = 1 Joule / Coulomb). إنه يمثل "الضغط" أو "الدافع" الذي يحث الشحنات على الحركة.\n- شدة التيار (Current - I): تُقاس بالأمبير (A)، وهي كمية الشحنة الكهربائية التي تعبر مقطعاً من الموصل خلال ثانية واحدة (1 Ampere = 1 Coulomb / second).',
        equations: [
          'I = \\frac{\\Delta Q}{\\Delta t} \\quad [\\text{تعريف شدة التيار}]',
          'V = \\frac{W}{Q} \\quad [\\text{فرق الجهد: الشغل المبذول لكل وحدة شحنة}]'
        ],
        exampleFigure: {
          id: 'fig-ohm-1',
          type: 'electron_drift_node',
          figureNumber: 'شكل 1.1',
          title: 'حركة الإلكترونات الحرة تحت تأثير فرق الجهد الكهربائي',
          titleEn: 'Electron Drift Under Electrical Potential Difference',
          geekNote: 'انظر للجسيمات الزرقاء: البطارية لا تخترع إلكترونات من العدم، بل تدفع الإلكترونات الحرة الموجودة مسبقاً في النحاس؛ تماماً كمضخة تدفع ماءً موجوداً أصلاً في الأنابيب!',
          geekNoteEn: 'Electrons already exist in the conductor; the battery acts as a pump pushing them through atomic lattice friction!',
          caption: 'مخطط يوضح انجراف الإلكترونات تحت تأثير المجال الكهربائي ومفهوم شدة التيار.',
          captionEn: 'Electron drift velocity through conductor lattice.'
        },
        keyTakeaway: 'الجهد هو "الضغط الدافِع"، والتيار هو "معدل التدفق الفعلي للإلكترونات".'
      },
      {
        heading: '2. المقاومة وقانون أوم: الاحتكاك الذري وتبديد الطاقة',
        headingEn: '2. Resistance and Ohm\'s Law: Atomic Collisions and Power',
        body: 'أثناء حركة الإلكترونات داخل الموصل، تصطدم بأيونات الشبكة البلورية للمعدن وتفقد جزءاً من طاقتها الحركية لتتحول إلى اهتزازات حرارية. هذه الإعاقة تسمى "المقاومة الكهربائية" (Resistance - R) وتُقاس بالأوم (Ω).\n\nفي عام 1827، اكتشف الفيزيائي الألماني جورج سيمون أوم تجريبياً أن شدة التيار المار في موصل معدني تتناسب طردياً مع فرق الجهد بين طرفيه (عند ثبوت درجة الحرارة):\n\nV = I · R\n\nأما القدرة الكهربائية المبددة في المقاومة فتُعطى بالعلاقة:\nP = V · I = I² · R',
        equations: [
          'V = I \\cdot R \\quad [\\text{قانون أوم الأساسي}]',
          'P = V \\cdot I = I^2 R = \\frac{V^2}{R} \\quad [\\text{القدرة الكهربائية بالواط}]',
          'R = \\rho \\frac{L}{A} \\quad [\\text{مقاومة السلك بدلالة المقاومية والطول والمساحة}]'
        ],
        diagramNotes: 'مثال عددي بسيط قمت بحسابه ثم قياسه معملياً: إذا وصلنا مقاومة R = 100 Ω بمصدر جهد 9V، فإن شدة التيار المار تكون:\nI = V / R = 9 / 100 = 0.09 A (أي 90 ميلي أمبير).\nوالقدرة الحرارية المبددة فيها:\nP = 9V × 0.09A = 0.81 W. لذلك نحتاج لمقاومة تتحمل 1 واط على الأقل حتى لا تسخن وتحترق!',
        keyTakeaway: 'كلما زادت المقاومة قل التيار عند ثبوت الجهد، وتتحول الطاقة الكهربائية إلى حرارة وفق قانون جول.'
      }
    ],
    simulationType: 'none',
    videoUrl: 'https://www.youtube.com/embed/0DxKZl9AEio',
    youtubeId: '0DxKZl9AEio',
    videoTitle: 'شرح قانون أوم والعلاقة بين الجهد والتيار والمقاومة (The Engineering Mindset)',
    videoTitleEn: "Ohm's Law Explained - The basics circuit theory (The Engineering Mindset)",
    simulationExperiments: [
      {
        id: 'found-ohm-exp-1',
        title: 'التفاعل 1: قياس التيار الأولي عند 9V ومقاومة 10Ω',
        titleEn: 'Experiment 1: Measure baseline current at 9V and 10Ω',
        stepAction: 'صل البطارية 9V بمصباح 10Ω وأغلق المفتاح وراقب مؤشر الأميتر.',
        stepActionEn: 'Connect 9V battery with 10Ω lamp, close the switch and read ammeter.',
        expectedObservation: 'يضيء المصباح ويشير الأميتر إلى 0.90 A بدقة، وتتحرك الإلكترونات الزرقاء بانتظام.',
        expectedObservationEn: 'Lamp illuminates, ammeter reads exactly 0.90 A, and electrons drift continuously.',
        simpleExplanation: 'قانون أوم (I = V / R = 9 / 10 = 0.9 A): كل فولت ضغط من البطارية يدفع كمية محددة من الإلكترونات في الثانية عبر مقاومة السلك.',
        simpleExplanationEn: 'Ohm Law (I = V/R = 9/10 = 0.9A): Each volt pushes a proportional amount of electron charges per second.'
      },
      {
        id: 'found-ohm-exp-2',
        title: 'التفاعل 2: مضاعفة المقاومة إلى 20Ω وملاحظة هبوط التيار',
        titleEn: 'Experiment 2: Double resistance to 20Ω and observe current',
        stepAction: 'انقر على المقاوم في المحاكي وزد قيمته إلى 20.0Ω.',
        stepActionEn: 'Click the resistor in PhET and raise it to 20.0Ω.',
        expectedObservation: 'ينخفض توهج المصباح إلى النصف ويهبط مؤشر الأميتر فورياً إلى 0.45 A.',
        expectedObservationEn: 'Lamp brightness drops by half and current plummets from 0.90 A to 0.45 A.',
        simpleExplanation: 'المقاومة تعيق تدفق الشحنات؛ مضاعفة المقاومة مع ثبات الجهد تخفض شدة التيار إلى النصف تماماً.',
        simpleExplanationEn: 'Resistance impedes electron drift; doubling resistance at fixed voltage cuts current in half.'
      },
      {
        id: 'found-ohm-exp-3',
        title: 'التفاعل 3: محاكاة ماس كهربائي خطير (Short Circuit)',
        titleEn: 'Experiment 3: Short circuit demonstration',
        stepAction: 'صل سلكاً مباشراً بين طرفي البطارية بدون أي مصباح أو مقاومة.',
        stepActionEn: 'Connect a direct wire across the battery terminals with zero load.',
        expectedObservation: 'تشتعل النيران في البطارية بالمحاكي وتندفع الإلكترونات بسرعة جنونية ويتجاوز التيار 100 A!',
        expectedObservationEn: 'Battery catches fire in simulation, electrons race at top speed, current spikes over 100 A!',
        simpleExplanation: 'عندما تقترب المقاومة من الصفر (R ≈ 0)، يقفز التيار I = V/R إلى ما لا نهاية فتتولد حرارة هائلة، ولهذا نحتاج قواطع الأمان (Circuit Breakers) في بيوتنا.',
        simpleExplanationEn: 'With resistance near zero, current spikes dangerously high generating extreme heat; this is why fuses and circuit breakers exist.'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'إذا تضاعف فرق الجهد المطبق على مقاومة ثابتة القيمة بمقدار مرتين، فماذا يحدث لشدة التيار المار بها؟',
        questionEn: 'If voltage across a fixed resistor doubles, what happens to current?',
        options: ['تتضاعف مرتين وفق قانون أوم', 'تنخفض إلى النصف', 'تزداد أربع مرات', 'تبقى ثابتة'],
        optionsEn: ['Doubles proportionally (V = IR)', 'Halves', 'Quadruples', 'Remains constant'],
        correctIndex: 0,
        explanation: 'وفق قانون أوم V = I · R، عند ثبوت المقاومة R، يتناسب التيار I تناسباً طردياً خطياً مع الجهد V، فيتضاعف التيار بمقدار مرتين.',
        explanationEn: 'Current is directly proportional to voltage when resistance is constant (I = V/R).'
      },
      {
        id: 'q2',
        question: 'مصباح يعمل بجهد 12V ويسحب تياراً قدره 2A. ما هي قدرته الكهربائية ومقاومة فتيلته؟',
        questionEn: 'A lamp operates at 12V drawing 2A. What is its power and filament resistance?',
        options: ['القدرة = 24W، والمقاومة = 6Ω', 'القدرة = 6W، والمقاومة = 24Ω', 'القدرة = 14W، والمقاومة = 10Ω', 'القدرة = 48W، والمقاومة = 3Ω'],
        optionsEn: ['Power = 24W, Resistance = 6Ω', 'Power = 6W, Resistance = 24Ω', 'Power = 14W, Resistance = 10Ω', 'Power = 48W, Resistance = 3Ω'],
        correctIndex: 0,
        explanation: 'القدرة P = V × I = 12 × 2 = 24W. والمقاومة R = V / I = 12 / 2 = 6Ω.',
        explanationEn: 'P = V·I = 12·2 = 24W; R = V/I = 12/2 = 6Ω.'
      }
    ],
    tags: ['الجهد الكهربائي', 'شدة التيار', 'المقاومة', 'قانون أوم', 'القدرة الكهربائية', 'الأساسيات'],
    tagsEn: ['Voltage', 'Current', 'Resistance', 'Ohm Law', 'Electrical Power', 'Foundations']
  },

  // TOPIC 2: Kirchhoff's Laws: The Mathematics of Electrical Circuits
  {
    id: 'paper-foundations-kirchhoff',
    title: 'قوانين كيرشوف: رياضيات الدوائر الكهربائية',
    titleEn: 'Kirchhoff\'s Laws: The Mathematics of Electrical Circuits',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-03',
    category: 'foundations',
    type: 'article',
    progressionIndex: 2,
    progressionCategory: 'الأساسيات والدوائر',
    progressionCategoryEn: 'Foundations & Circuits',
    readingTimeMinutes: 7,
    expId: 'FOUND-02 • قوانين كيرشوف وحل الحلقات',
    statusTag: 'FOUNDATIONAL STUDY // أساسي',
    statusTagEn: 'FOUNDATIONAL STUDY',
    busStandard: 'KCL • KVL • CONSERVATION LAWS',
    investigationQuestion: 'كيف نحدد التيارات والجهود بدقة عندما تتفرع الدائرة إلى عدة حلقات تحتوي على أكثر من بطارية ومقاومة؟',
    investigationQuestionEn: 'How do we systematically calculate currents and voltages in multi-loop circuits with multiple sources and branches?',
    motivation: 'قانون أوم بسيط جداً وممتع في الحلقات الفردية، لكن عندما حاولت حساب دائرة تحتوي على بطاريتين في فرعين مختلفين، وجدت أن قانون أوم وحده يعجز عن إعطاء الحل المباشر! هنا اكتشفت قوانين كيرشوف وانبهرت كيف تتحول قوانين حفظ الشحنة والطاقة إلى معادلات جبرية سهلة الحل.',
    motivationEn: 'Ohm\'s law works great for single loops, but for multiple loops with multiple voltage sources, simple formulas fall short. Kirchhoff\'s laws amazed me by turning physical conservation principles into neat linear algebra.',
    abstract: 'شرح تحليلي لقانون كيرشوف للتيار (KCL) القائم على مبدأ حفظ الشحنة الكهربائية، وقانون كيرشوف للجهد (KVL) القائم على مبدأ حفظ الطاقة. نطبق القوانين خطوة بخطوة على دائرة ثنائية الحلقات مع حل المعادلات الخطية بمثال رقمي ملموس ومقارنته بالمحاكي.',
    abstractEn: 'Analytical exploration of Kirchhoff\'s Current Law (KCL) based on charge conservation and Kirchhoff\'s Voltage Law (KVL) based on energy conservation, demonstrated through a solved two-loop circuit example.',
    keyFindings: [
      'قانون كيرشوف للتيار (KCL): مجموع التيارات الداخلة إلى أي عقدة يساوي مجموع التيارات الخارجة منها (حفظ الشحنة).',
      'قانون كيرشوف للجهد (KVL): المجموع الجبري لفروق الجهد في أي مسار مغلق يساوي صفراً (حفظ الطاقة).',
      'تحويل الدوائر الكهربائية إلى جملة معادلات خطية هو الأساس الذي تعتمد عليه كافة برامج محاكاة الدوائر الاحترافية (SPICE).'
    ],
    whatILearned: [
      'تحديد العقد (Nodes) والمسارات المغلقة (Loops) هو أول خطوة لتحليل أي دائرة بدقة.',
      'اصطلاح الإشارات في KVL: الصعود في الجهد موجب (+) والهبوط في الجهد عبر المقاومة سالب (-I·R).',
      'كيفية حل معادلتين بمجهولين لإيجاد تيارات الفروع بدقة تامة ومطابقتها مع القياسات.'
    ],
    whatILearnedEn: [
      'Identifying nodes and loops is the fundamental first step in circuit analysis.',
      'Sign conventions in KVL: voltage rises are positive, drops across resistors are negative (-IR).',
      'Solving simultaneous linear equations to find all branch currents.'
    ],
    nextStudyGoals: [
      'فهم العناصر التي تخزن الطاقة مؤقتاً في مجالاتها الكهربائية والمغناطيسية (المكثفات والملفات).'
    ],
    nextStudyGoalsEn: [
      'Investigate energy-storing components: capacitors and inductors.'
    ],
    contentSections: [
      {
        heading: '1. قانون كيرشوف للتيار (KCL) وحفظ الشحنة الكهربائية',
        headingEn: '1. Kirchhoff\'s Current Law (KCL) & Charge Conservation',
        body: 'ينص قانون كيرشوف الأول (KCL) على أن المجموع الجبري للتيارات عند أي عقدة كهربائية (Junction Node) يساوي صفراً:\n\nΣ I_in = Σ I_out\n\nالأساس الفيزيائي لهذا القانون هو مبدأ راسخ لا يتزعزع: حفظ الشحنة الكهربائية (Conservation of Charge). الإلكترونات لا تتراكم داخل العقدة ولا تختفي؛ فكل كولوم يدخل من سلك يجب أن يغادر عبر الأسلاك الأخرى في نفس اللحظة.',
        equations: [
          '\\sum_{k=1}^{n} I_k = 0 \\quad [\\text{صيغة KCL عند العقدة}]',
          'I_{\\text{in, 1}} + I_{\\text{in, 2}} = I_{\\text{out, 3}}'
        ],
        exampleFigure: {
          id: 'fig-kcl-1',
          type: 'multiloop_kirchhoff',
          figureNumber: 'شكل 2.1',
          title: 'تحليل دائرة ثنائية الحلقات باستخدام قوانين كيرشوف KCL و KVL',
          titleEn: 'Two-Loop Circuit Analysis Using KCL & KVL Equations',
          geekNote: 'انظر للعقدة A بالأعلى: التيار I1 القادم من اليسار والتيار I2 القادم من اليمين يجتمعان معاً ليغذيا الفرع الأوسط I3 = I1 + I2!',
          geekNoteEn: 'At top node A, branch currents I1 and I2 converge into center branch I3, obeying charge conservation exactly!',
          caption: 'مخطط دائرة ببطاريتين وحل تيارات الفروع بمعادلات كيرشوف الخطية.',
          captionEn: 'Two-source multi-loop circuit solved via Kirchhoff linear equations.'
        },
        keyTakeaway: 'العقدة لا تخزن شحنات؛ ما يدخل العقدة يساوي ما يخرج منها بالضبط.'
      },
      {
        heading: '2. قانون كيرشوف للجهد (KVL) وتطبيق عملي خطوة بخطوة',
        headingEn: '2. Kirchhoff\'s Voltage Law (KVL) & Step-by-Step Calculation',
        body: 'ينص قانون كيرشوف الثاني (KVL) على أن المجموع الجبري لفروق الجهد الكهربائي عبر أي مسار مغلق (Loop) في الدائرة يساوي صفراً:\n\nΣ V_loop = 0\n\nوهذا هو التعبير الكهربائي المباشر عن مبدأ حفظ الطاقة (Conservation of Energy): الطاقة التي يكتسبها الإلكترون عند عبور البطارية يستهلكها بالكامل في المقاومات أثناء دورته حتى يعود لنفس نقطة البداية بنفس طاقة الوضع.',
        equations: [
          '\\sum_{k=1}^{m} V_k = 0 \\quad [\\text{صيغة KVL للمسار المغلق}]',
          'V_1 - I_1 R_1 - I_3 R_3 = 0 \\quad [\\text{معادلة الحلقة الأولى}]',
          'V_2 - I_2 R_2 - I_3 R_3 = 0 \\quad [\\text{معادلة الحلقة الثانية}]'
        ],
        diagramNotes: 'مثال عددي قمت بحله:\nالبطارية الأولى V₁ = 12V مع R₁ = 4Ω، والبطارية الثانية V₂ = 6V مع R₂ = 2Ω، والمقاومة المشتركة R₃ = 6Ω.\nبالتعويض في المعادلتين مع I₃ = I₁ + I₂:\n12 - 4 I₁ - 6(I₁ + I₂) = 0  =>  10 I₁ + 6 I₂ = 12\n6 - 2 I₂ - 6(I₁ + I₂) = 0  =>  6 I₁ + 8 I₂ = 6\nبحل المعادلتين نحصل بدقة على: I₁ = 1.36 A، و I₂ = -0.27 A (الإشارة السالبة تعني أن البطارية الثانية يتم شحنها في الواقع!)، و I₃ = 1.09 A.',
        keyTakeaway: 'قوانين كيرشوف تتيح حل أعقد الشبكات الكهربائية عبر تحويل الفيزياء إلى معادلات جبرية مباشرة.'
      }
    ],
    simulationType: 'none',
    videoUrl: 'https://www.youtube.com/embed/mc979OhitAg',
    youtubeId: 'mc979OhitAg',
    videoTitle: 'كيف تعمل الدوائر وتتوزع التيارات والجهود (The Engineering Mindset)',
    videoTitleEn: 'How Electricity Works & Circuit Principles (The Engineering Mindset)',
    simulationExperiments: [
      {
        id: 'kcl-exp-1',
        title: 'التفاعل 1: إثبات حفظ الشحنة (KCL) عند نقطة التفرع',
        titleEn: 'Experiment 1: Prove KCL charge conservation at node',
        stepAction: 'في محاكي DC، فرّع سلكاً قادماً من بطارية 12V إلى مصباحين (10Ω و 20Ω) متوازيين مع أميتر في كل فرع.',
        stepActionEn: 'In DC Sim, split wire from 12V into two parallel lamps (10Ω and 20Ω) with ammeters.',
        expectedObservation: 'التيار الرئيسي (1.80 A) يساوي تماماً مجموع الفرعين (1.20 A + 0.60 A = 1.80 A).',
        expectedObservationEn: 'Main current (1.80 A) matches sum of branch currents (1.20 A + 0.60 A = 1.80 A).',
        simpleExplanation: 'الشحنات الكهربائية لا تتراكم ولا تختفي؛ ما يدخل العقدة يساوي ما يخرج منها تماماً كمجاري الماء.',
        simpleExplanationEn: 'Charge is strictly conserved; total current into a node equals total current out.'
      },
      {
        id: 'kvl-exp-2',
        title: 'التفاعل 2: قياس هبوط الجهد حول حلقة مغلقة (KVL)',
        titleEn: 'Experiment 2: Measure loop voltage drops (KVL)',
        stepAction: 'قس الجهد عبر البطارية ثم عبر المقاومتين المتصلتين بالتوالي.',
        stepActionEn: 'Measure voltage drop across battery and each series resistor.',
        expectedObservation: 'جهد البطارية (+12V) ناقص هبوط الجهد عبر المقاومتين (-6V و -6V) يعطي صفراً تماماً (ΣV = 0).',
        expectedObservationEn: 'Battery voltage (+12V) minus drops (-6V, -6V) yields exactly zero around closed loop.',
        simpleExplanation: 'مبدأ حفظ الطاقة: كل طاقة الوضع المكتسبة من البطارية تتبدد بالكامل عبر مكونات الحلقة المغلقة.',
        simpleExplanationEn: 'Energy conservation: electrical potential gained is fully spent navigating the closed circuit.'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'إذا دخل عقدة كهربائية تياران: الأول 4 أمبير والثاني 3 أمبير، وتفرع منها سلكان خرج من أحدهما 5 أمبير. كم يخرج من السلك الآخر؟',
        questionEn: 'Two currents enter a node (4A and 3A). If one exiting wire carries 5A, what does the other carry?',
        options: ['2 أمبير', '7 أمبير', '1 أمبير', '12 أمبير'],
        optionsEn: ['2 Amperes', '7 Amperes', '1 Ampere', '12 Amperes'],
        correctIndex: 0,
        explanation: 'مجموع التيارات الداخلة = 4 + 3 = 7A. مجموع الخارجة يجب أن يساوي 7A، إذن 7 - 5 = 2A.',
        explanationEn: 'Total in = 4 + 3 = 7A. Total out must be 7A, so 7 - 5 = 2A.'
      }
    ],
    tags: ['قوانين كيرشوف', 'KCL', 'KVL', 'حفظ الشحنة', 'حفظ الطاقة', 'حل الدوائر'],
    tagsEn: ['Kirchhoff Laws', 'KCL', 'KVL', 'Charge Conservation', 'Circuit Analysis']
  },

  // TOPIC 3: Where Electrical Energy Goes: Capacitors and Inductors
  {
    id: 'paper-foundations-capacitors-inductors',
    title: 'أين تذهب الطاقة الكهربائية؟ المكثفات والملفات',
    titleEn: 'Where Electrical Energy Goes: Capacitors and Inductors',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-05',
    category: 'foundations',
    type: 'article',
    progressionIndex: 3,
    progressionCategory: 'الأساسيات والدوائر',
    progressionCategoryEn: 'Foundations & Circuits',
    readingTimeMinutes: 7,
    expId: 'FOUND-03 • طاقة المكثفات والملفات',
    statusTag: 'FOUNDATIONAL STUDY // أساسي',
    statusTagEn: 'FOUNDATIONAL STUDY',
    busStandard: 'ENERGY STORAGE • E = ½CV² • E = ½LI²',
    investigationQuestion: 'المقاومة تستهلك الطاقة الكهربائية وتحولها إلى حرارة؛ أين تذهب الطاقة في المكثف والملف؟ وكيف يعيدانها للدائرة؟',
    investigationQuestionEn: 'Resistors turn electrical energy into heat; where does energy go in capacitors and inductors, and how do they return it?',
    motivation: 'أول تجربة فاجأتني كانت عندما فصلت محول كهربائي عن فيش الجدار؛ رأيت شرارة زرقاء صغيرة تقفز عند نزع القابس، ولاحظت أن مصباح الشاحن ظل مضيئاً لثلاث ثوان بعد فصله! سألت نفسي: من أين جاءت تلك الشرارة؟ ولماذا لم ينطفئ المصباح فوراً؟ هكذا بدأت رحلتي مع المكثف والملف.',
    motivationEn: 'When unplugging an AC adapter, a spark jumped, and an LED stayed lit for 3 seconds after disconnect! Where did that spark come from, and why didn\'t it turn off instantly? That ignited my curiosity about reactive components.',
    abstract: 'المكثفات والملفات عناصر تخزين مؤقت للطاقة. المكثف يخزن الطاقة في مجال كهربائي ساكن بين لوحيه E = ½CV²، بينما يخزن الملف الطاقة في مجال مغناطيسي E = ½LI². نستعرض آليات الشحن والتفريغ، والثابت الزمني τ، وسلوكهما الديناميكي الذي يمهد لعالم التيار المتردد والرنين.',
    abstractEn: 'Capacitors and inductors are energy storage components: capacitors store energy in electrostatic fields (½CV²), while inductors store energy in magnetic fields (½LI²). Explaining transient behavior and time constants.',
    keyFindings: [
      'المكثف يخزن الشحنات في مجال كهربائي ويقاوم التغير المفاجئ في فرق الجهد (i = C · dv/dt).',
      'الملف يخزن الطاقة في مجال كهرومغناطيسي ويقاوم التغير المفاجئ في شدة التيار (v = L · di/dt) وفق قانون لنز.',
      'المقاومة تستهلك الطاقة نهائياً كحرارة (تبديد إيجابي)، بينما المكثف والملف يتبادلان الطاقة مع المصدر دون إتلافها (طاقة تفاعلية).'
    ],
    whatILearned: [
      'فهمت معنى الثابت الزمني τ = R·C: بعد زمن قدره 1τ يشحن المكثف بنسبة 63.2% من جهد المصدر، وبعد 5τ يشحن بالكامل تقريباً (99.3%).',
      'فهمت لماذا يقفز شرار عند فصل الملفات الحثية: محاولة قطع التيار فجأة تجعل di/dt سالباً كبيراً جداً، فيولد الملف جهداً حثياً عكسياً هائلاً V = -L(di/dt)!',
      'أدركت أن هذين المكونين هما الأساس في دوائر الرنين والمرشحات وعواكس الطاقة الشمسية.'
    ],
    whatILearnedEn: [
      'Time constant tau = RC: after 1 tau the capacitor charges to 63.2%; after 5 tau it is essentially 99.3% charged.',
      'Why opening an inductive circuit sparks: abrupt current drop causes massive back-EMF V = -L(di/dt).',
      'These two components form the bedrock of resonant tanks, filters, and solar inverters.'
    ],
    nextStudyGoals: [
      'دراسة سلوك المكثف والملف عندما يتعرضان لجهد متردد متغير باستمرار (دوائر AC وزوايا الطور).'
    ],
    nextStudyGoalsEn: [
      'Explore how capacitors and inductors behave under continuous alternating voltage (AC & Phase).'
    ],
    contentSections: [
      {
        heading: '1. المكثف الكهربائي: تخزين الطاقة في المجال الكهربي (Electric Field)',
        headingEn: '1. The Capacitor: Energy Storage in Electrostatic Fields',
        body: 'يتكون المكثف في أبسط أشكاله من لوحين موصلين متوازيين تفصل بينهما مادة عازلة (Dielectric) مثل الهواء أو السيراميك أو المايكا.\nعند توصيل المكثف ببطارية، تتراكم إلكترونات على أحد اللوحين وتفرغ من اللوح المقابل، فينشأ مجال كهربائي شديد في الفراغ العازل بينهما.\n\nالطاقة المخزنة في هذا المجال الكهربائي تُعطى بالمعادلة:\nE = ½ C V²\n\nحيث C هي السعة الكهربائية وتُقاس بالفاراد (Farad). خاصية المكثف الجوهرية: إنه يقاوم التغير اللحظي في الجهد، لأن الجهد لا يمكن أن يقفز فجأة إلا إذا تدفق تيار لا نهائي (i = C · dv/dt).',
        equations: [
          'q = C \\cdot V \\quad [\\text{شحنة المكثف بدلالة السعة والجهد}]',
          'i(t) = C \\frac{dv(t)}{dt} \\quad [\\text{العلاقة التفاضلية لتيار المكثف}]',
          'E_C = \\frac{1}{2} C V^2 \\quad [\\text{الطاقة الكهربائية المخزونة بالجول}]'
        ],
        exampleFigure: {
          id: 'fig-cap-ind-1',
          type: 'capacitor_inductor_fields',
          figureNumber: 'شكل 3.1',
          title: 'مقارنة مجالات تخزين الطاقة: المجال الكهربي للمكثف والمجال المغناطيسي للمحث',
          titleEn: 'Energy Storage Comparison: Electrostatic (C) vs Magnetic (L) Fields',
          geekNote: 'انظر للوحين على اليسار: الشحنات محبوسة وبينهما خطوط مجال كهربائي E تحفظ الطاقة؛ بينما في الملف على اليمين تدور خطوط المجال المغناطيسي B حول حلقات السلك!',
          geekNoteEn: 'Capacitor stores potential in static electric field between plates (½CV²); inductor stores kinetic momentum in magnetic field loops (½LI²)!',
          caption: 'مقارنة فيزيائية بين تخزين الطاقة في المكثف والملف.',
          captionEn: 'Physical comparison of electrostatic vs magnetic energy storage.'
        },
        keyTakeaway: 'المكثف خزان جهد: يشحن ببطء ويفرغ ببطء حسب الثابت الزمني τ = RC.'
      },
      {
        heading: '2. الملف الحثي: عزم القصور الذاتي المغناطيسي (Magnetic Field)',
        headingEn: '2. The Inductor: Magnetic Momentum and Lenz\'s Law',
        body: 'الملف (Inductor) هو سلك موصل ملفوف في حلقات حلزونية. عندما يمر فيه تيار، ينشأ داخل القلب مجال مغناطيسي يحمل طاقة:\n\nE = ½ L I²\n\nحيث L هي معامل الحث الذاتي ويُقاس بالهنري (Henry).\nوفق قانون فراداي وقانون لنز، عندما نحاول تغيير شدة التيار المار في الملف، يولد الملف قوة دافعة كهربائية عكسية (Back EMF) تقاوم هذا التغير:\n\nv(t) = L · (di/dt)\n\nالملف يشبه جسماً ميكانيكياً ذا كتلة ثقيلة: يكره أن يتوقف فجأة إذا كان يتحرك، ويكره أن يتحرك فجأة إذا كان ساكناً!',
        equations: [
          'v(t) = L \\frac{di(t)}{dt} \\quad [\\text{الجهد الحثي المستحث في الملف}]',
          'E_L = \\frac{1}{2} L I^2 \\quad [\\text{الطاقة المغناطيسية المخزونة بالجول}]',
          '\\tau = \\frac{L}{R} \\quad [\\text{الثابت الزمني لدائرة RL الحثية}]'
        ],
        diagramNotes: 'تفسير الشرارة المعملية: إذا كان الملف يمر به 2A وفتحنا القاطع خلال 1 ميلي ثانية (0.001s)، وكان L = 1H:\nV = 1 × (2 / 0.001) = 2,000 فولت! هذا الجهد العالي يؤين الهواء ويصنع تلك الشرارة اللحظية المدهشة.',
        keyTakeaway: 'الملف يقاوم تغير التيار كما يقاوم المكثف تغير الجهد؛ واجتماعهما معاً يصنع ظاهرة الرنين الكهربائي.'
      }
    ],
    simulationType: 'none',
    videoUrl: 'https://www.youtube.com/embed/X4EUwTwZ110',
    youtubeId: 'X4EUwTwZ110',
    videoTitle: 'شرح طريقة عمل المكثفات وتخزين الطاقة (The Engineering Mindset)',
    videoTitleEn: 'Capacitors Explained - The basics how capacitors work (The Engineering Mindset)',
    simulationExperiments: [
      {
        id: 'cap-exp-1',
        title: 'التفاعل 1: مراقبة شحن المكثف وهبوط التيار التدريجي',
        titleEn: 'Experiment 1: Watch capacitor charging and current decay',
        stepAction: 'في محاكي AC/DC، صل مكثفاً 100μF مع مقاومة 10Ω وبطارية 9V مع راسم التيار والجهد.',
        stepActionEn: 'In Sim, connect 100μF capacitor with 10Ω resistor and 9V battery with chart.',
        expectedObservation: 'يندفع التيار في البداية بقوة 0.90 A، ثم يتناقص أسياً إلى الصفر بينما يقترب جهد المكثف من 9V.',
        expectedObservationEn: 'Current spikes initially to 0.90 A then decays exponentially to zero as capacitor voltage approaches 9V.',
        simpleExplanation: 'المكثف يخزن شحناته في مجال كهروستاتيكي؛ عندما يمتلئ يعاكس جهد البطارية تماماً ويتوقف تدفق الإلكترونات.',
        simpleExplanationEn: 'The capacitor stores charge in an electric field; once fully charged it counters the battery voltage, halting current.'
      },
      {
        id: 'ind-exp-2',
        title: 'التفاعل 2: إغلاق وفتح مفتاح الملف الحثي (الحث الذاتي)',
        titleEn: 'Experiment 2: Inductor back-EMF during switch transition',
        stepAction: 'صل ملف حث 10H ومصباحاً وأغلق المفتاح ثم افتحه فجأة.',
        stepActionEn: 'Connect 10H inductor with lamp, toggle switch on and off.',
        expectedObservation: 'يتأخر المصباح في التوهج عند الإغلاق، وعند الفتح يقفز الجهد لحظياً محدثاً نبضة ساطعة.',
        expectedObservationEn: 'Lamp brightness ramps up slowly on turn-on, and creates a high-voltage spike on turn-off.',
        simpleExplanation: 'قانون لنز: يقاوم الملف التغير اللحظي في شدة التيار بمجاله المغناطيسي المخزون.',
        simpleExplanationEn: 'Lenz Law: the inductor generates opposing voltage to resist sudden changes in current.'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'مكثف سعته 100 μF تم شحنه بجهد 20V. ما هي الطاقة الكهربائية المخزنة بين لوحيه؟',
        questionEn: 'A 100μF capacitor is charged to 20V. How much energy is stored?',
        options: ['0.02 جول (20 ميلي جول)', '2 جول', '0.2 جول', '0.002 جول'],
        optionsEn: ['0.02 Joules (20 mJ)', '2 Joules', '0.2 Joules', '0.002 Joules'],
        correctIndex: 0,
        explanation: 'E = ½ C V² = 0.5 × (100 × 10⁻⁶ F) × (20 V)² = 0.5 × 10⁻⁴ × 400 = 0.02 J.',
        explanationEn: 'E = 0.5 · C · V² = 0.5 · 100e-6 · 400 = 0.02 J.'
      }
    ],
    tags: ['المكثف', 'الملف الحثي', 'تخزين الطاقة', 'الثابت الزمني', 'المجال الكهربائي', 'المجال المغناطيسي'],
    tagsEn: ['Capacitor', 'Inductor', 'Energy Storage', 'Time Constant', 'Electric Field', 'Magnetic Field']
  }
];
