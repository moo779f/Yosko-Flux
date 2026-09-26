import React, { useState } from 'react';
import katex from 'katex';
import { Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';

interface MathFormulaProps {
  rawEquation: string;
  language?: Language;
}

interface DiagramData {
  title: string;
  titleEn: string;
  type: string;
  description: string;
  descriptionEn: string;
  variables: { symbol: string; meaning: string; meaningEn: string }[];
}

export const MathFormula: React.FC<MathFormulaProps> = ({ rawEquation, language = 'ar' }) => {
  const isEn = language === 'en';
  const [showDiagram, setShowDiagram] = useState(true);

  // Extract label if present (e.g. [قانون أوم] or [\text{...}])
  let label = '';
  let cleanLatex = rawEquation.trim();

  // Match bracketed label like [قانون أوم] or [\text{...}]
  const bracketMatch = cleanLatex.match(/\[(.*?)\]/);
  if (bracketMatch) {
    label = bracketMatch[1].replace(/\\text\{|\}/g, '').trim();
    cleanLatex = cleanLatex.replace(/\[.*?\]/, '').trim();
  }

  // Remove trailing \quad
  cleanLatex = cleanLatex.replace(/\\quad/g, ' ').trim();

  // Detect which formula this is to show an authentic visual drawing / schematic
  const getDiagramData = (eq: string): DiagramData | null => {
    const lower = eq.toLowerCase();
    
    // Ohm's Law
    if (lower.includes('v = i') || lower.includes('i = \\frac{p}{v}') || lower.includes('أوم') || label.includes('أوم')) {
      return {
        title: 'مخطط دائرة قانون أوم ومثلث الحساب',
        titleEn: "Ohm's Law Circuit Schematic & Triangle",
        type: 'ohm',
        description: 'يبين التناسب الطردي بين الجهد والتيار وعكسياً مع المقاومة في مسار مغلق.',
        descriptionEn: 'Shows direct proportionality between voltage and current, inverse to resistance.',
        variables: [
          { symbol: 'V', meaning: 'فرق الجهد (فولت - V)', meaningEn: 'Voltage (Volts)' },
          { symbol: 'I', meaning: 'شدة التيار (أمبير - A)', meaningEn: 'Current (Amperes)' },
          { symbol: 'R', meaning: 'المقاومة الكهربائية (أوم - Ω)', meaningEn: 'Resistance (Ohms)' },
        ],
      };
    }

    // Kirchhoff Current Law (KCL)
    if (lower.includes('i_{\\text{in}}') || lower.includes('kcl') || label.includes('kcl') || label.includes('كيرشوف للتيار')) {
      return {
        title: 'مخطط عقدة كيرشوف للتيار (KCL Node)',
        titleEn: "Kirchhoff's Current Law Node (KCL)",
        type: 'kcl',
        description: 'مجموع التيارات الداخلة إلى أي عقدة كهربائية يساوي تماماً مجموع التيارات الخارجة منها حفظاً للشحنة.',
        descriptionEn: 'Sum of currents entering a node equals sum of currents leaving (charge conservation).',
        variables: [
          { symbol: 'I_in', meaning: 'التيارات الداخلة للعقدة', meaningEn: 'Incoming currents' },
          { symbol: 'I_out', meaning: 'التيارات الخارجة من العقدة', meaningEn: 'Outgoing currents' },
          { symbol: 'Node', meaning: 'نقطة تفرع مثالية في الشبكة', meaningEn: 'Junction node' },
        ],
      };
    }

    // Kirchhoff Voltage Law (KVL)
    if (lower.includes('v_{\\text{loop}}') || lower.includes('kvl') || label.includes('kvl') || label.includes('كيرشوف للجهد')) {
      return {
        title: 'مخطط حلقة كيرشوف للجهد (KVL Closed Loop)',
        titleEn: "Kirchhoff's Voltage Law Loop (KVL)",
        type: 'kvl',
        description: 'المجموع الجبري لفروق الجهد الكهربائية في أي مسار أو حلقة مغلقة يساوي صفراً حفظاً للطاقة.',
        descriptionEn: 'Algebraic sum of voltages around any closed circuit loop equals zero.',
        variables: [
          { symbol: 'V_source', meaning: 'جهد المصدر المولد (+)', meaningEn: 'Source voltage (+)' },
          { symbol: 'V_drop', meaning: 'هبوط الجهد عبر الأحمال (-)', meaningEn: 'Load voltage drop (-)' },
          { symbol: 'Σ V', meaning: 'المحصلة تساوي صفراً في المسار المغلق', meaningEn: 'Net sum = 0 in closed loop' },
        ],
      };
    }

    // RLC Resonance
    if (lower.includes('f_0') || lower.includes('x_l = x_c') || lower.includes('2\\pi \\sqrt{l') || label.includes('رنين') || label.includes('resonance')) {
      return {
        title: 'مخطط دائرة الرنين RLC ومنحنى الاستجابة الترددية',
        titleEn: 'RLC Resonant Tank Schematic & Response Curve',
        type: 'rlc',
        description: 'عند تردد الرنين f₀ تتساوى المعاوقة الحثية والسعوية وتلغيان بعضهما، فتنخفض المعاوقة إلى R ويتدفق أقصى تيار.',
        descriptionEn: 'At resonance f0, XL = XC canceling reactances; impedance drops to R and current peaks.',
        variables: [
          { symbol: 'f_0', meaning: 'تردد الرنين الطبيعي (Hz)', meaningEn: 'Resonant frequency (Hz)' },
          { symbol: 'L', meaning: 'معامل الحث الذاتي للملف (هنري - H)', meaningEn: 'Inductance (Henry)' },
          { symbol: 'C', meaning: 'سعة المكثف (فاراد - F)', meaningEn: 'Capacitance (Farad)' },
          { symbol: 'Z_min', meaning: 'المعاوقة الكلية وتساوي R فقط', meaningEn: 'Minimum impedance = R' },
        ],
      };
    }

    // Fourier analysis
    if (lower.includes('fourier') || lower.includes('a_0') || lower.includes('thd') || lower.includes('\\cos(n\\omega') || label.includes('فورييه') || label.includes('fourier')) {
      return {
        title: 'رسم تفكيك وتراكب موجات فورييه (Harmonics Synthesis)',
        titleEn: 'Fourier Harmonic Decomposition Diagram',
        type: 'fourier',
        description: 'تفكيك الموجة المشوهة إلى نغمة أساسية (Fundamental 50Hz) وتوافقيات عليا (3rd, 5th harmonics).',
        descriptionEn: 'Decomposing complex waves into fundamental frequency and higher harmonics.',
        variables: [
          { symbol: 'f(t)', meaning: 'الإشارة الموجية الزمنية المركبة', meaningEn: 'Composite time signal' },
          { symbol: 'a_0', meaning: 'مركبة التيار المستمر DC المتوسط', meaningEn: 'Average DC component' },
          { symbol: 'n · ω_0', meaning: 'الترددات التوافقية المضاعفة', meaningEn: 'Harmonic frequencies' },
          { symbol: 'THD', meaning: 'معامل التشوه التوافقي الكلي', meaningEn: 'Total Harmonic Distortion' },
        ],
      };
    }

    // Power formulas (P, Q, S)
    if (lower.includes('\\cos(\\phi)') || lower.includes('p =') || lower.includes('q =') || lower.includes('p_{loss}') || lower.includes('active') || label.includes('قدرة')) {
      return {
        title: 'مخطط مثلث القدرة الكهربائية (Power Triangle: P, Q, S)',
        titleEn: 'Electrical Power Triangle (P, Q, S)',
        type: 'power',
        description: 'يوضح العلاقة المتعامدة بين القدرة الفعالة P المنجزة للشغل والقدرة غير الفعالة Q المغناطيسية.',
        descriptionEn: 'Shows orthogonal relation between active power P and magnetizing reactive power Q.',
        variables: [
          { symbol: 'P', meaning: 'القدرة الفعالة الحقيقية (واط - Watt)', meaningEn: 'Active Power (Watts)' },
          { symbol: 'Q', meaning: 'القدرة غير الفعالة (فار - VAR)', meaningEn: 'Reactive Power (VAR)' },
          { symbol: 'S', meaning: 'القدرة الظاهرية الكلية (فولت·أمبير - VA)', meaningEn: 'Apparent Power (VA)' },
          { symbol: 'cos(φ)', meaning: 'معامل القدرة (Power Factor)', meaningEn: 'Power Factor' },
        ],
      };
    }

    return null;
  };

  const diagram = getDiagramData(rawEquation);

  // Render KaTeX HTML safely
  let renderedMathHtml = '';
  try {
    renderedMathHtml = katex.renderToString(cleanLatex, {
      displayMode: true,
      throwOnError: false,
    });
  } catch (err) {
    renderedMathHtml = `<span class="font-mono">${cleanLatex}</span>`;
  }

  return (
    <div className="my-3 sm:my-4 rounded-xl border border-neutral-300 bg-white shadow-xs overflow-hidden">
      {/* Formula Header Bar with Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 bg-neutral-50/90 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          {label ? (
            <span className="bg-black text-white text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
              {label}
            </span>
          ) : (
            <span className="bg-neutral-800 text-white text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-md">
              {isEn ? 'Equation' : 'صيغة ومعادلة'}
            </span>
          )}

          {diagram && (
            <span className="text-[11px] font-mono text-neutral-600 font-semibold hidden sm:inline">
              {isEn ? diagram.titleEn : diagram.title}
            </span>
          )}
        </div>

        {diagram && (
          <button
            onClick={() => setShowDiagram(!showDiagram)}
            className="flex items-center gap-1 text-[11px] font-mono font-bold text-neutral-700 hover:text-black cursor-pointer bg-white border border-neutral-200 px-2 py-0.5 rounded hover:bg-neutral-100 transition-colors"
          >
            <Eye className="w-3 h-3 text-neutral-500" />
            <span>{showDiagram ? (isEn ? 'Hide Diagram' : 'إخفاء الرسم') : (isEn ? 'Show Diagram' : 'عرض الرسم التخطيطي')}</span>
            {showDiagram ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}
      </div>

      {/* Main Formula Presentation (Real KaTeX Typography) */}
      <div className="p-4 sm:p-5 text-center overflow-x-auto bg-neutral-50/30">
        <div
          className="inline-block text-base sm:text-xl lg:text-2xl text-black font-serif select-all"
          dangerouslySetInnerHTML={{ __html: renderedMathHtml }}
        />
      </div>

      {/* Authentic Illustrated Diagram & Variable Map (صيغة برسم وكتبة حقيقية) */}
      {diagram && showDiagram && (
        <div className="border-t border-neutral-200 bg-white p-3.5 sm:p-5 space-y-3 sm:space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left/Center: Visual Schematic Drawing */}
            <div className="w-full md:w-3/5 bg-neutral-50 border border-neutral-200 rounded-xl p-3 flex items-center justify-center">
              {diagram.type === 'ohm' && (
                <svg viewBox="0 0 360 140" className="w-full max-w-[320px] h-auto text-black">
                  {/* Circuit loop */}
                  <rect x="30" y="20" width="300" height="100" rx="8" fill="none" stroke="#000" strokeWidth="2.5" />
                  
                  {/* Battery (Left) */}
                  <line x1="30" y1="55" x2="30" y2="85" stroke="#fff" strokeWidth="6" />
                  <line x1="20" y1="60" x2="40" y2="60" stroke="#000" strokeWidth="3" />
                  <line x1="25" y1="70" x2="35" y2="70" stroke="#000" strokeWidth="4" />
                  <line x1="20" y1="80" x2="40" y2="80" stroke="#000" strokeWidth="3" />
                  <text x="5" y="73" fontSize="12" fontWeight="bold" fontFamily="monospace">V (+)</text>

                  {/* Current Arrow (Top) */}
                  <path d="M 120 20 L 170 20" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow)" />
                  <polygon points="175,20 165,16 165,24" fill="#2563eb" />
                  <text x="135" y="14" fontSize="11" fill="#2563eb" fontWeight="bold" fontFamily="monospace">I (Current)</text>

                  {/* Resistor (Right) */}
                  <line x1="330" y1="45" x2="330" y2="95" stroke="#fff" strokeWidth="6" />
                  <path d="M 330 45 L 320 52 L 340 60 L 320 68 L 340 76 L 320 84 L 330 92 L 330 95" fill="none" stroke="#dc2626" strokeWidth="3" />
                  <text x="275" y="73" fontSize="12" fill="#dc2626" fontWeight="bold" fontFamily="monospace">R (Ω)</text>

                  {/* Ohm Triangle callout on bottom right */}
                  <circle cx="180" cy="70" r="28" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="160" y1="70" x2="200" y2="70" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="180" y1="70" x2="180" y2="92" stroke="#64748b" strokeWidth="1.5" />
                  <text x="175" y="64" fontSize="11" fontWeight="bold">V</text>
                  <text x="166" y="85" fontSize="10" fontWeight="bold" fill="#2563eb">I</text>
                  <text x="186" y="85" fontSize="10" fontWeight="bold" fill="#dc2626">R</text>
                </svg>
              )}

              {diagram.type === 'kcl' && (
                <svg viewBox="0 0 360 130" className="w-full max-w-[320px] h-auto">
                  {/* Central Node */}
                  <circle cx="180" cy="65" r="10" fill="#000" />
                  <text x="170" y="90" fontSize="11" fontWeight="bold" fontFamily="monospace">Node</text>

                  {/* Incoming Current 1 */}
                  <line x1="60" y1="30" x2="170" y2="60" stroke="#16a34a" strokeWidth="3" />
                  <polygon points="135,50 120,40 125,55" fill="#16a34a" />
                  <text x="65" y="25" fontSize="11" fill="#16a34a" fontWeight="bold" fontFamily="monospace">I₁ (in)</text>

                  {/* Incoming Current 2 */}
                  <line x1="60" y1="100" x2="170" y2="70" stroke="#16a34a" strokeWidth="3" />
                  <polygon points="135,80 125,75 120,90" fill="#16a34a" />
                  <text x="65" y="115" fontSize="11" fill="#16a34a" fontWeight="bold" fontFamily="monospace">I₂ (in)</text>

                  {/* Outgoing Current 3 */}
                  <line x1="190" y1="65" x2="300" y2="35" stroke="#dc2626" strokeWidth="3" />
                  <polygon points="260,46 245,45 250,58" fill="#dc2626" />
                  <text x="270" y="25" fontSize="11" fill="#dc2626" fontWeight="bold" fontFamily="monospace">I₃ (out)</text>

                  {/* Outgoing Current 4 */}
                  <line x1="190" y1="65" x2="300" y2="95" stroke="#dc2626" strokeWidth="3" />
                  <polygon points="260,84 250,72 245,85" fill="#dc2626" />
                  <text x="270" y="115" fontSize="11" fill="#dc2626" fontWeight="bold" fontFamily="monospace">I₄ (out)</text>

                  {/* Equilibrium Badge */}
                  <rect x="130" y="10" width="100" height="20" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
                  <text x="138" y="24" fontSize="10" fontWeight="bold" fontFamily="monospace">I₁ + I₂ = I₃ + I₄</text>
                </svg>
              )}

              {diagram.type === 'kvl' && (
                <svg viewBox="0 0 360 130" className="w-full max-w-[320px] h-auto">
                  <rect x="50" y="20" width="260" height="90" rx="8" fill="none" stroke="#000" strokeWidth="2.5" />
                  
                  {/* Source V_s */}
                  <circle cx="50" cy="65" r="14" fill="#fff" stroke="#000" strokeWidth="2" />
                  <text x="44" y="69" fontSize="10" fontWeight="bold">Vs</text>
                  
                  {/* Drop R1 */}
                  <rect x="145" y="14" width="40" height="12" fill="#ef4444" rx="2" />
                  <text x="150" y="11" fontSize="10" fontWeight="bold" fill="#ef4444">VR1 (-)</text>
                  
                  {/* Drop R2 */}
                  <rect x="304" y="50" width="12" height="30" fill="#ef4444" rx="2" />
                  <text x="260" y="68" fontSize="10" fontWeight="bold" fill="#ef4444">VR2 (-)</text>

                  {/* Clockwise Loop Arrow */}
                  <path d="M 160 55 A 18 18 0 1 1 159 56" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="3,2" />
                  <polygon points="178,55 174,48 182,48" fill="#2563eb" />
                  <text x="140" y="80" fontSize="9" fontWeight="bold" fill="#2563eb" fontFamily="monospace">Σ V = 0</text>
                </svg>
              )}

              {diagram.type === 'rlc' && (
                <svg viewBox="0 0 360 130" className="w-full max-w-[320px] h-auto">
                  {/* Resonance Curve */}
                  <path d="M 50 110 Q 180 10 310 110" fill="none" stroke="#2563eb" strokeWidth="3" />
                  <line x1="50" y1="115" x2="310" y2="115" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="50" y1="115" x2="50" y2="15" stroke="#64748b" strokeWidth="1.5" />
                  
                  {/* Resonance Peak Line */}
                  <line x1="180" y1="20" x2="180" y2="115" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,3" />
                  <circle cx="180" cy="20" r="4" fill="#ef4444" />
                  
                  <text x="165" y="14" fontSize="11" fontWeight="bold" fill="#ef4444" fontFamily="monospace">I_max (f₀)</text>
                  <text x="168" y="127" fontSize="10" fontWeight="bold" fontFamily="monospace">f = f₀</text>
                  <text x="210" y="45" fontSize="9" fontWeight="bold" fill="#059669">XL = XC ⇒ Z = R</text>
                  
                  <text x="10" y="60" fontSize="10" fontWeight="bold" fill="#2563eb">I (A)</text>
                  <text x="280" y="127" fontSize="10" fontWeight="bold">f (Hz)</text>
                </svg>
              )}

              {diagram.type === 'fourier' && (
                <svg viewBox="0 0 360 130" className="w-full max-w-[320px] h-auto">
                  {/* Fundamental Sine (1st) */}
                  <path d="M 30 65 Q 90 10 150 65 T 270 65" fill="none" stroke="#2563eb" strokeWidth="2" />
                  <text x="280" y="55" fontSize="10" fontWeight="bold" fill="#2563eb">1st: 50Hz</text>

                  {/* 3rd Harmonic */}
                  <path d="M 30 65 Q 50 35 70 65 T 110 65 T 150 65 T 190 65 T 230 65 T 270 65" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,2" />
                  <text x="280" y="75" fontSize="10" fontWeight="bold" fill="#dc2626">3rd: 150Hz</text>

                  {/* Target Square Wave envelope */}
                  <path d="M 30 65 L 30 25 L 150 25 L 150 105 L 270 105 L 270 65" fill="none" stroke="#000" strokeWidth="1.5" opacity="0.4" />
                  
                  <text x="80" y="20" fontSize="9" fontWeight="bold" fill="#64748b">تراكب التوافقيات يعطي موجة مربعة</text>
                </svg>
              )}

              {diagram.type === 'power' && (
                <svg viewBox="0 0 360 130" className="w-full max-w-[320px] h-auto">
                  {/* Right triangle: P (horizontal), Q (vertical), S (hypotenuse) */}
                  <polygon points="60,105 260,105 260,25" fill="#f8fafc" stroke="#000" strokeWidth="2" />
                  
                  {/* Angle arc */}
                  <path d="M 95 105 A 35 35 0 0 0 92 92" fill="none" stroke="#2563eb" strokeWidth="2" />
                  <text x="100" y="100" fontSize="11" fontWeight="bold" fill="#2563eb">φ</text>

                  {/* Labels */}
                  <text x="140" y="122" fontSize="11" fontWeight="bold" fill="#16a34a" fontFamily="monospace">P (Active: Watt)</text>
                  <text x="268" y="70" fontSize="11" fontWeight="bold" fill="#dc2626" fontFamily="monospace">Q (Reactive: VAR)</text>
                  <text x="130" y="55" fontSize="11" fontWeight="bold" fill="#2563eb" fontFamily="monospace">S (Apparent: VA)</text>

                  {/* Right angle marker */}
                  <rect x="245" y="90" width="15" height="15" fill="none" stroke="#94a3b8" />
                </svg>
              )}
            </div>

            {/* Right/Info: Variables Breakdown & Explanation */}
            <div className="w-full md:w-2/5 space-y-2 text-start font-serif">
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                {isEn ? diagram.descriptionEn : diagram.description}
              </p>

              <div className="pt-2 border-t border-neutral-100 space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase text-neutral-400 block">
                  {isEn ? 'Variable Definition:' : 'تفسير دلالات الرموز:'}
                </span>
                <div className="space-y-1 font-mono text-[11px]">
                  {diagram.variables.map((v, vIdx) => (
                    <div key={vIdx} className="flex items-center gap-1.5 text-neutral-800">
                      <span className="font-bold bg-neutral-100 text-black px-1.5 py-0.2 rounded border border-neutral-200">
                        {v.symbol}
                      </span>
                      <span className="text-[11px] font-serif text-neutral-600">
                        {isEn ? v.meaningEn : v.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
