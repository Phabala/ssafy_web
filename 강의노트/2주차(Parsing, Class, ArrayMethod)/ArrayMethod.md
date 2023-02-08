> ## intro: 웹 개발자가 어느정도 잘 한다는 것은?
> 
> (웹 뿐만 아니라) 프로그래밍은 램과 CPU가 달려있는 어느 종류의 컴퓨터이던, 그곳에서 돌아가는 프로그램을 만들어 내는 것.

# Parsing 개괄

REST API로 받은 내용이 내가 만들고자 하는 프로그램과 맞다고 생각하지 말자.
그걸 나에게 맞게 바꾸는 것이 Parsing.
Vue.js, React.js 등의 프레임워크들 만으로는 한계가 있다.

*오늘 배울 것들은 Array에서만 쓰일 수 있는 메소드들*

> 자바스크립트 개발자들은 `arrayHelper` 때문에 `for`문을 잘 안쓰는 경향들이 있다. 

# Array Helper Method

## `forEach()`
**forEach는 각각의 element마다 함수를 실행하고 싶을 때 사용한다.**
*`forEach`는 `return` 이 없다. `return`이 필요하다면 `map`을 사용하는게 좋다.*
```js
const students = [
    {
        name: "김도훈",
        age: 26,
        address: "경남 창원시",
    },
    {
        name: "김기홍",
        age: 27,
        address: "광주광역시",
    },
    {
        name: "김택우",
        age: 30,
        address: "인천광역시",
    },
];

students.forEach((student)=>{ // 파라미터(student)의 타입은 뭔가? --> function(함수의 원형)
    // student가 의미하는 것: 각각의 객체에서 작업할 함수
    console.log(student);
});
```

## `map()`
**map은 똑같은 크기의 배열을 새로 만들고자 할 때 사용한다.**

*map은 return 값이 있다.*

> `forEach`와 `map`은 원형 배열을 수정하지 않는다. `forEach`로 원형 배열을 수정하려면 수정할 수는 있지만, 보통 그렇게 잘 사용하지 않는다.

```js
const names = student.map((student) => {
    return student.name;
});
```

> 인덱스 활용이 필요할 경우

```js
const studentInfo = [
  {
    name: "jony",
    age: 30,
  },
  {
    name: "sylvie",
    age: 30,
  },
  {
    name: "nana",
    age: 1,
  },
];

const newStudentInfo = studentInfo.map((student, idx) => {
    console.log(student, idx);
    return student.name;
});
```

## `filter()`

**조건에 맞는 요소들의 배열을 return 하는 메소드**

**map과 다른점: 사람의 이름이나 주소만 뽑아내는건 안된다. 몇명인지 세어보는게 filter의 주 사용 용도**

```js
const over30people = students.filter((student) => {
    return student.age >= 30;
});

console.log(over30names);
```

30살보다 어린 사람의 이름들만 모으려고 한다면

```js
const under30people = students.filter((student) => {return student.age < 30;});

const under30peopleNames = under30people.map((person) => person.name);

console.log(under30peopleNames);
```

함수 축약 활용
```js
function sampleFunc(student) {
    return student.age < 30;
}

const under30pelple = student.filter(sampleFunc);

const under30peopleNames = under30peopleNames = under30people.map((person) => person.name);

console.log(under30peopleNames);
```

## `some()`, `every()`
or, and (개인적으로 써본적은 없다고 함)

## `find()`, `findIndex()`
조건에 만족하는 `첫번째` 값과 인덱스 값.
`filter()`를 쓰면 전체를 다 받을 수 있기 때문에 사용하는 빈도가 많지 않은 편이다.

## `reduce()`
마스터 키 (만능키)
이것으로 `forEach()`, `map()`, `filter()` 다 만들 수 있다.
웹 개발하면서 5%정도의 확률로 사용할 일이 있다.
(다른 메소드를 쓸 수 있으면 다른걸로 먼저 해결해보려고 하자.)

```js
const datas = [0, 1, 2, 3, 4];

// reduce의 첫번째 파라미터는 함수, 두번째는 숫자(1)
const accResult = datas.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
}, 1); // 1은 accumulator의 initial value
// 없다면 acc의 초기값을 인덱스의 0, cur의 초기값을 인덱스의 1로 잡는다
// 있다면 acc의 초기값을 initValue, cur의 초기값을 인덱스의 0으로 잡는다.
// 즉 reduce는 초기값의 유무에 따라 동작하는 방식이 다르다.
// (초기값이 있다면 동작 횟수는 arr.length, 초기값이 없다면 동작 횟수는 arr.length - 1)

console.log(accResult);
```

reduce 예제 (name만 있는 새 배열을 만들어라.)
> 아직 이해 안가는게 많다
```js
const studentInfo = [
    {
        name: "jony",
        age: 30,
    },
    {
        name: "sylvie",
        age: 30,
    },
    {
        name: "nana",
        age: 1,
    },
];

// name만 가진 새 배열을 만들어라.

// map을 사용한다면
const newStudentInfo = studentInfo.map((student) => student.name);
console.log(newStudentInfo);

// reduce를 사용한다면
const reduceName = studentInfo.reduce((acc, cur) => {return acc.name});
console.log(reduceNew);

// 나이 누산하기
const reduceAge = studentInfo.reduce((acc, cur) => {
    return acc.age + cur.age;
});

console.log(reduceAge); // 에러, reduceAge가 선언되지 않음.
```

map 구현
> age가 30인 "이름"만 골라내기
```js
const studentInfo = [
  {
    name: "jony",
    age: 30,
  },
  {
    name: "sylvie",
    age: 30,
  },
  {
    name: "nana",
    age: 1,
  },
];

// 틀린 코드
const namesOver30 = studentInfo.reduce((acc, cur) => {
    if (cur.age >== 30) {let tmp = cur.name; return tmp;}
    // 중간에 return 이 한번이라도 끊기면 누산이 끊긴다. (undefined)
    // 위의 경우에는, return 이 안 끊기더라도 누산된 값이 아니라 최신 콜백의 값만 최종적으로 남는다.
}, {})
console.log(namesOver30);

// 바른 코드
const newStudentInfo = studentInfo.reduce((acc, cur) => {
  if (cur.age === 30) {
    acc.push(cur.name);
  }
  return acc;
}, []);
console.log(newStudentInfo);
```

# 순회 메소드 연습 및 활용

## 부정과 긍정
파싱할 때 값이 있는지 없는지 확인할 때 사용할 수 있다.

**부정의 의미**
- `undefined`
- `null`
- `0`
- `''`(빈 문자열)
- `false`

```js
console.log(!!undefined)
console.log(!!null)
console.log(!!0)
console.log(!!'')
console.log(!!false)
```

**긍정의 의미**
- 부정의 의미를 제외한 모든 것
- `빈 배열`과 `빈 객체`는 긍졍의 의미를 갖고 있다.

빈 배열을 걸러주고 싶을 때는 배열의 `length`를 이용해서 걸러주자

또다른 실수
> 의도치 않게 "있다"가 출력된다.
```js
if (dataFromServer === []) {
  console.log("없다");
} else {
  console.log("있다");
}

```

배열은 주소로 비교하기 때문에 다음과 같은 비교 불가능
> `false`로 출력된다.
```js
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);
```

객체도 마찬가지로 주소로 비교 하기 때문에 불가능
```js
const sampleObject = {};

if (sampleObject === {}) {
    console.log("데이터 없음");
} else {
    console.log("데이터 있음");
}
```

## 함수 메소드 여러개 사용 축약
```js
const orderList = [
  {
    menu: "치킨",
    price: 17000,
    event: false,
    count: 50,
  },
  {
    menu: "돈까스",
    price: 8500,
    event: true,
    count: 99,
  },
  {
    menu: "마라탕",
    price: 8000,
    event: false,
    count: 100,
  },
  {
    menu: "쫄면",
    price: 6500,
    event: false,
    count: 0,
  },
  {
    menu: "짜장면",
    price: 5500,
    event: true,
    count: 30,
  },
];

```

나의 풀이
```js
const filtered = orderList.filter((menu) => menu.count !== 0);

const displayMenu = filtered.map((menu) => {
  if (menu.event === false) return menu;
  else {
    menu.saledPrice = menu.price * (9 / 10);
    return menu;
  }
});

console.log(displayMenu);
```

함축형 풀이
```js
const newOrderList = orderList
  .filter((order) => order.count !== 0)
  .map((order) => {
    const newOrder = structuredClone(order);
    if (order.event) {
      newOrder.saledPrice = (newOrder.price * 9) / 10;
      return newOrder;
    }
    newOrder.saledPrice = newOrder.price;
    return newOrder;
  });
console.log(orderList); // 원래 배열은 손상되지 않는다.
console.log(newOrderList); // 새로운 메뉴 리스트
```

## 구조분해 할당 (destructing)

**객체**
객체의 type을 변수로 가져와 저장한다.

```js
const abc = {
    name: "치킨",
    type: "후라이드"
}

const {name, type} = abc;
console.log(name);
console.log(type);
```

**배열**
객체와 다르게 배열은 순서가 보장되어있기 때문에 임의의 변수를 등록해도 가능하다.

```js
const array = [1, 2];
const [one, two] = array;
```

응용
> return을 1개 이상으로 줄 때 사용
```js
const sampleFunc = () => {
    return [1, 2];
}

const [one, two] = smapleFunc();

console.log(one); // 1
console.log(two); // 2
```

## Spread
- 객체/배열을 통째로 끌고와서 펼치는 형태

> `colorSquare` 안에 `square`로만 쓰면 객체 안의 객체라는 이상한 형태가 만들어진다.
> `...square` 로 쓰면 객체 안의 내용물을 풀어놓는다.

객체 예제 
```js
const square = {
    width: 200,
    height: 200,
}

const colorSquare = {
    ...square, // 얘를 square로만 하면 객체 안의 객체라는 이상한 형태가 만들어진다.
    color: 'red'
}

console.log(colorSquare);
```

배열 예제
```js
const catTypeAnimals = ['고양이', '호랑이'];
const dogTypeAnimals = ['개', '늑대'];

const allTypeAnimals = [...catTypeAnimals, ...dogTypeAnimals, '비버',];
```

> spread의 의미: 버터나이프로 빵에 버터를 펴 바른다.

## Rest
**나머지 객체, 배열을 Rest에 담아서 추출하는 방법**

> console.log(type) : 양념
> console.log(another) : {drumsticks: 2, wing: 2}
```js
const chicken = {
    type: '양념',
    drumsticks: 2,
    wing: 2
}

const {type, ...another} = chicken;
console.log(type);
console.log(another);
```

## 도전: 객체/배열 고차함수 연습하기

> bucketList[indecator] 를 감싸는 괄호가 소괄호가 아니라 대괄호임을 유의하자.
```js
const bucketLists = [
    {id: 3, text: "여행가기", done: false},
    {id: 2, text: "치킨 먹기", done: true},
    {id: 1, text: "코딩 하기", done: false},
];

const getValues = (indecator) => bucketLists.map((bucketList) => bucketList[indecator]);

console.log(getValues("id"));
console.log(getValues("text"));
console.log(getValues("done"));
```

## slice, splice (시험에 나옴)
slice: 원본 배열이 손상되지 않음
splice: 원본 배열이 손상됨
> splice는 보통 쓰지는 않지만, 원하는 값을 삭제하고 싶을 때 쓰기 좋다.

```js
const names = ["jony", "sylvie", "nana"];

// slice
const newNames = names.slice(1, 2); // (st인덱스, end인덱스)
// 원본 배열이 손상되지 않음.
console.log(names);
console.log(newNames);
```

```js
const names = ["jony", "sylvie", "nana"];

// splice
const newNames = names.splice(1, 2); // (index(add/remove), howmany, item1, item2...)

// 원본 배열이 손상됨
console.log(names);
console.log(newNames);
```

`splice()`를 활용한 특정 item 지우기
> 게시판에서 삭제 버튼을 누르면 배열에서 지우는 기능 등에 활용
```js
var index = array.indexOf(item);
if (index !== -1) {
  array.splice(index, 1);
}
```