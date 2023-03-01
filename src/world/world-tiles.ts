import { BiomeTypes } from '../tiles/biome/biome-types';
import { ClimateTypes } from '../tiles/climate/climate-types';
import { HumidityTypes } from '../tiles/humidity/humidity-types';
import { LightTypes } from '../tiles/light/light-types';
import { ReliefTypes } from '../tiles/relief/relief-types';
import { tiles } from '../tiles/tile-generator';

interface TileBase {
  noise: number;
  color: string;
}

export interface WorldTileClimate extends TileBase {
  type: ClimateTypes;
}

export interface WorldTileRelief extends TileBase {
  type: ReliefTypes;
}

export interface WorldTileHumidity extends TileBase {
  type: HumidityTypes;
}

export interface WorldTileLight extends TileBase {
  type: LightTypes;
}

export interface WorldTileBiome {
  type: BiomeTypes;
  color: string;
}

export interface TileCoordinates {
  x: number;
  y: number;
}

export interface WorldTileConstructorProperty extends TileCoordinates {
  biome: WorldTileBiome;
  climate: WorldTileClimate;
  humidity: WorldTileHumidity;
  relief: WorldTileRelief;
  light: WorldTileLight;
}

export type WorldTilesMapTypes = keyof Omit<WorldTile, 'x' | 'y' | 'changeLightOn'>;

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

  light: WorldTileLight;

  constructor({ humidity, climate, relief, biome, light, x, y }: WorldTileConstructorProperty) {
    super({ x, y });
    this.humidity = humidity;
    this.climate = climate;
    this.relief = relief;
    this.biome = biome;
    this.light = light;
  }

  changeLightOn(value: number) {
    const newNoise = this.light.noise + value > 1 ? this.light.noise + value - 1 : this.light.noise + value;
    this.light = tiles.LIGHT({ x: this.x, y: this.y, noise: newNoise });
  }
}
