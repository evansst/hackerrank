export default function sherlockAndAnagrams(string) {
  let count = 0
  let subs = {}

  for(let i = 0; i < string.length; i++) {
    for(let j = i + 1; j < string.length + 1; j++) {
      const subString = string
        .substring(i, j)
        .split('')
        .sort()
        .join('')
      subs[subString]
        ? count += subs[subString] && subs[subString]++
        : subs[subString] = 1
    }
  }

  return count
}
