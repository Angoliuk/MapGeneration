import { ReliefTypes } from './relief-types';

export const getReliefType = (reliefNoise: number) => {
  if (reliefNoise < 0.25) return ReliefTypes.DEEP_WATER;
  if (reliefNoise < 0.43) return ReliefTypes.SHOAL;
  if (reliefNoise < 0.55) return ReliefTypes.LOWLANDS;
  if (reliefNoise < 0.7) return ReliefTypes.PLAINS;
  if (reliefNoise < 0.83) return ReliefTypes.HIGHLANDS;
  return ReliefTypes.HILLS;
};
