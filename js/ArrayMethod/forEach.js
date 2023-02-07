// 배열 메소드 Array.함수(콜백함수)
// addEventListener('click', function() {})

// Array.forEach

const arr = [1, 2, 3, 4];

arr.forEach((value) => {
  console.log(value);
});

const test = (value) => {
  console.log(value);
};
arr.forEach(test);

const array = [-5, 3, 4, 2, -7, -2, 7];
let pplus = [],
  mminus = [];

array.forEach((value) => {
  if (value > 0) pplus.push(value);
  else mminus.push(value);
});

console.log(pplus, mminus);
