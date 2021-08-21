
function baseChecked(key, val) {
  let checkRes;
  switch (key) {
    case "phone":
    case "tel":
    case "phoneNum":
    case "phoneNumber":
    case "telephone":
      checkRes = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val);
      break;
    case "idCard":
    case "identityCard":
      checkRes = /\d{15}|\d{18}/.test(val);
      break;
    case "date":
      checkRes = /\d{4}-\d{2}-\d{2}/.test(val);
      break;
    case "startTime":
    case "endTime":
      checkRes = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(val);
      // checkRes = /\d{2}:\d{2}/.test(val);
      break;
    default:
      checkRes = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(val)
      break
  }
  return !checkRes;
}

function checkData(req, ...paramsArr) {

  // 根据不同的请求方式拿取参数
  let originDataObj;
  if (req.method === "GET") {
    originDataObj = req.query;
  } else {
    originDataObj = req.body;
  }

  // 动态判断参数是否传递 并且返回缺少参数名
  let lackParams = paramsArr.filter(key => {
    return typeof originDataObj[key] === 'undefined' || baseChecked(key, originDataObj[key])
  })

  return lackParams;
}

module.exports = checkData;