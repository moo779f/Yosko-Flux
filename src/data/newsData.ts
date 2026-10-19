import { NewsItem } from '../types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'تطوير محاكي المخططات الطورية (Phasors) وتحليل زوايا الطور في الدوائر',
    titleEn: 'Developing the Phasor Diagram Simulator & AC Circuit Phase Angle Analyzer',
    date: '2026-09-18',
    category: 'electricity',
    summary: 'برمجة وإطلاق محاكي تفاعلي حي يوضح زاوية الطور بين الجهد والتيار عند تردد 50/60 هرتز، مع استعراض تأثير الأحمال الحثية والسعوية على معامل القدرة.',
    summaryEn: 'Programmed and deployed a live interactive simulation analyzing voltage-current phase shifts at 50/60 Hz, demonstrating how reactive inductive and capacitive loads alter power factor.',
    content: [
      'ضمن الأبحاث والمشاريع الهندسية المستقلة، أعمل باستمرار على تحويل المفاهيم التحليلية المعقدة إلى نماذج تفاعلية حية.',
      'هذا المحاكي تم بناؤه لربط الدوال الجيبية الزمنية بالمتجهات الطورية الدوارة، وتوضيح كيف يتأخر التيار خلف الجهد في الأحمال الحثية (كالمحركات والمحولات) وتأثير ذلك على استقرار شبكة القوى الكهربائية.',
      'يعد هذا المشروع ركيزة أساسية في ملف أبحاثي الهندسية لإثبات الفهم العميق لنظرية الدوائر الكهربائية والقدرة على نمذجتها رياضياً وبرمجياً.'
    ],
    contentEn: [
      'As part of my independent engineering research and technical projects, I focus on translating complex analytical principles into interactive, real-time visual models.',
      'This simulator bridges time-domain sinusoidal waveforms with rotating phasor vectors, clearly demonstrating how current lags voltage in inductive loads (such as motors and transformers) and its direct impact on power system stability.',
      'This project serves as a cornerstone of my engineering portfolio, demonstrating both mathematical rigor in circuit theory and practical software modeling skills.'
    ],
    tags: ['أبحاث_هندسية', 'دوائر_كهربائية', 'محاكاة_تفاعلية', 'Phasors'],
    tagsEn: ['Engineering_Research', 'Electrical_Circuits', 'Interactive_Simulation', 'Phasors'],
    readTime: '3 دقائق',
    readTimeEn: '3 min read'
  },
  {
    id: 'news-2',
    title: 'توثيق ورقة الرنين الكهربائي في دوائر RLC واستجابة التردد',
    titleEn: 'Documenting the Paper on Electrical Resonance in RLC Circuits & Frequency Response',
    date: '2026-09-10',
    category: 'electricity',
    summary: 'نشر دراسة تحليلية مدعومة بالمعادلات التفاضلية حول تردد الرنين ومعامل الجودة Q-Factor، وتطبيقاته العملية في مرشحات التردد وضبط الإشارات.',
    summaryEn: 'Published an analytical study supported by differential equations on resonant frequency, Q-factor, and practical filter selectivity for signal tuning.',
    content: [
      'خلال دراستي وبحثي في مجال الكهرومغناطيسية والدوائر، أعددت ورقة بحثية موسعة تشرح سلوك الممانعة الكلية (Impedance) عند التردد الحرج الرنيني.',
      'تتضمن الورقة معادلات تذبذب الطاقة بين المجال المغناطيسي للمحث والمجال الكهربائي للمكثف، مع براهين رياضية دقيقة ورسوم بيانية توضيحية.',
      'الهدف من هذا التوثيق هو ترسيخ الأسس الهندسية المتينة ومشاركة دراسات معمقة ومفتوحة للباحثين والمهندسين المهتمين بنظم الدوائر.'
    ],
    contentEn: [
      'During my dedicated research in electromagnetism and circuit theory, I published an extended study analyzing total impedance behavior at critical resonant frequencies.',
      'The paper details continuous energy exchange between the magnetic field of the inductor and electrostatic field of the capacitor, backed by formal mathematical derivations and frequency response curves.',
      'The objective of this documentation is to build rock-solid engineering foundations and contribute open, rigorous technical insights for fellow researchers and engineers.'
    ],
    tags: ['دوائر_RLC', 'رنين_كهربائي', 'استجابة_ترددية', 'Resonance'],
    tagsEn: ['RLC_Circuits', 'Electrical_Resonance', 'Frequency_Response', 'Selectivity'],
    readTime: '4 دقائق',
    readTimeEn: '4 min read'
  },
  {
    id: 'news-3',
    title: 'تطبيقات متسلسلات فورييه في تحليل التوافقيات الكهربائية وجودة القدرة',
    titleEn: 'Applications of Fourier Series in Electrical Harmonics Analysis & Power Quality',
    date: '2026-08-28',
    category: 'mathematics',
    summary: 'بحث استكشافي يربط بين الرياضيات التطبيقية وهندسة القوى من خلال تحليل التوافقيات العليا وتشوهات الموجات وظاهرة غيبس.',
    summaryEn: 'An applied study connecting pure mathematics with power systems engineering through higher harmonic decomposition, wave distortion analysis, and the Gibbs phenomenon.',
    content: [
      'الرياضيات هي اللغة الأساسية للهندسة، ومتسلسلات فورييه تمثل الجسر الذهبي لتحليل أي إشارة دورية غير جيبية إلى مركباتها النقية.',
      'قمت بدراسة أثر التوافقيات العليا الناتجة عن إلكترونيات القوى على محولات القدرة وتوليد الحرارة الإضافية، وبرمجت رسماً بيانياً يوضح اقتراب مجموع التوافقيات من الموجة الأصلية.',
      'أؤمن أن المهندس المتميز يبدأ من فهم البنية الرياضية العميقة للظواهر قبل استخدام الحلول البرمجية الجاهزة.'
    ],
    contentEn: [
      'Mathematics is the foundational language of engineering, and Fourier series serve as the primary bridge to decompose arbitrary non-sinusoidal periodic waveforms into pure harmonics.',
      'I studied how higher-order harmonics generated by non-linear power electronic switches produce core overheating in distribution transformers, accompanied by visual synthesis models.',
      'I believe that true engineering excellence starts from understanding deep mathematical mechanics before relying solely on black-box commercial tools.'
    ],
    tags: ['رياضيات_تطبيقية', 'فورييه', 'جودة_القدرة', 'Power_Quality'],
    tagsEn: ['Applied_Math', 'Fourier_Series', 'Harmonics', 'Power_Quality'],
    readTime: '5 دقائق',
    readTimeEn: '5 min read'
  },
  {
    id: 'news-4',
    title: 'إطلاق النسخة المحدثة لمنصة يوسكو فلوكس والمختبرات التفاعلية',
    titleEn: 'Official Update: Yosko Flux Engineering Research Repository & Interactive Labs',
    date: '2026-08-15',
    category: 'general',
    summary: 'تحديث منصة الأبحاث الهندسية وإضافة مقالات علمية ومختبرات تفاعلية لمحاكاة خطوط النقل، واستقرار تردد الشبكات، وتخزين الطاقة بالبطاريات.',
    summaryEn: 'Updated the engineering research platform with new interactive laboratories covering power transmission, grid frequency dynamics, and battery energy storage systems.',
    content: [
      'تحديث شامل لمنصة يوسكو فلوكس الهندسية لتشمل 13 بحثاً ودراسة تقنية متكاملة تغطي رحلة الكهرباء من المستوى المجهري إلى الشبكات الإقليمية.',
      'تم دعم المنصة بمختبرات PhET التفاعلية وأدلة تجارب خطوة بخطوة مع أسئلة تقييمية لقياس الاستيعاب، فضلاً عن دعم كامل للغتين العربية والإنجليزية.',
      'المنصة مصممة لتكون ملف أعمال هندسي وبحثي مفتوح يجمع بين الدقة الرياضية، والتطبيقات الواقعية، والرسوم البصرية التفاعلية.'
    ],
    contentEn: [
      'A comprehensive upgrade of the Yosko Flux engineering platform featuring 13 research papers and applied technical studies spanning from microscopic electron physics to regional grid systems.',
      'The repository is augmented with licensed interactive PhET laboratories, step-by-step practical experiment workflows, comprehension assessment quizzes, and complete bilingual support (English & Arabic).',
      'The platform is engineered as an open technical portfolio merging mathematical rigor, real-world utility considerations, and responsive interactive simulations.'
    ],
    tags: ['أبحاث_هندسية', 'مختبرات_تفاعلية', 'نظم_الطاقة', 'Innovation'],
    tagsEn: ['Engineering_Research', 'Interactive_Labs', 'Power_Systems', 'Innovation'],
    readTime: '3 دقائق',
    readTimeEn: '3 min read'
  }
];
