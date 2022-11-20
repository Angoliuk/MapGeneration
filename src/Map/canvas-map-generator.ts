import { mapSize, pointSize } from '../configs';

export const generateMapCanvas = (mapMatrix: Array<Array<string>>) => {
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');

  const map = document.createElement('canvas');
  const mapContext = map.getContext('2d');

  if (mapContext === null) return alert('bib bop');

  map.width = mapSize.width * pointSize.width;
  map.height = mapSize.height * pointSize.height;

  for (let y = 0; y < mapSize.height; y++) {
    for (let x = 0; x < mapSize.width; x++) {
      mapContext.fillStyle = mapMatrix[y][x];
      mapContext.fillRect(x, y, pointSize.width, pointSize.height);
    }
  }

  mapContainer.prepend(map);
  document.body.insertAdjacentElement('afterbegin', mapContainer);
};
