import { mapSize } from './configs';
import { generateLightTile } from './generate-light-tile';
import { generateWorldTile } from './generate-world-tile';
import { LightTile, WorldTile } from './tile';

export const generateWorld = () => {
  const world: WorldTile[][] = [];
  const light: LightTile[][] = [];
  for (let y = 0; y < mapSize.height; y++) {
    world.push([]);
    light.push([]);
    for (let x = 0; x < mapSize.width; x++) {
      world[y].push(generateWorldTile({ x, y }));
      light[y].push(generateLightTile({ x, y }));
    }
  }
  return {
    world,
    light
  };
};
