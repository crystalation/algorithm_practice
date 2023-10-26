const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//각 줄에 a,b가 주어진다.

// 첫번째 줄 테스트케이스 숫자 --> 이 숫자 만큼 반복할 예정
let length = parseInt(input[0]);

for (let i = 1; i <= length; i++) {
  let result = input[i].split(' ');
  console.log(parseInt(result[0]) + parseInt(result[1]));
}
