import { generateMapCanvas } from './Map/canvas-map-generator';
import { drawTile } from './Map/draw-tile';
import './styles.css';
import { timeConfigs } from './World/configs';
import { generateWorld } from './World/generate-world';

const { light, world } = generateWorld();

// const plants = generateMatrix({ noiseName: NoiseNames. });
// const plants = generateMatrix({ noiseName: NoiseNames. });

generateMapCanvas({ tilesMatrix: world, mapType: 'climate' });
generateMapCanvas({ tilesMatrix: world, mapType: 'humidity' });
generateMapCanvas({ tilesMatrix: world, mapType: 'relief' });
generateMapCanvas({ tilesMatrix: light, mapType: 'light' });
const moveDayTime = () => {
  const mapContext = (document.getElementById('light') as HTMLCanvasElement).getContext('2d');
  for (const lightRow of light) {
    for (const lightTile of lightRow) {
      lightTile.changeLightOn(0.2);
      drawTile({
        color: lightTile.light.color,
        mapContext,
        x: lightTile.x,
        y: lightTile.y
      });
    }
  }
  setTimeout(() => requestAnimationFrame(moveDayTime), 1000 / timeConfigs.dayTime);
};
requestAnimationFrame(moveDayTime);
// generateMapCanvas({ tilesMatrix: light, mapType: 'light' });
generateMapCanvas({ tilesMatrix: world, mapType: 'biome' });
