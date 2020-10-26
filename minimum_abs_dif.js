function minimumAbsoluteDifference(arr) {
  const array = [...arr].sort((a, b) => a - b);
  const absMin = (min, _cv, i) => {
    const diff = Math.abs(array[i + 1] - array[i]);
    return diff < min ? diff : min;
  };

  return array.reduce(absMin, Math.abs(array[1] - array[0]));
}

export default minimumAbsoluteDifference;
