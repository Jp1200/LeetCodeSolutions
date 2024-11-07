var rotate = function (nums, k) {
  k = k % nums.length;
  let n = nums.length;
  let j = nums.length - k;
  function reverse(nums, start, end) {
    while (start < end) {
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
};
