const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/log");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/views"));

// 원격 로그 수집 시스템 (elastic stack)
// 여러군데 모여있는 로그를 한군데서 조회하고 싶은 경우
/*
app.get("/api/logs", (req, res) => {
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  // debug가 안찍히는 이유
  // winston 세팅에서 level을 info로 한정했기 때문
  logger.debug("debug 메세지");
  return res.json({
    test: "OK",
  });
});
const insert = (str, index, target) => {
  const front = str.slice(0, index);
  const back = str.slice(index, str.length);
  return front + target + back;
};
*/
app.get("/api/logs", (req, res) => {
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  logger.http("http 메세지");
  logger.debug("debug 메세지");
  fs.readFile("./logs/2023-03-10-15.log", "utf-8", (err, data) => {
    const datalines = data.split("\r\n").slice(0, -1);
    const datajson = datalines.map((data) => JSON.parse(data));
    console.log(datajson);
    return res.json(datajson);
  });
});
app.listen(PORT, () => console.log(`${PORT} 서버 기동중`));
