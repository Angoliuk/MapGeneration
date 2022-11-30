import { generateMapCanvas } from './Map/canvas-map-generator';
import { drawTile } from './Map/draw-tile';
import './styles.css';
import { pointSize, timeConfigs } from './World/configs';
import { generateWorld } from './World/generate-world';

setInterval(() => {
  timeConfigs.date = timeConfigs.date.plus({ days: 1 });
  const timer = document.getElementById('timer');
  timer.textContent = timeConfigs.date.toLocaleString({ year: 'numeric', weekday: 'short', month: 'short', day: '2-digit' });
}, timeConfigs.dayTime);

const createControls = () => {
  const biggerScaleButton = document.createElement('button');
  biggerScaleButton.textContent = '+';
  biggerScaleButton.classList.add('scale-button');
  biggerScaleButton.onclick = () => {
    biggerScaleButton.disabled = true;
    biggerScaleButton.textContent = 'wait';
    setTimeout(() => {
      pointSize.height += 5;
      pointSize.width += 5;
      drawWorld();
      biggerScaleButton.disabled = false;
      biggerScaleButton.textContent = '+';
    }, 0);
  };

  const scaleText = document.createElement('p');
  scaleText.classList.add('scale-text');
  scaleText.textContent = 'scale';

  const smallerScaleButton = document.createElement('button');
  smallerScaleButton.textContent = '-';
  smallerScaleButton.classList.add('scale-button');
  smallerScaleButton.onclick = () => {
    smallerScaleButton.disabled = true;
    smallerScaleButton.textContent = 'wait';
    setTimeout(() => {
      pointSize.height -= pointSize.height > 5 ? 5 : 0;
      pointSize.width -= pointSize.width > 5 ? 5 : 0;
      drawWorld();
      smallerScaleButton.disabled = false;
      smallerScaleButton.textContent = '-';
    }, 0);
  };

  const timer = document.createElement('p');
  timer.id = 'timer';
  timer.textContent = timeConfigs.date.toLocaleString({ year: 'numeric', weekday: 'short', month: 'short', day: '2-digit' });

  const scaleControlsWrapper = document.createElement('div');
  scaleControlsWrapper.classList.add('scale-button-wrapper');

  const navBar = document.createElement('div');
  navBar.classList.add('navbar');

  scaleControlsWrapper.prepend(biggerScaleButton);
  scaleControlsWrapper.prepend(scaleText);
  scaleControlsWrapper.prepend(smallerScaleButton);
  navBar.prepend(scaleControlsWrapper);
  navBar.prepend(timer);
  document.body.prepend(navBar);
};

const { light, world } = generateWorld();

const drawWorld = () => {
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
    setTimeout(() => requestAnimationFrame(moveDayTime), timeConfigs.dayTime);
  };
  requestAnimationFrame(moveDayTime);

  generateMapCanvas({ tilesMatrix: world, mapType: 'biome' });
};

drawWorld();
createControls();
