// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

//     Initially target array is empty.
//     From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
//     Repeat the previous step until there are no elements to read in nums and index.

// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Example 1:

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  // const target = [];

  // nums.forEach((num, i) => {
  //   target.splice(index[i], 0, num);
  // });

  // // for(let i = 0; i < index.length; i++) {
  // //   target.splice(index[i], 0, nums[i]);
  // // }

  // return target;

  let target = [];

  nums.forEach((num, i) => {
    const firstHalf = target.slice(0, index[i]);
    const secondHalf = target.slice(index[i]);

    target = firstHalf.concat(num).concat(secondHalf);
  });

  return target;
};

createTargetArray([0,1,2,3,4], [0,1,2,2,1]);




