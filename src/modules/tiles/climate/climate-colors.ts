import { NoiseColor } from '../general/noise-colors';
import { ClimateTypes } from './climate-types';

export const climateColors: Record<ClimateTypes, NoiseColor> = {
  [ClimateTypes.POLAR]: {
    from: {
      R: 255,
      G: 255,
      B: 255,
    },
    to: {
      R: 237,
      G: 250,
      B: 231,
    },
  },
  [ClimateTypes.SUBPOLAR]: {
    from: {
      R: 41,
      G: 171,
      B: 1,
    },
    to: {
      R: 54,
      G: 196,
      B: 9,
    },
  },
  [ClimateTypes.TEMPERATE]: {
    from: {
      R: 174,
      G: 249,
      B: 144,
    },
    to: {
      R: 161,
      G: 244,
      B: 129,
    },
  },
  [ClimateTypes.SUBTEMPERATE]: {
    from: {
      R: 98,
      G: 252,
      B: 37,
    },
    to: {
      R: 72,
      G: 251,
      B: 2,
    },
  },
  [ClimateTypes.DRY]: {
    from: {
      R: 208,
      G: 249,
      B: 94,
    },
    to: {
      R: 187,
      G: 238,
      B: 45,
    },
  },
  [ClimateTypes.SUBTROPICAL]: {
    from: {
      R: 255,
      G: 210,
      B: 64,
    },
    to: {
      R: 247,
      G: 197,
      B: 35,
    },
  },
  [ClimateTypes.TROPICAL]: {
    from: {
      R: 255,
      G: 154,
      B: 30,
    },
    to: {
      R: 248,
      G: 140,
      B: 9,
    },
  },
};

export type ClimateColorsType = typeof climateColors;
