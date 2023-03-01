import { pointSize } from '../constants/world';

export interface DrawPointProperties {
  mapContext: CanvasRenderingContext2D;
  color: string;
  x: number;
  y: number;
}

export const drawTile = ({ mapContext, color, x, y }: DrawPointProperties) => {
  mapContext.fillStyle = color;
  mapContext.fillRect(x * pointSize.width, y * pointSize.height, pointSize.width, pointSize.height);
};
