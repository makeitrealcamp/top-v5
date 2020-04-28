// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
function numJewelsInStones(j,s){
  let count=0;

  // Solution 1
  // for(let i = 0; i < j.length; i++) {
  //   for(let k = 0; k < s.length; k++) {
  //     if (j[i] == s[k]){
  //       count ++;
  //     }
  //   }
  // }

  // Solution 2
  j.split('').forEach((char) => {
    s.split('').forEach((char2) => {
      if(char === char2) {
        count++;
      }
    })
  });

  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
