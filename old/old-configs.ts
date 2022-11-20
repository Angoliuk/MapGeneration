// relief preset
// hill in the center (3.3 * Math.sin(noise(0.35 * nx, 0.35 * ny))) ** Math.E
// zones (3.3 * Math.sin(noise(0.35 * nx, 0.35 * ny))) ** Math.exp(1.8)
// circle (Math.asin(noise(nx, ny)) * 3) ** Math.E
// central field (Math.asin(noise(0.3 * nx, 0.32 * ny)) * 2.8) ** Math.exp(0.2)
// volcano (Math.sin(noise(0.2 * nx + 3, 0.2 * ny - 0.1)) * 4.3) ** Math.exp(0.7)

// climat preset
// earth (5 * noise(0.1 * nx, 0.4 * ny)) ** Math.E;
// polar ((10 * Math.sin(noise(0.2 * nx, 0.2 * ny))) - 2.54) ** Math.exp(-0.65)
// border to desert ((7 * Math.sin(noise(1 * nx ** 2, 0.25 * ny))) + nx * 3 + 5) ** Math.exp(-0.35)
// border to polar ((7 * Math.sin(noise(1 * nx ** 2, 0.25 * ny))) + nx * 3 + 5) ** Math.exp(-0.35)
// radial climate (Math.abs((2.3 * nx - 3.8 * (ny / 2.2)) - 2.6 ** Math.exp(-0.2)) + Math.abs(0.2 * ((4 * Math.asin(noise(1.8 * nx + 0.2, 0.5 * ny ** 2))) + ny * 0.5 + nx * 0.25 + 0.1) ** Math.exp(-0.02) + Math.acos(nx) + ny * 0.8))
// just cool climate Math.abs((3.5 * nx * 4.5 * ny) - 2.7 ** Math.exp(-0.02)) + Math.abs(0.2 * ((8 * Math.asin(noise(1.3 * nx + 0.2, 0.5 * ny ** 2))) + ny * 0.2 + nx * 0.25 + 0.1) ** Math.exp(-0.5) + Math.acos(nx) + ny * 3.5)
