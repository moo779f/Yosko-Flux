export interface EducationalArticle {
  id: string;
  articleNumber: number;
  title: string;
  titleEn: string;
  phetSimulationName: string;
  phetSimulationNameEn?: string;
  phetUrl: string;
  phetEmbedUrl: string;
  attribution: string;
  attributionEn?: string;
  readingTimeMinutes: number;
  paragraphs: string[];
  paragraphsEn?: string[];
  tryItYourselfPrompt: string;
  tryItYourselfPromptEn?: string;
  embedCodeHtml: string;
  keyConcepts: string[];
  keyConceptsEn?: string[];
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
    phetSimulationNameEn: 'Circuit Construction Kit: DC',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    attribution: 'Simulations by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    attributionEn: 'Simulations by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 7,
    videoUrl: 'https://www.youtube.com/embed/mc979OhitAg',
    youtubeId: 'mc979OhitAg',
    videoTitle: 'كيف تعمل الكهرباء وتنتقل الشحنات في الدوائر (The Engineering Mindset)',
    videoTitleEn: 'How Electricity Works - For Visual Learners (The Engineering Mindset)',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/mc979OhitAg" title="How Electricity Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
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
    keyConceptsEn: [
      'Electron drift & charge flow',
      'Voltage, Current & Resistance',
      'Ohm’s and Kirchhoff’s Laws',
      'Alternating Current vs Direct Current',
      'Power Transmission & The Grid',
      'Solar PV & Battery Storage'
    ],
    paragraphs: [
      'الكهرباء ليست مجرد قابس في الجدار؛ الكهرباء هي أسرع وأكفأ لغة لنقل الطاقة عبر المسافات. تبدأ القصة من أدق الجسيمات: الإلكترونات الحرة داخل أسلاك النحاس، التي تندفع في حركة منتظمة عندما يوفر مصدر فرق الجهد (البطارية أو المولد) ضغطاً دافعاً لها.',
      'في الدوائر البسيطة، يحكم قانون أوم V = I·R العلاقة بين الضغط الكهربائي (الجهد) وتدفق الشحنات (التيار) والمقاومة الذرية التي تعيقها وتحول جزءاً منها إلى حرارة أو ضوء. ومن خلال قوانين كيرشوف، ندرك أن الشحنة لا تختفي ولا تتراكم عند العقد، وأن الطاقة محفوظة في كل مسار مغلق.',
      'وعندما ننتقل إلى عالم التيار المتردد (AC)، نكتشف أن الجهد يتذبذب بنمط موجي جيبي نقي، وتظهر عناصر تخزين الطاقة كالمكثفات والملفات التي تصنع ظاهرة الرنين الكهربائي المستعملة في أجهزة الاتصال والراديو.',
      'وأخيراً، تتجمع كل هذه المفاهيم في الشبكة الكهربائية الكبرى: نرفع الجهد بمحولات عملاقة لتقليل تيار النقل وفواقد الحرارة P_loss = I²·R، وندمج محطات الطاقة الشمسية وبطاريات التخزين BESS للحفاظ على ميزان التوليد والاستهلاك وثبات تردد 50Hz.'
    ],
    paragraphsEn: [
      'Electricity is not just a plug in the wall; electricity is the fastest and most efficient medium for transporting energy across great distances. The story starts from the subatomic level: conduction electrons inside copper wire lattices, propelled into synchronized drift when an electrical potential difference provides an electromotive driving force.',
      'In basic circuits, Ohm’s Law V = I·R governs the relationship between electrical pressure (voltage), charge flow rate (current), and atomic resistance that dissipates energy into heat or light. Kirchhoff’s laws reveal that charge is strictly conserved at circuit nodes, and energy is conserved across every closed path.',
      'Transitioning to Alternating Current (AC), voltage oscillates in pure sinusoidal waveforms, giving rise to reactive energy-storing components like capacitors and inductors that produce electrical resonance—the foundation of radio communications and tuning.',
      'Finally, these concepts unite in the macro power grid: voltage is stepped up with massive transformers to slash transmission current and line heating (P_loss = I²·R), while solar PV and battery storage systems (BESS) are synchronized to maintain exact 50 Hz frequency equilibrium.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: افتح محاكي PhET أدناه وقم بتوصيل بطارية بمصباح ومقاومة، ولاحظ حركة الإلكترونات وتأثير تغيير الجهد على توهج المصباح.',
    tryItYourselfPromptEn: 'Try it yourself: Open the PhET simulator below, connect a DC battery to a light bulb and resistor, and observe real-time electron flow and lamp brightness variation with changing voltage.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-ohm',
    articleNumber: 2,
    title: 'فهم الكهرباء: الجهد والتيار والمقاومة',
    titleEn: 'Understanding Electricity: Voltage, Current and Resistance',
    phetSimulationName: 'Circuit Construction Kit: DC (مختبر إنشاء الدوائر: التيار المستمر)',
    phetSimulationNameEn: 'Circuit Construction Kit: DC',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    attributionEn: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 6,
    keyConcepts: ['الشحنة الكهربائية', 'فرق الجهد (Volt)', 'شدة التيار (Ampere)', 'المقاومة (Ohm)', 'قانون أوم V=IR', 'القدرة P=VI'],
    keyConceptsEn: [
      'Electric Charge (Coulombs)',
      'Potential Difference (Volts)',
      'Current Intensity (Amperes)',
      'Resistance (Ohms)',
      'Ohm’s Law V = I·R',
      'Electric Power P = V·I'
    ],
    videoUrl: 'https://www.youtube.com/embed/0DxKZl9AEio',
    youtubeId: '0DxKZl9AEio',
    videoTitle: 'شرح قانون أوم والعلاقة بين الجهد والتيار والمقاومة (The Engineering Mindset)',
    videoTitleEn: "Ohm's Law: Voltage, Current, and Resistance Explained (The Engineering Mindset)",
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/0DxKZl9AEio" title="Ohms Law Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
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
    paragraphsEn: [
      'What happens inside an electrical conductor when a wall switch is turned on? Electricity is an organized flow of free negatively charged electrons drifting along the copper wire under an applied electric field.',
      'Voltage (V), measured in volts, represents the electrical driving pressure pushing charges to move. Current (I), measured in amperes, is the quantity of electric charge passing through a wire cross-section in one second (1 A = 1 Coulomb/s).',
      'Resistance (R), measured in ohms, represents the atomic friction and collisions electrons encounter against metal atoms. Ohm’s fundamental formula connects the trio through V = I·R: higher voltage increases current, while higher resistance restricts current.',
      'Practical calculation: To power a 2V, 20mA (0.02A) LED from a 9V DC battery, the resistor must drop the excess 7V. The required resistance is: R = 7V / 0.02A = 350 Ohms!'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: ركب دائرة بمقاومة ومقياس أميتر وفولتميتر، وغير قيمة المقاومة من 10 إلى 100 أوم وشاهد كيف ينخفض التيار استجابة لقانون أوم.',
    tryItYourselfPromptEn: 'Try it yourself: Assemble a circuit with a resistor, ammeter, and voltmeter. Adjust resistance from 10Ω to 100Ω and observe how current decreases according to Ohm’s Law.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-3',
    articleNumber: 3,
    title: 'كيف نقرأ الموجة الكهربائية؟ مقدمة في تحليل الإشارات',
    titleEn: 'Reading Electrical Waveforms: An Introduction to Signal Analysis',
    phetSimulationName: 'Fourier: Making Waves (محاكي فورييه: تركيب الموجات)',
    phetSimulationNameEn: 'Fourier: Making Waves',
    phetUrl: 'https://phet.colorado.edu/en/simulations/fourier-making-waves',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    attributionEn: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 5,
    keyConcepts: ['تحليل الإشارات', 'الموجة الجيبية (Sine Wave)', 'التردد 50Hz', 'الزمن الدوري T', 'السعة العظمى Vmax', 'التشوه والتوافقيات'],
    keyConceptsEn: [
      'Signal Analysis',
      'Sinusoidal Waveforms',
      '50 Hz Power Frequency',
      'Time Period T',
      'Peak Amplitude Vmax',
      'Wave Distortion & Harmonics'
    ],
    videoUrl: 'https://www.youtube.com/embed/spUNpyF58BY',
    youtubeId: 'spUNpyF58BY',
    videoTitle: 'تحليل الإشارات والموجات الكهربائية بصرياً (3Blue1Brown)',
    videoTitleEn: 'Visual Introduction to Waveforms & Fourier Analysis (3Blue1Brown)',
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
    paragraphsEn: [
      'When viewing an oscilloscope screen, we observe how electric voltage evolves over time v(t). The horizontal axis tracks elapsed time, while the vertical axis tracks instantaneous voltage amplitude.',
      'Every periodic electrical wave carries key physical parameters: peak amplitude (V_max) as the maximum instantaneous voltage, time period (T) as the time required to complete one cycle, and frequency (f = 1/T) as the number of cycles per second measured in Hertz (Hz).',
      'In standard 50 Hz power grids, each cycle completes in exactly 20 milliseconds (0.02s). The AC voltage delivered to residential homes (220V RMS) oscillates between a positive peak of +311V and a negative peak of -311V fifty times per second!',
      'When non-linear equipment like phone chargers or power converters connect, high-frequency distortion alters the sinusoidal shape into harmonics, making Fourier decomposition essential for wave filtering and power quality restoration.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: استخدم المحاكي أدناه لجمع موجات بسيطة مختلفة ومراقبة كيف تندمج لتشكل موجات جديدة، وتفحص شكل الموجة المربعة المتكونة.',
    tryItYourselfPromptEn: 'Try it yourself: Use the simulator below to superimpose multiple harmonic frequencies and observe how pure sinusoids synthesize complex square and triangular waveforms.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-rlc',
    articleNumber: 4,
    title: 'الرنين الكهربائي في دوائر RLC المتوالية: النظرية، الحسابات، والمرشحات',
    titleEn: 'Series RLC Resonance: Theory, Calculations and Filters',
    phetSimulationName: 'Circuit Construction Kit: AC (مختبر إنشاء الدوائر: التيار المتناوب)',
    phetSimulationNameEn: 'Circuit Construction Kit: AC',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    attributionEn: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 6,
    keyConcepts: ['دوائر RLC', 'المعاوقة الكلية Z', 'تردد الرنين f₀', 'عامل الجودة Q', 'عرض النطاق BW', 'مرشحات الراديو'],
    keyConceptsEn: [
      'RLC Circuits',
      'Total Impedance Z',
      'Resonant Frequency f₀',
      'Quality Factor Q',
      'Bandwidth BW',
      'Radio Frequency Filters'
    ],
    videoUrl: 'https://www.youtube.com/embed/2GvqQvohP2k',
    youtubeId: '2GvqQvohP2k',
    videoTitle: 'التجربة المعملية لظاهرة الرنين في دوائر RLC (The Organic Chemistry Tutor)',
    videoTitleEn: 'Laboratory Demonstration of Series RLC Resonance (The Organic Chemistry Tutor)',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/2GvqQvohP2k" title="RLC Resonance Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
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
    paragraphsEn: [
      'When an electric circuit incorporates a resistor (R), inductor (L), and capacitor (C), its dynamic response shifts dramatically as AC excitation frequency varies.',
      'The inductor opposes higher frequencies through inductive reactance (X_L = 2πfL), while the capacitor opposes lower frequencies through capacitive reactance (X_C = 1/2πfC). At one precise frequency, both reactances become identical and cancel out completely!',
      'This state is termed Electrical Resonance (f₀ = 1 / 2π√LC). At resonance, total circuit impedance reaches its absolute minimum (Z = R), allowing peak current throughput restricted solely by ordinary ohmic resistance.',
      'This principle is the cornerstone of every wireless radio receiver: adjusting the variable capacitor aligns circuit resonance with the desired station frequency, capturing the signal with maximum clarity while attenuating all other frequencies.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: ركب دائرة AC متوالية بها مقاومة وملف ومكثف، وغير تردد المصدر تدريجياً حتى تلاحظ قفزة التيار إلى أقصى قيمة عند نقطة الرنين.',
    tryItYourselfPromptEn: 'Try it yourself: Assemble a series AC RLC circuit with resistor, inductor, and capacitor. Sweep the source frequency and observe the sharp current peak at resonant alignment.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-transmission',
    articleNumber: 5,
    title: 'كيف تنتقل الطاقة الكهربائية بكفاءة؟',
    titleEn: 'How Electrical Power Is Transmitted Efficiently',
    phetSimulationName: 'Circuit Construction Kit: DC (مختبر إنشاء الدوائر: التيار المستمر)',
    phetSimulationNameEn: 'Circuit Construction Kit: DC',
    phetUrl: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    attributionEn: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 5,
    keyConcepts: ['محطات التوليد', 'محولات الرفع Step-Up', 'فواقد النقل I²·R', 'خطوط الجهد الفائق 400kV', 'محطات التوزيع 220V', 'الشبكة الكهربائية'],
    keyConceptsEn: [
      'Power Plants',
      'Step-Up Transformers',
      'Transmission Losses I²·R',
      'High-Voltage 400kV Lines',
      '220V Substations',
      'Electrical Grid'
    ],
    videoUrl: 'https://www.youtube.com/embed/v1BMWczn7JM',
    youtubeId: 'v1BMWczn7JM',
    videoTitle: 'كيف تعمل شبكة الكهرباء ومحولات الجهد الفائق؟ (Practical Engineering)',
    videoTitleEn: 'How Does the Power Grid Work? (Practical Engineering)',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/v1BMWczn7JM" title="How Does the Power Grid Work?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
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
    paragraphsEn: [
      'The journey of electricity begins at power plants, where steam, gas, or hydro turbines generate power at medium voltage (around 11,000V). Transporting this raw output across hundreds of kilometers at low voltage would dissipate most energy into wire heating (P_loss = I²·R).',
      'The engineering key is step-up transformers: because transmitted power is P = V·I, stepping up voltage to 400,000V reduces current flow dramatically. And because resistive dissipation scales with the square of current (I²), a 10-fold voltage boost cuts resistive losses by a factor of 100!',
      'As high-voltage transmission lines reach cities and neighborhoods, substations step voltage down gradually: from 400kV to 33kV, then 11kV, and finally street transformers provide a safe 220V for household sockets.',
      'The interconnected grid operates in continuous instantaneous equilibrium: every generated watt must match load demand in real-time, making transmission line and transformer management the backbone of grid stability.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: ركب دائرة تمثل خط نقل طويل بمقاومة عالية، ولاحظ كيف ينخفض توهج المصباح بسبب هبوط الجهد والفقد الحراري.',
    tryItYourselfPromptEn: 'Try it yourself: Build a circuit representing a long resistive line. Observe the bulb dimming under low transmission voltage caused by resistive line drop.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  },
  {
    id: 'edu-article-4',
    articleNumber: 6,
    title: 'الطاقة الشمسية والشبكة الكهربائية',
    titleEn: 'Solar Energy and the Electrical Grid',
    phetSimulationName: 'Energy Forms and Changes (محاكي أشكال وتحولات الطاقة)',
    phetSimulationNameEn: 'Energy Forms and Changes',
    phetUrl: 'https://phet.colorado.edu/en/simulations/energy-forms-and-changes',
    phetEmbedUrl: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html',
    attribution: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    attributionEn: 'Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC-BY-4.0 (https://phet.colorado.edu).',
    readingTimeMinutes: 5,
    keyConcepts: ['الخلايا الكهروضوئية', 'تقطع الطاقة الشمسية', 'منحنى البطة (Duck Curve)', 'القصور الذاتي للشبكة', 'بطاريات BESS', 'استقرار 50Hz'],
    keyConceptsEn: [
      'Photovoltaic Solar Cells',
      'Solar Intermittency',
      'The Duck Curve',
      'Grid Mechanical Inertia',
      'BESS Battery Storage',
      '50 Hz Frequency Stability'
    ],
    videoUrl: 'https://www.youtube.com/embed/h5cm7HOAqZY',
    youtubeId: 'h5cm7HOAqZY',
    videoTitle: 'منحنى البطة وتحدي بطاريات الشبكة مع الطاقة الشمسية (Real Engineering)',
    videoTitleEn: 'The Duck Curve and Grid Batteries (Real Engineering)',
    videoEmbedHtml: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/h5cm7HOAqZY" title="The Duck Curve and Grid Batteries" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>',
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
    paragraphsEn: [
      'Solar energy represents a clean and abundant power resource, particularly in sun-rich areas like Chad which receive over 300 sunny days per year. However, integrating solar PV into the grid presents challenges of timing mismatch and intermittency.',
      'Photovoltaic cells deliver peak generation at midday (around 12:00 PM) and vanish completely after sunset. In contrast, residential electricity demand peaks in the evening (between 6:00 PM and 9:00 PM) when households run cooling, lighting, and appliances.',
      'This discrepancy creates the engineering phenomenon known as the "Duck Curve": net load plummets at noon (the duck’s belly) and surges abruptly at dusk (the duck’s neck), forcing conventional generators to ramp rapidly.',
      'The modern engineering response pairs utility-scale Battery Energy Storage Systems (BESS) with smart inverters to absorb surplus midday generation and inject it into the grid during evening peak hours, securing 50 Hz frequency stability.'
    ],
    tryItYourselfPrompt: 'جرب بنفسك: استخدم المحاكي لتحويل الطاقة الشمسية وتخزينها، وشاهد كيف تنتقل الطاقة من الضوء إلى الألواح وتغذي الأحمال المختلفة.',
    tryItYourselfPromptEn: 'Try it yourself: Use the simulator below to explore solar energy transformation and battery storage, watching photons turn into electric power feeding consumer loads.',
    embedCodeHtml: '<iframe src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html" width="100%" height="550" scrolling="no" allowfullscreen style="border: none; border-radius: 12px; width: 100%; min-height: 500px;"></iframe>'
  }
];

export const GOOGLE_SITES_GUIDE_STEPS = [
  {
    stepNumber: 1,
    title: 'افتح موقعك على Google Sites',
    titleEn: 'Open your site on Google Sites',
    instruction: 'انتقل إلى المتصفح وافتح sites.google.com ثم افتح الموقع الذي ترغب في نشر المقالات فيه.',
    instructionEn: 'Navigate to sites.google.com in your browser and open the destination website where you want to publish the articles.'
  },
  {
    stepNumber: 2,
    title: 'إضافة العنوان ونص المقالة',
    titleEn: 'Add title and article body',
    instruction: 'من اللوحة الجانبية اليمنى، اسحب صندوق "Text box" (مربع نص) إلى الصفحة، ثم انسخ العنوان ونص المقالة من الزر المخصص بالأسفل وألصقه فيه.',
    instructionEn: 'From the right-hand panel, drag a "Text box" onto your page. Copy the article title and paragraphs using the button below and paste them into the box.'
  },
  {
    stepNumber: 3,
    title: 'إدراج محاكي PhET التفاعلي',
    titleEn: 'Embed PhET Interactive Simulation',
    instruction: 'تحت النص مباشرة، اسحب عنصر "Embed" (تضمين) من نفس اللوحة الجانبية، ثم اختر تبويب "Embed code" (كود التضمين) والصق كود HTML الجاهز.',
    instructionEn: 'Directly beneath the text, select the "Embed" element from the panel, switch to the "Embed code" tab, and paste the ready HTML snippet.'
  },
  {
    stepNumber: 4,
    title: 'إدراج الفيديو المرئي والشرح',
    titleEn: 'Embed Video Lecture Template',
    instruction: 'اسحب عنصر "Embed" إضافي تحته أو استخدم عنصر "YouTube" من الشريط الجانبي والصق كود التضمين الجاهز أو رابط الفيديو للمقالة.',
    instructionEn: 'Insert an additional "Embed" element or use the built-in "YouTube" widget from the sidebar to paste the verified video embed code or URL.'
  },
  {
    stepNumber: 5,
    title: 'إضافة سطر النسبة القانوني (Attribution)',
    titleEn: 'Add legal attribution line',
    instruction: 'تحت المحاكي مباشرة، أضف مربع نص صغير وألصق فيه سطر النسبة المعتمد (هو الشرط الوحيد المجاني وفق رخصة CC-BY-4.0).',
    instructionEn: 'Below the embedded simulation, add a small text box and paste the official CC-BY-4.0 attribution credit line.'
  },
  {
    stepNumber: 6,
    title: 'نشر الصفحة (Publish)',
    titleEn: 'Publish your page',
    instruction: 'اضغط على زر Publish الأزرق أعلى يمين الصفحة لنشر المقالة للجمهور. كرر الخطوات للمقالات إما في صفحات فرعية منفصلة (New Page) أو عموديًا.',
    instructionEn: 'Click the blue "Publish" button at the top-right to deploy your page. Repeat for subsequent articles on dedicated subpages or vertically.'
  }
];
