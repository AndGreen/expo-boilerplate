import {
  format,
  isToday,
  isTomorrow,
  isYesterday,
} from 'date-fns';

export const FILE_TIME_FORMAT = 'MM_dd_yyyy';
export const TIME_FORMAT = 'dd.MM.yy';

export const getFileTime = () => format(new Date(), FILE_TIME_FORMAT);

export const getFormattedDate = date => {
  let result;
  if (isToday(date)) result = 'today';
  if (isTomorrow(date)) result = 'tomorrow';
  if (isYesterday(date)) result = 'yesterday';
  if (!result) result = format(date, TIME_FORMAT);
  return `${result} - ${format(date, 'EE').toLowerCase()}`;
};
