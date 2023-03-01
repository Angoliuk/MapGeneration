import { mapSize, pointSize } from '../constants/world';
import { WorldTile, WorldTilesMapTypes } from '../modules/world/world-tiles';
import { drawTile } from './draw-tile';

export type GenerateWorldMapCanvas = {
  tilesMatrix: WorldTile[][];
  mapType: WorldTilesMapTypes;
};

export type GenerateMapCanvasProperties = GenerateWorldMapCanvas;

export const generateMapCanvas = ({ tilesMatrix, mapType }: GenerateMapCanvasProperties) => {
  let map = document.querySelector('#' + mapType) as HTMLCanvasElement;
  if (!map) {
    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');

    map = document.createElement('canvas');
    map.id = mapType;
    mapContainer.prepend(map);
    document.body.insertAdjacentElement('afterbegin', mapContainer);
  }

  const mapContext = map.getContext('2d');

  if (mapContext === null) return alert('bib bop');

  map.width = mapSize.width * pointSize.width;
  map.height = mapSize.height * pointSize.height;

  for (let y = 0; y < mapSize.height; y++) {
    for (let x = 0; x < mapSize.width; x++) {
      drawTile({
        color: tilesMatrix[y][x][mapType].color,
        mapContext,
        x,
        y,
      });
    }
  }
};
