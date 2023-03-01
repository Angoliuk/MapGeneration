import { NoiseColor } from '../general/noise-colors';
import { BiomeTypes } from './biome-types';

export const biomeColors: Record<BiomeTypes, NoiseColor> = {
  [BiomeTypes.DEEP_WATER]: {
    from: {
      R: 16,
      G: 25,
      B: 164,
    },
    to: {
      R: 105,
      G: 162,
      B: 185,
    },
  },
  [BiomeTypes.SHOAL]: {
    from: {
      R: 16,
      G: 25,
      B: 224,
    },
    to: {
      R: 105,
      G: 162,
      B: 255,
    },
  },
  [BiomeTypes.COAST]: {
    from: {
      R: 251,
      G: 241,
      B: 173,
    },
    to: {
      R: 255,
      G: 248,
      B: 204,
    },
  },
  [BiomeTypes.SAVANNA]: {
    from: {
      R: 245,
      G: 218,
      B: 41,
    },
    to: {
      R: 244,
      G: 215,
      B: 26,
    },
  },
  [BiomeTypes.DESERT]: {
    from: {
      R: 246,
      G: 255,
      B: 0,
    },
    to: {
      R: 255,
      G: 255,
      B: 0,
    },
  },
  [BiomeTypes.FIELD]: {
    from: {
      R: 121,
      G: 214,
      B: 113,
    },
    to: {
      R: 21,
      G: 87,
      B: 1,
    },
  },
  [BiomeTypes.JUNGLE]: {
    from: {
      R: 0,
      G: 221,
      B: 59,
    },
    to: {
      R: 99,
      G: 255,
      B: 0,
    },
  },
  [BiomeTypes.SWAMP]: {
    from: {
      R: 130,
      G: 140,
      B: 81,
    },
    to: {
      R: 166,
      G: 185,
      B: 111,
    },
  },
  [BiomeTypes.FOOTHILLS]: {
    from: {
      R: 144,
      G: 105,
      B: 13,
    },
    to: {
      R: 124,
      G: 88,
      B: 5,
    },
  },
  [BiomeTypes.HILLS]: {
    from: {
      R: 94,
      G: 45,
      B: 5,
    },
    to: {
      R: 73,
      G: 33,
      B: 1,
    },
  },
  [BiomeTypes.PERMAFROST]: {
    from: {
      R: 221,
      G: 239,
      B: 218,
    },
    to: {
      R: 255,
      G: 255,
      B: 255,
    },
  },
  EMPTY: {
    from: {
      R: 0,
      G: 0,
      B: 0,
    },
    to: {
      R: 0,
      G: 0,
      B: 0,
    },
  },
};
