function repeatedString(string, n) {
  string = string.split('')
  const count = string.reduce((sum, letter) => letter == 'a' ? sum + 1 : sum, 0)
  const result =  Math.floor(n / string.length) * count
  const remainder = string.slice(0, n % string.length).reduce((sum, letter) => letter == 'a' ? sum + 1 : sum, 0)

  return result + remainder
}

console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))