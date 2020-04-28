// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  // Solution 1
  // const sorted = [...nums].sort((a, b) => a - b); // [1,2,2,3,8]
  // let solution = [];

  // for(let i = 0; i < nums.length; i++) {
  //   let index = sorted.indexOf(nums[i]);
  //   solution.push(index)
  // }

  // return solution;

  // Solution 2
  // return nums.map((num) => nums.filter((num2) => num > num2).length);


  // Solution 3
  const sorted = [...nums].sort((a, b) => a - b); // [1,2,2,3,8]

  return nums.map((num) => sorted.indexOf(num));
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))







