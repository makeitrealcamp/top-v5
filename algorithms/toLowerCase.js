// https://leetcode.com/problems/to-lower-case/

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:

// Input: "Hello"
// Output: "hello"

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str
    .split('')
    .map(char => {
      if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 91) {
        return String.fromCharCode(char.charCodeAt(0) + 32);
      }

      return char;
    })
    .join('');
};
