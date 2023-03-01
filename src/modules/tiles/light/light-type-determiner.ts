import { LightTypes } from './light-types';

export const getLightType = (lightNoise: number) => {
  if (lightNoise < 0.45) return LightTypes.DAY;
  if (lightNoise < 0.55) return LightTypes.TRANSITION;
  return LightTypes.NIGHT;
};
