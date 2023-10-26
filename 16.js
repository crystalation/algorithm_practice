const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
//각 줄에 a,b가 주어진다.

// //반복할 숫자 ex)5
let length = parseInt(input);
let cnt = 0;

for (let i = 1; i <= length; i++) {
  cnt = cnt + i;
}
console.log(cnt);
