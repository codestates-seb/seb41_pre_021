export const getAgoTime = (timeStr, locale = 'en') => {
  let value;
  const timeInfo = new Date(timeStr);
  const options = {
    localeMatcher: 'best fit',
    style: 'long',
    numeric: 'auto',
  };
  const diff = (new Date().getTime() - timeInfo.getTime()) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const rtf = new Intl.RelativeTimeFormat(locale, options);

  if (years > 0) {
    value = rtf.format(0 - years, 'year');
  } else if (months > 0) {
    value = rtf.format(0 - months, 'month');
  } else if (days > 0) {
    value = rtf.format(0 - days, 'day');
  } else if (hours > 0) {
    value = rtf.format(0 - hours, 'hour');
  } else if (minutes > 0) {
    value = rtf.format(0 - minutes, 'minute');
  } else {
    value = rtf.format(0 - diff, 'second');
  }
  return value;
};

export const getTime = (timeStr, locale = 'en') => {
  const timeInfo = new Date(timeStr);
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short',
  };
  return Intl.DateTimeFormat(locale, options)
    .format(timeInfo)
    .replace(/,/g, '');
};

export const getMixedTime = (timeStr) => {
  const timeInfo = new Date(timeStr);
  const diff = (new Date().getTime() - timeInfo.getTime()) / 1000;
  const days = Math.floor(diff / 60 / 60 / 24);
  return days > 0 ? getTime(timeStr) : getAgoTime(timeStr);
};
