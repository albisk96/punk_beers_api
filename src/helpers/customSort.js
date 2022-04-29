import { PRIMITIVES } from '../constants';

// mm/yyyy
const date_regex = /^(0?[1-9]|1[0-2])[\/](19|20)\d{2}$/;

export const customSort = (sortKey) => {
  return (x, y) => {
    const TYPE_OF_SORT = date_regex.test(x[sortKey])
      ? PRIMITIVES.DATE
      : typeof x[sortKey];
    switch (TYPE_OF_SORT) {
      case PRIMITIVES.STRING: {
        if (x[sortKey].toUpperCase() < y[sortKey].toUpperCase()) return -1;
        if (x[sortKey].toUpperCase() > y[sortKey].toUpperCase()) return 1;
      }
      case PRIMITIVES.NUMBER:
        return x[sortKey] - y[sortKey];
      case PRIMITIVES.DATE: {
        return (
          new Date(...x[sortKey].split('/').reverse()) -
          new Date(...y[sortKey].split('/').reverse())
        );
      }
      default:
        return null;
    }
  };
};
