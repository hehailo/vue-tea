var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/sendSms", function (req, res, next) {
  // params参数在body里面
  console.log("paramns", req.params);
  console.log("body", req.body);
  res.send({
    code: 200,
    data: {
      success: true,
      smscode: 100861,
    },
  });
});

let users = [
  {
    id: 1,
    nickName: "陆游",
    mobile: "1998",
    password: "123456",
    token: "halounihaowa",
    imgurl: "/img/avator/01.png",
  },
  {
    id: 2,
    nickName: "王安石",
    mobile: "1999",
    password: "123456",
    token: "halounihaowa",
    imgurl: "/img/avator/02.png",
  },
  {
    id: 2,
    nickName: "苏轼",
    mobile: "2000",
    password: "123456",
    token: "halounihaowa",
    imgurl: "/img/avator/03.png",
  },
];
router.post("/login", function (req, res, next) {
  // params参数在body里面
  console.log("paramns", req.params);
  console.log("body", req.body);
  let userInfo =
    users.find((user) => {
      if (user.mobile == req.body.mobile) {
        return user;
      }
    }) || {};

  let meaasge = "用户名或者密码错误";
  if (userInfo.nickName) {
    meaasge = "成功！";
  }
  res.send({
    code: 200,
    data: {
      success: true,
      meaasge,
      data: userInfo,
    },
  });
});

module.exports = router;
