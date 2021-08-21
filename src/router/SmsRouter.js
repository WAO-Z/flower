const { _success, _lack, _error } = require("../utils/resModule");
const checkData = require("../utils/checkData");
const { smsNew } = require("../service/SmsService");

const SmsRouter = async (req) => {
  /**
   * 
   * @api {GET} /api/sms/new 发送验证码
   * @apiName sendSms
   * @apiGroup sms
   * @apiVersion  1.0.0
   * 
   * @apiParam  {Number} phone 手机号码
   * 
   */
  if (req.path === "/api/sms/new" && req.method === "GET") {
    let checkRes = checkData(req, "phone");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      const code = Math.floor(Math.random() * 9999).toString().padStart(4, "0");
      const time = Date.now() + 600000;
      let dbRes = await smsNew({ phone: req.query.phone, code, time });
      if (dbRes.affectedRows) {
        return _success({ code }, "发送成功");
      } else {
        return _error();
      }
    }
  }
}

module.exports = SmsRouter;