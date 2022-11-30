import { generateTile } from '../MapTypes/General/generate-tile';
import { NoiseNames } from '../MapTypes/General/noise-names';
import { LightTile, TileCoordinates, LightTileLight } from './tile';

export const generateLightTile = ({ x, y }: TileCoordinates) => {
  const lightTile = generateTile({ noiseName: NoiseNames.LIGHT, x, y });
  return new LightTile({
    light: lightTile as LightTileLight,
    x,
    y
  });
};
