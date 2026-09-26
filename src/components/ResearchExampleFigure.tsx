import React from 'react';
import { Sparkles, Info, ZoomIn } from 'lucide-react';
import { Language } from '../types';

export interface ExampleFigureData {
  id: string;
  type:
    | 'phasor_rotation'
    | 'power_triangle_grid'
    | 'transmission_stability'
    | 'inverter_pwm_waveform'
    | 'fourier_spectrum_bars'
    | 'lc_filter_cleanup'
    | 'electron_drift_node'
    | 'rlc_energy_slosh'
    | 'solar_duck_curve_bess'
    | 'grid_transmission_stages'
    | 'loss_comparison_bars'
    | 'radio_tuner_circuit'
    | 'pv_cell_pn_junction'
    | 'solar_iv_curve'
    | 'battery_solar_cycle'
    | 'grid_frequency_balance'
    | 'sine_wave_geometry'
    | 'capacitor_inductor_fields'
    | 'multiloop_kirchhoff';
  figureNumber: string;
  title: string;
  titleEn: string;
  geekNote: string;
  geekNoteEn: string;
  caption: string;
  captionEn: string;
}

interface ResearchExampleFigureProps {
  figure: ExampleFigureData;
  language?: Language;
}

export const ResearchExampleFigure: React.FC<ResearchExampleFigureProps> = ({
  figure,
  language = 'ar',
}) => {
  const isEn = language === 'en';

  return (
    <div className="my-5 sm:my-7 border border-neutral-300 rounded-2xl bg-white shadow-2xs overflow-hidden">
      {/* Figure Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 sm:px-4 py-2.5 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-black text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 rounded">
            {figure.figureNumber}
          </span>
          <h4 className="font-headline font-bold text-xs sm:text-sm text-neutral-100">
            {isEn ? figure.titleEn : figure.title}
          </h4>
        </div>
        <span className="font-mono text-[10px] sm:text-xs text-neutral-400 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          {isEn ? 'Obsessed Geek Schematic' : 'رسم هندسي توضيحي خاص بالبحث'}
        </span>
      </div>

      {/* SVG Canvas Rendering */}
      <div className="p-3 sm:p-5 bg-neutral-50/70 border-b border-neutral-200 flex justify-center">
        {/* 1. Phasor Rotation & Phase Angle */}
        {figure.type === 'phasor_rotation' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            {/* Left: Complex Plane & Phasor Circle */}
            <g transform="translate(110, 110)">
              {/* Axis */}
              <line x1="-90" y1="0" x2="90" y2="0" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="0" y1="-90" x2="0" y2="90" stroke="#cbd5e1" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="70" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="75" y="-6" fontSize="9" fill="#64748b" fontFamily="monospace">Real (Re)</text>
              <text x="6" y="-75" fontSize="9" fill="#64748b" fontFamily="monospace">Imag (Im)</text>

              {/* Voltage Phasor V (at 0 deg) */}
              <line x1="0" y1="0" x2="70" y2="0" stroke="#0f172a" strokeWidth="3" markerEnd="url(#arrow-black)" />
              <polygon points="70,0 62,-4 62,4" fill="#0f172a" />
              <text x="50" y="-8" fontSize="11" fontWeight="bold" fill="#0f172a">V (220V)</text>

              {/* Current Phasor I (lagging by -35 deg) */}
              <line x1="0" y1="0" x2="48" y2="34" stroke="#2563eb" strokeWidth="3" />
              <polygon points="48,34 38,32 44,25" fill="#2563eb" />
              <text x="42" y="48" fontSize="11" fontWeight="bold" fill="#2563eb">I (Current)</text>

              {/* Angle arc φ */}
              <path d="M 35 0 A 35 35 0 0 1 28 20" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="36" y="16" fontSize="10" fontWeight="bold" fill="#ef4444">φ = 35°</text>

              {/* Rotation direction ω */}
              <path d="M -50 -50 A 70 70 0 0 1 0 -70" fill="none" stroke="#059669" strokeWidth="1.5" strokeDasharray="2,2" />
              <polygon points="0,-70 -6,-66 -4,-74" fill="#059669" />
              <text x="-40" y="-65" fontSize="10" fontWeight="bold" fill="#059669">ω = 2π(50Hz)</text>
            </g>

            {/* Right: Real-time sine waves showing current lag */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="270" height="180" fill="#f8fafc" rx="8" stroke="#cbd5e1" />
              <line x1="10" y1="90" x2="260" y2="90" stroke="#cbd5e1" strokeWidth="1.5" />
              
              {/* Voltage Sine Wave V(t) */}
              <path
                d="M 15 90 Q 55 10 95 90 T 175 90 T 255 90"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.5"
              />
              {/* Current Sine Wave I(t) - shifted right (lagging) */}
              <path
                d="M 15 125 Q 35 155 55 125 Q 95 45 135 125 T 215 125 T 255 125"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4,2"
              />

              {/* Time delay indicator Δt */}
              <line x1="95" y1="90" x2="115" y2="90" stroke="#ef4444" strokeWidth="3" />
              <text x="85" y="80" fontSize="9" fontWeight="bold" fill="#ef4444">تأخر الطور (Lag)</text>

              {/* Legend */}
              <rect x="15" y="10" width="10" height="4" fill="#0f172a" />
              <text x="30" y="15" fontSize="9" fontWeight="bold" fill="#0f172a">موجة الجهد V(t)</text>
              <rect x="140" y="10" width="10" height="4" fill="#2563eb" />
              <text x="155" y="15" fontSize="9" fontWeight="bold" fill="#2563eb">موجة التيار I(t)</text>
            </g>
          </svg>
        )}

        {/* 2. Power Triangle: P, Q, S with Capacitor Bank Compensation */}
        {figure.type === 'power_triangle_grid' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            {/* Power Triangle */}
            <g transform="translate(60, 30)">
              {/* Active Power P (Horizontal Base) */}
              <line x1="0" y1="140" x2="260" y2="140" stroke="#059669" strokeWidth="4" />
              <polygon points="260,140 250,135 250,145" fill="#059669" />
              <text x="80" y="160" fontSize="12" fontWeight="bold" fill="#059669">القدرة الفعالة P = 100 kW (شغل حقيقي)</text>

              {/* Original Reactive Power Q1 (Vertical Right) */}
              <line x1="260" y1="140" x2="260" y2="20" stroke="#ef4444" strokeWidth="3" strokeDasharray="3,2" />
              <text x="270" y="70" fontSize="11" fontWeight="bold" fill="#ef4444">Q_old = 75 kVAR</text>

              {/* Original Apparent Power S1 */}
              <line x1="0" y1="140" x2="260" y2="20" stroke="#64748b" strokeWidth="2.5" />
              <text x="90" y="70" fontSize="11" fontWeight="bold" fill="#64748b">S_old = 125 kVA (PF = 0.80)</text>

              {/* Capacitor Compensation Vector Qc (Injecting Capacitive VAR downwards) */}
              <line x1="260" y1="20" x2="260" y2="90" stroke="#2563eb" strokeWidth="4" />
              <polygon points="260,90 256,80 264,80" fill="#2563eb" />
              <text x="270" y="55" fontSize="10" fontWeight="bold" fill="#2563eb">↓ بنك المكثفات Qc = 55 kVAR</text>

              {/* New Reduced Reactive Power Q_new */}
              <line x1="260" y1="140" x2="260" y2="90" stroke="#0f172a" strokeWidth="4" />
              <text x="270" y="120" fontSize="11" fontWeight="bold" fill="#0f172a">Q_new = 20 kVAR</text>

              {/* New Reduced Apparent Power S_new */}
              <line x1="0" y1="140" x2="260" y2="90" stroke="#0f172a" strokeWidth="3" />
              <text x="100" y="105" fontSize="11" fontWeight="bold" fill="#0f172a">S_new = 102 kVA (PF = 0.98! 🎉)</text>

              {/* Angle φ reduction */}
              <path d="M 40 140 A 40 40 0 0 0 35 125" fill="none" stroke="#059669" strokeWidth="2" />
              <text x="45" y="130" fontSize="9" fontWeight="bold" fill="#059669">φ_new = 11°</text>
            </g>
          </svg>
        )}

        {/* 3. Transmission Stability Curve P(δ) */}
        {figure.type === 'transmission_stability' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(60, 20)">
              {/* Axes */}
              <line x1="0" y1="160" x2="400" y2="160" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="160" x2="0" y2="10" stroke="#0f172a" strokeWidth="2" />
              <text x="330" y="180" fontSize="11" fontWeight="bold" fill="#0f172a">زاوية الطور δ (درجة)</text>
              <text x="-10" y="10" fontSize="11" fontWeight="bold" fill="#0f172a" textAnchor="end">القدرة P</text>

              {/* Sine Stability Curve P = Pmax * sin(delta) */}
              <path
                d="M 0 160 Q 100 20 200 20 Q 300 20 400 160"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
              />

              {/* Safe Operating Region (0 to 35 deg) */}
              <rect x="0" y="20" width="80" height="140" fill="#10b981" fillOpacity="0.15" />
              <text x="10" y="40" fontSize="10" fontWeight="bold" fill="#047857">منطقة الأمان المستقر</text>
              <text x="10" y="55" fontSize="9" fill="#047857">δ ≤ 35° (هامش مناعة)</text>

              {/* Peak Pmax at 90 deg */}
              <line x1="200" y1="20" x2="200" y2="160" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,3" />
              <circle cx="200" cy="20" r="5" fill="#dc2626" />
              <text x="160" y="14" fontSize="11" fontWeight="bold" fill="#dc2626">أقصى حد نظري P_max (δ = 90°)</text>

              {/* Unstable Runaway Region (> 90 deg) */}
              <rect x="200" y="20" width="200" height="140" fill="#ef4444" fillOpacity="0.12" />
              <text x="240" y="90" fontSize="11" fontWeight="bold" fill="#b91c1c">منطقة الانهيار وعدم الاستقرار ⚠</text>
              <text x="240" y="105" fontSize="9" fill="#b91c1c">انزلاق أقطاب المولد (Pole Slipping)</text>

              {/* Operating Point */}
              <circle cx="70" cy="95" r="6" fill="#059669" />
              <text x="80" y="95" fontSize="10" fontWeight="bold" fill="#059669">نقطة التشغيل الفعلية (δ = 28°)</text>
            </g>
          </svg>
        )}

        {/* 4. Inverter PWM vs Filtered Sine */}
        {figure.type === 'inverter_pwm_waveform' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            {/* Top: Raw PWM Pulse Width Modulation pulses */}
            <g transform="translate(30, 25)">
              <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#dc2626">1. نبضات التقطيع السريع من العاكس (Raw Inverter PWM Pulses)</text>
              <rect x="0" y="10" width="460" height="60" fill="#fef2f2" rx="6" stroke="#fca5a5" />
              
              {/* PWM train */}
              <path
                d="M 10 50 L 20 50 L 20 20 L 26 20 L 26 50 L 40 50 L 40 20 L 52 20 L 52 50 L 70 50 L 70 20 L 90 20 L 90 50 L 110 50 L 110 20 L 140 20 L 140 50 L 170 50 L 170 20 L 195 20 L 195 50 L 230 50 L 230 20 L 245 20 L 245 50 L 270 50 L 270 20 L 280 20 L 280 50 L 300 50 L 300 20 L 306 20 L 306 50 L 330 50 L 330 20 L 334 20 L 334 50 L 450 50"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
              />
              <text x="350" y="35" fontSize="9" fontWeight="bold" fill="#dc2626">تردد عالي 10kHz (تشوه كبير THD)</text>
            </g>

            {/* Bottom: Filtered Pure Sine Wave (50 Hz) */}
            <g transform="translate(30, 115)">
              <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#059669">2. الموجة الجيبية النقية بعد الفلتر (Clean 50Hz AC Sine Wave)</text>
              <rect x="0" y="10" width="460" height="70" fill="#f0fdf4" rx="6" stroke="#86efac" />
              <line x1="10" y1="45" x2="450" y2="45" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />

              <path
                d="M 20 45 Q 80 15 140 45 T 260 45 T 380 45 T 440 45"
                fill="none"
                stroke="#059669"
                strokeWidth="3"
              />
              <text x="320" y="65" fontSize="10" fontWeight="bold" fill="#059669">موجة نقية THD &lt; 3% آمنة للأجهزة</text>
            </g>
          </svg>
        )}

        {/* 5. Fourier Spectrum Bars */}
        {figure.type === 'fourier_spectrum_bars' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(50, 30)">
              {/* Axes */}
              <line x1="0" y1="140" x2="420" y2="140" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="140" x2="0" y2="0" stroke="#0f172a" strokeWidth="2" />
              <text x="340" y="160" fontSize="10" fontWeight="bold" fill="#0f172a">التردد (Hz)</text>
              <text x="-10" y="0" fontSize="10" fontWeight="bold" fill="#0f172a" textAnchor="end">السعة (%)</text>

              {/* Fundamental 50Hz (100%) */}
              <rect x="50" y="20" width="30" height="120" fill="#2563eb" rx="3" />
              <text x="45" y="14" fontSize="10" fontWeight="bold" fill="#2563eb">100%</text>
              <text x="45" y="155" fontSize="9" fontWeight="bold" fill="#0f172a">50Hz (أساسي)</text>

              {/* 3rd Harmonic 150Hz (33%) */}
              <rect x="140" y="100" width="25" height="40" fill="#ef4444" rx="3" />
              <text x="140" y="95" fontSize="10" fontWeight="bold" fill="#ef4444">33%</text>
              <text x="135" y="155" fontSize="9" fontWeight="bold" fill="#ef4444">150Hz (H3)</text>

              {/* 5th Harmonic 250Hz (20%) */}
              <rect x="220" y="116" width="25" height="24" fill="#f59e0b" rx="3" />
              <text x="220" y="111" fontSize="10" fontWeight="bold" fill="#f59e0b">20%</text>
              <text x="215" y="155" fontSize="9" fontWeight="bold" fill="#f59e0b">250Hz (H5)</text>

              {/* 7th Harmonic 350Hz (14%) */}
              <rect x="300" y="123" width="25" height="17" fill="#8b5cf6" rx="3" />
              <text x="300" y="118" fontSize="10" fontWeight="bold" fill="#8b5cf6">14%</text>
              <text x="295" y="155" fontSize="9" fontWeight="bold" fill="#8b5cf6">350Hz (H7)</text>

              {/* THD Badge */}
              <rect x="230" y="15" width="180" height="40" rx="6" fill="#fef2f2" stroke="#f87171" />
              <text x="240" y="32" fontSize="10" fontWeight="bold" fill="#991b1b">معامل التشوه الكلي THD:</text>
              <text x="240" y="47" fontSize="11" fontWeight="black" fontFamily="monospace" fill="#dc2626">THD = √(Σ Vn² / V1) = 41.2%</text>
            </g>
          </svg>
        )}

        {/* 6. LC Low-Pass Smoothing Filter Schematic */}
        {figure.type === 'lc_filter_cleanup' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(40, 30)">
              {/* Input from Inverter (Left) */}
              <text x="10" y="30" fontSize="11" fontWeight="bold" fill="#dc2626">دخل العاكس (PWM مشوه)</text>
              <line x1="20" y1="70" x2="90" y2="70" stroke="#0f172a" strokeWidth="3" />
              <line x1="20" y1="130" x2="90" y2="130" stroke="#0f172a" strokeWidth="3" />

              {/* Series Inductor L (Blocks high frequencies XL = 2πfL) */}
              <path
                d="M 90 70 Q 105 45 120 70 Q 135 45 150 70 Q 165 45 180 70 Q 195 45 210 70"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
              />
              <text x="120" y="40" fontSize="11" fontWeight="bold" fill="#2563eb">ملف حث L = 2.5mH</text>
              <text x="100" y="24" fontSize="9" fill="#64748b">(يعيق الترددات العالية XL يرتفع)</text>

              {/* Wire to capacitor and output */}
              <line x1="210" y1="70" x2="320" y2="70" stroke="#0f172a" strokeWidth="3" />
              <line x1="90" y1="130" x2="320" y2="130" stroke="#0f172a" strokeWidth="3" />

              {/* Parallel Capacitor C (Shunts remaining high-frequency noise to ground) */}
              <line x1="260" y1="70" x2="260" y2="92" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="245" y1="92" x2="275" y2="92" stroke="#059669" strokeWidth="4" />
              <line x1="245" y1="100" x2="275" y2="100" stroke="#059669" strokeWidth="4" />
              <line x1="260" y1="100" x2="260" y2="130" stroke="#0f172a" strokeWidth="2.5" />
              <text x="285" y="98" fontSize="11" fontWeight="bold" fill="#059669">مكثف C = 50μF</text>
              <text x="285" y="112" fontSize="9" fill="#64748b">(يسرب الترددات للأرضي XC ينخفض)</text>

              {/* Output pure sinusoidal AC (Right) */}
              <line x1="320" y1="70" x2="410" y2="70" stroke="#059669" strokeWidth="3" />
              <line x1="320" y1="130" x2="410" y2="130" stroke="#059669" strokeWidth="3" />
              <text x="330" y="55" fontSize="11" fontWeight="bold" fill="#059669">خرج نقي 220V / 50Hz</text>
              <circle cx="410" cy="70" r="4" fill="#059669" />
              <circle cx="410" cy="130" r="4" fill="#059669" />
            </g>
          </svg>
        )}

        {/* 7. Electron Drift & KCL Node */}
        {figure.type === 'electron_drift_node' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(60, 20)">
              {/* Inflow Wire 1 */}
              <line x1="20" y1="30" x2="180" y2="90" stroke="#2563eb" strokeWidth="5" />
              <polygon points="120,68 108,60 112,74" fill="#2563eb" />
              <text x="30" y="25" fontSize="11" fontWeight="bold" fill="#2563eb">التيار الداخل I_1 = 6.0 A</text>

              {/* Inflow Wire 2 */}
              <line x1="20" y1="150" x2="180" y2="90" stroke="#2563eb" strokeWidth="4" />
              <polygon points="120,112 112,106 108,120" fill="#2563eb" />
              <text x="30" y="165" fontSize="11" fontWeight="bold" fill="#2563eb">التيار الداخل I_2 = 4.0 A</text>

              {/* Central Kirchhoff Node */}
              <circle cx="180" cy="90" r="14" fill="#0f172a" />
              <text x="180" y="94" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">Σ=0</text>
              <text x="180" y="125" fontSize="10" fontWeight="bold" fill="#0f172a" textAnchor="middle">عقدة كيرشوف (Node)</text>

              {/* Outflow Wire 3 */}
              <line x1="180" y1="90" x2="360" y2="90" stroke="#059669" strokeWidth="6" />
              <polygon points="290,90 275,83 275,97" fill="#059669" />
              <text x="240" y="75" fontSize="12" fontWeight="black" fill="#059669">التيار الخارج I_out = 10.0 A</text>
              <text x="240" y="115" fontSize="9" fill="#64748b">I_out = I_1 + I_2 (حفظ شحنة الإلكترونات)</text>

              {/* Flowing electrons visual dots */}
              <circle cx="60" cy="45" r="3" fill="#60a5fa" />
              <circle cx="100" cy="60" r="3" fill="#60a5fa" />
              <circle cx="60" cy="135" r="3" fill="#60a5fa" />
              <circle cx="220" cy="90" r="3.5" fill="#34d399" />
              <circle cx="260" cy="90" r="3.5" fill="#34d399" />
              <circle cx="320" cy="90" r="3.5" fill="#34d399" />
            </g>
          </svg>
        )}

        {/* 8. RLC Resonance Energy Sloshing */}
        {figure.type === 'rlc_energy_slosh' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(40, 20)">
              {/* Loop */}
              <rect x="30" y="20" width="380" height="120" rx="10" fill="none" stroke="#0f172a" strokeWidth="3" />

              {/* Capacitor C (Left) */}
              <line x1="20" y1="70" x2="40" y2="70" stroke="#059669" strokeWidth="4" />
              <line x1="20" y1="90" x2="40" y2="90" stroke="#059669" strokeWidth="4" />
              <text x="5" y="115" fontSize="11" fontWeight="bold" fill="#059669">مكثف C</text>
              <text x="5" y="128" fontSize="8" fill="#059669">طاقة كهربائية ½CV²</text>

              {/* Inductor L (Right) */}
              <path
                d="M 410 50 Q 430 65 410 80 Q 430 95 410 110"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
              />
              <text x="375" y="130" fontSize="11" fontWeight="bold" fill="#2563eb">ملف حث L</text>
              <text x="365" y="143" fontSize="8" fill="#2563eb">طاقة مغناطيسية ½LI²</text>

              {/* Resistor R (Top) */}
              <rect x="180" y="14" width="40" height="12" fill="#ef4444" rx="2" />
              <text x="180" y="8" fontSize="10" fontWeight="bold" fill="#ef4444">المقاومة R = 5Ω</text>

              {/* Sloshing Arrow (Center Animation Idea) */}
              <path d="M 120 80 Q 220 50 320 80" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,2" />
              <path d="M 320 90 Q 220 120 120 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,2" />
              <text x="160" y="88" fontSize="11" fontWeight="black" fill="#b45309">تبادل الطاقة بين L و C</text>
              <text x="175" y="102" fontSize="9" fill="#78350f">كالمرجوحة أو البندول تماماً</text>

              {/* Frequency chip */}
              <rect x="120" y="150" width="200" height="24" rx="5" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="130" y="166" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#0f172a">f₀ = 1 / (2π√LC) [تردد الرنين]</text>
            </g>
          </svg>
        )}

        {/* 9. Solar Duck Curve & BESS Battery */}
        {figure.type === 'solar_duck_curve_bess' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(50, 25)">
              {/* Axes */}
              <line x1="0" y1="140" x2="420" y2="140" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="140" x2="0" y2="0" stroke="#0f172a" strokeWidth="2" />
              <text x="350" y="160" fontSize="10" fontWeight="bold" fill="#0f172a">ساعات اليوم (24h)</text>
              <text x="-10" y="0" fontSize="10" fontWeight="bold" fill="#0f172a" textAnchor="end">الطلب GW</text>

              {/* Time stamps */}
              <text x="0" y="155" fontSize="9" fill="#64748b">12am</text>
              <text x="100" y="155" fontSize="9" fill="#64748b">6am</text>
              <text x="200" y="155" fontSize="9" fill="#0284c7" fontWeight="bold">12pm (ظهر)</text>
              <text x="300" y="155" fontSize="9" fill="#ea580c" fontWeight="bold">6pm (غروب)</text>
              <text x="390" y="155" fontSize="9" fill="#64748b">11pm</text>

              {/* Gross Demand without solar */}
              <path
                d="M 0 100 Q 100 80 200 70 Q 300 40 400 90"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="4,2"
              />
              <text x="30" y="65" fontSize="9" fill="#64748b">الطلب الإجمالي للأحمال</text>

              {/* The Duck Belly (Net Load dips due to solar surplus) */}
              <path
                d="M 0 100 Q 100 85 140 105 Q 200 135 250 110 Q 300 30 350 45 Q 400 90 420 100"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3.5"
              />

              {/* Solar Noon Belly Callout */}
              <circle cx="200" cy="135" r="5" fill="#f59e0b" />
              <text x="160" y="125" fontSize="9" fontWeight="bold" fill="#d97706">بطن البطة (فائض شمسي ضخم)</text>

              {/* Evening Ramp / Duck Neck Callout */}
              <circle cx="300" cy="30" r="5" fill="#dc2626" />
              <text x="240" y="24" fontSize="10" fontWeight="bold" fill="#dc2626">عنق البطة: قفزة استهلاك حادة!</text>

              {/* BESS Battery Dispatch Area */}
              <rect x="280" y="45" width="70" height="35" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
              <text x="285" y="66" fontSize="9" fontWeight="bold" fill="#047857">⚡ تفريغ BESS لإنقاذ التردد</text>
            </g>
          </svg>
        )}

        {/* 10. Complete Grid Transmission Stages (Plant to Home) */}
        {figure.type === 'grid_transmission_stages' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(15, 30)">
              {/* Stage 1: Power Plant */}
              <rect x="10" y="60" width="70" height="50" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="45" y="80" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0369a1">محطة التوليد</text>
              <text x="45" y="96" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0f172a">11 kV</text>

              {/* Arrow 1 */}
              <line x1="80" y1="85" x2="110" y2="85" stroke="#0f172a" strokeWidth="2" />

              {/* Stage 2: Step-up Transformer */}
              <rect x="110" y="55" width="70" height="60" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
              <text x="145" y="75" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#b45309">محول رافع</text>
              <text x="145" y="90" fontSize="8" textAnchor="middle" fill="#78350f">Step-Up</text>
              <text x="145" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#b45309">400 kV</text>

              {/* Arrow 2 */}
              <line x1="180" y1="85" x2="210" y2="85" stroke="#0f172a" strokeWidth="2" />

              {/* Stage 3: High Voltage Pylons Transmission Line */}
              <rect x="210" y="45" width="85" height="80" rx="4" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
              <text x="252" y="70" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1e293b">أبراج الجهد الفائق</text>
              <text x="252" y="85" fontSize="8" textAnchor="middle" fill="#059669">تيار نقل ضئيل I</text>
              <text x="252" y="100" fontSize="8" textAnchor="middle" fill="#059669">فقد I²R شبه منعدم!</text>

              {/* Arrow 3 */}
              <line x1="295" y1="85" x2="325" y2="85" stroke="#0f172a" strokeWidth="2" />

              {/* Stage 4: Substation Step-down */}
              <rect x="325" y="55" width="70" height="60" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
              <text x="360" y="75" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#b45309">محول خافض</text>
              <text x="360" y="90" fontSize="8" textAnchor="middle" fill="#78350f">Step-Down</text>
              <text x="360" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#b45309">11kV / 220V</text>

              {/* Arrow 4 */}
              <line x1="395" y1="85" x2="425" y2="85" stroke="#0f172a" strokeWidth="2" />

              {/* Stage 5: Domestic Consumers Home */}
              <rect x="425" y="60" width="65" height="50" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="457" y="80" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#15803d">بيتك ومصنعك</text>
              <text x="457" y="96" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0f172a">220 V</text>
            </g>
          </svg>
        )}

        {/* 11. I²R Loss Comparison: 220V vs 400kV */}
        {figure.type === 'loss_comparison_bars' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(40, 25)">
              {/* Scenario 1: Low Voltage 220V (Huge Loss) */}
              <text x="0" y="15" fontSize="11" fontWeight="bold" fill="#dc2626">نقل 100MW بجهد منخفض 220V (كارثة حرارية!):</text>
              <rect x="0" y="25" width="420" height="25" fill="#fef2f2" stroke="#f87171" rx="4" />
              <rect x="0" y="25" width="400" height="25" fill="#ef4444" rx="4" />
              <text x="15" y="42" fontSize="10" fontWeight="bold" fill="#ffffff">التيار = 454,545 أمبير → تنصهر الأسلاك وتتبدد 99% من الطاقة كحرارة I²R!</text>

              {/* Scenario 2: High Voltage 400,000V (Minimal Loss) */}
              <text x="0" y="85" fontSize="11" fontWeight="bold" fill="#059669">نقل 100MW بجهد فائق 400,000V (كفاءة خارقة):</text>
              <rect x="0" y="95" width="420" height="25" fill="#f0fdf4" stroke="#86efac" rx="4" />
              <rect x="0" y="95" width="8" height="25" fill="#10b981" rx="4" />
              <text x="15" y="112" fontSize="10" fontWeight="bold" fill="#065f46">التيار = 250 أمبير فقط! الفقد الحراري انخفض بأكثر من 99.99%!</text>

              {/* Golden Rule Callout */}
              <rect x="0" y="135" width="420" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="15" y="152" fontSize="10" fontWeight="bold" fill="#0f172a">القاعدة الهندسية الذهبية: P_loss = I² · R</text>
              <text x="15" y="167" fontSize="9" fill="#475569">رفع الجهد بمقدار (N) مرة يخفض التيار (N) مرة، ويخفض الفقد الحراري بمقدار (N²) مرة!</text>
            </g>
          </svg>
        )}

        {/* 12. Radio Antenna LC Tuner Circuit */}
        {figure.type === 'radio_tuner_circuit' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            
            <g transform="translate(50, 20)">
              {/* Antenna on the Left */}
              <line x1="20" y1="10" x2="20" y2="70" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="10" y1="10" x2="20" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="30" y1="10" x2="20" y2="30" stroke="#0f172a" strokeWidth="2" />
              <text x="0" y="5" fontSize="10" fontWeight="bold" fill="#0f172a">الهوائي (Antenna)</text>
              <text x="-15" y="90" fontSize="8" fill="#64748b">يستقبل ملايين الترددات</text>

              {/* Loop to LC tank */}
              <line x1="20" y1="70" x2="100" y2="70" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="20" y1="140" x2="100" y2="140" stroke="#0f172a" strokeWidth="2.5" />

              {/* Parallel Inductor L */}
              <path
                d="M 100 70 Q 115 85 100 100 Q 115 115 100 130 Q 115 145 100 140"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
              />
              <text x="70" y="105" fontSize="10" fontWeight="bold" fill="#2563eb">L</text>

              {/* Parallel Variable Capacitor C_var (with arrow through it) */}
              <line x1="160" y1="70" x2="160" y2="98" stroke="#0f172a" strokeWidth="2" />
              <line x1="150" y1="98" x2="170" y2="98" stroke="#059669" strokeWidth="3" />
              <line x1="150" y1="105" x2="170" y2="105" stroke="#059669" strokeWidth="3" />
              <line x1="160" y1="105" x2="160" y2="140" stroke="#0f172a" strokeWidth="2" />
              {/* Arrow indicating variable capacitor */}
              <line x1="145" y1="120" x2="175" y2="85" stroke="#dc2626" strokeWidth="2" />
              <polygon points="175,85 167,86 172,92" fill="#dc2626" />
              <text x="180" y="105" fontSize="10" fontWeight="bold" fill="#059669">C_var (مكثف متغير)</text>

              {/* Wires connecting top and bottom */}
              <line x1="100" y1="70" x2="260" y2="70" stroke="#0f172a" strokeWidth="2.5" />
              <line x1="100" y1="140" x2="260" y2="140" stroke="#0f172a" strokeWidth="2.5" />

              {/* Demodulator & Speaker Output (Right) */}
              <rect x="260" y="60" width="70" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
              <text x="295" y="85" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0f172a">مكبر الصوت</text>
              <text x="295" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#059669">102.4 MHz</text>
              <text x="295" y="125" fontSize="8" textAnchor="middle" fill="#64748b">محطة نقية تماماً!</text>
            </g>
          </svg>
        )}

        {/* 13. Multiloop Kirchhoff Circuit */}
        {figure.type === 'multiloop_kirchhoff' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(50, 25)">
              {/* Outer frame */}
              <rect x="30" y="20" width="360" height="130" fill="none" stroke="#0f172a" strokeWidth="2.5" />
              {/* Center branch */}
              <line x1="210" y1="20" x2="210" y2="150" stroke="#0f172a" strokeWidth="2.5" />

              {/* Node A (top junction) */}
              <circle cx="210" cy="20" r="5" fill="#dc2626" />
              <text x="210" y="10" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#dc2626">عقدة A (KCL: I₁ + I₂ = I₃)</text>

              {/* Node B (bottom junction) */}
              <circle cx="210" cy="150" r="5" fill="#dc2626" />
              <text x="210" y="168" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#dc2626">عقدة B</text>

              {/* Left Battery V1 = 12V */}
              <rect x="25" y="65" width="10" height="40" fill="#ffffff" />
              <line x1="20" y1="75" x2="40" y2="75" stroke="#059669" strokeWidth="3" />
              <line x1="26" y1="85" x2="34" y2="85" stroke="#059669" strokeWidth="3" />
              <text x="8" y="83" fontSize="9" fontWeight="bold" fill="#059669">V₁=12V</text>

              {/* Left Resistor R1 = 4Ω */}
              <rect x="100" y="14" width="40" height="12" fill="#ef4444" rx="2" />
              <text x="120" y="8" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#ef4444">R₁ = 4Ω</text>

              {/* Right Battery V2 = 6V */}
              <rect x="385" y="65" width="10" height="40" fill="#ffffff" />
              <line x1="380" y1="75" x2="400" y2="75" stroke="#059669" strokeWidth="3" />
              <line x1="386" y1="85" x2="394" y2="85" stroke="#059669" strokeWidth="3" />
              <text x="408" y="83" fontSize="9" fontWeight="bold" fill="#059669">V₂=6V</text>

              {/* Right Resistor R2 = 2Ω */}
              <rect x="280" y="14" width="40" height="12" fill="#ef4444" rx="2" />
              <text x="300" y="8" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#ef4444">R₂ = 2Ω</text>

              {/* Center Load Resistor R3 = 6Ω */}
              <rect x="204" y="70" width="12" height="40" fill="#2563eb" rx="2" />
              <text x="225" y="93" fontSize="9" fontWeight="bold" fill="#2563eb">R₃ = 6Ω</text>

              {/* Current arrows */}
              <text x="80" y="40" fontSize="9" fontWeight="bold" fill="#0f172a">→ I₁</text>
              <text x="330" y="40" fontSize="9" fontWeight="bold" fill="#0f172a">← I₂</text>
              <text x="190" y="85" fontSize="9" fontWeight="bold" fill="#0f172a">↓ I₃</text>
            </g>
          </svg>
        )}

        {/* 14. Capacitor & Inductor Fields */}
        {figure.type === 'capacitor_inductor_fields' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(30, 20)">
              {/* Left: Capacitor Electric Field */}
              <g transform="translate(10, 10)">
                <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#059669">المكثف C: تخزين في مجال كهربائي</text>
                <rect x="0" y="15" width="200" height="135" fill="#f0fdf4" rx="8" stroke="#86efac" />
                {/* Plate + */}
                <rect x="35" y="35" width="10" height="85" fill="#22c55e" rx="2" />
                <text x="40" y="55" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">+</text>
                <text x="40" y="80" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">+</text>
                <text x="40" y="105" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">+</text>
                {/* Plate - */}
                <rect x="155" y="35" width="10" height="85" fill="#64748b" rx="2" />
                <text x="160" y="55" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">-</text>
                <text x="160" y="80" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">-</text>
                <text x="160" y="105" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">-</text>
                {/* Electric field lines E */}
                <line x1="48" y1="50" x2="152" y2="50" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                <line x1="48" y1="78" x2="152" y2="78" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                <line x1="48" y1="105" x2="152" y2="105" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                <text x="100" y="73" fontSize="10" fontWeight="bold" fill="#059669" textAnchor="middle">المجال E</text>
                <text x="100" y="140" fontSize="9" fontWeight="bold" fill="#065f46" textAnchor="middle">E = ½ C V²</text>
              </g>

              {/* Right: Inductor Magnetic Field */}
              <g transform="translate(240, 10)">
                <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#2563eb">الملف L: تخزين في مجال مغناطيسي</text>
                <rect x="0" y="15" width="200" height="135" fill="#eff6ff" rx="8" stroke="#93c5fd" />
                {/* Coil turns */}
                <path d="M 40 80 Q 55 50 70 80 Q 85 50 100 80 Q 115 50 130 80 Q 145 50 160 80" fill="none" stroke="#2563eb" strokeWidth="4" />
                {/* Magnetic field loops */}
                <ellipse cx="100" cy="80" rx="75" ry="35" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,2" />
                <text x="100" y="40" fontSize="10" fontWeight="bold" fill="#2563eb" textAnchor="middle">المجال B (حلقات مغناطيسية)</text>
                <text x="100" y="140" fontSize="9" fontWeight="bold" fill="#1e40af" textAnchor="middle">E = ½ L I²</text>
              </g>
            </g>
          </svg>
        )}

        {/* 15. Sine Wave Geometry & Projection */}
        {figure.type === 'sine_wave_geometry' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(40, 20)">
              {/* Rotating circle (left) */}
              <circle cx="80" cy="90" r="60" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="10" y1="90" x2="150" y2="90" stroke="#94a3b8" strokeWidth="1" />
              <line x1="80" y1="20" x2="80" y2="160" stroke="#94a3b8" strokeWidth="1" />
              {/* Rotating radius vector at 45 deg */}
              <line x1="80" y1="90" x2="122" y2="48" stroke="#0f172a" strokeWidth="3" />
              <circle cx="122" cy="48" r="4" fill="#ef4444" />
              <text x="88" y="75" fontSize="9" fontWeight="bold" fill="#0f172a">V_peak</text>
              {/* Horizontal projection line */}
              <line x1="122" y1="48" x2="230" y2="48" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* Sine Wave (right) */}
              <g transform="translate(180, 0)">
                <line x1="0" y1="90" x2="280" y2="90" stroke="#0f172a" strokeWidth="1.5" />
                <path d="M 0 90 Q 40 10 80 90 T 160 90 T 240 90" fill="none" stroke="#2563eb" strokeWidth="3" />
                {/* Instantaneous point */}
                <circle cx="50" cy="48" r="4" fill="#ef4444" />
                <text x="55" y="42" fontSize="9" fontWeight="bold" fill="#ef4444">v(t) = V_pk · sin(ωt)</text>
                {/* Amplitude Vpeak */}
                <line x1="40" y1="10" x2="40" y2="90" stroke="#0f172a" strokeWidth="1" strokeDasharray="2,2" />
                <text x="45" y="25" fontSize="8" fontWeight="bold">V_peak (311V)</text>
                {/* RMS Level */}
                <line x1="0" y1="35" x2="260" y2="35" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,2" />
                <text x="180" y="30" fontSize="9" fontWeight="bold" fill="#059669">V_rms = 220V (0.707 V_pk)</text>
                {/* Period T */}
                <line x1="0" y1="110" x2="160" y2="110" stroke="#64748b" strokeWidth="1.5" />
                <text x="80" y="125" fontSize="8" textAnchor="middle" fill="#64748b">دورة كاملة T = 20ms (f = 50Hz)</text>
              </g>
            </g>
          </svg>
        )}

        {/* 16. Photovoltaic Cell P-N Junction */}
        {figure.type === 'pv_cell_pn_junction' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(40, 20)">
              {/* Sunlight Photons */}
              <text x="20" y="10" fontSize="10" fontWeight="bold" fill="#ea580c">أشعة الشمس (فوتونات h·f)</text>
              <line x1="40" y1="15" x2="70" y2="45" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <line x1="80" y1="15" x2="110" y2="45" stroke="#f59e0b" strokeWidth="2.5" />
              <line x1="120" y1="15" x2="150" y2="45" stroke="#f59e0b" strokeWidth="2.5" />

              {/* Silicon layers */}
              {/* n-type top layer */}
              <rect x="30" y="50" width="380" height="25" fill="#bfdbfe" stroke="#3b82f6" rx="2" />
              <text x="40" y="66" fontSize="9" fontWeight="bold" fill="#1e40af">طبقة N (سيليكون مشوب بالفوسفور - إلكترونات حرة فائضة)</text>

              {/* Depletion Region (built-in electric field) */}
              <rect x="30" y="75" width="380" height="25" fill="#fef08a" stroke="#ca8a04" rx="1" />
              <text x="140" y="91" fontSize="9" fontWeight="bold" fill="#854d0e">منطقة النضوب: مجال كهربائي داخلي E ⚡</text>

              {/* p-type bottom layer */}
              <rect x="30" y="100" width="380" height="40" fill="#fed7aa" stroke="#f97316" rx="2" />
              <text x="40" y="125" fontSize="9" fontWeight="bold" fill="#9a3412">طبقة P (سيليكون مشوب بالبورون - فجوات موجبة Holes)</text>

              {/* External circuit loop */}
              <line x1="30" y1="62" x2="10" y2="62" stroke="#0f172a" strokeWidth="2" />
              <line x1="10" y1="62" x2="10" y2="160" stroke="#0f172a" strokeWidth="2" />
              <line x1="10" y1="160" x2="200" y2="160" stroke="#0f172a" strokeWidth="2" />
              {/* Bulb */}
              <circle cx="215" cy="160" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              <text x="215" y="163" fontSize="8" fontWeight="bold" textAnchor="middle">مصباح</text>
              <line x1="225" y1="160" x2="430" y2="160" stroke="#0f172a" strokeWidth="2" />
              <line x1="430" y1="160" x2="430" y2="120" stroke="#0f172a" strokeWidth="2" />
              <line x1="430" y1="120" x2="410" y2="120" stroke="#0f172a" strokeWidth="2" />
              <text x="120" y="175" fontSize="8" fontWeight="bold" fill="#059669">تدفق تيار مستمر DC (حوالي 0.55V لكل خلية)</text>
            </g>
          </svg>
        )}

        {/* 17. Solar Panel I-V and P-V Curve */}
        {figure.type === 'solar_iv_curve' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(60, 20)">
              {/* Axes */}
              <line x1="0" y1="150" x2="380" y2="150" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="150" x2="0" y2="10" stroke="#0f172a" strokeWidth="2" />
              <text x="320" y="168" fontSize="10" fontWeight="bold" fill="#0f172a">الجهد Voltage (V)</text>
              <text x="-10" y="10" fontSize="10" fontWeight="bold" fill="#0f172a" textAnchor="end">التيار / القدرة</text>

              {/* I-V curve (Blue) */}
              <path d="M 0 35 L 220 35 Q 280 40 310 150" fill="none" stroke="#2563eb" strokeWidth="3" />
              <text x="80" y="30" fontSize="9" fontWeight="bold" fill="#2563eb">منحنى التيار I-V (أمبير)</text>
              <circle cx="0" cy="35" r="4" fill="#2563eb" />
              <text x="5" y="48" fontSize="8" fill="#2563eb">I_sc = 10A</text>
              <circle cx="310" cy="150" r="4" fill="#2563eb" />
              <text x="300" y="142" fontSize="8" fill="#2563eb">V_oc = 40V</text>

              {/* P-V curve (Amber) */}
              <path d="M 0 150 Q 150 145 250 25 Q 290 100 310 150" fill="none" stroke="#d97706" strokeWidth="3" strokeDasharray="4,2" />
              <text x="140" y="65" fontSize="9" fontWeight="bold" fill="#d97706">منحنى القدرة P-V (واط)</text>

              {/* MPP Peak Point */}
              <circle cx="250" cy="25" r="6" fill="#dc2626" />
              <text x="210" y="18" fontSize="10" fontWeight="black" fill="#dc2626">نقطة أقصى قدرة MPP (400W)</text>
              <line x1="250" y1="25" x2="250" y2="150" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3" />
              <text x="235" y="162" fontSize="8" fontWeight="bold" fill="#dc2626">V_mp = 33V</text>
            </g>
          </svg>
        )}

        {/* 18. Battery & Solar Daily Cycle */}
        {figure.type === 'battery_solar_cycle' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(50, 25)">
              <line x1="0" y1="140" x2="400" y2="140" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="140" x2="0" y2="10" stroke="#0f172a" strokeWidth="2" />
              <text x="340" y="158" fontSize="9" fontWeight="bold" fill="#0f172a">ساعات اليوم (24h)</text>
              <text x="0" y="155" fontSize="8" fill="#64748b">12am</text>
              <text x="100" y="155" fontSize="8" fill="#64748b">6am</text>
              <text x="200" y="155" fontSize="8" fill="#d97706" fontWeight="bold">12pm (ظهر)</text>
              <text x="300" y="155" fontSize="8" fill="#ea580c" fontWeight="bold">6pm (غروب)</text>

              {/* Solar bell curve (Amber fill) */}
              <path d="M 100 140 Q 200 15 300 140 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="175" y="50" fontSize="9" fontWeight="bold" fill="#b45309">إنتاج شمسي نهاري</text>

              {/* Battery State of Charge SoC curve */}
              <path d="M 0 100 L 100 115 Q 200 40 280 25 L 300 35 Q 350 70 400 105" fill="none" stroke="#16a34a" strokeWidth="3" />
              <text x="220" y="20" fontSize="9" fontWeight="bold" fill="#15803d">شحن البطارية SoC (100%)</text>
              <text x="320" y="70" fontSize="8" fontWeight="bold" fill="#047857">تفريغ مسائي للحمل</text>
            </g>
          </svg>
        )}

        {/* 19. Grid 50Hz Frequency Balance Scale */}
        {figure.type === 'grid_frequency_balance' && (
          <svg viewBox="0 0 520 220" className="w-full max-w-[500px] h-auto">
            <rect width="520" height="220" fill="#ffffff" rx="12" stroke="#e2e8f0" />
            <g transform="translate(60, 30)">
              {/* Balance base fulcrum */}
              <polygon points="200,100 180,140 220,140" fill="#0f172a" />
              <line x1="40" y1="100" x2="360" y2="100" stroke="#0f172a" strokeWidth="4" />

              {/* Center 50.00 Hz Gauge Badge */}
              <rect x="160" y="20" width="80" height="40" rx="6" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
              <text x="200" y="38" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#86efac">تردد الشبكة</text>
              <text x="200" y="52" fontSize="13" fontWeight="black" textAnchor="middle" fill="#22c55e" fontFamily="monospace">50.00 Hz</text>

              {/* Left pan: Generation */}
              <line x1="80" y1="100" x2="80" y2="120" stroke="#0284c7" strokeWidth="2" />
              <rect x="40" y="120" width="80" height="35" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              <text x="80" y="135" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0369a1">التوليد Generation</text>
              <text x="80" y="148" fontSize="8" textAnchor="middle" fill="#0f172a">محطات + شمس + رياح</text>

              {/* Right pan: Demand */}
              <line x1="320" y1="100" x2="320" y2="120" stroke="#ea580c" strokeWidth="2" />
              <rect x="280" y="120" width="80" height="35" rx="4" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
              <text x="320" y="135" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#c2410c">الاستهلاك Demand</text>
              <text x="320" y="148" fontSize="8" textAnchor="middle" fill="#0f172a">مصانع + منازل + تكييف</text>
            </g>
          </svg>
        )}
      </div>

      {/* Geek Explanatory Box & Caption */}
      <div className="p-3.5 sm:p-4 bg-white space-y-2">
        <div className="flex items-start gap-2 bg-neutral-50 p-2.5 sm:p-3 rounded-xl border border-neutral-200">
          <Info className="w-4 h-4 text-black shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-sans font-medium text-neutral-800 leading-relaxed">
            <span className="font-bold text-black ml-1">
              {isEn ? 'Geek Breakdown:' : 'شرح المهووس للمخطط:'}
            </span>
            {isEn ? figure.geekNoteEn : figure.geekNote}
          </p>
        </div>

        <p className="text-[11px] sm:text-xs font-serif text-neutral-500 italic px-1">
          {isEn ? figure.captionEn : figure.caption}
        </p>
      </div>
    </div>
  );
};
