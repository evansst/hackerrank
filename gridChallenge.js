const gridChallenge = (matrix) => {
  const transpose = (array) => array[0].map((_, colIndex) => array.map((row) => row[colIndex]));
  const sorted = matrix.map((row) => [...row].sort());

  return transpose(sorted).every((row) => row.join('') === row.sort().join(''))
    ? 'YES'
    : 'NO';
};
