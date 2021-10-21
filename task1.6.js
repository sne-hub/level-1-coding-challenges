function printMaximum(arr) {
  let longest = '';
  const longestArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longest) {
      longest = arr[i].length;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length === longest) {
      longestArr.push(arr[j]);
    }
  }
  const longestString = longestArr.join(' \n');

  console.log(longestString);
}
printMaximum(['once', 'upon', 'a', 'bs', 'time']);

