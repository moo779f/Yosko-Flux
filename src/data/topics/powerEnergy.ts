import { ResearchPaper } from '../../types';

export const POWER_ENERGY_TOPICS: ResearchPaper[] = [
  // 1. TOPIC 5: Active Power, Reactive Power and Power Factor
  {
    id: 'paper-power-factor',
    title: 'القدرة الفعالة والقدرة غير الفعالة ومعامل القدرة',
    titleEn: 'Active Power, Reactive Power and Power Factor',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-22',
    category: 'electrical_power',
    type: 'article',
    progressionIndex: 8,
    progressionCategory: 'القدرة الكهربائية',
    progressionCategoryEn: 'Electrical Power',
    readingTimeMinutes: 8,
    expId: 'PWR-05 • القدرة الفعالة وغير الفعالة ومعامل القدرة',
    statusTag: 'POWER SYSTEMS FOUNDATION // أساسيات نظم القوى',
    statusTagEn: 'POWER SYSTEMS FOUNDATION',
    busStandard: 'P (W) • Q (VAR) • S (VA) • POWER FACTOR cos(φ)',
    investigationQuestion: 'لماذا تدفع المصانع غرامات لشركات الكهرباء إذا شغلت محركات كثيرة دون بنوك مكثفات، بالرغم من أن عداد الواط لا يسجل إلا القدرة الفعالة؟',
    investigationQuestionEn: 'Why do industrial facilities pay penalty fees for running uncompensated induction motors, even if standard wattmeters only register real power?',
    motivation: 'عندما زرت ورشة حدادة مع والدي، رأيت خزانة معدنية كبيرة مكتوب عليها "وحدة تحسين معامل القدرة - بنك مكثفات". سألت المهندس المسؤول: ما علاقة المكثف بتوفير فاتورة الكهرباء؟ شرح لي أن المحركات تحتاج نوعين من القدرة: قدرة تدير العمود، وقدرة تنشئ المجال المغناطيسي! أردت أن أتعمق في هذه الحقيقة الهندسية الرائعة.',
    motivationEn: 'Visiting an industrial machine shop, I noticed a large cabinet labeled "Power Factor Correction - Capacitor Bank". The technician explained that motors need two types of power: real power to spin the shaft and reactive power to create magnetic fields. That drove me to master the power triangle.',
    abstract: 'شرح تحليلي واضح ومبسط للفرق بين القدرة الفعالة (Active/Real Power - P) المقاسة بالواط، والقدرة غير الفعالة (Reactive Power - Q) المقاسة بالفار، والقدرة الظاهرية (Apparent Power - S) المقاسة بالفولت أمبير. نقدم مثلث القدرة بطريقة هندسية حدسية، ونوضح لماذا تسبب المحركات الحثية تأخر التيار وانخفاض معامل القدرة (cos φ)، وكيف تعالج بنوك المكثفات هذه المشكلة.',
    abstractEn: 'An intuitive yet rigorous exploration of the power triangle: Active Power (P in Watts) doing mechanical work, Reactive Power (Q in VAR) sustaining magnetic fields, Apparent Power (S in VA) carried by lines, and Power Factor (cos φ), detailing industrial capacitor compensation.',
    keyFindings: [
      'القدرة الفعالة (P) هي الطاقة الحقيقية المتحولة إلى حركة أو حرارة أو ضوء، وتُقاس بالواط (W).',
      'القدرة غير الفعالة (Q) تتأرجح ذهاباً وإياباً بين المصدر والحمل لبناء المجالات المغناطيسية دون استهلاك صافٍ، وتُقاس بالفار (VAR).',
      'معامل القدرة (Power Factor = P/S = cos φ) يقيس كفاءة استغلال السعة الكهربائية للأسلاك والمحولات.'
    ],
    whatILearned: [
      'فهمت مثلث القدرة: مثلث قائم الزاوية ضلعه الأفقي P، وضلعه الرأسي Q، ووتره S وفق فيثاغورس S² = P² + Q².',
      'أدركت لماذا تكره شركات الكهرباء انخفاض معامل القدرة: انخفاضه يعني أن السلك يحمل تياراً كبيراً جداً (I = S / V) دون أن ينتج عملاً حقيقياً إضافياً، مما يرفع فواقد الحرارة في شبكة النقل P_loss = I²·R!',
      'تعلمت كيف يحسن المهندسون معامل القدرة: توصيل مكثفات على التوازي يوفر القدرة غير الفعالة محلياً للمحرك بدلاً من جلبها عبر كابلات الشبكة لمسافات طويلة.'
    ],
    whatILearnedEn: [
      'Power triangle intuition: right triangle with P (adjacent), Q (opposite), and S (hypotenuse) obeying S² = P² + Q².',
      'Why utilities penalize low power factor: low PF inflates line current (I = S/V), escalating grid Joule losses (I²R).',
      'Capacitor correction: shunt capacitors supply local reactive VARs, unloading utility transmission cables.'
    ],
    nextStudyGoals: [
      'فهم كيفية نقل هذه القدرة عبر مسافات طويلة بكفاءة عالية: دور محولات الرفع وتقليل فواقد النقل.'
    ],
    nextStudyGoalsEn: [
      'Study how power is transmitted efficiently over hundreds of kilometers using step-up transformers.'
    ],
    contentSections: [
      {
        heading: '1. أنواع القدرة الثلاثة ومثلث القدرة الكهربائي',
        headingEn: '1. The Three Forms of Power and the Power Triangle',
        body: 'في دوائر التيار المستمر (DC)، القدرة بسيطة جداً: P = V · I. ولكن في دوائر التيار المتردد (AC)، بسبب وجود مكثفات وملفات تحدث فرقاً في الطور (φ) بين الجهد والتيار، تنقسم القدرة إلى ثلاثة مفاهيم حيوية:\n\n1. القدرة الفعالة (Active / Real Power - P): هي القدرة المستهلكة فعلياً في إنجاز شغل ميكانيكي (دوران محرك) أو إنتاج حرارة وضوء. تُقاس بالواط (Watt) أو الكيلوواط (kW):\nP = V · I · cos(φ)\n\n2. القدرة غير الفعالة (Reactive Power - Q): هي القدرة التي تتأرجح ذهاباً وإياباً بين المولد والحمل لبناء المجالات المغناطيسية في المحركات والمحولات والمجالات الكهربائية في المكثفات. لا تستهلك أي طاقة نهائية لكنها ضرورية جداً لعمل الآلات! تُقاس بالفار (VAR):\nQ = V · I · sin(φ)\n\n3. القدرة الظاهرية (Apparent Power - S): هي الحصيلة الكلية للجهد والتيار في السلك (المحسوبة بضرب قراءة الفولتميتر في قراءة الأميتر). تُقاس بالفولت أمبير (VA):\nS = V · I = √[ P² + Q² ]',
        equations: [
          'P = V_{\\text{rms}} \\cdot I_{\\text{rms}} \\cdot \\cos(\\phi) \\quad [\\text{القدرة الفعالة بالواط}]',
          'Q = V_{\\text{rms}} \\cdot I_{\\text{rms}} \\cdot \\sin(\\phi) \\quad [\\text{القدرة غير الفعالة بالفار}]',
          'S = \\sqrt{P^2 + Q^2} = V_{\\text{rms}} \\cdot I_{\\text{rms}} \\quad [\\text{القدرة الظاهرية بالـ VA}]',
          '\\text{PF} = \\frac{P}{S} = \\cos(\\phi) \\quad [\\text{معامل القدرة}]'
        ],
        exampleFigure: {
          id: 'fig-pf-1',
          type: 'power_triangle_grid',
          figureNumber: 'شكل 8.1',
          title: 'مثلث القدرة وتأثير زاوية الطور φ على القدرة الظاهرية S',
          titleEn: 'The Power Triangle: Geometric Relationship of P, Q, and S',
          geekNote: 'تشبيه كوب العصير الشهير: السائل في الأسفل هو القدرة الفعالة P التي تروي عطشك، والرغوة في الأعلى هي Q الضرورية لملء الكوب، والكوب بأكمله هو السعة S المطلوبة من الكابل!',
          geekNoteEn: 'The soda glass analogy: the beverage is real power P doing the work; the foam is reactive power Q needed to hold the head; the glass size is total apparent power S!',
          caption: 'مثلث فيثاغورس الكهربائي يربط بين القدرة الفعالة P، والقدرة التفاعلية Q، والقدرة الظاهرية S.',
          captionEn: 'Pythagorean power triangle showing real power P, reactive power Q, and apparent power S.'
        },
        keyTakeaway: 'القدرة الفعالة P تنتج الحركة والحرارة، والقدرة غير الفعالة Q تبني المجال المغناطيسي، ومجموعهما الاتجاهي هو S.'
      },
      {
        heading: '2. معامل القدرة (cos φ) ولماذا تركب المصانع بنوك مكثفات؟',
        headingEn: '2. Power Factor and the Engineering Solution of Capacitor Banks',
        body: 'معامل القدرة (Power Factor - PF) هو النسبة بين ما تستفيد منه فعلياً وما تحمله الأسلاك:\nPF = P / S = cos(φ)\n\nقيمة معامل القدرة تتراوح بين 0 و 1:\n- إذا كان الحمل مقاومات نقية (سخانات ومصابيح حرارية): φ = 0، وبالتالي cos(φ) = 1 (معامل قدرة مثالي، كل التيار يتحول لشغل نافع).\n- إذا كان الحمل محركات حثية (مصانع، مضخات، مكيفات): يتأخر التيار عن الجهد، وتصبح φ زاوية موجبة (مثلاً 45 درجة)، فينخفض cos(φ) إلى 0.707!\n\nمثال عملي يوضح المشكلة:\nمصنع يطلب قدرة ميكانيكية P = 100 kW عند جهد 400V:\n- إذا كان معامل القدرة ممتازاً (PF = 1.0): التيار المسحوب I = 100,000 / (400) = 250A.\n- إذا هبط معامل القدرة إلى (PF = 0.5): يصبح التيار المسحوب I = 100,000 / (400 × 0.5) = 500A!\nتضاعف التيار إلى 500 أمبير يعني أن الأسلاك والمحولات تسخن بأربعة أضعاف (P_loss = I²·R)، مما يهدد باحتراق الكابلات.\n\nالحل الهندسي: نضع بنك مكثفات بجوار المحركات. المكثف يولد قدرة غير فعالة سعوية (+Q_C) تعادل تماماً الطلب الحثي للمحرك (-Q_L)، فتنكمش زاوية الطور φ إلى الصفر تقريباً، ويهبط التيار المسحوب من الشبكة للحد الأدنى!',
        equations: [
          'I_{\\text{line}} = \\frac{P}{V \\cdot \\cos(\\phi)} \\implies \\text{انخفاض } \\cos(\\phi) \\text{ يضاعف تيار النقل}',
          'Q_{\\text{capacitor}} = P \\cdot [\\tan(\\phi_1) - \\tan(\\phi_2)] \\quad [\\text{حساب سعة المكثف المطلوبة للتعويض}]'
        ],
        diagramNotes: 'تعويض القدرة غير الفعالة محلياً لا يقلل من الطاقة التي يستهلكها المحرك، لكنه يحرر كابلات الشبكة من حمل تيار الرغوة المغناطيسية.',
        keyTakeaway: 'تحسين معامل القدرة بواسطة المكثفات يخفض شدة التيار في كابلات النقل ويمنع إهدار الطاقة الحرارية.'
      }
    ],
    simulationType: 'none',
    videoUrl: 'https://www.youtube.com/embed/Tv_7XWf96gg',
    youtubeId: 'Tv_7XWf96gg',
    videoTitle: 'شرح معامل القدرة والقدرة الفعالة وغير الفعالة (The Engineering Mindset)',
    videoTitleEn: 'Power Factor Explained - The basics what is power factor (The Engineering Mindset)',
    simulationExperiments: [
      {
        id: 'pf-exp-1',
        title: 'التفاعل 1: مراقبة تأخر تيار الحمل الحثي وانخفاض PF',
        titleEn: 'Experiment 1: Monitor inductive lag and low PF',
        stepAction: 'شغل حملاً حثياً (محرك 2kW) دون مكثف وراقب عداد القدرة P و Q وزاوية الطور.',
        stepActionEn: 'Run inductive 2kW load without capacitor, note P and Q meters and phase shift.',
        expectedObservation: 'يتأخر التيار بزاوية 45°، ويرتفع عداد Q إلى 2000 VAR، ويهبط معامل القدرة إلى 0.70.',
        expectedObservationEn: 'Current lags voltage by 45 degrees, Q meter reads 2000 VAR, and PF drops to 0.70.',
        simpleExplanation: 'المحركات تستهلك طاقة مغناطيسية لبناء المجال الدوار؛ هذه الطاقة تتأرجح في الأسلاك دون شغل ميكانيكي نافع.',
        simpleExplanationEn: 'Motors require magnetic power to excite fields, sloshing current back and forth uselessly.'
      },
      {
        id: 'pf-exp-2',
        title: 'التفاعل 2: توصيل بنك المكثفات ورفع معامل القدرة إلى 0.98',
        titleEn: 'Experiment 2: Connect capacitor bank to boost PF to 0.98',
        stepAction: 'صل مكثفاً بالتوازي مع المحرك وراقب انخفاض التيار الرئيسي المسحوب.',
        stepActionEn: 'Connect capacitor in parallel with motor and observe supply line current.',
        expectedObservation: 'ينخفض التيار المسحوب من المحطة بنسبة 30% مع بقاء المحرك يعمل بكامل طاقته الميكانيكية.',
        expectedObservationEn: 'Supply line current drops by 30% while motor maintains identical mechanical power output.',
        simpleExplanation: 'المكثف يزود المحرك بالطاقة التفاعلية محلياً، فيحرر كابلات النقل من حمل التيار الزائد ويخفض الفواقد.',
        simpleExplanationEn: 'The capacitor supplies reactive power locally, relieving transmission cables of wasted thermal burden.'
      }
    ],
    quiz: [
      {
        id: 'q-pf-1',
        question: 'إذا كان مصنع يستهلك 80 كيلوواط من القدرة الفعالة (P) و 60 كيلوفار من القدرة غير الفعالة (Q)، فما هي القدرة الظاهرية (S) ومعامل القدرة (PF)؟',
        questionEn: 'A facility consumes 80 kW real power and 60 kVAR reactive power. What is total apparent power S and power factor PF?',
        options: [
          'S = 100 kVA، ومعامل القدرة PF = 0.80',
          'S = 140 kVA، ومعامل القدرة PF = 0.57',
          'S = 20 kVA، ومعامل القدرة PF = 0.75',
          'S = 100 kVA، ومعامل القدرة PF = 0.60'
        ],
        optionsEn: [
          'S = 100 kVA, Power Factor PF = 0.80',
          'S = 140 kVA, Power Factor PF = 0.57',
          'S = 20 kVA, Power Factor PF = 0.75',
          'S = 100 kVA, Power Factor PF = 0.60'
        ],
        correctIndex: 0,
        explanation: 'S = √(80² + 60²) = √(6400 + 3600) = √10000 = 100 kVA. ومعامل القدرة PF = P / S = 80 / 100 = 0.80.',
        explanationEn: 'S = √(80² + 60²) = 100 kVA. PF = P / S = 80 / 100 = 0.80.'
      }
    ],
    tags: ['القدرة الفعالة', 'القدرة غير الفعالة', 'معامل القدرة', 'مثلث القدرة', 'بنوك المكثفات', 'فواقد الكابلات'],
    tagsEn: ['Active Power', 'Reactive Power', 'Power Factor', 'Power Triangle', 'Capacitor Banks', 'Line Losses']
  },

  // 2. TOPIC 6: How Electrical Power Is Transmitted Efficiently
  {
    id: 'paper-power-transmission',
    title: 'كيف تنتقل الطاقة الكهربائية بكفاءة؟',
    titleEn: 'How Electrical Power Is Transmitted Efficiently',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-24',
    category: 'power_transmission',
    type: 'article',
    progressionIndex: 9,
    progressionCategory: 'نقل الطاقة والشبكات',
    progressionCategoryEn: 'Transmission & Grid',
    readingTimeMinutes: 7,
    expId: 'TRANS-06 • كفاءة نقل القدرة والجهد الفائق',
    statusTag: 'POWER TRANSMISSION // نقل القدرة',
    statusTagEn: 'POWER TRANSMISSION',
    busStandard: 'STEP-UP TRANSFORMERS • I²R LOSSES • 400kV TO 220V',
    investigationQuestion: 'لماذا نبني أبراج نقل ضخمة بارتفاع عمارات سكنية ونرفع الجهد إلى 400,000 فولت، بينما نحتاج في بيوتنا إلى 220 فولت فقط؟',
    investigationQuestionEn: 'Why do we erect massive transmission pylons carrying 400,000 volts when domestic household appliances only require 220 volts?',
    motivation: 'عندما سافرت في الطريق بين المدن، رأيت خطوط الكهرباء الهوائية الضخمة تمتد لآلاف الكيلومترات عبر الصحراء. تساءلت: إذا كانت الكهرباء تسير في أسلاك نحاسية عادية، ألا تضيع كلها في الطريق كحرارة؟ عندما قمت بحساب الفقد الحراري بمعادلة جول P = I²·R وقارنت بين النقل بجهد 10kV والجهد الفائق 400kV، أدركت العبقرية الهندسية للمحولات الكهربائية.',
    motivationEn: 'Driving between cities, I saw high-voltage transmission lines stretching endlessly across the terrain. Wouldn\'t resistance waste all the power as heat? Computing Joule losses with P = I²R across voltage tiers revealed the sheer brilliance of step-up transformers.',
    abstract: 'دراسة هندسية متكاملة لرحلة الكهرباء من محطات التوليد إلى المنازل والمصانع: دور محولات الرفع في تقليل شدة التيار، والبرهان الرياضي والعددي لانخفاض الفواقد الحرارية بنسبة مربع نسبة مضاعفة الجهد، وصولاً إلى محطات التوزيع ومحولات الخفض الآمنة، مع إسقاط على تحديات ومشاريع الشبكات الكهربائية في إفريقيا وتشاد.',
    abstractEn: 'A comprehensive investigation of power transmission from generation plants to residential sockets: step-up transformer operation, Joule heating loss derivation (P_loss = I²R), numerical proof of efficiency gains, and distribution substations delivering safe 220V power.',
    keyFindings: [
      'الفقد الحراري في خطوط النقل يتناسب طردياً مع مربع شدة التيار (P_loss = I²·R).',
      'رفع الجهد 10 أضعاف يخفض شدة التيار بمقدار 10 أضعاف لنفس القدرة المنقولة، مما يخفض الفقد الحراري 100 مرة (10² = 100).',
      'المحولات الكهربائية لا تصنع طاقة من العدم، بل تبادل الجهد المرتفع بالتيار المنخفض وفق مبدأ حفظ القدرة (P_in ≈ P_out).'
    ],
    whatILearned: [
      'تعلمت حل مثال عددي حقيقي: لنقل 10 ميغاوات عبر خط مقاومته 5 أوم، النقل بجهد 10kV يضيع 50% من الطاقة كحرارة، بينما النقل بجهد 100kV يضيع 0.5% فقط!',
      'فهمت التسلسل الهرمي للشبكة: توليد (11kV) -> محول رفع (400kV) -> خطوط نقل المسافات الطويلة -> محول خفض محلي (33kV/11kV) -> محول حي سكني (220V).',
      'أدركت أن الشبكة تحتاج لموازنة لحظية تامة بين التوليد والاستهلاك لمنع انقطاع التيار الشامل (Blackout).'
    ],
    whatILearnedEn: [
      'Solved numerical proof: transmitting 10MW across a 5Ω line wastes 50% at 10kV, but only 0.5% at 100kV.',
      'Grid hierarchy: generation (11kV) -> step-up (400kV) -> long-distance transmission -> substations (33/11kV) -> pole transformers (220V).',
      'Continuous instantaneous power balance prevents frequency collapse and regional blackouts.'
    ],
    nextStudyGoals: [
      'دراسة مصادر الطاقة المتجددة (الخلايا الشمسية الكهروضوئية) وكيف تتصل بهذه الشبكة الكهربائية المعقدة.'
    ],
    nextStudyGoalsEn: [
      'Explore renewable photovoltaic generation and how solar parks interface with the power grid.'
    ],
    contentSections: [
      {
        heading: '1. لغز الفقد الحراري النحاسي: معادلة جول P_loss = I²·R',
        headingEn: '1. The Joule Heating Loss Mystery: P_loss = I²·R',
        body: 'أي سلك موصل مهما كان سميكاً ومصنوعاً من أفضل أنواع النحاس أو الألمنيوم يمتلك مقاومة كهربائية داخلية (R). وعندما يمر به تيار كهربائي (I)، تتصادم الإلكترونات بذرات المعدن وتتحول جزء من الطاقة الكهربائية إلى حرارة تشع في الهواء وتضيع للأبد.\n\nهذا الفقد الحراري يحكمه قانون جول الشهير:\nP_loss = I² · R\n\nلاحظ التربيع على شدة التيار (I²)! إذا تضاعف التيار مرتين، ترتفع الحرارة الضائعة أربعة أضعاف. وإذا زاد التيار 10 مرات، يقفز الفقد 100 ضعف!\nمن جهة أخرى، القدرة الكهربائية الإجمالية المنقولة هي حاصل ضرب الجهد في التيار:\nP = V · I  =>  I = P / V\n\nوهنا تكمن العبقرية الهندسية: إذا أردنا نقل قدرة ضخمة P عبر مسافات طويلة، كيف نتفادى ضياعها في الأسلاك؟\nالحل: نرفع الجهد (V) إلى قيم فائقة جداً (مثل 220,000 أو 400,000 فولت)، فينهار التيار (I) إلى قيم صغيرة جداً، فينخفض الفقد الحراري I²·R إلى الحد الأدنى!',
        equations: [
          'P_{\\text{transmitted}} = V \\cdot I \\implies I = \\frac{P}{V}',
          'P_{\\text{loss}} = I^2 \\cdot R = \\left(\\frac{P}{V}\\right)^2 \\cdot R = \\frac{P^2 \\cdot R}{V^2}',
          '\\frac{P_{\\text{loss, high}}}{P_{\\text{loss, low}}} = \\left(\\frac{V_{\\text{low}}}{V_{\\text{high}}}\\right)^2'
        ],
        exampleFigure: {
          id: 'fig-trans-1',
          type: 'loss_comparison_bars',
          figureNumber: 'شكل 9.1',
          title: 'مقارنة فواقد النقل الحرارية بين الجهد المنخفض والجهد الفائق',
          titleEn: 'Transmission Loss Comparison: Low Voltage vs Ultra-High Voltage',
          geekNote: 'انظر للعمودين: بالجهد المنخفض يضيع نصف الوقود كحرارة في الأسلاك، بينما بالجهد الفائق يصل 99.5% من الوقود إلى بيتك!',
          geekNoteEn: 'Comparing the bars: low-voltage loses half the energy to heat, whereas high-voltage safely delivers 99.5%!',
          caption: 'مقارنة كمية الفقد الحراري P_loss بين النقل بجهد 10kV والنقل بجهد 100kV لنفس القدرة 10MW.',
          captionEn: 'Comparison of resistive loss P_loss between 10kV and 100kV transmission for 10MW power throughput.'
        },
        keyTakeaway: 'الفقد يتناسب عكسياً مع مربع الجهد (1/V²)؛ مضاعفة الجهد 10 مرات تخفض الفقد الحراري 100 مرة.'
      },
      {
        heading: '2. حساب عددي ملموس ورحلة الكهرباء من المحطة إلى القابس المنزلي',
        headingEn: '2. Solved Numerical Example & The Journey from Plant to Home',
        body: 'لنبرهن على ذلك بالأرقام:\nلنفترض أن محطة توليد تريد نقل قدرة قدرها P = 10 MW (10,000,000 واط) إلى مدينة تبعد مسافة معينة، وكانت مقاومة خط النقل الإجمالية R = 5 Ω.\n\nالحالة الأولى: لو نقلنا الكهرباء بجهد متوسط V = 10 kV (10,000 V):\n- شدة التيار: I = 10,000,000 / 10,000 = 1,000 أمبير.\n- الفقد الحراري في الخط: P_loss = (1,000)² × 5 = 5,000,000 واط = 5 ميغاوات!\nأي أن نصف الطاقة المولدة (50%) تبخرت كحرارة في الجو وتلفت!\n\nالحالة الثانية: لو استخدمنا محول رفع ورفعنا الجهد إلى V = 100 kV (100,000 V):\n- شدة التيار: I = 10,000,000 / 100,000 = 100 أمبير فقط.\n- الفقد الحراري في الخط: P_loss = (100)² × 5 = 50,000 واط = 0.05 ميغاوات فقط!\nنسبة الفقد انخفضت من 50% إلى 0.5% فقط، ووصلت 99.5% من الكهرباء بسلام!\n\nرحلة الكهرباء الكاملة:\n1. محطة التوليد (Generation): تولد الطاقة عند 11kV - 25kV.\n2. محطة محولات الرفع (Step-Up Substation): ترفع الجهد إلى 220kV - 400kV لخطوط النقل الوطنية.\n3. محطة محولات التخفيض الرئيسية (Grid Substation): تخفضه إلى 33kV أو 11kV لتوزيعه داخل شوارع المدن.\n4. محول الحي السكني (Distribution Transformer): يحوله إلى 400V (بين الأطوار) و 220V (بين الطور والمتعادل) لتشغيل مقابس المنازل بأمان.',
        equations: [
          '\\text{Case 1 (10kV): } I = 1000\\text{A} \\implies P_{\\text{loss}} = 5.0\\text{ MW } (50\\% \\text{ loss})',
          '\\text{Case 2 (100kV): } I = 100\\text{A} \\implies P_{\\text{loss}} = 0.05\\text{ MW } (0.5\\% \\text{ loss})',
          '\\eta = \\frac{P_{\\text{received}}}{P_{\\text{sent}}} = \\frac{9.95\\text{ MW}}{10.0\\text{ MW}} = 99.5\\%'
        ],
        exampleFigure: {
          id: 'fig-trans-2',
          type: 'grid_transmission_stages',
          figureNumber: 'شكل 9.2',
          title: 'سلسلة مراحل نقل وتوزيع الطاقة من التوليد إلى الاستهلاك',
          titleEn: 'End-to-End Transmission Hierarchy: From Generation to Socket',
          geekNote: 'كل مرحلة تخفيض يقابلها زيادة في سمك الكابلات لأن التيار يرتفع تدريجياً كلما اقتربنا من الأحياء!',
          geekNoteEn: 'Each step-down stage requires thicker conductors as current escalates nearer to consumer load centers!',
          caption: 'مخطط هرمي يوضح محولات الرفع وخطوط النقل ومحولات التوزيع حتى الوصول لجهد 220V المنزلي.',
          captionEn: 'Grid hierarchy showing step-up stations, long-haul transmission, substations, and final 220V delivery.'
        },
        keyTakeaway: 'المحولات الكهربائية هي شريان الحياة للشبكة: ترفع الجهد لتقليل فواقد النقل وتخفضه لتأمين سلامة المنازل.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/q3aGg3K3wT0',
    videoTitle: 'كيف تعمل شبكة نقل الكهرباء ومحولات الجهد الفائق؟ (Practical Engineering)',
    videoTitleEn: 'How Does the Power Grid Work? Transmission Lines & Substations',
    videoTopics: [
      '00:00 - محطات التوليد ولماذا نولد بجهد متوسط',
      '04:10 - محولات الرفع Step-Up إلى 400,000 فولت',
      '08:30 - حساب الفقد الحراري النحاسي I²·R في خطوط النقل',
      '12:50 - محطات التوزيع ومحولات الخفض إلى 220 فولت'
    ],
    simulationType: 'none',
    quiz: [
      {
        id: 'q-trans-1',
        question: 'إذا رفعت محطة محولات جهد خط نقل كهربائي بمقدار 5 أضعاف (من 20kV إلى 100kV) لنقل نفس كمية القدرة، فماذا يحدث للفقد الحراري (P_loss) في الأسلاك؟',
        questionEn: 'If a step-up transformer increases transmission voltage by 5 times for the same power, what happens to heat losses?',
        options: [
          'ينخفض الفقد الحراري بمقدار 25 مرة (5² = 25)',
          'ينخفض الفقد الحراري بمقدار 5 مرات فقط',
          'يتضاعف الفقد الحراري 5 مرات',
          'يظل الفقد الحراري كما هو دون أي تغيير'
        ],
        optionsEn: [
          'Heat loss drops by 25 times (5² = 25)',
          'Heat loss drops by 5 times only',
          'Heat loss increases 5 times',
          'Heat loss remains unchanged'
        ],
        correctIndex: 0,
        explanation: 'التيار ينخفض بمقدار 5 مرات (I = P/V). وبما أن الفقد يتناسب مع مربع التيار P_loss = I²·R، فإن الفقد ينخفض بمقدار 5² = 25 مرة.',
        explanationEn: 'Current drops by 5x (I = P/V). Because losses scale as I²·R, total losses decrease by 5² = 25 times.'
      }
    ],
    tags: ['نقل الطاقة', 'محولات الرفع', 'الفقد الحراري', 'قانون جول', 'الجهد الفائق 400kV', 'الشبكة الكهربائية'],
    tagsEn: ['Power Transmission', 'Step-Up Transformers', 'Joule Losses', 'Joule Law', 'Ultra-High Voltage', 'Power Grid']
  },

  // 3. Solar Energy and the Electrical Grid
  {
    id: 'paper-solar-grid',
    title: 'الطاقة الشمسية والشبكة الكهربائية',
    titleEn: 'Solar Energy and the Electrical Grid',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-26',
    category: 'solar_energy',
    type: 'article',
    progressionIndex: 10,
    progressionCategory: 'الطاقة الشمسية والتخزين',
    progressionCategoryEn: 'Solar & Storage',
    readingTimeMinutes: 7,
    expId: 'SOLAR-07 • الطاقة الشمسية ومنحنى البطة',
    statusTag: 'SOLAR INTEGRATION // تكامل الطاقة الشمسية',
    statusTagEn: 'SOLAR INTEGRATION',
    busStandard: 'PHOTOVOLTAIC • DUCK CURVE • BESS BUFFERING',
    investigationQuestion: 'لماذا تواجه الشبكات الكهربائية صعوبة في استيعاب الطاقة الشمسية رغم أنها طاقة نظيفة ومجانية؟ وما هو منحنى البطة (Duck Curve)؟',
    investigationQuestionEn: 'Why do electrical grids struggle to absorb massive solar energy even though sunlight is clean and free, and what is the Duck Curve?',
    motivation: 'في وطني تشاد، تشرق الشمس بمتوسط يزيد عن 3,000 ساعة سنوياً وبإشعاع هائل. كنت أتساءل: لماذا لا نغطي الصحراء بالألواح الشمسية ونحل مشكلة الكهرباء للأبد؟ عندما بدأت أقرأ في هندسة الشبكات، اكتشفت التحدي الأكبر: الشمس تشرق وقت الظهر عندما تكون المصانع والمنازل أقل استهلاكاً، وتغيب وقت المساء عندما يعود الناس لبيوتهم ويشعلون كل الأجهزة!',
    motivationEn: 'In Chad, we have over 3,000 hours of intense sunshine annually. Why couldn\'t we simply carpet the desert with solar panels and power everything? Studying grid engineering revealed the timing mismatch: peak sunshine arrives at noon, while peak domestic demand surges in the evening!',
    abstract: 'دراسة استكشافية واقعية لتكامل الطاقة الشمسية الكهروضوئية في شبكات الكهرباء: ميكانيكا الخلية الشمسية في تحويل الفوتونات إلى تيار مستمر DC، ومنحنى الإنتاج اليومي وتحدي التقطع (Intermittency)، وفكرة "منحنى البطة" (Duck Curve) الناتج عن تباين أوقات الإنتاج والاستهلاك، ودور بطاريات التخزين وعواكس القدرة في سد هذه الفجوة.',
    abstractEn: 'A realistic exploratory study of solar PV grid integration: semiconductor photon-to-DC conversion, daily solar generation profile, intermittency caused by clouds, the famous Duck Curve timing mismatch, and the buffering role of battery storage systems.',
    keyFindings: [
      'الألواح الشمسية تولد تياراً مستمراً (DC) تبلغ ذروته في الظهيرة وتتلاشى تماماً بعد الغروب.',
      'ذروة استهلاك المنازل تحدث في المساء (بين 6 و 9 مساءً)، مما يصنع فجوة زمنية حادة بين العرض والطلب تسمى "منحنى البطة".',
      'تخزين الطاقة عبر بطاريات BESS يسمح بنقل الفائض الشمسي النهاري إلى ساعات المساء لتحقيق استقرار الشبكة.'
    ],
    whatILearned: [
      'فهمت كيف تصنع الخلية الكهروضوئية فرق جهد: فوتونات الضوء تضرب وصلة السيليكون p-n فتحرر إلكترونات وتدفعها في اتجاه واحد.',
      'أدركت معنى "منحنى البطة": في الظهيرة تنتج الألواح فائضاً هائلاً ينزل بـ "صافي الحمل" للأسفل (بطن البطة)، وعند الغروب يرتفع الطلب فجأة بشكل حاد (رقبة البطة) مما يربك المحطات التقليدية.',
      'فهمت أن الطاقة الشمسية وحدها دون تخزين لا تستطيع تأمين استقرار الشبكة على مدار 24 ساعة.'
    ],
    whatILearnedEn: [
      'Photovoltaic mechanics: photons excite electron-hole pairs across a silicon p-n junction.',
      'The Duck Curve dynamic: noon solar surplus drops net load to a deep trough; sunset creates an aggressive evening ramp.',
      'Solar generation cannot operate as a standalone reliable 24/7 grid without energy storage buffers.'
    ],
    nextStudyGoals: [
      'التعمق في تكنولوجيا البطاريات الكيميائية: كيف تخزن الكهرباء وما هي مواصفاتها الهندسية؟'
    ],
    nextStudyGoalsEn: [
      'Deepen understanding of electrochemical battery technology and energy storage parameters.'
    ],
    contentSections: [
      {
        heading: '1. كيف تعمل الألواح الشمسية؟ وتحدي التقطع اللحظي',
        headingEn: '1. How Solar PV Cells Work & The Intermittency Challenge',
        body: 'الخلية الكهروضوئية (Photovoltaic Cell) مصنوعة من رقائق السيليكون المعالجة لتكوين وصلة ثنائية (p-n junction).\nعندما تسقط فوتونات أشعة الشمس بطاقة كافية، تضرب إلكترونات ذرات السيليكون وتحررها. المجال الكهربائي الداخلي في الوصلة يجبر هذه الإلكترونات المحررة على التدفق في اتجاه واحد، مما يولد فرق جهد مقداره حوالي 0.5 إلى 0.6 فولت لكل خلية.\n\nتحدي التقطع (Intermittency):\nالكهرباء المولدة من الشمس لها خاصيتان تفرضان تحديات هندسية:\n1. إنها تيار مستمر (DC): بينما شبكتنا تعمل بالتيار المتردد (AC)، مما يتطلب عواكس إلكترونية (Inverters) لتحويلها.\n2. التقطع الشديد: إذا مرت غيمة سريعة فوق مزرعة شمسية طاقتها 20 ميغاوات، قد يهبط إنتاجها إلى 3 ميغاوات خلال 15 ثانية فقط! هذا الانخفاض المفاجئ يجبر الشبكة على البحث عن مصدر تعويض لحظي فوري منعاً لهبوط التردد.',
        equations: [
          'E_{\\text{photon}} = h \\cdot \\nu \\ge E_g \\quad [\\text{شرط تحرير الإلكترون في السيليكون}]',
          'P_{\\text{PV}} = G \\cdot A \\cdot \\eta_{\\text{cell}} \\quad [\\text{القدرة المولدة بدلالة الإشعاع والمساحة والكفاءة}]'
        ],
        exampleFigure: {
          id: 'fig-sol-1',
          type: 'pv_cell_pn_junction',
          figureNumber: 'شكل 10.1',
          title: 'تحرير الإلكترونات في وصلة السيليكون الكهروضوئية p-n',
          titleEn: 'Photon Absorption & Electron Excitation in Silicon p-n Junction',
          geekNote: 'الفوتون يحرر زوج إلكترون-فجوة؛ والمجال الداخلي للوصلة يفصل الشحنتين ليمنعهما من الاتحاد مجدداً قبل المرور في الدائرة الخارجية!',
          geekNoteEn: 'Photons generate electron-hole pairs; the junction electric field sweeps them apart to drive external current!',
          caption: 'مخطط فيزيائي لحركة الإلكترونات الحرة عبر الوصلة الكهروضوئية تحت أشعة الشمس.',
          captionEn: 'Physical schematic of charge separation across a photovoltaic p-n junction under solar radiation.'
        },
        keyTakeaway: 'الخلية الشمسية تحول الضوء مباشرة إلى كهرباء مستمرة، لكن تقلبات السحب تفرض تقطعاً يحتاج لإدارة ذكية.'
      },
      {
        heading: '2. توقيت الإنتاج مقابل توقيت الاستهلاك ولغز "منحنى البطة"',
        headingEn: '2. Generation Timing vs Consumption: The Duck Curve',
        body: 'المشكلة الجوهرية في الطاقة الشمسية ليست في "كمية" الطاقة، بل في "توقيتها":\n- إنتاج الشمس يصل ذروته في منتصف النهار (12 ظهراً إلى 2 بعد الظهر) حيث تكون السماء صافية وأشعة الشمس عمودية.\n- استهلاك المنازل والمجتمع يصل ذروته في المساء (6 مساءً إلى 9 ليلاً) عندما يعود الناس لبيوتهم، ويشعلون المكيفات، والأضواء، والتلفزيونات، وتبدأ الإنارة العامة للشوارع.\n\nمنحنى البطة (The Duck Curve):\nعندما نطرح إنتاج الطاقة الشمسية من إجمالي الطلب اليومي للكهرباء، نحصل على ما يسمى "صافي الحمل" (Net Load):\n1. في الظهيرة: ينخفض صافي الحمل انخفاضاً شديداً كأنك تنظر إلى "بطن البطة الغارق في الماء". في بعض الأحيان يكون الإنتاج الشمسي أكبر من حاجة الشبكة مما يجبر المشغلين على هدر الطاقة (Curtailment).\n2. مع غروب الشمس: تنحدر الطاقة الشمسية إلى الصفر بسرعة، بينما يصعد استهلاك الناس للمساء؛ فيرتفع صافي الحمل بشكل رأسي حاد يشبه "عنق البطة"!\n\nهذا الصعود الصاروخي يجبر محطات التوليد التقليدية على العمل بأقصى سرعة خلال ساعة واحدة فقط، وهو إجهاد ميكانيكي وحراري هائل. الحل الحقيقي لهذا اللغز هو تخزين طاقة الشمس الفائضة في الظهيرة بواسطة بطاريات ضخمة وتفريغها وقت عنق البطة المسائي.',
        equations: [
          'P_{\\text{Net Load}}(t) = P_{\\text{Demand}}(t) - P_{\\text{Solar}}(t)',
          '\\Delta P_{\\text{ramp}} = \\frac{d P_{\\text{Net}}}{dt} \\quad [\\text{معدل الصعود المسائي الحاد}]'
        ],
        exampleFigure: {
          id: 'fig-sol-2',
          type: 'solar_duck_curve_bess',
          figureNumber: 'شكل 10.2',
          title: 'منحنى البطة اليومي ودور بطاريات التخزين في موازنة الاستهلاك',
          titleEn: 'The Duck Curve: Flattening Net Load Ramps via Battery Storage',
          geekNote: 'انظر كيف تبتلع البطاريات (المساحة الخضراء) فائض الظهيرة في بطن البطة، ثم تعيد ضخها (المساحة البرتقالية) وقت المساء لخفض عنق البطة!',
          geekNoteEn: 'Batteries absorb the midday belly surplus and inject it during the evening neck peak, leveling the grid!',
          caption: 'مخطط منحنى البطة وصافي الحمل اليومي قبل وبعد إدخال بطاريات BESS.',
          captionEn: 'Daily net load Duck Curve profile before and after battery storage peak-shaving.'
        },
        keyTakeaway: 'التوقيت هو كل شيء في شبكة الكهرباء؛ وبطاريات التخزين هي الجسر الزمني الذي ينقل شمس الظهيرة إلى ظلام الليل.'
      }
    ],
    simulationType: 'none',
    quiz: [
      {
        id: 'q-sol-1',
        question: 'ما الذي يسببه هبوط إنتاج الطاقة الشمسية وقت الغروب بالتزامن مع عودة الناس إلى منازلهم مساءً في منحنى البطة؟',
        questionEn: 'What causes the steep evening neck ramp in the Duck Curve at sunset?',
        options: [
          'صعود حاد في صافي الحمل يتطلب تدخلاً سريعاً لمحطات التوليد أو تفريغ البطاريات',
          'انخفاض استهلاك الطاقة الكهربائية إلى الصفر',
          'توقف جميع المحولات الكهربائية عن العمل',
          'زيادة في كفاءة الألواح الشمسية في الليل'
        ],
        optionsEn: [
          'A steep net-load ramp requiring fast-responding generation or battery discharge',
          'Electrical consumption dropping to zero',
          'All electrical transformers halting operation',
          'Solar panel efficiency increasing at night'
        ],
        correctIndex: 0,
        explanation: 'تزامن غروب الشمس (تلاشي التوليد الشمسي) مع ذروة الاستهلاك المنزلي المسائي يخلق صعوداً حاداً في صافي الحمل (Net Load Ramp) يجب تغطيته سريعاً.',
        explanationEn: 'Simultaneous loss of solar generation and peak household evening demand creates a severe upward net-load ramp.'
      }
    ],
    tags: ['الطاقة الشمسية', 'الخلايا الكهروضوئية', 'منحنى البطة', 'التقطع', 'عواكس الطاقة', 'تكامل الشبكة'],
    tagsEn: ['Solar Energy', 'Photovoltaics', 'Duck Curve', 'Intermittency', 'Inverters', 'Grid Integration']
  },

  // 4. TOPIC 7: Batteries and Energy Storage: Chemistry Meets the Grid
  {
    id: 'paper-batteries-storage',
    title: 'البطاريات وتخزين الطاقة: الكيمياء في خدمة الشبكة الكهربائية',
    titleEn: 'Batteries and Energy Storage: Chemistry Meets the Grid',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-28',
    category: 'batteries',
    type: 'article',
    progressionIndex: 11,
    progressionCategory: 'الطاقة الشمسية والتخزين',
    progressionCategoryEn: 'Solar & Storage',
    readingTimeMinutes: 7,
    expId: 'BATT-08 • بطاريات التخزين الكيميائي للشبكات',
    statusTag: 'ENERGY STORAGE // تخزين الطاقة',
    statusTagEn: 'ENERGY STORAGE',
    busStandard: 'BESS • LiFePO4 • C-RATE • STATE OF CHARGE (SoC)',
    investigationQuestion: 'كيف تحول البطارية التفاعلات الكيميائية بين ذرات الليثيوم إلى كهرباء تغذي مدناً كاملة؟ وما هي لغة الأرقام التي يقرأها مهندس البطاريات؟',
    investigationQuestionEn: 'How does a battery convert chemical reactions between lithium ions into grid-scale electricity, and what parameters govern battery engineering?',
    motivation: 'عندما تفحصت بطارية هاتفي وبطارية ليثيوم صغيرة 18650، لاحظت كتابات تقنية مثل: 3.7V، و 2500mAh، و 1C. تساءلت: ماذا تعني هذه الأرقام بالضبط؟ وعندما اطلعت على مشاريع محطات التخزين العملاقة (BESS) بحجم حاويات الشحن، أدركت أن نفس المبدأ الكيميائي الصغير يتضاعف آلاف المرات لحماية الشبكات الكهربائية الحديثة من الانهيار.',
    motivationEn: 'Inspecting an 18650 lithium battery, I noted parameters like 3.7V, 2500mAh, and 1C. What did they mean mathematically? Discovering that utility-scale BESS facilities scale these exact electrochemical cells in shipping containers to protect grids inspired this study.',
    abstract: 'استكشاف علمي مبسط وشامل لتكنولوجيا بطاريات التخزين وأنظمة BESS للشبكات الكهربائية: ميكانيكا الخلية الكهروكيميائية (المهبط، المصعد، والكهرل)، وحركة أيونات الليثيوم أثناء الشحن والتفريغ، وفهم المؤشرات الهندسية الأساسية: السعة (Ah و kWh)، ومعدل الشحن C-Rate، وحالة الشحن SoC، وعمق التفريغ DoD، وأهميتها كصمام أمان للطاقة الشمسية.',
    abstractEn: 'A clear and comprehensive study of battery storage systems (BESS) for modern grids: electrochemical cell architecture, lithium-ion intercalation, and core operational metrics: capacity (Ah & kWh), C-rate, State of Charge (SoC), and Depth of Discharge (DoD).',
    keyFindings: [
      'البطارية تخزن الطاقة في روابط كيميائية وتطلقها كتيار إلكترونات مستمر عند توصيل حمل خارجي.',
      'سعة البطارية بالأمبير-ساعة (Ah) تدل على كمية الشحنة المخزنة، بينما سعتها بالكيلوواط-ساعة (kWh = V × Ah / 1000) تدل على الطاقة الفعلية.',
      'أنظمة تخزين طاقة البطاريات للشبكات (BESS) تمتاز بسرعة استجابة خارقة (أقل من 100 ميلي ثانية)، مما يجعلها الأسرع في تثبيت تردد الشبكة.'
    ],
    whatILearned: [
      'فهمت حركة الأيونات: أثناء التفريغ تهاجر أيونات الليثيوم داخل الكهرل من المصعد (Anode) إلى المهبط (Cathode)، بينما تسري الإلكترونات في السلك الخارجي لتشغل الجهاز!',
      'تعلمت حساب معدل الشحن C-Rate: بطارية بسعة 100Ah إذا فرغناها بمعدل 1C تعطي 100A لمدة ساعة واحدة؛ وإذا فرغناها بمعدل 0.5C تعطي 50A لمدة ساعتين.',
      'أدركت معنى حالة الشحن (SoC) وعمق التفريغ (DoD): للحفاظ على عمر بطاريات الليثيوم (LFP) لآلاف الدورات، يفضل تشغيلها بين 20% و 80% من حالتها القصوى.',
      'فهمت دور بطاريات BESS كصمام أمان لحظي في مزارع الطاقة المتجددة في إفريقيا وتشاد لتخزين فائض النهار وتزويد القرى ليلاً.'
    ],
    whatILearnedEn: [
      'Ion mechanics: during discharge, lithium ions migrate internally through electrolyte from anode to cathode while electrons flow through the external circuit.',
      'C-Rate calculations: a 100Ah battery discharged at 1C yields 100A for 1 hour; at 0.5C it provides 50A for 2 hours.',
      'State of Charge (SoC) and Depth of Discharge (DoD): optimal lifespan cycles operate between 20% and 80% SoC.',
      'Utility-scale BESS buffers solar swings and powers mini-grids across African and global rural electrification.'
    ],
    nextStudyGoals: [
      'ربط البطاريات بالشبكة الذكية ودراسة كيفية الحفاظ على ثبات تردد 50Hz عند غياب القصور الذاتي الميكانيكي.'
    ],
    nextStudyGoalsEn: [
      'Connect battery systems to grid dynamics and study grid frequency stability under low mechanical inertia.'
    ],
    contentSections: [
      {
        heading: '1. داخل الخلية الكهروكيميائية: المهبط، المصعد، وحركة الأيونات',
        headingEn: '1. Inside the Electrochemical Cell: Anode, Cathode, and Ion Drift',
        body: 'البطارية في أبسط تعريفاتها هي محول كيميائي-كهربائي. تتكون الخلية من أربعة عناصر رئيسية:\n1. المصعد (Anode - القطب السالب أثناء التفريغ): عادة ما يُصنع من الجرافيت الكربوني المشبع بذرات الليثيوم.\n2. المهبط (Cathode - القطب الموجب أثناء التفريغ): يُصنع من أكسيد معدني (مثل فوسفات الحديد والليثيوم LiFePO4).\n3. الكهرل (Electrolyte): سائل أو جل عازل للإلكترونات لكنه يسمح لأيونات الليثيوم الموجبة (Li⁺) بالسباحة والعبور من خلاله بسهولة.\n4. الفاصل (Separator): غشاء دقيق مسامي يمنع تلامس القطبين مباشرة لتفادي دائرة القصر (Short Circuit).\n\nأثناء التفريغ (Discharging):\nتتفكك ذرات الليثيوم عند المصعد: تفقد إلكتروناً وتتحول إلى أيون موجب Li⁺. لأن الفاصل يمنع الإلكترونات من العبور داخلياً، تضطر الإلكترونات إلى السير في السلك الخارجي، مغذية المصباح أو المحرك بشغل كهربائي، حتى تصل للمهبط وتلتقي بأيونات الليثيوم هناك.\n\nأثناء الشحن (Charging):\nنقوم بالعكس تماماً: نوصل شاحناً يمارس فرق جهد أكبر، فيجبر الإلكترونات والأيونات على الهجرة عودة إلى المصعد وتخزين الطاقة من جديد!',
        equations: [
          '\\text{Anode: } \\text{LiC}_6 \\rightleftharpoons 6\\text{C} + \\text{Li}^+ + e^- \\quad [\\text{تفاعل المصعد أثناء التفريغ}]',
          '\\text{Cathode: } \\text{FePO}_4 + \\text{Li}^+ + e^- \\rightleftharpoons \\text{LiFePO}_4 \\quad [\\text{تفاعل المهبط}]',
          'E_{\\text{stored}} = V_{\\text{nom}} \\cdot Q_{\\text{Ah}} \\quad [\\text{طاقة الخلية بالواط-ساعة}]'
        ],
        exampleFigure: {
          id: 'fig-bat-1',
          type: 'battery_solar_cycle',
          figureNumber: 'شكل 11.1',
          title: 'دورة شحن وتفريغ البطارية الكيميائية مع الطاقة الشمسية',
          titleEn: 'Electrochemical Charge/Discharge Cycle Coupled with Solar PV',
          geekNote: 'أثناء النهار، تدفع الخلايا الشمسية الإلكترونات بالقوة لتدخل بين طبقات الجرافيت في المصعد؛ وفي المساء تخرج لتضيء منازلنا!',
          geekNoteEn: 'By day, solar voltage drives lithium ions into graphite layers; by night, they spontaneously discharge to illuminate homes!',
          caption: 'مخطط كيميائي وفيزيائي لدورة شحن وتفريغ بطارية التخزين مع الألواح الشمسية.',
          captionEn: 'Physical cycle of battery charging during solar peaks and discharging during evening demand.'
        },
        keyTakeaway: 'الكهرل ينقل الأيونات في الداخل، والسلك ينقل الإلكترونات في الخارج؛ وهذا هو جوهر تدفق التيار الكهربائي.'
      },
      {
        heading: '2. قراءة مؤشرات البطارية: السعة، معدل C-Rate، وحالة الشحن (SoC)',
        headingEn: '2. Battery Engineering Metrics: Capacity, C-Rate, and State of Charge',
        body: 'لفهم بطاريات التخزين الضخمة، يجب أن نتقن لغة الأرقام الخاصة بها:\n\n1. السعة الكهربائية (Capacity - Ah):\nتُقاس بالأمبير-ساعة (Ah). إذا كانت البطارية سعتها 100Ah، فهذا يعني أنها تستطيع نظرياً تقديم تيار مقداره 100 أمبير لمدة ساعة واحدة، أو 10 أمبير لمدة 10 ساعات.\nالطاقة الكلية المخزونة تُحسب بضرب السعة في الجهد الاسمي (Nominal Voltage):\nEnergy (kWh) = (Voltage × Ah) / 1000\n\n2. معدل الشحن والتفريغ (C-Rate):\nهو مقياس لسرعة شحن أو تفريغ البطارية نسبة لسعتها القصوى:\n- معدل 1C: تفريغ البطارية بالكامل في ساعة واحدة (1h).\n- معدل 2C: تفريغ فائق السرعة في نصف ساعة (30min).\n- معدل 0.5C: تفريغ هادئ يستغرق ساعتين (2h).\nفي الشبكات الكهربائية، نستخدم بطاريات بمعدل تفريغ سريع جداً (2C إلى 4C) لضخ طاقة فورية خلال ثوان عند هبوط التردد.\n\n3. حالة الشحن (State of Charge - SoC) وعمق التفريغ (Depth of Discharge - DoD):\n- SoC: النسبة المئوية للطاقة المتبقية في البطارية حالياً (100% ممتلئة، 0% فارغة).\n- DoD: النسبة التي تم سحبها من البطارية (DoD = 100% - SoC).\nفي التطبيقات العملية للشبكات، نفضل عدم تفريغ بطاريات الليثيوم تحت 20% SoC (أي DoD لا يتجاوز 80%) لمضاعفة عمر البطارية الافتراضي ليصل إلى أكثر من 6,000 دورة شحن (أكثر من 15 سنة خدمة!).',
        equations: [
          '\\text{Energy (kWh)} = \\frac{V \\cdot I \\cdot t}{1000} = \\frac{V \\cdot \\text{Capacity (Ah)}}{1000}',
          'I_{\\text{discharge}} = C_{\\text{rate}} \\cdot \\text{Capacity (Ah)}',
          '\\text{DoD} = 100\\% - \\text{SoC}'
        ],
        diagramNotes: 'حاوية تخزين BESS قياسية بطول 40 قدماً تحتوي على آلاف الخلايا الموصولة على التوالي والتوازي لتعطي جهداً يتجاوز 800V وسعة تتجاوز 2 إلى 4 ميغاوات-ساعة (MWh).',
        keyTakeaway: 'معرفة السعة بالكيلوواط-ساعة ومعدل C-Rate وحالة SoC يحدد قدرة نظام التخزين على حماية الشبكة.'
      }
    ],
    simulationType: 'none',
    quiz: [
      {
        id: 'q-bat-1',
        question: 'بنك بطاريات تخزين جهده الاسمي 48 فولت وسعته 200 أمبير-ساعة (Ah). ما هي كمية الطاقة الكهربائية الكلية المخزونة فيه بالكيلوواط-ساعة (kWh)؟',
        questionEn: 'A battery storage bank has a nominal voltage of 48V and a capacity of 200Ah. How much energy is stored in kWh?',
        options: ['9.6 كيلوواط-ساعة (kWh)', '960 كيلوواط-ساعة (kWh)', '0.96 كيلوواط-ساعة (kWh)', '4.8 كيلوواط-ساعة (kWh)'],
        optionsEn: ['9.6 kWh', '960 kWh', '0.96 kWh', '4.8 kWh'],
        correctIndex: 0,
        explanation: 'الطاقة = (الجهد × السعة) / 1000 = (48 V × 200 Ah) / 1000 = 9600 Wh / 1000 = 9.6 kWh.',
        explanationEn: 'Energy = (V · Ah) / 1000 = (48 · 200) / 1000 = 9.6 kWh.'
      }
    ],
    tags: ['البطاريات', 'تخزين الطاقة', 'BESS', 'معدل C-Rate', 'حالة الشحن SoC', 'الطاقة المتجددة'],
    tagsEn: ['Batteries', 'Energy Storage', 'BESS', 'C-Rate', 'State of Charge', 'Renewable Energy']
  },

  // 5. Renewable Energy Integration and Grid Frequency
  {
    id: 'paper-renewable-frequency',
    title: 'دمج الطاقة المتجددة وتردد الشبكة الكهربائية',
    titleEn: 'Renewable Energy Integration and Grid Frequency',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-30',
    category: 'electrical_grid',
    type: 'article',
    progressionIndex: 12,
    progressionCategory: 'الشبكة الكهربائية',
    progressionCategoryEn: 'Electrical Grid',
    readingTimeMinutes: 8,
    expId: 'GRID-09 • تردد الشبكة والقصور الذاتي',
    statusTag: 'INTERMEDIATE EXPLORATION // استكشاف متوسط',
    statusTagEn: 'INTERMEDIATE EXPLORATION',
    busStandard: '50.00Hz STABILITY • ROTATIONAL INERTIA • RoCoF • FFR',
    investigationQuestion: 'لماذا يجب أن يظل تردد الشبكة الكهربائية ثابتاً بدقة عند 50.00 هيرتز في كل ثانية؟ وماذا يحدث عندما تختفي التوربينات الدوارة الثقيلة لصالح الخلايا الشمسية؟',
    investigationQuestionEn: 'Why must grid frequency be rigorously locked at 50.00 Hz, and what happens when heavy rotating turbines are replaced by static solar panels?',
    motivation: 'عندما اطلعت على تقرير لغرفة التحكم الوطنية للكهرباء، رأيت مؤشراً يقرأ 50.02 Hz ثم 49.98 Hz، وكان المهندسون يراقبونه بحذر شديد كما يراقب الطبيب نبضات قلب مريض في العناية المركزة! سألت نفسي: لماذا يُحدث تغير جزء من عشرة من الهيرتز كل هذا القلق؟ قادني هذا إلى فهم التوازن اللحظي بين التوليد والاستهلاك وديناميكا القصور الذاتي.',
    motivationEn: 'Reviewing a national grid control room monitor, operators watched frequency oscillate between 50.02 Hz and 49.98 Hz with surgical focus, like doctors monitoring a heartbeat. Why is a fraction of a hertz so crucial? That led me to study generation-load equilibrium and mechanical inertia.',
    abstract: 'استكشاف تمهيدي إلى متوسط لديناميكا تردد الشبكة الكهربائية: لماذا تتطلب الشبكات توازناً لحظياً مستمراً بين التوليد والاستهلاك، والفرق الفيزيائي الجوهري بين المولدات التزامنية التقليدية ذات القصور الذاتي الميكانيكي الدوار وبين الخلايا الشمسية المعتمدة على العواكس الساكنة، وتحدي معدل تغير التردد RoCoF، ودور البطاريات والقصور الذاتي الاصطناعي كمفاهيم متقدمة في دراستي القادمة.',
    abstractEn: 'An introductory-to-intermediate exploration of grid frequency dynamics: why power systems require instantaneous millisecond balance, the physical difference between rotating synchronous generators and static inverter-based solar PV, frequency rate of change (RoCoF), and battery fast frequency response.',
    keyFindings: [
      'تردد الشبكة (50.00Hz) هو مؤشر التوازن الفوري: إذا زاد الاستهلاك عن التوليد تباطأت المولدات وهبط التردد، وإذا زاد التوليد تسارعت وارتفع التردد.',
      'التوربينات التقليدية تمتلك كتلة دورانية ثقيلة توفر "قصوراً ذاتياً ميكانيكياً" يقاوم الهبوط المفاجئ للتردد تلقائياً كحذافة ثقيلة.',
      'الخلايا الشمسية وعواكسها الإلكترونية تفتقر للكتلة الدوارة (صفر قصور ذاتي)، مما يستدعي استخدام بطاريات سريعة الاستجابة (FFR) ومفاهيم العواكس الذكية الحديثة.'
    ],
    whatILearned: [
      'فهمت تشبيه الدراجة الهوائية والشبكة: التردد مثل سرعة دوران البدال؛ إذا صعدت تلة (زاد الحمل) ولم تضغط بقوة أكبر على البدال تتباطأ الدراجة، والكتلة الثقيلة تساعد في الحفاظ على الحركة مؤقتاً.',
      'أدركت معنى مؤشر RoCoF (Rate of Change of Frequency): هو سرعة هبوط التردد (df/dt)؛ كلما قل القصور الذاتي كان الهبوط حاداً وخطيراً.',
      'تعلمت كيف تتدخل بطاريات BESS كصمام أمان فائق السرعة خلال أقل من 100 ميلي ثانية لضخ طاقة فورية وتثبيت التردد.',
      'تعرفت على مفهوم "القصور الذاتي الاصطناعي" (Synthetic Inertia) وعواكس تشكيل الشبكة (Grid-Forming) كأفق علمي متقدم أتطلع لدراسته بتوسع في الجامعة.'
    ],
    whatILearnedEn: [
      'Frequency as a balance indicator: like pedaling a bicycle uphill, added load decelerates generation speed unless immediately balanced.',
      'RoCoF (Rate of Change of Frequency df/dt) measures the speed of frequency drop; lower inertia causes steeper, risky drops.',
      'Battery Fast Frequency Response (FFR) reacts within <100ms to arrest frequency dips.',
      'Discovered synthetic inertia and grid-forming inverters as exciting advanced topics to study during university.'
    ],
    nextStudyGoals: [
      'الاستعداد للدراسة الجامعية في بكالوريوس الهندسة الكهربائية لدراسة معادلات استقرار الشبكات (Swing Equation) والتحكم الرقمي.'
    ],
    nextStudyGoalsEn: [
      'Prepare for Electrical Engineering university degree to study power system dynamics, swing equations, and digital controls.'
    ],
    contentSections: [
      {
        heading: '1. لماذا تحتاج الشبكة للتوازن اللحظي؟ ومؤشر 50.00 Hz',
        headingEn: '1. Why the Grid Requires Instantaneous Balance: The 50.00 Hz Metric',
        body: 'الشبكة الكهربائية ليست خزان ماء يمكن أن تملأه وتتركه؛ الشبكة خط أنابيب فوري: في كل جزء من الثانية، يجب أن تتساوى كمية الطاقة الكهربائية المولدة من المحطات مع كمية الطاقة التي تستهلكها المصابيح والمصانع والمكيفات في تلك اللحظة بالضبط!\n\nتردد الشبكة (50Hz) هو المؤشر الحيوي لهذا التوازن:\n- عندما يتطابق التوليد مع الاستهلاك: يدور كل مولد في الشبكة بسرعة ثابتة متزامنة تعطي 50.00 دورة في الثانية تماماً.\n- عندما يزداد الاستهلاك فجأة (مثلاً تشغيل ملايين المكيفات في وقت واحد): يصبح العبء ثقيلاً على المولدات فتبدأ بالتباطؤ، فيهبط التردد تحت 50.00Hz (مثلاً 49.80Hz).\n- عندما ينخفض الاستهلاك فجأة: تخف المقاومة المعاكسة وتتسارع المولدات، فيرتفع التردد فوق 50.00Hz (مثلاً 50.20Hz).\n\nإذا هبط التردد أكثر من اللازم (تحت 49.00Hz)، فإن الشفرات الميكانيكية للتوربينات الضخمة تتعرض لاهتزازات ميكانيكية رنينية مدمرة، مما يجبر أجهزة الحماية الآلية على فصل المحطات تجنباً لتحطمها، فيحدث ما نسميه بالانهيار الشبكي الشامل (Blackout)!',
        equations: [
          'P_{\\text{Generation}}(t) = P_{\\text{Demand}}(t) + P_{\\text{Losses}}(t) \\iff f = 50.00 \\text{ Hz}',
          'P_{\\text{acc}} = P_m - P_e \\implies \\frac{df}{dt} \\propto (P_m - P_e)'
        ],
        exampleFigure: {
          id: 'fig-grid-1',
          type: 'grid_frequency_balance',
          figureNumber: 'شكل 12.1',
          title: 'ميزان التوازن اللحظي للتردد: التوليد مقابل الاستهلاك عند 50.00Hz',
          titleEn: 'Dynamic Frequency Balance Scale: Generation vs Demand at 50.00Hz',
          geekNote: 'تردد الشبكة مثل مؤشر الميزان ذو الكفتين: أي زيادة في كفة الاستهلاك تميل المؤشر للأسفل، والقصور الذاتي يمنع الكفة من السقوط الحر المفاجئ!',
          geekNoteEn: 'Frequency acts as a dynamic balance scale: excess load tips it down; physical inertia prevents instant tipping!',
          caption: 'مخطط التوازن الديناميكي بين عزم التوليد الميكانيكي والحمل الكهربائي للحفاظ على 50.00Hz.',
          captionEn: 'Dynamic equilibrium between mechanical turbine input and electrical load demand.'
        },
        keyTakeaway: 'التردد هو نبض الشبكة: الحفاظ عليه عند 50.00Hz يتطلب موازنة التوليد والاستهلاك في كل ثانية.'
      },
      {
        heading: '2. غياب القصور الذاتي الدوراني في الطاقة المتجددة ودور البطاريات',
        headingEn: '2. The Missing Inertia in Renewables and Modern Battery Support',
        body: 'المحطات التقليدية (البخارية والغازية والمائية) تمتلك ميزة فيزيائية مذهلة تسمى "القصور الذاتي الدوراني" (Rotational Inertia):\nالتوربينات والمولدات عبارة عن كتل فولاذية عملاقة تزن مئات الأطنان وتدور بسرعة 3000 دورة في الدقيقة. هذه الكتل تمتلك طاقة حركية دورانية هائلة (E = ½ J ω²). عندما يحدث عطل مفاجئ أو زيادة في الحمل، تعمل هذه الكتل كـ "حذافة" (Flywheel) ضخمة تفرغ جزءاً من طاقتها الحركية المخزونة لتقاوم هبوط التردد وتمنحه ثباتاً خلال أول بضع ثوان.\n\nتحدي الطاقة الشمسية والرياح الحديثة:\nالخلايا الشمسية لا تدور! إنها رقائق سيليكون ساكنة تتصل بالشبكة عبر عواكس إلكترونية (Inverters). هذا يعني أن الطاقة المتجددة تمتلك صفراً من القصور الذاتي الميكانيكي (Zero Mechanical Inertia).\nعندما نرفع نسبة الطاقة الشمسية في الشبكة ونغلق المحطات التقليدية، تصبح الشبكة "خفيفة الوزن" وأكثر حساسية لأي هزة، ويرتفع معدل تغير التردد RoCoF (Rate of Change of Frequency).\n\nحلول الدعم الحديثة:\n1. استجابة التردد السريعة بالبطاريات (FFR): بطاريات الليثيوم BESS تستشعر هبوط التردد خلال أجزاء من الألف من الثانية، وتضخ طاقة كهربائية فورية لتعويض غياب التوربينات.\n2. القصور الذاتي الاصطناعي (Synthetic Inertia): مفهوم متقدم في هندسة التحكم بالعواكس الحديثة (Grid-Forming Inverters)، حيث يُبرمج العاكس ليحاكي السلوك الفيزيائي للمولد الدوار ويخلق مرجع تردد ذاتي ومستقر.',
        equations: [
          'E_{\\text{kinetic}} = \\frac{1}{2} J \\omega^2 \\quad [\\text{الطاقة الحركية للكتل الدوارة}]',
          '\\text{RoCoF} = \\frac{df}{dt} = \\frac{f_0 \\cdot (P_m - P_e)}{2 H \\cdot S_{\\text{base}}} \\quad [\\text{معدل تغير التردد}]'
        ],
        exampleFigure: {
          id: 'fig-grid-2',
          type: 'solar_duck_curve_bess',
          figureNumber: 'شكل 12.2',
          title: 'دعم استقرار الشبكة والتردد عبر أنظمة التخزين وعواكس الطاقة الذكية',
          titleEn: 'Grid Frequency Support via Fast Battery Systems and Smart Inverters',
          geekNote: 'العواكس الذكية تضخ طاقة في 50 ميلي ثانية، أسرع بعشرات المرات من استجابة صمامات الغاز في التوربينات التقليدية!',
          geekNoteEn: 'Smart inverter battery units inject power in 50ms, orders of magnitude faster than mechanical turbine valves!',
          caption: 'مخطط استجابة البطاريات السريعة لمنع هبوط التردد وحماية الشبكة من الانهيار.',
          captionEn: 'Fast battery frequency response curbing RoCoF and securing grid resilience.'
        },
        keyTakeaway: 'الشبكات المستقبلية تعوض غياب الدوران الميكانيكي بالذكاء الإلكتروني والبطاريات سريعة الاستجابة.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dx71t9gK9sA',
    videoTitle: 'كيف نوازن شبكة الكهرباء مع الطاقة المتجددة؟ (Real Engineering)',
    videoTitleEn: 'How Do We Balance the Power Grid with Renewables? (Real Engineering)',
    videoTopics: [
      '00:00 - معضلة توازن التوليد والطلب اللحظي',
      '03:45 - ما هو القصور الذاتي للمولدات التزامنية؟',
      '08:15 - ماذا يحدث عند إدخال مزارع شمسية بلا كتل دورانية؟',
      '12:30 - دور بطاريات BESS والعواكس الذكية في حماية 50Hz'
    ],
    simulationType: 'none',
    quiz: [
      {
        id: 'q-grid-1',
        question: 'ما هو السبب الفيزيائي الرئيسي الذي يجعل المولدات البخارية والغازية التقليدية أكثر مقاومة للهبوط المفاجئ في التردد مقارنة بالألواح الشمسية؟',
        questionEn: 'Why are traditional rotating generators physically more resistant to sudden frequency drops than solar panels?',
        options: [
          'لأنها تمتلك كتل ميكانيكية ثقيلة دوارة توفر قصوراً ذاتياً حركياً يفرغ طاقة فورية عند تباطؤها',
          'لأنها تعمل بوقود أحفوري ذو حرارة أعلى',
          'لأن كابلاتها النحاسية أطول وأكثر سمكاً',
          'لأنها لا تحتاج إلى محولات رفع للجهد'
        ],
        optionsEn: [
          'Because massive rotating rotors provide mechanical inertia releasing stored kinetic energy as they slow',
          'Because they burn higher temperature fossil fuels',
          'Because their copper cables are thicker',
          'Because they do not require step-up transformers'
        ],
        correctIndex: 0,
        explanation: 'الكتلة الفولاذية الدوارة للتوربين تمتلك طاقة حركية E = ½Jω². عند حدوث هبوط مفاجئ، تقاوم هذه الكتلة التباطؤ وتضخ طاقتها الحركية تلقائياً في الشبكة كقصور ذاتي.',
        explanationEn: 'Heavy rotating turbine mass stores kinetic energy (½Jω²), naturally resisting deceleration and buffering frequency drops.'
      }
    ],
    tags: ['الشبكة الكهربائية', 'تردد 50Hz', 'القصور الذاتي', 'RoCoF', 'توازن القدرة', 'الطاقة المتجددة'],
    tagsEn: ['Power Grid', '50Hz Frequency', 'Inertia', 'RoCoF', 'Power Balance', 'Renewables']
  }
];
