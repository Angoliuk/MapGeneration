// import { mapSize, pointSize } from '../../src/configs';
// import { getRandomResourceType } from '../Resources/services/get-random-resource';
// import { ResourcesTypes } from '../Resources/types';
// import { Point } from '../point';
// import { MapMatrix } from '../../Map/types';

// export const generateMapMatrix = (): MapMatrix => {
//   const mapMatrix: MapMatrix = [];
//   for (let i = 0; i < mapSize.height; i++) {
//     mapMatrix.push([]);
//     for (let j = 0; j < mapSize.width; j++) {
//       mapMatrix[i].push(new Point({
//         coordinates: { x: i * pointSize.width, y: j * pointSize.height },
//         width: pointSize.width,
//         height: pointSize.height,
//         type: ResourcesTypes.GROUND,
//         color: '#000'
//       }));
//     }
//   }
//   for (let i = 0; i < mapSize.height; i++) {
//     for (let j = 0; j < mapSize.width; j++) {
//       const { coordinates } = mapMatrix[i][j];
//       mapMatrix[i][j].type = getRandomResourceType({ coordinates, diameter: 1, matrix: mapMatrix });
//     }
//   }

//   return mapMatrix;
// };
