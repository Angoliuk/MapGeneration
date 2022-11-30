// import { getBiomeType } from '../Biome/biome-type-determiner';
import { getClimateType } from '../Climate/climate-type-determiner';
import { getHumidityType } from '../Humidity/humidity-type-determiner';
import { getLightType } from '../Light/light-type-determiner';
import { getReliefType } from '../Relief/relief-type-determiner';
import { NoiseNames } from './noise-names';

export const noiseDeterminers = {
  // [NoiseNames.BIOME]: getBiomeType,
  [NoiseNames.CLIMATE]: getClimateType,
  [NoiseNames.HUMIDITY]: getHumidityType,
  [NoiseNames.RELIEF]: getReliefType,
  [NoiseNames.LIGHT]: getLightType
} as const;
