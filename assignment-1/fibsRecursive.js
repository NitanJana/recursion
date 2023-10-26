function fibsRec(number, arr = [0, 1]) {
  //edge cases
  if (number < 0) return [];
  if (arr.length >= number) return arr.slice(0, number);
  
  //fib(n) = fib(n-1) + fib(n-2)
  arr.push(arr.at(-1) + arr.at(-2));
  fibsRec(number, arr);
  return arr;
}

console.log(fibsRec(-1)); //[]
console.log(fibsRec(0)); //[]
console.log(fibsRec(1)); //[ 0 ]
console.log(fibsRec(2)); //[ 0, 1 ]
console.log(fibsRec(4)); //[ 0, 1, 1, 2 ]
console.log(fibsRec(8)); //[ 0, 1, 1, 2, 3, 5, 8, 13 ]
