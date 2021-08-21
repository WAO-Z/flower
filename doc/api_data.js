define({ "api": [
  {
    "type": "POST",
    "url": "/api/date/create",
    "title": "新增日期",
    "name": "dateCreate",
    "group": "date",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>场次日期 格式为 年-月-日</p>"
          }
        ]
      }
    },
    "filename": "src/router/DateRouter.js",
    "groupTitle": "date"
  },
  {
    "type": "GET",
    "url": "/api/date/show",
    "title": "获取日期",
    "name": "dateShow",
    "group": "date",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>日期ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>日期时间戳</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 200,\n        \"msg\": \"成功操作\",\n        \"data\": [\n          {\n            \"id\": 9,\n            \"time\": \"1633046400000\"\n          }\n        ]\n      }",
          "type": "type"
        }
      ]
    },
    "filename": "src/router/DateRouter.js",
    "groupTitle": "date"
  },
  {
    "type": "POST",
    "url": "/api/session/create",
    "title": "新增场次",
    "name": "sessionCreate",
    "group": "session",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间 年-月-日 时:分:秒</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间 年-月-日 时:分:秒</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "allNum",
            "description": "<p>总人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timeId",
            "description": "<p>时间ID</p>"
          }
        ]
      }
    },
    "filename": "src/router/SessionRouter.js",
    "groupTitle": "session"
  },
  {
    "type": "GET",
    "url": "/api/session/show",
    "title": "获取场次信息",
    "name": "sessionShow",
    "group": "session",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TimeId",
            "description": "<p>时间ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间戳</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间戳</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "is_appointment",
            "description": "<p>是否可预约 1是0否</p>"
          }
        ]
      }
    },
    "filename": "src/router/SessionRouter.js",
    "groupTitle": "session"
  },
  {
    "type": "GET",
    "url": "/api/sms/new",
    "title": "发送验证码",
    "name": "sendSms",
    "group": "sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号码</p>"
          }
        ]
      }
    },
    "filename": "src/router/SmsRouter.js",
    "groupTitle": "sms"
  },
  {
    "type": "GET",
    "url": "/api/user/show",
    "title": "用户登录",
    "name": "userLogin",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCard",
            "description": "<p>身份证号码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token值</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "is_appointment",
            "description": "<p>是否有预约,1是0否</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "sessions_time",
            "description": "<p>场次开始时间戳</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>入场二维码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"code\": 200,\n      \"msg\": \"成功操作\",\n      \"data\": [\n        {\n          \"token\": \"我是token\",\n          \"is_appointment\": 0,\n          \"sessions_time\": 1627874499973,\n          \"qrcode\": \"xxx.jpg\"\n        }\n      ]\n    }",
          "type": "type"
        }
      ]
    },
    "filename": "src/router/UserRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "POST",
    "url": "/api/user/create",
    "title": "用户注册",
    "name": "userRegister",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCard",
            "description": "<p>身份证号码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "src/router/UserRouter.js",
    "groupTitle": "user"
  }
] });
