function arrayManipulation(n, queries) {
  let array = Array(n).fill(0)

  for(let i = 0; i < queries.length; i++) {
    // array = array.map((e, j) => {
    //   return (j >= queries[i][0] - 1 && j <= queries[i][1] - 1) 
    //     ? e + queries[i][2]
    //     : e
    // })
    for(let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
      array[j] += queries[i][2]
    }
  }

  // return array.reduce((max, e) => e > max ? e : max)
  return Math.max(...array)
}

console.log( 
  arrayManipulation(
    10,
    [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ]
  )
)

[ 1, 9, 16, 16, 31, 24, 16, 16, 15, 0 ]