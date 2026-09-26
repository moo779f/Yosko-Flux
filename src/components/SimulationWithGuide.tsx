import React, { useState } from 'react';
import {
  Layers,
  Video,
  ListOrdered,
  ExternalLink,
  CheckCircle2,
  Maximize2,
  Minimize2,
  Sparkles,
  Info,
  Play,
  Check,
  Zap,
  FlaskConical,
  HelpCircle
} from 'lucide-react';
import { Language } from '../types';

export interface GuideExperiment {
  id: string;
  title: string;
  titleEn: string;
  stepAction: string;
  stepActionEn: string;
  expectedObservation: string;
  expectedObservationEn: string;
  simpleExplanation: string;
  simpleExplanationEn: string;
}

export interface SimulationGuideData {
  simId: string;
  targetDiagramTitle: string;
  targetDiagramTitleEn: string;
  componentList: string[];
  componentListEn: string[];
  steps: string[];
  stepsEn: string[];
  experiments: GuideExperiment[];
  finalResultExplanation: string;
  finalResultExplanationEn: string;
  videoUrl: string;
  videoTitle: string;
  videoTitleEn: string;
  youtubeId: string;
  videoDescription?: string;
  videoDescriptionEn?: string;
  diagramType:
    | 'dc_circuit'
    | 'kirchhoff_circuit'
    | 'ac_rc_rl'
    | 'ac_phase'
    | 'ac_rlc'
    | 'fourier_waves'
    | 'power_factor'
    | 'transmission_grid'
    | 'grid_solar'
    | 'battery_storage'
    | 'grid_frequency'
    | 'radio_tuner';
}

export const GUIDES_DATABASE: Record<string, SimulationGuideData> = {
  // 1. DC Circuit: Understanding Electricity & Ohm's Law
  dc_circuit: {
    simId: 'dc_circuit',
    targetDiagramTitle: 'الشكل النهائي لدائرة التيار المستمر وقانون أوم (PhET DC Kit)',
    targetDiagramTitleEn: 'Final Target Schematic for DC Circuit & Ohm Law',
    diagramType: 'dc_circuit',
    componentList: ['بطارية 9V (Battery)', 'مصباح كهربائي 10Ω (Light bulb)', 'مفتاح تشغيل/إيقاف (SPST Switch)', 'جهاز أميتر (Ammeter)', 'أسلاك توصيل نحاسية'],
    componentListEn: ['9V Battery', 'Light bulb (10Ω)', 'SPST Switch', 'Ammeter inline', 'Copper wire segments'],
    steps: [
      'اسحب البطارية (Battery) من لوحة العناصر اليسرى وضعها على اللوحة، واضبط قيمتها على 9.0V.',
      'اسحب مصباحاً كهربائياً (Light bulb) أو مقاوماً وضع قيمته 10.0Ω.',
      'اسحب مفتاحاً كهربائياً (Switch) لتتمكن من فتح وإغلاق الدائرة يدوياً ومراقبة التوهج.',
      'صل أطراف العناصر بأسلاك التوصيل (Wires) حتى تكتمل الحلقة المغلقة تماماً.',
      'اسحب جهاز الأميتر (Ammeter) وضعه في مسار السلك، ثم أغلق المفتاح لمشاهدة إضاءة المصباح وتدفق الإلكترونات الزرقاء بسرعة محسوبة.',
    ],
    stepsEn: [
      'Drag a 9.0V battery from the left toolbox onto the canvas.',
      'Place a 10.0Ω light bulb or resistor opposite to the battery.',
      'Add a switch into the loop to control current flow.',
      'Connect components with copper wires to form a closed loop.',
      'Connect an ammeter inline to measure current I = 9V / 10Ω = 0.90A.',
    ],
    experiments: [
      {
        id: 'dc-exp-1',
        title: 'التفاعل 1: قياس التيار الأولي عند 9V ومقاومة 10Ω',
        titleEn: 'Experiment 1: Measure baseline current at 9V and 10Ω',
        stepAction: 'صل البطارية 9V مع مصباح 10Ω وأغلق المفتاح وراقب قراءة الأميتر.',
        stepActionEn: 'Connect 9V battery with 10Ω lamp, close the switch and read the ammeter.',
        expectedObservation: 'يضيء المصباح ويشير الأميتر إلى 0.90 A بدقة، وتتحرك الإلكترونات الزرقاء بانتظام من القطب السالب إلى الموجب.',
        expectedObservationEn: 'Lamp illuminates, ammeter reads exactly 0.90 A, blue electrons drift steadily.',
        simpleExplanation: 'قانون أوم (I = V / R = 9 / 10 = 0.9 A): كل فولت ضغط من البطارية يدفع كمية محددة من الإلكترونات في الثانية عبر مقاومة السلك.',
        simpleExplanationEn: 'Ohm Law (I = V/R = 9/10 = 0.9A): Each volt pushes a proportional amount of electron charges per second.'
      },
      {
        id: 'dc-exp-2',
        title: 'التفاعل 2: مضاعفة المقاومة إلى 20Ω وملاحظة التيار',
        titleEn: 'Experiment 2: Double resistance to 20Ω and observe current',
        stepAction: 'انقر على المصباح أو المقاوم في المحاكي وقم بزيادة قيمته إلى 20.0Ω.',
        stepActionEn: 'Click the lamp/resistor in the simulation and increase resistance to 20.0Ω.',
        expectedObservation: 'ينخفض توهج المصباح إلى النصف ويهبط مؤشر الأميتر فورياً من 0.90 A إلى 0.45 A.',
        expectedObservationEn: 'Lamp brightness drops by half, and current drops immediately from 0.90 A to 0.45 A.',
        simpleExplanation: 'المقاومة تعيق تدفق الشحنات؛ مضاعفة المقاومة مع بقاء الجهد ثابتاً تخفض شدة التيار إلى النصف تماماً.',
        simpleExplanationEn: 'Resistance impedes electron drift; doubling resistance at fixed voltage cuts current in half.'
      },
      {
        id: 'dc-exp-3',
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
    finalResultExplanation: 'النتيجة المتوقعة: يتدفق تيار مقداره 0.90 أمبير بالضبط وفق قانون أوم (I = V/R = 9/10). وتتحرك الإلكترونات من القطب السالب إلى الموجب مسببة توهج المصباح.',
    finalResultExplanationEn: 'Expected outcome: A steady current of exactly 0.90 A flows according to Ohm law (I = V/R = 9/10). Electrons drift continuously illuminating the bulb.',
    videoUrl: 'https://www.youtube.com/embed/0DxKZl9AEio',
    videoTitle: 'شرح قانون أوم والعلاقة بين الجهد والتيار والمقاومة (The Engineering Mindset)',
    videoTitleEn: "Ohm's Law Explained - Circuit Theory Basics (The Engineering Mindset)",
    youtubeId: '0DxKZl9AEio',
    videoDescription: 'شرح مرئي رائع ومبسط يوضح فيزيائياً كيف تتحرك الإلكترونات في السلك وكيف يربط قانون أوم بين فرق الجهد والتيار والمقاومة بالأمثلة المحسوبة.',
    videoDescriptionEn: 'Visual explanation of electron movement and the relationship between voltage, current, and resistance with calculated examples.'
  },

  // 2. Kirchhoff's Laws Circuit
  kirchhoff_circuit: {
    simId: 'kirchhoff_circuit',
    targetDiagramTitle: 'الشكل النهائي لدائرة كيرشوف ذات الحلقتين والعقدة (KCL & KVL)',
    targetDiagramTitleEn: 'Final Target Schematic for Dual-Loop Kirchhoff Circuit',
    diagramType: 'kirchhoff_circuit',
    componentList: ['بطارية رئيسية 12V', 'مقاوم فرع أول R1 = 10Ω', 'مقاوم فرع ثانٍ R2 = 20Ω', '3 أجهزة أميتر للقياس', 'فولتميتر رقمي'],
    componentListEn: ['12V Main Battery', 'Branch 1 Resistor R1 = 10Ω', 'Branch 2 Resistor R2 = 20Ω', '3 In-line Ammeters', 'Digital Voltmeter'],
    steps: [
      'ضع البطارية 12V على يسار اللوحة.',
      'قم بمد سلك نحو عقدة تفرع رئيسية (Node A).',
      'فرّع المسار إلى فرعين متوازيين: الفرع الأول بمقاوم 10Ω، والفرع الثاني بمقاوم 20Ω.',
      'اجمع الفرعين عند عقدة التجميع السفلية (Node B) وأعد السلك للقطب السالب.',
      'ضع أميتر في كل فرع بالإضافة إلى أميتر الخط الرئيسي وتحقق من قانون كيرشوف للتيارات.',
    ],
    stepsEn: [
      'Place 12V battery on left canvas.',
      'Extend wire to main junction Node A.',
      'Split into two parallel branches: branch 1 with 10Ω and branch 2 with 20Ω.',
      'Recombine branches at bottom Node B returning to negative terminal.',
      'Insert inline ammeters in each branch and test KCL.'
    ],
    experiments: [
      {
        id: 'kcl-exp-1',
        title: 'التفاعل 1: إثبات قانون كيرشوف للتيار (KCL) عند نقطة التفرع',
        titleEn: 'Experiment 1: Verify Kirchhoff Current Law (KCL) at junction',
        stepAction: 'راقب قراءة الأميتر الرئيسي وقارنها بمجموع قراءتي أميتر الفرع الأول والفرع الثاني.',
        stepActionEn: 'Compare total main ammeter reading against sum of branch 1 and branch 2 currents.',
        expectedObservation: 'الأميتر الرئيسي يقرأ 1.80 A، والفرع الأول يقرأ 1.20 A، والفرع الثاني يقرأ 0.60 A (1.20 + 0.60 = 1.80 A بالضبط!).',
        expectedObservationEn: 'Main ammeter reads 1.80 A, branch 1 reads 1.20 A, branch 2 reads 0.60 A (1.20 + 0.60 = 1.80 A exact).',
        simpleExplanation: 'الشحنات الكهربائية لا تفنى ولا تستحدث عند العقد؛ مجموع التيارات الداخلة إلى العقدة يساوي دائماً مجموع التيارات الخارجة منها (ΣI_in = ΣI_out).',
        simpleExplanationEn: 'Charge is strictly conserved; current entering a node exactly equals current exiting.'
      },
      {
        id: 'kcl-exp-2',
        title: 'التفاعل 2: إثبات قانون كيرشوف للجهد (KVL) في الحلقة المغلقة',
        titleEn: 'Experiment 2: Verify Kirchhoff Voltage Law (KVL) in closed loop',
        stepAction: 'اسحب مجسات الفولتميتر وقس فرق الجهد عبر البطارية ثم عبر المقاومات في كل مسار مغلق.',
        stepActionEn: 'Measure voltage drop across battery and each component around closed loops.',
        expectedObservation: 'جهد البطارية (+12V) ناقص هبوط الجهد عبر المقاومة (-12V) يساوي صفراً تماماً في كل حلقة.',
        expectedObservationEn: 'Battery voltage (+12V) minus resistor drop (-12V) yields exactly zero around each loop.',
        simpleExplanation: 'مبدأ حفظ الطاقة: الطاقة التي تكتسبها الشحنة من مصدر الجهد تُستهلك بالكامل أثناء دورانها في الحلقة لتعود إلى جهد البداية (ΣV = 0).',
        simpleExplanationEn: 'Conservation of energy dictates that the algebraic sum of voltages around any closed loop must equal zero.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: تماثل دقيق بين الحسابات النظرية والقياس التجريبي، مما يثبت حفظ الشحنة الكهربائية وحفظ الطاقة في الشبكات متعددة المسارات.',
    finalResultExplanationEn: 'Expected outcome: Measured values align precisely with KCL and KVL, proving charge and energy conservation.',
    videoUrl: 'https://www.youtube.com/embed/mc979OhitAg',
    videoTitle: 'كيف تعمل الدوائر وسريان الشحنات وقوانين كيرشوف (The Engineering Mindset)',
    videoTitleEn: 'How Electricity Works & Circuit Principles (The Engineering Mindset)',
    youtubeId: 'mc979OhitAg',
    videoDescription: 'شرح بصري شامل لقواعد كيرشوف وكيف تتوزع التيارات عند العقد والجهود في الحلقات.',
    videoDescriptionEn: 'Visual overview of circuit principles and how currents divide at junctions and loops.'
  },

  // 3. Capacitors & Inductors: AC Reactance & Energy Storage
  ac_rc_rl: {
    simId: 'ac_rc_rl',
    targetDiagramTitle: 'الشكل النهائي لدائرة المكثف والملف وتخزين الطاقة (PhET AC Kit)',
    targetDiagramTitleEn: 'Final Target Setup for Capacitor & Inductor Energy Storage',
    diagramType: 'ac_rc_rl',
    componentList: ['مصدر جهد AC متناوب (10V, 50Hz)', 'مكثف كهربائي C = 100μF', 'ملف حثي L = 50mH', 'مقاوم R = 10Ω', 'راسم إشارة الجهد والتيار'],
    componentListEn: ['AC Voltage Source (10V, 50Hz)', 'Capacitor C = 100μF', 'Inductor L = 50mH', 'Resistor R = 10Ω', 'Voltage & Current Grapher'],
    steps: [
      'اختر مصدر الجهد المتناوب (AC Source) واضبط جهده على 10V وتردده على 50Hz.',
      'صل بالتوالي مقاومة R = 10Ω مع مكثف C = 100μF.',
      'صل راسم الإشارة (Voltage Chart) عبر المكثف لمراقبة شكل الموجة.',
      'لاحظ كيف يتقدم تيار المكثف على جهده بزاوية 90 درجة.',
      'استبدل المكثف بملف حثي L وشاهد كيف ينعكس الطور ويتأخر التيار خلف الجهد.',
    ],
    stepsEn: [
      'Select AC voltage source set to 10V and 50Hz.',
      'Connect resistor R = 10Ω in series with capacitor C = 100μF.',
      'Attach voltage and current chart across capacitor.',
      'Observe current leading voltage by 90 degrees.',
      'Swap capacitor with inductor L to observe current lagging voltage.'
    ],
    experiments: [
      {
        id: 'cap-exp-1',
        title: 'التفاعل 1: مراقبة تقدم تيار المكثف على الجهد (ICE)',
        titleEn: 'Experiment 1: Observe capacitor current leading voltage',
        stepAction: 'شغّل مصدر AC وراقب المنحنى الأزرق (التيار) مقارنة بالمنحنى البرتقالي (الجهد) للمكثف.',
        stepActionEn: 'Run AC source and watch current waveform versus voltage waveform across capacitor.',
        expectedObservation: 'يصل تيار المكثف إلى ذروته ربع دورة (90°) قبل أن يصل الجهد إلى ذروته.',
        expectedObservationEn: 'Capacitor current reaches peak 90 degrees ahead of capacitor voltage.',
        simpleExplanation: 'المكثف يجب أن يستقبل الشحنات أولاً (تيار) حتى يبدأ الجهد الكهربائي بالبناء على لوحيه، لذا "التيار يسبق الجهد".',
        simpleExplanationEn: 'Charge must flow in first (current) before voltage can accumulate on plates; hence current leads voltage.'
      },
      {
        id: 'ind-exp-2',
        title: 'التفاعل 2: مراقبة تأخر تيار الملف الحثي (ELI)',
        titleEn: 'Experiment 2: Observe inductor current lagging voltage',
        stepAction: 'صل ملف الحث L وافتح راسم التيار والجهد عبره.',
        stepActionEn: 'Connect inductor L and open oscilloscope chart across it.',
        expectedObservation: 'يصل الجهد إلى ذروته أولاً، بينما يتأخر تيار الملف بمقدار ربع دورة (90°).',
        expectedObservationEn: 'Voltage peaks first, with inductor current lagging behind by 90 degrees.',
        simpleExplanation: 'قانون لينز والحث الذاتي: يقاوم الملف الزيادة في التيار بتوليد جهد عكسي يعيقه، لذا "الجهد يسبق التيار".',
        simpleExplanationEn: 'Lenz Law dictates that the inductor opposes changes in current by inducing back-EMF, causing current to lag.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: المكثفات والملفات لا تبدد الطاقة كحرارة، بل تخزنها وتفرغها دورياً (المكثف في مجال كهربائي، والملف في مجال مغناطيسي).',
    finalResultExplanationEn: 'Expected outcome: Capacitors and inductors store and release energy cyclically rather than dissipating it as heat.',
    videoUrl: 'https://www.youtube.com/embed/X4EUwTwZ110',
    videoTitle: 'شرح طريقة عمل المكثفات الكهربائية بالتفصيل (The Engineering Mindset)',
    videoTitleEn: 'Capacitors Explained - The basics how capacitors work (The Engineering Mindset)',
    youtubeId: 'X4EUwTwZ110',
    videoDescription: 'شرح مبسط رائع يوضح كيف يخزن المكثف الطاقة في مجاله الكهربائي وسلوكه في دوائر التيار المستمر والمتردد.',
    videoDescriptionEn: 'Clear explanation of how capacitors store energy in an electric field and behave in DC and AC circuits.'
  },

  // 4. Series RLC Resonance
  ac_rlc: {
    simId: 'ac_rlc',
    targetDiagramTitle: 'الشكل النهائي لدائرة الرنين RLC المتوالية (Series RLC Resonance)',
    targetDiagramTitleEn: 'Final Target Schematic for Series RLC Resonant Circuit',
    diagramType: 'ac_rlc',
    componentList: ['مصدر جهد متردد AC (10V قابل لتغيير التردد)', 'مقاومة R = 10Ω', 'ملف حث L = 100mH', 'مكثف C = 10μF', 'أميتر + راسم إشارة Chart'],
    componentListEn: ['AC Voltage Source (variable f)', 'Resistor R = 10Ω', 'Inductor L = 100mH', 'Capacitor C = 10μF', 'Ammeter & Voltage Chart'],
    steps: [
      'اختر مصدر الجهد المتناوب واضبط جهده على 10V وتردده الابتدائي على 50Hz.',
      'صل بالتوالي مقاومة R = 10Ω، يتبعها ملف حث L = 100mH، ثم مكثف C = 10μF.',
      'اسحب راسم الإشارة (Voltage/Current Chart) وصل المجسات عبر الدائرة.',
      'ابدأ بتغيير تردد المصدر تدريجياً باتجاه تردد الرنين المحسوب f₀ = 1 / (2π√LC) ≈ 159 Hz.',
      'لاحظ كيف تصبح موجة الجهد وموجة التيار متطابقتين في الطور وتصل شدة التيار إلى ذروتها القصوى I_max = V / R = 1.0 A.',
    ],
    stepsEn: [
      'Select AC voltage source set to 10V amplitude and 50Hz.',
      'Connect in series: Resistor R = 10Ω, Inductor L = 100mH, Capacitor C = 10μF.',
      'Attach chart probes across circuit to observe phase and amplitude.',
      'Tune AC frequency toward resonant frequency f0 = 1 / (2π√LC) ≈ 159 Hz.',
      'Observe current and voltage falling into phase synchrony as current peaks at I_max = V/R = 1.0 A.',
    ],
    experiments: [
      {
        id: 'rlc-exp-1',
        title: 'التفاعل 1: توليف التردد للوصول إلى ذروة الرنين f₀ ≈ 159Hz',
        titleEn: 'Experiment 1: Tune frequency to resonance peak f0 ≈ 159Hz',
        stepAction: 'حرّك شريط تردد المصدر تدريجياً من 50Hz نحو 159Hz وراقب قراءة الأميتر.',
        stepActionEn: 'Slide source frequency gradually from 50Hz toward 159Hz and watch current.',
        expectedObservation: 'يقفز التيار فجأة من 0.15 A إلى 1.00 A بالضبط عند 159Hz، وتتطابق موجة الجهد مع موجة التيار.',
        expectedObservationEn: 'Current surges from 0.15 A up to 1.00 A at 159Hz, and voltage/current become in phase.',
        simpleExplanation: 'عند تردد الرنين، تصبح مفاعلة الملف الحثية مساوية لمفاعلة المكثف السعوية وتعاكسها تماماً (XL = XC)، فيلغيان بعضهما وتصبح المعاوقة Z = R فقط!',
        simpleExplanationEn: 'At resonance, XL = XC; inductive and capacitive reactances cancel out, leaving only resistance R.'
      },
      {
        id: 'rlc-exp-2',
        title: 'التفاعل 2: الابتعاد عن الرنين وملاحظة الخمود الحاد للتيار',
        titleEn: 'Experiment 2: Move off-resonance and observe current attenuation',
        stepAction: 'غيّر التردد إلى 300Hz أو 50Hz بعيداً عن نقطة الرنين.',
        stepActionEn: 'Change frequency to 300Hz or 50Hz away from resonance.',
        expectedObservation: 'يهبط التيار بشكل دراماتيكي إلى أقل من 0.2 A وتنحرف زاوية الطور بشدة.',
        expectedObservationEn: 'Current plummets dramatically below 0.2 A and phase angle shifts away from zero.',
        simpleExplanation: 'هذا السلوك الحاد هو سر أجهزة الراديو: دائرة الرنين تسمح بمرور محطة واحدة محددة وترفض كل المحطات الأخرى.',
        simpleExplanationEn: 'This sharp selectivity is how radio receivers tune into a single frequency while rejecting all others.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: عند تردد الرنين تلغي المعاوقة الحثية XL المعاوقة السعوية XC، فتنخفض المعاوقة الكلية إلى R فقط وتتضاعف قيمة التيار للحد الأقصى.',
    finalResultExplanationEn: 'Expected outcome: At resonance, inductive and capacitive reactances cancel out, minimizing impedance to pure R and maximizing circuit current.',
    videoUrl: 'https://www.youtube.com/embed/hp-yXvB7P1E',
    videoTitle: 'التجربة والشرح لظاهرة الرنين في دوائر RLC (The Organic Chemistry Tutor)',
    videoTitleEn: 'Series RLC Circuits & Resonant Frequency (The Organic Chemistry Tutor)',
    youtubeId: 'hp-yXvB7P1E',
    videoDescription: 'شرح تفصيلي رائع لحسابات تردد الرنين والمفاعلة الحثية والسعوية بالمعادلات والرسومات.',
    videoDescriptionEn: 'Detailed tutorial on series RLC circuits, resonance calculations, reactances, and impedance.'
  },

  // 5. Fourier Waves: Making Waves & Harmonics
  fourier_waves: {
    simId: 'fourier_waves',
    targetDiagramTitle: 'الشكل النهائي لمحاكاة فورييه: تركيب الموجة المربعة من التوافقيات',
    targetDiagramTitleEn: 'Final Target Setup for Fourier Square Wave Synthesis',
    diagramType: 'fourier_waves',
    componentList: ['التردد الأساسي (A1 = 1.0)', 'التوافقية الثالثة (A3 = 0.33)', 'التوافقية الخامسة (A5 = 0.20)', 'التوافقية السابعة (A7 = 0.14)', 'نمط العرض Discrete'],
    componentListEn: ['Fundamental A1 = 1.0', '3rd Harmonic A3 = 0.33', '5th Harmonic A5 = 0.20', '7th Harmonic A7 = 0.14', 'Discrete Mode'],
    steps: [
      'افتح تبويب "Discrete" في محاكي فورييه للتحكم في أشرطة الترددات المنفصلة.',
      'ارفع شريط النغمة الأساسية الأولى (n=1) إلى أقصى ارتفاع (A1 = 1.0) لمشاهدة موجة جيبية نقية.',
      'ارفع شريط التوافقية الثالثة (n=3) إلى ثلث القيمة تقريباً (A3 = 0.33). لاحظ كيف تبدأ قمم الموجة بالانبساط.',
      'ارفع شريط التوافقية الخامسة (n=5) إلى خمس القيمة (A5 = 0.20).',
      'شاهد كيف يتحول مجموع هذه الموجات الجيبية الفردية تدريجياً إلى موجة مربعة حقيقية (Square Wave)!',
    ],
    stepsEn: [
      'Open the Discrete tab in the Fourier simulation.',
      'Set harmonic n=1 slider to 1.0 to see the pure fundamental sinusoid.',
      'Raise harmonic n=3 to approximately 0.33; observe crests flattening.',
      'Add harmonic n=5 to 0.20 and higher odd harmonics.',
      'Observe the superposition of odd harmonics morphing into a crisp square wave.',
    ],
    experiments: [
      {
        id: 'fourier-exp-1',
        title: 'التفاعل 1: إفراد النغمة الأساسية (Sine Wave نقية)',
        titleEn: 'Experiment 1: Isolate fundamental sine wave',
        stepAction: 'ضع A1 = 1.00 واجعل باقي التوافقيات صفراً تماماً.',
        stepActionEn: 'Set A1 = 1.00 and zero out all higher harmonics.',
        expectedObservation: 'تظهر موجة جيبية ناعمة تماماً ذات تردد وحيد f دون أي تشوهات.',
        expectedObservationEn: 'A smooth single-frequency sinusoidal waveform appears with zero distortion.',
        simpleExplanation: 'الموجة الجيبية هي اللبنة الأساسية لجميع الإشارات الكهرومغناطيسية والكهربائية في الكون.',
        simpleExplanationEn: 'The sine wave is the fundamental building block of all electrical and physical signals.'
      },
      {
        id: 'fourier-exp-2',
        title: 'التفاعل 2: إضافة التوافقيات الفردية وبناء الموجة المربعة',
        titleEn: 'Experiment 2: Add odd harmonics to construct square wave',
        stepAction: 'أضف بالتوالي A3 = 0.33 ثم A5 = 0.20 ثم A7 = 0.14.',
        stepActionEn: 'Sequentially add A3 = 0.33, A5 = 0.20, and A7 = 0.14.',
        expectedObservation: 'تتسطح القمم وتصبح الحواف رأسية حادة، وتتشكل موجة مربعة رقمية بدقة.',
        expectedObservationEn: 'Crests flatten and edges become vertical, synthesizing a crisp digital square wave.',
        simpleExplanation: 'مبرهنة فورييه: أي موجة مهما كان شكلها معقداً يمكن التعبير عنها كمجموع موجات جيبية نقية بترددات متضاعفة.',
        simpleExplanationEn: 'Fourier Theorem: Any periodic signal can be synthesized by superimposing pure sinusoidal harmonics.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: تراكب التوافقيات الفردية (1, 3, 5, 7...) بنسب محددة يصنع موجة مربعة، وهو ما يثبت نظرية فورييه أن أي إشارة معقدة هي مجموع موجات جيبية نقية.',
    finalResultExplanationEn: 'Expected outcome: Superposition of odd sinusoidal harmonics synthesizes a square wave, verifying Fourier theorem.',
    videoUrl: 'https://www.youtube.com/embed/spUNpyF58BY',
    videoTitle: 'تحليل فوريه هندسياً وبصرياً (3Blue1Brown)',
    videoTitleEn: 'The Fourier Transform: A Visual Introduction (3Blue1Brown)',
    youtubeId: 'spUNpyF58BY',
    videoDescription: 'شرح تحفة بصرية من قناة 3Blue1Brown يوضح بالرسوم المتحركة كيفية دوران الموجات وتفكيكها إلى تردداتها الأصلية.',
    videoDescriptionEn: 'Masterpiece visual explanation by 3Blue1Brown showing how waves rotate and decompose into pure frequencies.'
  },

  // 6. Power Factor: Active & Reactive Power
  power_factor: {
    simId: 'power_factor',
    targetDiagramTitle: 'الشكل النهائي لتصحيح معامل القدرة وبنك المكثفات (Power Factor Correction)',
    targetDiagramTitleEn: 'Target Schematic for Power Factor Correction & Capacitor Bank',
    diagramType: 'power_factor',
    componentList: ['مصدر AC (220V, 50Hz)', 'حمل حثي (محرك كهربائي 2kW, PF=0.7)', 'مكثف تصحيح معامل القدرة C_bank', 'عداد القدرة الفعالة P (Watt)', 'عداد القدرة غير الفعالة Q (VAR)'],
    componentListEn: ['AC Source 220V 50Hz', 'Inductive Motor Load (2kW, PF=0.7)', 'Capacitor Bank C_bank', 'Active Power Meter P (W)', 'Reactive Power Meter Q (VAR)'],
    steps: [
      'صل المحرك الحثي بمصدر الجهد المتناوب 220V.',
      'راقب عداد القدرة الفعالة P والقدرة غير الفعالة Q المسحوبة من الشبكة.',
      'لاحظ ارتفاع شدة التيار المار في كابلات التغذية بسبب انخفاض معامل القدرة (PF = 0.70).',
      'صل بنك المكثفات بالتوازي مع المحرك لتوليد القدرة غير الفعالة محلياً.',
      'لاحظ هبوط التيار المسحوب من الشبكة بنسبة 30% مع بقاء المحرك يعمل بكامل طاقته الميكانيكية!',
    ],
    stepsEn: [
      'Connect inductive motor to 220V AC source.',
      'Monitor active power P and reactive power Q drawn from grid.',
      'Note high current in supply cables due to poor power factor (PF = 0.70).',
      'Connect capacitor bank in parallel with the motor.',
      'Verify supply current drops by 30% while motor maintains full mechanical power!'
    ],
    experiments: [
      {
        id: 'pf-exp-1',
        title: 'التفاعل 1: قياس زاوية الطور والحمل الحثي غير المصحح',
        titleEn: 'Experiment 1: Measure uncorrected inductive load phase lag',
        stepAction: 'شغّل الحمل الحثي بدون مكثف وقس التيار وزاوية الطور.',
        stepActionEn: 'Run inductive load without capacitor and measure current and phase lag.',
        expectedObservation: 'يتأخر التيار خلف الجهد بزاوية 45°، ويقرأ عداد Q قيمة موجبة عالية 2000 VAR.',
        expectedObservationEn: 'Current lags voltage by 45 degrees, and reactive power Q reads high positive 2000 VAR.',
        simpleExplanation: 'المحركات تحتاج إلى طاقة مغناطيسية غير فعالة (Q) لبناء مجالها الدوار، لكن هذه الطاقة تتأرجح في الأسلاك دون شغل ميكانيكي.',
        simpleExplanationEn: 'Inductive motors require reactive power Q for their magnetic field, sloshing current back and forth in transmission lines.'
      },
      {
        id: 'pf-exp-2',
        title: 'التفاعل 2: إدخال بنك المكثفات ورفع معامل القدرة إلى 0.98',
        titleEn: 'Experiment 2: Engage capacitor bank to boost PF to 0.98',
        stepAction: 'أغلق مفتاح بنك المكثفات بالتوازي مع المحرك.',
        stepActionEn: 'Close the switch connecting capacitor bank in parallel with motor.',
        expectedObservation: 'ينخفض التيار المسحوب من المحطة الرئيسية فورياً، وينخفض Q نحو الصفر، ويرتفع PF إلى 0.98.',
        expectedObservationEn: 'Supply current drops immediately, Q approaches zero, and PF rises to 0.98.',
        simpleExplanation: 'المكثف يفرغ طاقة غير فعالة في نفس اللحظة التي يطلبها الملف، فيتبادلان الطاقة محلياً دون إجهاد كابلات الشبكة.',
        simpleExplanationEn: 'The capacitor supplies reactive power locally at the exact moment the inductor needs it, unburdening transmission wires.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: تصحيح معامل القدرة خفّض شدة التيار في خطوط النقل ووفر تكاليف الفاقد الحراري ومنع الغرامات المالية للشركات.',
    finalResultExplanationEn: 'Expected outcome: PF correction slashed transmission line current and I²R thermal losses.',
    videoUrl: 'https://www.youtube.com/embed/Tv_7XWf96gg',
    videoTitle: 'شرح معامل القدرة والقدرة الفعالة وغير الفعالة (The Engineering Mindset)',
    videoTitleEn: 'Power Factor Explained - The basics what is power factor (The Engineering Mindset)',
    youtubeId: 'Tv_7XWf96gg',
    videoDescription: 'شرح رائع بمثال كأس العصير الشهير يوضح الفرق بين القدرة الحقيقية kW والقدرة التخيلية kVAR ومعامل القدرة.',
    videoDescriptionEn: 'Famous visual analogy explaining Real Power (kW), Reactive Power (kVAR), and Apparent Power (kVA).'
  },

  // 7. Transmission Grid & High-Voltage Transformers
  transmission_grid: {
    simId: 'transmission_grid',
    targetDiagramTitle: 'الشكل النهائي لشبكة النقل والمحولات (Plant to Home Grid)',
    targetDiagramTitleEn: 'Final Target Setup for High-Voltage Transmission Grid',
    diagramType: 'transmission_grid',
    componentList: ['محطة توليد 11kV', 'محول رافع Step-Up 400kV', 'خطوط نقل ضغط عالي', 'محول خافض Step-Down 220V', 'أحمال استهلاك منزلية'],
    componentListEn: ['Generation Plant 11kV', 'Step-Up Transformer 400kV', 'HV Transmission Lines', 'Step-Down Transformer 220V', 'Domestic Load'],
    steps: [
      'ضع محطة التوليد أو مصدر الجهد الأولي عند 11kV.',
      'صل المولد بالملف الابتدائي لمحول الرفع (Step-Up Transformer) لمضاعفة الجهد إلى 400kV.',
      'مد خطوط النقل الطويلة وشاهد كيف تنخفض شدة التيار I بشكل دراماتيكي.',
      'صل الطرف البعيد بمحول الخفض (Step-Down) لإنزال الجهد إلى 220V.',
      'اربط أحمال المنازل وقارن الفقد الحراري مع وبدون محول الرفع (ستجد أن الفقد انخفض بأكثر من 99%!).',
    ],
    stepsEn: [
      'Set generation source at 11kV.',
      'Connect to step-up transformer raising voltage to 400kV.',
      'Extend long transmission lines and note current dropping drastically.',
      'Connect distant end to step-down transformer restoring 220V.',
      'Connect domestic load and verify I²R losses plummet by over 99%.',
    ],
    experiments: [
      {
        id: 'trans-exp-1',
        title: 'التفاعل 1: نقل الطاقة بجهد منخفض 220V وملاحظة هبوط الجهد',
        titleEn: 'Experiment 1: Low-voltage transmission test',
        stepAction: 'صل مصباحاً عبر خط نقل طويل بمقاومة 10Ω مباشرة بجهد منخفض.',
        stepActionEn: 'Connect a lamp across long 10Ω wires directly at low voltage.',
        expectedObservation: 'يخفت ضوء المصباح بشدة، وتتحول معظم طاقة التوليد إلى حرارة مهدرة في الأسلاك (P_loss = I²·R).',
        expectedObservationEn: 'Lamp dims severely; most generated energy dissipates as heat along the wires.',
        simpleExplanation: 'التيار العالي يمر في مقاومة الأسلاك الطويلة فيولد حرارة عالية تهدر الطاقة قبل وصولها للبيوت.',
        simpleExplanationEn: 'High current passing through wire resistance creates large thermal I²R losses.'
      },
      {
        id: 'trans-exp-2',
        title: 'التفاعل 2: تفعيل محول الرفع 400kV ومقارنة الكفاءة',
        titleEn: 'Experiment 2: Step-up transformer 400kV activation',
        stepAction: 'ارفع الجهد بمحول Step-Up قبل خطوط النقل وخفضه عند الوصول.',
        stepActionEn: 'Insert step-up transformer before transmission lines and step-down at destination.',
        expectedObservation: 'يتوهج المصباح بكامل بريقه وتهبط فواقد الأسلاك بأكثر من 99%!',
        expectedObservationEn: 'Lamp shines at full brilliance while wire line losses drop by over 99%!',
        simpleExplanation: 'بما أن P = V·I، فإن رفع الجهد 1000 مرة يخفض التيار 1000 مرة، ولأن الفقد يعتمد على I² فإن الفواقد تنخفض مليون مرة!',
        simpleExplanationEn: 'Stepping up voltage lowers current proportionally, cutting I²R losses by the square of voltage increase.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: رفع الجهد خفّض شدة التيار I وبالتالي اختزل الفقد الحراري I²·R إلى الحد الأدنى، ووصلت الطاقة كاملة للمنازل دون احتراق الكابلات.',
    finalResultExplanationEn: 'Expected outcome: Stepping up voltage slashed transmission current and I²R losses, delivering high-efficiency stable power.',
    videoUrl: 'https://www.youtube.com/embed/v1BMWczn7JM',
    videoTitle: 'كيف تعمل شبكة الكهرباء ومحولات الجهد الفائق (Practical Engineering)',
    videoTitleEn: 'How Does the Power Grid Work? (Practical Engineering)',
    youtubeId: 'v1BMWczn7JM',
    videoDescription: 'شرح ممتع يوضح البنية التحتية لشبكات النقل الكهربائي ومحطات التحويل وكيف يتم الحفاظ على توازن الطاقة لحظة بلحظة.',
    videoDescriptionEn: 'Insightful breakdown of electrical transmission infrastructure, substations, and instantaneous power balancing.'
  },

  // 8. Solar Grid & BESS Batteries: The Duck Curve
  grid_solar: {
    simId: 'grid_solar',
    targetDiagramTitle: 'الشكل النهائي لمنظومة الطاقة الشمسية وتوازن الشبكة (Solar & BESS)',
    targetDiagramTitleEn: 'Target Single-Line Setup for Solar Grid & BESS Storage',
    diagramType: 'grid_solar',
    componentList: ['مصفوفة ألواح شمسية PV Array', 'عاكس هجين Grid Inverter', 'بطاريات تخزين BESS', 'أحمال استهلاك المنازل والمصانع'],
    componentListEn: ['PV Solar Array', 'Hybrid Inverter', 'BESS Battery Storage', 'Domestic & Industrial AC Loads'],
    steps: [
      'في المحاكي، ضع لوح الطاقة الشمسية كمصدر توليد متجدد نهاراً.',
      'اربط اللوح بعاكس تحويل التيار من مستمر DC إلى متردد AC.',
      'أضف بطارية تخزين (BESS) لامتصاص الفائض الظهري.',
      'اربط أحمال الاستهلاك وشاهد عداد القدرة الفعالة P وغير الفعالة Q.',
      'قم بمحاكاة وقت الغروب: لاحظ تفريغ البطارية فورياً لتعويض غياب الشمس ومنع هبوط تردد الشبكة.',
    ],
    stepsEn: [
      'Place solar PV panels as daytime renewable source.',
      'Connect panels to inverter converting DC to AC.',
      'Integrate BESS battery storage to absorb midday surplus.',
      'Connect AC domestic loads and monitor P and Q meters.',
      'Simulate sunset: verify battery dispatch stabilizing grid frequency.',
    ],
    experiments: [
      {
        id: 'solar-exp-1',
        title: 'التفاعل 1: محاكاة ذروة التوليد الشمسي وقت الظهيرة',
        titleEn: 'Experiment 1: Simulate midday peak solar generation',
        stepAction: 'اضبط إشعاع الشمس على الحد الأقصى وراقب مسار الطاقة الفائضة.',
        stepActionEn: 'Set solar irradiance to maximum and observe surplus power flow.',
        expectedObservation: 'تغذي الألواح كامل أحمال البيوت، ويتجه الفائض تلقائياً لشحن بنك بطاريات BESS.',
        expectedObservationEn: 'Solar panels power all loads and surplus automatically charges the BESS battery storage.',
        simpleExplanation: 'وقت الظهيرة يكون التوليد الشمسي في قمته بينما الاستهلاك منخفض، وتخزين هذا الفائض يحمي المولدات التقليدية من التوقف الإجباري.',
        simpleExplanationEn: 'Midday generation exceeds demand; storing surplus prevents overgeneration and curtailment.'
      },
      {
        id: 'solar-exp-2',
        title: 'التفاعل 2: محاكاة الغروب وحل معضلة منحنى البطة (Duck Curve)',
        titleEn: 'Experiment 2: Simulate sunset and solve Duck Curve ramp',
        stepAction: 'اخفض الشمس لمحاكاة الغروب وارفع استهلاك المنازل المسائي.',
        stepActionEn: 'Reduce sunlight to simulate sunset and ramp up evening residential load.',
        expectedObservation: 'تتحول البطارية فورياً من وضع الشحن إلى التفريغ وتضخ الطاقة في الشبكة دون انقطاع الكهرباء.',
        expectedObservationEn: 'Battery switches instantly from charging to discharging, maintaining grid power without a blip.',
        simpleExplanation: 'البطاريات تستجيب في أجزاء من الثانية لتسد عنق منحنى البطة (Duck Curve) ريثما تبدأ المحطات الحرارية بالتسارع التدريجي.',
        simpleExplanationEn: 'BESS battery response in milliseconds bridges the steep evening ramp, safeguarding grid stability.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: توازن دائم بين التوليد والاستهلاك (P_generation = P_load) واستقرار التردد عند 50.00Hz حتى مع غياب الشمس.',
    finalResultExplanationEn: 'Expected outcome: Dynamic equilibrium between generation and load maintaining 50.00Hz stability.',
    videoUrl: 'https://www.youtube.com/embed/h7ps0sD6g28',
    videoTitle: 'تحديات ربط الطاقة الشمسية بالشبكة الكهربائية (Practical Engineering)',
    videoTitleEn: 'Connecting Solar to the Grid is Harder Than You Think (Practical Engineering)',
    youtubeId: 'h7ps0sD6g28',
    videoDescription: 'شرح هندسي عميق للتحديات الفيزيائية لدمج الطاقة الشمسية والتقلبات المفاجئة وكيف تتكيف الشبكة معها.',
    videoDescriptionEn: 'In-depth engineering breakdown of solar intermittency, grid connection challenges, and modern solutions.'
  },

  // 9. Battery Storage Systems
  battery_storage: {
    simId: 'battery_storage',
    targetDiagramTitle: 'الشكل النهائي لمنظومة بطاريات التخزين الشبكية (BESS System)',
    targetDiagramTitleEn: 'Target Schematic for Grid Battery Energy Storage System',
    diagramType: 'battery_storage',
    componentList: ['خلايا بطاريات ليثيوم BESS', 'نظام إدارة البطارية BMS', 'عاكس ثنائي الاتجاه Bi-directional Inverter', 'قاطع تفريغ سريع Fast Switch'],
    componentListEn: ['Lithium BESS Rack', 'Battery Management System BMS', 'Bi-directional Inverter', 'High-Speed Grid Switch'],
    steps: [
      'ضع البطارية في المحاكي وراقب مؤشر حالة الشحن (State of Charge - SoC).',
      'صل البطارية بمصدر التوليد النهاري لمراقبة دورة الشحن.',
      'عند وصول SoC إلى 95%، ينظم نظام BMS تيار الشحن لمنع ارتفاع الحرارة.',
      'قم بمحاكاة انقطاع مفاجئ في التوليد، وراقب التفريغ الفوري للبطارية.',
    ],
    stepsEn: [
      'Place battery in simulation and observe State of Charge (SoC).',
      'Connect battery to daytime generation to initiate charge cycle.',
      'When SoC reaches 95%, BMS throttles charging current.',
      'Simulate abrupt generation trip and verify immediate battery discharge.'
    ],
    experiments: [
      {
        id: 'bess-exp-1',
        title: 'التفاعل 1: شحن البطارية ومراقبة منحنى الجهد والتيار',
        titleEn: 'Experiment 1: Charge cycle and voltage-current monitoring',
        stepAction: 'ابدأ شحن البطارية من SoC = 20% وراقب استجابة الشاحن.',
        stepActionEn: 'Begin charging battery from 20% SoC and monitor charger response.',
        expectedObservation: 'يرتفع الجهد تدريجياً ويشحن بتيار ثابت حتى يقترب من الامتلاء ثم ينخفض التيار.',
        expectedObservationEn: 'Voltage climbs steadily under constant current until near full, then current tapers.',
        simpleExplanation: 'نظام إدارة البطارية (BMS) يحمي كيمياء الخلايا من الإجهاد الحراري ويوازن الشحن بين آلاف الخلايا المنفردة.',
        simpleExplanationEn: 'The Battery Management System (BMS) prevents thermal stress and balances individual cell voltages.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: البطاريات توفر مرونة هائلة وتستجيب في 20 ميلي ثانية مقارنة بالمحطات الغازية التي تحتاج 15 دقيقة للتشغيل.',
    finalResultExplanationEn: 'Expected outcome: Batteries respond in 20 milliseconds compared to minutes for thermal peaker plants.',
    videoUrl: 'https://www.youtube.com/embed/7G4ipM2qjfw',
    videoTitle: 'بطاريات التخزين وحل معضلة استقرار الشبكة (Practical Engineering)',
    videoTitleEn: 'Why the Grid Needs Batteries (Practical Engineering)',
    youtubeId: '7G4ipM2qjfw',
    videoDescription: 'كيف تحل بطاريات الشبكة الكبرى مشكلة استقرار التردد وامتصاص الصدمات الكهربائية بدلاً من محطات الغاز الاحتياطية.',
    videoDescriptionEn: 'How utility-scale batteries provide frequency response and buffer sudden grid disturbances.'
  },

  // 10. Grid Frequency & Inertia
  grid_frequency: {
    simId: 'grid_frequency',
    targetDiagramTitle: 'الشكل النهائي لتوازن تردد الشبكة والقصور الذاتي (50.00Hz Balance)',
    targetDiagramTitleEn: 'Target Schematic for Grid Frequency & Inertia Equilibrium',
    diagramType: 'grid_frequency',
    componentList: ['مولدات تقليدية متزامنة (Inertia)', 'عنفات رياح وخلايا شمسية (Inverter)', 'بطاريات استجابة ترددية FFR', 'عداد التردد الدقيق 50.00Hz'],
    componentListEn: ['Synchronous Generators (Inertia)', 'Inverter-Based Renewables', 'Fast Frequency Response BESS', 'Precision 50.00Hz Frequency Meter'],
    steps: [
      'شغّل المحاكي في حالة الاتزان 50.00Hz حيث التوليد يساوي الاستهلاك.',
      'افصل مولداً رئيسياً وشاهد كيف يبدأ التردد بالهبوط السريع (RoCoF).',
      'شاهد كيف تقاوم الكتلة الدوارة للمولدات (Inertia) الهبوط وتمنح الشبكة وقتاً ثميناً.',
      'فعّل الاستجابة السريعة للبطاريات (Synthetic Inertia) وشاهد كيف يستقر التردد فورياً عند 49.8Hz قبل أن يرتد إلى 50.00Hz.',
    ],
    stepsEn: [
      'Run simulation in 50.00Hz equilibrium (P_gen = P_load).',
      'Trip a major generator and watch frequency drop rate (RoCoF).',
      'Observe physical rotating inertia buffering the sudden drop.',
      'Trigger fast battery frequency response to catch and restore 50.00Hz.'
    ],
    experiments: [
      {
        id: 'freq-exp-1',
        title: 'التفاعل 1: محاكاة هبوط التردد عند فصل مولد كبير',
        titleEn: 'Experiment 1: Generator trip and frequency decline',
        stepAction: 'انقر على زر فصل المولد وراقب عداد التردد ومعدل الهبوط RoCoF.',
        stepActionEn: 'Click generator trip and monitor frequency meter and RoCoF rate.',
        expectedObservation: 'يهبط التردد من 50.00Hz نحو 49.60Hz وتتباطأ التوربينات المتبقية لتعويض النقص من طاقتها الحركية.',
        expectedObservationEn: 'Frequency dips from 50.00Hz toward 49.60Hz as surviving generators slow down releasing kinetic energy.',
        simpleExplanation: 'القصور الذاتي الميكانيكي (Inertia) هو المصد الطبيعي الأول الذي يحمي الشبكة من الانهيار الفوري.',
        simpleExplanationEn: 'Mechanical inertia acts as the natural shock absorber preventing immediate catastrophic collapse.'
      },
      {
        id: 'freq-exp-2',
        title: 'التفاعل 2: الاستجابة الترددية السريعة بالبطاريات (Synthetic Inertia)',
        titleEn: 'Experiment 2: Synthetic inertia injection from battery inverters',
        stepAction: 'فعّل وضع الاستجابة فائقة السرعة للعاكسات الذكية.',
        stepActionEn: 'Enable fast frequency response mode on grid-forming inverters.',
        expectedObservation: 'تضخ البطاريات دفعة طاقة هائلة خلال 100 ميلي ثانية فتتوقف حركة هبوط التردد ويرتد فورياً إلى 50.00Hz.',
        expectedObservationEn: 'Batteries inject massive power within 100 milliseconds, halting frequency decline and restoring 50.00Hz.',
        simpleExplanation: 'القصور الذاتي الاصطناعي (Synthetic Inertia) يعوض غياب التوربينات الثقيلة في شبكات الطاقة المتجددة الحديثة.',
        simpleExplanationEn: 'Synthetic inertia from inverter systems replaces lost mechanical mass in modern renewable grids.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: حماية الشبكة من الانهيار الكامل (Blackout) وتأمين ثبات التردد ضمن الحدود الآمنة ±0.2 Hz.',
    finalResultExplanationEn: 'Expected outcome: Protection against blackouts and keeping grid frequency safely within ±0.2 Hz.',
    videoUrl: 'https://www.youtube.com/embed/08mwXICY4JM',
    videoTitle: 'كيف يتوازن تردد شبكة الكهرباء ولماذا القصور الذاتي مهم؟ (Practical Engineering)',
    videoTitleEn: 'How the Power Grid Balances Frequency (Practical Engineering)',
    youtubeId: '08mwXICY4JM',
    videoDescription: 'شرح رائع يوضح كيف تتحرك الترددات في الشبكة عند زيادة الحمل وكيف تحمي أجهزة التحكم التوربينات من الانهيار.',
    videoDescriptionEn: 'Clear explanation of grid frequency dynamics, spinning reserves, and inertia during sudden load shifts.'
  },

  // 11. Radio LC Resonant Tuner
  radio_tuner: {
    simId: 'radio_tuner',
    targetDiagramTitle: 'الشكل النهائي لدائرة توليف الراديو LC Resonant Tuner',
    targetDiagramTitleEn: 'Final Target Setup for Radio Antenna LC Resonance Tuner',
    diagramType: 'radio_tuner',
    componentList: ['هوائي الاستقبال (Antenna)', 'ملف حثي L = 2.5μH', 'مكثف متغير C_var (10-100pF)', 'دايود كاشف (Detector)', 'سماعة أذن / مكبر صوت'],
    componentListEn: ['Receiving Antenna', 'Inductor L = 2.5μH', 'Variable Capacitor C_var', 'Detector Diode', 'Audio Speaker'],
    steps: [
      'صل الهوائي (Antenna) لاستقبال طيف الإشارات الكهرومغناطيسية من الهواء.',
      'اربط الهوائي بدائرة الرنين المكونة من ملف الحث L والمكثف المتغير C بالتوازي.',
      'قم بتدوير قرص المكثف المتغير لتغيير سعته C تدريجياً.',
      'عندما يتطابق تردد رنين الدائرة f₀ = 1 / (2π√LC) مع تردد إذاعتك المفضلة (مثلاً 102.4 MHz)، تتضاعف الإشارة فورياً وتُلغى باقي المحطات.',
      'صل الدايود لفك التعديل وسماع الصوت ناصعاً في السماعة!',
    ],
    stepsEn: [
      'Connect antenna to pick up electromagnetic waves from the air.',
      'Hook antenna to parallel LC resonant tank (Inductor L & Variable C).',
      'Tune variable capacitor slider to adjust resonant frequency.',
      'When f0 = 1 / (2π√LC) matches your station frequency, signal amplitude peaks sharply while rejecting noise.',
      'Pass signal through demodulator diode to hear crisp audio on the speaker.',
    ],
    experiments: [
      {
        id: 'radio-exp-1',
        title: 'التفاعل 1: تدوير المكثف المتغير وعزل المحطة المرغوبة',
        titleEn: 'Experiment 1: Rotate variable capacitor to isolate target station',
        stepAction: 'حرّك سعة المكثف حتى تتطابق مع تردد الإشارة.',
        stepActionEn: 'Adjust capacitor capacitance until circuit resonance matches station frequency.',
        expectedObservation: 'ترتفع سعة الإشارة المطلوبة بعشرة أضعاف، وتخمد الإشارات المجاورة تماماً.',
        expectedObservationEn: 'Target signal amplitude increases tenfold while adjacent channel interference drops to zero.',
        simpleExplanation: 'عامل الجودة العالي (High Q) يجعل استجابة الرنين حادة جداً كنافذة ضيقة لا تسمح إلا بدخول تردد واحد فقط.',
        simpleExplanationEn: 'High Quality Factor (Q) sharpens the resonance peak, acting as a narrow bandpass filter.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: الرنين الكهربائي الحاد (High Q) يعزل محطة إذاعية واحدة بدقة متناهية من بين آلاف الترددات المتداخلة في الهواء.',
    finalResultExplanationEn: 'Expected outcome: High-Q resonance sharp peak isolates a single broadcast frequency cleanly from ambient radio spectrum.',
    videoUrl: 'https://www.youtube.com/embed/hp-yXvB7P1E',
    videoTitle: 'التجربة العملية لظاهرة الرنين في دوائر LC (The Organic Chemistry Tutor)',
    videoTitleEn: 'LC Resonance & Tuner Circuits (The Organic Chemistry Tutor)',
    youtubeId: 'hp-yXvB7P1E',
    videoDescription: 'شرح تطبيقي يربط بين معادلة الرنين وتوليف محطات الراديو وفصل الإشارات.',
    videoDescriptionEn: 'Practical demonstration connecting resonance formulas to radio tuning and signal extraction.'
  },

  // 12. AC Sine Waves & Phase Angle
  ac_phase: {
    simId: 'ac_phase',
    targetDiagramTitle: 'الشكل النهائي لتحليل موجات التيار المتردد والطور (AC Sinusoids & Phase)',
    targetDiagramTitleEn: 'Target Schematic for AC Sinusoids and Phase Relationships',
    diagramType: 'ac_phase',
    componentList: ['مولد AC متناوب (220V RMS, 50Hz)', 'مقاوم أومي R', 'مكثف وملف حثي', 'راسم إشارة ثنائي القناة Dual-Trace Scope'],
    componentListEn: ['AC Generator (220V RMS, 50Hz)', 'Resistive Load R', 'Capacitor & Inductor', 'Dual-Trace Oscilloscope'],
    steps: [
      'اضبط مصدر AC على 50Hz (زمن دوري T = 20ms).',
      'صل المقاوم وشاهد كيف يتطابق طور الجهد مع طور التيار تماماً (φ = 0°).',
      'أضف حملاً حثياً وراقب كيف يتقدم الجهد بزاوية طور φ.',
      'قس القيمة العظمى V_max والقيمة الفعالة V_rms = V_max / √2.',
    ],
    stepsEn: [
      'Set AC source to 50Hz (Period T = 20ms).',
      'Connect resistor; observe voltage and current in perfect phase (phi = 0).',
      'Add inductive load; watch voltage lead current by phase angle phi.',
      'Measure peak voltage V_max and root-mean-square V_rms = V_max / sqrt(2).'
    ],
    experiments: [
      {
        id: 'phase-exp-1',
        title: 'التفاعل 1: قياس القيمة الفعالة RMS مقابل القيمة العظمى Peak',
        titleEn: 'Experiment 1: Measure RMS voltage vs Peak voltage',
        stepAction: 'قس قمة الموجة V_max وقارنها بقراءة الفولتميتر العادي V_rms.',
        stepActionEn: 'Measure wave crest V_max and compare to standard voltmeter RMS reading.',
        expectedObservation: 'قمة الموجة تصل إلى 311V، بينما يقرأ الفولتميتر 220V (311 / 1.414 = 220V).',
        expectedObservationEn: 'Wave crest hits 311V, while voltmeter reads standard 220V RMS (311 / 1.414 = 220V).',
        simpleExplanation: 'القيمة الفعالة RMS تمثل الجهد المكافئ الذي يعطي نفس القدرة الحرارية لتيار مستمر في نفس المقاومة.',
        simpleExplanationEn: 'RMS is the equivalent DC voltage that produces the identical heating power in a resistor.'
      }
    ],
    finalResultExplanation: 'النتيجة المتوقعة: فهم عميق لمعنى زاوية الطور وكيف يحدد التردد 50Hz سرعة تذبذب الطاقة.',
    finalResultExplanationEn: 'Expected outcome: Solid intuition for phase angles and how 50Hz governs energy oscillation.',
    videoUrl: 'https://www.youtube.com/embed/wzJ_zG8Y0Lw',
    videoTitle: 'مقدمة في التيار المتردد والمستمر والموجات الجيبية (The Engineering Mindset)',
    videoTitleEn: 'AC and DC Electricity Basics (The Engineering Mindset)',
    youtubeId: 'wzJ_zG8Y0Lw',
    videoDescription: 'شرح أساسي ممتاز يوضح حركة الإلكترونات المتأرجحة في التيار المتردد وشكل الموجة الجيبية.',
    videoDescriptionEn: 'Visual guide to alternating electron motion, frequency, and sinusoidal AC waveforms.'
  }
};

interface SimulationWithGuideProps {
  simulationUrl: string;
  simulationTitle: string;
  guideType: string;
  language?: Language;
}

export const SimulationWithGuide: React.FC<SimulationWithGuideProps> = ({
  simulationUrl,
  simulationTitle,
  guideType,
  language = 'ar',
}) => {
  const isEn = language === 'en';
  const guide = GUIDES_DATABASE[guideType] || GUIDES_DATABASE.dc_circuit;
  const [activeTab, setActiveTab] = useState<'tasks' | 'diagram' | 'steps' | 'video'>('tasks');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const cleanYoutubeId = guide.youtubeId || (guide.videoUrl ? guide.videoUrl.split('/').pop()?.split('?')[0] : '0DxKZl9AEio');
  const embedUrl = `https://www.youtube.com/embed/${cleanYoutubeId}?rel=0&modestbranding=1`;
  const watchUrl = `https://www.youtube.com/watch?v=${cleanYoutubeId}`;

  return (
    <div className="border-2 border-neutral-300 rounded-2xl bg-white shadow-xs overflow-hidden my-4 sm:my-6">
      {/* Top Banner Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <span className="bg-white text-black text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded uppercase">
            PhET + Guide Lab
          </span>
          <h3 className="font-headline font-bold text-xs sm:text-sm md:text-base text-white">
            {simulationTitle}
          </h3>
        </div>

        {/* View toggle (Split view vs Fullscreen simulation) */}
        <div className="flex items-center gap-2">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-mono font-bold bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded-md transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{isEn ? 'Watch Video' : 'فيديو الشرح'}</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-[11px] font-mono font-bold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
            title={isExpanded ? 'عرض المخطط التوجيهي والتفاعلات بجانب المحاكي' : 'تكبير المحاكي لكامل الشاشة'}
          >
            {isExpanded ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-neutral-300" />
                <span>{isEn ? 'Split Guide View' : 'عرض المخطط والتفاعلات'}</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-neutral-300" />
                <span>{isEn ? 'Full Simulation' : 'محاكي واسع'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Split Layout: Simulation on one side, Companion Blueprint on the other */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x lg:rtl:divide-x-reverse divide-neutral-200 min-h-[580px]">
        {/* Left/Main Column: Live Interactive Simulation */}
        <div className={`relative bg-neutral-950 flex flex-col ${isExpanded ? 'lg:col-span-12' : 'lg:col-span-7 xl:col-span-7'}`}>
          <div className="flex-1 min-h-[480px] sm:min-h-[560px] w-full">
            <iframe
              src={simulationUrl}
              title={simulationTitle}
              className="w-full h-full min-h-[480px] sm:min-h-[560px] border-none"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-900 text-neutral-300 text-[10px] sm:text-[11px] font-mono flex items-center justify-between border-t border-neutral-800">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {isEn ? 'PhET interactive canvas active — perform tasks in the guide' : 'المحاكي التفاعلي يعمل مباشرة — نفذ التفاعلات والمهام في اللوحة المجاورة'}
            </span>
            <span className="text-neutral-400">CC-BY-4.0 PhET</span>
          </div>
        </div>

        {/* Right/Companion Column: Tasks & Simple Explanations, Blueprint, Steps, or Video */}
        {!isExpanded && (
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col bg-neutral-50/70">
            {/* Companion Tab Selector */}
            <div className="grid grid-cols-4 border-b border-neutral-200 bg-white font-mono text-[10px] sm:text-[11px] font-bold">
              <button
                onClick={() => setActiveTab('tasks')}
                className={`py-2.5 px-1 sm:px-2 text-center transition-colors flex items-center justify-center gap-1 cursor-pointer border-b-2 ${
                  activeTab === 'tasks'
                    ? 'border-black text-black bg-neutral-50'
                    : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-50/50'
                }`}
              >
                <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isEn ? 'Experiments' : 'التفاعلات'}</span>
              </button>

              <button
                onClick={() => setActiveTab('diagram')}
                className={`py-2.5 px-1 sm:px-2 text-center transition-colors flex items-center justify-center gap-1 cursor-pointer border-b-2 ${
                  activeTab === 'diagram'
                    ? 'border-black text-black bg-neutral-50'
                    : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-50/50'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>{isEn ? 'Schematic' : 'المخطط'}</span>
              </button>

              <button
                onClick={() => setActiveTab('steps')}
                className={`py-2.5 px-1 sm:px-2 text-center transition-colors flex items-center justify-center gap-1 cursor-pointer border-b-2 ${
                  activeTab === 'steps'
                    ? 'border-black text-black bg-neutral-50'
                    : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-50/50'
                }`}
              >
                <ListOrdered className="w-3.5 h-3.5 text-amber-600" />
                <span>{isEn ? 'Build Steps' : 'الخطوات'}</span>
              </button>

              <button
                onClick={() => setActiveTab('video')}
                className={`py-2.5 px-1 sm:px-2 text-center transition-colors flex items-center justify-center gap-1 cursor-pointer border-b-2 ${
                  activeTab === 'video'
                    ? 'border-red-600 text-red-600 bg-red-50/50'
                    : 'border-transparent text-neutral-500 hover:text-red-600 hover:bg-neutral-50/50'
                }`}
              >
                <Video className="w-3.5 h-3.5 text-red-600" />
                <span>{isEn ? 'Video' : 'فيديو الشرح'}</span>
              </button>
            </div>

            {/* TAB 1: INTERACTIVE SIMULATION EXPERIMENTS & SIMPLE EXPLANATIONS */}
            {activeTab === 'tasks' && (
              <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-200 pb-2.5">
                  <div className="flex items-center gap-1.5 text-neutral-900 font-headline font-bold text-xs sm:text-sm">
                    <FlaskConical className="w-4 h-4 text-emerald-600" />
                    <h4>{isEn ? 'Interactive Simulation Experiments & Simple Explanations' : 'التفاعلات العملية على المحاكي مع الشرح المبسط'}</h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    {Object.values(completedTasks).filter(Boolean).length} / {guide.experiments.length} {isEn ? 'Completed' : 'مكتمل'}
                  </span>
                </div>

                <p className="text-[11px] font-serif text-neutral-600 leading-relaxed">
                  {isEn
                    ? 'Perform each experiment below inside the live simulator on the left, observe what happens, and read the physical intuition behind it:'
                    : 'قم بإجراء كل تفاعل أدناه داخل المحاكي المباشر على اليسار، راقب ما يحدث بعينك، واقرأ الشرح الفيزيائي المبسط للظاهرة:'}
                </p>

                <div className="space-y-3 font-serif">
                  {guide.experiments.map((exp, idx) => {
                    const isDone = !!completedTasks[exp.id];
                    return (
                      <div
                        key={exp.id || idx}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isDone
                            ? 'bg-emerald-50/70 border-emerald-300 shadow-2xs'
                            : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 pb-2 border-b border-neutral-100">
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center shrink-0 ${
                              isDone ? 'bg-emerald-600 text-white' : 'bg-black text-white'
                            }`}>
                              {idx + 1}
                            </span>
                            <h5 className="font-headline font-bold text-xs sm:text-sm text-neutral-900">
                              {isEn ? exp.titleEn : exp.title}
                            </h5>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleTask(exp.id)}
                            className={`text-[10px] font-mono font-bold px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-colors ${
                              isDone
                                ? 'bg-emerald-600 text-white'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                          >
                            {isDone ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>{isEn ? 'Done' : 'تمت التجربة'}</span>
                              </>
                            ) : (
                              <span>{isEn ? 'Mark Done' : 'تحديد كمنجز'}</span>
                            )}
                          </button>
                        </div>

                        {/* Step action */}
                        <div className="pt-2 text-xs text-neutral-800 space-y-1.5">
                          <div className="flex items-start gap-1.5 text-neutral-900 font-medium">
                            <span className="font-mono font-bold text-[10px] bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                              {isEn ? 'Action:' : 'ماذا تفعل بالمحاكي:'}
                            </span>
                            <span className="leading-relaxed">
                              {isEn ? exp.stepActionEn : exp.stepAction}
                            </span>
                          </div>

                          {/* Observation */}
                          <div className="flex items-start gap-1.5 text-blue-950 bg-blue-50/70 p-2 rounded-lg border border-blue-100">
                            <span className="font-mono font-bold text-[10px] bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                              {isEn ? 'Observe:' : 'ماذا تلاحظ:'}
                            </span>
                            <span className="leading-relaxed">
                              {isEn ? exp.expectedObservationEn : exp.expectedObservation}
                            </span>
                          </div>

                          {/* Simple explanation */}
                          <div className="flex items-start gap-1.5 text-amber-950 bg-amber-50/70 p-2 rounded-lg border border-amber-100">
                            <span className="font-mono font-bold text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                              {isEn ? 'Why? (Intuition):' : 'الشرح المبسط:'}
                            </span>
                            <span className="leading-relaxed font-sans text-xs">
                              {isEn ? exp.simpleExplanationEn : exp.simpleExplanation}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Video Callout banner inside experiments tab */}
                <div className="p-3 bg-neutral-900 text-white rounded-xl flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-red-400 shrink-0" />
                    <div className="text-[11px] font-sans">
                      <span className="font-bold block font-headline">{isEn ? 'Watch the Real Video Tutorial' : 'شاهد التجربة في فيديو يوتيوب حقيقي'}</span>
                      <span className="text-neutral-400 text-[10px]">{isEn ? guide.videoTitleEn : guide.videoTitle}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('video')}
                    className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-mono font-bold px-2.5 py-1.5 rounded cursor-pointer shrink-0"
                  >
                    {isEn ? 'Play Video' : 'تشغيل الفيديو'}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: FINAL TARGET SCHEMATIC BLUEPRINT */}
            {activeTab === 'diagram' && (
              <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">
                <div>
                  <div className="flex items-center gap-1.5 text-neutral-900 font-headline font-bold text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <h4>{isEn ? guide.targetDiagramTitleEn : guide.targetDiagramTitle}</h4>
                  </div>
                  <p className="text-[11px] font-serif text-neutral-600 mt-1 leading-relaxed">
                    {isEn
                      ? 'The blueprint schematic below illustrates the completed circuit assembly target. Connect your items in PhET to match this arrangement.'
                      : 'المخطط الهندسي التوضيحي أدناه يمثل الشكل النهائي المطلوب بناؤه على المحاكي؛ قم بتوصيل المكونات لتتطابق مع هذا الرسم.'}
                  </p>
                </div>

                {/* SVG Visual Schematic Blueprint */}
                <div className="bg-white border border-neutral-300 rounded-xl p-3 sm:p-4 shadow-2xs">
                  {guide.diagramType === 'dc_circuit' && (
                    <svg viewBox="0 0 320 180" className="w-full h-auto">
                      <rect width="320" height="180" fill="#f8fafc" rx="8" />
                      <rect x="40" y="30" width="240" height="120" rx="8" fill="none" stroke="#0f172a" strokeWidth="3" />
                      <rect x="25" y="70" width="30" height="40" rx="3" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
                      <rect x="35" y="65" width="10" height="6" fill="#f59e0b" />
                      <text x="10" y="95" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#0f172a">9.0 V</text>
                      <line x1="120" y1="30" x2="160" y2="18" stroke="#dc2626" strokeWidth="3" />
                      <circle cx="120" cy="30" r="4" fill="#0f172a" />
                      <circle cx="170" cy="30" r="4" fill="#0f172a" />
                      <text x="125" y="14" fontSize="9" fontWeight="bold" fill="#dc2626">Switch (مفتاح)</text>
                      <circle cx="280" cy="90" r="16" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                      <path d="M 272 90 Q 280 80 288 90" fill="none" stroke="#b45309" strokeWidth="2" />
                      <text x="245" y="125" fontSize="9" fontWeight="bold" fill="#854d0e">Lamp 10Ω</text>
                      <circle cx="160" cy="150" r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                      <text x="156" y="154" fontSize="10" fontWeight="bold" fill="#2563eb">A</text>
                      <text x="135" y="172" fontSize="9" fontWeight="bold" fill="#2563eb" fontFamily="monospace">I = 0.90 A</text>
                    </svg>
                  )}

                  {guide.diagramType === 'ac_rlc' && (
                    <svg viewBox="0 0 320 180" className="w-full h-auto">
                      <rect width="320" height="180" fill="#f8fafc" rx="8" />
                      <rect x="40" y="30" width="240" height="120" rx="8" fill="none" stroke="#0f172a" strokeWidth="2.5" />
                      <circle cx="40" cy="90" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
                      <path d="M 33 90 Q 40 82 47 90 T 47 90" fill="none" stroke="#0f172a" strokeWidth="2" />
                      <text x="12" y="94" fontSize="9" fontWeight="bold" fontFamily="monospace">AC 10V</text>
                      <rect x="80" y="24" width="30" height="12" fill="#ef4444" rx="2" />
                      <text x="82" y="18" fontSize="9" fontWeight="bold" fill="#ef4444">R = 10Ω</text>
                      <path d="M 150 30 Q 158 16 166 30 Q 174 16 182 30 Q 190 16 198 30" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                      <text x="155" y="16" fontSize="9" fontWeight="bold" fill="#2563eb">L = 100mH</text>
                      <line x1="280" y1="75" x2="280" y2="87" stroke="#0f172a" strokeWidth="2.5" />
                      <line x1="270" y1="87" x2="290" y2="87" stroke="#059669" strokeWidth="3" />
                      <line x1="270" y1="93" x2="290" y2="93" stroke="#059669" strokeWidth="3" />
                      <line x1="280" y1="93" x2="280" y2="105" stroke="#0f172a" strokeWidth="2.5" />
                      <text x="240" y="105" fontSize="9" fontWeight="bold" fill="#059669">C = 10μF</text>
                      <rect x="80" y="125" width="160" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" />
                      <text x="90" y="141" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#0f172a">f₀ = 1 / (2π√LC) ≈ 159Hz</text>
                    </svg>
                  )}

                  {guide.diagramType === 'fourier_waves' && (
                    <svg viewBox="0 0 320 180" className="w-full h-auto">
                      <rect width="320" height="180" fill="#f8fafc" rx="8" />
                      <path d="M 30 90 L 30 40 L 150 40 L 150 140 L 270 140 L 270 90" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
                      <path d="M 30 90 Q 90 20 150 90 T 270 90" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                      <path d="M 30 90 Q 50 60 70 90 T 110 90 T 150 90 T 190 90 T 230 90 T 270 90" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                      <circle cx="50" cy="165" r="4" fill="#2563eb" />
                      <text x="60" y="168" fontSize="9" fontWeight="bold" fontFamily="monospace">A1 (Fundamental)</text>
                      <circle cx="160" cy="165" r="4" fill="#ef4444" />
                      <text x="170" y="168" fontSize="9" fontWeight="bold" fontFamily="monospace">A3 (3rd Harmonic)</text>
                    </svg>
                  )}

                  {guide.diagramType !== 'dc_circuit' && guide.diagramType !== 'ac_rlc' && guide.diagramType !== 'fourier_waves' && (
                    <div className="p-4 bg-neutral-50 rounded-lg text-center space-y-2">
                      <div className="font-mono text-xs font-bold text-neutral-800">
                        {isEn ? guide.targetDiagramTitleEn : guide.targetDiagramTitle}
                      </div>
                      <div className="text-[11px] font-serif text-neutral-600">
                        {isEn
                          ? 'Follow the component checklist and build steps to assemble this circuit in PhET.'
                          : 'اتبع قائمة المكونات وخطوات البناء أدناه لتجميع هذه الدائرة في محاكي PhET بدقة.'}
                      </div>
                    </div>
                  )}
                </div>

                {/* Component Checklist */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold text-neutral-700 block">
                    {isEn ? 'Required Components List:' : 'قائمة المكونات المطلوبة للتوصيل:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {(isEn ? guide.componentListEn : guide.componentList).map((comp, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-xs font-mono bg-white p-2 rounded-lg border border-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Result Physical Meaning */}
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200 text-xs font-serif leading-relaxed text-neutral-800">
                  <span className="font-bold text-black block font-mono text-[11px] mb-1">
                    {isEn ? 'Expected Physical Outcome:' : 'الشرح الفيزيائي للنتيجة النهائية:'}
                  </span>
                  {isEn ? guide.finalResultExplanationEn : guide.finalResultExplanation}
                </div>
              </div>
            )}

            {/* TAB 3: STEP-BY-STEP CONSTRUCTION GUIDE */}
            {activeTab === 'steps' && (
              <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">
                <div className="flex items-center gap-1.5 text-neutral-900 font-headline font-bold text-xs sm:text-sm">
                  <ListOrdered className="w-4 h-4 text-blue-600" />
                  <h4>{isEn ? 'Step-by-Step Construction Guide' : 'خطوات بناء وتركيب الدائرة في المحاكي'}</h4>
                </div>

                <div className="space-y-2.5 font-serif text-xs sm:text-sm">
                  {(isEn ? guide.stepsEn : guide.steps).map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-neutral-200">
                      <span className="w-6 h-6 rounded-full bg-black text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <p className="text-neutral-800 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: VERIFIED REAL YOUTUBE VIDEO WALKTHROUGH */}
            {activeTab === 'video' && (
              <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-neutral-200 pb-2.5">
                  <div className="flex items-center gap-1.5 text-neutral-900 font-headline font-bold text-xs sm:text-sm">
                    <Video className="w-4 h-4 text-red-600" />
                    <h4>{isEn ? guide.videoTitleEn : guide.videoTitle}</h4>
                  </div>

                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono font-bold text-red-600 hover:text-red-700 flex items-center gap-1 bg-red-50 border border-red-200 px-2 py-1 rounded"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isEn ? 'Watch on YouTube' : 'مشاهدة على YouTube'}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Real YouTube Embed Player */}
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-neutral-300 bg-black shadow-xs">
                  <iframe
                    src={embedUrl}
                    title={guide.videoTitle || 'Educational Video'}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Video Description & Simple physical takeaway */}
                <div className="p-3 bg-white border border-neutral-200 rounded-xl space-y-1.5 font-serif text-xs text-neutral-800">
                  <span className="font-bold text-black block font-mono text-[11px]">
                    {isEn ? 'Video Content & Focus Points:' : 'محتوى الفيديو والنقاط الجوهرية:'}
                  </span>
                  <p className="leading-relaxed">
                    {isEn ? guide.videoDescriptionEn || guide.finalResultExplanationEn : guide.videoDescription || guide.finalResultExplanation}
                  </p>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between gap-2 text-xs font-serif text-amber-950">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      {isEn
                        ? 'If the embedded player is blocked by network or browser privacy rules, open directly:'
                        : 'إذا كان متصفحك يمنع تشغيل الفيديو داخل الإطار، يمكنك فتحه مباشرة بنقرة واحدة:'}
                    </span>
                  </div>
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-[10px] px-2.5 py-1.5 rounded-lg shrink-0 flex items-center gap-1"
                  >
                    <span>YouTube ↗</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
