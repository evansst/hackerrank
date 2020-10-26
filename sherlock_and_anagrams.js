export default function sherlockAndAnagrams(string) {
  const subs = {};
  let count = 0;

  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j < string.length + 1; j += 1) {
      const subString = string
        .substring(i, j)
        .split('')
        .sort()
        .join('');
      if (subs[subString]) {
        count += subs[subString];
        subs[subString] += 1;
      } else {
        subs[subString] = 1;
      }
    }
  }

  return count;
}
