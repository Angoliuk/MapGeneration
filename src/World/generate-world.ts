import { generateBiomeTile } from '../MapTypes/Biome/biome-tile';
import { generateTile } from '../MapTypes/General/generate-tile';
import { NoiseNames } from '../MapTypes/General/noise-names';
import { mapSize } from './configs';
import { Tile, TileBiome, TileClimate, TileHumidity, TileRelief } from './tile';

export const generateWorld = () => {
  const world: Tile[][] = [];
  for (let y = 0; y < mapSize.height; y++) {
    world.push([]);
    for (let x = 0; x < mapSize.width; x++) {
      const climateTile = generateTile({ noiseName: NoiseNames.CLIMATE, x, y });
      const reliefTile = generateTile({ noiseName: NoiseNames.RELIEF, x, y });
      const humidityTile = generateTile({ noiseName: NoiseNames.HUMIDITY, x, y });
      const biomeTile = generateBiomeTile({ climateNoise: climateTile.noise, humidityNoise: humidityTile.noise, reliefNoise: reliefTile.noise });
      world[y].push(
        new Tile({
          biome: biomeTile as TileBiome,
          climate: climateTile as TileClimate,
          relief: reliefTile as TileRelief,
          humidity: humidityTile as TileHumidity,
          x,
          y
        })
      );
    }
  }
  return world;
};
