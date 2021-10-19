function drawTriangle(num) {
  let string = '';
  const n = Math.abs(num);
  if (num >= 0) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += '#';
      }
      string += '\n';
    }
  }
  if (num < 0) {
    for (let i = n; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        string += '#';
      }
      string += '\n';
    }
  }
  console.log(string);
}
drawTriangle(4);
