const result = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span"
);
console.log(result.textContent); // 제목 출력

const result2 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span"
);
result6.textContent = "18.6%"; // 예매율 변경

result8.textContent = result.textContent; // 타이틀 바꾸기
// 이미지는 어떻게 바꾸지?

const onePoster = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img"
);
const threePoster = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img"
);

let srcTemp = onePoster.src;
onePoster.src = threePoster.src;
threePoster.src = srcTemp;
