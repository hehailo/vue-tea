var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
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


router.get("/gooddeatil", function (req, res, next) {
    // params参数在body里面
    //   get参数在params里面
    console.log("body gooddeatil ",req.body);
    console.log(" query",req.query);
    console.log("params",req.params);
    let id = req.query.productId;
    let data = {
      id: id,
      productId: id,
      name: "龙井一号",
      desc: "鲜爽甘醇 口粮首选",
      price: 68.0,
      sales: 1000,
      placeofOrigin: "福建泉州",
      imgUrl: "/img/goods/good5.jpg",
      swipers: [],
    };
    res.send({
      code: 200,
      data: {
        success: true,
        data: data,
      },
    });
  });


module.exports = router;
