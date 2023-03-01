import { HumidityTypes } from './humidity-types';

export const getHumidityType = (humidityNoise: number) => {
  if (humidityNoise < 0.05) return HumidityTypes.MINIMAL;
  if (humidityNoise < 0.32) return HumidityTypes.AVG_MINIMAL;
  if (humidityNoise < 0.68) return HumidityTypes.AVERAGE;
  if (humidityNoise < 0.92) return HumidityTypes.AVG_MAXIMAL;
  return HumidityTypes.MAXIMAL;
};
