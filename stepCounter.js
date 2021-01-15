const counter = (function counter() {
  let value = 0;
  return {
    getValue() {
      return value;
    },
    changeBy(k) {
      value += k;
    },
  };
}());

function getFixedCounter(k) {
  return {
    increment: () => counter.changeBy(k),
    decrement: () => counter.changeBy(-k),
    getValue: () => counter.getValue(),
  };
}

console.log(getFixedCounter(3));
