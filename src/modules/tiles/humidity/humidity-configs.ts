import { getNoiseConfigs } from '../../../services/noises/get-noise';

export const humidityNoiseConfigs: getNoiseConfigs = {
  getCoordinates: ({ octavesTotal, octavesLeft, x, y }) => {
    const octavesPassed = octavesTotal - octavesLeft;
    const f = 0.008 + 0.003 * octavesPassed;
    const coordX = 0.8 * x ** Math.exp(0.1);
    const coordY = y ** Math.exp(-0.1);
    const multiplier = 2 ** octavesPassed;
    return {
      x: f * coordX * multiplier,
      y: f * coordY * multiplier,
    };
  },
  initialAmplitude: 25,
  octavesTotal: 5,
  persistance: 0.5,
};
