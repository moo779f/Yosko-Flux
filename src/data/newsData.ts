import { NewsItem } from '../types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'تطوير محاكي المخططات الطورية (Phasors) ضمن ملف التقديم الجامعي',
    titleEn: 'Developing the Phasor Diagram Simulator for University Admission Portfolio',
    date: '2026-09-18',
    category: 'electricity',
    summary: 'أكملت بنجاح برمجة نموذج تفاعلي حي يوضح زاوية الطور بين الجهد والتيار وتردد 50/60 هرتز، كجزء من أبحاثي الذاتية الداعمة للقبول الجامعي في تخصص الهندسة الكهربائية.',
    summaryEn: 'Successfully programmed a live interactive model demonstrating voltage-current phase shifts at 50/60 Hz as part of my self-directed research portfolio for university admissions.',
    content: [
      'كخريج حديث يسعى للالتحاق ببرنامج بكالوريوس الهندسة الكهربائية، أعمل باستمرار على تحويل المفاهيم النظرية إلى نماذج مرئية تفاعلية.',
      'هذا المحاكي بنيته لربط الدوال الجيبية بالمتجهات الدوارة، وتوضيح كيف يتأخر التيار خلف الجهد في الأحمال الحثية وتأثير ذلك على معامل القدرة (Power Factor).',
      'يعد هذا المشروع أحد المحاور الأساسية في ملف أعمالي الأكاديمي الذي سأقدمه إلى لجان القبول الجامعي لإبراز شغفي العميق بالتخصص واستيعابي المسبق لأساسيات الدوائر الكهربائية.'
    ],
    contentEn: [
      'As a recent graduate working towards university admission in Electrical Engineering, I continuously focus on translating theoretical concepts into interactive visual simulations.',
      'I built this simulator to connect sinusoidal waveforms with rotating vectors, clarifying how current lags voltage in inductive loads and its impact on power factor.',
      'This project forms a cornerstone in my academic portfolio for university admission committees, showcasing my deep passion and foundational grasp of electrical circuit theory.'
    ],
    tags: ['التقديم_الجامعي', 'هندسة_كهربائية', 'محاكاة_تفاعلية', 'Phasors'],
    readTime: '3 دقائق',
    readTimeEn: '3 min read'
  },
  {
    id: 'news-2',
    title: 'توثيق ورقة الرنين الكهربائي في دوائر RLC المتوالية والمتوازية',
    titleEn: 'Documenting the Paper on Electrical Resonance in Series and Parallel RLC Circuits',
    date: '2026-09-10',
    category: 'electricity',
    summary: 'نشرت دراسة تحليلية مدعومة بالمعادلات الرياضية حول تردد الرنين ومعامل الجودة Q-Factor، مع أسئلة تقييمية لاختبار الفهم الذاتي.',
    summaryEn: 'Published an analytical study backed by mathematical equations on resonant frequency and Q-factor, including self-assessment questions.',
    content: [
      'خلال فترة دراستي الذاتية لمقررات فيزياء الكهرومغناطيسية والدوائر، قمت بإعداد ورقة بحثية مصغرة تشرح سلوك الممانعة الكلية (Impedance) عند التردد الحرج.',
      'قمت بتضمين معادلات تذبذب الطاقة بين المجال المغناطيسي للمحث والمجال الكهربائي للمكثف، مع شرح مبسط للمفاهيم الرياضية.',
      'الهدف من هذا التوثيق هو نشر العلم وترسيخ المعلومات الشخصية قبل بدء المرحلة الجامعية.'
    ],
    contentEn: [
      'During my self-study of electromagnetism and circuit theory, I prepared a concise research paper detailing impedance behavior at the resonant frequency.',
      'I included energy oscillation equations between inductor magnetic fields and capacitor electric fields, with intuitive mathematical breakdowns.',
      'The goal of this repository is knowledge sharing and reinforcing personal mastery ahead of university coursework.'
    ],
    tags: ['دوائر_RLC', 'رنين_كهربائي', 'دراسة_ذاتية', 'Resonance'],
    readTime: '4 دقائق',
    readTimeEn: '4 min read'
  },
  {
    id: 'news-3',
    title: 'تطبيقات متسلسلات فورييه في تحليل التوافقيات الكهربائية',
    titleEn: 'Applications of Fourier Series in Electrical Harmonics Analysis',
    date: '2026-08-28',
    category: 'mathematics',
    summary: 'بحث شخصي استكشافي يربط بين الرياضيات البحتة وهندسة القوى من خلال تحليل الموجات المربعة والمثلثة وظاهرة غيبس.',
    summaryEn: 'An exploratory personal study bridging pure mathematics and power engineering through square/triangle wave decomposition and the Gibbs phenomenon.',
    content: [
      'الرياضيات هي لغة الهندسة، ومتسلسلات فورييه تمثل الجسر الذهبي لتحليل أي إشارة دورية غير جيبية.',
      'قمت بدراسة أثر التوافقيات العليا على محولات القدرة وتوليد الحرارة الإضافية، وبرمجت رسماً بيانياً يوضح اقتراب مجموع التوافقيات من الموجة الأصلية.',
      'أؤمن أن المهندس المتميز يبدأ من فهم البنية الرياضية العميقة قبل استخدام البرمجيات الجاهزة.'
    ],
    contentEn: [
      'Mathematics is the universal language of engineering, and Fourier series serve as the primary bridge for non-sinusoidal periodic signal analysis.',
      'I studied how higher-order harmonics affect power transformers and induce core heating, programming visual wave approximations.',
      'I believe an exceptional engineer grasps deep mathematical foundations before relying solely on black-box software.'
    ],
    tags: ['رياضيات_تطبيقية', 'فورييه', 'توافقيات', 'Fourier'],
    readTime: '5 دقائق',
    readTimeEn: '5 min read'
  },
  {
    id: 'news-4',
    title: 'تحديث خطة التحضير والتجهيز لاختبارات القبول الجامعي في الهندسة',
    titleEn: 'Update on Engineering University Entrance Exam Preparation Roadmap',
    date: '2026-08-15',
    category: 'general',
    summary: 'مشاركة ملخص جدول المذاكرة اليومي لمقررات التفاضل والتكامل، الفيزياء الكهربائية، والتحليل المنطقي استعداداً لمقابلات واختبارات القبول.',
    summaryEn: 'Sharing my daily study roadmap covering calculus, physics, and analytical aptitude in preparation for engineering entrance exams and interviews.',
    content: [
      'أخصص حالياً عدة ساعات يومياً لمراجعة حساب التفاضل والتكامل المتقدم (Calculus)، وحل مسائل قوانين كيرشوف وتفاضل دوائر التيار المتردد.',
      'بجانب المذاكرة النظرية، أقوم بتسجيل هذه الأبحاث والدروس لترسيخ الفهم ومساعدة الزملاء المهتمين بنفس المجال.',
      'الموقع بمثابة سجل حي ومفتوح لرحلتي من هاوٍ متطلع إلى مقاعد كلية الهندسة بإذن الله.'
    ],
    contentEn: [
      'I currently dedicate several hours daily to reviewing advanced calculus, solving Kirchhoff law problems, and differential equations in AC circuits.',
      'Alongside theoretical revision, I document these papers and tutorials to solidify understanding and assist fellow aspiring engineers.',
      'This website serves as a live, open log of my journey from an enthusiastic amateur to prospective engineering student.'
    ],
    tags: ['القبول_الجامعي', 'طموح_هندسي', 'مذكرات_طالب', 'StudyLog'],
    readTime: '2 دقيقة',
    readTimeEn: '2 min read'
  }
];
