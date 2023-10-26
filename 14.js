const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let n = parseInt(input);

for (let i = 1; i < 10; i++) {
  console.log(n, '*', i, '=', n * i);
}
