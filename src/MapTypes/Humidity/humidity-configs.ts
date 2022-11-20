import { getNoiseConfigs } from '../General/get-noise';

export const humidityNoiseConfigs: getNoiseConfigs = {
  getCoordinates: ({ octavesTotal, octavesLeft, x, y }) => {
    const octavesPassed = octavesTotal - octavesLeft;
    const f = 0.008 + (0.003 * octavesPassed);
    const coordX = (x % 2 === 0 ? 0.9 : 1.1) * x ** Math.exp(0.1);
    const coordY = (x % 2 === 0 ? 1.1 : 0.9) * y ** Math.exp(-0.1);
    const multiplier = 2 ** octavesPassed;
    return {
      x: f * coordX * multiplier,
      y: f * coordY * multiplier
    };
  },
  initialAmplitude: 25,
  octavesTotal: 6,
  persistance: 0.55
};
