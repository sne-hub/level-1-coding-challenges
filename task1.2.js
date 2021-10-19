function numbersAndSum(num1, num2) {
  const sum = num1 + num2;
  const s = sum.toString();
  if (num1 !== 3 && num2 !== 3 && s.includes(3)) {
    return true;
  }
  return false;
}
console.log(numbersAndSum(1, 2));
