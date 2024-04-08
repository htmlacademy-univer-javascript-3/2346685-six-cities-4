export function getStarsFromRating(rating: number): string {
  return `${20 * rating}%`;
}

export function uniqueBy<T, U>(a: Array<T>, key: (arg0: T) => U): Array<T>{
  const seen = new Set();
  return a.filter((item) => {
    const k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
