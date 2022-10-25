import { DATE_FORMAT } from '../constants/constants';
import { format as dateFormat } from 'date-fns';

type DateFormatOptionsType = {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: number;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
};

export function isDateValid(date: Date | null) {
  return date && date.toString() !== 'Invalid Date';
}

export const formatDate = (
  date?: Date | string | null,
  format = DATE_FORMAT,
  options: DateFormatOptionsType = {}
) => {
  if (date === null || date === undefined) {
    return undefined;
  }

  if (typeof date === 'string') {
    date = new Date(date);
  }

  if (!isDateValid(date)) {
    return '';
  }

  return dateFormat(date, format, options);
};
