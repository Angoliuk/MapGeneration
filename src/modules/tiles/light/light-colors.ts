import { NoiseColor } from '../general/noise-colors';
import { LightTypes } from './light-types';

export const lightColors: Record<LightTypes, NoiseColor> = {
  [LightTypes.NIGHT]: {
    from: {
      R: 61,
      G: 61,
      B: 64,
    },
    to: {
      R: 23,
      G: 22,
      B: 22,
    },
  },
  [LightTypes.TRANSITION]: {
    from: {
      R: 251,
      G: 248,
      B: 234,
    },
    to: {
      R: 252,
      G: 252,
      B: 227,
    },
  },
  [LightTypes.DAY]: {
    from: {
      R: 251,
      G: 253,
      B: 158,
    },
    to: {
      R: 253,
      G: 242,
      B: 93,
    },
  },
};

export type LightTypesColorsType = typeof lightColors;
