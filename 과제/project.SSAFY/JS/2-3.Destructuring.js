/* 
      1. 아래 코드를 object destructuring을 활용해 리팩토링 하시오.
      2. Rest operator를 활용해 아래 코드를 리팩토링 하시오.
      3. Spread operator를 활용해 아래 코드를 리팩토링 하시오.
    */

// 1-1
const savedFile = {
  name: "profile",
  extension: "jpg",
  size: 29930,
};

const { name, extension, size } = savedFile;

function fileSummary(n, e, s) {
  console.log(`The file ${n}.${e} is size of ${s} bytes.`);
}
fileSummary(name, extension, size);

// 1-2
const data = {
  username: "myName",
  password: "myPassword",
  email: "my@mail.com",
};

const { username, password, email } = data;

// 2
function addNumbers(a, b, ...rest) {
  const numbers = [a, b, ...rest];

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// 3-1
const defaultColors = ["red", "green", "blue"];
const favoriteColors = ["navy", "black", "gold", "white"];
const palette = [...defaultColors, ...favoriteColors];

// 3-2
const info1 = { name: "Tom", age: 30 };
const info2 = { isMarried: true, balance: 3000 };
const fullInfo = { ...info1, ...info2 };
