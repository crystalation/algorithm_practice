const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let a = parseInt(input);
// let a = 1999;

//console.log(a);

if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
  console.log('1');
} else {
  console.log('0');
}

//&& 동시에 만족, || a이거나 b 이면
