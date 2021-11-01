function drawSquare(num) {
  let string = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      string += '#';
    }
    string += '\n';
  }
  console.log(string);
}
drawSquare(3);
