import { ResearchPaper } from '../types';
import { INTRO_TOPIC } from './topics/introOverview';
import { CURRICULUM_16_ARTICLES } from './topics/curriculum16';

export const INITIAL_PAPERS: ResearchPaper[] = [
  // 0. System Map & Overview
  INTRO_TOPIC,

  // 1-16. Official 16-Topic Engineering Curriculum
  ...CURRICULUM_16_ARTICLES
];
