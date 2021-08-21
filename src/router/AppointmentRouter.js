const { _success, _lack, _error } = require("../utils/resModule");
const checkData = require("../utils/checkData");
const { appointCreate, appointShow, appointUpdate } = require("../service/AppointmentService");
const { sessionFind } = require("../service/SessionService");
const QRCode = require("qrcode");
const path = require("path");

const AppointmentRouter = async (req) => {
  if (req.path === "/api/appointment/create" && req.method === "POST") {

  }

  /**
   * 
   * @api {GET} /api/appointment/show 获取预约信息
   * @apiName appointShow
   * @apiGroup appoint
   * @apiVersion  1.0.0
   * 
   * @apiParam  {String} token 用户的Token
   * 
   * @apiSuccess (200) {String} name 用户名称
   * @apiSuccess (200) {String} sessions_time 会议时间
   * @apiSuccess (200) {String} qrcode 二维码地址
   * 
   */
  if (req.path === "/api/appointment/show" && req.method === "GET") {
    let checkRes = checkData(req, "token");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      return _success(await appointShow(req.query));
    }
  }

  /**
   * 
   * @api {PUT} /api/appointment/update 更新预约状态
   * @apiName appointUpdate
   * @apiGroup appoint
   * @apiVersion  1.0.0
   * 
   * @apiParam  {String} token 用户Token
   * @apiParam  {Number} sessionId 场次ID
   * @apiParam  {Number} isAppointment 是否预约状态 1是0否
   * 
   */
  if (req.path === "/api/appointment/update" && req.method === "PUT") {
    let checkRes = checkData(req, "token", "sessionId", "isAppointment");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      if (req.body.isAppointment) {
        // 从未预约到变为已预约

        // 0. 查询场次是否能预约
        const sessionInfo = await sessionFind(req.body);
        if (sessionInfo.length && sessionInfo[0].is_appointment) {
          req.body.startTime = sessionInfo[0].start_time;
          // 1. 生成二维码
          const fileName = Date.now() + ".png";
          QRCode.toFile(path.join(__dirname, "../../", "qrcode/") + fileName, "https://www.baidu.com/");
          req.body.qrcodeName = "http://192.168.31.93:3000/qrcode/" + fileName;
          // 2. 信息更新user
          try {
            await appointCreate(req.body);
            // 3. session预约人数更新

            return _success();
          } catch (error) {
            return _error();
          }
        } else {
          return _error("场次不可预约,请刷新页面重新选择");
        }
      } else {
        // 取消预约
        try {
          await appointUpdate(req.body);
          return _success();
        } catch (error) {
          return _error();
        }
      }
    }
  }
}

module.exports = AppointmentRouter;