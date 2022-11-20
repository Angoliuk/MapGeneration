// import { pointSize } from '../src/configs';
// import { ResourcesColors } from './Resources/colors';
// import { ResourcesTypes } from './Resources/types';
// import { PointConstructorProps } from './types';

// export class Point {
//   coordinates = { x: 0, y: 0 };

//   width = 10;

//   height = 10;

//   _type = ResourcesTypes.GROUND;

//   _color = ResourcesColors[this.type];

//   constructor({ coordinates, type, width, height, color }: PointConstructorProps) {
//     this.coordinates = coordinates;
//     this.type = type;
//     this.width = width > 0 ? width : pointSize.width;
//     this.height = height > 0 ? height : pointSize.height;
//     // test
//     this._color = color;
//   }

//   set type(newType: ResourcesTypes) {
//     this._type = newType;
//     // this._color = ResourcesColors[newType];
//   }

//   get type() {
//     return this._type;
//   }

//   get color() {
//     return this._color;
//   }
// }
