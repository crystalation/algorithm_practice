const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

let x = parseInt(input[0]);
let y = parseInt(input[1]);

// const x = 0;
// const y = 10;

// minute 은 주어진 숫자에서 -45를 한 숫자
// 분이 45분 보다 적고, 시간이 0 일 경우
// 분이 45분 보다 적고, 시간이 0 이상일 경우
// 분이 45분 보다 많을 경우, 시간은 0이거나 0 초과거나 상관없으므로 y에만 조건을 걸어주면 됌

if (y < 45) {
  if (x === 0) {
    console.log(x + 23, 60 - (45 - y));
  } else {
    console.log(x - 1, 60 - (45 - y));
  }
} else {
  console.log(x, y - 45);
}
