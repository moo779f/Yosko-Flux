export interface EducationalArticle {
  id: string;
  articleNumber: number;
  title: string;
  titleEn: string;
  phetSimulationName: string;
  phetUrl: string;
  phetEmbedUrl: string;
  attribution: string;
  readingTimeMinutes: number;
  paragraphs: string[];
  tryItYourselfPrompt: string;
  embedCodeHtml: string;
  keyConcepts: string[];
  // Working YouTube Video Templates
  videoUrl?: string;
  videoTitle?: string;
  videoTitleEn?: string;
  videoEmbedHtml?: string;
  youtubeId?: string;
  // Real Math Equations
  equations?: string[];
  // Dedicated Companion Guide / Final Diagram
  targetDiagramType?: 'dc_circuit' | 'ac_rlc' | 'fourier_waves' | 'grid_solar' | 'transmission_grid' | 'radio_tuner';
}

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'edu-article-intro',
    articleNumber: 1,
    title: 'من الإلكترونات إلى الشبكة الكهربائية: مقدمة في عالم الكهرباء',
    titleEn: 'From Electrons to the Electrical Grid: An Introduction to Electricity',
    phetSimulationName: 'Circuit Construction Kit: DC (مختبر إنشاء الدوائر: التيار المستمر)',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    attribution: 'Simulations by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 7,
    videoUrl: 'https://www.youtube.com/embed/GLn_9xR8_5s',
    youtubeId: 'GLn_9xR8_5s',
    videoTitle: 'مقدمة في الكهرباء ونظم الطاقة للمبتدئين والمهتمين',
    videoTitleEn: 'Introduction to Electricity and Power Systems',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/GLn_9xR8_5s" title="Introduction to Electricity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
    targetDiagramType: 'dc_circuit',
    equations: [
      'V = I \\cdot R \\quad [\\text{قانون أوم الأساسي}]',
      'P = V \\cdot I = I^2 \\cdot R \\quad [\\text{القدرة الكهربائية المستهلكة}]',
      'P_{\\text{loss}} = I^2 \\cdot R \\quad [\\text{فواقد النقل في الشبكة}]'
    ],
    keyConcepts: [
      'حركة الإلكترونات والشحنة',
      'الجهد والتيار والمقاومة',
      'قانون أوم وقوانين كيرشوف',
      'التيار المتردد مقابل المستمر',
      'نقل الطاقة والشبكة الكهربائية',
      'الطاقة الشمسية وبطاريات التخزين'
    ],
    paragraphs: [
      'الكهرباء ليست مجرد قابس في الجدار؛ الكهرباء هي أسرع وأكفأ لغة لنقل الطاقة عبر المسافات. تبدأ القصة من أدق الجسيمات: الإلكترونات الحرة داخل أسلاك النحاس، التي تندفع في حركة منتظمة عندما يوفر مصدر فرق الجهد (البطارية أو المولد) ضغطاً دافعاً لها.',
      'في الدوائر البسيطة، يحكم قانون أوم V = I·R العلاقة بين الضغط الكهربائي (الجهد) وتدفق الشحنات (التيار) والمقاومة الذرية التي تعيقها وتحول جزءاً منها إلى حرارة أو ضوء. ومن خلال قوانين كيرشوف، ندرك أن الشحنة لا تختفي ولا تتراكم عند العقد، وأن الطاقة محفوظة في كل مسار مغلق.',
      'وعندما ننتقل إلى عالم التيار المتردد (AC)، نكتشف أن الجهد يتذبذب بنمط موجي جيبي نقي، وتظهر عناصر تخزين الطاقة كالمكثفات والملفات التي تصنع ظاهرة الرنين الكهربائي المستعملة في أجهزة الاتصال والراديو.',
      'وأخيراً، تتجمع كل هذه المفاهيم في الشبكة الكهربائية الكبرى: نرفع الجهد بمحولات عملاقة لتقليل تيار النقل وفواقد الحرارة P_loss = I²·R، وندمج محطات الطاقة الشمسية وبطاريات التخزين BESS للحفاظ على ميزان التوليد والاستهلاك وثبات تردد 50Hz.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: افتح محاكي PhET أدناه وقم بتوصيل بطارية بمصباح ومقاومة، ولاحظ حركة الإلكترونات وتأثير تغيير الجهد على توهج المصباح.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-ohm',
    articleNumber: 2,
    title: 'فهم الكهرباء: الجهد والتيار والمقاومة',
    titleEn: 'Understanding Electricity: Voltage, Current and Resistance',
    phetSimulationName: 'Circuit Construction Kit: DC (مختبر إنشاء الدوائر: التيار المستمر)',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 6,
    keyConcepts: ['الشحنة الكهربائية', 'فرق الجهد (Volt)', 'شدة التيار (Ampere)', 'المقاومة (Ohm)', 'قانون أوم V=IR', 'القدرة P=VI'],
    videoUrl: 'https://www.youtube.com/embed/GLn_9xR8_5s',
    youtubeId: 'GLn_9xR8_5s',
    videoTitle: 'شرح قانون أوم والعلاقة بين الجهد والتيار والمقاومة',
    videoTitleEn: "Ohm's Law: Voltage, Current, and Resistance Explained",
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/GLn_9xR8_5s" title="Ohms Law Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
    targetDiagramType: 'dc_circuit',
    equations: [
      'V = I \\cdot R \\quad [\\text{قانون أوم الأساسي}]',
      'I = \\frac{\\Delta Q}{\\Delta t} \\quad [\\text{تعريف شدة التيار الكهربائي}]',
      'P = V \\cdot I = I^2 \\cdot R \\quad [\\text{معادلة القدرة الكهربائية}]'
    ],
    paragraphs: [
      'ما الذي يحدث داخل السلك الكهربائي عند تشغيل مفتاح الغرفة؟ الكهرباء هي سيل منظم من الإلكترونات الحرة سالبة الشحنة التي تنجرف بانتظام داخل الموصل النحاسي بفعل مجال كهربائي خارجي.',
      'فرق الجهد (Voltage - V) يقاس بالفولت، وهو يمثل "قوة الضغط" التي تدفع الشحنات للتحرك. شدة التيار (Current - I) تقاس بالأمبير، وهي كمية الشحنة الكهربائية التي تعبر مقطع السلك خلال ثانية واحدة (1A = 1 Coulomb/s).',
      'أما المقاومة (Resistance - R) فتقاس بالأوم، وهي الاحتكاك الذي تواجهه الإلكترونات عند تصادمها بذرات السلك. قانون أوم البسيط يربط هذه الثلاثية بالمعادلة الخالدة V = I·R: كلما زاد الجهد ارتفع التيار، وكلما زادت المقاومة قل التيار.',
      'مثال عملي: لو وصلنا صماماً باعثاً للضوء (LED) يحتاج 2V وتيار 20mA (0.02A) ببطارية 9V، فإن الجهد الفائض الذي يجب على المقاومة امتصاصه هو 7V. المقاومة المطلوبة لحمايته هي: R = 7 / 0.02 = 350 أوم!'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: ركب دائرة بمقاومة ومقياس أميتر وفولتميتر، وغير قيمة المقاومة من 10 إلى 100 أوم وشاهد كيف ينخفض التيار استجابة لقانون أوم.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-3',
    articleNumber: 3,
    title: 'كيف نقرأ الموجة الكهربائية؟ مقدمة في تحليل الإشارات',
    titleEn: 'Reading Electrical Waveforms: An Introduction to Signal Analysis',
    phetSimulationName: 'Fourier: Making Waves (محاكي فورييه: تركيب الموجات)',
    phetUrl: 'https://phet.colorado.edu/en/simulations/fourier-making-waves',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 5,
    keyConcepts: ['تحليل الإشارات', 'الموجة الجيبية (Sine Wave)', 'التردد 50Hz', 'الزمن الدوري T', 'السعة العظمى Vmax', 'التشوه والتوافقيات'],
    videoUrl: 'https://www.youtube.com/embed/spUNpyF58BY',
    youtubeId: 'spUNpyF58BY',
    videoTitle: 'تحليل الإشارات والموجات الكهربائية بصرياً (3Blue1Brown)',
    videoTitleEn: 'Visual Introduction to Waveforms & Fourier Analysis',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/spUNpyF58BY" title="Visual Signal Analysis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
    targetDiagramType: 'fourier_waves',
    equations: [
      'v(t) = V_{\\max} \\sin(2\\pi f t + \\phi) \\quad [\\text{معادلة الموجة الجيبية للجهد}]',
      'T = \\frac{1}{f} \\implies f = \\frac{1}{T} \\quad [\\text{العلاقة بين الزمن الدوري والتردد}]',
      'V_{\\text{rms}} = \\frac{V_{\\max}}{\\sqrt{2}} \\approx 0.707 \\cdot V_{\\max} \\quad [\\text{القيمة الفعالة للجهد الجيبي}]'
    ],
    paragraphs: [
      'عندما ننظر إلى شاشة راسم الإشارة (Oscilloscope)، نرى كيف يتغير الجهد الكهربائي عبر الزمن v(t). المحور الأفقي يمثل مرور الوقت، بينما المحور الرأسي يمثل الفولت.',
      'لكل موجة كهربائية معالم فيزيائية ثابتة: السعة العظمى (V_max) وهي أقصى ارتفاع تصله الموجة، والزمن الدوري (T) وهو الوقت الذي تحتاجه الموجة لتكرار نفسها في دورة كاملة واحدة، والتردد (f = 1/T) وهو عدد الدورات في الثانية الواحدة ويقاس بالهيرتز (Hz).',
      'في شبكات الكهرباء بتردد 50Hz، تكتمل الدورة الواحدة في 20 ميلي ثانية (0.02s). والجهد المتردد الذي نستخدمه في بيوتنا (220V RMS) يتأرجح بين ذروة موجبة +311V وذروة سالبة -311V خمسين مرة في كل ثانية!',
      'عندما نصل شواحن الهواتف أو عواكس الطاقة الشمسية، تظهر نتوءات وتعرجات على شكل الموجة، وهو ما يسمى بالتشوه التوافقي (Harmonics)، الذي يمهد لضرورة تطبيق متسلسلات فورييه لفصل الترددات الدخيلة وتنظيفها.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: استخدم المحاكي أدناه لجمع موجات بسيطة مختلفة ومراقبة كيف تندمج لتشكل موجات جديدة، وتفحص شكل الموجة المربعة المتكونة.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-rlc',
    articleNumber: 4,
    title: 'الرنين الكهربائي في دوائر RLC المتوالية: النظرية، الحسابات، والمرشحات',
    titleEn: 'Series RLC Resonance: Theory, Calculations and Filters',
    phetSimulationName: 'Circuit Construction Kit: AC (مختبر إنشاء الدوائر: التيار المتناوب)',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 6,
    keyConcepts: ['دوائر RLC', 'المعاوقة الكلية Z', 'تردد الرنين f₀', 'عامل الجودة Q', 'عرض النطاق BW', 'مرشحات الراديو'],
    videoUrl: 'https://www.youtube.com/embed/GLn_9xR8_5s',
    youtubeId: 'GLn_9xR8_5s',
    videoTitle: 'التجربة المعملية لظاهرة الرنين في دوائر RLC',
    videoTitleEn: 'Laboratory Demonstration of Series RLC Resonance',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/GLn_9xR8_5s" title="RLC Resonance Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
    targetDiagramType: 'radio_tuner',
    equations: [
      'f_0 = \\frac{1}{2\\pi \\sqrt{L \\cdot C}} \\quad [\\text{تردد الرنين في دائرة RLC}]',
      'X_L = 2\\pi f L, \\quad X_C = \\frac{1}{2\\pi f C}',
      'Z_{\\min} = R \\quad [\\text{عند الرنين تتساوى المفاعلتان وتلغيان بعضهما}]'
    ],
    paragraphs: [
      'عندما تحتوي الدائرة الكهربائية على مقاومة (R) وملف حثي (L) ومكثف (C)، تتغير تصرفاتها تغيراً جذرياً مع تغير تردد التيار المتردد.',
      'الملف يقاوم الترددات المرتفعة (X_L = 2πfL)، بينما المكثف يقاوم الترددات المنخفضة (X_C = 1/2πfC). وعند تردد دقيق ومحدد بالذات، تتساوى المفاعلتان تماماً وتلغيان بعضهما!',
      'هذه النقطة تسمى "تردد الرنين" (Resonant Frequency f₀ = 1 / 2π√LC). عند هذا التردد بالذات، تنخفض المعاوقة الكلية للدائرة إلى أدنى حد ممكن (Z = R)، ويندفع التيار بأقصى سعة ممكنة دون أي إعاقة سوى المقاومة الأومية العادية.',
      'هذا المبدأ هو الأساس لكل جهاز راديو واستقبال لاسلكي: عندما تغير مكثف الراديو ليتطابق مع تردد المحطة المرغوبة، تصبح الدائرة في رنين تام مع إشارة تلك المحطة فتسمع الصوت بنقاء، وتخمد كل الإشارات الأخرى!'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: ركب دائرة AC متوالية بها مقاومة وملف ومكثف، وغير تردد المصدر تدريجياً حتى تلاحظ قفزة التيار إلى أقصى قيمة عند نقطة الرنين.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-transmission',
    articleNumber: 5,
    title: 'كيف تنتقل الطاقة الكهربائية بكفاءة؟',
    titleEn: 'How Electrical Power Is Transmitted Efficiently',
    phetSimulationName: 'Circuit Construction Kit: DC (مختبر إنشاء الدوائر: التيار المستمر)',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 5,
    keyConcepts: ['محطات التوليد', 'محولات الرفع Step-Up', 'فواقد النقل I²·R', 'خطوط الجهد الفائق 400kV', 'محطات التوزيع 220V', 'الشبكة الكهربائية'],
    videoUrl: 'https://www.youtube.com/embed/q3aGg3K3wT0',
    youtubeId: 'q3aGg3K3wT0',
    videoTitle: 'كيف تعمل شبكة الكهرباء ومحولات الجهد الفائق؟ (Practical Engineering)',
    videoTitleEn: 'How Does the Power Grid Work? (Practical Engineering)',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/q3aGg3K3wT0" title="How Does the Power Grid Work?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
    targetDiagramType: 'transmission_grid',
    equations: [
      'P_{\\text{loss}} = I^2 \\cdot R \\quad [\\text{قانون الفقد الحراري في خطوط النقل}]',
      'P = V \\cdot I \\implies I = \\frac{P}{V} \\quad [\\text{رفع الجهد يخفض التيار ويحمي الأسلاك}]'
    ],
    paragraphs: [
      'تبدأ رحلة الكهرباء من محطات التوليد، حيث تدور التوربينات البخارية أو الغازية أو المائية لتنتج كهرباء بجهد متوسط (حوالي 11,000 فولت). لكن إذا أرسلنا هذه الكهرباء مباشرة عبر خطوط النقل لمئات الكيلومترات، فستفقد معظم طاقتها كحرارة في الأسلاك (P_loss = I²·R).',
      'السر الهندسي الذي ينقذ الطاقة هو محولات الرفع (Step-Up Transformers): بما أن القدرة المنقولة هي P = V·I، فإن مضاعفة الجهد إلى 400,000 فولت تخفض شدة التيار المار في الأسلاك بنسب هائلة، ولأن الفقد يعتمد على مربع التيار (I²)، فإن مضاعفة الجهد 10 مرات تخفض الفقد الحراري 100 مرة!',
      'عندما تقترب خطوط النقل من المدن والأحياء، تبدأ محطات التخفيض بخفض الجهد تدريجياً: من 400kV إلى 33kV ثم 11kV، وأخيراً عبر محولات التوزيع في الشوارع إلى جهد آمن (220 فولت) لتشغيل مقابس بيوتنا.',
      'هذه الشبكة المتصلة تعمل كنظام متوازن فوري: كل واط يُولد يجب أن يُستهلك في نفس اللحظة بالضبط، مما يجعل إدارة خطوط النقل والمحولات صمام الأمان لشبكة مستقرة وموثوقة.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: ركب دائرة تمثل خط نقل طويل بمقاومة عالية، ولاحظ كيف ينخفض توهج المصباح بسبب هبوط الجهد والفقد الحراري.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-4',
    articleNumber: 6,
    title: 'الطاقة الشمسية والشبكة الكهربائية',
    titleEn: 'Solar Energy and the Electrical Grid',
    phetSimulationName: 'Energy Forms and Changes (محاكي أشكال وتحولات الطاقة)',
    phetUrl: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 5,
    keyConcepts: ['الخلايا الكهروضوئية', 'تقطع الطاقة الشمسية', 'منحنى البطة (Duck Curve)', 'القصور الذاتي للشبكة', 'بطاريات BESS', 'استقرار 50Hz'],
    videoUrl: 'https://www.youtube.com/embed/dx71t9gK9sA',
    youtubeId: 'dx71t9gK9sA',
    videoTitle: 'منحنى البطة وتحدي بطاريات الشبكة مع الطاقة الشمسية (Real Engineering)',
    videoTitleEn: 'The Duck Curve and Grid Batteries (Real Engineering)',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/dx71t9gK9sA" title="The Duck Curve and Grid Batteries" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
    targetDiagramType: 'grid_solar',
    equations: [
      'P_{\\text{net}}(t) = P_{\\text{load}}(t) - P_{\\text{solar}}(t) \\quad [\\text{معادلة صافي الحمل - منحنى البطة}]',
      '\\text{SoC} = \\frac{E_{\\text{current}}}{E_{\\text{total}}} \\times 100\\% \\quad [\\text{حالة شحن بطاريات التخزين}]'
    ],
    paragraphs: [
      'الطاقة الشمسية مصدر طاقة نظيف ووفير، خصوصاً في الدول المشمسة مثل تشاد التي تحظى بأكثر من 300 يوم مشمس سنوياً. لكن دمجها في الشبكة يفرض تحدياً يتعلق بـ "التوقيت والتقطع".',
      'الخلايا الكهروضوئية تعطي أقصى إنتاج في منتصف النهار (12 ظهراً) وتتلاشى تماماً بعد الغروب. في المقابل، يبلغ استهلاك البيوت ذروته في المساء (بين 6 و 9 ليلاً) عند عودة العائلات لمنازلهم وتشغيل الإنارة والتكييف.',
      'هذا التباين يولد ما يُعرف هندسياً بـ "منحنى البطة" (Duck Curve): صافي الحمل ينخفض في الظهيرة بشكل حاد (بطن البطة)، ثم يقفز فجأة عند الغروب (عنق البطة) مما يفرض على المولدات التقليدية تسريع إنتاجها بشكل طارئ.',
      'الحل الهندسي هو دمج بنوك بطاريات التخزين الضخمة (BESS) وعواكس الطاقة الذكية؛ لامتصاص الفائض النهاري وضخه في الشبكة خلال ساعات الذروة المسائية لتأمين استقرار التردد 50Hz.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: استخدم المحاكي لتحويل الطاقة الشمسية وتخزينها، وشاهد كيف تنتقل الطاقة من الضوء إلى الألواح وتغذي الأحمال المختلفة.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  }
];

export const GOOGLE_SITES_GUIDE_STEPS = [
  {
    stepNumber: 1,
    title: 'افتح موقعك على Google Sites',
    titleEn: 'Open your site on Google Sites',
    instruction: 'انتقل إلى المتصفح وافتح sites.google.com ثم افتح الموقع الذي ترغب في نشر المقالات فيه.'
  },
  {
    stepNumber: 2,
    title: 'إضافة العنوان ونص المقالة',
    titleEn: 'Add title and article body',
    instruction: 'من اللوحة الجانبية اليمنى، اسحب صندوق "Text box" (مربع نص) إلى الصفحة، ثم انسخ العنوان ونص المقالة من الزر المخصص بالأسفل وألصقه فيه.'
  },
  {
    stepNumber: 3,
    title: 'إدراج محاكي PhET التفاعلي',
    titleEn: 'Embed PhET Interactive Simulation',
    instruction: 'تحت النص مباشرة، اسحب عنصر "Embed" (تضمين) من نفس اللوحة الجانبية، ثم اختر تبويب "Embed code" (كود التضمين) والصق كود HTML الجاهز.'
  },
  {
    stepNumber: 4,
    title: 'إدراج الفيديو المرئي والشرح',
    titleEn: 'Embed Video Lecture Template',
    instruction: 'اسحب عنصر "Embed" إضافي تحته أو استخدم عنصر "YouTube" من الشريط الجانبي والصق كود التضمين الجاهز أو رابط الفيديو للمقالة.'
  },
  {
    stepNumber: 5,
    title: 'إضافة سطر النسبة القانوني (Attribution)',
    titleEn: 'Add legal attribution line',
    instruction: 'تحت المحاكي مباشرة، أضف مربع نص صغير وألصق فيه سطر النسبة المعتمد (هو الشرط الوحيد المجاني وفق رخصة CC-BY-4.0).'
  },
  {
    stepNumber: 6,
    title: 'نشر الصفحة (Publish)',
    titleEn: 'Publish your page',
    instruction: 'اضغط على زر Publish الأزرق أعلى يمين الصفحة لنشر المقالة للجمهور. كرر الخطوات للمقالات إما في صفحات فرعية منفصلة (New Page) أو عموديًا.'
  }
];
