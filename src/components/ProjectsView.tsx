import React, { useState } from 'react';
import { ENGINEERING_PROJECTS, EngineeringProject } from '../data/projectsData';
import { Language } from '../types';
import {
  Cpu,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Wrench,
  Activity,
  Zap,
  ExternalLink,
  Layers,
  Search,
  Filter
} from 'lucide-react';

interface ProjectsViewProps {
  language: Language;
  onSelectProject: (project: EngineeringProject) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  language,
  onSelectProject
}) => {
  const isEn = language === 'en';
  const [filterConcept, setFilterConcept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = ENGINEERING_PROJECTS.filter((proj) => {
    if (filterConcept !== 'all') {
      const match =
        proj.concepts.some((c) => c.toLowerCase().includes(filterConcept.toLowerCase())) ||
        proj.conceptsEn.some((c) => c.toLowerCase().includes(filterConcept.toLowerCase()));
      if (!match) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = proj.title.toLowerCase().includes(q) || proj.titleEn.toLowerCase().includes(q);
      const matchDesc = proj.subtitle.toLowerCase().includes(q) || proj.subtitleEn.toLowerCase().includes(q);
      const matchConcept =
        proj.concepts.some((c) => c.toLowerCase().includes(q)) ||
        proj.conceptsEn.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchConcept;
    }
    return true;
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn max-w-6xl mx-auto font-serif">
      {/* Header Banner */}
      <section className="border border-neutral-200 rounded-2xl bg-white p-5 sm:p-8 md:p-10 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-black text-white px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase rounded-md tracking-wider">
                {isEn ? 'ENGINEERING PROJECTS LAB' : 'مختبر المشاريع الهندسية'}
              </span>
              <span className="border border-neutral-200 bg-neutral-100 text-neutral-800 px-2 py-0.5 font-mono text-[11px] rounded-md font-bold">
                {ENGINEERING_PROJECTS.length} {isEn ? 'Documented Projects' : 'مشاريع محاكاة موثقة'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline text-black">
              {isEn ? 'Applied Engineering Projects & Circuit Simulations' : 'المشاريع الهندسية التطبيقية ومحاكاة الدوائر'}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 font-serif max-w-3xl leading-relaxed">
              {isEn
                ? 'Structured engineering investigations exploring voltage division, transient RC dynamics, RLC resonance, off-grid solar balance, thermal PV coefficients, and grid integration. Every project couples governing mathematical derivations with digital circuit simulations.'
                : 'تجارب ودراسات هندسية متدرجة تغطي تجزئة الجهد، وديناميكا المكثفات، ورنين RLC، وتوازن الطاقة الشمسية مع البطاريات، وتأثير الحرارة على الألواح، وتكامل الشبكات الذكية. كل مشروع يربط الاشتقاق الرياضي بالمحاكاة الحاسوبية الدقيقة.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="p-3 border border-neutral-200 rounded-xl bg-neutral-50 text-center font-mono text-xs">
              <span className="text-neutral-500 block text-[10px] uppercase">
                {isEn ? 'Methodology' : 'المنهجية'}
              </span>
              <span className="font-bold text-black text-xs">
                Theory → Math → Sim
              </span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 font-serif text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setFilterConcept('all')}
              className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer font-serif ${
                filterConcept === 'all'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {isEn ? 'All Projects' : 'كافة المشاريع'} ({ENGINEERING_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilterConcept('Ohm')}
              className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer font-serif ${
                filterConcept === 'Ohm'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {isEn ? 'Circuits & Ohm' : 'الدوائر وقانون أوم'}
            </button>
            <button
              onClick={() => setFilterConcept('Resonance')}
              className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer font-serif ${
                filterConcept === 'Resonance'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {isEn ? 'AC & Resonance' : 'التيار المتردد والرنين'}
            </button>
            <button
              onClick={() => setFilterConcept('Solar')}
              className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer font-serif ${
                filterConcept === 'Solar'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {isEn ? 'Solar & Grid' : 'الطاقة الشمسية والشبكة'}
            </button>
          </div>

          <div className="relative min-w-[200px] sm:min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute start-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Filter projects...' : 'تصفية المشاريع...'}
              className="w-full ps-8 pe-3 py-1.5 border border-neutral-200 rounded-lg text-xs font-serif bg-neutral-50/70 focus:outline-none focus:border-black"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group border border-neutral-200 rounded-2xl bg-white p-5 sm:p-6 transition-all hover:border-black hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Card Meta Row */}
              <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2.5">
                <span className="font-serif text-xs font-bold tracking-wider bg-black text-white px-2 py-0.5 rounded">
                  {project.projectNumber}
                </span>

                <div className="flex items-center gap-1.5 font-serif text-[11px] text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>{isEn ? project.status : project.statusAr}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg sm:text-xl font-black font-headline text-black group-hover:underline">
                  {isEn ? project.titleEn : project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-serif mt-1 leading-relaxed line-clamp-2">
                  {isEn ? project.subtitleEn : project.subtitle}
                </p>
              </div>

              {/* Technical Question Mini-Box */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 font-serif text-[11px] space-y-1.5 text-neutral-700">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-neutral-500 shrink-0">{isEn ? 'Question:' : 'السؤال:'}</span>
                  <span className="font-bold text-black text-end line-clamp-1">
                    {isEn ? project.engineeringQuestionEn : project.engineeringQuestion}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-1">
                  <span className="text-neutral-500 shrink-0">{isEn ? 'Difficulty:' : 'المستوى:'}</span>
                  <span className="font-bold text-neutral-900 text-end">
                    {isEn ? project.difficulty : project.difficultyAr}
                  </span>
                </div>
              </div>

              {/* Concepts Tags */}
              <div className="flex flex-wrap items-center gap-1 pt-1 font-serif">
                {(isEn ? project.conceptsEn : project.concepts).slice(0, 3).map((concept, idx) => (
                  <span
                    key={idx}
                    className="border border-neutral-200 px-2 py-0.5 font-serif text-[10px] bg-neutral-100 rounded text-neutral-800 font-medium"
                  >
                    {concept}
                  </span>
                ))}
                {project.concepts.length > 3 && (
                  <span className="font-serif text-[10px] text-neutral-500">
                    +{project.concepts.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-serif font-bold text-neutral-900">
              <span className="text-neutral-500 text-[11px] font-serif">
                {project.tools[0]}
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform font-serif">
                <span>{isEn ? 'Open Project Page' : 'استعراض المشروع والنتائج'}</span>
                {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
