import './styles.css';
import { generateMapCanvas } from './Map/canvas-map-generator';
import { generateMatrix } from './MapTypes/General/generate-matrix';
import { NoiseNames } from './MapTypes/General/noise-names';

const reliefMatrix = generateMatrix({ noiseName: NoiseNames.RELIEF });
const climateMatrix = generateMatrix({ noiseName: NoiseNames.CLIMATE });
const humidityMatrix = generateMatrix({ noiseName: NoiseNames.HUMIDITY });

generateMapCanvas(humidityMatrix);
generateMapCanvas(climateMatrix);
generateMapCanvas(reliefMatrix);
