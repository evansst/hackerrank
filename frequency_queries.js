export default function freqQuery(queries) {
  const data = {}
  const freq = {}

  const operations = {
    1: (x, result) => {
      data[x] ? data[x] += 1 : data[x] = 1
      freq[data[x]] ? freq[data[x]] += 1 : freq[data[x]] = 1
      return result
    },
    2: (y, result) => {
      if(data[y]) {
        freq[data[y]] -= 1
        freq[data[y] - 1] += 1
        data[y] -= 1
      }
      return result
    },
    3: (z, result) => {
      result.push(freq[z] ? '1' : '0')
      return result
    }
  }

  return queries.reduce((acc, [op, v]) => operations[op](v, acc), [])
}