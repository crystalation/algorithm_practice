const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' '); //한줄에 공백을 두고 숫자 3개를 줌 '11 22 33'

//input[0] = '11'
//input[1] = '22'
//input[2] = '33'
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log(a + b + c);
