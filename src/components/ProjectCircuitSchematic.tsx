import React from 'react';
import { Language } from '../types';
import {
  ExternalLink,
  Maximize2,
  Cpu,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface ProjectCircuitSchematicProps {
  projectId: string;
  language: Language;
  simulatorUrl: string;
}

export const ProjectCircuitSchematic: React.FC<ProjectCircuitSchematicProps> = ({
  projectId,
  language,
  simulatorUrl
}) => {
  const isEn = language === 'en';

  // Determine official simulator parameters
  const isCircuitProject = [
    'project-01-voltage-divider',
    'project-02-kirchhoff-laws',
    'project-03-rc-circuit',
    'project-04-rlc-resonance'
  ].includes(projectId);

  // Official Falstad Circuit Simulator Web App URL
  const falstadEmbedUrl = 'https://www.falstad.com/circuit/circuitjs.html';
  
  // Official PhET Simulation URLs for PV and Energy Systems
  const phetSolarUrl = 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html';
  const phetEnergyUrl = 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html';

  const activeEmbedUrl = isCircuitProject
    ? falstadEmbedUrl
    : projectId === 'project-05-photovoltaic-irradiance'
    ? phetSolarUrl
    : phetEnergyUrl;

  const simulatorName = isCircuitProject
    ? 'Falstad Circuit Simulator (circuitjs.html)'
    : projectId === 'project-05-photovoltaic-irradiance'
    ? 'PhET Circuit Construction Kit (DC)'
    : 'PhET Energy Forms & System Changes';

  const simulatorAuthor = isCircuitProject
    ? 'Paul Falstad • Original Educational Circuit Simulator'
    : 'PhET Interactive Simulations • University of Colorado Boulder (CC-BY-4.0)';

  const officialDomain = isCircuitProject
    ? 'https://www.falstad.com/circuit/'
    : 'https://phet.colorado.edu/';

  return (
    <div className="space-y-6 font-serif">
      {/* ============================================================== */}
      {/* 1. SCIENTIFIC SCHEMATIC DIAGRAM (ACADEMIC JOURNAL STYLE)       */}
      {/* IEEE Std 315 / IEC 60617 Standard Presentation                */}
      {/* ============================================================== */}
      <div className="border border-neutral-300 rounded-2xl bg-white shadow-2xs overflow-hidden">
        {/* Academic Figure Top Bar */}
        <div className="bg-neutral-100/80 px-4 sm:px-6 py-3 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2.5 py-0.5 font-serif text-[11px] font-bold uppercase rounded-md tracking-wider">
              {isEn ? 'SCHEMATIC BLUEPRINT' : 'المخطط الهندسي القياسي'}
            </span>
            <span className="font-serif text-xs text-neutral-600 font-semibold">
              IEEE Std 315-1975 / IEC 60617
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-serif text-[11px] text-neutral-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>{isEn ? 'High-Resolution Vector Schematic' : 'رسم متجهي عالي الدقة'}</span>
          </div>
        </div>

        {/* Paper Canvas (Pristine White with Subtle Millimeter Engineering Grid) */}
        <div className="p-4 sm:p-8 bg-white relative flex flex-col items-center justify-center">
          {/* Subtle millimeter graph paper background grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 0.75px, transparent 0.75px)',
              backgroundSize: '16px 16px'
            }}
          />

          {/* PROJECT 01: VOLTAGE DIVIDER SCHEMATIC */}
          {projectId === 'project-01-voltage-divider' && (
            <div className="relative z-10 w-full max-w-xl">
              <svg viewBox="0 0 520 280" className="w-full h-auto drop-shadow-xs">
                {/* Background Box for Schematic boundary */}
                <rect x="10" y="10" width="500" height="260" rx="8" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="1" />

                {/* DC Source Symbol (+10.0 V) */}
                <line x1="80" y1="90" x2="80" y2="120" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="60" y1="120" x2="100" y2="120" stroke="#0f172a" strokeWidth="3" />
                <line x1="68" y1="132" x2="92" y2="132" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="60" y1="144" x2="100" y2="144" stroke="#0f172a" strokeWidth="3" />
                <line x1="68" y1="156" x2="92" y2="156" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="80" y1="156" x2="80" y2="220" stroke="#0f172a" strokeWidth="2.5" />

                {/* Polarity and Source labels */}
                <text x="45" y="116" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="serif">+</text>
                <text x="48" y="160" fill="#0f172a" fontSize="15" fontWeight="bold" fontFamily="serif">-</text>
                <text x="35" y="140" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Vs</text>
                <text x="25" y="176" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">10.0 V DC</text>

                {/* Positive Rail: Source to Ammeter */}
                <line x1="80" y1="90" x2="170" y2="90" stroke="#0f172a" strokeWidth="2.5" />
                {/* Current Arrow on Positive Rail */}
                <polygon points="135,86 145,90 135,94" fill="#0f172a" />
                <text x="125" y="80" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">I = 5.0 mA</text>

                {/* Inline Ammeter (A) */}
                <circle cx="190" cy="90" r="16" fill="#FFFFFF" stroke="#0f172a" strokeWidth="2" />
                <text x="184" y="95" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="serif">A</text>
                <text x="175" y="66" fill="#475569" fontSize="10" fontFamily="serif">Ammeter</text>

                {/* Connection to R1 */}
                <line x1="206" y1="90" x2="270" y2="90" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="270" y1="90" x2="270" y2="105" stroke="#0f172a" strokeWidth="2.5" />

                {/* Top Resistor R1 (IEEE Zigzag standard) */}
                <path
                  d="M 270 105 L 280 110 L 260 118 L 280 126 L 260 134 L 280 142 L 260 150 L 270 155"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="2.5"
                />
                <circle cx="270" cy="105" r="3" fill="#0f172a" />
                <circle cx="270" cy="155" r="3" fill="#0f172a" />
                <text x="290" y="125" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">R₁ = 1.0 kΩ</text>
                <text x="290" y="140" fill="#2563eb" fontSize="11" fontWeight="bold" fontFamily="serif">ΔV₁ = 5.00 V</text>

                {/* Midpoint Node (Vout) */}
                <line x1="270" y1="155" x2="270" y2="175" stroke="#0f172a" strokeWidth="2.5" />
                <circle cx="270" cy="165" r="5" fill="#0f172a" />
                <text x="255" y="169" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">N₁</text>

                {/* Vout measurement branch to Voltmeter */}
                <line x1="270" y1="165" x2="380" y2="165" stroke="#2563eb" strokeWidth="2" strokeDasharray="4,2" />
                <circle cx="380" cy="165" r="16" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
                <text x="375" y="170" fill="#2563eb" fontSize="13" fontWeight="bold" fontFamily="serif">V</text>
                <text x="402" y="162" fill="#2563eb" fontSize="12" fontWeight="bold" fontFamily="serif">Vout = 5.000 V</text>
                <text x="402" y="177" fill="#475569" fontSize="10" fontFamily="serif">(Unloaded Divider)</text>

                {/* Bottom Resistor R2 (IEEE Zigzag standard) */}
                <line x1="270" y1="165" x2="270" y2="180" stroke="#0f172a" strokeWidth="2.5" />
                <path
                  d="M 270 180 L 280 185 L 260 193 L 280 201 L 260 209 L 280 217 L 260 225 L 270 230"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="2.5"
                />
                <circle cx="270" cy="180" r="3" fill="#0f172a" />
                <circle cx="270" cy="230" r="3" fill="#0f172a" />
                <text x="290" y="200" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">R₂ = 1.0 kΩ</text>
                <text x="290" y="215" fill="#2563eb" fontSize="11" fontWeight="bold" fontFamily="serif">ΔV₂ = 5.00 V</text>

                {/* Return to Ground and Source */}
                <line x1="270" y1="230" x2="270" y2="245" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="80" y1="220" x2="80" y2="245" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="80" y1="245" x2="270" y2="245" stroke="#0f172a" strokeWidth="2.5" />

                {/* Ground Reference Symbol */}
                <line x1="175" y1="245" x2="175" y2="255" stroke="#0f172a" strokeWidth="2" />
                <line x1="160" y1="255" x2="190" y2="255" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="166" y1="260" x2="184" y2="260" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="171" y1="265" x2="179" y2="265" stroke="#0f172a" strokeWidth="1" />
                <text x="196" y="260" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="serif">GND (0.0 V)</text>
              </svg>
            </div>
          )}

          {/* PROJECT 02: KIRCHHOFF LAWS SCHEMATIC (DUAL KCL & KVL) */}
          {projectId === 'project-02-kirchhoff-laws' && (
            <div className="relative z-10 w-full max-w-xl">
              <svg viewBox="0 0 520 280" className="w-full h-auto drop-shadow-xs">
                <rect x="10" y="10" width="500" height="260" rx="8" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="1" />

                {/* CIRCUIT A: KCL PARALLEL JUNCTION */}
                <text x="25" y="32" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Figure 2.1: Parallel Branches Current Division (KCL: ΣIin = ΣIout)</text>

                {/* 12V DC Supply */}
                <circle cx="50" cy="110" r="16" fill="#FFFFFF" stroke="#0f172a" strokeWidth="2" />
                <text x="41" y="114" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">12V</text>

                {/* Main Rail with Total Ammeter */}
                <line x1="66" y1="110" x2="130" y2="110" stroke="#0f172a" strokeWidth="2.5" />
                <circle cx="100" cy="110" r="12" fill="#FFFFFF" stroke="#0f172a" strokeWidth="1.5" />
                <text x="96" y="114" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">A</text>
                <text x="75" y="90" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">Itot = 18.0 mA</text>

                {/* Node A (Junction) */}
                <line x1="130" y1="110" x2="170" y2="110" stroke="#0f172a" strokeWidth="2.5" />
                <circle cx="170" cy="110" r="5" fill="#0f172a" />
                <text x="155" y="130" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Node A</text>

                {/* Branch 1 (Top: R1 = 1 kΩ) */}
                <line x1="170" y1="110" x2="170" y2="65" stroke="#0f172a" strokeWidth="2" />
                <line x1="170" y1="65" x2="220" y2="65" stroke="#0f172a" strokeWidth="2" />
                {/* Branch 1 Resistor */}
                <path d="M 220 65 L 227 58 L 237 72 L 247 58 L 257 72 L 267 58 L 274 65" fill="none" stroke="#0f172a" strokeWidth="2" />
                <line x1="274" y1="65" x2="330" y2="65" stroke="#0f172a" strokeWidth="2" />
                <text x="225" y="50" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">R₁ = 1.0 kΩ</text>
                <text x="225" y="90" fill="#16a34a" fontSize="11" fontWeight="bold" fontFamily="serif">I₁ = 12.0 mA</text>

                {/* Branch 2 (Bottom: R2 = 2 kΩ) */}
                <line x1="170" y1="110" x2="170" y2="155" stroke="#0f172a" strokeWidth="2" />
                <line x1="170" y1="155" x2="220" y2="155" stroke="#0f172a" strokeWidth="2" />
                {/* Branch 2 Resistor */}
                <path d="M 220 155 L 227 148 L 237 162 L 247 148 L 257 162 L 267 148 L 274 155" fill="none" stroke="#0f172a" strokeWidth="2" />
                <line x1="274" y1="155" x2="330" y2="155" stroke="#0f172a" strokeWidth="2" />
                <text x="225" y="142" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">R₂ = 2.0 kΩ</text>
                <text x="225" y="180" fill="#2563eb" fontSize="11" fontWeight="bold" fontFamily="serif">I₂ = 6.0 mA</text>

                {/* Node B (Return Junction) */}
                <line x1="330" y1="65" x2="330" y2="110" stroke="#0f172a" strokeWidth="2" />
                <line x1="330" y1="155" x2="330" y2="110" stroke="#0f172a" strokeWidth="2" />
                <circle cx="330" cy="110" r="5" fill="#0f172a" />
                <text x="338" y="114" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Node B</text>

                {/* Return Line & Ground */}
                <line x1="330" y1="110" x2="410" y2="110" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="410" y1="110" x2="410" y2="200" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="410" y1="200" x2="50" y2="200" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="50" y1="200" x2="50" y2="126" stroke="#0f172a" strokeWidth="2.5" />

                {/* KCL Balance Annotation Callout */}
                <rect x="25" y="218" width="470" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <text x="38" y="235" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
                  KCL Equation: Itot = I₁ + I₂ ⟹ 18.0 mA = 12.0 mA + 6.0 mA (Conservation of Electric Charge Verified)
                </text>
                <text x="38" y="250" fill="#475569" fontSize="10" fontFamily="serif">
                  KVL Series Loop: Vs - V₁ - V₂ = 0 ⟹ 12.0 V - 4.0 V - 8.0 V = 0.0 V (Conservation of Energy Verified)
                </text>
              </svg>
            </div>
          )}

          {/* PROJECT 03: RC CIRCUIT DYNAMICS */}
          {projectId === 'project-03-rc-circuit' && (
            <div className="relative z-10 w-full max-w-xl">
              <svg viewBox="0 0 520 280" className="w-full h-auto drop-shadow-xs">
                <rect x="10" y="10" width="500" height="260" rx="8" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="1" />
                <text x="25" y="32" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Figure 3.1: RC Transient Charging Circuit (τ = R × C = 1.00 s)</text>

                {/* 10V DC Power Supply */}
                <line x1="60" y1="90" x2="60" y2="120" stroke="#0f172a" strokeWidth="2" />
                <line x1="45" y1="120" x2="75" y2="120" stroke="#0f172a" strokeWidth="3" />
                <line x1="50" y1="130" x2="70" y2="130" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="60" y1="130" x2="60" y2="200" stroke="#0f172a" strokeWidth="2" />
                <text x="25" y="125" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">10V</text>

                {/* SPDT Switch (t = 0 s) */}
                <line x1="60" y1="90" x2="110" y2="90" stroke="#0f172a" strokeWidth="2.5" />
                <circle cx="110" cy="90" r="3" fill="#0f172a" />
                {/* Switch blade thrown at t=0 */}
                <line x1="110" y1="90" x2="140" y2="76" stroke="#ea580c" strokeWidth="3" />
                <circle cx="145" cy="90" r="3" fill="#0f172a" />
                <text x="105" y="65" fill="#ea580c" fontSize="10" fontWeight="bold" fontFamily="serif">Switch (t=0s)</text>

                {/* Series Resistor R = 1.0 kΩ */}
                <line x1="145" y1="90" x2="185" y2="90" stroke="#0f172a" strokeWidth="2.5" />
                <path d="M 185 90 L 192 82 L 202 98 L 212 82 L 222 98 L 232 82 L 239 90" fill="none" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="239" y1="90" x2="280" y2="90" stroke="#0f172a" strokeWidth="2.5" />
                <text x="195" y="72" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">R = 1.0 kΩ</text>

                {/* Capacitor Node Vc */}
                <circle cx="280" cy="90" r="5" fill="#0f172a" />
                <text x="272" y="75" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Vc(t)</text>

                {/* Voltmeter / Oscilloscope Probe on Capacitor */}
                <line x1="280" y1="90" x2="380" y2="90" stroke="#2563eb" strokeWidth="2" strokeDasharray="4,2" />
                <circle cx="380" cy="90" r="14" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
                <text x="375" y="95" fill="#2563eb" fontSize="12" fontWeight="bold" fontFamily="serif">V</text>
                <text x="402" y="86" fill="#2563eb" fontSize="11" fontWeight="bold" fontFamily="serif">Vc(1τ) = 6.32 V</text>
                <text x="402" y="100" fill="#475569" fontSize="10" fontFamily="serif">Vc(5τ) = 9.93 V</text>

                {/* Parallel-Plate Capacitor C = 1000 µF */}
                <line x1="280" y1="90" x2="280" y2="120" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="260" y1="120" x2="300" y2="120" stroke="#0f172a" strokeWidth="3" />
                <line x1="260" y1="128" x2="300" y2="128" stroke="#0f172a" strokeWidth="3" />
                <line x1="280" y1="128" x2="280" y2="200" stroke="#0f172a" strokeWidth="2.5" />
                <text x="310" y="122" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">C = 1000 µF</text>
                <text x="310" y="136" fill="#475569" fontSize="10" fontFamily="serif">Electrostatic Storage</text>

                {/* Loop Closure & Ground */}
                <line x1="60" y1="200" x2="280" y2="200" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="170" y1="200" x2="170" y2="215" stroke="#0f172a" strokeWidth="2" />
                <line x1="155" y1="215" x2="185" y2="215" stroke="#0f172a" strokeWidth="2" />
                <line x1="162" y1="220" x2="178" y2="220" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="166" y1="225" x2="174" y2="225" stroke="#0f172a" strokeWidth="1" />
                <text x="192" y="220" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="serif">GND (0.0 V)</text>

                {/* Mathematical Equation Ribbon */}
                <rect x="25" y="235" width="470" height="30" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <text x="40" y="254" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
                  Governing Equation: Vc(t) = 10 · (1 - e^(-t / 1.0s)) V | Initial: 0.0 V ⟹ Saturated: 10.0 V
                </text>
              </svg>
            </div>
          )}

          {/* PROJECT 04: SERIES RLC RESONANCE */}
          {projectId === 'project-04-rlc-resonance' && (
            <div className="relative z-10 w-full max-w-xl">
              <svg viewBox="0 0 520 280" className="w-full h-auto drop-shadow-xs">
                <rect x="10" y="10" width="500" height="260" rx="8" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="1" />
                <text x="25" y="32" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Figure 4.1: Series RLC Resonant Tank (f₀ = 503.29 Hz, XL = XC = 31.62 Ω)</text>

                {/* AC Voltage Generator Symbol (~ 10V) */}
                <circle cx="70" cy="115" r="18" fill="#FFFFFF" stroke="#0f172a" strokeWidth="2" />
                <path d="M 60 115 Q 65 106 70 115 Q 75 124 80 115" fill="none" stroke="#0f172a" strokeWidth="2" />
                <text x="35" y="145" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">10V AC</text>
                <text x="30" y="158" fill="#475569" fontSize="9" fontFamily="serif">(Variable f)</text>

                {/* Wire to Series Resistor R */}
                <line x1="88" y1="115" x2="135" y2="115" stroke="#0f172a" strokeWidth="2.5" />
                <path d="M 135 115 L 142 107 L 152 123 L 162 107 L 172 123 L 182 107 L 189 115" fill="none" stroke="#0f172a" strokeWidth="2.5" />
                <text x="145" y="96" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">R = 100 Ω</text>

                {/* Series Inductor (Helical Windings) */}
                <line x1="189" y1="115" x2="225" y2="115" stroke="#0f172a" strokeWidth="2.5" />
                <path
                  d="M 225 115 C 225 95 240 95 240 115 C 240 95 255 95 255 115 C 255 95 270 95 270 115 C 270 95 285 95 285 115"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                />
                <text x="235" y="92" fill="#16a34a" fontSize="11" fontWeight="bold" fontFamily="serif">L = 10.0 mH</text>
                <text x="235" y="135" fill="#475569" fontSize="10" fontFamily="serif">XL = 31.62 Ω</text>

                {/* Series Capacitor (Parallel Plates) */}
                <line x1="285" y1="115" x2="330" y2="115" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="330" y1="102" x2="330" y2="128" stroke="#2563eb" strokeWidth="3" />
                <line x1="338" y1="102" x2="338" y2="128" stroke="#2563eb" strokeWidth="3" />
                <line x1="338" y1="115" x2="395" y2="115" stroke="#0f172a" strokeWidth="2.5" />
                <text x="325" y="92" fill="#2563eb" fontSize="11" fontWeight="bold" fontFamily="serif">C = 10.0 µF</text>
                <text x="325" y="145" fill="#475569" fontSize="10" fontFamily="serif">XC = 31.62 Ω</text>

                {/* Inline Ammeter at Resonance */}
                <circle cx="420" cy="115" r="14" fill="#FFFFFF" stroke="#0f172a" strokeWidth="2" />
                <text x="415" y="120" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">A</text>
                <text x="390" y="88" fill="#ea580c" fontSize="11" fontWeight="bold" fontFamily="serif">Imax = 100 mA</text>

                {/* Loop Closure */}
                <line x1="434" y1="115" x2="470" y2="115" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="470" y1="115" x2="470" y2="190" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="470" y1="190" x2="70" y2="190" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="70" y1="190" x2="70" y2="133" stroke="#0f172a" strokeWidth="2.5" />

                {/* Resonance Phenomenon Box */}
                <rect x="25" y="210" width="470" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <text x="40" y="230" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
                  At Resonance: XL - XC = 0.0 Ω ⟹ Impedance collapses to pure resistance: Z = R = 100.0 Ω
                </text>
                <text x="40" y="248" fill="#475569" fontSize="10" fontFamily="serif">
                  Current reaches absolute maximum (100 mA) with zero phase angle (φ = 0°, Unity Power Factor cosφ = 1.0).
                </text>
              </svg>
            </div>
          )}

          {/* PROJECT 05: PHOTOVOLTAIC IRRADIANCE SCHEMATIC */}
          {projectId === 'project-05-photovoltaic-irradiance' && (
            <div className="relative z-10 w-full max-w-xl">
              <svg viewBox="0 0 520 280" className="w-full h-auto drop-shadow-xs">
                <rect x="10" y="10" width="500" height="260" rx="8" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="1" />
                <text x="25" y="32" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Figure 5.1: Photovoltaic Cell Electrical Schematic & Solar Irradiance Coupling</text>

                {/* Sun Irradiance Wavefront Rays */}
                <path d="M 60 50 L 95 75 M 100 50 L 125 75 M 140 50 L 155 75" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3,2" />
                <polygon points="95,75 87,68 97,64" fill="#f59e0b" />
                <polygon points="125,75 117,68 127,64" fill="#f59e0b" />
                <polygon points="155,75 147,68 157,64" fill="#f59e0b" />
                <text x="50" y="46" fill="#b45309" fontSize="11" fontWeight="bold" fontFamily="serif">Solar Irradiance G (200 - 1000 W/m²)</text>

                {/* PV Module Panel Box (Silicon Crystal Grid) */}
                <rect x="50" y="80" width="160" height="100" rx="4" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                <line x1="103" y1="80" x2="103" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="156" y1="80" x2="156" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="50" y1="130" x2="210" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />
                <text x="75" y="115" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">CS6K-300M</text>
                <text x="75" y="148" fill="#475569" fontSize="10" fontFamily="serif">60 Polycrystalline Cells</text>
                <text x="75" y="162" fill="#0284c7" fontSize="10" fontWeight="bold" fontFamily="serif">Pmax = 300 W (STC)</text>

                {/* Output Terminals with Bypass Diode Protection */}
                <line x1="210" y1="105" x2="300" y2="105" stroke="#dc2626" strokeWidth="2.5" />
                <text x="215" y="98" fill="#dc2626" fontSize="10" fontWeight="bold" fontFamily="serif">(+) Vmp = 32.5 V</text>

                <line x1="210" y1="155" x2="300" y2="155" stroke="#2563eb" strokeWidth="2.5" />
                <text x="215" y="170" fill="#2563eb" fontSize="10" fontWeight="bold" fontFamily="serif">(-) Imp = 9.23 A</text>

                {/* MPPT Converter Block */}
                <rect x="300" y="85" width="170" height="90" rx="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                <text x="320" y="112" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">MPPT Solar Inverter</text>
                <text x="320" y="130" fill="#16a34a" fontSize="10" fontWeight="bold" fontFamily="serif">Efficiency: η = 97.5%</text>
                <text x="320" y="146" fill="#475569" fontSize="10" fontFamily="serif">Voc = 39.8 V | Isc = 9.83 A</text>
                <text x="320" y="162" fill="#475569" fontSize="10" fontFamily="serif">Pout = G/1000 × 300 W</text>

                {/* Explanatory Ribbon */}
                <rect x="25" y="200" width="470" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <text x="40" y="222" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
                  Manufacturer Datasheet Reference: Canadian Solar CS6K-300M (Standard Test Conditions: 1000 W/m², 25°C, AM1.5)
                </text>
                <text x="40" y="240" fill="#475569" fontSize="10" fontFamily="serif">
                  Current scales linearly with sunlight irradiance (I ∝ G), while operating voltage remains relatively constant (~32.5 V).
                </text>
                <text x="40" y="254" fill="#475569" fontSize="10" fontFamily="serif">
                  Resulting power at 200 W/m² drops to 60.0 W, and at 500 W/m² yields 150.0 W.
                </text>
              </svg>
            </div>
          )}

          {/* PROJECT 06: SOLAR BATTERY LOAD SYSTEM */}
          {projectId === 'project-06-solar-battery-system' && (
            <div className="relative z-10 w-full max-w-xl">
              <svg viewBox="0 0 520 280" className="w-full h-auto drop-shadow-xs">
                <rect x="10" y="10" width="500" height="260" rx="8" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="1" />
                <text x="25" y="32" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">Figure 6.1: Single-Line Diagram (SLD) of Standalone Solar + Storage System</text>

                {/* PV Generation Source */}
                <rect x="35" y="65" width="95" height="70" rx="4" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                <text x="50" y="90" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">PV Array</text>
                <text x="50" y="106" fill="#d97706" fontSize="10" fontWeight="bold" fontFamily="serif">300 W Peak</text>
                <text x="50" y="122" fill="#475569" fontSize="9" fontFamily="serif">1800 Wh/day</text>

                {/* Power Flow Arrow to Controller */}
                <line x1="130" y1="100" x2="180" y2="100" stroke="#0f172a" strokeWidth="2.5" />
                <polygon points="175,96 183,100 175,104" fill="#0f172a" />

                {/* MPPT Charge Controller */}
                <rect x="180" y="65" width="110" height="70" rx="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                <text x="195" y="90" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">MPPT Hub</text>
                <text x="195" y="106" fill="#16a34a" fontSize="10" fontWeight="bold" fontFamily="serif">η = 90% (Loss 10%)</text>
                <text x="195" y="122" fill="#475569" fontSize="9" fontFamily="serif">Buck/Boost DC</text>

                {/* Bidirectional Arrow to Battery Bank */}
                <line x1="235" y1="135" x2="235" y2="175" stroke="#0284c7" strokeWidth="2.5" />
                <polygon points="231,142 235,135 239,142" fill="#0284c7" />
                <polygon points="231,168 235,175 239,168" fill="#0284c7" />

                {/* Battery Bank Storage Box */}
                <rect x="170" y="175" width="130" height="42" rx="4" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
                <text x="180" y="194" fill="#0284c7" fontSize="11" fontWeight="bold" fontFamily="serif">LiFePO4 Battery</text>
                <text x="180" y="208" fill="#475569" fontSize="9" fontFamily="serif">12V 100Ah (1200 Wh)</text>

                {/* Power Flow Arrow to Load */}
                <line x1="290" y1="100" x2="345" y2="100" stroke="#0f172a" strokeWidth="2.5" />
                <polygon points="340,96 348,100 340,104" fill="#0f172a" />

                {/* Constant Electrical Load */}
                <rect x="345" y="65" width="125" height="70" rx="6" fill="#fff1f2" stroke="#e11d48" strokeWidth="2" />
                <text x="360" y="90" fill="#e11d48" fontSize="11" fontWeight="bold" fontFamily="serif">Constant DC Load</text>
                <text x="360" y="106" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">150 W Steady</text>
                <text x="360" y="122" fill="#475569" fontSize="9" fontFamily="serif">Daily: 3600 Wh</text>

                {/* Energy Balance Findings Box */}
                <rect x="25" y="225" width="470" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <text x="40" y="242" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
                  System Verdict: 300W PV generates ~1620 Wh net vs. 3600 Wh load demand (Deficit of -1980 Wh).
                </text>
                <text x="40" y="258" fill="#475569" fontSize="10" fontFamily="serif">
                  Battery discharges to minimum cut-off (20% SOC) within 6.4 hours of night operation; full autonomy requires ≥ 700W PV.
                </text>
              </svg>
            </div>
          )}

          {/* Academic Figure Caption */}
          <div className="w-full border-t border-neutral-200 pt-3 mt-2 text-start">
            <p className="text-xs font-serif text-neutral-800 leading-relaxed">
              <span className="font-bold text-black">
                {isEn ? 'Figure: ' : 'الشكل الهندسي: '}
              </span>
              {isEn
                ? 'Standardized technical circuit diagram modeled and rendered in compliance with IEEE Std 315-1975 and IEC 60617 graphic symbols for electrical and electronics diagrams. All potential differences are referenced to Ground (0.0 V).'
                : 'مخطط تخطيطي قياسي مصمم وفق معايير معهد مهندسي الكهرباء والإلكترونيات (IEEE Std 315) واللجنة الكهروتقنية الدولية (IEC 60617). جميع الجهود منسوبة إلى نقطة التأريض المرجعية (GND = 0.0 V).'}
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. OFFICIAL ORIGINAL SIMULATOR RUNTIME EMBED                    */}
      {/* Real Falstad CircuitJS or PhET (No custom/synthetic engines)   */}
      {/* ============================================================== */}
      <div className="border border-neutral-300 rounded-2xl bg-white shadow-2xs overflow-hidden">
        {/* Simulator Header Bar */}
        <div className="bg-neutral-900 text-white px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white text-xs sm:text-sm tracking-wide font-serif">
                {isEn ? 'OFFICIAL SIMULATOR RUNTIME' : 'المحاكي الأصلي المعتمد'}
              </span>
              <span className="text-[10px] bg-neutral-800 text-emerald-400 px-2 py-0.5 rounded font-mono">
                LIVE
              </span>
            </div>
            <div className="text-[11px] text-neutral-400 font-serif">
              {simulatorAuthor}
            </div>
          </div>

          {/* Direct Launch in New Window */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={simulatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-raw-primary px-3.5 py-1.5 text-xs font-serif font-bold flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black border-emerald-400"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Open Fullscreen at Official Site' : 'فتح المحاكي في موقعه الأصلي'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Live Frame of the Genuine Simulator */}
        <div className="relative w-full bg-neutral-950">
          <iframe
            src={activeEmbedUrl}
            title={simulatorName}
            className="w-full h-[540px] sm:h-[600px] border-0 bg-neutral-950"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>

        {/* Official Simulator Verified Attribution Footer */}
        <div className="p-3.5 sm:p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-600 font-serif">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {isEn
                ? `Running verified original simulator from ${officialDomain}. No custom canvas mocks.`
                : `يتم تشغيل المحاكي الأصلي المعتمد مباشرة من ${officialDomain} دون أي محاكيات مصطنعة.`}
            </span>
          </div>
          <a
            href={officialDomain}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline font-bold font-serif flex items-center gap-1"
          >
            <span>{isEn ? 'Visit Official Portal' : 'الموقع الرسمي للمحاكي'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
