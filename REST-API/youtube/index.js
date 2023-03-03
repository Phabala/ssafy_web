const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const pool = require("./db/index");
// 이 파일은 백엔드 역할

app.use(cors()); // 전역 (모든 요청마다 적용)

// body에 데이터를 받아오기 위해서는 셋팅이 하나 꼭 필요하다. app.use(express.json());
// json 형식의 데이터를 받아오기 위해 필요한 셋팅 -> 이게 빠지면 body 데이터 못받아옴
app.use(express.json());

// GET /api/menus
// async/await을 쓰는 경우: DB 연결(지금은 단순 return), DB연결은 비동기
/*
app.get("/api/menus", (req, res) => { // 이거는 테스트용 코드, 실제로는 이 문단의 아래로 써야함
  return res.json({ TEST: "OK", TYPE: "GET" });
});*/

app.get("/api/menus", async (req, res) => {
  try {
    // select * from menus;
    const data = await pool.query("select * from menus");
    return res.json(data[0]);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

// POST /api/menus
app.post("/api/menus", async (req, res) => {
  console.log(req.body);
  try {
    // 첫번째 방식, 물음표를 변수로 넣을 수 있음. (강사님은 주로 이걸 많이 씀)
    const data = await pool.query(
      `INSERT INTO menus (menu_name, menu_description, menu_img_link)
    VALUES (?, ?, ?)`,
      [req.body.menu_name, req.body.menu_description, "임시 이미지 링크"]
    );

    // 두번째 방식
    /*const data = await pool.query(`
    INSERT INTO menus (menu_name, menu_description) 
    VALUES ("${req.body.menu_name}", "${req.body.menu_description}")`);*/
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.listen(PORT, () => console.log(`${PORT} 서버 가동중`));
