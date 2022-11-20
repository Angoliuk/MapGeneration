import { mapSize } from '../../configs';
import { getNoise } from './get-noise';
import { getType } from './get-type';
import { colors } from './noise-colors';
import { noiseConfigs } from './noise-configs';
import { NoiseNames } from './noise-names';

export interface generateMatrixProps {
  noiseName: NoiseNames;
}

export const generateMatrix = ({ noiseName }: generateMatrixProps): Array<Array<string>> => {
  const pixels: string[][] = [];
  for (let y = 0; y < mapSize.height; y++) {
    pixels.push([]);
    for (let x = 0; x < mapSize.width; x++) {
      const noise = getNoise({ ...noiseConfigs[noiseName], x, y });
      const type = getType(noise, noiseName);
      const u = 1 - noise;
      // @ts-expect-error types in colors
      pixels[y][x] = `rgb(${ colors[noiseName][type].from.R * u + colors[noiseName][type].to.R * noise }, ${ colors[noiseName][type].from.G * u + colors[noiseName][type].to.G * noise }, ${ colors[noiseName][type].from.B * u + colors[noiseName][type].to.B * noise })`;
    }
  }
  return pixels;
};
