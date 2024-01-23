function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function radixSort(arr) {
  const max = mostDigits(arr);

  for (let k = 0; k < max; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const d = getDigit(arr[i], k);
      buckets[d].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

module.exports = {
  radixSort,
  getDigit,
  digitCount,
  mostDigits
};