function merge(left, right) {
  let res = [];
  let [l, r] = [0, 0];

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      res.push(left[l]);
      l++;
    } else {
      res.push(right[r]);
      r++;
    }
  }

  return res.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(nums) {
  const length = nums.length;
  if (length <= 1) return nums;

  const m = Math.floor(length / 2);
  const l = nums.slice(0, m);
  const r = nums.slice(m);

  return merge(mergeSort(l), mergeSort(r));
}

module.exports = { merge, mergeSort };