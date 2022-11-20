import { ClimateTypes } from '../Climate/climate-types';
import { HumidityTypes } from '../Humidity/humidity-types';
import { ReliefTypes } from '../Relief/relief-types';
import { NoiseNames } from './noise-names';

export interface NoiseTypes {
  // [NoiseNames.BIOME]: BiomeTypes,
  [NoiseNames.RELIEF]: ReliefTypes,
  [NoiseNames.CLIMATE]: ClimateTypes,
  [NoiseNames.HUMIDITY]: HumidityTypes
}
