function maximumToys(prices, budget) {
  return prices
    .sort((a, b) => a - b)
    .reduce((acc, price) => ((acc.spending + price < budget)
      ? {
        toys: acc.toys + 1,
        spending: acc.spending + price,
      } : {
        acc,
      }
    ), { toys: 0, spending: 0 })
    .toys;
}

export default maximumToys;
