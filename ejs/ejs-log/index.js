const express = require('express')
const morgan = require('morgan');
const logger = require('./utils/log');
const app = express();
const PORT = 8080;

app.use(morgan('dev'));

// 원격 로그 수집 시스템 (elastic stack)
// 여러군데 모여있는 로그를 한군데서 조회하고 싶은 경우

app.get("/api/logs", (req, res) => {
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  // debug가 안찍히는 이유
  // winston 세팅에서 level을 info로 한정했기 때문
  logger.debug("debug 메세지");
  return res.json({
    test :"OK"
  })
})

app.listen(PORT, () => console.log(`${PORT} 서버 기동중`))