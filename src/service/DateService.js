const dbConnect = require("../utils/dbConnect");

const dateCreate = async (data) => {
  let _sql = `INSERT INTO time (time) VALUES ('${new Date(data.date).getTime()}')`;
  return await dbConnect(_sql);
}

const dateShow = async (data) => {
  let _sql = `SELECT * FROM time WHERE time > ${Date.now()}`;
  return await dbConnect(_sql);
}

module.exports = { dateCreate, dateShow }