const mysql = require("mysql");

const _connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "project_flower"
})

_connect.connect();

const dbConnect = (_sql) => {
  return new Promise((reslove, reject) => {
    _connect.query(_sql, (err, res) => {
      if (err) {
        reject(err);
      } else {
        reslove(res)
      }
    })
  })
}

// _connect.end();

module.exports = dbConnect;