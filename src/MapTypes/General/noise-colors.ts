// import { biomeColors } from '../Biome/biome-colors';
import { climateColors } from '../Climate/climate-colors';
import { humidityColors } from '../Humidity/humidity-colors';
import { lightColors } from '../Light/light-colors';
import { reliefColors } from '../Relief/relief-colors';
import { NoiseNames } from './noise-names';

export interface NoiseColor {
  from: {
    R: number;
    G: number;
    B: number;
  };
  to: {
    R: number;
    G: number;
    B: number;
  };
}

export const colors = {
  // [NoiseNames.BIOME]: biomeColors,
  [NoiseNames.HUMIDITY]: humidityColors,
  [NoiseNames.CLIMATE]: climateColors,
  [NoiseNames.RELIEF]: reliefColors,
  [NoiseNames.LIGHT]: lightColors
  // [NoiseNames.SOIL]: {}
} as const;
