export default function minimumSwaps(array) {
  const arr = [...array];
  let swaps = 0;
  const map = arr.reduce((acc, e, i) => ({
    ...acc,
    [e]: i + 1,
  }), {});

  for (let i = 1; i <= arr.length; i += 1) {
    if (map[i] !== i) {
      map[arr[i - 1]] = map[i];
      arr[map[i] - 1] = arr[i - 1];
      swaps += 1;
    }
  }

  return swaps;
}
