export const defaultCompare = <T>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
};
