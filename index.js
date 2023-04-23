function reverseSring(string) {
  return string.split("").reverse().join("");

}

function isPalindrome(string) {
    const reversedSring = reverseSring(string);
    return string === reversedSring;
}

  
  // Write your algorithm here
  //write a function isPalindrome with one argument, string(word)
  //convert the string to lower case
  //return a function if the string is a palindrome, 
  //(that is if it reads the same forwards and backwards), to true. 
  //if not a palindrome return false.


/* 
  Add your pseudocode here
  //set word = toLowerCase(word)
  //console.log(isPalindrome("racecar")); return true
  //console.log(isPalindrom("robot")); return false
*/

/*
  Add written explanation of your solution here
  //The use of the isPalindrome function 
   checks if a given string is a palindrome by removing 
   non-alphanumeric characters and converting the string to lowercase,
    and then checking if the resulting string is the same 
    forwards and backwards using array methods. 
    The function returns true if the string is a palindrome and false otherwise.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

console.log("Expecting true");
console.log("=>", isPalindrome("a"));

console.log("Expecting false");
console.log("=>", isPalindrome("ab"))

}
module.exports = isPalindrome;
