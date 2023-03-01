import { BiomeTypes } from './biome-types';

export interface GetBiomeTypeProps {
  climateNoise: number;
  reliefNoise: number;
  humidityNoise: number;
}

export const getBiomeType = ({ climateNoise, reliefNoise, humidityNoise }: GetBiomeTypeProps) => {
  if (humidityNoise < 0.32 && climateNoise < 0.13) return BiomeTypes.PERMAFROST;
  if (reliefNoise < 0.25) return BiomeTypes.DEEP_WATER;
  if (reliefNoise < 0.43) return BiomeTypes.SHOAL;
  if (reliefNoise > 0.83) return BiomeTypes.HILLS;
  if (reliefNoise > 0.7) return BiomeTypes.FOOTHILLS;

  if (humidityNoise < 0.32) {
    if (climateNoise > 0.75) return BiomeTypes.DESERT;
    if (climateNoise > 0.6) return BiomeTypes.SAVANNA;
    if (climateNoise < 0.13) return BiomeTypes.PERMAFROST;
  }
  if (humidityNoise > 0.68) {
    // 0.6 special value
    if (climateNoise > 0.75 && climateNoise < 0.9) {
      return BiomeTypes.JUNGLE;
      // 0.35 special value
    } else if (climateNoise > 0.25 && climateNoise < 0.35) {
      return BiomeTypes.SWAMP;
    }
  }

  if (reliefNoise > 0.43 && reliefNoise < 0.45 && climateNoise > 0.45 && humidityNoise > 0.05 && humidityNoise < 0.92) return BiomeTypes.COAST;

  return BiomeTypes.FIELD;
};
