import { DateTimeFormatOptions } from 'luxon';

import { timeConfigs } from '../../constants/world';

const localeConfigs: DateTimeFormatOptions = {
  year: 'numeric',
  weekday: 'short',
  month: 'short',
  day: '2-digit',
};

export const timer = () => {
  const timer = document.createElement('p');
  timer.id = 'timer';
  timer.textContent = timeConfigs.date.toLocaleString(localeConfigs);
  setInterval(() => {
    timeConfigs.date = timeConfigs.date.plus({ months: 1 });
    if (!timer) return;
    timer.textContent = timeConfigs.date.toLocaleString(localeConfigs);
  }, timeConfigs.dayTime * 30);
  return timer;
};
