// https://leetcode.com/problems/decompress-run-length-encoded-list/

// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]

var decompressRLElist = function (nums) {
  let array = [];

  for (let i = 0; i < nums.length; i += 2) {
    // for (let j = 0; j < nums[i]; j++) {
    //   array.push(nums[i + 1]);
    // }

    const numbers = Array.from({ length: nums[i] }, el => nums[i + 1]);
    array = array.concat(numbers);
  }

  return array;
};
