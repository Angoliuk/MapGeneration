import { generateBiomeTile } from '../MapTypes/Biome/biome-tile';
import { generateTile } from '../MapTypes/General/generate-tile';
import { NoiseNames } from '../MapTypes/General/noise-names';
import { WorldTile, WorldTileBiome, WorldTileClimate, TileCoordinates, WorldTileHumidity, WorldTileRelief } from './tile';

export const generateWorldTile = ({ x, y }: TileCoordinates) => {
  const climateTile = generateTile({ noiseName: NoiseNames.CLIMATE, x, y });
  const reliefTile = generateTile({ noiseName: NoiseNames.RELIEF, x, y });
  const humidityTile = generateTile({ noiseName: NoiseNames.HUMIDITY, x, y });
  const biomeTile = generateBiomeTile({ climateNoise: climateTile.noise, humidityNoise: humidityTile.noise, reliefNoise: reliefTile.noise });
  return new WorldTile({
    biome: biomeTile as WorldTileBiome,
    climate: climateTile as WorldTileClimate,
    relief: reliefTile as WorldTileRelief,
    humidity: humidityTile as WorldTileHumidity,
    x,
    y
  });
};
