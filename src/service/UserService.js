const dbConnect = require("../utils/dbConnect");

const userShow = async (data) => {
  let _sql = `SELECT token,is_appointment,sessions_time,qrcode FROM user WHERE name = "${data.name}" AND phone = "${data.phone}" AND idcard = "${data.idCard}"`;
  return await dbConnect(_sql);
}

const userCreate = async (data) => {
  let _sql = `INSERT INTO user (token,name,phone,idcard) VALUES ('${Date.now()}','${data.name}','${data.phone}','${data.idCard}')`;
  return await dbConnect(_sql);
}

const getCode = async (data) => {
  let _sql = `SELECT * FROM code WHERE phone = '${data.phone}' AND code = '${data.code}'`;
  return await dbConnect(_sql);
}

module.exports = { userShow, userCreate, getCode }