import { BiomeTypes } from '../MapTypes/Biome/biome-types';
import { ClimateTypes } from '../MapTypes/Climate/climate-types';
import { HumidityTypes } from '../MapTypes/Humidity/humidity-types';
import { ReliefTypes } from '../MapTypes/Relief/relief-types';

export interface TileClimate {
  type: ClimateTypes;
  noise: number;
  color: string;
}

export interface TileRelief {
  type: ReliefTypes;
  noise: number;
  color: string;
}

export interface TileHumidity {
  type: HumidityTypes;
  noise: number;
  color: string;
}

export interface TileBiome {
  type: BiomeTypes;
  color: string;
}

export interface TileCoordinates {
  x: number;
  y: number;
}

export interface TileConstructorProp extends TileCoordinates {
  biome: TileBiome;
  climate: TileClimate;
  humidity: TileHumidity;
  relief: TileRelief;
}

export type TilesMapTypes = keyof Omit<Tile, 'x' | 'y'>;

export class Tile {
  x: number;

  y: number;

  climate: TileClimate;

  relief: TileRelief;

  humidity: TileHumidity;

  biome: TileBiome;

  constructor({ humidity, climate, relief, biome, x, y }: TileConstructorProp) {
    this.humidity = humidity;
    this.climate = climate;
    this.relief = relief;
    this.biome = biome;
    this.x = x;
    this.y = y;
  }
}
