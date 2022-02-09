function fib() {
  const storeFib = [];
  storeFib.push(0);
  storeFib.push(1);
  for (let i = 2; i < 50; i++) {
    storeFib[i] = storeFib[i - 1] + storeFib[i - 2];
  }
  return storeFib;
}

console.log(fib());

function numsToStrings(numArray) {
  return _.map(numArray, (num) => `${num}`);
}

console.log(numsToStrings(fib()));

function numEvenNums(numArray) {
  const evenNums = _.filter(numArray, (num) => num % 2 === 0);
  return evenNums.length;
}

console.log(numEvenNums(fib()));
