const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { pool } = require("./db");

app.use(express.json());
app.use(cors()); // 서버를 전역으로 쓰겠다.
app.use(morgan("dev")); // 로그

// get get post patch delete -> API 만드는데 기본적인 순서, 방법

// menus
app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "전체 메뉴 목록 조회에 실패하였습니다.",
    });
  }
});

app.get("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        SELECT * FROM menus
        WHERE id = ${req.params.id}
      `
    );
    if (!data[0].length) {
      return res.json({
        success: false,
        message: "특정 id 메뉴 조회에 실패하였습니다.",
      });
    }
    if (data[0][0]) {
      return res.json(data[0][0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "특정 id 메뉴 조회에 실패하였습니다.",
    });
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    const data = await pool.query(
      `
        INSERT INTO menus
        (name, description, image_src)
        VALUES
        ("${req.body.name}", "${req.body.description}", "${req.body.image_src}")  
      `
    );
    if (data[0]) {
      const data = await pool.query(
        `
        SELECT * FROM menus;
        `
      );
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "메뉴 추가에 실패하였습니다.",
    });
  }
});

app.patch("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        UPDATE menus
        SET name="${req.body.name}", description="${req.body.description}", image_src="${req.body.image_src}"
        WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      const data = await pool.query(
        `SELECT * FROM menus where id = ${req.params.id};`
      );
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "메뉴 수정에 실패하였습니다.",
    });
  }
});

app.delete("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        DELETE FROM menus WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      const data = await pool.query(
        `
        SELECT * FROM menus;
        `
      );
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "메뉴 삭제에 실패하였습니다.",
    });
  }
});

// orders
app.get("/api/orders", async (req, res) => {
  try {
    const data = await pool.query(
      `
      SELECT orders.id, menus.name, orders.quantity, orders.request_detail 
      FROM orders 
      JOIN menus on orders.menus_id = menus.id;
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "주문 전체 목록 조회에 실패하였습니다.",
    });
  }
});

app.get("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
      SELECT orders.id, menus.name, orders.quantity, orders.request_detail 
      FROM orders 
      JOIN menus on orders.menus_id = menus.id where orders.id = ${req.params.id};
      `
    );
    if (!data[0].length) {
      return res.json({
        success: false,
        message: "특정 id 주문 조회에 실패하였습니다.",
      });
    }
    if (data[0][0]) {
      return res.json(data[0][0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "특정 id 주문 조회에 실패하였습니다.",
    });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const data = await pool.query(
      `
        INSERT INTO orders
        (quantity, request_detail, menus_id)
        VALUES
        ("${req.body.quantity}", "${req.body.request_detail}", "${req.body.menus_id}")  
      `
    );
    if (data[0]) {
      const data = await pool.query(
        `SELECT * FROM orders ORDER BY id DESC LIMIT 1;`
      );
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "주문 추가에 실패하였습니다.",
    });
  }
});

app.patch("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        UPDATE orders
        SET quantity="${req.body.quantity}", request_detail="${req.body.request_detail}", menus_id="${req.body.menus_id}"
        WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      const data = await pool.query(
        `SELECT * FROM orders WHERE id = ${req.params.id};`
      );
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "단일 주문 수정에 실패했습니다.",
    });
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        DELETE FROM orders WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      const data = await pool.query(`SELECT * FROM orders;`);
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "주문 삭제에 실패했습니다.",
    });
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
