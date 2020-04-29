// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15
var subtractProductAndSum = function(n) {
  // Solution 1
  // let str = String(n).split("");
  // let producto = str.reduce((a,b)=> parseInt(a)*parseInt(b), 1)
  // let suma = str.reduce((a,b)=> parseInt(a)+parseInt(b), 0)
  // return (producto - suma);

  // Solution 2
  let product = (n + "").split("").reduce((a, b) => a * +b, 1);
  let sum = (n + "").split("").reduce((a, b) => a + +b, 0);

  return product - sum;
};
