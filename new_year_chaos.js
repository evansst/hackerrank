function minimumBribes(q) {
  let count = 0

  for(let i = 0; i < q.length; i++) {
    if(q[i] != i + 1) {

      q[i] = q[q[i] - 1]
      count++
      i--
    }
  }

  return count
}