/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const val = arr[start];
  let idx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < val) {
      idx++;
      [arr[idx], arr[i]] = [arr[i], arr[idx]];
    }
  }

  [arr[start], arr[idx]] = [arr[idx], arr[start]];
  return idx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    const p = pivot(nums, left, right);
    quickSort(nums, left, p - 1);
    quickSort(nums, p + 1, right);
  }

  return nums;
}

module.exports = { pivot, quickSort };