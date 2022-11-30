import { DateTime } from 'luxon';

export const pointSize = {
  width: 20,
  height: 20
};

export const mapSize = {
  width: 250,
  height: 250
};

export const timeConfigs = {
  date: DateTime.fromObject({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0
  }),
  // represent number of frames for a day
  dayTime: 3
};
