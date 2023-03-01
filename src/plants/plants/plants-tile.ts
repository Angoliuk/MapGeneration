/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable no-param-reassign */
import { getBiomeType, GetBiomeTypeProps } from './plants-type-determiner';

export const generateBiomeTile = (noises: GetBiomeTypeProps) => {
  const type = getBiomeType(noises);
  return {
    type
  };
};
