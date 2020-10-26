function rotLeft(array, shifts) {
  const a = [...array];
  let d = shifts;

  while (d > 0) {
    a.push(a.shift());
    d -= 1;
  }

  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
