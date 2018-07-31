function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let arr0 = arr2.slice(0, arr2.length);
  arr0.splice(n, 0, ...arr1);
  
  return arr0;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// running test
/*
*/
// tests completed
