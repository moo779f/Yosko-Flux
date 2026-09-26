export type TopicCategory =
  | 'foundations'
  | 'basic_circuits'
  | 'electrical_circuits'
  | 'ac_signals'
  | 'electrical_power'
  | 'power_transmission'
  | 'solar_energy'
  | 'batteries'
  | 'electrical_grid'
  | 'power_systems'
  | 'renewable_energy'
  | 'intro'
  | 'electricity'
  | 'energy'
  | 'mathematics';
export type ContentType = 'research' | 'lesson' | 'article';
export type SimulationType = 'ac_phasor' | 'rlc_resonance' | 'fourier_series' | 'grid_dispatch' | 'none';
export type Language = 'ar' | 'en';

export interface QuizQuestion {
  id: string;
  question: string;
  questionEn?: string;
  options: string[];
  optionsEn?: string[];
  correctIndex: number;
  explanation: string;
  explanationEn?: string;
}

export interface ExplanatoryNote {
  id: string;
  sectionIndex?: number;
  term?: string;
  termEn?: string;
  definition?: string;
  definitionEn?: string;
  note: string;
  noteEn?: string;
}

export interface SimulationExperiment {
  id: string;
  title: string;
  titleEn?: string;
  stepAction: string;
  stepActionEn?: string;
  expectedObservation: string;
  expectedObservationEn?: string;
  simpleExplanation: string;
  simpleExplanationEn?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  authorEn: string;
  affiliation: string;
  affiliationEn: string;
  date: string;
  category: TopicCategory;
  type: ContentType;
  progressionIndex?: number;
  progressionCategory?: string;
  progressionCategoryEn?: string;
  investigationQuestion?: string;
  investigationQuestionEn?: string;
  motivation?: string;
  motivationEn?: string;
  abstract: string;
  abstractEn?: string;
  keyFindings?: string[];
  keyFindingsEn?: string[];
  contentSections: {
    heading: string;
    headingEn?: string;
    body: string;
    bodyEn?: string;
    equations?: string[];
    diagramNotes?: string;
    diagramNotesEn?: string;
    keyTakeaway?: string;
    keyTakeawayEn?: string;
    exampleFigure?: {
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
    };
    mediaEmbed?: {
      type: 'phet' | 'youtube';
      url: string;
      title?: string;
      titleEn?: string;
      caption?: string;
      captionEn?: string;
      height?: number;
      youtubeId?: string;
    };
  }[];
  explanatoryNotes?: ExplanatoryNote[];
  marginalia?: any[];
  references?: string[];
  simulationType: SimulationType;
  simulationConfig?: Record<string, number | string>;
  simulationExperiments?: SimulationExperiment[];
  expId?: string;
  statusTag?: string;
  statusTagEn?: string;
  busStandard?: string;
  technicalMetrics?: { label: string; value: string }[];
  deepDiveContent?: string;
  deepDiveContentEn?: string;
  resultsSummary?: string[];
  resultsSummaryEn?: string[];
  whatILearned?: string[];
  whatILearnedEn?: string[];
  nextStudyGoals?: string[];
  nextStudyGoalsEn?: string[];
  quiz: QuizQuestion[];
  videoUrl?: string;
  videoTitle?: string;
  videoTitleEn?: string;
  youtubeId?: string;
  videoTopics?: string[];
  videoTopicsEn?: string[];
  tags: string[];
  tagsEn?: string[];
  readingTimeMinutes: number;
  viewsCount?: number;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  category: TopicCategory | 'general';
  summary: string;
  summaryEn: string;
  content: string[];
  contentEn: string[];
  tags: string[];
  readTime: string;
  readTimeEn: string;
}
