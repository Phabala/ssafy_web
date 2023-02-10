# 지난 주 요약

## Query Selector

**선택자로 요소를 가져오기**
`querySelector()` -> 한가지 DOM 요소 가져오기
`querySelectorAll()` -> 해당되는 모든 요소들을 가져오기

**네이버 로그인 창에 id와 pw 입력하기**
```js
const idInput = document.querySelector("#id");
idInput;

idInput.value = "test1234"; // 'test1234'

const passwordInput = document.querySelector("#pw");
passwordInput.value = "abc12";
```

**로그인 버튼 클릭하기**
```js
const loginButton = document.querySelector("#log.login");
loginButton;
const loginBtn = document.querySelector(".btn_login");
loginBtn.click();
```

**보안이 잘 되어있는 사이트는 사람인지 아닌지 검증한다.**
**검증요소를 속이는 작업 vs 자동화인지 확인의 대결**

## Event Listener

**이벤트 리스너에 함수를 등록한다.**
- `addEventListener()` 메서드를 사용하여 이벤트 핸들러 (콜백함)
- `addEventListener('이벤트이름', '핸들러이름');`

**클릭이 발생했을 때 인자로 함수가 들어간다.**
```js
const div = document.querySelector('div');

div.addEventListener("click", function() {
    console.log("안녕");
})
```

**버튼을 만들고 클릭하면 alert로 안녕을 띄우는 html 만들기**
> `querySelector()`, `addEventListener()` 활용
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="btn">
      <button>클릭</button>
    </div>
    <script>
      const button = document.querySelector("button");
      button.addEventListener("click", () => {
        alert("안녕");
      });
    </script>
  </body>
</html>
```

## `document.createElement('Tag 이름')`
- Element Node를 생성한다
- ex) `let btn = document.createElement("button");`

## `객체.append(Target노드)`
- 객체 밑으로 자식 노드를 추가한다.
- ex) `btn.append(txt);`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 나의 풀이
        <button>클릭</button>
    <script>
      const btn = document.querySelector("button");
      const button = document.createElement("button");
      btn.addEventListener("click", () => {
        button.append("안녕!");
      });
    </script>
    -->

    <!-- 실제 풀이 -->
    <button>클릭</button>
    <script>
      const button = addEventListener("click", () => {
        // 안녕을 생성해서 추가
        const div = document.createElement("div");
        div.textContent = "몇개고!!";
        document.querySelector("body").append(div);
      });
    </script>
  </body>
</html>
```

# Parsing

## `string.indexOf("text", startIndex)`
**string 내의 "text" 시작점을 반환**
startIndex는 필수 아님
```js
const a = "HELLOWORLDHELLO";

const g1 = a.indexOf("HELLO");
console.log(g1);

const g2 = a.indexOf("HELLO", 6);

console.log(g2);
```

# 함수의 표현식

## 함수 표현식

**변수의 호이스팅을 받는다**
`const a = function() {
    console.log("aa");
}`

## 화살표 함수
`const b = () => {console.log("bb")};`
`const c = () => console.log("cc");`

```js
const sum = (a, b) => { return a + b };

sum(3, 4);

//return이 생략된 형태로 가능
const sum2 = (a, b) => a + b;
sum2(3, 4);
```

**이후 함수 관련 필기는 생략한다**

# 자바스크립트 설명
JAVA는 객체지향 언어, 클래스 지향
JavaScript는 멀티패러다임언어 (함수형, 객체지향, 프로토타입 기반)