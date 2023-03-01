import { getNoiseConfigs } from '../../noises/get-noise';

export const reliefNoiseConfigs: getNoiseConfigs = {
  getCoordinates: ({ octavesTotal, octavesLeft, x, y }) => {
    const octavesPassed = octavesTotal - octavesLeft;
    const f = 0.005 + 0.0005 * octavesPassed;
    const multiplier = 2 ** octavesPassed;
    return {
      x: f * x * multiplier,
      y: f * y * multiplier,
    };
  },
  initialAmplitude: 25,
  octavesTotal: 8,
  persistance: 0.55,
};
