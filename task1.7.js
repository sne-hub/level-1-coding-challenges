function arrayMatch(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];
  while (i < arr1.length + arr2.length) {
    if (j > k) {
      result[i] = arr2[k];
      k++;
    } else {
      result[i] = arr1[j];
      j++;
    }
    i++;
  }
  return result;
}
console.log(arrayMatch([1, 2, 4, 9], [4, 7, 8]));

