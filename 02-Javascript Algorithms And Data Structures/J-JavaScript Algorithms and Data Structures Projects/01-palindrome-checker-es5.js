// JavaScript Algorithms and Data Structures Projects: Palindrome Checker - ES5

  function palindrome(str) {
   return str.replace(/[\W_]/g,"").toLowerCase() === str.replace(/[\W_]/g,"").toLowerCase().split("").reverse().join("");
  }
  palindrome("eye");
