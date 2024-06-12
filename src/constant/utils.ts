export function getStarsFromRating(rating: number): string {
  return `${20 * Math.floor(rating)}%`;
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

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('default', {month: 'long', year: 'numeric'});
}
