import { NoiseColor } from '../General/noise-colors';
import { ReliefTypes } from './relief-types';

export const reliefColors: Record<ReliefTypes, NoiseColor> = {
  [ReliefTypes.DEEP_WATER]: {
    from: {
      R: 16,
      G: 25,
      B: 164
    },
    to: {
      R: 105,
      G: 162,
      B: 185
    }
  },
  [ReliefTypes.SHOAL]: {
    from: {
      R: 16,
      G: 25,
      B: 224
    },
    to: {
      R: 105,
      G: 162,
      B: 255
    }
  },
  [ReliefTypes.LOWLANDS]: {
    from: {
      R: 61,
      G: 222,
      B: 58
    },
    to: {
      R: 41,
      G: 179,
      B: 39
    }
  },
  [ReliefTypes.PLAINS]: {
    from: {
      R: 36,
      G: 118,
      B: 16
    },
    to: {
      R: 22,
      G: 98,
      B: 3
    }
  },
  [ReliefTypes.HIGHLANDS]: {
    from: {
      R: 197,
      G: 147,
      B: 72
    },
    to: {
      R: 189,
      G: 128,
      B: 37
    }
  },
  [ReliefTypes.HILLS]: {
    from: {
      R: 123,
      G: 66,
      B: 17
    },
    to: {
      R: 106,
      G: 53,
      B: 10
    }
  }
};

export type ReliefColorsType = typeof reliefColors;
