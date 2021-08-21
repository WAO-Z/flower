const { _success, _lack, _error } = require("../utils/resModule");
const checkData = require("../utils/checkData");
const { dateCreate, dateShow } = require("../service/DateService");

const DateRouter = async (req) => {

  /**
   * 
   * @api {POST} /api/date/create 新增日期
   * @apiName dateCreate
   * @apiGroup date
   * @apiVersion  1.0.0
   * 
   * @apiParam  {String} date 场次日期 格式为 年-月-日
   * 
   */
  if (req.path === "/api/date/create" && req.method === "POST") {
    let checkRes = checkData(req, "date");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      try {
        await dateCreate(req.body);
        return _success();
      } catch (error) {
        return _error("日期已存在");
      }
    }
  }

  /**
   * 
   * @api {GET} /api/date/show 获取日期
   * @apiName dateShow
   * @apiGroup date
   * @apiVersion  1.0.0
   * 
   * @apiSuccess (200) {Number} id 日期ID
   * @apiSuccess (200) {String} time 日期时间戳
   * 
   * @apiSuccessExample {type} Success-Response:
   * {
        "code": 200,
        "msg": "成功操作",
        "data": [
          {
            "id": 9,
            "time": "1633046400000"
          }
        ]
      }
   * 
   * 
   */
  if (req.path === "/api/date/show" && req.method === "GET") {
    try {
      return _success(await dateShow());
    } catch (error) {
      return _error();
    }
  }
}

module.exports = DateRouter;