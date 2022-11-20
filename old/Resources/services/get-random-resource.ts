// import {
//   GetRandomResourceTypeProps,
//   ResourcesTypes
// } from '../types';
// import { getNearbyResources } from './get-nearby-resources';
// import { resources } from '../../../src/configs';

// export const getRandomResourceType = (
//   props: GetRandomResourceTypeProps
// ): ResourcesTypes => {
//   const possibleResources = Object.keys(resources).filter(
//     resourceKey => resources[resourceKey as ResourcesTypes].total > 0
//   ) as ResourcesTypes[];

//   if (possibleResources.length === 0) {
//     return ResourcesTypes.GROUND;
//   }

//   const nearbyResources = getNearbyResources(props).filter(
//     (resource) => Math.floor(Math.random() * 100) <= resources[resource].chanceToBeNear &&
//       resources[resource].total > 0
//   );

//   const resourcesVariants = nearbyResources.length > 0 ? nearbyResources : possibleResources;

//   const resourceIndex = Math.floor(Math.random() * resourcesVariants.length);
//   const resource = resourcesVariants[resourceIndex];

//   resources[resource].total -= 1;
//   return resource;
// };
