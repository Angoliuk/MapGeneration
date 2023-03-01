import { DateTime } from 'luxon';

export const pointSize = {
  width: 5,
  height: 5,
};

export const mapSize = {
  width: 300,
  height: 100,
};

export const timeConfigs = {
  date: DateTime.fromObject({
    year: 0,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
  }),
  // represent ms of day
  dayTime: 100,
};
