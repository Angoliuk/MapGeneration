import { noise } from '../../Noises/Perlin/perlin-noise';

export interface getCoordinatesProps {
  octavesLeft: number;
  octavesTotal: number;
  x: number;
  y: number;
}

export interface getNoiseProps extends getNoiseConfigs {
  x: number;
  y: number;
}

export interface getNoiseConfigs {
  getCoordinates: (props: getCoordinatesProps) => { x: number, y: number }
  octavesTotal?: number;
  persistance?: number;
  initialAmplitude?: number;
}

export const getNoise = ({ getCoordinates, octavesTotal = 1, persistance = 1, initialAmplitude = 1, x, y }: getNoiseProps) => {
  let amplitude = initialAmplitude;
  let max = 0;
  let octavesLeft = octavesTotal;
  let result = 0;
  while (octavesLeft > 0) {
    const { x: coordX, y: coordY } = getCoordinates({ octavesTotal, octavesLeft, x, y });
    result += (noise(coordX, coordY) * amplitude);
    max += amplitude;
    amplitude *= persistance;
    octavesLeft--;
  }

  return (result / max) + 0.5;
};
