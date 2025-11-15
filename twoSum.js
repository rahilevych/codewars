/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) {
      return [map.get(temp), i];
    }
    map.set(nums[i], i);
  }
};
