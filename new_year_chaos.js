export default function minimumBribes(q) {
  let count = 0;

  for (let i = q.length - 1; i >= 0; i -= 1) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic');
      return 'Too chaotic';
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j += 1) {
      if (q[j] > q[i]) count += 1;
    }
  }

  console.log(count);
  return count;
}
