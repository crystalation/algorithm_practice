const fs = require('fs');

const input = fs.readFileSync(0).toString().split('\n');

const [x, y] = input;

// let a = 9;
// let b = -13;

if (x > 0 && y < 0) {
  console.log(4);
} else if (x < 0 && y < 0) {
  console.log(3);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x > 0 && y > 0) {
  console.log(1);
}
