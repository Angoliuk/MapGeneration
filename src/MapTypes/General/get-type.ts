import { noiseDeterminers } from './noise-determiners';
import { NoiseNames } from './noise-names';

export const getType = (noise: number, type: NoiseNames) => noiseDeterminers[type](noise);
