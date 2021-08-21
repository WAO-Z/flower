/**
 * 200  成功操作
 * 400  缺少必填参数
 * 401  未登录
 * 404  找不到
 * 409  失败操作
 */

function _base(data, msg, code) {
  if (typeof data === "string" && typeof msg === "string") {
    [data, msg] = [[], data]
  }

  if (typeof data === "string") {
    [data, msg] = [msg, data]
  }

  return {
    code,
    msg,
    data
  }
}

/**
 * 成功返回
 * @param {*} data 
 * @param {*} msg 
 * @returns 
 */
function _success(data, msg = "成功操作") {
  return _base(data, msg, 200);
}

/**
 * 缺少参数
 * @param {*} data 
 * @param {*} msg 
 * @returns 
 */
function _lack(data, msg = "缺少参数") {
  return _base(`缺少 ${data} 参数或者格式不正确`, msg, 400);
}

function _noLogin() {

}

/**
 * 未找到接口
 * @param {*} data 
 * @param {*} msg 
 * @returns 
 */
function _noFound(data = [], msg = "接口地址不正确或者请求方式不正确") {
  return _base(data, msg, 404);
}

/**
 * 操作失败
 * @param {*} data 
 * @param {*} msg 
 * @returns 
 */
function _error(data = [], msg = "操作失败") {
  return _base(data, msg, 409);
}

module.exports = { _success, _lack, _noFound, _error };