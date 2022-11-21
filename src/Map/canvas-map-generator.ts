import { mapSize, pointSize } from '../World/configs';
import type { Tile, TilesMapTypes } from '../World/tile';

export const generateMapCanvas = (tilesMatrix: Tile[][], mapType: TilesMapTypes) => {
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');

  const map = document.createElement('canvas');
  const mapContext = map.getContext('2d');

  if (mapContext === null) return alert('bib bop');

  map.width = mapSize.width * pointSize.width;
  map.height = mapSize.height * pointSize.height;

  for (let y = 0; y < mapSize.height; y++) {
    for (let x = 0; x < mapSize.width; x++) {
      mapContext.fillStyle = tilesMatrix[y][x][mapType].color;
      mapContext.fillRect(x * pointSize.width, y * pointSize.height, pointSize.width, pointSize.height);
    }
  }

  mapContainer.prepend(map);
  document.body.insertAdjacentElement('afterbegin', mapContainer);
};
