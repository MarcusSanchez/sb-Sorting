function insertionSort(nums) {
  const length = nums.length;

  for (let i = 1; i < length; i++) {
    const curr = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > curr) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = curr;
  }
  return nums;
}

module.exports = insertionSort;