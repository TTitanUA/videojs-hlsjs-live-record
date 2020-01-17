const normalize = (number) => (number < 10 ? '0' + number : number);

export const toFormatYmdHis = (date, separator) => {
  return [
    date.getFullYear(),
    normalize(date.getMonth() + 1),
    normalize(date.getDate()),
    normalize(date.getHours()),
    normalize(date.getMinutes()),
    normalize(date.getSeconds()),
  ].join(separator);
};

export const nowInFormatYmdHis = (separator = '-') => {
  return toFormatYmdHis(new Date(), separator);
};
