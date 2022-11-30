/* eslint-disable no-param-reassign */
import { pointSize } from '../World/configs';

export interface DrawPointProps {
  mapContext: CanvasRenderingContext2D;
  color: string;
  x: number;
  y: number;
}

export const drawTile = ({ mapContext, color, x, y }: DrawPointProps) => {
  mapContext.fillStyle = color;
  mapContext.fillRect(x * pointSize.width, y * pointSize.height, pointSize.width, pointSize.height);
};
