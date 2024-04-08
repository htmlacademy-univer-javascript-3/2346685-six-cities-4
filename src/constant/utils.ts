export function getStarsFromRating(rating: number): string {
  return `${20 * rating}%`;
}

export function uniqueBy<T, U>(a: Array<T>, key: (arg0: T) => U): Array<T>{
  let seen = new Set();
  return a.filter(item => {
      let k = key(item);
      return seen.has(k) ? false : seen.add(k);
  });
}