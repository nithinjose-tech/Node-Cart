const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sponsorship",
  password: "",
});

module.exports = pool.promise();
