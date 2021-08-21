const dbConnect = require("../utils/dbConnect");

const appointCreate = async (data) => {
  let _sql = `UPDATE user SET is_appointment = '1',sessions_time = '${data.startTime}',qrcode = '${data.qrcodeName}',sessions_id = '${data.sessionId}' WHERE token = '${data.token}'`;
  return await dbConnect(_sql);
}

const appointShow = async (data) => {
  let _sql = `SELECT name,sessions_time,qrcode FROM user WHERE token = '${data.token}'`;
  return await dbConnect(_sql);
}

const appointUpdate = async (data) => {
  let _sql = `UPDATE user SET is_appointment = '0',sessions_time = null,qrcode = null,sessions_id = null WHERE token = '${data.token}'`;
  return await dbConnect(_sql);
}

module.exports = { appointCreate, appointShow, appointUpdate }