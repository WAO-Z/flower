 * 用户登录接口
  * Path /api/user/show  GET
  * params
    * name 姓名
    * phone 手机号码
    * idCard 身份证号码
 
 * 用户注册接口
  * Path /api/user/create POST
  * params
    * name 姓名
    * phone 手机号码
    * idCard 身份证号码
    * code 验证码

* 发短信
  * Path /api/sms/new GET
  * params
    * phone 手机号码

* 生成日期
  * Path /api/date/create POST
  * params
    * date 日期

* 获取日期
  * Path /api/date/show GET

* 新增场次
  * Path /api/session/create POST
  * params
    * date 日期

* 获取场次
  * Path /api/session/show GET
  * params
    * date 日期

* 用户预约
  * Path /api/appointment/create POST
  * params
    * userId 用户ID
    * sessionId 场次ID

* 获取用户预约
  * Path /api/appointment/show GET
  * params
    * userId 用户ID

* 取消用户预约
  * Path /api/appointment/update put
  * params
    * userId 用户ID