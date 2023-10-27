function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length))
  );
}

function merge(left, right) {
  let i = 0,
    j = 0,
    result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  for (; i < left.length; i++) result.push(left[i++]);
  for (; j < right.length; j++) result.push(right[j++]);
  return result;
}

console.log(mergeSort([])); //[]
console.log(mergeSort([1])); //[ 1 ]
console.log(mergeSort([8, 3, 4, 1, 9, 6, 7, 5])); //[1, 3, 4, 5, 6, 7, 8, 9];
