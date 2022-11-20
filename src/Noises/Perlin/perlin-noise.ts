export class Vector {
  x = 0;

  y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public point(vector: Vector) {
    return this.x * vector.x + this.y * vector.y;
  }
}

const shuffle = (tab: number[]) => {
  const shuffled = tab;
  for (let e = shuffled.length - 1; e > 0; e--) {
    const index = Math.round(Math.random() * (e - 1));
    const temp = shuffled[e];

    shuffled[e] = shuffled[index];
    shuffled[index] = temp;
  }
  return shuffled;
};

const makePermutation = () => {
  let permutation = [];
  for (let i = 0; i < 256; i++) {
    permutation.push(i);
  }
  permutation = shuffle(permutation);
  for (let i = 0; i < 256; i++) {
    permutation.push(permutation[i]);
  }

  return permutation;
};

const permutation = makePermutation();

const getConstantVector = (v: number) => {
  // v is the value from the permutation table
  const h = v & 3;
  switch (h) {
    case 0: return new Vector(1, 1);
    case 1: return new Vector(-1, 1);
    case 2: return new Vector(-1, -1);
    default: return new Vector(1, -1);
  }
};

const fade = (t: number) => {
  return ((6 * t - 15) * t + 10) * t * t * t;
};

const lerp = (t: number, a1: number, a2: number) => {
  return a1 + t * (a2 - a1);
};

export const noise = (x: number, y: number) => {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;

  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);

  const topRight = new Vector(xf - 1, yf - 1);
  const topLeft = new Vector(xf, yf - 1);
  const bottomRight = new Vector(xf - 1, yf);
  const bottomLeft = new Vector(xf, yf);

  // Select a value in the array for each of the 4 corners
  const valueTopRight = permutation[permutation[X + 1] + Y + 1];
  const valueTopLeft = permutation[permutation[X] + Y + 1];
  const valueBottomRight = permutation[permutation[X + 1] + Y];
  const valueBottomLeft = permutation[permutation[X] + Y];

  const dotTopRight = topRight.point(getConstantVector(valueTopRight));
  const dotTopLeft = topLeft.point(getConstantVector(valueTopLeft));
  const dotBottomRight = bottomRight.point(getConstantVector(valueBottomRight));
  const dotBottomLeft = bottomLeft.point(getConstantVector(valueBottomLeft));

  const u = fade(xf);
  const v = fade(yf);

  return lerp(
    u,
    lerp(v, dotBottomLeft, dotTopLeft),
    lerp(v, dotBottomRight, dotTopRight)
  );
};

export const noiseMultiOctave = (coordinateX: number, coordinateY: number, octaves: number, persistance = 0.55, initialAmplitude = 1) => {
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
    result += 25 * noise(f * x, f * y) * amplitude;
    amplitude *= persistance;
    f += 0.0005;
    x *= 2;
    y *= 2;
  }

  return ((result / max) + 1) / 2;
};

//   // public GenerateNoise(fx: number, fy: number, octaves = 2, persistence = 0.5) {
//   //   let repeats = octaves;
//   //   let nx = fx; let ny = fy;
//   //   let amplitude = 1;
//   //   let max = 0;
//   //   let result = 0;

//   //   while (repeats > 0) {
//   //     repeats -= 1;
//   //     max += amplitude;
//   //     result += this.Noise(nx, ny) * amplitude;
//   //     amplitude *= persistence;
//   //     nx *= 2;
//   //     ny *= 2;
//   //   }

//   //   return result / max;
//   // }
// }

// fire
// persist 0.7 try from 0.7 to 0.5
// let amplitude = 1.5;
// let max = 0;
// let result = 0;
// let f = 0.005;
// // const resultNoise = ;
// while (octaves > 0) {
//   max += amplitude;
//   octaves--;
//   result += 25 * noise(f * x, f * y) * amplitude;
//   amplitude *= persistance;
//   f += 0.0005;
//   x *= 2;
//   y *= 2;
// }

// return result / max;
// const n = ((noiseMuliOctave(x, y, 8)) + 1) / 2;
// const u = 1 - n;
// pixels[y][x] = `rgb(${ fromColor.R * u + toColor.R * n }, ${ fromColor.G * u + toColor.G * n }, ${ fromColor.B * u + toColor.B * n })`;

// relief
// export const noiseMuliOctave = (x: number, y: number, octaves: number, persistance = 0.6) => {
//   let amplitude = 1;
//   let max = 0;
//   let result = 0;
//   let f = 0.005;
//   // const resultNoise = ;
//   while (octaves > 0) {
//     max += amplitude;
//     octaves--;
//     result += 18 * noise(f * x, f * y) * amplitude;
//     amplitude *= persistance;
//     f += 0.0005;
//     x *= 2;
//     y *= 2;
//   }

//   return result / max;
// };
// const toColorWater = {
//   R: 57,
//   G: 152,
//   B: 219
// };

// const fromColorWater = {
//   R: 16,
//   G: 38,
//   B: 105
// };

// for (let y = 0; y < mapSize.width; y++) {
//   pixels.push([]);
//   for (let x = 0; x < mapSize.height; x++) {
//     // Noise2D generally returns a value in the range [-1.0, 1.0]
//     const n = ((noiseMuliOctave(x, y, 16)) + 1) / 2;
//     // console.log(n)

//     // Transform the range to [0.0, 1.0], supposing that the range of Noise2D is [-1.0, 1.0]
//     // n += 1.0;
//     const c = Math.round(255 * n);
//     // n /= 2.0;
//     // if (n < 0.5) pixels[y][x] = 'rgba(0.0,0.0,' + (c * 2) + ',1.0)';
//     // else if (n < 0.9) pixels[y][x] = 'rgba(0.0,' + c + ',' + Math.round(c * 0.5) + ',1.0)';
//     // else pixels[y][x] = 'rgba(' + c + ',' + c + ',' + c + ',1.0)';
//     const u = 1 - n;
//     if (n < 0.3) {
//       const waterN = n * 0.33;
//       const waterU = 1.5 - waterN;
//       pixels[y][x] = `rgb(${ fromColorWater.R * waterU + toColorWater.R * waterN }, ${ fromColorWater.G * waterU + toColorWater.G * waterN }, ${ fromColorWater.B * waterU + toColorWater.B * waterN })`;

//     } else {
//       const groundN = n * 0.33;
//       const groundU = 1.5 - groundN;
//       pixels[y][x] = `rgb(${ fromColorGround.R * groundU + toColorGround.R * groundN }, ${ fromColorGround.G * groundU + toColorGround.G * groundN }, ${ fromColorGround.B * groundU + toColorGround.B * groundN })`;
//     }
//   }
