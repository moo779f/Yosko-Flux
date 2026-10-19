import React, { useState } from 'react';
import { EngineeringProject } from '../data/projectsData';
import { Language } from '../types';
import { MathFormula } from './MathFormula';
import { ProjectCircuitSchematic } from './ProjectCircuitSchematic';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Clock,
  Wrench,
  BookOpen,
  Sparkles,
  Layers,
  Activity,
  Zap,
  Target,
  FileText,
  Lightbulb,
  Compass,
  Table,
  HelpCircle,
  AlertTriangle,
  Code,
  CheckSquare,
  ListOrdered,
  BarChart3,
  TrendingUp,
  Info
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: EngineeringProject;
  language: Language;
  onBack: () => void;
  onSelectProject?: (proj: EngineeringProject) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  language,
  onBack
}) => {
  const isEn = language === 'en';
  const [checkedTasks, setCheckedTasks] = useState<Record<number, boolean>>({});

  const toggleTask = (index: number) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <article className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-16 font-serif">
      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-3 font-serif">
        <button
          onClick={onBack}
          className="btn-raw-secondary min-h-[38px] px-3.5 py-1.5 font-serif text-xs font-bold flex items-center gap-2 cursor-pointer rounded-lg hover:bg-neutral-100"
        >
          {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          <span>{isEn ? 'Back to All Projects' : 'العودة لقائمة المشاريع الهندسية'}</span>
        </button>

        <div className="flex items-center gap-2 font-serif text-xs text-neutral-500">
          <span>{isEn ? 'Engineering Learning Project' : 'مشروع تعلم هندسي تطبيقي'}</span>
          <span>•</span>
          <span className="font-bold text-black">{project.projectNumber}</span>
        </div>
      </div>

      {/* 1. PROJECT OVERVIEW & HEADER */}
      <header className="border border-neutral-200 rounded-2xl p-6 sm:p-8 bg-white shadow-2xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase rounded-md tracking-wider">
              {project.projectNumber}
            </span>
            <span className="bg-neutral-100 text-neutral-800 border border-neutral-300 px-2.5 py-1 font-mono text-xs font-bold rounded-md">
              {isEn ? project.difficulty : project.difficultyAr}
            </span>
            <span
              className={`px-2.5 py-1 font-mono text-xs font-bold rounded-md flex items-center gap-1.5 border ${
                project.status === 'Completed'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-neutral-50 text-neutral-700 border-neutral-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isEn ? project.status : project.statusAr}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded font-serif text-[11px] text-neutral-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black leading-tight">
          {isEn ? project.titleEn : project.title}
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 font-serif leading-relaxed">
          {isEn ? project.subtitleEn : project.subtitle}
        </p>

        {/* Concepts Tag Bar */}
        <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center gap-1.5 font-serif">
          <span className="text-xs font-bold text-neutral-500">
            {isEn ? 'Core Concepts:' : 'المفاهيم الأساسية:'}
          </span>
          {(isEn ? project.conceptsEn : project.concepts).map((concept, idx) => (
            <span
              key={idx}
              className="border border-neutral-200 px-2 py-0.5 font-serif text-[11px] bg-neutral-100 text-neutral-800 rounded font-medium"
            >
              {concept}
            </span>
          ))}
        </div>
      </header>

      {/* 2 & 3. ENGINEERING QUESTION & WHY THIS PROBLEM MATTERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 2. Engineering Question */}
        <section className="border-2 border-black rounded-2xl p-5 sm:p-6 bg-white space-y-2">
          <div className="font-serif text-xs font-black uppercase text-black">
            <span>{isEn ? '2. Engineering Question' : '٢. السؤال الهندسي المحوري'}</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-black font-headline leading-snug">
            {isEn ? project.engineeringQuestionEn : project.engineeringQuestion}
          </p>
        </section>

        {/* 3. Why This Problem Matters */}
        <section className="border border-neutral-200 rounded-2xl p-5 sm:p-6 bg-neutral-50/70 space-y-2">
          <div className="font-serif text-xs font-bold uppercase text-neutral-600">
            <span>{isEn ? '3. Why This Problem Matters' : '٣. أهمية هذه المشكلة في الهندسة'}</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif">
            {isEn ? project.whyItMattersEn : project.whyItMatters}
          </p>
        </section>
      </div>

      {/* 4. PREREQUISITE CONCEPTS */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        <h2 className="text-lg sm:text-xl font-black font-headline text-black">
          {isEn ? '4. Prerequisite Concepts' : '٤. المفاهيم الأساسية والمتطلبات القبلية'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-serif">
          {project.prerequisites.map((prereq, idx) => (
            <div key={idx} className="p-3.5 border border-neutral-200 rounded-xl bg-neutral-50">
              <h3 className="font-bold text-xs sm:text-sm text-black mb-1 font-headline">
                {isEn ? prereq.nameEn : prereq.name}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {isEn ? prereq.descriptionEn : prereq.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPONENTS / PARAMETERS */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        <h2 className="text-lg sm:text-xl font-black font-headline text-black">
          {isEn ? '5. Components & Physical Parameters' : '٥. المكونات والمعاملات الفيزيائية المحددة'}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono border-collapse border border-neutral-200 text-start">
            <thead>
              <tr className="bg-neutral-100 text-black">
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? 'Component / Symbol' : 'المكون / الرمز'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? 'Value / Rating' : 'القيمة / المعيار'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold font-serif">{isEn ? 'Engineering Purpose' : 'الدور الهندسي في الدائرة'}</th>
              </tr>
            </thead>
            <tbody>
              {project.componentsParameters.map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                  <td className="p-2.5 border border-neutral-200 font-bold text-black">
                    {isEn ? item.componentEn : item.component}
                  </td>
                  <td className="p-2.5 border border-neutral-200 text-neutral-900 bg-neutral-50/50">
                    {item.value}
                  </td>
                  <td className="p-2.5 border border-neutral-200 text-neutral-700 font-serif">
                    {isEn ? item.purposeEn : item.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. CIRCUIT OR SYSTEM DIAGRAM */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black">
            {isEn ? '6. Circuit / System Diagram' : '٦. المخطط الهندسي للدائرة / النظام'}
          </h2>
          <a
            href={project.simulationSetup.simulatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-raw-primary px-3 py-1.5 text-xs font-serif font-bold flex items-center gap-1.5 rounded-lg"
          >
            <span>{isEn ? 'Open Simulator' : 'فتح المحاكي الأصلي'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 font-serif">
          {isEn ? project.diagram.descriptionEn : project.diagram.description}
        </p>

        {/* Dynamic High-Resolution Circuit / System Schematic Component & Official Simulator */}
        <ProjectCircuitSchematic
          projectId={project.id}
          language={language}
          simulatorUrl={project.simulationSetup.simulatorUrl}
        />

        {/* ASCII Exact Schematic Representation */}
        <div className="border border-neutral-300 rounded-xl bg-neutral-900 text-neutral-100 p-4 font-mono text-xs overflow-x-auto shadow-inner">
          <div className="text-[10px] text-neutral-400 mb-2 uppercase tracking-widest border-b border-neutral-800 pb-1 font-serif">
            {isEn ? 'Standard ASCII Circuit Schematic' : 'المخطط التخطيطي الأكاديمي (Standard ASCII Schematic)'}
          </div>
          <pre className="text-emerald-400 leading-relaxed font-mono whitespace-pre select-all">
            {project.diagram.ascii}
          </pre>
        </div>
      </section>

      {/* 7. MATHEMATICAL MODEL */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        <h2 className="text-lg sm:text-xl font-black font-headline text-black">
          {isEn ? '7. Mathematical Model & SI Units' : '٧. النموذج الرياضي وتعريف المتغيرات والوحدات الدولية (SI)'}
        </h2>

        <p className="text-xs sm:text-sm text-neutral-700 font-serif leading-relaxed">
          {isEn ? project.mathematicalModel.summaryEn : project.mathematicalModel.summary}
        </p>

        <div className="space-y-4">
          {project.mathematicalModel.equations.map((eq, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/60 space-y-3">
              <div className="font-bold text-xs sm:text-sm text-black font-headline">
                {isEn ? eq.nameEn : eq.name}
              </div>
              <div className="bg-white p-3 rounded-lg border border-neutral-200 overflow-x-auto text-center">
                <MathFormula formula={eq.formula} block={true} />
              </div>
              {/* Variable Definitions Table */}
              <div className="text-xs font-mono">
                <span className="text-neutral-500 block text-[10px] uppercase font-bold mb-1">
                  {isEn ? 'Variable Definitions & Units:' : 'تعريف الرموز والوحدات:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {eq.variableDefinitions.map((v, vIdx) => (
                    <div key={vIdx} className="bg-white p-2 rounded border border-neutral-200 text-[11px]">
                      <span className="font-bold text-black">{v.variable}</span>: {isEn ? v.meaningEn : v.meaning} ({v.unit})
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. STEP-BY-STEP MANUAL CALCULATION */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black">
            {isEn ? '8. Step-by-Step Manual Calculation' : '٨. الحسابات الرياضية اليدوية خطوة بخطوة (بالأرقام الصريحة)'}
          </h2>
          <span className="font-mono text-xs text-neutral-500 font-bold">
            {project.manualCalculations.length} {isEn ? 'explicit steps' : 'خطوات حسابية'}
          </span>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {project.manualCalculations.map((step, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 rounded-xl p-3.5 sm:p-4 bg-neutral-50 hover:bg-neutral-100/70 transition-colors"
            >
              <div className="font-bold text-black text-xs sm:text-sm mb-2 font-serif">
                {isEn ? step.stepEn : step.step}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 items-center bg-white p-3 rounded-lg border border-neutral-200">
                <div className="overflow-x-auto py-1">
                  <span className="text-[10px] text-neutral-500 block uppercase font-bold mb-0.5">
                    {isEn ? 'Formula:' : 'القانون العام:'}
                  </span>
                  <div className="text-sm">
                    <MathFormula formula={step.formula} compact={true} />
                  </div>
                </div>

                <div className="overflow-x-auto py-1 border-t md:border-t-0 md:border-s md:ps-3 border-neutral-200">
                  <span className="text-[10px] text-neutral-500 block uppercase font-bold mb-0.5">
                    {isEn ? 'Substitution:' : 'التعويض العددي:'}
                  </span>
                  <div className="text-sm">
                    <MathFormula formula={step.substitution} compact={true} />
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-s md:ps-3 border-neutral-200">
                  <span className="text-[10px] text-neutral-500 block uppercase font-bold mb-0.5">
                    {isEn ? 'Calculated Result:' : 'النتيجة المحسوبة:'}
                  </span>
                  <span className="font-bold text-black text-xs sm:text-sm bg-neutral-100 px-2 py-1 rounded inline-block">
                    {step.result} {step.unit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MY WORKFLOW (Steps 1 to 7) */}
      <section className="border-2 border-black rounded-2xl p-5 sm:p-7 bg-neutral-50 space-y-4">
        <div className="border-b border-neutral-300 pb-3">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black">
            {isEn ? 'MY WORKFLOW (Exact Step-by-Step Student Protocol)' : 'خطة عملي التجريبية خطوة بخطوة (MY WORKFLOW)'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 font-serif">
          {isEn
            ? 'A self-directed engineering protocol designed so that I actively perform calculations and measurements rather than passively reading results.'
            : 'خطة عمل تطبيقية تضمن تنفيذ الحسابات والقياسات يدوياً في المختبر الافتراضي خطوة بخطوة لتعزيز الفهم الذاتي.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-serif">
          {project.myWorkflow.map((wf) => (
            <div key={wf.stepNum} className="p-3.5 bg-white border border-neutral-300 rounded-xl space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                  {wf.stepNum}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-black font-headline">
                  {isEn ? wf.titleEn : wf.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-700 ps-7 leading-relaxed">
                {isEn ? wf.instructionEn : wf.instruction}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 & 10. PREDICTION BEFORE SIMULATION & SIMULATION SETUP */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        {/* Prediction before simulation */}
        <div className="border border-amber-300 rounded-xl p-4 bg-amber-50/60 space-y-1.5">
          <div className="font-mono text-xs font-bold text-amber-900 uppercase">
            <span>{isEn ? 'Prediction Before Simulation' : 'توقعي المسبق قبل فتح المحاكي'}</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 font-serif leading-relaxed">
            {isEn ? project.predictionBeforeSimulationEn : project.predictionBeforeSimulation}
          </p>
        </div>

        {/* Setup and Procedure */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black font-headline text-black">
              {isEn ? '9 & 10. Simulation Setup & Exact Procedure' : '٩ و ١٠. إعداد المحاكي وخطوات التنفيذ الدقيقة'}
            </h2>
            <span className="font-mono text-xs font-bold text-neutral-500">
              {project.simulationSetup.toolName}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-neutral-700 block">
              {isEn ? 'Step-by-Step Reconstruction Instructions:' : 'خطوات بناء الدائرة خطوة بخطوة في المحاكي:'}
            </span>
            <ol className="space-y-2 text-xs font-serif text-neutral-800 list-decimal list-inside bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              {(isEn ? project.simulationSetup.stepByStepProcedureEn : project.simulationSetup.stepByStepProcedure).map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-serif text-xs">
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="font-mono font-bold text-[10px] text-neutral-500 uppercase block mb-1">
                {isEn ? 'Measurement Points:' : 'نقاط القياس:'}
              </span>
              <ul className="space-y-1 list-disc list-inside text-neutral-700">
                {(isEn ? project.simulationSetup.measurementPointsEn : project.simulationSetup.measurementPoints).map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="font-mono font-bold text-[10px] text-neutral-500 uppercase block mb-1">
                {isEn ? 'What I Should Change:' : 'ما يجب تغييره أثناء التجربة:'}
              </span>
              <p className="text-neutral-700">
                {isEn ? project.simulationSetup.whatToChangeEn : project.simulationSetup.whatToChange}
              </p>
            </div>

            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="font-mono font-bold text-[10px] text-neutral-500 uppercase block mb-1">
                {isEn ? 'What I Should Observe:' : 'ما يجب ملاحظته وتسجيله:'}
              </span>
              <p className="text-neutral-700">
                {isEn ? project.simulationSetup.whatToObserveEn : project.simulationSetup.whatToObserve}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12. EXPECTED VS ACTUAL SIMULATION RESULTS COMPARISON */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black">
            {isEn ? '11 & 12. Expected vs. Actual Simulation Results' : '١١ و ١٢. مقارنة النتائج النظرية بنتائج المحاكاة الحاسوبية ونسبة الخطأ'}
          </h2>
          <span className="font-mono text-[11px] bg-black text-white px-2 py-0.5 rounded font-bold">
            |sim - theory| / theory × 100%
          </span>
        </div>

        <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs font-serif text-neutral-800">
          <span className="font-bold text-black font-mono block mb-1">{isEn ? 'Expected Outcome Summary:' : 'ملخص النتيجة المتوقعة:'}</span>
          {isEn ? project.expectedResultEn : project.expectedResult}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono border-collapse border border-neutral-200 text-start">
            <thead>
              <tr className="bg-neutral-100 text-black">
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? 'Parameter' : 'المعامل المقاس'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? 'Theoretical (Hand Calc)' : 'القيمة النظرية المحسوبة'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? 'Simulated Result' : 'نتيجة المحاكاة (Simulation)'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? 'Difference' : 'الفرق المطلق'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold">{isEn ? '% Error' : 'نسبة الخطأ %'}</th>
                <th className="p-2.5 border border-neutral-200 font-bold font-serif">{isEn ? 'Engineering Notes' : 'ملاحظات وتفسير'}</th>
              </tr>
            </thead>
            <tbody>
              {project.comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                  <td className="p-2.5 border border-neutral-200 font-bold text-black">
                    {isEn ? row.parameterEn : row.parameter}
                  </td>
                  <td className="p-2.5 border border-neutral-200 text-neutral-800 bg-neutral-50/50">
                    {row.theoretical}
                  </td>
                  <td className="p-2.5 border border-neutral-200 font-bold text-black bg-white">
                    {row.simulated}
                  </td>
                  <td className="p-2.5 border border-neutral-200 text-neutral-600">
                    {row.difference}
                  </td>
                  <td className="p-2.5 border border-neutral-200 font-bold text-emerald-700 bg-emerald-50/40">
                    {row.percentageError}
                  </td>
                  <td className="p-2.5 border border-neutral-200 text-neutral-700 font-serif">
                    {isEn ? row.notesEn : row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. CASE / SWEEP TABLES & GRAPHS */}
      {project.sweepTable && (
        <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-4">
          <div className="border-b border-neutral-200 pb-3">
            <h2 className="text-lg sm:text-xl font-black font-headline text-black">
              {isEn ? project.sweepTable.titleEn : project.sweepTable.title}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono border-collapse border border-neutral-200 text-start">
              <thead>
                <tr className="bg-neutral-100 text-black">
                  {(isEn ? project.sweepTable.headersEn : project.sweepTable.headers).map((h, hIdx) => (
                    <th key={hIdx} className="p-2.5 border border-neutral-200 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {project.sweepTable.rows.map((r, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-50 transition-colors">
                    {r.cells.map((c, cIdx) => (
                      <td
                        key={cIdx}
                        className={`p-2.5 border border-neutral-200 ${
                          cIdx === 0 ? 'font-bold text-black' : 'text-neutral-800'
                        }`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 13. GRAPHS / VISUAL PLOTS */}
      {project.graphs && project.graphs.length > 0 && (
        <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-6">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black">
            {isEn ? '13. Engineered Plots & Data Curves' : '١٣. المنحنيات البيانية والرسومات الهندسية المعتمدة'}
          </h2>

          <div className="space-y-6">
            {project.graphs.map((graph) => (
              <div key={graph.id} className="border border-neutral-200 rounded-xl p-4 sm:p-5 bg-neutral-50/60 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-sm sm:text-base text-black font-headline">
                    {isEn ? graph.titleEn : graph.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500">
                    X: {isEn ? graph.xAxisLabelEn : graph.xAxisLabel} | Y: {isEn ? graph.yAxisLabelEn : graph.yAxisLabel}
                  </span>
                </div>

                {/* SVG Visual Plot Representation */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200">
                  <div className="relative h-48 w-full flex items-end gap-2 pt-6 pb-6 px-4">
                    {graph.dataPoints.map((pt, pIdx) => {
                      const maxY = Math.max(...graph.dataPoints.map((p) => p.y), 1);
                      const heightPercent = Math.max(10, Math.min(100, (pt.y / maxY) * 90));
                      return (
                        <div key={pIdx} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                          <span className="text-[10px] font-mono text-neutral-600 font-bold mb-1 opacity-90 group-hover:opacity-100">
                            {pt.y}
                          </span>
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full max-w-[48px] bg-neutral-900 group-hover:bg-neutral-700 transition-all rounded-t-md"
                          />
                          <span className="text-[10px] font-mono text-neutral-500 truncate max-w-[60px] text-center mt-1">
                            {pt.x}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {graph.notes && (
                  <p className="text-xs text-neutral-600 font-serif italic">
                    {isEn ? graph.notesEn : graph.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PYTHON SCRIPT (if available) */}
      {project.pythonCode && (
        <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <h2 className="text-lg sm:text-xl font-black font-headline text-black">
              {isEn ? 'Reproducible Python Engineering Model' : 'النموذج البرمجي القابل لإعادة التشغيل بلغة بايثون'}
            </h2>
            <span className="font-mono text-xs text-neutral-500">Python 3 (NumPy / Matplotlib)</span>
          </div>

          <p className="text-xs text-neutral-600 font-serif">
            {isEn
              ? 'Complete reproducible script to generate curves independently in Google Colab or Jupyter Notebook:'
              : 'كود بايثون كامل وقابل لإعادة التشغيل لتوليد المنحنيات بشكل مستقل ومطابقتها:'}
          </p>

          <pre className="p-4 bg-neutral-950 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto select-all leading-relaxed">
            {project.pythonCode}
          </pre>
        </section>
      )}

      {/* 14. ENGINEERING INTERPRETATION */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-3">
        <h2 className="text-lg sm:text-xl font-black font-headline text-black">
          {isEn ? '14. Engineering Interpretation & Insights' : '١٤. التفسير الهندسي للنتائج ودلالاتها'}
        </h2>
        <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-serif whitespace-pre-line bg-neutral-50 p-4 sm:p-5 rounded-xl border border-neutral-200">
          {isEn ? project.engineeringInterpretationEn : project.engineeringInterpretation}
        </div>
      </section>

      {/* 15. SOURCES OF ERROR & LIMITATIONS */}
      <section className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-3">
        <h2 className="text-lg sm:text-xl font-black font-headline text-black">
          {isEn ? '15. Sources of Error & Model Limitations' : '١٥. مصادر الخطأ وحدود النماذج المحاكية'}
        </h2>
        <p className="text-xs text-neutral-600 font-serif">
          {isEn
            ? 'Transparently acknowledging theoretical assumptions and where the physical world deviates from the model:'
            : 'توثيق الفروق بين الافتراضات النظرية والواقع الفيزيائي بكل أمانة علمية:'}
        </p>
        <ul className="space-y-2 text-xs sm:text-sm font-serif text-neutral-700 list-disc list-inside bg-neutral-50 p-4 rounded-xl border border-neutral-200">
          {((isEn ? project.sourcesOfErrorAndLimitationsEn : project.sourcesOfErrorAndLimitations) || []).map((err, idx) => (
            <li key={idx} className="leading-relaxed">
              {err}
            </li>
          ))}
        </ul>
      </section>

      {/* 16 & 17. WHAT I LEARNED & WHAT I WOULD STUDY NEXT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 16. What I Learned */}
        <section className="border border-neutral-200 rounded-2xl p-5 sm:p-6 bg-white space-y-3">
          <h2 className="text-base sm:text-lg font-black font-headline text-black">
            {isEn ? '16. What I Learned' : '١٦. ماذا تعلمت من هذا المشروع؟'}
          </h2>
          <ul className="space-y-2 text-xs font-serif text-neutral-700 list-disc list-inside">
            {((isEn ? project.whatILearnedEn : project.whatILearned) || []).map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 17. What I Would Study Next */}
        <section className="border border-neutral-200 rounded-2xl p-5 sm:p-6 bg-white space-y-3">
          <h2 className="text-base sm:text-lg font-black font-headline text-black">
            {isEn ? '17. What I Would Study Next' : '١٧. ماذا سأدرس في المرحلة القادمة؟'}
          </h2>
          <ul className="space-y-2 text-xs font-serif text-neutral-700 list-disc list-inside">
            {((isEn ? project.whatIWouldStudyNextEn : project.whatIWouldStudyNext) || []).map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* CHECKLIST: BEFORE I MARK THIS PROJECT AS COMPLETE */}
      <section className="border-2 border-neutral-900 rounded-2xl p-5 sm:p-7 bg-neutral-50 space-y-4">
        <div className="border-b border-neutral-300 pb-3">
          <h2 className="text-lg sm:text-xl font-black font-headline text-black">
            {isEn ? 'Before I Mark This Project as Complete (Self-Checklist)' : 'قائمة التحقق الذاتي قبل اعتماد اكتمال المشروع'}
          </h2>
        </div>

        <p className="text-xs text-neutral-600 font-serif">
          {isEn
            ? 'Interactive verification checklist ensuring all mathematical, simulation, and analytical criteria were satisfied:'
            : 'قائمة مهام تفاعلية تضمن استيفاء كافة المتطلبات الحسابية والتجريبية والتحليلية:'}
        </p>

        <div className="space-y-2 font-serif text-xs">
          {project.completionChecklist.map((item, idx) => {
            const isChecked = checkedTasks[idx] ?? item.checked;
            return (
              <label
                key={idx}
                className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-neutral-200 cursor-pointer hover:bg-neutral-100/50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleTask(idx)}
                  className="mt-0.5 rounded text-black focus:ring-black h-4 w-4 cursor-pointer"
                />
                <span className={`leading-relaxed ${isChecked ? 'text-black font-medium' : 'text-neutral-500 line-through'}`}>
                  {isEn ? item.taskEn : item.task}
                </span>
              </label>
            );
          })}
        </div>
      </section>

      {/* AUTHENTIC SOURCES & REFERENCES */}
      <footer className="border border-neutral-200 rounded-2xl p-5 sm:p-7 bg-white space-y-3">
        <h2 className="text-sm sm:text-base font-bold font-headline text-black">
          {isEn ? 'Authoritative References & Genuine Educational Sources' : 'المراجع الأكاديمية والروابط التعليمية المعتمدة'}
        </h2>
        <div className="space-y-2 font-serif text-xs">
          {project.sources.map((src, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
              <div>
                <span className="font-bold text-black block">{src.title}</span>
                <span className="text-neutral-500 text-[11px]">{src.source}</span>
              </div>
              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline font-serif text-[11px] font-bold flex items-center gap-1 shrink-0"
                >
                  <span>{isEn ? 'Visit Official Source' : 'زيارة المصدر الرسمي'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </footer>
    </article>
  );
};
