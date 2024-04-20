let matrix1 = [
  [5, 2, 3],
  [7, 2, 3],
  [1, 0, 5],
];
let matrix2 = [
  [5, 2, 3],
  [7, 6, 3],
  [7, 9, 8],
];

// example result = [
//   [10, 4, 6],
//   [14, 8, 6],
//   [8, 9, 13],
// ];

let result = [];

for (let i = 0; i < 3; i++) {
  result[i] = [];

  for (let j = 0; j < 3; j++) {
    const sum = matrix1[i][j] + matrix2[i][j];

    result[i].push(sum);
  }
}
console.log(result);

// Printing array dynamically
let myArr = [
  [2, 3, 4, 4, 4, 9],
  [5, 5],
  [5],
  [9, 8, 7],
  [8, 76, 5, 43, 8, 76, 5, 43],
]; // 2D array

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i].length);

  for (let j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
}
