var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//第0个tab的第一页的数据
router.get("/api/home/0/data/1", function (req, res, next) {
  console.log("req", req);
  res.send({
    //表示状态
    code: 0,
    data: {
      tabData: [
        { id: 0, label: "推荐" },
        { id: 1, label: "大红袍" },
        { id: 2, label: "绿茶" },
        { id: 3, label: "铁观音" },
        { id: 4, label: "普洱" },
        { id: 5, label: "茶具" },
        { id: 6, label: "花茶" },
      ],
      info: {
        swipers: {
          id: 0,
          swiperImgs: [
            { id: "1", imgUrl: "@/assets/img/swipers/swiper1.jpg" },
            { id: "2", imgUrl: "@/assets/img/swipers/swiper2.jpg" },
            { id: "3", imgUrl: "@/assets/img/swipers/swiper3.jpg" },
            { id: "4", imgUrl: "@/assets/img/swipers/swiper4.jpg" },
          ],
        },
        icons: {
          iconsList: [
            {
              id: 1,
              title: "自饮茶",
              imgUrl: "@/assets/img/icons/cha.png",
            },
            {
              id: 2,
              title: "茶具",
              imgUrl: "@/assets/img/icons/chaju.png",
            },
            {
              id: 3,
              title: "茶礼盒",
              imgUrl: "@/assets/img/icons/chalihe.png",
            },
            {
              id: 4,
              title: "领福利",
              imgUrl: "@/assets/img/icons/fuli.png",
            },
            {
              id: 5,
              title: "官方验证",
              imgUrl: "@/assets/img/icons/guanfangrenzheng.png",
            },
          ],
        },
        recommends: {
          recommendList: [
            {
              id: 1,
              name: "龙井一号",
              desc: "鲜爽甘醇 口粮首选",
              price: 68,
              imgUrl: "@/assets/img/goods/good3.jpg",
            },
            {
              id: 2,
              name: "龙井一号",
              desc: "鲜爽甘醇 口粮首选",
              price: 68,
              imgUrl: "@/assets/img/goods/good4.jpg",
            },
            {
              id: 4,
              name: "龙井一号",
              desc: "鲜爽甘醇 口粮首选",
              price: 68,
              imgUrl: "@/assets/img/goods/good5.jpg",
            },
          ],
        },
        likes: {
          likeList: [
            {
              id: 1,
              name: "秒速5厘米",
              imgUrl: "@/assets/img/like/like2.jpg",
              price: "21",
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "@/assets/img/like/like3.jpg",
              price: "21",
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "@/assets/img/like/like4.jpg",
              price: "24",
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "@/assets/img/like/like1.jpg",
              price: "25",
            },
          ],
        },
      },
    },
  });
});

//第1个tab的第一页的数据
router.get("/api/home/1/data/1", function (req, res, next) {
  console.log("req", req);
  res.send({
    //表示状态
    code: 0,
    data: {
      info: {
        likes: {
          likeList: [
            {
              id: 1,
              name: "秒速5厘米",
              imgUrl: "@/assets/img/like/like2.jpg",
              price: "21",
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "@/assets/img/like/like3.jpg",
              price: "21",
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "@/assets/img/like/like4.jpg",
              price: "24",
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "@/assets/img/like/like1.jpg",
              price: "25",
            },
          ],
        },
        advertisements: {
          advertisements: [
            {
              id: 1,
              name: "ad1",
              imgUrl: "@/assets/img/ads/01.jpg",
            },
            {
              id: 2,
              name: "ad1",
              imgUrl: "@/assets/img/ads/02.jpg",
            },
            {
              id: 3,
              name: "ad1",
              imgUrl: "@/assets/img/ads/03.jpg",
            },
            {
              id: 4,
              name: "ad1",
              imgUrl: "@/assets/img/ads/04.jpg",
            },
          ],
        },
      },
    },
  });
});

//tab的数据
router.get("/api/home/tabs", function (req, res, next) {
  console.log("req", req);
  res.send({
    //表示状态
    code: 0,
    data: {
      tabData: [
        { id: 0, label: "推荐" },
        { id: 1, label: "大红袍" },
        { id: 2, label: "绿茶" },
        { id: 3, label: "铁观音" },
        { id: 4, label: "普洱" },
        { id: 5, label: "茶具" },
        { id: 6, label: "花茶" },
      ],
    },
  });
});

module.exports = router;
