// Problem 1: Multiples of 3 and 5

function multiplesOf3and5(number) {  
  let sum = 0;  
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }  
  return sum;
}

multiplesOf3and5(1000);
