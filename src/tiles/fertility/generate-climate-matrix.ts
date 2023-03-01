import { mapSize } from '../../world/configs';
import { climateColors } from './climate-colors';
import { getClimateNoise } from './climate-noise';
import { getClimateType } from './climate-type-determiner';

export const generateClimateMatrix = (): Array<Array<string>> => {
  const pixels: string[][] = [];
  for (let y = 0; y < mapSize.height; y++) {
    pixels.push([]);
    for (let x = 0; x < mapSize.width; x++) {
      const n = getClimateNoise(
        mapSize.width / 2 < x ? mapSize.width / 2 - (x - mapSize.width / 2) : x,
        mapSize.height / 2 < y ? mapSize.height / 2 - (y - mapSize.height / 2) : y,
        8,
      );
      const reliefType = getClimateType(n);
      const u = 1 - n;
      pixels[y][x] = `rgb(${climateColors[reliefType].from.R * u + climateColors[reliefType].to.R * n}, ${
        climateColors[reliefType].from.G * u + climateColors[reliefType].to.G * n
      }, ${climateColors[reliefType].from.B * u + climateColors[reliefType].to.B * n})`;
    }
  }
  return pixels;
};
