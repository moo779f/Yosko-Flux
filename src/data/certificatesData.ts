export interface EngineeringCertificate {
  id: string;
  title: string;
  titleEn: string;
  provider: string;
  providerEn: string;
  institutionLogo?: string;
  category: 'Electronics' | 'Cybersecurity' | 'Engineering Foundations';
  categoryEn: string;
  completionDate?: string;
  completionDateEn?: string;
  status: 'Completed' | 'Verified Coursework';
  statusEn: string;
  description: string;
  descriptionEn: string;
  keyTopicsLearned: string[];
  keyTopicsLearnedEn: string[];
  officialCourseUrl: string;
  verificationNote: string;
  verificationNoteEn: string;
  level: string;
  levelEn: string;
}

export const ENGINEERING_CERTIFICATES: EngineeringCertificate[] = [
  {
    id: 'openlearn-electronics',
    title: 'مقدمة في الإلكترونيات (An Introduction to Electronics)',
    titleEn: 'An Introduction to Electronics',
    provider: 'OpenLearn • The Open University (المملكة المتحدة)',
    providerEn: 'OpenLearn • The Open University (UK)',
    category: 'Electronics',
    categoryEn: 'Electronics & Circuits',
    completionDate: 'مكتمل ضمن مسار التعلم الذاتي',
    completionDateEn: 'Completed as part of self-directed study',
    status: 'Completed',
    statusEn: 'Course Completed',
    level: 'دورة تمهيدية جامعية معتمدة (Introductory University Level)',
    levelEn: 'Introductory University Level',
    description: 'دورة تمهيدية تخصصية تقدمها الجامعة المفتوحة ببريطانيا تغطي المفاهيم الأساسية للمكونات الإلكترونية النشطة وغير النشطة، وسلوك الجهد والتيار، وطريقة عمل أشباه الموصلات، والمجسات التناظرية، وقراءة وتحليل المخططات التخطيطية للدوائر.',
    descriptionEn: 'A foundational university-level course offered by The Open University (OpenLearn) covering elementary passive and active components, current and voltage relationships, semiconductor behavior, analogue sensing, and circuit schematic analysis.',
    keyTopicsLearned: [
      'مبادئ الجهد والتيار والمقاومة وقانون أوم في الدوائر العملية',
      'فهم سلوك المكونات الأساسية: المقاومات، المكثفات، المحثات، والدايودات',
      'تجزئة الجهد وتحويل إشارات المجسات التناظرية إلى قيم قابلة للقراءة',
      'مبادئ الترانزستورات كمفاتيح ومكبرات إشارة أولية',
      'قراءة المخططات الإلكترونية القياسية وتحليل وظائف الكتل الوظيفية'
    ],
    keyTopicsLearnedEn: [
      'Voltage, current, resistance principles, and Ohm\'s Law in practical circuits',
      'Elementary passive and active components: resistors, capacitors, inductors, and diodes',
      'Voltage division and analogue sensor signal conditioning',
      'Basic transistor operation as digital switches and analogue amplifiers',
      'Reading and interpreting standard schematic circuit diagrams'
    ],
    officialCourseUrl: 'https://www.open.edu/openlearn/science-maths-technology/an-introduction-electronics/content-section-0',
    verificationNote: 'دورة دراسية مفتوحة وموثقة من الجامعة المفتوحة البريطانية OpenLearn، تم إكمالها في إطار التحضير الذاتي لدراسة الهندسة الكهربائية.',
    verificationNoteEn: 'Verified educational coursework completed via The Open University (OpenLearn) as structured preparation for university Electrical Engineering studies.'
  },
  {
    id: 'cisco-cybersecurity',
    title: 'مقدمة في الأمن السيبراني (Introduction to Cybersecurity)',
    titleEn: 'Introduction to Cybersecurity',
    provider: 'Cisco Networking Academy (أكاديمية سيسكو للشبكات)',
    providerEn: 'Cisco Networking Academy',
    category: 'Cybersecurity',
    categoryEn: 'Network & System Security',
    completionDate: 'مكتمل وموثق',
    completionDateEn: 'Completed and verified',
    status: 'Completed',
    statusEn: 'Course Completed',
    level: 'دورة تأسيسية مهنية (Foundational Professional Course)',
    levelEn: 'Foundational Professional Course',
    description: 'دورة معتمدة من أكاديمية سيسكو تركز على مبادئ حماية البنية التحتية الرقمية، ونظم التحكم الصناعية، وأساسيات سرية وسلامة البيانات (CIA Triad)، والتعرف على التهديدات السيبرانية التي تواجه الشبكات الذكية الحديثة.',
    descriptionEn: 'An industry-standard foundational course from Cisco Networking Academy covering the defense of digital infrastructure, the CIA Triad (Confidentiality, Integrity, Availability), network vulnerability vectors, and cybersecurity fundamentals for modern interconnected grids and embedded systems.',
    keyTopicsLearned: [
      'ثالوث أمن المعلومات: السرية، السلامة، والتوافر (Confidentiality, Integrity, Availability)',
      'فهم بنية شبكات البيانات وبروتوكولات الاتصال ونقاط الضعف المحتملة',
      'حماية الأجهزة المتصلة ونظم التشغيل من البرمجيات الخبيثة وهجمات الحرمان من الخدمة (DoS)',
      'مفاهيم التشفير الأساسية والمفاتيح العامة والخاصة وتأمين قنوات الاتصال',
      'أهمية الأمن السيبراني في أنظمة التحكم الإشرافي وتحصيل البيانات (SCADA) والشبكات الكهربائية الذكية'
    ],
    keyTopicsLearnedEn: [
      'The CIA Security Triad: Confidentiality, Integrity, and Availability',
      'Data network architectures, transmission protocols, and attack surfaces',
      'Protecting networked endpoints and operating systems against malware and DoS attacks',
      'Symmetric and asymmetric cryptography fundamentals and secure communications',
      'The critical role of operational cybersecurity in smart grid systems and SCADA telemetry'
    ],
    officialCourseUrl: 'https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity',
    verificationNote: 'شهادة إتمام معتمدة من أكاديمية Cisco Networking Academy العالمية، تؤكد الإلمام بأساسيات أمن الشبكات والبيانات الرقمية.',
    verificationNoteEn: 'Verified completion course from Cisco Networking Academy validating core knowledge of digital networks and infrastructure defense.'
  }
];
