import { climateNoiseConfigs } from '../Climate/climate-configs';
import { humidityNoiseConfigs } from '../Humidity/humidity-configs';
import { lightNoiseConfigs } from '../Light/light-configs';
import { reliefNoiseConfigs } from '../Relief/relief-configs';
import { getNoiseConfigs } from './get-noise';
import { NoiseNames } from './noise-names';

export const noiseConfigs: Record<NoiseNames, getNoiseConfigs> = {
  [NoiseNames.RELIEF]: reliefNoiseConfigs,
  [NoiseNames.CLIMATE]: climateNoiseConfigs,
  [NoiseNames.HUMIDITY]: humidityNoiseConfigs,
  [NoiseNames.LIGHT]: lightNoiseConfigs
};
