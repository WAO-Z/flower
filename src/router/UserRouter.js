const { _success, _lack, _error } = require("../utils/resModule");
const checkData = require("../utils/checkData");
const { userShow, userCreate, getCode } = require("../service/UserService");

const UserRouter = async (req) => {
  /**
   * 
   * @api {GET} /api/user/show 用户登录
   * @apiName userLogin
   * @apiGroup user
   * @apiVersion  1.0.0
   * 
   * 
   * @apiParam  {String} name 用户姓名
   * @apiParam  {Number} phone 手机号码
   * @apiParam  {String} idCard 身份证号码
   * 
   * 
   * @apiSuccess (200) {String} token token值
   * @apiSuccess (200) {Number} is_appointment 是否有预约,1是0否
   * @apiSuccess (200) {Number} sessions_time 场次开始时间戳
   * @apiSuccess (200) {String} qrcode 入场二维码
   * 
   * @apiSuccessExample {type} Success-Response:
   * {
      "code": 200,
      "msg": "成功操作",
      "data": [
        {
          "token": "我是token",
          "is_appointment": 0,
          "sessions_time": 1627874499973,
          "qrcode": "xxx.jpg"
        }
      ]
    }
   * 
   * 
   */
  if (req.path === "/api/user/show" && req.method === "GET") {
    // 1. 验证接口的参数
    let checkRes = checkData(req, "name", "phone", "idCard");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      let dbRes = await userShow(req.query);
      if (dbRes.length) {
        return _success(dbRes);
      } else {
        return _error("登录失败~");

      }
    }
  }

  /**
   * 
   * @api {POST} /api/user/create 用户注册
   * @apiName userRegister
   * @apiGroup user
   * @apiVersion  1.0.0
   * 
   * @apiParam  {String} name 姓名
   * @apiParam  {Number} phone 手机号码
   * @apiParam  {String} idCard 身份证号码
   * @apiParam  {Number} code 验证码
   * 
   */
  if (req.path === "/api/user/create" && req.method === "POST") {
    let checkRes = checkData(req, "name", "phone", "idCard", "code");
    if (checkRes.length) {
      return _lack(checkRes);
    } else {
      // 1. 数据库根据手机号码和code查找
      let codeRes = await getCode(req.body);
      if (codeRes.length) {
        // 2. 比较是否过期
        if (codeRes[0].time > Date.now()) {
          // 3. 用户信息插入数据库
          try {
            await userCreate(req.body);
            return _success("成功注册");
          } catch (error) {
            return _error("该用户已注册");
          }
        } else {
          return _error("验证码过期");
        }
      } else {
        return _error("验证码错误");
      }
    }
  }
}

module.exports = UserRouter;