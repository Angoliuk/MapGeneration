import { ClimateTypes } from './climate-types';

export const getClimateType = (climateNoise: number) => {
  if (climateNoise < 0.13) return ClimateTypes.POLAR;
  if (climateNoise < 0.25) return ClimateTypes.SUBPOLAR;
  if (climateNoise < 0.45) return ClimateTypes.TEMPERATE;
  if (climateNoise < 0.6) return ClimateTypes.SUBTEMPERATE;
  if (climateNoise < 0.75) return ClimateTypes.DRY;
  if (climateNoise < 0.9) return ClimateTypes.SUBTROPICAL;
  return ClimateTypes.TROPICAL;
};
