const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let total = +input[0];

let cnt = +input[1];
let sum = 0;

for (let i = 2; i <= cnt + 1; i++) {
  //배열의 첫번째 줄 부터 시작
  let newArr = input[i].split(' ').map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? 'Yes' : 'No');
