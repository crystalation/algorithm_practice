const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//세자릿수의 A, B 를 구해야함
let A = parseInt(input[0]); //첫번째 세자리수 --> 123
let B = input[1]; //두번째 세자리수 '236'

//만약 B가 236 이라면, 236을 또 split 해줘야 배열로 인식하나?

let one = A * parseInt(B[2]);
let two = A * parseInt(B[1]);
let three = A * parseInt(B[0]);

console.log(one);
console.log(two);
console.log(three);
console.log(A * parseInt(B));

// let c = '547';
// console.log(parseInt(c[0]));
