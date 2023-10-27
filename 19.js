// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n'); //각 줄은 배열로 전환

// let num = input[0].split(' ').map((x) => Number(x)); //숫자 2개 배열
// let numArr = input[1].split(' ').map((x) => Number(x)); //숫자 배열

let cnt = 10;
let x = 5;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = [];

for (let i = 0; i < cnt; i++) {
  if (x > arr[i]) {
    answer.push(arr[i]);
  }
}

console.log(answer.join(' '));

let fruites = ['1', '2', '3'];
let result = fruites.join(' ');
console.log(result);
