//hour, minute, time 이 주어지면 완료된 시간을 구해야한다
//완료될 시간은 현재 시간 + time
//만약 minute 이 60보다 커지면 hour 에 +1, minute은 minute+time-60

//현재 시간이 12:40 분이고 40분이 주어진다면?
//완료 시간은 1시 20분이 될 것

// let a = 12;
// let b = 25;
// let c = 30;

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

let newHour = Math.floor((a * 60 + b + c) / 60);
let newMinute = (a * 60 + b + c) % 60;
if (newHour >= 24) {
  newHour -= 24;
}

console.log(newHour, newMinute);
