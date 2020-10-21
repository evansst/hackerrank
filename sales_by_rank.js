function sockMerchant(n, ar) {
  return [...ar
    .reduce((counts, sock) => counts.set(sock, (counts.get(sock) || 0) + 1), new Map())
    .values()]
    .reduce((sum, count) => sum + Math.floor(count / 2), 0)
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] ))
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))