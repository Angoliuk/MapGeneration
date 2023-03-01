import { mapSize } from '../../constants/world';
import { getNoiseConfigs } from '../../noises/get-noise';

export const climateNoiseConfigs: getNoiseConfigs = {
  getCoordinates: ({ octavesTotal, octavesLeft, x, y }) => {
    const octavesPassed = octavesTotal - octavesLeft;
    const f = 0.005 + 0.0005 * octavesPassed;
    const coordX = mapSize.width / 2 < x ? mapSize.width / 2 - (x - mapSize.width / 2) : x;
    const coordY = mapSize.height / 2 < y ? mapSize.height / 2 - (y - mapSize.height / 2) : y;
    const multiplier = 2 ** octavesPassed;
    return {
      x: f * coordX * multiplier,
      y: f * coordY * multiplier,
    };
  },
  initialAmplitude: 15,
  octavesTotal: 6,
  persistance: 0.5,
};
