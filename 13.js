//input 1,2,3,4,5,6이 주어지면
//a, b, c는 input 요소를 랜덤으로 가져간다. ==> 이부분 어떻게?
//만약 1,1,1 즉 a=b=c 이면 상금은 10000+1*1000
//만약 1,1,2 즉 a=b 혹은 a=c 혹은 b=c 라면 1000+서로같은 인자x100
//만약 a!=b!=c 라면 a,b,c중 가장 큰 눈x 100의 상금

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

// let a = 3;
// let b = 3;
// let c = 3;

if (a === b && a === c) {
  price = 10000 + a * 1000;
} else if (a === b || b === c || a === c) {
  if (a === b || a === c) {
    price = 1000 + a * 100;
  } else if (b === c) {
    price = 1000 + b * 100;
  }
} else if (a != b && a != c && b != c) {
  maxNumb = Math.max(a, b, c);
  price = maxNumb * 100;
}

console.log(price);
