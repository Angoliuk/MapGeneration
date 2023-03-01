import { NoiseColor } from '../general/noise-colors';
import { HumidityTypes } from './humidity-types';

export const humidityColors: Record<HumidityTypes, NoiseColor> = {
  [HumidityTypes.MINIMAL]: {
    from: {
      R: 255,
      G: 255,
      B: 255,
    },
    to: {
      R: 19,
      G: 25,
      B: 255,
    },
  },
  [HumidityTypes.AVG_MINIMAL]: {
    from: {
      R: 185,
      G: 253,
      B: 255,
    },
    to: {
      R: 169,
      G: 220,
      B: 244,
    },
  },
  [HumidityTypes.AVERAGE]: {
    from: {
      R: 180,
      G: 210,
      B: 235,
    },
    to: {
      R: 230,
      G: 150,
      B: 250,
    },
  },
  [HumidityTypes.AVG_MAXIMAL]: {
    from: {
      R: 242,
      G: 136,
      B: 255,
    },
    to: {
      R: 204,
      G: 134,
      B: 236,
    },
  },
  [HumidityTypes.MAXIMAL]: {
    from: {
      R: 161,
      G: 62,
      B: 207,
    },
    to: {
      R: 86,
      G: 19,
      B: 117,
    },
  },
};

export type HumidityColorsType = typeof humidityColors;
