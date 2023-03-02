const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto("https://news.daum.net/digital#1");
  await page.waitForSelector(".list_newsmajor .link_txt");
  const data = await page.evaluate(() => {
    const articles = document.querySelectorAll(".list_newsmajor .link_txt");
    const result = Array.from(articles).map((li) => li.innerText);
    return result;
  });
  console.log(data);
  await browser.close();
};

main();
