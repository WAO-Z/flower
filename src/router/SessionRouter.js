const { _success, _lack, _error } = require("../utils/resModule");
const checkData = require("../utils/checkData");
const { sessionCreate, sessionShow } = require("../service/SessionService");

const SessionRouter = async (req) => {
  /**
   * 
   * @api {POST} /api/session/create 新增场次
   * @apiName sessionCreate
   * @apiGroup session
   * @apiVersion  1.0.0
   * 
   * 
   * @apiParam  {String} startTime 开始时间 年-月-日 时:分:秒
   * @apiParam  {String} endTime 结束时间 年-月-日 时:分:秒
   * @apiParam  {Number} allNum 总人数
   * @apiParam  {Number} timeId 时间ID
   * 
   */
  if (req.path === "/api/session/create" && req.method === "POST") {
    let checkRes = checkData(req, "startTime", "endTime", "allNum", "timeId");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      try {
        await sessionCreate(req.body);
        return _success();
      } catch (error) {
        return _error();
      }
    }
  }

  /**
   * 
   * @api {GET} /api/session/show 获取场次信息
   * @apiName sessionShow
   * @apiGroup session
   * @apiVersion  1.0.0
   * 
   * @apiParam  {Number} TimeId 时间ID
   * 
   * @apiSuccess (200) {Number} start_time 开始时间戳
   * @apiSuccess (200) {Number} end_time 结束时间戳
   * @apiSuccess (200) {Number} is_appointment 是否可预约 1是0否
   * 
   */
  if (req.path === "/api/session/show" && req.method === "GET") {
    let checkRes = checkData(req, "timeId");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      return _success(await sessionShow(req.query));
    }
  }
}

module.exports = SessionRouter;