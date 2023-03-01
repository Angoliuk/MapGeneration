import { noise } from '../../noises/perlin/perlin-noise';

export const getClimateNoise = (
  coordinateX: number,
  coordinateY: number,
  octaves = 1,
  persistance = 0.5,
  initialAmplitude = 26,
) => {
  let amplitude = initialAmplitude;
  let max = 0;
  let y = coordinateY;
  let x = coordinateX;
  let octavesCount = octaves;
  let result = 0;
  let f = 0.005;
  while (octavesCount > 0) {
    max += amplitude;
    octavesCount--;
    result += noise(1 * f * x, 1 * f * y) * amplitude;
    amplitude *= persistance;
    f += 0.0005;
    x *= 2;
    y *= 2;
  }

  return result / max + 0.5;
};

// -7.3 5
