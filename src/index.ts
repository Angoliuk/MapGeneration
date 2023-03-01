import './styles.css';

import { timer } from './components/timer/timer';
import { pointSize, timeConfigs } from './constants/world';
import { generateMapCanvas } from './map/canvas-map-generator';
import { drawTile } from './map/draw-tile';
import { generateWorld } from './modules/world/world-generator';
import { WorldTile } from './modules/world/world-tiles';

class World {
  constructor() {
    this._world = generateWorld();
  }

  _world: {
    world: WorldTile[][];
  };

  get world() {
    return this._world;
  }
}

const generatedWorld = new World();

const moveDayTime = () => {
  const mapContext = (document.querySelector('#light') as HTMLCanvasElement).getContext('2d');
  if (!mapContext) return;
  const { world } = generatedWorld.world;
  for (const worldRow of world) {
    for (const worldTile of worldRow) {
      worldTile.changeLightOn(0.2);
      drawTile({
        color: worldTile.light.color,
        mapContext,
        x: worldTile.x,
        y: worldTile.y,
      });
    }
  }
  setTimeout(() => requestAnimationFrame(moveDayTime), timeConfigs.dayTime);
};

const createControls = () => {
  const biggerScaleButton = document.createElement('button');
  biggerScaleButton.textContent = '+';
  biggerScaleButton.classList.add('scale-button');
  biggerScaleButton.addEventListener('click', () => {
    biggerScaleButton.disabled = true;
    biggerScaleButton.textContent = 'wait';
    setTimeout(() => {
      pointSize.height += 5;
      pointSize.width += 5;
      drawWorld();
      biggerScaleButton.disabled = false;
      biggerScaleButton.textContent = '+';
    }, 0);
  });

  const scaleText = document.createElement('p');
  scaleText.classList.add('scale-text');
  scaleText.textContent = 'scale';

  const smallerScaleButton = document.createElement('button');
  smallerScaleButton.textContent = '-';
  smallerScaleButton.classList.add('scale-button');
  smallerScaleButton.addEventListener('click', () => {
    smallerScaleButton.disabled = true;
    smallerScaleButton.textContent = 'wait';
    setTimeout(() => {
      pointSize.height -= pointSize.height > 5 ? 5 : 0;
      pointSize.width -= pointSize.width > 5 ? 5 : 0;
      drawWorld();
      smallerScaleButton.disabled = false;
      smallerScaleButton.textContent = '-';
    }, 0);
  });

  const scaleControlsWrapper = document.createElement('div');
  scaleControlsWrapper.classList.add('scale-button-wrapper');

  const navBar = document.createElement('div');
  navBar.classList.add('navbar');

  scaleControlsWrapper.prepend(biggerScaleButton);
  scaleControlsWrapper.prepend(scaleText);
  scaleControlsWrapper.prepend(smallerScaleButton);
  navBar.prepend(scaleControlsWrapper);
  navBar.prepend(timer());
  document.body.prepend(navBar);
};

const drawWorld = () => {
  const { world } = generatedWorld.world;
  generateMapCanvas({ tilesMatrix: world, mapType: 'climate' });
  generateMapCanvas({ tilesMatrix: world, mapType: 'humidity' });
  generateMapCanvas({ tilesMatrix: world, mapType: 'relief' });
  generateMapCanvas({ tilesMatrix: world, mapType: 'light' });
  generateMapCanvas({ tilesMatrix: world, mapType: 'biome' });
};

drawWorld();
createControls();
requestAnimationFrame(moveDayTime);
