/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable no-param-reassign */
import { biomeColors } from './biome-colors';
import { getBiomeType, GetBiomeTypeProps as GetBiomeTypeProperties } from './biome-type-determiner';

export const generateBiomeTile = (noises: GetBiomeTypeProperties) => {
  const type = getBiomeType(noises);
  // getting avg noise
  const noise =
    Object.values(noises).reduce((previous: number, key: number) => (previous += key)) / Object.keys(noises).length;
  const u = 1 - noise;
  return {
    type,
    color: `rgb(${biomeColors[type].from.R * u + biomeColors[type].to.R * noise}, ${
      biomeColors[type].from.G * u + biomeColors[type].to.G * noise
    }, ${biomeColors[type].from.B * u + biomeColors[type].to.B * noise})`,
  };
};
