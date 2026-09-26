import React, { useState, useEffect, useRef } from 'react';
import { SimulationType } from '../types';
import { Play, Pause, RotateCcw, Zap, Activity, Sun, BatteryCharging, Gauge } from 'lucide-react';

interface SimulationProps {
  type: SimulationType;
  initialConfig?: Record<string, number | string>;
  isCompact?: boolean;
}

export const SimulationViewer: React.FC<SimulationProps> = ({
  type,
  initialConfig,
  isCompact = false,
}) => {
  if (type === 'none') return null;

  return (
    <div className={`border border-neutral-200 rounded-2xl bg-white my-6 ${isCompact ? 'p-3' : 'p-6'}`}>
      <div className="border-b border-neutral-200 pb-3 mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-black text-white px-2 py-0.5 font-mono text-xs uppercase font-bold rounded-md">
            محاكاة رياضية وهندسية تفاعلية
          </span>
          <span className="font-mono text-xs text-neutral-500">
            [LIVE SIMULATION ENGINE: 60FPS]
          </span>
        </div>
      </div>

      {type === 'ac_phasor' && <ACPhasorSim initialConfig={initialConfig} isCompact={isCompact} />}
      {type === 'rlc_resonance' && <RLCResonanceSim initialConfig={initialConfig} isCompact={isCompact} />}
      {type === 'fourier_series' && <FourierSeriesSim initialConfig={initialConfig} isCompact={isCompact} />}
      {type === 'grid_dispatch' && <GridDispatchSim initialConfig={initialConfig} isCompact={isCompact} />}
    </div>
  );
};

// 1. AC Wave & Phasor Diagram
const ACPhasorSim: React.FC<{ initialConfig?: Record<string, number | string>; isCompact?: boolean }> = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [voltageMag, setVoltageMag] = useState(100);
  const [currentMag, setCurrentMag] = useState(70);
  const [frequency, setFrequency] = useState(50);
  const [phaseAngleDeg, setPhaseAngleDeg] = useState(30); // current lags voltage by 30 deg

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      if (isRunning) {
        // Increment angle based on frequency
        angleRef.current += (frequency * 0.05);
      }
      const theta = angleRef.current * (Math.PI / 180);
      const phi = phaseAngleDeg * (Math.PI / 180);

      const width = canvas.width;
      const height = canvas.height;

      // Clear with white
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // Grid lines (RawBlock system: sharp 1px black/gray lines)
      ctx.strokeStyle = '#E0E0E0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 30) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Split canvas: Left is Phasor circle (radius 70), Right is Time domain waveform
      const phasorCenterX = 100;
      const phasorCenterY = height / 2;
      const phasorRadius = 75;

      // Draw Phasor circle & axes
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(phasorCenterX, phasorCenterY, phasorRadius, 0, 2 * Math.PI);
      ctx.stroke();

      // Axes
      ctx.beginPath();
      ctx.moveTo(phasorCenterX - phasorRadius - 10, phasorCenterY);
      ctx.lineTo(phasorCenterX + phasorRadius + 10, phasorCenterY);
      ctx.moveTo(phasorCenterX, phasorCenterY - phasorRadius - 10);
      ctx.lineTo(phasorCenterX, phasorCenterY + phasorRadius + 10);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 10px Space Mono';
      ctx.fillText('+Re', phasorCenterX + phasorRadius + 12, phasorCenterY + 4);
      ctx.fillText('+jIm', phasorCenterX - 14, phasorCenterY - phasorRadius - 12);

      // Phasor Voltage Vector (Black thick line)
      const vEndX = phasorCenterX + (voltageMag * 0.65) * Math.cos(theta);
      const vEndY = phasorCenterY - (voltageMag * 0.65) * Math.sin(theta);

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(phasorCenterX, phasorCenterY);
      ctx.lineTo(vEndX, vEndY);
      ctx.stroke();
      ctx.fillStyle = '#000000';
      ctx.fillText('V', vEndX + 5, vEndY - 5);

      // Phasor Current Vector (Blue thick line - RawBlock blue)
      const iEndX = phasorCenterX + (currentMag * 0.65) * Math.cos(theta - phi);
      const iEndY = phasorCenterY - (currentMag * 0.65) * Math.sin(theta - phi);

      ctx.strokeStyle = '#0000FF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(phasorCenterX, phasorCenterY);
      ctx.lineTo(iEndX, iEndY);
      ctx.stroke();
      ctx.fillStyle = '#0000FF';
      ctx.fillText('I', iEndX + 5, iEndY + 12);

      // Right Side: Time-domain sinusoidal waveform
      const timeStartX = 230;
      const timeWidth = width - timeStartX - 20;
      const zeroY = height / 2;

      // Axis
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(timeStartX, zeroY);
      ctx.lineTo(timeStartX + timeWidth, zeroY);
      ctx.stroke();

      // Voltage Sine Wave
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x < timeWidth; x++) {
        const t = (x / timeWidth) * 3 * Math.PI; // 1.5 cycles
        const y = zeroY - (voltageMag * 0.55) * Math.sin(theta - t);
        if (x === 0) ctx.moveTo(timeStartX + x, y);
        else ctx.lineTo(timeStartX + x, y);
      }
      ctx.stroke();

      // Current Sine Wave (Blue)
      ctx.strokeStyle = '#0000FF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x < timeWidth; x++) {
        const t = (x / timeWidth) * 3 * Math.PI;
        const y = zeroY - (currentMag * 0.55) * Math.sin((theta - phi) - t);
        if (x === 0) ctx.moveTo(timeStartX + x, y);
        else ctx.lineTo(timeStartX + x, y);
      }
      ctx.stroke();

      // Connector projection line from vector to waveform
      ctx.strokeStyle = '#FF0000';
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(vEndX, vEndY);
      ctx.lineTo(timeStartX, vEndY);
      ctx.stroke();
      ctx.setLineDash([]);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isRunning, voltageMag, currentMag, frequency, phaseAngleDeg]);

  const powerFactor = Math.cos((phaseAngleDeg * Math.PI) / 180).toFixed(3);
  const activePower = (voltageMag * currentMag * Math.cos((phaseAngleDeg * Math.PI) / 180) * 0.1).toFixed(1);
  const reactivePower = (voltageMag * currentMag * Math.sin((phaseAngleDeg * Math.PI) / 180) * 0.1).toFixed(1);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-start">
        {/* Canvas Display */}
        <div className="border border-neutral-200 rounded-lg sm:rounded-xl bg-white w-full overflow-x-auto overflow-hidden">
          <canvas
            ref={canvasRef}
            width={620}
            height={240}
            className="w-full h-auto block"
          />
        </div>

        {/* Readout Metrics Panel */}
        <div className="w-full md:w-64 border border-neutral-200 rounded-lg sm:rounded-xl p-3 bg-neutral-50 font-mono text-xs space-y-2">
          <div className="font-bold text-black border-b border-neutral-200 pb-1 uppercase">
            قياسات القدرة الكهربائية
          </div>
          <div className="flex justify-between">
            <span>الجهد الفعال (V):</span>
            <span className="font-bold">{voltageMag} V</span>
          </div>
          <div className="flex justify-between text-blue-700">
            <span>التيار الفعال (I):</span>
            <span className="font-bold">{currentMag} A</span>
          </div>
          <div className="flex justify-between">
            <span>معامل القدرة (cos φ):</span>
            <span className="font-bold">{powerFactor}</span>
          </div>
          <div className="flex justify-between">
            <span>القدرة الفعالة (P):</span>
            <span className="font-bold">{activePower} W</span>
          </div>
          <div className="flex justify-between">
            <span>القدرة غير الفعالة (Q):</span>
            <span className="font-bold">{reactivePower} VAR</span>
          </div>
          <div className="pt-1 border-t border-neutral-200 text-[11px] font-bold">
            الحالة: {phaseAngleDeg > 0 ? 'حثي متأخر (Lagging)' : phaseAngleDeg < 0 ? 'سعوي متقدم (Leading)' : 'أومي خالص (Unity)'}
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1">
            سعة الجهد Vm: {voltageMag} V
          </label>
          <input
            type="range"
            min={30}
            max={120}
            value={voltageMag}
            onChange={(e) => setVoltageMag(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1 text-blue-700">
            سعة التيار Im: {currentMag} A
          </label>
          <input
            type="range"
            min={20}
            max={100}
            value={currentMag}
            onChange={(e) => setCurrentMag(Number(e.target.value))}
            className="w-full accent-blue-700 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1">
            زاوية الطور φ: {phaseAngleDeg}°
          </label>
          <input
            type="range"
            min={-80}
            max={80}
            value={phaseAngleDeg}
            onChange={(e) => setPhaseAngleDeg(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1">
            التردد f: {frequency} Hz
          </label>
          <input
            type="range"
            min={10}
            max={100}
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="btn-raw-primary px-4 py-2 text-xs flex items-center gap-1.5"
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {isRunning ? 'إيقاف مؤقت' : 'تشغيل الحركة'}
        </button>
        <button
          onClick={() => {
            setVoltageMag(100);
            setCurrentMag(70);
            setPhaseAngleDeg(30);
            setFrequency(50);
          }}
          className="btn-raw-secondary px-4 py-2 text-xs flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          إعادة ضبط المعايير
        </button>
      </div>
    </div>
  );
};

// 2. Series RLC Circuit Resonance
const RLCResonanceSim: React.FC<{ initialConfig?: Record<string, number | string>; isCompact?: boolean }> = () => {
  const [r, setR] = useState(20); // Ohms
  const [l, setL] = useState(50); // mH
  const [c, setC] = useState(25); // uF
  const [genFreq, setGenFreq] = useState(142); // Hz

  // Mathematical Calculations
  const lHenries = l / 1000;
  const cFarads = c / 1000000;
  const resonantFreq = 1 / (2 * Math.PI * Math.sqrt(lHenries * cFarads));
  const omega = 2 * Math.PI * genFreq;
  const xl = omega * lHenries;
  const xc = 1 / (omega * cFarads);
  const impedanceZ = Math.sqrt(r * r + (xl - xc) * (xl - xc));
  const qFactor = (1 / r) * Math.sqrt(lHenries / cFarads);
  const currentAmp = 100 / impedanceZ; // Assuming 100V generator

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Mathematical Spec Block */}
      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-4 bg-neutral-50 font-mono text-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-white">
            <div className="text-neutral-500">تردد الرنين f₀</div>
            <div className="text-sm sm:text-base font-bold">{resonantFreq.toFixed(1)} Hz</div>
          </div>
          <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-white">
            <div className="text-neutral-500">المعاوقة الكلية Z</div>
            <div className="text-sm sm:text-base font-bold">{impedanceZ.toFixed(1)} Ω</div>
          </div>
          <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-white">
            <div className="text-neutral-500">عامل الجودة Q</div>
            <div className="text-sm sm:text-base font-bold">{qFactor.toFixed(2)}</div>
          </div>
          <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-white">
            <div className="text-neutral-500">تيار الدائرة I</div>
            <div className="text-sm sm:text-base font-bold text-blue-700">{currentAmp.toFixed(2)} A</div>
          </div>
        </div>
      </div>

      {/* Resonance Curve SVG visualization */}
      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white">
        <div className="text-xs font-mono font-bold mb-2 uppercase flex justify-between">
          <span>منحنى الاستجابة الترددية للتيار I(f)</span>
          <span className="text-neutral-500">Z_min = R عند الرنين</span>
        </div>
        <svg viewBox="0 0 500 180" className="w-full h-40 sm:h-44 bg-white border border-neutral-200 rounded-lg">
          {/* Axis */}
          <line x1="40" y1="150" x2="480" y2="150" stroke="#000000" strokeWidth="2" />
          <line x1="40" y1="150" x2="40" y2="20" stroke="#000000" strokeWidth="2" />

          {/* Grid lines */}
          <line x1="40" y1="85" x2="480" y2="85" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="3,3" />

          {/* Curve generation: compute 50 points from f=20 to f=300 */}
          {(() => {
            const points: string[] = [];
            for (let f = 20; f <= 300; f += 4) {
              const om = 2 * Math.PI * f;
              const xL_val = om * lHenries;
              const xC_val = 1 / (om * cFarads);
              const z_val = Math.sqrt(r * r + (xL_val - xC_val) * (xL_val - xC_val));
              const i_val = 100 / z_val;
              const svgX = 40 + ((f - 20) / 280) * 440;
              const svgY = 150 - (i_val / 5) * 125; // scale to fit
              points.push(`${svgX},${Math.max(20, svgY)}`);
            }
            return (
              <polyline
                fill="none"
                stroke="#000000"
                strokeWidth="3"
                points={points.join(' ')}
              />
            );
          })()}

          {/* Resonant Frequency Indicator */}
          {(() => {
            const resX = 40 + ((resonantFreq - 20) / 280) * 440;
            if (resX >= 40 && resX <= 480) {
              return (
                <g>
                  <line x1={resX} y1="20" x2={resX} y2="150" stroke="#008000" strokeWidth="2" strokeDasharray="4,4" />
                  <text x={resX} y="15" textAnchor="middle" fontSize="10" fontFamily="Space Mono" fill="#008000" fontWeight="bold">
                    f₀ ({resonantFreq.toFixed(0)}Hz)
                  </text>
                </g>
              );
            }
            return null;
          })()}

          {/* Current Operating Frequency Point */}
          {(() => {
            const curX = 40 + ((genFreq - 20) / 280) * 440;
            const curY = 150 - (currentAmp / 5) * 125;
            return (
              <g>
                <circle cx={curX} cy={Math.max(20, curY)} r="6" fill="#FF0000" stroke="#000000" strokeWidth="2" />
                <line x1={curX} y1={Math.max(20, curY)} x2={curX} y2="150" stroke="#FF0000" strokeWidth="1" />
                <text x={curX} y={Math.max(20, curY) - 10} textAnchor="middle" fontSize="11" fontFamily="Space Mono" fill="#FF0000" fontWeight="bold">
                  {currentAmp.toFixed(2)}A @ {genFreq}Hz
                </text>
              </g>
            );
          })()}

          <text x="480" y="165" textAnchor="end" fontSize="10" fontFamily="Space Mono">f (Hz)</text>
          <text x="35" y="25" textAnchor="end" fontSize="10" fontFamily="Space Mono">I (A)</text>
        </svg>
      </div>

      {/* Sliders */}
      <div className="border border-neutral-200 rounded-xl p-4 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1">
            المقاومة R: {r} Ω
          </label>
          <input
            type="range"
            min={5}
            max={80}
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1">
            المحث L: {l} mH
          </label>
          <input
            type="range"
            min={10}
            max={150}
            value={l}
            onChange={(e) => setL(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1">
            المكثف C: {c} µF
          </label>
          <input
            type="range"
            min={5}
            max={80}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-1 text-red-600">
            تردد المولد f: {genFreq} Hz
          </label>
          <input
            type="range"
            min={20}
            max={300}
            value={genFreq}
            onChange={(e) => setGenFreq(Number(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setGenFreq(Math.round(resonantFreq))}
          className="btn-raw-primary px-3 py-1.5 text-xs"
        >
          قفز مباشر إلى تردد الرنين ({Math.round(resonantFreq)} Hz)
        </button>
      </div>
    </div>
  );
};

// 3. Fourier Series Harmonic Synthesizer
const FourierSeriesSim: React.FC<{ initialConfig?: Record<string, number | string>; isCompact?: boolean }> = () => {
  const [harmonics, setHarmonics] = useState(5);
  const [waveType, setWaveType] = useState<'square' | 'sawtooth' | 'triangle'>('square');
  const [animatedTime, setAnimatedTime] = useState(0);

  useEffect(() => {
    let animId: number;
    const loop = () => {
      setAnimatedTime((t) => (t + 0.05) % (2 * Math.PI));
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-2">
        <div className="flex gap-2">
          {(['square', 'sawtooth', 'triangle'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setWaveType(type)}
              className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-lg border transition-all ${
                waveType === type ? 'bg-black text-white border-black' : 'bg-white text-black border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {type === 'square' ? 'موجة مربعة (Square)' : type === 'sawtooth' ? 'سن المنشار (Sawtooth)' : 'مثلثية (Triangle)'}
            </button>
          ))}
        </div>
        <div className="font-mono text-xs font-bold">
          عدد التوافقيات (N): {harmonics}
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white">
        <svg viewBox="0 0 500 160" className="w-full h-36 sm:h-44 bg-white border border-neutral-200 rounded-lg">
          {/* Axis */}
          <line x1="20" y1="80" x2="480" y2="80" stroke="#000000" strokeWidth="1.5" />
          <line x1="20" y1="10" x2="20" y2="150" stroke="#000000" strokeWidth="1.5" />

          {/* Synthesized Fourier wave */}
          {(() => {
            const points: string[] = [];
            for (let x = 0; x <= 460; x += 2) {
              const t = (x / 460) * 4 * Math.PI + animatedTime;
              let yVal = 0;

              if (waveType === 'square') {
                for (let k = 1; k <= harmonics * 2 - 1; k += 2) {
                  yVal += (4 / (Math.PI * k)) * Math.sin(k * t);
                }
              } else if (waveType === 'sawtooth') {
                for (let k = 1; k <= harmonics; k++) {
                  yVal += (2 / (Math.PI * k)) * Math.sin(k * t) * (k % 2 === 0 ? -1 : 1);
                }
              } else if (waveType === 'triangle') {
                for (let k = 1; k <= harmonics * 2 - 1; k += 2) {
                  const sign = ((k - 1) / 2) % 2 === 0 ? 1 : -1;
                  yVal += (8 / (Math.PI * Math.PI * k * k)) * sign * Math.sin(k * t);
                }
              }

              const svgY = 80 - yVal * 45;
              points.push(`${20 + x},${svgY}`);
            }
            return (
              <polyline
                fill="none"
                stroke="#000000"
                strokeWidth="3"
                points={points.join(' ')}
              />
            );
          })()}
        </svg>
      </div>

      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-3.5 bg-neutral-50 font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="w-full sm:w-2/3">
          <label className="block font-bold mb-1">
            التحكم في حدود متسلسلة فورييه (N = {harmonics})
          </label>
          <input
            type="range"
            min={1}
            max={15}
            value={harmonics}
            onChange={(e) => setHarmonics(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
        <div className="text-[11px] text-neutral-700 bg-white p-2.5 border border-neutral-200 rounded-lg w-full sm:w-1/3">
          {waveType === 'square' && 'f(t) = ∑ [4/(π·n)] sin(nωt) for odd n'}
          {waveType === 'sawtooth' && 'f(t) = ∑ [2/(π·n)] (-1)^(n+1) sin(nωt)'}
          {waveType === 'triangle' && 'f(t) = ∑ [8/(π²·n²)] (-1)^((n-1)/2) sin(nωt)'}
        </div>
      </div>
    </div>
  );
};

// 4. Smart Grid Dispatch & Energy Balance
const GridDispatchSim: React.FC<{ initialConfig?: Record<string, number | string>; isCompact?: boolean }> = () => {
  const [solarSolarMW, setSolarMW] = useState(120);
  const [windMW, setWindMW] = useState(85);
  const [loadDemandMW, setLoadDemandMW] = useState(250);
  const [batterySOC, setBatterySOC] = useState(65); // %

  const totalRenewable = solarSolarMW + windMW;
  const netDeficit = loadDemandMW - totalRenewable;
  // If netDeficit > 0, battery discharges or gas peaker runs. If < 0, battery charges or curtailment.
  const batteryFlow = Math.min(Math.max(-netDeficit, -80), 80); // max 80MW charge/discharge
  const gasPeakerMW = Math.max(0, netDeficit + batteryFlow);
  const gridFrequency = 50.0 + (batteryFlow === 0 && gasPeakerMW === 0 && netDeficit !== 0 ? (totalRenewable - loadDemandMW) * 0.005 : 0);

  return (
    <div className="space-y-3 sm:space-y-4 font-mono text-xs">
      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-center">
        <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-yellow-50/60">
          <div className="flex items-center justify-center gap-1 text-black font-bold">
            <Sun className="w-4 h-4 text-orange-600" />
            طاقة شمسية
          </div>
          <div className="text-base sm:text-lg font-bold">{solarSolarMW} MW</div>
        </div>
        <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-blue-50/60">
          <div className="flex items-center justify-center gap-1 text-black font-bold">
            <Activity className="w-4 h-4 text-blue-600" />
            طاقة رياح
          </div>
          <div className="text-base sm:text-lg font-bold">{windMW} MW</div>
        </div>
        <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-green-50/60">
          <div className="flex items-center justify-center gap-1 text-black font-bold">
            <BatteryCharging className="w-4 h-4 text-green-700" />
            تخزين البطاريات
          </div>
          <div className="text-base sm:text-lg font-bold">{batterySOC}% ({batteryFlow > 0 ? `شحن +${batteryFlow}MW` : batteryFlow < 0 ? `تفريغ ${batteryFlow}MW` : 'خامل'})</div>
        </div>
        <div className="border border-neutral-100 sm:border-neutral-200 rounded-lg p-2 sm:p-2.5 bg-neutral-50">
          <div className="flex items-center justify-center gap-1 text-black font-bold">
            <Gauge className="w-4 h-4 text-black" />
            طلب الأحمال الكلي
          </div>
          <div className="text-base sm:text-lg font-bold">{loadDemandMW} MW</div>
        </div>
      </div>

      {/* Grid Dispatch Bar */}
      <div className="border border-neutral-200 rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white space-y-2">
        <div className="flex justify-between font-bold">
          <span>ميزان الشبكة الكهربائية والتردد</span>
          <span className={gridFrequency === 50 ? 'text-green-700' : 'text-orange-600'}>
            تردد الشبكة: {gridFrequency.toFixed(2)} Hz
          </span>
        </div>

        {/* Progress bar comparison */}
        <div className="h-6 w-full border border-neutral-200 rounded-lg flex overflow-hidden">
          <div style={{ width: `${(solarSolarMW / (loadDemandMW + 50)) * 100}%` }} className="bg-yellow-400 h-full border-r border-neutral-300" title="شمسي" />
          <div style={{ width: `${(windMW / (loadDemandMW + 50)) * 100}%` }} className="bg-blue-400 h-full border-r border-neutral-300" title="رياح" />
          {gasPeakerMW > 0 && (
            <div style={{ width: `${(gasPeakerMW / (loadDemandMW + 50)) * 100}%` }} className="bg-neutral-800 text-white text-[10px] flex items-center justify-center h-full" title="محطة غاز">
              غاز {gasPeakerMW}MW
            </div>
          )}
        </div>
        <div className="flex justify-between text-[11px] text-neutral-600">
          <span>إجمالي الطاقة المتجددة: {totalRenewable} MW</span>
          <span>العجز الصافي المغطى: {gasPeakerMW} MW</span>
        </div>
      </div>

      {/* Sliders */}
      <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block font-bold mb-1">
            إشعاع الشمس (توليد شمسي): {solarSolarMW} MW
          </label>
          <input
            type="range"
            min={0}
            max={200}
            value={solarSolarMW}
            onChange={(e) => setSolarMW(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">
            سرعة الرياح (توليد عنفات): {windMW} MW
          </label>
          <input
            type="range"
            min={0}
            max={150}
            value={windMW}
            onChange={(e) => setWindMW(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">
            استهلاك الشبكة (الأحمال): {loadDemandMW} MW
          </label>
          <input
            type="range"
            min={100}
            max={350}
            value={loadDemandMW}
            onChange={(e) => setLoadDemandMW(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
