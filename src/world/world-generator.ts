import { mapSize } from '../constants/world';
import { generateWorldTile } from './world-tile-generator';
import { WorldTile } from './world-tiles';

export const generateWorld = () => {
  const world: WorldTile[][] = [];
  for (let y = 0; y < mapSize.height; y++) {
    world.push([]);
    for (let x = 0; x < mapSize.width; x++) {
      world[y].push(generateWorldTile({ x, y }));
    }
  }
  return {
    world,
  };
};
