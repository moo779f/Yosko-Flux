import { ResearchPaper } from '../../types';

export const INTRO_TOPIC: ResearchPaper = {
  id: 'paper-intro-electrons-grid',
  title: 'من الإلكترونات إلى الشبكة الكهربائية: مقدمة في عالم الكهرباء',
  titleEn: 'From Electrons to the Electrical Grid: An Introduction to Electricity',
  author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
  authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
  affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
  affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
  date: '2026-03-01',
  category: 'intro',
  type: 'article',
  progressionIndex: 0,
  progressionCategory: 'نظرة عامة والمدخل الشامل',
  progressionCategoryEn: 'Overview & Starting Point',
  readingTimeMinutes: 8,
  expId: 'INTRO-00 • خارطة التعلم الشاملة',
  statusTag: 'COMPREHENSIVE OVERVIEW // نظرة شاملة',
  statusTagEn: 'COMPREHENSIVE OVERVIEW',
  busStandard: 'FROM ELECTRONS TO THE GRID',
  investigationQuestion: 'كيف ترتبط حركة إلكترون واحد في سلك نحاسي بتشغيل شبكة كهربائية كاملة تنقل الطاقة عبر مئات الكيلومترات؟',
  investigationQuestionEn: 'How does microscopic electron drift in a conductor scale up to synchronize an entire electrical grid spanning hundreds of kilometers?',
  motivation: 'عندما بدأت أقرأ في الهندسة الكهربائية، شعرت أن المواضيع تبدو وكأنها جزر متباعدة: فيزياء الإلكترونات في جانب، ورياضيات متسلسلات فورييه في جانب آخر، ومحطات الطاقة الشمسية في جانب ثالث! بنيت هذا المقال ليكون خريطتي الذهنية التي تربط هذه الجزر معاً في قصة واحدة متصلة تبدأ من الإلكترون وتنتهي عند الشبكة الكهربائية.',
  motivationEn: 'When I began studying electrical engineering, the subjects felt like disconnected islands: electron physics, Fourier mathematics, and solar grids. I wrote this article as my personal roadmap connecting all these disciplines into one continuous story.',
  abstract: 'مقال تمهيدي جامع يربط محطات رحلة التعلم الذاتي: من المفهوم المجهري لحركة الإلكترونات والشحنة وقوانين أوم وكيرشوف، مروراً بسلوك التيار المتردد والأمواج الجيبية والمجالات الكهرومغناطيسية في المكثفات والملفات، وصولاً إلى منظومات نقل القدرة الفعالة وتكامل الطاقة الشمسية وبطاريات التخزين في الشبكة الكهربائية الحديثة.',
  abstractEn: 'A broad introductory roadmap connecting the entire learning journey: from microscopic electron drift and fundamental circuit laws (Ohm and Kirchhoff), through AC sinusoidal signals and reactive energy storage, to power transmission, solar PV integration, and modern electrical grid synchronization.',
  keyFindings: [
    'الكهرباء تبدأ من حركة الإلكترونات، ويحكم تدفقها في الدوائر البسيطة ضغط الجهد ومقاومة الموصل وفق قانون أوم.',
    'التيار المتردد (AC) هو الخيار الطبيعي لنقل الطاقة بكفاءة عبر المسافات الطويلة بفضل إمكانية رفع وخفض جهده بالمحولات.',
    'تخزين الطاقة في البطاريات هو الجسر الحيوي الذي يربط بين تقطع الطاقة المتجددة وحاجة الشبكة الكهربائية للتوازن المستمر.'
  ],
  whatILearned: [
    'أدركت أن المفاهيم المتقدمة في هندسة القوى والشبكات ليست سوى تطبيقات موسعة للقوانين الأساسية التي ندرسها في الدوائر البسيطة.',
    'فهمت كيف تتضافر مجالات الرياضيات والفيزياء والكيمياء لتشغيل شبكة طاقة مستقرة ومستدامة.',
    'وضعت خطة دراسية متدرجة تبدأ من أساسيات الدوائر وتتوسع نحو الإشارات ونظم الطاقة.'
  ],
  whatILearnedEn: [
    'Advanced power engineering concepts are scaled extensions of fundamental circuit laws.',
    'Mathematics, physics, and chemistry converge to maintain a stable electrical grid.',
    'Formulated a clear step-by-step learning progression from basic circuits to power systems.'
  ],
  nextStudyGoals: [
    'التعمق في المكونات الثلاثة الأساسية: الجهد والتيار والمقاومة وصياغة قانون أوم رياضياً وفيزيائياً.'
  ],
  nextStudyGoalsEn: [
    'Deep-dive into voltage, current, resistance, and the physical meaning of Ohm\'s law.'
  ],
  contentSections: [
    {
      heading: '1. الخطوة الأولى: الإلكترونات، الشحنة، والدوائر البسيطة',
      headingEn: '1. The First Step: Electrons, Charge, and Simple Circuits',
      body: 'تبدأ القصة داخل الموصلات النحاسية، حيث توجد بحار من الإلكترونات الحرة. عندما نوفر مصدراً لفرق الجهد (مثل بطارية)، ينشأ مجال كهربائي يدفع تلك الإلكترونات للحركة المنظمة؛ هذا السيل من الشحنات هو ما نسميه بالتيار الكهربائي (I).\n\nالمقاومة (R) تمثل التصادمات الذرية التي تعيق هذا السيل، بينما قانون أوم V = I·R يربط بين الثلاثي الأهم في الكهرباء. من هنا نتعلم كيف نتحكم في تدفق الطاقة، ونحسب استهلاك القدرة (P = V·I) في أي جهاز منزلي أو تجربة معملية بسيطة.',
      equations: [
        'V = I \\cdot R \\quad [\\text{قانون أوم الأساسي}]',
        'P = V \\cdot I = I^2 \\cdot R \\quad [\\text{القدرة الكهربائية وتبديد الحرارة}]'
      ],
      exampleFigure: {
        id: 'fig-intro-1',
        type: 'electron_drift_node',
        figureNumber: 'شكل 0.1',
        title: 'من حركة الإلكترونات المجهرية إلى سريان التيار في الدائرة',
        titleEn: 'From Microscopic Electron Drift to Circuit Current',
        geekNote: 'سرعة انجراف الإلكترونات في السلك بطيئة جداً (أقل من ميليمتر في الثانية!)، لكن المجال الكهربائي ينتشر بسرعة تقارب سرعة الضوء!',
        geekNoteEn: 'Electrons drift at fractions of a millimeter per second, but the electromagnetic signal propagates at near the speed of light!',
        caption: 'حركة الإلكترونات الحرة داخل الموصل وتدفق التيار وفق مبدأ حفظ الشحنة.',
        captionEn: 'Free electron drift inside a conductor and current flow obeying charge conservation.'
      },
      keyTakeaway: 'الجهد يدفع، والتيار يسري، والمقاومة تعيق؛ هذه المعادلة البسيطة هي حجر الأساس لكل ما يليها.'
    },
    {
      heading: '2. الانتقال إلى التيار المتردد (AC) والأمواج والإشارات',
      headingEn: '2. The Shift to Alternating Current (AC), Waves, and Signals',
      body: 'بينما تضخ البطارية تياراً مستمراً (DC) في اتجاه واحد، تنتج المولدات الكهربائية الدوارة تياراً متناوباً يغير اتجاهه ومقداره بنمط جيبي نقي 50 أو 60 مرة في الثانية (50Hz / 60Hz).\n\nفي عالم AC، لا نكتفي بالمقاومة؛ بل تظهر المكثفات والملفات التي تخزن الطاقة مؤقتاً في مجالات كهربائية ومغناطيسية، وتحدث فروقاً في الطور (Phase Difference) بين الجهد والتيار. وعندما تجتمع هذه المكونات في دائرة RLC، تظهر ظاهرة "الرنين الكهربائي" التي تجعل أجهزة الراديو والمرشحات ممكنة.',
      equations: [
        'v(t) = V_{\\max} \\sin(2\\pi f t) \\quad [\\text{الموجة الجيبية للجهد المتردد}]',
        'f_0 = \\frac{1}{2\\pi \\sqrt{L \\cdot C}} \\quad [\\text{تردد الرنين في دوائر RLC}]'
      ],
      exampleFigure: {
        id: 'fig-intro-2',
        type: 'rlc_energy_slosh',
        figureNumber: 'شكل 0.2',
        title: 'تأرجح وتبادل الطاقة في دوائر التيار المتردد والرنين',
        titleEn: 'Resonant Energy Exchange in AC Circuits',
        geekNote: 'في دوائر AC، تتبادل المكثفات والملفات الطاقة كأنها أرجوحة، دون أن تستهلك واطاً واحداً كحرارة!',
        geekNoteEn: 'In AC circuits, reactive elements oscillate energy like a pendulum without dissipating net energy as heat!',
        caption: 'تبادل الطاقة الكهرومغناطيسية بين المكثف والملف عند تردد الرنين.',
        captionEn: 'Electromagnetic energy exchange between capacitor and inductor at resonance.'
      },
      keyTakeaway: 'التيار المتردد ليس مجرد خط مستقيم، بل رقصة هندسية موجية تحكمها الزوايا والتردد والرنين.'
    },
    {
      heading: '3. نقل الطاقة عبر المسافات والشبكة الكهربائية المتجددة',
      headingEn: '3. Power Transmission & The Modern Renewable Grid',
      body: 'كيف ننقل ميغاوات من الطاقة من محطة توليد تبعد مئات الكيلومترات دون أن تذوب الأسلاك؟ السر يكمن في المحولات الكهربائية: برفع الجهد إلى مئات آلاف الفولتات، ينخفض التيار المار في الخطوط بنسب هائلة، مما يقضي على فواقد الحرارة P_loss = I²·R.\n\nواليوم، مع دخول مزارع الخلايا الشمسية وطاقة الرياح، تواجه الشبكة الكهربائية تحولاً تاريخياً: كيف نحافظ على ثبات تردد الشبكة (50.00 Hz) وتوازنها اللحظي الدقيق عندما تغيب الشمس خلف السحب؟ هنا يأتي دور بطاريات التخزين (BESS) وعواكس الطاقة الذكية التي تشكل مستقبل هندسة القوى.',
      equations: [
        'P_{\\text{loss}} = I^2 \\cdot R \\quad [\\text{فقد النقل: تقليل التيار ينقذ الطاقة}]',
        'P = V \\cdot I \\implies I = \\frac{P}{V}'
      ],
      exampleFigure: {
        id: 'fig-intro-3',
        type: 'grid_transmission_stages',
        figureNumber: 'شكل 0.3',
        title: 'مراحل نقل القدرة الكهربائية من المحطة إلى المنزل',
        titleEn: 'Stages of Power Transmission: From Plant to Domestic Socket',
        geekNote: 'رفع الجهد 10 أضعاف يخفض فواقد نقل الطاقة بمقدار 100 ضعف! لذلك نستخدم خطوط الجهد الفائق.',
        geekNoteEn: 'Stepping up voltage by 10x slashes transmission line losses by 100x!',
        caption: 'مخطط مراحل رفع الجهد للنقل ثم خفضه للتوزيع الآمن.',
        captionEn: 'Schematic of step-up transmission and step-down local distribution.'
      },
      keyTakeaway: 'الشبكة الكهربائية كائن حي لحظي: كل واط يُولد يجب أن يُستهلك في نفس الثانية، وبطاريات التخزين هي صمام الأمان الجديد.'
    }
  ],
  simulationType: 'none',
  videoUrl: 'https://www.youtube.com/embed/mc979OhitAg',
  youtubeId: 'mc979OhitAg',
  videoTitle: 'كيف تعمل الكهرباء وتنتقل الشحنات في الدوائر (The Engineering Mindset)',
  videoTitleEn: 'How Electricity Works - For Visual Learners (The Engineering Mindset)',
  simulationExperiments: [
    {
      id: 'intro-exp-1',
      title: 'التفاعل 1: توصيل بطارية ومصباح ومراقبة تدفق الإلكترونات',
      titleEn: 'Experiment 1: Connect battery and bulb, watch electron flow',
      stepAction: 'في محاكي PhET، اسحب بطارية 9V ومصباحاً 10Ω وأسلاكاً وأغلق المفتاح.',
      stepActionEn: 'In PhET, drag a 9V battery, 10Ω lamp, and copper wires to close the switch.',
      expectedObservation: 'يضيء المصباح فوراً وتبدأ النقاط الزرقاء (الإلكترونات) بالحركة الدورانية المنظمة نحو القطب الموجب.',
      expectedObservationEn: 'Bulb illuminates immediately and blue electron dots drift continuously toward the positive terminal.',
      simpleExplanation: 'البطارية لا تخلق إلكترونات جديدة، بل توفر ضغط فرق الجهد الذي يدفع الإلكترونات الحرة الموجودة مسبقاً في ذرات النحاس.',
      simpleExplanationEn: 'The battery does not create new electrons; it creates an electric field pushing electrons already inside the wire.'
    },
    {
      id: 'intro-exp-2',
      title: 'التفاعل 2: قياس انخفاض الجهد الكامل عبر الحمل',
      titleEn: 'Experiment 2: Measure complete potential drop across load',
      stepAction: 'ضع مجسات الفولتميتر عبر طرفي المصباح.',
      stepActionEn: 'Place voltmeter leads across the two lamp terminals.',
      expectedObservation: 'يقرأ الفولتميتر 9.0 V، وهو نفس جهد البطارية، مما يثبت أن كامل طاقة البطارية تُفرغ في المصباح.',
      expectedObservationEn: 'Voltmeter reads 9.0V, showing all supply electrical potential is converted into light and heat.',
      simpleExplanation: 'مبدأ حفظ الطاقة: كل طاقة الوضع الكهربائي التي اكتسبتها الشحنات من البطارية تتحول بالكامل إلى طاقة إشعاعية وحرارية.',
      simpleExplanationEn: 'Conservation of energy: potential energy provided by the source is fully dissipated across the load.'
    }
  ],
  quiz: [
    {
      id: 'q-intro-1',
      question: 'لماذا تُنقل الكهرباء عبر المسافات الطويلة بجهد فائق (مثل 400,000 فولت) بدلاً من 220 فولت مباشرة؟',
      questionEn: 'Why is electricity transmitted over long distances at ultra-high voltages rather than 220V?',
      options: [
        'لأن رفع الجهد يخفض شدة التيار وبالتالي يقلل الفواقد الحرارية I²·R بشكل هائل',
        'لأن الجهد العالي يمنع الصواعق من ضرب أبراج النقل',
        'لأن سرعة الضوء تزداد عند زيادة الفولتية',
        'لأن كابلات النقل لا تستطيع حمل تيار متردد إلا بالجهد العالي'
      ],
      optionsEn: [
        'Because raising voltage drastically reduces current, slashing I²·R heat losses',
        'Because high voltage prevents lightning strikes on pylons',
        'Because the speed of light increases with voltage',
        'Because cables can only carry AC at ultra-high voltages'
      ],
      correctIndex: 0,
      explanation: 'بما أن القدرة P = V·I، فإن رفع الجهد V يخفض التيار I لنفس القدرة المنقولة. ولأن الفقد الحراري في الأسلاك يتناسب مع مربع التيار (P_loss = I²·R)، فإن خفض التيار يخفض الفقد بنسبة هائلة.',
      explanationEn: 'Since P = V·I, stepping up voltage reduces current. Resistive losses scale with current squared (I²·R), so lower current drastically slashes heat loss.'
    }
  ],
  tags: ['مقدمة شاملة', 'الإلكترونات', 'التيار المتردد', 'نقل الطاقة', 'الشبكة الكهربائية', 'الطاقة المتجددة'],
  tagsEn: ['Comprehensive Overview', 'Electrons', 'AC Current', 'Power Transmission', 'Electrical Grid', 'Renewables']
};
