function countingValleys(steps, path) {
  return path
    .split('')
    .map((step) => step == 'U' ? 1 : -1)
    .reduce((acc, step) => {
      if(acc.position === 0 && step === -1) acc.valleys += 1
      acc.position += step
      return acc
    } , {position: 0, valleys: 0})
    .valleys
}

console.log(countingValleys(8, 'UDDDUDUU'))
console.log(countingValleys(12, 'DDUUDDUDUUUD'))
