function makeAnagram(a, b) {
  let count = 0
  const countsA = a.split('').reduce((counts, c) => {
    counts.has(c) ? counts.set(c, counts.get(c) + 1) : counts.set(c, 1)
    return counts
  }, new Map())

  const countsB = b.split('').reduce((counts, c) => {
    counts.has(c) ? counts.set(c, counts.get(c) + 1) : counts.set(c, 1)
    return counts
  }, new Map())

  for(const [char, occ] of countsA) {
    if(!countsB.has(char))
      count += occ
    else {
      const diff = occ - countsB.get(char)
      diff > 0 ? count += diff : null
    }
  }
  
  for(const [char, occ] of countsB) {
    if(!countsA.has(char))
      count += occ
    else {
      const diff = occ - countsA.get(char)
      diff > 0 ? count += diff : null
    }
  }

  return count
}

console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))