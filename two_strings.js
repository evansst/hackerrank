function twoStrings(s1, s2) {
  return s1
    .split('')
    .find(c => (s2.includes(c))) 
      ? 'YES'
      : 'NO'
}