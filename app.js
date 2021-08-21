const querystring = require("querystring");
const getBodyData = require("./src/utils/getBodyData");
const UserRouter = require("./src/router/UserRouter");
const DateRouter = require("./src/router/DateRouter");
const SessionRouter = require("./src/router/SessionRouter");
const AppointmentRouter = require("./src/router/AppointmentRouter");
const SmsRouter = require("./src/router/SmsRouter");
const { _noFound } = require("./src/utils/resModule");
const path = require("path");
const fs = require('fs');

const serverHandle = async (req, res) => {
  if (req.url.endsWith(".png")) {
    res.setHeader('content-type', 'mimetype');
    let fileUrl = path.join(__dirname, "qrcode/", req.url.split("/qrcode/")[1]);
    let fileContent = fs.readFileSync(fileUrl, "binary");
    res.write(fileContent, 'binary');
    res.end();
  } else {
    // 解决中文编码问题
    res.setHeader('content-type', 'application/json');

    // 设置跨域访问白名单
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 支持请求方式
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');


    res.setHeader("Content-Disposition", "attachment")


    res.setHeader('Content-Type', 'image/png');


    // 根据不同的请求方式获取参数
    if (req.method === "GET") {
      req.query = querystring.parse(req.url.split("?")[1])
    } else {
      req.body = await getBodyData(req);
    }

    req.path = req.url.split("?")[0];

    let resData = [
      await UserRouter(req),
      await DateRouter(req),
      await SessionRouter(req),
      await AppointmentRouter(req),
      await SmsRouter(req)
    ].filter(item => {
      return item
    })[0];

    resData || (resData = _noFound())

    // 设置响应头的状态码
    res.statusCode = resData.code;

    // delete resData['code'];

    res.end(JSON.stringify(resData));
  }
}

module.exports = serverHandle;