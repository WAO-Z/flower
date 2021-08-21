const dbConnect = require("../utils/dbConnect");

const sessionCreate = async (data) => {
  let _sql = `INSERT INTO session (start_time,end_time,all_num,time_id) VALUES ('${new Date(data.startTime).getTime()}','${new Date(data.endTime).getTime()}','${data.allNum}','${data.timeId}')`;
  return await dbConnect(_sql);
}

const sessionShow = async (data) => {
  let _sql = `SELECT id,start_time,end_time,is_appointment FROM session WHERE time_id = '${data.timeId}' `;
  return await dbConnect(_sql);
}

const sessionFind = async (data) => {
  let _sql = `SELECT * FROM session WHERE id = '${data.sessionId}' LIMIT 1`;
  return await dbConnect(_sql);
}

module.exports = { sessionCreate, sessionShow, sessionFind }