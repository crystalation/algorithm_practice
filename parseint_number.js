let arr = ['1', '2', '3', '4', '5'];

let parsTest = arr.map((item) => parseInt(item));
console.log(parsTest);
//[1,2,3,4,5]

let numTest = arr.map((item) => Number(item));
console.log(numTest);
//[1,2,3,4,5]

let a = '2023년';
let b = '20.24512';

console.log(Number(a), Number(b));
//NaN, 20.24512

console.log(parseInt(a), parseInt(b));
//2023, 20
