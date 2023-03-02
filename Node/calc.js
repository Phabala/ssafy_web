const a = 2;
const b = 4;

const calc = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
  mul: (a, b) => {
    return a * b;
  },
  div: (a, b) => {
    return a / b;
  },
};

module.exports = calc;

console.log("주어진 수 : ", a, b);
console.log("덧셈 결과 : ", calc.add(a, b));
console.log("뺄셈 결과 : ", calc.sub(a, b));
console.log("곱셈 결과 : ", calc.mul(a, b));
console.log("나눗셈 결과 : ", calc.div(a, b));
