function countingValleys(_steps, path) {
  return path
    .split('')
    .reduce((acc, step) => {
      const nStep = step === 'U' ? 1 : -1;
      if (acc.position === 0 && nStep === -1) acc.valleys += 1;
      acc.position += nStep;
      return acc;
    }, { position: 0, valleys: 0 })
    .valleys;
}

export default countingValleys;
