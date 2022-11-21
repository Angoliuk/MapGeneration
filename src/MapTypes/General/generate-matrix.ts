import { mapSize } from '../../World/configs';
import { generateTile } from './generate-tile';
import { NoiseNames } from './noise-names';

export interface generateMatrixProps {
  noiseName: NoiseNames;
}
/**
 * @deprecated
 */
export const generateMatrix = ({ noiseName }: generateMatrixProps): Array<Array<string>> => {
  const pixels: string[][] = [];
  for (let y = 0; y < mapSize.height; y++) {
    pixels.push([]);
    for (let x = 0; x < mapSize.width; x++) {
      const tile = generateTile({ noiseName, x, y });
      pixels[y][x] = tile.color;
    }
  }
  return pixels;
};
