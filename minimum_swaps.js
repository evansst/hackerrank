export function minimumSwaps(arr) {
  let swaps = 0
  let map = arr.reduce((map, e, i) => {
    map[e] = i + 1
    return map
  }, new Map())

  for(let i = 1; i <= arr.length; i++) {
    if(map[i] != i) {
      map[arr[i - 1]] = map[i]
      arr[map[i] - 1] = arr[i - 1]
      swaps++
    }
  }

  return swaps
}

