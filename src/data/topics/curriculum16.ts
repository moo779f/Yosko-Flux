import { ResearchPaper } from '../../types';
import { FOUNDATIONS_TOPICS } from './foundations';
import { AC_SIGNALS_TOPICS } from './acSignals';
import { POWER_ENERGY_TOPICS } from './powerEnergy';

// =========================================================================
// 16 STRUCTURED ENGINEERING ARTICLES FOLLOWING THE OFFICIAL 4-STAGE CURRICULUM
// =========================================================================

// 1. Voltage, Current and Resistance
const ARTICLE_01: ResearchPaper = {
  ...FOUNDATIONS_TOPICS[0],
  id: 'paper-foundations-v-i-r',
  title: 'الجهد والتيار والمقاومة — فهم الكهرباء الأساسية',
  titleEn: 'Voltage, Current and Resistance',
  category: 'foundations',
  progressionIndex: 1,
  progressionCategory: 'FOUNDATIONS // الأساسيات',
  progressionCategoryEn: 'FOUNDATIONS',
  expId: 'FOUND-01 • الجهد والتيار والمقاومة',
  busStandard: 'V = I · R • CHARGE & DRIFT',
  references: [
    'OpenStax University Physics Vol 2, Chapter 9: Current and Resistance',
    'Halliday & Resnick, Fundamentals of Physics, Chapter 26',
    'PhET Interactive Simulations: Charges and Fields / Circuit Construction Kit'
  ]
};

// 2. Ohm's Law and Basic Electrical Circuits
const ARTICLE_02: ResearchPaper = {
  id: 'paper-foundations-ohm',
  title: 'قانون أوم والدوائر الكهربائية الأساسية',
  titleEn: 'Ohm\'s Law and Basic Electrical Circuits',
  author: 'مصطفى | خريج ثانوية يستعد لدراسة الهندسة الكهربائية',
  authorEn: 'Mustafa | High-School Graduate Preparing for Electrical Engineering',
  affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
  affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
  date: '2026-03-02',
  category: 'foundations',
  type: 'article',
  progressionIndex: 2,
  progressionCategory: 'FOUNDATIONS // الأساسيات',
  progressionCategoryEn: 'FOUNDATIONS',
  readingTimeMinutes: 6,
  expId: 'FOUND-02 • قانون أوم والدوائر البسيطة',
  statusTag: 'CORE STUDY // أساسي',
  statusTagEn: 'CORE STUDY',
  busStandard: 'OHM\'S LAW • V = I · R • P = V · I',
  investigationQuestion: 'كيف يحكم قانون أوم العلاقة الرياضية بين الجهد والتيار في المقاومات المتوالية والمتوازية؟ وما هي حدود خطية هذا القانون؟',
  investigationQuestionEn: 'How does Ohm\'s Law govern the mathematical relationship between voltage and current in series and parallel resistors, and what are the boundaries of ohmic linearity?',
  motivation: 'عند بناء أول مجزئ جهد على لوحة التجارب لتشغيل متحكم دقيق، لاحظت أن قياس الفولتميتر انخفض بمجرد توصيل الحمل. دفعني هذا لفهم قانون أوم ليس كمعادلة مجردة، بل كعلاقة توازن تحكم كل فرع وعقدة في الدائرة.',
  motivationEn: 'When building my first voltage divider on a breadboard to power a microchip, the output voltage dropped the moment I attached the load. That drove me to study Ohm\'s Law not just as a static formula, but as a dynamic balance governing every branch and node.',
  abstract: 'دراسة تطبيقية لقانون أوم V = I · R في الدوائر البسيطة والتوالي والتوازي. نستعرض كيفية حساب المقاومة المكافئة، وتوزيع الجهد والتيار، واشتقاق صيغة القدرة الكهربائية P = I²R، مع التمييز بين المكونات الأومية الخطية وغير الخطية.',
  abstractEn: 'A practical analysis of Ohm\'s Law in simple, series, and parallel DC circuits. Demonstrating equivalent resistance calculations, voltage and current division, Joule heating P = I²R, and the distinction between linear ohmic materials and non-linear devices.',
  keyFindings: [
    'في دوائر التوالي يمر نفس التيار في جميع المقاومات، ويتوزع الجهد بنسبة قيمها (V_total = V1 + V2).',
    'في دوائر التوازي يتساوى الجهد عبر جميع الفروع، ويتوزع التيار عكسياً مع قيم المقاومات (I_total = I1 + I2).',
    'المقاومة المكافئة لدائرة توازي تكون دائماً أقل من أصغر مقاومة منفردة فيها: 1/R_eq = Σ(1/R_i).'
  ],
  keyFindingsEn: [
    'In series circuits, identical current traverses every element, and source voltage divides proportionally across resistances.',
    'In parallel circuits, identical potential difference exists across each branch, and total current splits inversely to resistance values.',
    'Equivalent parallel resistance is always smaller than the smallest branch resistor: 1/R_eq = Σ(1/R_i).'
  ],
  whatILearned: [
    'تعلمت كيف أختزل أي شبكة مقاومات توالٍ وتوازٍ إلى مقاومة مكافئة واحدة R_th.',
    'أدركت أن القدرة المبددة في المقاومة تتناسب مع مربع التيار، مما يجعل زيادة التيار مكلفة حرارياً.',
    'فهمت كيفية اختيار مقنن القدرة للـ Resistor (مثلاً 0.25W أو 0.5W أو 1W) لحمايته من الاحتراق.'
  ],
  whatILearnedEn: [
    'How to systematically reduce complex series-parallel resistor ladders into a single equivalent Thevenin resistance.',
    'Recognized that Joule heating scales with current squared (I²R), making excess current thermally punitive.',
    'Understood how to calculate resistor wattage ratings (0.25W, 0.5W, 1W) to ensure safe thermal operation.'
  ],
  nextStudyGoals: [
    'الانتقال إلى دراسة الدوائر متعددة الحلقات والمصادر المعقدة عبر قوانين كيرشوف للجهد والتيار.'
  ],
  nextStudyGoalsEn: [
    'Advance to multi-loop and multi-source circuit analysis using Kirchhoff\'s Voltage and Current Laws.'
  ],
  contentSections: [
    {
      heading: '1. قانون أوم: المفهوم الفيزيائي والاشتقاق الرياضي',
      headingEn: '1. Ohm\'s Law: Physical Concept and Derivation',
      body: 'ينص قانون أوم على أن شدة التيار المار في موصل معدني تتناسب طردياً مع فرق الجهد بين طرفيه عند ثبوت درجة الحرارة:\nV = I · R\n\nحيث:\n- V: فرق الجهد الكهربائي بالفولت (V).\n- I: شدة التيار الكهربائي بالأمبير (A).\n- R: المقاومة الكهربائية بالأوم (Ω).\n\nهذه العلاقة الخطية تعني أن مضاعفة الجهد تضاعف التيار المار مباشرة ما دامت المادة لم تسخن بصورة تغير مقاومتها النوعية.',
      bodyEn: 'Ohm\'s Law states that electric current through a metallic conductor between two points is directly proportional to voltage across the points at constant temperature:\nV = I · R\n\nwhere V is voltage (V), I is current (A), and R is resistance (Ω). This linear relationship indicates doubling voltage doubles current, provided conductor temperature remains stable.',
      equations: [
        'V = I \\cdot R \\quad [\\text{قانون أوم}]',
        'I = \\frac{V}{R} \\quad [\\text{حساب شدة التيار}]',
        'R = \\frac{V}{I} \\quad [\\text{حساب المقاومة}]'
      ],
      keyTakeaway: 'المقاومة هي النسبة الثابتة بين الجهد والتيار للموصلات الخطية.',
      keyTakeawayEn: 'Resistance represents the constant ratio of voltage to current for ohmic conductors.'
    },
    {
      heading: '2. حسابات دوائر التوالي والتوازي والقدرة المبددة',
      headingEn: '2. Series and Parallel Calculations and Power Dissipation',
      body: 'في التوالي: R_eq = R1 + R2 + ... + Rn\nفي التوازي: 1/R_eq = 1/R1 + 1/R2 + ... + 1/Rn\n\nالقدرة الكهربائية المستهلكة في المقاومة:\nP = V · I = I² · R = V² / R\n\nهذه الطاقة لا تختفي؛ بل تتحول بالكامل إلى حرارة بفعل تصادم الإلكترونات بالشبكة البلورية للنحاس.',
      bodyEn: 'Series: R_eq = R1 + R2 + ... + Rn\nParallel: 1/R_eq = 1/R1 + 1/R2 + ... + 1/Rn\n\nPower dissipated as heat across a resistive element:\nP = V · I = I² · R = V² / R\n\nThis energy is fully converted into thermal vibrations via electron-lattice scattering.',
      equations: [
        'R_{series} = R_1 + R_2',
        'R_{parallel} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}',
        'P = I^2 \\cdot R'
      ],
      diagramNotes: 'مثال عددي: دائرة مجزئ جهد مكونة من مصدر 12V ومقاومتين على التوالي R1 = 1kΩ و R2 = 2kΩ.\nالجهد عبر R2 يكون:\nV_out = V_in × [R2 / (R1 + R2)] = 12 × [2000 / 3000] = 8.0 V.\nالتيار الكلي المار: I = 12 / 3000 = 4 mA.\nالقدرة المبددة في R2: P = (4 mA)² × 2000 = 0.032 W (32 mW).',
      diagramNotesEn: 'Worked numerical example: A voltage divider with V_in = 12V and series resistors R1 = 1kΩ, R2 = 2kΩ.\nOutput voltage across R2:\nV_out = V_in · [R2 / (R1 + R2)] = 12 · [2000 / 3000] = 8.0 V.\nLoop current: I = 12 / 3000 = 4 mA.\nPower dissipated across R2: P = (4 mA)² · 2000 = 0.032 W (32 mW).',
      keyTakeaway: 'القدرة تتناسب مع مربع التيار؛ مضاعفة التيار تزيد الحرارة المفقودة أربعة أضعاف.',
      keyTakeawayEn: 'Power dissipation scales quadratically with current; doubling current quadruples heat loss.'
    }
  ],
  simulationType: 'none',
  videoUrl: 'https://www.youtube.com/embed/0DxKZl9AEio',
  youtubeId: '0DxKZl9AEio',
  videoTitle: 'حل مسائل وشرح قانون أوم عملياً (Doctor Science)',
  videoTitleEn: "Ohm's Law Solved Example Problem (Doctor Science)",
  quiz: [
    {
      id: 'q-ohm-1',
      question: 'وصلنا مقاومتين 100Ω و 100Ω على التوازي بمصدر 10V. ما هي المقاومة المكافئة والتيار الكلي؟',
      questionEn: 'Two 100Ω resistors are connected in parallel to a 10V source. What is equivalent resistance and total current?',
      options: ['R_eq = 50 Ω, I = 0.2 A', 'R_eq = 200 Ω, I = 0.05 A', 'R_eq = 50 Ω, I = 0.1 A', 'R_eq = 100 Ω, I = 0.1 A'],
      optionsEn: ['R_eq = 50 Ω, I = 0.2 A', 'R_eq = 200 Ω, I = 0.05 A', 'R_eq = 50 Ω, I = 0.1 A', 'R_eq = 100 Ω, I = 0.1 A'],
      correctIndex: 0,
      explanation: 'في التوازي لمقاومتين متساويتين R_eq = 100/2 = 50Ω. شدة التيار I = V / R_eq = 10 / 50 = 0.2A.',
      explanationEn: 'For identical parallel resistors: R_eq = 100 / 2 = 50 Ω. Total current I = 10 / 50 = 0.2 A.'
    }
  ],
  tags: ['قانون أوم', 'دوائر التوالي', 'دوائر التوازي', 'المقاومة المكافئة', 'القدرة الكهربائية'],
  tagsEn: ['Ohm\'s Law', 'Series Circuits', 'Parallel Circuits', 'Equivalent Resistance', 'Electric Power'],
  references: [
    'OpenStax University Physics Vol 2, Chapter 10: Direct-Current Circuits',
    'MIT 6.002: Circuits and Electronics (Ohm\'s Law and KCL/KVL foundations)',
    'PhET Interactive Simulations: Ohm\'s Law / Circuit Construction Kit: DC'
  ]
};

// 3. Kirchhoff's Laws
const ARTICLE_03: ResearchPaper = {
  ...FOUNDATIONS_TOPICS[1],
  id: 'paper-foundations-kirchhoff',
  title: 'قوانين كيرشوف: حفظ الشحنة والطاقة في الدوائر',
  titleEn: 'Kirchhoff\'s Laws',
  category: 'foundations',
  progressionIndex: 3,
  progressionCategory: 'FOUNDATIONS // الأساسيات',
  progressionCategoryEn: 'FOUNDATIONS',
  references: [
    'OpenStax University Physics Vol 2, Section 10.3: Kirchhoff\'s Rules',
    'Nilsson & Riedel, Electric Circuits (11th Edition), Chapter 2',
    'MIT OpenCourseWare 6.002 Lecture Notes: KCL and KVL'
  ]
};

// 4. Capacitors and Inductors
const ARTICLE_04: ResearchPaper = {
  ...FOUNDATIONS_TOPICS[2],
  id: 'paper-foundations-reactance',
  title: 'المكثفات والملفات: تخزين الطاقة الكهروستاتيكية والمغناطيسية',
  titleEn: 'Capacitors and Inductors',
  category: 'foundations',
  progressionIndex: 4,
  progressionCategory: 'FOUNDATIONS // الأساسيات',
  progressionCategoryEn: 'FOUNDATIONS',
  references: [
    'Halliday, Resnick & Walker, Fundamentals of Physics, Chapters 25 & 30',
    'HyperPhysics: Capacitance and Inductance Storage Principles',
    'PhET Interactive Simulations: Capacitor Lab: Basics'
  ]
};

// 5. AC Circuits and Phase
const ARTICLE_05: ResearchPaper = {
  ...AC_SIGNALS_TOPICS[1],
  id: 'paper-ac-sinewaves',
  title: 'دوائر التيار المتردد والطور: لماذا الموجات الجيبية؟',
  titleEn: 'AC Circuits and Phase',
  category: 'ac_signals',
  progressionIndex: 5,
  progressionCategory: 'AC & SIGNALS // التيار المتردد والإشارات',
  progressionCategoryEn: 'AC & SIGNALS',
  references: [
    'Hayt, Kemmerly & Durbin, Engineering Circuit Analysis, Chapter 10: Sinusoidal Steady-State Analysis',
    'OpenStax University Physics Vol 2, Chapter 15: Alternating-Current Circuits',
    'PhET Interactive Simulations: Circuit Construction Kit: AC'
  ]
};

// 6. Series RLC Resonance
const ARTICLE_06: ResearchPaper = {
  ...AC_SIGNALS_TOPICS[2],
  id: 'paper-rlc-resonance',
  title: 'رنين دوائر RLC المتوالية: النظرية والحسابات والمرشحات',
  titleEn: 'Series RLC Resonance',
  category: 'ac_signals',
  progressionIndex: 6,
  progressionCategory: 'AC & SIGNALS // التيار المتردد والإشارات',
  progressionCategoryEn: 'AC & SIGNALS',
  references: [
    'Alexander & Sadiku, Fundamentals of Electric Circuits, Chapter 14: Frequency Response & Resonance',
    'Feynman Lectures on Physics, Vol 1, Chapter 23: Resonance',
    'Falstad Circuit Simulation Tool: RLC Series Resonance'
  ]
};

// 7. Understanding Electrical Waveforms
const ARTICLE_07: ResearchPaper = {
  ...AC_SIGNALS_TOPICS[0],
  id: 'paper-signal-waveforms',
  title: 'فهم وقراءة أشكال الموجات الكهربائية',
  titleEn: 'Understanding Electrical Waveforms',
  category: 'ac_signals',
  progressionIndex: 7,
  progressionCategory: 'AC & SIGNALS // التيار المتردد والإشارات',
  progressionCategoryEn: 'AC & SIGNALS',
  references: [
    'Oppenheim & Willsky, Signals and Systems (2nd Edition), Chapter 1',
    'Tektronix: XYZs of Oscilloscopes Educational Guide',
    'PhET Interactive Simulations: Fourier: Making Waves'
  ]
};

// 8. Fourier Analysis and Harmonics
const ARTICLE_08: ResearchPaper = {
  ...AC_SIGNALS_TOPICS[3],
  id: 'paper-fourier-harmonics',
  title: 'تحليل فورييه والتوافقيات في الإشارات الكهربائية',
  titleEn: 'Fourier Analysis and Harmonics',
  category: 'ac_signals',
  progressionIndex: 8,
  progressionCategory: 'AC & SIGNALS // التيار المتردد والإشارات',
  progressionCategoryEn: 'AC & SIGNALS',
  references: [
    'Oppenheim & Schafer, Discrete-Time Signal Processing & Continuous Fourier Series',
    'IEEE Standard 519: Recommended Practices and Requirements for Harmonic Control in Electrical Power Systems',
    '3Blue1Brown: But what is the Fourier Transform? A visual introduction'
  ]
};

// 9. Active Power, Reactive Power and Power Factor
const ARTICLE_09: ResearchPaper = {
  ...POWER_ENERGY_TOPICS[0],
  id: 'paper-power-factor',
  title: 'القدرة الفعالة والقدرة غير الفعالة ومعامل القدرة',
  titleEn: 'Active Power, Reactive Power and Power Factor',
  category: 'power_engineering',
  progressionIndex: 9,
  progressionCategory: 'POWER ENGINEERING // هندسة القوى',
  progressionCategoryEn: 'POWER ENGINEERING',
  references: [
    'Saadat, Hadi. Power System Analysis, Chapter 2: Basic Principles and Complex Power',
    'IEEE Power & Energy Society: Fundamentals of Power Factor Correction',
    'Grainger & Stevenson, Power System Analysis (McGraw-Hill)'
  ]
};

// 10. Efficient Electrical Power Transmission
const ARTICLE_10: ResearchPaper = {
  ...POWER_ENERGY_TOPICS[1],
  id: 'paper-power-transmission',
  title: 'نقل القدرة الكهربائية بكفاءة عالية',
  titleEn: 'Efficient Electrical Power Transmission',
  category: 'power_engineering',
  progressionIndex: 10,
  progressionCategory: 'POWER ENGINEERING // هندسة القوى',
  progressionCategoryEn: 'POWER ENGINEERING',
  references: [
    'Glover, Sarma & Overbye, Power System Analysis & Design, Chapter 5: Transmission Line Modeling',
    'Kundur, Prabha. Power System Stability and Control, Chapter 3',
    'U.S. Department of Energy (DOE): The History of High Voltage Transmission Lines'
  ]
};

// 11. Why Electrical Grids Must Stay Balanced
const ARTICLE_11: ResearchPaper = {
  id: 'paper-grid-balance',
  title: 'لماذا يجب أن تبقى الشبكات الكهربائية متوازنة؟',
  titleEn: 'Why Electrical Grids Must Stay Balanced',
  author: 'مصطفى | خريج ثانوية يستعد لدراسة الهندسة الكهربائية',
  authorEn: 'Mustafa | High-School Graduate Preparing for Electrical Engineering',
  affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
  affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
  date: '2026-03-23',
  category: 'power_engineering',
  type: 'article',
  progressionIndex: 11,
  progressionCategory: 'POWER ENGINEERING // هندسة القوى',
  progressionCategoryEn: 'POWER ENGINEERING',
  readingTimeMinutes: 7,
  expId: 'PWR-03 • توازن الشبكة الكهربائية والتردد',
  statusTag: 'GRID SYSTEMS // استقرار الشبكة',
  statusTagEn: 'GRID SYSTEMS',
  busStandard: 'FREQUENCY STABILITY • 50.00 Hz • P_gen = P_demand',
  investigationQuestion: 'لماذا يؤدي عدم التطابق اللحظي بين التوليد والاستهلاك إلى انحراف تردد الشبكة (50Hz)؟ وكيف يحمي القصور الذاتي المولدات من الانهيار السريع؟',
  investigationQuestionEn: 'Why does an instantaneous mismatch between generation and consumption skew grid frequency from 50Hz, and how does mechanical inertia buffer against blackout cascades?',
  motivation: 'أردت أن أعرف لماذا لا تستطيع شبكة الكهرباء أن "تخزن" الكهرباء في أسلاكها ببساطة. عندما يطفئ مليون شخص مكيفاتهم فجأة، إلى أين تذهب الطاقة الفائضة؟ وكيف تمنع المولدات الدوارة تردد الشبكة من الارتفاع الجنوني؟',
  motivationEn: 'I wanted to understand why electrical transmission lines cannot simply store energy buffer-style. When a million consumers switch off appliances simultaneously, where does excess power surge, and how does rotating inertia prevent sudden frequency trips?',
  abstract: 'تحليل فيزيائي لمفهوم توازن الشبكة الكهربائية في كل لحظة زمنية. نوضح معادلة التأرجح (Swing Equation)، وكيف يربط التردد 50.00Hz بين سرعة دوران توربينات محطات التوليد وطلب المستهلكين، وخطوات الاستجابة الأولية والثانوية لتعديل التوليد.',
  abstractEn: 'A physical exploration of instantaneous power grid equilibrium. Explaining the governing Swing Equation, how nominal 50.00 Hz frequency mirrors rotational turbine speed against aggregate demand, and the hierarchy of primary frequency containment reserves.',
  keyFindings: [
    'الكهرباء في الشبكة تستهلك في نفس لحظة توليدها تماماً؛ الأسلاك لا تخزن طاقة صافية.',
    'إذا زاد الطلب عن التوليد تباطأت المولدات الكبرى وهبط التردد دون 50.00Hz؛ وإذا زاد التوليد تسارعت وارتفع التردد.',
    'القصور الذاتي الميكانيكي (Mechanical Inertia) للكتل الدوارة هو خط الدفاع الأول الذي يكبح معدل تغير التردد (RoCoF).'
  ],
  keyFindingsEn: [
    'Grid power must be consumed at the exact microsecond it is generated; transmission lines cannot store net energy.',
    'When load exceeds generation, generator rotors decelerate and frequency dips below 50.00 Hz; excess generation accelerates rotors.',
    'Mechanical inertia from massive spinning rotors acts as the primary buffer dampening the Rate of Change of Frequency (RoCoF).'
  ],
  whatILearned: [
    'فهمت أن تردد 50Hz ليس مجرد رقم اصطلاحي، بل هو نبض الشبكة الحي ومؤشر التوازن بين العرض والطلب.',
    'أدركت معنى معادلة التأرجح: J · dω/dt = T_mech - T_elec.',
    'تعلمت كيف تؤثر الطاقة الشمسية والرياح على تقليل القصور الذاتي للشبكة لأنها تتصل عبر عواكس إلكترونية ساكنة.'
  ],
  whatILearnedEn: [
    'Grasped that 50Hz frequency is the vital pulse of the grid, signaling real-time generation-demand equilibrium.',
    'Understood the physical meaning of the rotor swing equation: J · dω/dt = T_mech - T_elec.',
    'Learned why inverter-interfaced renewable energy lowers native grid inertia, requiring synthetic inertia solutions.'
  ],
  nextStudyGoals: [
    'دراسة دور أنظمة بطاريات BESS والعواكس المشكلة للشبكة (Grid-Forming Inverters) في توفير قصور ذاتي اصطناعي.'
  ],
  nextStudyGoalsEn: [
    'Investigate grid-forming inverters and fast battery reserves providing synthetic inertia to modernize frequency response.'
  ],
  contentSections: [
    {
      heading: '1. معادلة التوازن اللحظي وتردد 50Hz',
      headingEn: '1. Instantaneous Balance and the 50 Hz Nominal Pulse',
      body: 'في كل لحظة يجب أن يتحقق الشرط:\nP_generation(t) = P_demand(t) + P_losses(t)\n\nعندما يشغل المستهلكون أحمالاً إضافية، يزداد العزم الكهربائي الكابح (T_elec) على المولدات التزامنية. وحيث أن الطاقة الداخلة من التوربين البخاري أو الغازي لا يمكن زيادتها فورياً في كسر من الثانية، تستمد المولدات هذا الفرق اللحظي من طاقتها الحركية الدورانية المخزنة، فتتباطأ سرعة دورانها وينخفض تردد الشبكة f.',
      bodyEn: 'At every microsecond, total generation must equal total demand plus transmission losses: P_gen = P_demand + P_losses.\nWhen consumer demand spikes, electrical counter-torque (T_elec) on synchronous generator rotors increases immediately. Because thermal steam and gas valves cannot ramp instantaneously, the gap is supplied by the kinetic energy of spinning rotors, causing them to decelerate and lowering grid frequency f.',
      equations: [
        'J \\frac{d\\omega}{dt} = T_m - T_e',
        '\\Delta f = f - 50.00\\text{ Hz}',
        '\\text{RoCoF} = \\frac{df}{dt} = \\frac{f_0 \\cdot \\Delta P}{2H \\cdot S_n}'
      ],
      keyTakeaway: 'التردد هو مقياس التوازن اللحظي: أي هبوط يعني عجزاً لحظياً، وأي صعود يعني فائضاً في التوليد.',
      keyTakeawayEn: 'Frequency is the real-time equilibrium barometer: dips indicate undergeneration, while surges indicate overgeneration.'
    },
    {
      heading: '2. مستويات التحكم واحتياطي التردد',
      headingEn: '2. Operating Reserves and Primary Frequency Response',
      body: 'لمنع انقطاع التيار (Blackout) عند خروج محطة توليد فجأة، تتبع الشبكات نظاماً ثلاثياً:\n1. استجابة القصور الذاتي (Inertial Response): خلال أول ثانيتين عبر الطاقة الحركية للمولدات.\n2. التحكم الأولي (Primary Control / Governor Response): خلال 2 إلى 30 ثانية بفتح صمامات التوربينات.\n3. التحكم الثانوي (Secondary Control / AGC): خلال دقائق لإعادة التردد تماماً إلى 50.00Hz.',
      bodyEn: 'To prevent cascade blackouts when generation trips, power systems deploy three hierarchical defense layers:\n1. Inertial Response: In the first 0–2 seconds, drawing on rotor kinetic energy.\n2. Primary Governor Control: Over 2–30 seconds, modulating steam/hydro turbine valves.\n3. Secondary Control (AGC): Over several minutes, dispatching reserves to restore frequency exactly to 50.00 Hz.',
      equations: [
        'P_{reserve} \\ge P_{largest\\_unit}'
      ],
      diagramNotes: 'حساب عددي لتردد الشبكة: إذا كانت الشبكة بحجم 10,000 MW وثابت القصور الذاتي H = 4 ثوانٍ، وانفصلت محطة توليد فجأة بحجم ΔP = 500 MW:\nمعدل هبوط التردد الابتدائي RoCoF:\ndf/dt = (f0 · ΔP) / (2 · H · Sn) = (50 × -500) / (2 × 4 × 10000) = -0.3125 Hz/s.\nهذا يعني أنه إذا لم تستجب الاحتياطيات خلال ثانية واحدة، سينخفض التردد فوراً من 50.00Hz إلى 49.68Hz!',
      diagramNotesEn: 'Worked grid frequency calculation: For a 10,000 MW grid with inertia constant H = 4s, if a generator abruptly trips shedding ΔP = 500 MW:\nInitial rate of frequency decay RoCoF:\ndf/dt = (f0 · ΔP) / (2 · H · Sn) = (50 · -500) / (2 · 4 · 10000) = -0.3125 Hz/s.\nWithout primary governor response within 1 second, grid frequency plummets from 50.00 Hz to 49.68 Hz!',
      keyTakeaway: 'القصور الذاتي يكسب الشبكة وقتاً حاسماً حتى تستجيب منظمات السرعة التلقائية.',
      keyTakeawayEn: 'Rotor inertia buys critical seconds, allowing automatic governors time to throttle up mechanical input.'
    }
  ],
  simulationType: 'none',
  videoUrl: 'https://www.youtube.com/embed/08mwXICY4JM',
  youtubeId: '08mwXICY4JM',
  videoTitle: 'ماذا يحدث عند اختلال توازن شبكة الكهرباء وانهيار التردد (Practical Engineering)',
  videoTitleEn: 'What Really Happened During the Power Grid Outage (Practical Engineering)',
  quiz: [
    {
      id: 'q-grid-balance-1',
      question: 'إذا انخفض تردد الشبكة فجأة من 50.00 Hz إلى 49.70 Hz، فماذا يعني ذلك فيزيائياً؟',
      questionEn: 'If grid frequency abruptly falls from 50.00 Hz to 49.70 Hz, what does it physically signify?',
      options: [
        'استهلاك الأحمال أكبر من توليد المحطات، والمولدات تتباطأ',
        'توليد المحطات أكبر من الاستهلاك، والمولدات تتسارع',
        'انخفاض درجة حرارة أسلاك النقل',
        'حدوث رنين كهربائي في جميع المحولات'
      ],
      optionsEn: [
        'Consumer load exceeds generation, causing synchronous generator rotors to decelerate',
        'Generation exceeds load, accelerating generator rotors',
        'Transmission wire temperature drop',
        'Resonance occurring across all substations'
      ],
      correctIndex: 0,
      explanation: 'هبوط التردد دليل قاطع على أن الاستهلاك فاق التوليد، فسحبت الأحمال من الطاقة الحركية للمولدات مما أدى لتباطؤها.',
      explanationEn: 'Frequency drop indicates load exceeds generation; kinetic energy was extracted from spinning rotors, slowing them down.'
    }
  ],
  tags: ['استقرار الشبكة', 'التردد 50Hz', 'القصور الذاتي', 'معادلة التأرجح', 'التحكم الأولي'],
  tagsEn: ['Grid Stability', '50 Hz Frequency', 'Mechanical Inertia', 'Swing Equation', 'Primary Frequency Control'],
  references: [
    'Kundur, Prabha. Power System Stability and Control, Chapter 11: Frequency Stability',
    'ENTSO-E: Continental Europe Operation Handbook on Frequency Control and Reserves',
    'National Renewable Energy Laboratory (NREL): Grid Inertia and Inverter-Based Resources'
  ]
};

// 12. Photovoltaic Effect
const ARTICLE_12: ResearchPaper = {
  id: 'paper-photovoltaic-effect',
  title: 'الظاهرة الكهروضوئية: تحويل الضوء إلى تيار كهربائي',
  titleEn: 'Photovoltaic Effect',
  author: 'مصطفى | خريج ثانوية يستعد لدراسة الهندسة الكهربائية',
  authorEn: 'Mustafa | High-School Graduate Preparing for Electrical Engineering',
  affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
  affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
  date: '2026-03-24',
  category: 'renewable_energy',
  type: 'article',
  progressionIndex: 12,
  progressionCategory: 'RENEWABLE ENERGY // الطاقة المتجددة',
  progressionCategoryEn: 'RENEWABLE ENERGY',
  readingTimeMinutes: 7,
  expId: 'SOLAR-01 • الظاهرة الكهروضوئية والسيليكون',
  statusTag: 'PHOTOVOLTAICS // فيزياء الألواح',
  statusTagEn: 'PHOTOVOLTAICS',
  busStandard: 'SEMICONDUCTOR P-N JUNCTION • E = h·ν • E_g = 1.12 eV',
  investigationQuestion: 'كيف يتمكن فوتون الضوء القادم من الشمس من تحرير إلكترون مقيد داخل ذرة السيليكون وتحويله إلى تيار كهربائي نافع؟',
  investigationQuestionEn: 'How does an incoming solar photon liberate a bound valence electron within a silicon lattice and translate it into a usable electric current?',
  motivation: 'عندما قرأت أن رمال الصحراء الغنية بالسيليكا يمكن أن تنتج طاقة نظيفة تكفي مدناً كاملة، أردت أن أفهم كيمياء وفيزياء وصلة الموجب والسالب (p-n junction) ولماذا تحتاج الخلية لطاقة فجوة محددة (Bandgap) لتعمل.',
  motivationEn: 'Reading how silica-rich desert sand can be refined to harvest clean gigawatts of power inspired me to investigate the quantum physics of semiconductor p-n junctions and the significance of bandgap thresholds.',
  abstract: 'شرح فيزيائي دقيق ومبسط للظاهرة الكهروضوئية داخل خلايا السيليكون. نستعرض نطاق الطاقة المحظورة (Bandgap E_g = 1.12 eV)، وكيف تفصل وصلة p-n بين أزواج الإلكترون-فجوة (Electron-Hole Pairs) المولدة بالضوء لتنشئ جهداً مستمراً يبلغ حوالي 0.6V لكل خلية.',
  abstractEn: 'A foundational study of the photovoltaic effect in crystalline silicon. Covering the semiconductor bandgap (E_g = 1.12 eV), photon absorption mechanics, electron-hole pair separation across the built-in electric field of a p-n junction, and the generation of ~0.6V open-circuit potential per cell.',
  keyFindings: [
    'لكي يحرر الفوتون إلكتروناً، يجب أن تكون طاقته E = h·ν أكبر من طاقة فجوة السيليكون (E_g = 1.12 eV).',
    'المجال الكهربائي الداخلي في منطقة النضوب (Depletion Region) لوصلة p-n يدفع الإلكترونات للطرف السالب والفجوات للموجب، مانعاً إعادة الاتحاد السريع.',
    'تولد الخلية الواحدة جهداً صغيراً (~0.5V إلى 0.6V)؛ لذلك تجمع عشرات الخلايا على التوالي لتكوين لوح شمسي بجهد عملي (18V أو 36V).'
  ],
  keyFindingsEn: [
    'A photon can only excite an electron across the bandgap if its energy E = h·ν exceeds the silicon threshold (E_g = 1.12 eV).',
    'The built-in electric field within the p-n depletion region sweeps photogenerated electrons to the n-side and holes to the p-side, preventing immediate recombination.',
    'A single silicon solar cell produces only ~0.55V–0.60V; multiple cells are wired in series to create practical module voltages (18V–40V).'
  ],
  whatILearned: [
    'فهمت أن الضوء الأحمر ذا التردد المنخفض لا يملك طاقة كافية لعبور الفجوة، بينما الضوء الأزرق يملك طاقة زائدة تضيع كحرارة (Thermalization).',
    'تعلمت كيف يحسب حد شوكلي-كوايسر النظري (Shockley-Queisser Limit) الكفاءة القصوى للخلية السيليكونية أحادية الوصلة (~33%).',
    'أدركت أهمية الطبقات المضادة للانعكاس (Anti-reflective Coating) الزرقاء أو السوداء على سطح الخلايا.'
  ],
  whatILearnedEn: [
    'Infrared photons lack sufficient energy to bridge the bandgap, while high-energy blue photons waste excess energy as heat (thermalization).',
    'Learned the theoretical foundation of the Shockley-Queisser efficiency ceiling (~33% for single-junction silicon).',
    'Understood the optical purpose of anti-reflective surface texturing and nitride coatings on commercial cells.'
  ],
  nextStudyGoals: [
    'دراسة منحنيات I-V و P-V وتأثير الحرارة والإشعاع على أداء اللوح الشمسي العملي.'
  ],
  nextStudyGoalsEn: [
    'Proceed to analyze empirical I-V and P-V curves, examining real-world irradiance and thermal derating.'
  ],
  contentSections: [
    {
      heading: '1. فيزياء أشباه الموصلات والامتصاص الضوئي',
      headingEn: '1. Semiconductor Physics and Photon Absorption',
      body: 'السيليكون عنصر رباعي التكافؤ. بتطعيمه بذرات الفسفور خماسي التكافؤ نحصل على سيليكون نوع N غني بالإلكترونات، وبتطعيمه بذرات البورون ثلاثي التكافؤ نحصل على سيليكون نوع P غني بالفجوات الموجبة.\nعند تلاقيهما تتشكل وصلة p-n وينشأ مجال كهربائي داخلي تلقائي في منطقة النضوب.\nعندما يسقط فوتون شمسي بطاقة كافية:\nE_{photon} = h \\cdot \\nu \\ge E_g\nيمتص السيليكون طاقة الفوتون، ويقفز إلكترون من حزام التكافؤ إلى حزام التوصيل تاركاً فجوة موجبة خلفه.',
      bodyEn: 'Silicon is tetravalent. Doping with pentavalent phosphorus creates N-type silicon with mobile electrons; doping with trivalent boron produces P-type silicon with mobile holes.\nJoining them creates a p-n junction with a permanent internal built-in electric field across the depletion zone.\nWhen an incident photon strikes with energy:\nE_{photon} = h · ν ≥ E_g\nthe silicon absorbs the photon, promoting an electron from the valence to conduction band and creating an electron-hole pair.',
      equations: [
        'E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}',
        'E_g = 1.12\\text{ eV (Silicon at 300K)}',
        'V_{oc} \\approx \\frac{k T}{q} \\ln\\left(\\frac{I_{ph}}{I_0} + 1\\right)'
      ],
      diagramNotes: 'حساب طاقة الفوتون وفجوة النطاق:\nفوتون الضوء المرئي بطول موجي λ = 550 nm (الضوء الأخضر):\nE = h · c / λ = (6.626 × 10⁻³⁴ · 3 × 10⁸) / (550 × 10⁻⁹) = 3.61 × 10⁻¹⁹ J.\nبالتحويل إلى إلكترون-فولت: E = 3.61 × 10⁻¹⁹ / (1.602 × 10⁻¹⁹) = 2.25 eV.\nبما أن 2.25 eV > 1.12 eV (فجوة السيليكون)، يتمكن الفوتون من توليد زوج إلكترون-فجوة وتحرير تيار كهربائي.',
      diagramNotesEn: 'Worked photon energy & bandgap calculation:\nFor visible green photon at wavelength λ = 550 nm:\nE = h · c / λ = (6.626 × 10⁻³⁴ · 3 × 10⁸) / (550 × 10⁻⁹) = 3.61 × 10⁻¹⁹ J.\nConverting to electron-volts: E = 3.61 × 10⁻¹⁹ / (1.602 × 10⁻¹⁹) = 2.25 eV.\nSince 2.25 eV > 1.12 eV (silicon bandgap), the photon successfully generates an electron-hole pair and drives electric current.',
      keyTakeaway: 'وصلة p-n تحول الطاقة الضوئية إلى طاقة كهربائية عبر فصل الشحنات ومنع اتحادها الفوري.',
      keyTakeawayEn: 'The p-n junction converts optical energy to electrical potential by separating photogenerated charges.'
    }
  ],
  simulationType: 'none',
  videoUrl: 'https://www.youtube.com/embed/7G4ipM2qjfw',
  youtubeId: '7G4ipM2qjfw',
  videoTitle: 'تحديات توليد الطاقة الشمسية وربطها بالشبكة (Real Engineering)',
  videoTitleEn: 'Connecting Solar to the Grid is Harder Than You Think (Real Engineering)',
  quiz: [
    {
      id: 'q-pv-effect-1',
      question: 'ما هي الوظيفة الأساسية لوصلة p-n في الخلية الشمسية؟',
      questionEn: 'What is the primary function of the p-n junction in a photovoltaic cell?',
      options: [
        'توفير مجال كهربائي داخلي يفصل الإلكترونات عن الفجوات قبل إعادة اتحادهما',
        'تسخين السيليكون لتوليد بخار ماء',
        'تحويل التيار المتردد إلى تيار مستمر',
        'تخزين الطاقة في روابط كيميائية مثل البطارية'
      ],
      optionsEn: [
        'Providing an internal electric field that separates electrons from holes before recombination',
        'Heating silicon to generate steam',
        'Rectifying AC to DC',
        'Storing electrochemical energy like a battery'
      ],
      correctIndex: 0,
      explanation: 'المجال الكهربائي الداخلي في منطقة النضوب هو المسؤول عن دفع الإلكترونات باتجاه واحد، مما يخلق فرق الجهد والتيار المستمر.',
      explanationEn: 'The built-in electric field sweeps separated electrons and holes in opposite directions, creating continuous DC voltage.'
    }
  ],
  tags: ['الظاهرة الكهروضوئية', 'السيليكون', 'وصلة p-n', 'فجوة الطاقة', 'الطاقة الشمسية'],
  tagsEn: ['Photovoltaic Effect', 'Silicon Semiconductor', 'P-N Junction', 'Bandgap Energy', 'Solar Photovoltaics'],
  references: [
    'Nelson, Jenny. The Physics of Solar Cells (Imperial College Press)',
    'PhET Interactive Simulations: Photoelectric Effect',
    'PVCDROM: Comprehensive Educational Photovoltaic Guide (Arizona State University)'
  ]
};

// 13. Solar Panel Performance
const ARTICLE_13: ResearchPaper = {
  id: 'paper-solar-performance',
  title: 'أداء الألواح الشمسية: الإشعاع والحرارة وتتبع نقطة القدرة القصوى (MPPT)',
  titleEn: 'Solar Panel Performance',
  author: 'مصطفى | خريج ثانوية يستعد لدراسة الهندسة الكهربائية',
  authorEn: 'Mustafa | High-School Graduate Preparing for Electrical Engineering',
  affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
  affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
  date: '2026-03-25',
  category: 'renewable_energy',
  type: 'article',
  progressionIndex: 13,
  progressionCategory: 'RENEWABLE ENERGY // الطاقة المتجددة',
  progressionCategoryEn: 'RENEWABLE ENERGY',
  readingTimeMinutes: 7,
  expId: 'SOLAR-02 • منحنيات I-V ونقاط القدرة القصوى',
  statusTag: 'SOLAR PERFORMANCE // الأداء الفعلي',
  statusTagEn: 'SOLAR PERFORMANCE',
  busStandard: 'I-V & P-V CURVES • MPPT • TEMP COEFF γ = -0.38%/°C',
  investigationQuestion: 'لماذا تنخفض كفاءة الألواح الشمسية في أيام الصيف الحارة بالرغم من زيادة شدة السطوع الشمسي؟ وما هو دور خوارزميات MPPT في استخلاص أقصى طاقة؟',
  investigationQuestionEn: 'Why does solar panel power efficiency degrade on hot summer afternoons despite intense solar irradiance, and how do MPPT algorithms track peak output?',
  motivation: 'في القصيم (بريدة)، تسجل درجات حرارة الصيف مستويات مرتفعة تتجاوز 45°C. لاحظت أن إنتاج الألواح ينخفض ظهراً مقارنة بأيام الربيع المعتدلة. قادني هذا لدراسة المعامل الحراري للقدرة (Temperature Coefficient) ومنحنيات الخواص I-V.',
  motivationEn: 'In Buraidah (Al-Qassim), summer ambient temperatures regularly exceed 45°C. Observing module output dip compared to crisp spring days motivated me to study module temperature coefficients and I-V characteristic curves.',
  abstract: 'تحليل هندسي لأداء الألواح الكهروضوئية تحت تأثير الإشعاع الشمسي والحرارة. نستعرض نموذج الصمام الأحادي للخلية، وكيف يتناسب التيار خطياً مع الإشعاع بينما يهبط الجهد مع ارتفاع الحرارة، وأهمية أجهزة تتبع نقطة القدرة القصوى (MPPT).',
  abstractEn: 'Engineering modeling of photovoltaic module performance under varying irradiance and temperature. Demonstrating single-diode equivalent circuits, current scaling with photon flux, thermal voltage degradation, and maximum power point tracking.',
  keyFindings: [
    'شدة الإشعاع (W/m²) تتحكم مباشرة في تيار الخلية I_sc بشكل خطي متناسب.',
    'درجة حرارة الخلية تتحكم في جهد الدائرة المفتوحة V_oc بمعامل حراري سلبي حاد (~ -0.35% إلى -0.40% لكل درجة مئوية).',
    'منظمات الشحن MPPT تطابق المقاومة الظاهرية للحمل مع نقطة الركبة (Knee Point) للمنحنى لاستخراج أعلى قدرة ممكنة.'
  ],
  keyFindingsEn: [
    'Solar irradiance (W/m²) governs short-circuit current I_sc in direct linear proportion.',
    'Cell temperature heavily suppresses open-circuit voltage V_oc via a negative power coefficient (~ -0.38%/°C).',
    'MPPT charge controllers continuously adjust apparent load impedance to clamp module operation at the maximum power knee.'
  ],
  whatILearned: [
    'فهمت معنى مواصفات STC المعيارية: 1000 W/m² عند حرارة خلية 25°C وكتلة هواء AM1.5.',
    'تعلمت حساب القدرة الحقيقية في الصيف: لوح 100W عند حرارة 65°C لا ينتج إلا نحو 85W بسبب فواقد الحرارة.',
    'أدركت كيف تبحث خوارزمية "الاضطراب والمراقبة" (Perturb and Observe - P&O) عن نقطة P_max.'
  ],
  whatILearnedEn: [
    'Interpreted Standard Test Conditions (STC): 1000 W/m² irradiance, 25°C cell temperature, AM1.5 spectrum.',
    'Calculated real-world summer derating: a 100W panel operates near 85W when cell temperature reaches 65°C.',
    'Understood the mechanics of the Perturb and Observe (P&O) hill-climbing algorithm in MPPT controllers.'
  ],
  nextStudyGoals: [
    'دراسة كيفية تخزين هذا الإنتاج في بطاريات الطاقة المستقلة والشبكية.'
  ],
  nextStudyGoalsEn: [
    'Explore storing intermittent solar output in battery energy storage systems.'
  ],
  contentSections: [
    {
      heading: '1. منحنى I-V ونقطة القدرة القصوى (MPP)',
      headingEn: '1. The I-V Curve and Maximum Power Point (MPP)',
      body: 'اللوح الشمسي ليس مصدر جهد مثالي ولا مصدر تيار مثالي. عند دائرة القصر (V=0) يعطي أقصى تيار I_sc. وعند الدائرة المفتوحة (I=0) يعطي أقصى جهد V_oc.\nالقدرة P = V · I تكون صفراً عند كلا الطرفين، وتبلغ ذروتها عند "ركبة المنحنى" وتسمى نقطة القدرة القصوى:\nP_{max} = V_{mp} \\cdot I_{mp}\nمعامل الملء (Fill Factor - FF) يقيس جودة اللوح: FF = (V_mp · I_mp) / (V_oc · I_sc).',
      bodyEn: 'A solar module is neither an ideal voltage nor current source. At short circuit (V=0) it outputs I_sc; at open circuit (I=0) it outputs V_oc.\nPower P = V · I is zero at both extremes, peaking at the characteristic knee called the Maximum Power Point (MPP):\nP_max = V_mp · I_mp.\nThe Fill Factor (FF) benchmarks module squareness: FF = (V_mp · I_mp) / (V_oc · I_sc).',
      equations: [
        'P_{max} = V_{mp} \\cdot I_{mp}',
        '\\text{FF} = \\frac{V_{mp} \\cdot I_{mp}}{V_{oc} \\cdot I_{sc}}',
        'P_{max}(T) = P_{STC} \\cdot [1 + \\gamma \\cdot (T_{cell} - 25)]'
      ],
      diagramNotes: 'حساب المعامل الحراري العملي:\nلوح شمسي بقدرة 400W عند STC (25°C) مع معامل حراري γ = -0.38%/°C.\nفي ظهيرة صيفية حارة في القصيم، بلغت حرارة سطح الخلية 65°C:\nفرق الحرارة: ΔT = 65 - 25 = 40°C.\nنسبة الفقد الحراري: 40 × (-0.38%) = -15.2%.\nالقدرة الفعلية القصوى المنتجة: P_actual = 400 × (1 - 0.152) = 339.2 W.',
      diagramNotesEn: 'Worked temperature coefficient calculation:\nA 400W solar module at STC (25°C) with temp coefficient γ = -0.38%/°C.\nOn a hot afternoon in Al-Qassim, cell surface temperature reaches 65°C:\nThermal delta: ΔT = 65 - 25 = 40°C.\nThermal power loss: 40 · (-0.38%) = -15.2%.\nReal-world peak output: P_actual = 400 · (1 - 0.152) = 339.2 W.',
      keyTakeaway: 'المتحكم الذكي MPPT يغير دورة التشغيل (Duty Cycle) ليبقي اللوح دائماً عند V_mp و I_mp.',
      keyTakeawayEn: 'MPPT controllers dynamically adjust converter duty cycle to hold operation at V_mp and I_mp.'
    }
  ],
  simulationType: 'none',
  videoUrl: 'https://www.youtube.com/embed/h5cm7HOAqZY',
  youtubeId: 'h5cm7HOAqZY',
  videoTitle: 'تحديات الطاقة المتجددة ومنحنى البطة (Wendover Productions)',
  videoTitleEn: 'Renewable Energy Challenges & The Duck Curve (Wendover Productions)',
  quiz: [
    {
      id: 'q-solar-perf-1',
      question: 'لوح شمسي بقدرة 100W بمعامل حراري -0.4%/°C. ارتفعت حرارة سطحه في الصيف إلى 65°C. كم تصبح قدرته القصوى؟',
      questionEn: 'A 100W module with temp coefficient of -0.4%/°C heats up to 65°C. What is its maximum output power?',
      options: ['84.0 W', '100.0 W', '92.0 W', '65.0 W'],
      optionsEn: ['84.0 W', '100.0 W', '92.0 W', '65.0 W'],
      correctIndex: 0,
      explanation: 'فرق الحرارة ΔT = 65 - 25 = 40°C. نسبة الفقد = 40 × (-0.4%) = -16%. القدرة المتبقية = 100 × (1 - 0.16) = 84W.',
      explanationEn: 'ΔT = 65 - 25 = 40°C. Power loss = 40 · (-0.4%) = -16%. Residual power = 100 · (1 - 0.16) = 84.0 W.'
    }
  ],
  tags: ['أداء الألواح', 'منحنى I-V', 'منظم MPPT', 'المعامل الحراري', 'كفاءة الطاقة'],
  tagsEn: ['Solar Performance', 'I-V Curve', 'MPPT Controller', 'Temperature Coefficient', 'Fill Factor'],
  references: [
    'NREL: Best Research-Cell Efficiency Chart and Module Testing Standards',
    'Duffie & Beckman, Solar Engineering of Thermal Processes (Wiley)',
    'IEEE Photovoltaic Specialists Conference (PVSC) Proceedings'
  ]
};

// 14. Battery Energy Storage
const ARTICLE_14: ResearchPaper = {
  ...POWER_ENERGY_TOPICS[3],
  id: 'paper-batteries-storage',
  title: 'تخزين الطاقة بالبطاريات: الكيمياء في خدمة الشبكة',
  titleEn: 'Battery Energy Storage',
  category: 'renewable_energy',
  progressionIndex: 14,
  progressionCategory: 'RENEWABLE ENERGY // الطاقة المتجددة',
  progressionCategoryEn: 'RENEWABLE ENERGY',
  references: [
    'Linden & Reddy, Handbook of Batteries (4th Edition, McGraw-Hill)',
    'Battery University Educational Resource Library',
    'NREL Grid-Scale Battery Storage Technical Reports'
  ]
};

// 15. Solar Energy and the Electrical Grid
const ARTICLE_15: ResearchPaper = {
  ...POWER_ENERGY_TOPICS[2],
  id: 'paper-solar-grid',
  title: 'الطاقة الشمسية والشبكة الكهربائية: المنظومة المتكاملة',
  titleEn: 'Solar Energy and the Electrical Grid',
  category: 'renewable_energy',
  progressionIndex: 15,
  progressionCategory: 'RENEWABLE ENERGY // الطاقة المتجددة',
  progressionCategoryEn: 'RENEWABLE ENERGY',
  references: [
    'Masters, Gilbert M. Renewable and Efficient Electric Power Systems (Wiley-IEEE)',
    'California ISO (CAISO): What the Duck Curve Tells Us About Managing a Green Grid',
    'IEEE Transactions on Sustainable Energy'
  ]
};

// 16. Renewable Energy Integration
const ARTICLE_16: ResearchPaper = {
  ...POWER_ENERGY_TOPICS[4],
  id: 'paper-renewable-frequency',
  title: 'تكامل الطاقة المتجددة واستقرار تردد الشبكة',
  titleEn: 'Renewable Energy Integration',
  category: 'renewable_energy',
  progressionIndex: 16,
  progressionCategory: 'RENEWABLE ENERGY // الطاقة المتجددة',
  progressionCategoryEn: 'RENEWABLE ENERGY',
  references: [
    'Ackermann, Thomas. Wind and Solar Power in Power Systems (John Wiley & Sons)',
    'IEEE PES Task Force on Microgrid Control and Frequency Dynamics',
    'International Energy Agency (IEA): Grid Integration of Variable Renewables'
  ]
};

export const CURRICULUM_16_ARTICLES: ResearchPaper[] = [
  ARTICLE_01,
  ARTICLE_02,
  ARTICLE_03,
  ARTICLE_04,
  ARTICLE_05,
  ARTICLE_06,
  ARTICLE_07,
  ARTICLE_08,
  ARTICLE_09,
  ARTICLE_10,
  ARTICLE_11,
  ARTICLE_12,
  ARTICLE_13,
  ARTICLE_14,
  ARTICLE_15,
  ARTICLE_16
];
