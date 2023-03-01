import { getNoiseConfigs } from '../../../services/noises/get-noise';

export const lightNoiseConfigs: getNoiseConfigs = {
  getCoordinates: ({ octavesTotal, octavesLeft, x, y }) => {
    const octavesPassed = octavesTotal - octavesLeft;
    const f = 0.0005 + 0.0003 * octavesPassed;
    const coordX = 0.5 * x * (0.1 * x);
    const coordY = 5 * Math.sin(0.1 * y);
    const multiplier = 2 ** octavesPassed;
    return {
      x: f * coordX * multiplier,
      y: f * coordY * multiplier,
    };
  },
  initialAmplitude: 0.02,
  octavesTotal: 2,
  persistance: 0.4,
};
