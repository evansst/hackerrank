// TOO SLOW :(

// const activityNotifications = (expenditures, d) => {
//   const mid = Math.floor(d / 2)
//   const trail = i => expenditures.slice(i - d, i).sort((a, b) => a - b)
//   const trailingMedian = nums => d % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2

//   return expenditures
//     .slice(d)
//     .reduce((notifications, dailySpending, i) => (
//       dailySpending >= 2 * trailingMedian(trail(i + d))
//           ? notifications + 1
//           : notifications
//     ), 0)
// }

const activityNotifications = (expenditures, d) => {
  const [ dleft, dright ] = [ Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2) ]
  const counts = expenditures
    .slice(0, d)
    .reduce((countArray, e) => {
      countArray[e] += 1
      return countArray
    }, new Array(201).fill(0))
  
  const shiftCounts = i => {
    counts[expenditures[i]]--
    counts[expenditures[i + d]]++
  } 

  const trailingMedian = i => {
    let m1, m2
    for(let j = 0, k = 0; k <= dleft; k += counts[j], j++) m1 = j
    for(let j = 0, k = 0; k <= dright; k += counts[j], j++) m2 = j
    shiftCounts(i)
    return (m1 + m2) / 2
  }

  return expenditures
    .slice(d)
    .reduce((notifications, dailySpending, i) => (
      dailySpending >= 2 * trailingMedian(i) ? notifications + 1 : notifications
    ), 0)
}
