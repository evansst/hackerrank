export default function abbreviation(a, b) {
  const stringA = a.split('');

  return stringA.reduce((result, c) => {
    if (c === c.toUpperCase()) {
      if (!b.includes(c)) {
        return 'NO';
      }
    }
    return result;
  }, 'YES');
}
