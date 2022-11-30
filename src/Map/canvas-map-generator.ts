import { mapSize, pointSize } from '../World/configs';
import type { LightTile, LightTilesMapTypes, WorldTile, WorldTilesMapTypes } from '../World/tile';
import { drawTile } from './draw-tile';

export type GenerateWorldMapCanvas = {
  tilesMatrix: WorldTile[][],
  mapType: WorldTilesMapTypes
}

export type GenerateLightMapCanvas = {
  tilesMatrix: LightTile[][],
  mapType: LightTilesMapTypes
}

export type GenerateMapCanvasProps = GenerateWorldMapCanvas | GenerateLightMapCanvas;

export const generateMapCanvas = ({ tilesMatrix, mapType }: GenerateMapCanvasProps) => {
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');

  const map = document.createElement('canvas');
  map.id = mapType;
  const mapContext = map.getContext('2d');

  if (mapContext === null) return alert('bib bop');

  map.width = mapSize.width * pointSize.width;
  map.height = mapSize.height * pointSize.height;

  for (let y = 0; y < mapSize.height; y++) {
    for (let x = 0; x < mapSize.width; x++) {
      drawTile({
        // @ts-expect-error mapType types
        color: tilesMatrix[y][x][mapType].color,
        mapContext,
        x,
        y
      });
    }
  }

  mapContainer.prepend(map);
  document.body.insertAdjacentElement('afterbegin', mapContainer);
};
