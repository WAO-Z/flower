const dbConnect = require("../utils/dbConnect");

const smsNew = async (data) => {
  let _sql = `INSERT INTO code (phone,code,time) VALUES ('${data.phone}','${data.code}','${data.time}')`;
  return await dbConnect(_sql);
}

module.exports = { smsNew }