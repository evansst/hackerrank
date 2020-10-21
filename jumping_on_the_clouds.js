function jumpingOnClouds(c) {
  let position = 0, steps = 0

  while(position < c.length - 1) {
    c[position + 2] == 1 ? position += 1 : position += 2
    steps += 1
  }

  return steps
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))