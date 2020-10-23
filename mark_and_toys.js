function maximumToys(prices, budget) {
  return prices
    .sort((a, b) => a - b)
    .reduce((acc, price) => {
      if(acc.spending + price < budget) {
        acc.toys += 1 
        acc.spending += price
      } 
      return acc
    }, {toys: 0, spending: 0}).toys
}