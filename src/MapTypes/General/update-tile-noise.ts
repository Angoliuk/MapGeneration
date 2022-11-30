import { getType } from './get-type';
import { colors } from './noise-colors';
import { NoiseNames } from './noise-names';

export interface GenerateTileProps {
  noiseName: NoiseNames;
  noise: number;
}

export const updateTile = ({ noiseName, noise }: GenerateTileProps) => {
  const type = getType(noise, noiseName);
  const u = 1 - noise;
  return {
    noise,
    type,
    // @ts-expect-error types in colors
    color: `rgb(${ colors[noiseName][type].from.R * u + colors[noiseName][type].to.R * noise }, ${ colors[noiseName][type].from.G * u + colors[noiseName][type].to.G * noise }, ${ colors[noiseName][type].from.B * u + colors[noiseName][type].to.B * noise })`
  };
};
