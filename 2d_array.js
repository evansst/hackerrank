function hourglassSum(arr) {
  let maxSum = -Infinity, sum = 0

  for(let i = 0; i < arr.length - 2; i++) {
    for(let j = 0; j < arr[i].length - 2; j++) {
      sum = (
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      )
      maxSum = sum > maxSum ? sum : maxSum
    }
  }

  return maxSum
}

console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]))