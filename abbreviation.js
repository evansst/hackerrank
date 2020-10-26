export default function abbreviation(a, b) {
  return a
    .split('')
    .reduce((result, c) => (
      (c === c.toUpperCase() && !b.includes(c))
        ? 'NO'
        : result
    ), 'YES');
}
