export function getStarsFromRating(rating: number): string {
  return `${20 * rating}%`;
}

export function uniqueBy<T, U>(a: Array<T>, key: (arg0: T) => U): Array<T> {
  const seen = new Set();
  return a.filter((item) => {
    const k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}

export function checkPassword(password: string) {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasLetter && hasNumber && password.length >= 3;
}
