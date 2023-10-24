// const students = [];
// for (let i = 0; i < 10; i++) {
//   const randomScore = Math.floor(Math.random() * 101); // 0부터 100 사이의 랜덤 점수 생성
//   students.push(randomScore);
// }

const ranDomScore = [5, 3, 8, 4, 9, 1, 6, 2, 7];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }

    console.log('왼쪽배열', left);
    console.log('오른쪽배열', right);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedStudents = quickSort(ranDomScore);
console.log('정렬된 정수:', sortedStudents);
