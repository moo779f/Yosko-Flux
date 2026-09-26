import { ResearchPaper } from '../types';
import { INTRO_TOPIC } from './topics/introOverview';
import { FOUNDATIONS_TOPICS } from './topics/foundations';
import { AC_SIGNALS_TOPICS } from './topics/acSignals';
import { POWER_ENERGY_TOPICS } from './topics/powerEnergy';

export const INITIAL_PAPERS: ResearchPaper[] = [
  // 0. Overview & Map
  INTRO_TOPIC,

  // 1. Basic Circuits: Understanding Electricity: Voltage, Current and Resistance
  FOUNDATIONS_TOPICS[0],

  // 2. Electrical Circuits: Kirchhoff's Laws: The Mathematics of Electrical Circuits
  FOUNDATIONS_TOPICS[1],

  // 3. Mathematics & Physics: Where Electrical Energy Goes: Capacitors and Inductors
  FOUNDATIONS_TOPICS[2],

  // 4. AC & Signals: Reading Electrical Waveforms: An Introduction to Signal Analysis
  AC_SIGNALS_TOPICS[0],

  // 5. AC & Signals: AC Circuits and Phase: Why Sine Waves Matter
  AC_SIGNALS_TOPICS[1],

  // 6. Electrical Circuits / Resonance: Series RLC Resonance: Theory, Calculations and Filters
  AC_SIGNALS_TOPICS[2],

  // 7. AC & Signals: Introduction to Fourier Series and Harmonics in Electrical Signals
  AC_SIGNALS_TOPICS[3],

  // 8. Electrical Power: Active Power, Reactive Power and Power Factor
  POWER_ENERGY_TOPICS[0],

  // 9. Power Transmission: How Electrical Power Is Transmitted Efficiently
  POWER_ENERGY_TOPICS[1],

  // 10. Solar Energy: Solar Energy and the Electrical Grid
  POWER_ENERGY_TOPICS[2],

  // 11. Batteries: Batteries and Energy Storage: Chemistry Meets the Grid
  POWER_ENERGY_TOPICS[3],

  // 12. Electrical Grid: Renewable Energy Integration and Grid Frequency
  POWER_ENERGY_TOPICS[4]
];
