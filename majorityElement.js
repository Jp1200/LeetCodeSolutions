function majorityElement(nums)=> {
  let target = Math.ceil(nums.length / 2);
  let hMap = {};
  for (let num of nums) {
    if (hMap[num]) {
      hMap[num] += 1;
    }
    else {
      hMap[num] = 1;
    }
    if (hMap[num] === target) {
      return num;
    }
  }
};
