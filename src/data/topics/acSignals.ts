import { ResearchPaper } from '../../types';

export const AC_SIGNALS_TOPICS: ResearchPaper[] = [
  // 1. Reading Electrical Waveforms: An Introduction to Signal Analysis
  {
    id: 'paper-signal-waveforms',
    title: 'كيف نقرأ الموجة الكهربائية؟ مقدمة في تحليل الإشارات',
    titleEn: 'Reading Electrical Waveforms: An Introduction to Signal Analysis',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-08',
    category: 'ac_signals',
    type: 'article',
    progressionIndex: 4,
    progressionCategory: 'التيار المتردد والإشارات',
    progressionCategoryEn: 'AC & Signals',
    readingTimeMinutes: 6,
    expId: 'AC-01 • قراءة الموجات وتحليل الإشارات',
    statusTag: 'SIGNAL ANALYSIS // تحليل إشارات',
    statusTagEn: 'SIGNAL ANALYSIS',
    busStandard: 'WAVEFORM • v(t) • 50Hz • PERIOD & PHASE',
    investigationQuestion: 'ماذا يرى مهندس الكهرباء عندما ينظر لشاشة راسم الإشارة (Oscilloscope)؟ وكيف نترجم الرسم البياني المتذبذب إلى أرقام ومعانٍ فيزيائية؟',
    investigationQuestionEn: 'What does an electrical engineer actually see on an oscilloscope screen, and how do we translate oscillating plots into physical metrics?',
    motivation: 'عندما رأيت راسم الإشارة لأول مرة في معمل المدرسة، رأيت خطاً أخضر يرقص صعوداً وهبوطاً. أخبرني المعلم أن هذا الخط هو الجهد اللحظي لمنفذ الجدار في بيتنا! سحرني أن الكهرباء التي لا نراها بأعيننا يمكن تصويرها كأمواج مرئية تكشف كل تفاصيل التردد والزمن والطور.',
    motivationEn: 'When I first saw an oscilloscope, a glowing green line danced across the screen. My teacher explained this was the live alternating voltage from a wall outlet! It fascinated me that invisible electricity could be rendered as visible waves with measurable frequency, period, and phase.',
    abstract: 'دليل عملي وتأسيسي لقراءة الموجات الكهربائية المتذبذبة مع الزمن: التعرف على السعة القصوى (Peak Amplitude)، والقيمة بين القمتين (V_pp)، والدور الزمني (T)، والتردد (f = 1/T)، وزاوية الطور (Phase). نقارن بين الموجة الجيبية النقية والموجات المشوهة الشائعة في شواحن الهواتف وعواكس الطاقة، لتمهيد الفهم نحو متسلسلات فورييه.',
    abstractEn: 'A foundational guide to reading time-domain electrical waveforms on oscilloscopes: peak amplitude, peak-to-peak voltage, time period, frequency (f = 1/T), and phase shifts, comparing pure sine waves against real-world distorted waveforms.',
    keyFindings: [
      'الدور الزمني (T) هو الزمن اللازم لإكمال دورة موجية واحدة، والتردد (f) هو عدد الدورات المكتملة في ثانية واحدة (f = 1/T).',
      'في شبكات الكهرباء بتردد 50Hz، تكتمل الدورة الواحدة في 20 ميلي ثانية (T = 1/50 = 0.02s).',
      'الموجات الكهربائية المشوهة تتكون من موجة جيبية أساسية نقية مضافاً إليها نتوءات وتوافقيات سريعة التردد.'
    ],
    whatILearned: [
      'تعلمت قراءة محوري شاشة راسم الإشارة: المحور الأفقي يمثل الزمن (الوقت)، والمحور الرأسي يمثل الجهد بالفولت.',
      'فهمت الفرق بين القيمة العظمى V_peak وقيمة V_pp (ضعف القيمة العظمى لموجة متناظرة).',
      'أدركت أن أي تشوه نراه على شكل الموجة يعني أن هناك أحمالاً غير خطية (مثل شواحن اللابتوب والمحولات) تسحب تياراً على دفعات متقطعة.'
    ],
    whatILearnedEn: [
      'Reading oscilloscope axes: horizontal represents time (seconds/div), vertical represents potential (volts/div).',
      'Differentiating peak amplitude from peak-to-peak voltage.',
      'Understanding that waveform distortion is caused by non-linear loads drawing current in rapid pulses.'
    ],
    nextStudyGoals: [
      'فهم الأصل الرياضي والفيزيائي لتوليد الموجات الجيبية بالذات: لماذا نستخدم دوال الجيب وجيب التمام في التيار المتردد؟'
    ],
    nextStudyGoalsEn: [
      'Explore the physical and mathematical origin of sine waves in AC power generation.'
    ],
    contentSections: [
      {
        heading: '1. معالم الموجة الجيبية: السعة، الزمن الدوري، والتردد',
        headingEn: '1. Waveform Anatomy: Amplitude, Period, and Frequency',
        body: 'عندما نوصل مجساً لقياس جهد تيار متردد، يظهر الرسم البياني لتغير الجهد مع الزمن v(t).\nلنتعرف على المعالم الأربعة الرئيسية:\n\n1. السعة العظمى (Peak Amplitude - V_max): أقصى ارتفاع تصله الموجة فوق خط الصفر.\n2. الجهد من القمة إلى القاع (Peak-to-Peak - V_pp): المسافة الرأسية الكاملة بين أعلى قمة وأدنى قاع (V_pp = 2 · V_max).\n3. الزمن الدوري (Period - T): الزمن المستغرق لإتمام دورة كاملة واحدة (من قمة إلى القمة التالية)، ويُقاس بالثواني أو الميلي ثانية.\n4. التردد (Frequency - f): عدد المرات التي تتكرر فيها الدورة الكاملة خلال ثانية واحدة، ويُقاس بالهيرتز (Hz)، ويرتبط بالزمن الدوري بالعلاقة العكسية البسيطة: f = 1 / T.',
        equations: [
          'v(t) = V_{\\max} \\sin(2\\pi f t + \\phi) \\quad [\\text{الصيغة الزمنية للجهد المتردد}]',
          'f = \\frac{1}{T} \\iff T = \\frac{1}{f} \\quad [\\text{العلاقة بين التردد والزمن الدوري}]'
        ],
        exampleFigure: {
          id: 'fig-sig-1',
          type: 'sine_wave_geometry',
          figureNumber: 'شكل 4.1',
          title: 'المعالم الهندسية للموجة الكهربائية: السعة والدور والتردد',
          titleEn: 'Waveform Geometry: Amplitude, Period, and Phase Parameters',
          geekNote: 'تردد شبكتنا في المنزل 50Hz؛ هذا يعني أن تيار مصباحك يعكس اتجاهه 100 مرة في كل ثانية دون أن تلاحظ ذلك عيناك!',
          geekNoteEn: 'At 50Hz grid frequency, current reverses direction 100 times every second, too fast for human eyes to detect!',
          caption: 'تحديد القيمة العظمى Vmax، وقيمة Vpp، والزمن الدوري T على منحنى الجهد الجيبي.',
          captionEn: 'Identifying peak voltage Vmax, peak-to-peak Vpp, and period T on an AC voltage waveform.'
        },
        keyTakeaway: 'المحور الأفقي هو الزمن، والرأسي هو الفولت؛ والتردد f = 1/T يخبرنا بمدى سرعة تكرار النبضات.'
      },
      {
        heading: '2. من الموجة النقية إلى الموجات المشوهة (Distorted Waveforms)',
        headingEn: '2. From Pure Sine Waves to Distorted Real-World Waveforms',
        body: 'في الكتب المدرسية، تكون الموجات الكهربائية دائماً جيبية ناعمة ونقية تماماً. لكن في الواقع العملي، عندما نصل شواحن الحواسيب، أو مصابيح LED، أو عواكس الطاقة الشمسية، نلاحظ أن موجة التيار لم تعد جيبية ملساء!\n\nهذه النتوءات والتموجات تسمى "التشوه" (Distortion). التشويه يحدث لأن الدوائر الإلكترونية الحديثة لا تسحب التيار بانسيابية مستمرة، بل تفتح وتغلق بوابات الترانزستور بسرعة آلاف المرات في الثانية، مما ينتج موجات مربعة أو مسننة تحتوي على ترددات دخيلة (توافقيات Harmonics) تحتاج إلى فلترة.',
        equations: [
          'v_{\\text{distorted}}(t) = V_1 \\sin(\\omega t) + V_3 \\sin(3\\omega t) + V_5 \\sin(5\\omega t) + \\dots',
          '\\text{Ripple Factor} = \\frac{V_{\\text{AC, ripple}}}{V_{\\text{DC}}}'
        ],
        exampleFigure: {
          id: 'fig-sig-2',
          type: 'inverter_pwm_waveform',
          figureNumber: 'شكل 4.2',
          title: 'الموجة المشوهة لعواكس الطاقة ومقارنتها بالموجة الجيبية النقية',
          titleEn: 'Inverter PWM Stepped Waveform vs Pure Sine Reference',
          geekNote: 'الموجة المربعة هي في الواقع موجة جيبية أساسية محملة بعشرات الترددات الحادة؛ وسنرى في درس فورييه كيف نبرهن ذلك رياضياً!',
          geekNoteEn: 'A stepped waveform is fundamentally a pure sine wave bundled with higher-frequency harmonic ripples!',
          caption: 'مقارنة بين موجة التبديل النبضي (PWM) والموجة الجيبية الناتجة بعد الفلترة.',
          captionEn: 'Comparison of raw pulsed PWM switching waveform and filtered fundamental sine wave.'
        },
        keyTakeaway: 'الموجة المشوهة هي إشارة ناتجة عن أحمال إلكترونية سريعة التبديل، وتمهد لضرورة تحليل فورييه.'
      }
    ],
    simulationType: 'none',
    videoUrl: 'https://www.youtube.com/embed/QxNf5gXgA10',
    youtubeId: 'QxNf5gXgA10',
    videoTitle: 'كيف نقرأ راسم الإشارة والموجات الكهربائية (The Engineering Mindset)',
    videoTitleEn: 'How to Actually Use an Oscilloscope (The Engineering Mindset)',
    simulationExperiments: [
      {
        id: 'wave-exp-1',
        title: 'التفاعل 1: قياس زمن دورة كاملة وحساب التردد 50Hz',
        titleEn: 'Experiment 1: Measure cycle period and calculate 50Hz frequency',
        stepAction: 'في محاكي الموجات، اضبط التردد على 50Hz وقس المسافة الزمنية T بين قمتين متتاليتين.',
        stepActionEn: 'In waveform simulator, set frequency to 50Hz and measure period T between two crests.',
        expectedObservation: 'يستغرق اكتمال الدورة 20 ميلي ثانية (T = 0.02 s)، ويتأرجح الجهد بين +311V و -311V.',
        expectedObservationEn: 'Cycle completes in exactly 20 ms (T = 0.02s) oscillating between +311V and -311V peaks.',
        simpleExplanation: 'التردد هو مقلوب الزمن الدوري (f = 1/T = 1/0.02 = 50Hz). في كل ثانية تنقلب الشحنات 50 مرة ذهاباً وإياباً.',
        simpleExplanationEn: 'Frequency is the inverse of period (f = 1/T = 1/0.02 = 50Hz); charges reverse 50 times per second.'
      },
      {
        id: 'wave-exp-2',
        title: 'التفاعل 2: قياس سعة القمة والتشوه التوافقي',
        titleEn: 'Experiment 2: Peak amplitude & harmonic distortion check',
        stepAction: 'أدخل تشويهاً توافقياً صغيراً في المحاكي ولاحظ تغير شكل القمة.',
        stepActionEn: 'Introduce small harmonic distortion in simulator and watch crest shape.',
        expectedObservation: 'تظهر نتوءات وتعرجات تفقد الموجة نعومتها الجيبية النقية.',
        expectedObservationEn: 'Ripples and bumps appear on wave crest, losing pure sinusoidal smoothness.',
        simpleExplanation: 'الأجهزة الإلكترونية الحديثة تولد توافقيات عالية التردد تشوه الإشارة وتحتاج لتصفية بمرشحات خاصة.',
        simpleExplanationEn: 'Modern switching power electronics introduce high-frequency harmonics requiring filter stages.'
      }
    ],
    quiz: [
      {
        id: 'q-sig-1',
        question: 'إذا أظهر راسم الإشارة أن موجة جهد متناوبة تستغرق 0.02 ثانية (20 ميلي ثانية) لإكمال دورة واحدة، فما هو تردد هذا المصدر؟',
        questionEn: 'If an AC voltage completes one full cycle in 0.02 seconds (20 ms), what is its frequency?',
        options: ['50 هيرتز (Hz)', '60 هيرتز (Hz)', '20 هيرتز (Hz)', '100 هيرتز (Hz)'],
        optionsEn: ['50 Hz', '60 Hz', '20 Hz', '100 Hz'],
        correctIndex: 0,
        explanation: 'التردد f = 1 / T = 1 / 0.02s = 50 Hz، وهو تردد الشبكة الكهربائية المعتمد في معظم دول العالم.',
        explanationEn: 'f = 1 / T = 1 / 0.02 = 50 Hz, the standard utility frequency in most regions.'
      }
    ],
    tags: ['تحليل الإشارات', 'راسم الإشارة', 'الزمن الدوري', 'التردد 50Hz', 'سعة الموجة', 'التشوه'],
    tagsEn: ['Signal Analysis', 'Oscilloscope', 'Time Period', 'Frequency 50Hz', 'Amplitude', 'Distortion']
  },

  // 2. TOPIC 4: AC Circuits and Phase: Why Sine Waves Matter
  {
    id: 'paper-ac-sinewaves',
    title: 'دوائر التيار المتردد والطور: لماذا نستخدم الجيب؟',
    titleEn: 'AC Circuits and Phase: Why Sine Waves Matter',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-12',
    category: 'ac_signals',
    type: 'lesson',
    progressionIndex: 5,
    progressionCategory: 'التيار المتردد والإشارات',
    progressionCategoryEn: 'AC & Signals',
    readingTimeMinutes: 8,
    expId: 'AC-02 • دوائر التيار المتردد وزوايا الطور',
    statusTag: 'CORE MATHEMATICAL STUDY // دراسة تأسيسية',
    statusTagEn: 'CORE MATHEMATICAL STUDY',
    busStandard: 'SINUSOIDAL AC • PHASOR • RMS • 90° SHIFT',
    investigationQuestion: 'لماذا اعتمد العالم كله الدالة الجيبية sin(ωt) شكلاً للكهرباء بدلاً من الموجات المثلثية أو المربعة؟ وما معنى "فرق الطور" بين الجهد والتيار؟',
    investigationQuestionEn: 'Why did the entire world adopt the sinusoidal wave sin(ωt) for electricity instead of triangles or squares, and what physically is phase shift?',
    motivation: 'في بداية دراستي لحساب المثلثات، كانت دوال الجيب وجيب التمام تبدو لي مجرد نسب في مثلث قائم لحساب أطوال الأضلاع! ثم تفاجأت بأنها العمود الفقري لكل مولد كهربائي في الكوكب. أردت أن أفهم الرابط المباشر بين دوران ملف داخل مغناطيس وبين ظهور دالة الجيب، وكيف تسبق إشارة الجهد إشارة التيار.',
    motivationEn: 'Trigonometry initially felt like abstract right-triangle ratios. Then I discovered that sine and cosine are the physical pulse of every generator on Earth! I set out to uncover why magnetic rotation naturally manifests as a sine wave and why reactive components shift current phase.',
    abstract: 'شرح تحليلي مبسط ومكثف لسبب ظهور دوال الجيب (Sine) وجيب التمام (Cosine) في الهندسة الكهربائية، بدءاً من دوران ملف داخل مجال مغناطيسي وفق قانون فراداي، مروراً بمفهوم التردد الزاوي ω = 2πf، وزاوية الطور (Phase Angle φ)، وصولاً إلى القيمة الفعالة RMS ولماذا يكون جهد القابس المنزلي 220V بينما ذروته الفعلية 311V.',
    abstractEn: 'A clear conceptual and mathematical exploration of why sine waves are the foundational language of alternating current, linking rotational generators, angular frequency, phase shifts across reactive components, and RMS voltage calculations.',
    keyFindings: [
      'دوران ملف بسرعة زاوية منتظمة داخل مجال مغناطيسي يغير التدفق بمعدل جيبي، فيولد جهداً كهربائياً جيبياً نقياً وفق قانون فراداي.',
      'مشتقة وتكامل الدالة الجيبية يظلان دالة جيبية بنفس التردد مع إزاحة طور 90 درجة فقط، مما يجعل حل دوائر AC بسيطاً دون تشويه شكل الموجة.',
      'القيمة الفعالة V_rms = V_max / √2 تمثل الجهد المستمر المكافئ الذي يولد نفس القدرة الحرارية في مقاومة معينة.'
    ],
    whatILearned: [
      'فهمت الأصل الهندسي لدالة الجيب: إنها مسقط نقطة تدور على دائرة نصف قطرها V_max على المحور الرأسي!',
      'أدركت أن جهد 220V في بيوتنا هو قيمة RMS؛ أي أن الجهد يتأرجح في الحقيقة بين +311 فولت و -311 فولت 50 مرة كل ثانية!',
      'تعلمت سلوك الطور: في المقاومة الجهد والتيار في نفس الطور، في الملف الجهد يسبق التيار بـ 90 درجة (ELI)، وفي المكثف التيار يسبق الجهد بـ 90 درجة (ICE).'
    ],
    whatILearnedEn: [
      'Geometric origin of sine: vertical projection of a point rotating on a circle of radius Vmax.',
      'The 220V in our homes is RMS voltage; the instantaneous peak swings between +311V and -311V.',
      'Phase behavior: in resistors V and I are in phase; in inductors V leads I by 90°; in capacitors I leads V by 90°.'
    ],
    nextStudyGoals: [
      'دراسة ما يحدث عندما نصل المقاومة والملف والمكثف معاً على التوالي: ظاهرة الرنين الترددي RLC.'
    ],
    nextStudyGoalsEn: [
      'Investigate series RLC circuits when resistor, inductor, and capacitor operate together: resonance.'
    ],
    contentSections: [
      {
        heading: '1. لماذا الجيب بالذات؟ فيزياء المولد الدوار وقانون فراداي',
        headingEn: '1. Why Sine Waves? Rotating Generators and Faraday\'s Law',
        body: 'تخيل ملفاً مستطيلاً من السلك يدور بسرعة زاوية ثابتة (ω) داخل مجال مغناطيسي منتظم (B).\nكمية خطوط الفيض المغناطيسي التي تقطع مساحة الملف في أي لحظة تعتمد على زاوية الميلان:\n\nΦ(t) = B · A · cos(ωt)\n\nوفق قانون فراداي للحث الكهرومغناطيسي، القوة الدافعة الكهربائية المتولدة (EMF) تساوي المعدل الزمني لتغير هذا الفيض (مشتقة الفيض بالنسبة للزمن):\n\ne(t) = - dΦ/dt = B · A · ω · sin(ωt)\n\nهذا هو السر! الطبيعة تصنع الجيب تلقائياً لأن الدوران الميكانيكي المستمر يترجم رياضياً إلى دالة جيبية خالصة. بالإضافة إلى ذلك، تتميز الدالة الجيبية بخاصية رياضية فريدة: إذا اشتققتها أو كاملتها (كما يحدث في معادلات المكثفات i = C dv/dt والملفات v = L di/dt)، يظل الناتج دالة جيبية بنفس التردد بالضبط!',
        equations: [
          '\\Phi(t) = B \\cdot A \\cdot \\cos(\\omega t) \\quad [\\text{الفيض المغناطيسي عبر الملف الدوار}]',
          'e(t) = -\\frac{d\\Phi}{dt} = V_{\\max} \\sin(\\omega t) \\quad [\\text{الجهد الحثي المتولد وفق فراداي}]',
          '\\omega = 2\\pi f \\quad [\\text{التردد الزاوي بالراديان في الثانية}]'
        ],
        exampleFigure: {
          id: 'fig-ac-1',
          type: 'sine_wave_geometry',
          figureNumber: 'شكل 5.1',
          title: 'الربط الهندسي بين الدوران الدائري وتولد الموجة الجيبية',
          titleEn: 'Geometric Connection: Circular Rotation to Sinusoidal Projection',
          geekNote: 'كلما زادت سرعة دوران توربين المحطة زاد التردد ω وزاد الجهد المستحث Vmax في نفس الوقت!',
          geekNoteEn: 'Spinning the turbine faster increases both angular frequency ω and induced voltage Vmax proportionally!',
          caption: 'تولد الدالة الجيبية كمسقط لنصف القطر الدوار بسرعة زاوية ω.',
          captionEn: 'Generation of a sinusoidal wave as the projection of a radius rotating at angular velocity ω.'
        },
        keyTakeaway: 'المولد الدوار ينتج الجيب كضرورة فيزيائية لقانون فراداي، والرياضيات تجعل حسابه في الدوائر متسقاً دون تشوه.'
      },
      {
        heading: '2. زاوية الطور (Phase) ولغز القيمة الفعالة (RMS)',
        headingEn: '2. Phase Shift and the Mystery of Root Mean Square (RMS)',
        body: 'عندما يمر تيار متردد في مكثف أو ملف، لا يصعد التيار بالتزامن مع الجهد:\n- في الملف (Inductor): لأن الملف يكره التغير المفاجئ للتيار (v = L di/dt)، يضطر الجهد أن يسبق التيار بزاوية طور 90 درجة (π/2 rad).\n- في المكثف (Capacitor): الشحنات تتدفق أولاً لتملأ اللوحين قبل أن يرتفع الجهد (i = C dv/dt)، لذلك يسبق التيارُ الجهدَ بـ 90 درجة.\n\nولكن إذا كان الجهد يغير قيمته طوال الوقت، كيف نقول إن جهد بيوتنا 220 فولت؟\nهنا ابتكر المهندسون مفهوم القيمة الفعالة (RMS - Root Mean Square): هي القيمة المكافئة للتيار المستمر التي تبدد نفس القدرة الحرارية في مقاومة. لموجة جيبية متناظرة:\n\nV_rms = V_max / √2 ≈ 0.707 · V_max\n\nوهذا يعني أن جهد 220V في بيتك يصل إلى ذروة لحظية قدرها: V_max = 220 × 1.414 = 311 فولت!',
        equations: [
          'V_{\\text{rms}} = \\frac{V_{\\max}}{\\sqrt{2}} \\approx 0.7071 \\cdot V_{\\max}',
          'V_{\\max} = 220 \\times \\sqrt{2} \\approx 311.12 \\text{ V}',
          'P_{\\text{avg}} = V_{\\text{rms}} \\cdot I_{\\text{rms}} \\cdot \\cos(\\phi)'
        ],
        exampleFigure: {
          id: 'fig-ac-2',
          type: 'phasor_rotation',
          figureNumber: 'شكل 5.2',
          title: 'المتجهات الطورية وزاوية الطور بين الجهد والتيار',
          titleEn: 'Phasor Representation and Phase Angle Difference',
          geekNote: 'المتجه الطوري يحول الدالة الجيبية الصعبة إلى سهم يدور بزاوية بسيطة يسهل جمعها وطرحها كالأعداد المركبة!',
          geekNoteEn: 'Phasors simplify complex sinusoidal differential equations into straightforward vector algebra!',
          caption: 'تمثيل فرق الطور φ بين متجه الجهد ومتجه التيار في دائرة حثية.',
          captionEn: 'Vector diagram showing phase angle φ between voltage and current phasors.'
        },
        keyTakeaway: 'جهد 220V هو متوسط التأثير الحراري RMS؛ وقمته اللحظية تتجاوز 311 فولت في كل دورة.'
      }
    ],
    simulationType: 'none',
    videoUrl: 'https://www.youtube.com/embed/wzJ_zG8Y0Lw',
    youtubeId: 'wzJ_zG8Y0Lw',
    videoTitle: 'مقدمة في التيار المتردد والمستمر والموجات الجيبية (The Engineering Mindset)',
    videoTitleEn: 'AC and DC Electricity Basics (The Engineering Mindset)',
    simulationExperiments: [
      {
        id: 'phase-exp-1',
        title: 'التفاعل 1: مقارنة طور الجهد والتيار عبر مقاومة نقية',
        titleEn: 'Experiment 1: Compare voltage and current phase across pure resistor',
        stepAction: 'صل مصدراً متناوباً بمقاومة R وافتح راسم الإشارة لمراقبة منحنيي الجهد والتيار معاً.',
        stepActionEn: 'Connect AC source to resistor R and open dual-trace chart.',
        expectedObservation: 'يصل الجهد والتيار إلى القمة والقعر والصفر في نفس اللحظة بالضبط (زاوية طور صفرية φ = 0°).',
        expectedObservationEn: 'Voltage and current reach crests and troughs in unison (zero phase angle phi = 0).',
        simpleExplanation: 'المقاومة النقية لا تخزن طاقة؛ الإلكترونات تتبع إشارة الجهد مباشرة وبدون أي تأخير زمني.',
        simpleExplanationEn: 'Pure resistors cannot store energy; electron drift responds instantaneously to voltage.'
      },
      {
        id: 'phase-exp-2',
        title: 'التفاعل 2: إضافة حمل حثي وملاحظة تأخر طور التيار',
        titleEn: 'Experiment 2: Add inductive load and verify lagging phase angle',
        stepAction: 'أضف ملف حث L على التوالي مع المقاومة وراقب زاوية الطور.',
        stepActionEn: 'Add series inductor L and monitor phase shift on chart.',
        expectedObservation: 'يتأخر منحنى التيار بزاوية طور φ بين 0 و 90 درجة خلف منحنى الجهد.',
        expectedObservationEn: 'Current waveform lags behind voltage waveform by phase angle phi.',
        simpleExplanation: 'الحث الذاتي في الملف يعارض التغير اللحظي للتيار مما يسبب تأخيره في الزمن.',
        simpleExplanationEn: 'Self-inductance opposes current change, introducing an inductive phase lag.'
      }
    ],
    quiz: [
      {
        id: 'q-ac-1',
        question: 'إذا كان الجهد الكهربائي لمنفذ كهربائي منزلي يساوي 220 فولت (RMS)، فما هي القيمة اللحظية العظمى (Peak Voltage) التي يبلغها الجهد؟',
        questionEn: 'If a household AC outlet supplies 220V RMS, what is its maximum peak voltage?',
        options: ['حوالي 311 فولت', '220 فولت بالضبط', '440 فولت', '155 فولت'],
        optionsEn: ['Approximately 311 Volts', 'Exactly 220 Volts', '440 Volts', '155 Volts'],
        correctIndex: 0,
        explanation: 'V_peak = V_rms × √2 = 220 × 1.4142 ≈ 311.13 V.',
        explanationEn: 'V_peak = V_rms · √2 = 220 · 1.414 ≈ 311.1V.'
      }
    ],
    tags: ['التيار المتردد', 'الموجة الجيبية', 'التردد الزاوي', 'فرق الطور', 'القيمة الفعالة RMS', 'قانون فراداي'],
    tagsEn: ['Alternating Current', 'Sine Wave', 'Angular Frequency', 'Phase Difference', 'RMS Voltage', 'Faraday Law']
  },

  // 3. Series RLC Resonance: Theory, Calculations and Filters
  {
    id: 'paper-rlc-resonance',
    title: 'الرنين الكهربائي في دوائر RLC المتوالية: النظرية، الحسابات، والمرشحات',
    titleEn: 'Series RLC Resonance: Theory, Calculations and Filters',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-16',
    category: 'electrical_circuits',
    type: 'lesson',
    progressionIndex: 6,
    progressionCategory: 'الأساسيات والدوائر',
    progressionCategoryEn: 'Circuits & Resonance',
    readingTimeMinutes: 9,
    expId: 'RLC-03 • الرنين الترددي والمرشحات',
    statusTag: 'RESONANCE & FILTERS // رنين ومرشحات',
    statusTagEn: 'RESONANCE & FILTERS',
    busStandard: 'SERIES RLC • f₀ = 1/(2π√LC) • Q FACTOR • BW',
    investigationQuestion: 'كيف يمكن لدائرة بسيطة تحتوي على ملف ومكثف أن تنتقي محطة راديو واحدة من بين ملايين الترددات السابحة في الفضاء؟',
    investigationQuestionEn: 'How can a simple circuit of an inductor and capacitor isolate a single broadcast station from millions of radio waves in the air?',
    motivation: 'عندما فككت راديو قديماً، رأيت مكثفاً متغيراً موصولاً بملف هوائي نحاسي. سألت نفسي: كيف يغير تدوير هذا القرص الصغير صوت المذياع من محطة إلى أخرى؟ قادني هذا السؤال إلى دراسة دوائر RLC واكتشاف ظاهرة الرنين الساحرة التي تفتح الطريق لانتقاء الإشارات وتصفية الضوضاء.',
    motivationEn: 'Taking apart an old analog radio, I found a variable capacitor wired to an antenna coil. Rotating that small dial cleanly shifted broadcasts! That sparked my fascination with RLC resonance as the ultimate frequency filter.',
    abstract: 'دراسة استكشافية متعمقة ومفهومة لظاهرة الرنين في دوائر المقاومة والمحث والمكثف المتوالية (Series RLC). نستعرض اشتقاق تردد الرنين الحرج f₀، وحساب المعاوقة الكلية Z، وعامل الجودة Q (Quality Factor)، وعرض النطاق الترددي Bandwidth، مع مثال تطبيقي لحساب مكثف هوائي راديو.',
    abstractEn: 'A thorough and accessible investigation of resonance in series RLC circuits: deriving natural resonant frequency f₀ = 1/(2π√LC), total impedance behavior, Q-factor selectivity, and filter bandwidth with a solved radio-tuner example.',
    keyFindings: [
      'عند تردد الرنين تتساوى المفاعلة الحثية مع المفاعلة السعوية (X_L = X_C)، فتلاشيان بعضهما تماماً.',
      'عند نقطة الرنين تصبح معاوقة الدائرة في حدها الأدنى Z_min = R، ويندفع التيار بأقصى سعة ممكنة.',
      'عامل الجودة Q يحدد مدى حدة قمة الرنين ودقتها في انتقاء التردد المطلوب وعزل الترددات المجاورة.'
    ],
    whatILearned: [
      'فهمت كيف تلغي المعاوقة التفاعلية بعضها: X_L موجبة تخيلية (+jωL) و X_C سالبة تخيلية (-j/(ωC))، ومجموعهما عند الرنين صفر!',
      'تعلمت حساب مكثف الراديو: لاستقبال إذاعة 1000 kHz مع ملف 100 μH، نحتاج مكثفاً سعته 253.3 بيكوفاراد.',
      'أدركت أن الرنين ليس نظرياً فقط بل هو المبدأ الأساسي في شواحن الهواتف اللاسلكية وفلاتر الشبكات الكهربائية.'
    ],
    whatILearnedEn: [
      'Reactive cancellation: inductive reactance (+jωL) cancels capacitive reactance (-j/ωC) to zero at resonance.',
      'Radio tuner calculation: tuning 1000 kHz with a 100μH inductor requires C = 253.3 pF.',
      'Resonance powers wireless phone charging and harmonic power grid filters.'
    ],
    nextStudyGoals: [
      'دراسة متسلسلات فورييه لفهم كيف نقوم بتركيب وتفكيك الإشارات غير الجيبية إلى توافقيات متعددة.'
    ],
    nextStudyGoalsEn: [
      'Explore Fourier Series to decompose and analyze non-sinusoidal electrical waveforms into harmonics.'
    ],
    contentSections: [
      {
        heading: '1. المعاوقة وحالة التوازن عند تردد الرنين (f₀)',
        headingEn: '1. Total Impedance & Cancellation at Resonant Frequency',
        body: 'في دائرة RLC متوالية موصولة بمصدر تيار متردد، يواجه التيار ثلاثة أنواع من الإعاقة:\n1. المقاومة الأومية (R): ثابتة ولا تتغير مع التردد.\n2. المفاعلة الحثية (X_L = 2πfL): تزداد خطياً كلما زاد التردد، لأن الملف يكره التغير السريع للتيار.\n3. المفاعلة السعوية (X_C = 1 / (2πfC)): تنخفض كلما زاد التردد، لأن المكثف يسمح للترددات العالية بالمرور بسهولة.\n\nالمعاوقة الكلية للدائرة تعطى بالمعادلة:\nZ = √[ R² + (X_L - X_C)² ]\n\nعند تردد محدد بالذات، تتساوى قيمتا X_L و X_C تماماً (X_L = X_C). عند هذه اللحظة، يصبح الفرق بينهما صفراً (X_L - X_C = 0)، فتصل المعاوقة الكلية إلى أقل قيمة ممكنة: Z = R! هذا التردد يسمى "تردد الرنين" (Resonant Frequency f₀).',
        equations: [
          'X_L = 2\\pi f L, \\quad X_C = \\frac{1}{2\\pi f C}',
          'Z = \\sqrt{R^2 + (X_L - X_C)^2} \\xrightarrow{f = f_0} Z_{\\min} = R',
          'f_0 = \\frac{1}{2\\pi \\sqrt{L \\cdot C}} \\quad [\\text{قانون تردد الرنين الأساسي}]'
        ],
        exampleFigure: {
          id: 'fig-rlc-1',
          type: 'rlc_energy_slosh',
          figureNumber: 'شكل 6.1',
          title: 'تأرجح وتبادل الطاقة الكهرومغناطيسية عند تردد الرنين',
          titleEn: 'Resonant Electromagnetic Energy Sloshing Between L and C',
          geekNote: 'عند الرنين، تتبادل الطاقة بالكامل بين المجال الكهربائي للمكثف والمجال المغناطيسي للمحث كبندول ساعة مثالي!',
          geekNoteEn: 'At resonance, energy oscillates entirely between capacitor electric field and inductor magnetic field like a frictionless pendulum!',
          caption: 'مخطط تبادل الطاقة اللحظية في دائرة RLC المتوالية عند الرنين.',
          captionEn: 'Instantaneous energy transfer cycle in series RLC at resonance.'
        },
        keyTakeaway: 'عند تردد الرنين تتلاشى ممانعة المكثف والملف معاً، وتصبح الدائرة مقاومة أومية نقية يمر بها أقصى تيار.'
      },
      {
        heading: '2. عامل الجودة (Q Factor)، عرض النطاق (BW)، وحساب مرشح الراديو',
        headingEn: '2. Quality Factor (Q), Bandwidth (BW), and Radio Tuner Design',
        body: 'لا تكتمل دراسة الرنين دون معرفة "مدى حدة" هذا الرنين. هذا ما يحدده عامل الجودة (Quality Factor - Q):\n\nQ = (1/R) · √(L/C) = (2π f₀ L) / R\n\n- إذا كانت المقاومة R صغيرة جداً، يكون Q كبيراً جداً، وتكون قمة الرنين حادة وانتقائية للغاية (Sharp Peak).\n- عرض النطاق الترددي (Bandwidth - BW) هو نطاق الترددات التي تسمح الدائرة بمرورها بقوة لا تقل عن 70.7% من أقصى تيار (نقاط نصف القدرة):\nBW = f₀ / Q\n\nمثال تطبيقي قمت بحسابه:\nنريد التقاط محطة راديو تبث عند f₀ = 1 MHz (1000 kHz). إذا كان لدينا ملف هوائي حثه L = 100 μH (100 × 10⁻⁶ H)، ما هي سعة المكثف المتغير المطلوبة؟\nمن معادلة الرنين f₀² = 1 / (4π² L C)، نجد:\nC = 1 / (4π² · f₀² · L) = 1 / (4 × 9.8696 × 10¹² × 100 × 10⁻⁶) ≈ 253.3 pF (بيكوفاراد).\nبضبط المكثف على 253.3 pF، تصبح الدائرة في حالة رنين تام مع المحطة وتلغي كل المحطات الأخرى!',
        equations: [
          'Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}} = \\frac{\\omega_0 L}{R} \\quad [\\text{عامل الجودة للدائرة المتوالية}]',
          '\\text{BW} = \\frac{f_0}{Q} = \\frac{R}{2\\pi L} \\quad [\\text{عرض النطاق الترددي}]',
          'C = \\frac{1}{4\\pi^2 f_0^2 L} \\quad [\\text{حساب مكثف هوائي الاستقبال}]'
        ],
        exampleFigure: {
          id: 'fig-rlc-2',
          type: 'radio_tuner_circuit',
          figureNumber: 'شكل 6.2',
          title: 'دائرة مرشح هوائي الراديو لانتقاء التردد المطلوب',
          titleEn: 'Antenna LC Tuning Circuit Isolating Target Broadcast Station',
          geekNote: 'انظر كيف يخمد المرشح كل الإشارات الأخرى ويسمح فقط للموجة المطابقة لتردد f₀ بالدخول لمضخم الصوت!',
          geekNoteEn: 'The resonant filter suppresses adjacent interfering frequencies, channeling only the tuned f₀ carrier wave!',
          caption: 'مخطط دائرة الرنين كمرشح تمرير نطاق (Bandpass Filter) في مستقبل راديو.',
          captionEn: 'Bandpass RLC tuning circuit isolating a single broadcast station.'
        },
        keyTakeaway: 'كلما انخفضت المقاومة R ارتفع عامل الجودة Q، وصار المرشح أدق في عزل الترددات غير المرغوبة.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/hp-yXvB7P1E',
    youtubeId: 'hp-yXvB7P1E',
    videoTitle: 'شرح وتجربة ظاهرة الرنين في دوائر RLC (The Organic Chemistry Tutor)',
    videoTitleEn: 'Series RLC Circuits, Resonant Frequency & Reactance (The Organic Chemistry Tutor)',
    videoTopics: [
      '00:00 - مقدمة في ظاهرة الرنين بالدوائر الكهربائية',
      '03:15 - اشتقاق معادلة تردد الرنين f₀ = 1/(2π√LC)',
      '07:40 - مراقبة ذروة التيار وانخفاض المعاوقة عملياً',
      '11:20 - قياس عامل الجودة Q وعرض النطاق الترددي'
    ],
    simulationExperiments: [
      {
        id: 'rlc-exp-1',
        title: 'التفاعل 1: توليف التردد وبلوغ قمة الرنين f₀ ≈ 159Hz',
        titleEn: 'Experiment 1: Frequency tuning to resonance peak f0 ≈ 159Hz',
        stepAction: 'في محاكي AC، ضع R=10Ω و L=100mH و C=10μF، وحرك تردد المصدر تدريجياً نحو 159Hz.',
        stepActionEn: 'In AC Sim, place R=10Ω, L=100mH, C=10μF, and slide frequency toward 159Hz.',
        expectedObservation: 'يقفز التيار فجأة من 0.15 A إلى 1.00 A، وتتطابق موجة الجهد مع موجة التيار تماماً.',
        expectedObservationEn: 'Current surges to 1.00 A peak, and voltage/current waveforms fall into exact phase alignment.',
        simpleExplanation: 'عند الرنين تلغي مفاعلة الملف الحثية XL مفاعلة المكثف السعوية XC فتصبح المعاوقة Z = R فقط!',
        simpleExplanationEn: 'At resonance XL cancels XC; total impedance collapses to pure resistance R, maximizing current.'
      },
      {
        id: 'rlc-exp-2',
        title: 'التفاعل 2: ملاحظة الخمود خارج نطاق الرنين',
        titleEn: 'Experiment 2: Off-resonance signal attenuation',
        stepAction: 'غيّر التردد بعيداً إلى 50Hz أو 500Hz وراقب التيار.',
        stepActionEn: 'Shift frequency to 50Hz or 500Hz and observe current.',
        expectedObservation: 'يهبط التيار بشدة إلى أقل من 0.15 A وتنحرف زاوية الطور.',
        expectedObservationEn: 'Current plummets below 0.15 A and phase shifts significantly.',
        simpleExplanation: 'هذا السلوك الحاد هو الأساس الهندسي لمرشحات أجهزة الراديو لعزل محطة واحدة ورفض باقي المحطات.',
        simpleExplanationEn: 'This sharp filtering action enables radio receivers to tune into a single frequency cleanly.'
      }
    ],
    simulationType: 'none',
    quiz: [
      {
        id: 'q-rlc-1',
        question: 'في دائرة RLC متوالية عند تردد الرنين، ماذا يحدث للمعاوقة الكلية للدائرة (Z)؟',
        questionEn: 'In a series RLC circuit at resonance, what happens to total impedance Z?',
        options: [
          'تصل لأقل قيمة ممكنة وتساوي المقاومة الأومية R فقط',
          'تصل لأعلى قيمة ممكنة وتمنع مرور التيار',
          'تصبح مساوية للصفر تماماً دون أي إعاقة',
          'تتضاعف قيمتها وتصبح لا نهائية'
        ],
        optionsEn: [
          'Reaches minimum value, equal strictly to resistance R',
          'Reaches maximum value, blocking all current flow',
          'Becomes exactly zero with zero impedance',
          'Doubles and approaches infinity'
        ],
        correctIndex: 0,
        explanation: 'عند الرنين X_L = X_C، فتصبح المعاوقة Z = √(R² + 0) = R، وهي أدنى معاوقة ممكنة للدائرة.',
        explanationEn: 'At resonance X_L = X_C, so Z = √(R² + 0) = R, yielding minimum impedance and peak current.'
      }
    ],
    tags: ['دوائر RLC', 'الرنين الكهربائي', 'المعاوقة', 'عامل الجودة Q', 'عرض النطاق', 'مرشحات الراديو'],
    tagsEn: ['RLC Circuits', 'Resonance', 'Impedance', 'Quality Factor', 'Bandwidth', 'Radio Filters']
  },

  // 4. Introduction to Fourier Series and Harmonics in Electrical Signals
  {
    id: 'paper-fourier-harmonics',
    title: 'مقدمة في متسلسلات فورييه والتوافقيات في الإشارات الكهربائية',
    titleEn: 'Introduction to Fourier Series and Harmonics in Electrical Signals',
    author: 'مصطفى | خريج ثانوية وشغوف بالهندسة الكهربائية',
    authorEn: 'Mustafa | High-School Graduate & Aspiring Electrical Engineer',
    affiliation: 'ملف التعلم الذاتي والتحضير لدراسة الهندسة الكهربائية',
    affiliationEn: 'Self-Directed Learning Portfolio • Electrical Engineering Prep',
    date: '2026-03-20',
    category: 'mathematics',
    type: 'article',
    progressionIndex: 7,
    progressionCategory: 'التيار المتردد والإشارات',
    progressionCategoryEn: 'AC & Signals',
    readingTimeMinutes: 8,
    expId: 'FOURIER-04 • متسلسلات فورييه والتوافقيات',
    statusTag: 'APPLIED MATHEMATICS // رياضيات تطبيقية',
    statusTagEn: 'APPLIED MATHEMATICS',
    busStandard: 'FOURIER DECOMPOSITION • HARMONICS • THD INTUITION',
    investigationQuestion: 'كيف نثبت رياضياً أن أي موجة معقدة أو مربعة في أجهزتنا الكهربائية تتكون في الأصل من خليط من موجات جيبية بسيطة؟',
    investigationQuestionEn: 'How do we mathematically demonstrate that complex or square waveforms are fundamentally built from harmonically related simple sine waves?',
    motivation: 'عندما قرأت لأول مرة أن جوزيف فورييه قال في عام 1807 إن أي دالة دورية يمكن كتابتها كمجموع لموجات جيبية وجيب تمام، شكك كبار علماء عصره في كلامه! لكن عندما استخدمت محاكي فورييه وجمعت موجة 50Hz مع موجة 150Hz و250Hz ورأيت الموجة المربعة تتشكل أمامي تدريجياً، كان ذلك أروع استيعاب رياضي مررت به.',
    motivationEn: 'In 1807, Fourier claimed that any periodic function could be represented as a sum of sines and cosines. When I used a simulator to add a 50Hz fundamental with 150Hz and 250Hz odd harmonics and watched a square wave emerge before my eyes, it was pure mathematical magic.',
    abstract: 'مدخل تعليمي مفهوم لمفهوم متسلسلات فورييه وتطبيقاتها في الأنظمة الكهربائية: استيعاب الإشارات الدورية، ولماذا تعتبر الموجات الجيبية وجيب التمام لبنات بناء أساسية، وكيف تنشأ التوافقيات (Harmonics) في الشبكات الكهربائية بسبب العواكس وشواحن الهواتف، مع نظرة مبسطة على ظاهرة غيبس ومعامل التشويه THD.',
    abstractEn: 'An accessible introduction to Fourier Series and electrical harmonics: periodic signals, sine/cosine building blocks, harmonic decomposition in power electronics, and intuitive overviews of Gibbs phenomenon and Total Harmonic Distortion (THD).',
    keyFindings: [
      'فكرة فورييه الجوهرية: أي موجة دورية متكررة يمكن تفكيكها إلى مركبة أساسية نقية ومجموعة لا نهائية من التوافقيات بترددات مضاعفة.',
      'التوافقيات هي ترددات مضاعفة للتردد الأساسي (التوافقية الثالثة 150Hz، والخامسة 250Hz لشبكة 50Hz).',
      'الأحمال غير الخطية تولد تيارات توافقية ترفع حرارة المحولات وتهدر الطاقة، ويتم تنظيفها باستخدام مرشحات LC الترددية.'
    ],
    whatILearned: [
      'فهمت معنى متسلسلة فورييه بدون تعقيد: الموجة المعقدة = قيمة ثابتة (DC) + موجة أساسية (50Hz) + توافقيات (150Hz, 250Hz, 350Hz...).',
      'تعلمت لماذا تحتوي الموجات المربعة المتناظرة على توافقيات فردية فقط (n = 1, 3, 5...).',
      'أدركت معنى ظاهرة غيبس (Gibbs Phenomenon): قفزات الزوايا الحادة في الموجات المربعة تترك نتوءاً صغيراً ثابتاً (~8.9%) مهما زاد عدد الحدود التوافقية.',
      'فهمت كيف يصمم المهندسون مرشحات تمرير منخفض (Low-Pass Filter) لتمرير تردد 50Hz الأساسي وحجب التوافقيات العالية.'
    ],
    whatILearnedEn: [
      'Intuitive Fourier Series: complex wave = DC offset + fundamental sine + higher harmonic multiples.',
      'Symmetric square waves consist purely of odd harmonics (1st, 3rd, 5th, 7th...).',
      'Gibbs phenomenon: sharp jump discontinuities exhibit a persistent ~8.9% overshoot regardless of terms summed.',
      'Designing low-pass LC filters to pass clean 50Hz and eliminate high-frequency ripple.'
    ],
    nextStudyGoals: [
      'الانتقال إلى دراسة القدرة الكهربائية: ما هي القدرة الفعالة والقدرة غير الفعالة ومعامل القدرة؟'
    ],
    nextStudyGoalsEn: [
      'Transition to electrical power: explore active power, reactive power, and power factor.'
    ],
    contentSections: [
      {
        heading: '1. الإشارات الدورية ولماذا نستخدم الموجات الجيبية كلبنات بناء',
        headingEn: '1. Periodic Signals and Sinusoidal Building Blocks',
        body: 'الإشارة الدورية (Periodic Signal) هي أي كمية كهربائية تعيد تكرار شكلها بدقة بعد زمن ثابت T:\nf(t + T) = f(t)\n\nالسؤال الذي طرحه فورييه: هل يمكن تركيب هذا الشكل المعقد عبر جمع موجات جيبية ناعمة؟\nالإجابة هي نعم! فالموجات الجيبية وجيب التمام تتميز بخاصية التعامد (Orthogonality): كل موجة جيبية بتردد مختلف تعتبر مستقلة تماماً عن الأخريات.\n\nصيغة فورييه البسيطة:\nf(t) = a₀/2 + Σ [ aₙ cos(n ω₀ t) + bₙ sin(n ω₀ t) ]\n\n- a₀/2: يمثل القيمة المتوسطة المستمرة (DC offset).\n- عندما n = 1: هذه هي "الموجة الأساسية" (Fundamental) بتردد 50Hz، وهي التي نريدها لتشغيل أجهزتنا.\n- عندما n = 2, 3, 4, 5...: هذه هي "التوافقيات" (Harmonics) بترددات مضاعفة (100Hz, 150Hz, 200Hz, 250Hz...).',
        equations: [
          'f(t) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left[ a_n \\cos(n \\omega_0 t) + b_n \\sin(n \\omega_0 t) \\right]',
          '\\omega_0 = 2\\pi f_1 = \\frac{2\\pi}{T} \\quad [\\text{التردد الزاوي الأساسي}]',
          'f_n = n \\cdot f_1 \\quad [\\text{تردد التوافقية رقم n}]'
        ],
        exampleFigure: {
          id: 'fig-fa-1',
          type: 'fourier_spectrum_bars',
          figureNumber: 'شكل 7.1',
          title: 'تفكيك الإشارة الكهربائية إلى طيف التوافقيات بتردداتها المضاعفة',
          titleEn: 'Spectral Decomposition of Waveforms into Discrete Harmonic Bars',
          geekNote: 'انظر لأعمدة التردد: العمود الطويل هو التردد الأساسي 50Hz، والأعمدة الأقصر هي التوافقيات 3 و 5 و 7 التي تشوه الموجة!',
          geekNoteEn: 'The dominant tall bar is the 50Hz fundamental; shorter bars are odd harmonic multiples causing distortion!',
          caption: 'طيف فورييه الترددي يوضح سعات المركبة الأساسية H1 والتوافقيات H3 و H5 و H7.',
          captionEn: 'Fourier frequency spectrum showing amplitudes of fundamental H1 and harmonics H3, H5, H7.'
        },
        keyTakeaway: 'تحليل فورييه هو مثل المنشور الزجاجي الذي يحلل الضوء الأبيض إلى ألوان الطيف، يحلل الموجة الكهربائية إلى تردداتها النقية.'
      },
      {
        heading: '2. التوافقيات في شبكات الكهرباء وكيف ننظفها بمرشحات LC',
        headingEn: '2. Harmonics in Power Systems and LC Filter Cleanup',
        body: 'لماذا نهتم بالتوافقيات في الهندسة الكهربائية؟\nالسبب هو إلكترونيات القوى الحديثة: عواكس الألواح الشمسية، شواحن الهواتف، ومحركات التكييف الذكية (Inverter ACs) كلها تستخدم مفاتيح إلكترونية تولد تيارات مشوهة.\n\nتأثير التوافقيات الضار:\n1. تسخين المحولات: الترددات العالية (مثل 250Hz) تزيد فواقد التيارات الدوامية (Eddy Currents) في قلوب الحديد وتسخن المحولات.\n2. تشويه جهد الشبكة: معامل التشويه التوافقي الكلي (THD - Total Harmonic Distortion) يقيس نسبة الطاقة المشوهة إلى الطاقة النقية.\n\nكيف ننظف الإشارة؟\nالحل الهندسي هو تصميم مرشحات LC: نضع ملفاً على التوالي (يقاوم الترددات العالية X_L = 2πfL) ومكثفاً على التوازي مع الحمل (يسرب الترددات العالية إلى الأرضي X_C = 1/2πfC). فيمر تردد 50Hz النقي بسلام بينما تتلاشى التوافقيات المزعجة!',
        equations: [
          '\\text{THD} = \\frac{\\sqrt{V_2^2 + V_3^2 + V_4^2 + \\dots}}{V_1} \\times 100\\%',
          'f_c = \\frac{1}{2\\pi \\sqrt{L \\cdot C}} \\quad [\\text{تردد القطع لمرشح التمرير المنخفض LC}]'
        ],
        exampleFigure: {
          id: 'fig-fa-2',
          type: 'lc_filter_cleanup',
          figureNumber: 'شكل 7.2',
          title: 'تنقية موجة العاكس المشوهة باستخدام مرشح LC منخفض التمرير',
          titleEn: 'Low-Pass LC Filter Cleaning Inverter Stepped Waves to Pure Sine',
          geekNote: 'على اليسار موجة مربعة مشوهة تخرج من العاكس، وعلى اليمين موجة جيبية ناعمة تخرج بعد المرشح لتغذي الشبكة بأمان!',
          geekNoteEn: 'Raw PWM pulses entering from left emerge as smooth pure sine waves on right after LC filtering!',
          caption: 'مخطط تصفية موجات إلكترونيات القوى عبر مرشح LC لتحقيق معايير جودة القدرة.',
          captionEn: 'Power electronics wave filtering via LC low-pass stage to achieve grid THD standards.'
        },
        keyTakeaway: 'التوافقيات حرارة مهدرة وتشويه، ومرشحات LC هي الدواء الهندسي لتنظيف تيار الشبكة.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/spUNpyF58BY',
    youtubeId: 'spUNpyF58BY',
    videoTitle: 'مقدمة بصرية ممتعة: ما هي متسلسلات وتحويلات فورييه؟ (3Blue1Brown)',
    videoTitleEn: 'Visual Introduction to the Fourier Transform and Harmonics (3Blue1Brown)',
    videoTopics: [
      '00:00 - كيف نتصور تفكيك الموجات المعقدة؟',
      '04:30 - رسم الدوائر الدوارة وجمع الترددات الجيبية',
      '09:15 - كيفية استخراج طيف الترددات والمطالات',
      '14:00 - تطبيقات معالجة الإشارات وهندسة الكهرباء'
    ],
    simulationExperiments: [
      {
        id: 'fourier-exp-1',
        title: 'التفاعل 1: إفراد النغمة الأساسية 50Hz النقية',
        titleEn: 'Experiment 1: Isolate pure 50Hz fundamental tone',
        stepAction: 'في تبويب Discrete، ضع شريط n=1 عند 1.00 واجعل باقي التوافقيات صفراً.',
        stepActionEn: 'In Discrete tab, set slider n=1 to 1.00 and zero out others.',
        expectedObservation: 'تظهر موجة جيبية ناعمة ومنتظمة دون أي تعرجات.',
        expectedObservationEn: 'A smooth, pure sinusoidal waveform appears with zero distortion.',
        simpleExplanation: 'النغمة الأساسية النقية تمثل التيار المتردد المثالي الخالي من التشويه التوافقي.',
        simpleExplanationEn: 'The fundamental tone represents clean, undistorted ideal AC current.'
      },
      {
        id: 'fourier-exp-2',
        title: 'التفاعل 2: إضافة التوافقيات الفردية وبناء الموجة المربعة',
        titleEn: 'Experiment 2: Add odd harmonics to construct square wave',
        stepAction: 'أضف بالتوالي A3 = 0.33 ثم A5 = 0.20 ثم A7 = 0.14.',
        stepActionEn: 'Sequentially add A3 = 0.33, A5 = 0.20, and A7 = 0.14.',
        expectedObservation: 'تتسطح قمم الموجة وتصبح الحواف رأسية، وتتحول تدريجياً لموجة مربعة رقمية!',
        expectedObservationEn: 'Crests flatten and edges sharpen, transforming into a crisp square wave.',
        simpleExplanation: 'مبرهنة فورييه: أي موجة دورية معقدة أو رقمية هي في الحقيقة مجموع موجات جيبية نقية بترددات متضاعفة.',
        simpleExplanationEn: 'Fourier theorem proves any complex wave is merely a sum of sinusoidal harmonics.'
      }
    ],
    simulationType: 'none',
    quiz: [
      {
        id: 'q-fa-1',
        question: 'إذا كان التردد الأساسي لمصدر تيار متردد هو 50Hz، فما هو تردد التوافقية الثالثة (3rd Harmonic)؟',
        questionEn: 'If the fundamental frequency of an AC power source is 50Hz, what is the frequency of the 3rd harmonic?',
        options: ['150 هيرتز (Hz)', '100 هيرتز (Hz)', '250 هيرتز (Hz)', '53 هيرتز (Hz)'],
        optionsEn: ['150 Hz', '100 Hz', '250 Hz', '53 Hz'],
        correctIndex: 0,
        explanation: 'تردد أي توافقية هو مضاعف صحيح للتردد الأساسي: f₃ = 3 × f₁ = 3 × 50 Hz = 150 Hz.',
        explanationEn: 'Harmonic frequency is an integer multiple: f_3 = 3 · 50 = 150 Hz.'
      }
    ],
    tags: ['متسلسلات فورييه', 'التحليل التوافقي', 'التوافقيات Harmonics', 'معامل THD', 'مرشحات LC', 'جودة القدرة'],
    tagsEn: ['Fourier Series', 'Harmonic Analysis', 'Harmonics', 'THD', 'LC Filters', 'Power Quality']
  }
];
