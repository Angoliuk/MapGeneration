import { getNoise } from '../../services/noises/get-noise';
import { climateColors } from './climate/climate-colors';
import { climateNoiseConfigs } from './climate/climate-configs';
import { getClimateType } from './climate/climate-type-determiner';
import { humidityColors } from './humidity/humidity-colors';
import { humidityNoiseConfigs } from './humidity/humidity-configs';
import { getHumidityType } from './humidity/humidity-type-determiner';
import { lightColors } from './light/light-colors';
import { lightNoiseConfigs } from './light/light-configs';
import { getLightType } from './light/light-type-determiner';
import { reliefColors } from './relief/relief-colors';
import { reliefNoiseConfigs } from './relief/relief-configs';
import { getReliefType } from './relief/relief-type-determiner';

export const getColor = (color: NoiseColor, noise: number, u = 1 - noise) => {
  return `rgb(${color.from.R * u + color.to.R * noise}, ${color.from.G * u + color.to.G * noise}, ${
    color.from.B * u + color.to.B * noise
  })`;
};

export enum NoiseNames {
  LIGHT = 'LIGHT',
  CLIMATE = 'CLIMATE',
  HUMIDITY = 'HUMIDITY',
  RELIEF = 'RELIEF',
}

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

export interface GenerateTileProperties {
  noise?: number;
  x: number;
  y: number;
}

export const tiles = {
  [NoiseNames.CLIMATE]: ({ x, y, noise }: GenerateTileProperties) => {
    const tileNoise = noise ?? getNoise({ ...climateNoiseConfigs, x, y });
    const type = getClimateType(tileNoise);
    return {
      type,
      noise: tileNoise,
      color: getColor(climateColors[type], tileNoise),
    };
  },
  [NoiseNames.HUMIDITY]: ({ x, y, noise }: GenerateTileProperties) => {
    const tileNoise = noise ?? getNoise({ ...humidityNoiseConfigs, x, y });
    const type = getHumidityType(tileNoise);
    return {
      type,
      noise: tileNoise,
      color: getColor(humidityColors[type], tileNoise),
    };
  },
  [NoiseNames.LIGHT]: ({ x, y, noise }: GenerateTileProperties) => {
    const tileNoise = noise ?? getNoise({ ...lightNoiseConfigs, x, y });
    const type = getLightType(tileNoise);
    return {
      type,
      noise: tileNoise,
      color: getColor(lightColors[type], tileNoise),
    };
  },
  [NoiseNames.RELIEF]: ({ x, y, noise }: GenerateTileProperties) => {
    const tileNoise = noise ?? getNoise({ ...reliefNoiseConfigs, x, y });
    const type = getReliefType(tileNoise);
    return {
      type,
      noise: tileNoise,
      color: getColor(reliefColors[type], tileNoise),
    };
  },
  [NoiseNames.LIGHT]: ({ x, y, noise }: GenerateTileProperties) => {
    const tileNoise = noise ?? getNoise({ ...lightNoiseConfigs, x, y });
    const type = getLightType(tileNoise);
    return {
      type,
      noise: tileNoise,
      color: getColor(lightColors[type], tileNoise),
    };
  },
};
