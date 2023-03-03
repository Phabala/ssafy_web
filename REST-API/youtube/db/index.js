const mysql = require("mysql2/promise");
// 여기서 보내서 상위 폴더의 index.js에서 받아주는게 할일
// DB 연결정보 셋팅

const pool = mysql.createPool({
    // AWS HOST
    host : "43.201.55.186",
    // mysql username
    user: "ssafy",
    // mysql password
    password: "*ssafy09",
    // db및 스키마 이름
    database: "ssafy",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
// module.exports = {pool}; -> 받아올 때 const {pool} = require("./db/index.js");
module.exports = pool; // 받아올 때 const pool(다른변수가능) = require("./db/index.js");