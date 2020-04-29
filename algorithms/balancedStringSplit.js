// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0;
  let aux = 0;

  for(let char in s) {
    // if(char === 'R') {
    //   aux++;
    // } else {
    //   aux--;
    // }

    aux += char === 'R' ? 1 : -1;

    if(aux === 0) {
      count++;
    }
  }

  return count;
};

// balancedStringSplit('hola mundo');
// balancedStringSplit([1,2,3,4,5]);
balancedStringSplit({ a: 1, b: 2, c: 3 })




