function fibs(number) {
  let arr = [0, 1];
  //edge cases
  if (number < 0) return [];
  if (arr.length >= number) return arr.slice(0, number);

  for (let i = 2; i < number; i++) {
    //fib(n) = fib(n-1) + fib(n-2)
    arr.push(arr[i-1] + arr[i-2]);
  }
  return arr;
}

console.log(fibs(-1)); // []
console.log(fibs(0)); // []
console.log(fibs(1)); // [ 0 ]
console.log(fibs(2)); // [ 0, 1 ]
console.log(fibs(4)); //[ 0, 1, 1, 2 ]
console.log(fibs(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]