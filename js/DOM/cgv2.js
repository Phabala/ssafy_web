// #contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img

const movieList = document.querySelector(".sect-movie-chart > ol:nth-child(2)");

const img1 = movieList.querySelector("li:nth-child(1) img");
const img2 = movieList.querySelector("li:nth-child(2) img");

const movie1 = movieList.querySelector("li:nth-child(1)");
const movie1_percent = movie1.querySelector(
  "div.box-contents > a > strong"
).textContent;
console.log(movie1_percent);

// const movie1_title = movie1.querySelector("div > strong > span").textContent;
console.log(movie1_title);

// #contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong
// #contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong
// #contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span

const boxContents = document.querySelectorAll(".box-contents"); // 모든 영화  선택
console.log(boxContents[0]);

const title = "a > strong";
const img = "div > strong > span";

const movie1_title = boxContents[0].querySelector("a > strong").textContent;
movie1_title = "영화1"; // 이거랑 아래 왜 안되는지 모르겠다
const movie2_title = boxContents[1].querySelector(title).textContent;
movie2_title = "영화2";
