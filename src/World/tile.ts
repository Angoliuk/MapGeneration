import { BiomeTypes } from '../MapTypes/Biome/biome-types';
import { ClimateTypes } from '../MapTypes/Climate/climate-types';
import { NoiseNames } from '../MapTypes/General/noise-names';
import { updateTile } from '../MapTypes/General/update-tile-noise';
import { HumidityTypes } from '../MapTypes/Humidity/humidity-types';
import { LightTypes } from '../MapTypes/Light/light-types';
import { ReliefTypes } from '../MapTypes/Relief/relief-types';

export interface WorldTileClimate {
  type: ClimateTypes;
  noise: number;
  color: string;
}

export interface WorldTileRelief {
  type: ReliefTypes;
  noise: number;
  color: string;
}

export interface WorldTileHumidity {
  type: HumidityTypes;
  noise: number;
  color: string;
}

export interface LightTileLight {
  type: LightTypes;
  noise: number;
  color: string;
}

export interface WorldTileBiome {
  type: BiomeTypes;
  color: string;
}

export interface TileCoordinates {
  x: number;
  y: number;
}

export interface WorldTileConstructorProp extends TileCoordinates {
  biome: WorldTileBiome;
  climate: WorldTileClimate;
  humidity: WorldTileHumidity;
  relief: WorldTileRelief;
}

export interface LightTileConstructorProp extends TileCoordinates {
  light: LightTileLight;
}

export type WorldTilesMapTypes = keyof Omit<WorldTile, 'x' | 'y'>;
export type LightTilesMapTypes = keyof Omit<LightTile, 'x' | 'y' | 'changeLightOn'>;

export class Tile {
  x: number;

  y: number;

  constructor({ x, y }: TileCoordinates) {
    this.x = x;
    this.y = y;
  }
}

export class WorldTile extends Tile {
  climate: WorldTileClimate;

  relief: WorldTileRelief;

  humidity: WorldTileHumidity;

  biome: WorldTileBiome;

  constructor({ humidity, climate, relief, biome, x, y }: WorldTileConstructorProp) {
    super({ x, y });
    this.humidity = humidity;
    this.climate = climate;
    this.relief = relief;
    this.biome = biome;
  }
}

export class LightTile extends Tile {
  light: LightTileLight;

  constructor({ light, x, y }: LightTileConstructorProp) {
    super({ x, y });
    this.light = light;
  }

  changeLightOn(value: number) {
    const newNoise = this.light.noise + value > 1
      ? this.light.noise + value - 1
      : this.light.noise + value;
    this.light = updateTile({ noiseName: NoiseNames.LIGHT, noise: newNoise }) as LightTileLight;
  }
}
