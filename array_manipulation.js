// export function arrayManipulation(n, queries) {
//   let array = Array(n).fill(0)
//   let max = -Infinity

//   for(let i = 0; i < queries.length; i++) {
//     for(let j = queries[i][0] - 1; j < queries[i][1]; j++) {
//       array[j] += queries[i][2]
//       max = array[j] > max ? array[j] : max
//     }
//   }

//   return max
// }

// export const arrayManipulation = (n, queries) => {
//   let array = [
//     [1, n, 0]
//   ]

//   for(const query of queries) {
//     for(let i = 0; i < array.length; i++) {
//       if(array[i][0] > query[1] || array[i][1] < query[0]) {
//         array.push(query)
//         break
//       } else if(array[i][0] > query[0] && array[i][1] < query[1]) {
//         array[i] = query
//         break
//       } else {
//         console.log(array[i], query)
//       }
//     }
//   }
//   return array
// }

export const arrayManipulation = (n, queries) => {
  let array = Array(n + 1).fill(0)
  let max = 0

  for(const [a, b, k] of queries) {
    array[a] += k
    array[b + 1] -= k
  }

  for(let i = 1; i < array.length; i++) {
    array[i] += array[i - 1]
    max = array[i] > max ? array[i] : max
  }
  
  return max
}