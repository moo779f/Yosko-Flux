import React, { useState } from 'react';
import katex from 'katex';
import { Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';

interface MathFormulaProps {
  rawEquation?: string;
  formula?: string;
  block?: boolean;
  compact?: boolean;
  language?: Language;
}

export const MathFormula: React.FC<MathFormulaProps> = ({
  rawEquation,
  formula,
  block = false,
  compact = false,
  language = 'ar'
}) => {
  const isEn = language === 'en';
  const activeEquation = rawEquation || formula || '';

  // Extract label if present (e.g. [قانون أوم] or [\text{...}])
  let label = '';
  let cleanLatex = activeEquation.trim();

  // Match bracketed label like [قانون أوم] or [\text{...}]
  const bracketMatch = cleanLatex.match(/^\[(.*?)\]/);
  if (bracketMatch) {
    label = bracketMatch[1].replace(/\\text\{|\}/g, '').trim();
    cleanLatex = cleanLatex.replace(/^\[.*?\]\s*/, '').trim();
  }

  // Remove trailing \quad
  cleanLatex = cleanLatex.replace(/\\quad/g, ' ').trim();

  // Render KaTeX HTML safely
  let renderedMathHtml = '';
  try {
    renderedMathHtml = katex.renderToString(cleanLatex, {
      displayMode: block && !compact,
      throwOnError: false,
    });
  } catch (err) {
    renderedMathHtml = `<span class="font-mono text-neutral-800">${cleanLatex}</span>`;
  }

  // If in compact mode (e.g. inside tables or calculation steps), render pure, elegant math without heavy borders
  if (compact || !block) {
    return (
      <span
        className="katex-compact inline-block font-serif text-neutral-900 select-all"
        dangerouslySetInnerHTML={{ __html: renderedMathHtml }}
      />
    );
  }

  return (
    <div className="my-2.5 rounded-xl border border-neutral-200 bg-white shadow-2xs overflow-hidden">
      {label && (
        <div className="flex items-center justify-between px-3.5 py-1.5 bg-neutral-50 border-b border-neutral-200">
          <span className="bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
            {label}
          </span>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
            {isEn ? 'Governing Formula' : 'المعادلة الحاكمة'}
          </span>
        </div>
      )}

      {/* Main Formula Presentation */}
      <div className="p-3 sm:p-4 text-center overflow-x-auto bg-neutral-50/40">
        <div
          className="inline-block text-base sm:text-lg lg:text-xl text-black font-serif select-all"
          dangerouslySetInnerHTML={{ __html: renderedMathHtml }}
        />
      </div>
    </div>
  );
};
