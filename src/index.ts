import './styles.css';
import { generateMapCanvas } from './Map/canvas-map-generator';
import { generateWorld } from './World/generate-world';

const world = generateWorld();

// generateMapCanvas(world, 'climate');
// generateMapCanvas(world, 'relief');
// generateMapCanvas(world, 'humidity');
generateMapCanvas(world, 'biome');
