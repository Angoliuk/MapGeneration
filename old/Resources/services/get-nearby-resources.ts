// import { GetNearbyResourcesProps, ResourcesTypes } from '../types';

// export const getNearbyResources = ({ coordinates, diameter, matrix }: GetNearbyResourcesProps): ResourcesTypes[] => {
//   const { x, y } = coordinates;
//   const resourcesNearby: ResourcesTypes[] = [];

//   if (diameter < 1) return resourcesNearby;

//   for (let i = -diameter; i <= diameter; i++) {
//     for (let j = -diameter; j <= diameter; j++) {
//       if (
//         i === 0 && j === 0 ||
//         (x + i) < 0 ||
//         (y + j) < 0 ||
//         x + i >= matrix.length ||
//         y + j >= matrix[0].length
//       ) continue;

//       resourcesNearby.push(matrix[x + i][y + j].type);
//     }
//   }

//   return resourcesNearby;
// };
