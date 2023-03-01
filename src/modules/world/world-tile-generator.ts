import { generateBiomeTile } from '../tiles/biome/biome-tile';
import { tiles } from '../tiles/tile-generator';
import { TileCoordinates, WorldTile } from './world-tiles';

export const generateWorldTile = ({ x, y }: TileCoordinates) => {
  const climateTile = tiles.CLIMATE({ x, y });
  const reliefTile = tiles.RELIEF({ x, y });
  const humidityTile = tiles.HUMIDITY({ x, y });
  const lightTile = tiles.LIGHT({ x, y });
  const biomeTile = generateBiomeTile({
    climateNoise: climateTile.noise,
    humidityNoise: humidityTile.noise,
    reliefNoise: reliefTile.noise,
  });
  return new WorldTile({
    biome: biomeTile,
    climate: climateTile,
    relief: reliefTile,
    humidity: humidityTile,
    light: lightTile,
    x,
    y,
  });
};
