// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2

function findNumbers(nums) {
  // Solution 1
  // let count = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   let digits = Array.from(arr[i].toString());

  //   if (digits.length % 2 === 0) {
  //     count++;
  //   }
  // }

  // return count;

  // Solution 2
  // let numsEvenDigits = [];

  for(let i = 0; i < nums.length; i++) {
    numsEvenDigits.push(String(nums[i]).length);
  }

  // let evens = numsEvenDigits.filter(num => (num % 2 === 0));

  // return evens.length;

  // Solution 3
  // let numsEvenDigits = [];

  // num.forEach(num => {
  //   numsEvenDigits.push(String(num).length);
  // });

  // let evens = numsEvenDigits.filter(num => (num % 2 === 0));

  // return evens.length;
}
