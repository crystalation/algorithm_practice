//첫째줄 정수의 개수
//둘째줄 주어진 갯수만큼의 정수 -> 공백구분
//찾아야할 정수

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let a = parseInt(input[0]);

let numArr = input[1].split(' ').map((item) => Number(item)); // 둘째 줄 배열
let c = parseInt(input[2]);
let cnt = 0;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] === c) {
    cnt++;
  }
}

console.log(cnt);

// let arrExample = '1 2 3 4 5';
// console.log(arrExample);
// //1 2 3 4 5

// let arrExample2 = arrExample.split(' ');
// console.log(arrExample2);
// //['1','2','3','4','5']

// let arrExample3 = arrExample2.map((item) => Number(item));
// console.log(arrExample3);
// //[1,2,3,4,5]

// let parseInt = arrExample2.map((item) => parseInt(item));
// console.log(parseInt);
// //[1,2,3,4,5]

// let a = '10.6546';
// console.log(parseInt(a));
// //10
// console.log(Number(a));
// //10.6545
