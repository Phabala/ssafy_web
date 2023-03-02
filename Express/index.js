const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(
  cors(
    // cors() 괄호가 비어있으면 모든 IP 허용
    {
      allowip: ["127.0.0.1"], // 허용 IP 예시 (실제로는 이런식으로 안 씀)
    }
  )
);

app.get("/api/info", (req, res) => {
  return res.json({
    name: "jony",
    job: "tutor",
  });
});

app.get("/api/info2", (req, res) => {
  return res.json({
    name: "김기홍",
    age: "27",
    say: "안녕하세요!",
  });
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
