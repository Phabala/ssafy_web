const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  // aws ip
  host: "43.201.55.186",
  // mysql username
  user: "ssafy",
  // mysql user password
  password: "*ssafy09",
  // db name
  database: "ssafy",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool };
