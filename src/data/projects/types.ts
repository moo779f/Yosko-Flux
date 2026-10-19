export interface ProjectCalculationStep {
  step: string;
  stepEn: string;
  formula: string;
  substitution: string;
  result: string;
  unit: string;
}

export interface ProjectResultComparison {
  parameter: string;
  parameterEn: string;
  theoretical: string;
  simulated: string;
  difference: string;
  percentageError: string;
  unit: string;
  notes: string;
  notesEn: string;
}

export interface WorkflowStep {
  stepNum: number;
  title: string;
  titleEn: string;
  instruction: string;
  instructionEn: string;
}

export interface PrerequisiteConcept {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
}

export interface ComponentParam {
  component: string;
  componentEn: string;
  value: string;
  purpose: string;
  purposeEn: string;
}

export interface VariableDef {
  variable: string;
  meaning: string;
  meaningEn: string;
  unit: string;
}

export interface MathModelEquation {
  name: string;
  nameEn: string;
  formula: string;
  variableDefinitions: VariableDef[];
}

export interface SweepTableRow {
  cells: string[];
}

export interface SweepTable {
  title: string;
  titleEn: string;
  headers: string[];
  headersEn: string[];
  rows: SweepTableRow[];
}

export interface ProjectGraphPoint {
  x: number | string;
  y: number;
  label?: string;
}

export interface ProjectGraph {
  id: string;
  title: string;
  titleEn: string;
  xAxisLabel: string;
  xAxisLabelEn: string;
  yAxisLabel: string;
  yAxisLabelEn: string;
  dataPoints: ProjectGraphPoint[];
  notes?: string;
  notesEn?: string;
}

export interface CompletionChecklistItem {
  task: string;
  taskEn: string;
  checked: boolean;
}

export interface ProjectSource {
  title: string;
  source: string;
  url: string;
}

export interface EngineeringProject {
  id: string;
  projectNumber: string;
  numberInt: number;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  engineeringQuestion: string;
  engineeringQuestionEn: string;
  whyItMatters: string;
  whyItMattersEn: string;
  difficulty: 'Foundation' | 'Intermediate' | 'Advanced';
  difficultyAr: string;
  status: 'Completed' | 'In Progress';
  statusAr: 'مكتمل ومحاكى' | 'قيد التنفيذ والمحاكاة';
  tools: string[];
  concepts: string[];
  conceptsEn: string[];
  prerequisites: PrerequisiteConcept[];
  componentsParameters: ComponentParam[];
  diagram: {
    ascii: string;
    diagramType: string;
    description: string;
    descriptionEn: string;
  };
  mathematicalModel: {
    summary: string;
    summaryEn: string;
    equations: MathModelEquation[];
  };
  manualCalculations: ProjectCalculationStep[];
  predictionBeforeSimulation: string;
  predictionBeforeSimulationEn: string;
  simulationSetup: {
    toolName: string;
    simulatorUrl: string;
    stepByStepProcedure: string[];
    stepByStepProcedureEn: string[];
    measurementPoints: string[];
    measurementPointsEn: string[];
    whatToChange: string;
    whatToChangeEn: string;
    whatToObserve: string;
    whatToObserveEn: string;
  };
  myWorkflow: WorkflowStep[];
  expectedResult: string;
  expectedResultEn: string;
  comparisonTable: ProjectResultComparison[];
  sweepTable?: SweepTable;
  graphs: ProjectGraph[];
  pythonCode?: string;
  engineeringInterpretation: string;
  engineeringInterpretationEn: string;
  sourcesOfErrorAndLimitations: string[];
  sourcesOfErrorAndLimitationsEn: string[];
  whatILearned: string[];
  whatILearnedEn: string[];
  whatIWouldStudyNext: string[];
  whatIWouldStudyNextEn: string[];
  completionChecklist: CompletionChecklistItem[];
  sources: ProjectSource[];
  
  // Legacy compatibility fields
  objective?: string;
  objectiveEn?: string;
  engineeringConcept?: string;
  engineeringConceptEn?: string;
  theory?: string;
  theoryEn?: string;
  technicalSummary?: {
    input: string;
    inputEn: string;
    components: string;
    componentsEn: string;
    calculatedResult: string;
    calculatedResultEn: string;
    simulatedResult: string;
    simulatedResultEn: string;
  };
  mathematicalCalculations?: ProjectCalculationStep[];
  simulationDetails?: {
    toolName: string;
    simulatorUrl: string;
    isExternalSimulator: boolean;
    setupDescription: string;
    setupDescriptionEn: string;
    parameters: { name: string; value: string; unit: string }[];
    diagramType: string;
  };
  resultsTable?: any[];
  resultsAnalysis?: string;
  resultsAnalysisEn?: string;
}
