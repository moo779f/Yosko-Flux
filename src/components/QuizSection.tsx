import React, { useState } from 'react';
import { QuizQuestion, Language } from '../types';
import { Check, X, RotateCcw, Award } from 'lucide-react';

interface QuizProps {
  quiz?: QuizQuestion[];
  questions?: QuizQuestion[];
  paperTitle: string;
  language?: Language;
}

export const QuizSection: React.FC<QuizProps> = ({
  quiz: propQuiz,
  questions,
  paperTitle,
  language = 'ar',
}) => {
  const quiz = propQuiz || questions || [];
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const isEn = language === 'en';

  const handleSelectOption = (qIndex: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: optionIndex,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const allAnswered = quiz.length > 0 && Object.keys(selectedAnswers).length === quiz.length;
  const percentage = quiz.length > 0 ? Math.round((score / quiz.length) * 100) : 0;

  const arabicLetters = ['أ', 'ب', 'ج', 'د', 'هـ'];
  const englishLetters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="font-sans space-y-6">
      {/* Clean Quiz Header */}
      <div className="border-b border-neutral-200 pb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-md">
              {isEn ? 'Academic Assessment' : 'قياس الاستيعاب الأكاديمي'}
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-neutral-500 font-medium">
              {quiz.length} {isEn ? 'Questions' : 'أسئلة'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-headline text-black">
            {isEn ? 'Comprehension & Review Questions' : 'أسئلة قياس استيعاب الورقة البحثية'}
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-0.5">
            {isEn ? 'Focused on:' : 'مرتبط بمحتوى:'} {paperTitle}
          </p>
        </div>

        {/* Score Card when submitted */}
        {submitted && (
          <div className="border border-neutral-200 rounded-xl p-3 bg-neutral-50 flex items-center gap-3">
            <Award className="w-7 h-7 text-black flex-shrink-0" />
            <div>
              <div className="font-mono text-[10px] sm:text-xs text-neutral-500 font-bold uppercase">
                {isEn ? 'Final Score' : 'النتيجة النهائية'}
              </div>
              <div className="text-lg sm:text-xl font-black font-mono">
                {score} / {quiz.length} ({percentage}%)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Questions list: Clean, flattened dividers instead of nested rectangle boxes */}
      <div className="divide-y divide-neutral-200">
        {quiz.map((q, qIndex) => {
          const isSelected = selectedAnswers[qIndex] !== undefined;
          const isCorrect = isSelected && selectedAnswers[qIndex] === q.correctIndex;
          const currentSelection = selectedAnswers[qIndex];

          return (
            <div
              key={q.id || qIndex}
              className={`py-5 sm:py-6 first:pt-0 space-y-3 transition-colors ${
                submitted
                  ? isCorrect
                    ? 'bg-green-50/50 -mx-2 px-2 sm:-mx-3 sm:px-3 rounded-xl'
                    : 'bg-red-50/50 -mx-2 px-2 sm:-mx-3 sm:px-3 rounded-xl'
                  : ''
              }`}
            >
              {/* Question Label & Title */}
              <div className="flex items-start gap-2.5">
                <span className="bg-black text-white px-2 py-0.5 font-mono text-xs font-bold flex-shrink-0 mt-0.5 rounded-md">
                  {isEn ? `Q${qIndex + 1}` : `سؤال ${qIndex + 1}`}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-black flex-1 leading-snug">
                  {q.question}
                </h4>
              </div>

              {/* Options Stack: Clean borders and touch targets */}
              <div className="space-y-2 pt-1">
                {q.options.map((opt, optIndex) => {
                  const checked = currentSelection === optIndex;
                  const isThisCorrectOption = optIndex === q.correctIndex;
                  const letter = isEn ? englishLetters[optIndex] || '' : arabicLetters[optIndex] || '';

                  let optionStyles = 'border border-neutral-200 bg-white hover:bg-neutral-50 text-black';
                  if (checked && !submitted) {
                    optionStyles = 'border border-neutral-900 bg-neutral-100 font-semibold ring-1 ring-neutral-900/10';
                  }

                  if (submitted) {
                    if (isThisCorrectOption) {
                      optionStyles = 'border border-emerald-600 bg-emerald-50/80 font-semibold text-emerald-950 ring-1 ring-emerald-600/20';
                    } else if (checked && !isThisCorrectOption) {
                      optionStyles = 'border border-rose-500 bg-rose-50/80 font-semibold text-rose-950 ring-1 ring-rose-500/20';
                    } else {
                      optionStyles = 'border border-neutral-200 bg-white opacity-60 text-neutral-500';
                    }
                  }

                  return (
                    <div
                      key={optIndex}
                      onClick={() => handleSelectOption(qIndex, optIndex)}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 min-h-[46px] rounded-xl cursor-pointer transition-all select-none ${optionStyles}`}
                    >
                      {/* Option letter badge */}
                      <span
                        className={`w-6 h-6 flex-shrink-0 font-mono text-xs font-bold flex items-center justify-center rounded-md border ${
                          checked
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-200 bg-neutral-100 text-neutral-800'
                        }`}
                      >
                        {letter}
                      </span>

                      {/* Option text */}
                      <span className="text-xs sm:text-sm font-medium flex-1 leading-snug">
                        {opt}
                      </span>

                      {/* Submission status indicators */}
                      {submitted && isThisCorrectOption && (
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-green-700 flex items-center gap-1 flex-shrink-0">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span className="hidden sm:inline">{isEn ? 'Correct Answer' : 'الإجابة الصحيحة'}</span>
                        </span>
                      )}
                      {submitted && checked && !isThisCorrectOption && (
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-red-600 flex items-center gap-1 flex-shrink-0">
                          <X className="w-4 h-4 stroke-[3]" />
                          <span className="hidden sm:inline">{isEn ? 'Incorrect' : 'إجابة غير صحيحة'}</span>
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Scientific Explanation */}
              {submitted && (
                <div className="mt-3 p-3 sm:p-4 border border-neutral-200 rounded-xl bg-neutral-50 font-mono text-xs sm:text-sm space-y-1">
                  <div className="font-bold text-black flex items-center gap-1.5">
                    <span>{isEn ? 'Scientific Explanation:' : 'الشرح العلمي والتحليلي:'}</span>
                  </div>
                  <div className="text-neutral-800 leading-relaxed font-sans">
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {!submitted ? (
          <>
            <div className="font-mono text-xs text-neutral-600">
              {allAnswered
                ? (isEn ? 'All questions answered. Ready for evaluation.' : 'أجبت على كافة الأسئلة. جاهز للتقييم الأكاديمي!')
                : (isEn
                    ? `Answered ${Object.keys(selectedAnswers).length} of ${quiz.length} questions`
                    : `أجبت على ${Object.keys(selectedAnswers).length} من أصل ${quiz.length} أسئلة`)}
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              className={`btn-raw-primary w-full sm:w-auto min-h-[46px] px-6 py-2.5 text-xs sm:text-sm font-mono font-bold flex items-center justify-center gap-2 cursor-pointer ${
                !allAnswered ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{isEn ? 'Evaluate Answers & Show Score' : 'تصحيح الاختبار وعرض التقييم والشرح'}</span>
            </button>
          </>
        ) : (
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="font-mono text-xs sm:text-sm font-bold text-neutral-800">
              {score === quiz.length
                ? (isEn
                    ? 'Excellent! You achieved full marks.'
                    : 'تهانينا! حققت الدرجة الكاملة في استيعاب مفاهيم هذه الورقة.')
                : (isEn
                    ? 'Review the equations and analysis above and try again.'
                    : 'يمكنك مراجعة المعادلات والتحليل أعلاه ثم إعادة المحاولة.')}
            </div>
            <button
              onClick={handleReset}
              className="btn-raw-secondary w-full sm:w-auto min-h-[44px] px-5 py-2 font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isEn ? 'Reset & Retake Quiz' : 'إعادة الاختبار من البداية'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
