// function countTriplets(array, r) {
//   let count = 0

//   for(let i = 0; i < array.length - 2; i++) {
//     for(let j = i + 1; j < array.length - 1; j++){
//       for(let k = j + 1; k < array.length; k++) {
//         if(array[k] === array[j] * r && array[j] === array[i] * r)
//           count++
//         if(array[k] > array[j] * r)
//           break
//       }
//       if(array[j] > array[i] * r)
//         break
//     }
//   }
//   return count
// }

function countTriplets(array, r) {
  let s = 0
  const a = array.reduce((acc, v) => {
    acc[v] = acc[v] ? acc[v] + 1 : 1
    return acc
  }, {})
  const b = {}

  for(const i of array) {
    const j = Math.floor(i / r)
    const k = i * r
    a[i] -= 1
    if(b[j] && a[k] && !(i % r))
      s += b[j] * a[k]

    b[i] = b[i] ? b[i] + 1 : 1
  }

  return s
}
