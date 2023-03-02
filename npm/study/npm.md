# npm
패키지를 가져오는 법
require 로 가져올 수 있다.
내부에 있는 모듈은 ./~~

```js
const puppeteer = require("puppeteer");

const main = async () => {
    // 브라우저 만들기
    const browser = await puppeteer.launch({
        // 기본값이 headless : true
        headless : false
    });
    // 브라우저에 페이지 만들기
    const page = await browser.newPage();

    // 페이지에서 주소로 이동하기
    await page.goto("https://www.naver.com");
}

main();
```