var express = require("express");
var router = express.Router();
var connection = require("../db/mysql");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
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
            { id: "1", imgUrl: "/img/swipers/swiper1.jpg" },
            { id: "2", imgUrl: "/img/swipers/swiper2.jpg" },
            { id: "3", imgUrl: "/img/swipers/swiper3.jpg" },
            { id: "4", imgUrl: "/img/swipers/swiper4.jpg" },
          ],
        },
        icons: {
          iconsList: [
            {
              id: 1,
              title: "自饮茶",
              imgUrl: "/img/icons/cha.png",
            },
            {
              id: 2,
              title: "茶具",
              imgUrl: "/img/icons/chaju.png",
            },
            {
              id: 3,
              title: "茶礼盒",
              imgUrl: "/img/icons/chalihe.png",
            },
            {
              id: 4,
              title: "领福利",
              imgUrl: "/img/icons/fuli.png",
            },
            {
              id: 5,
              title: "官方验证",
              imgUrl: "/img/icons/guanfangrenzheng.png",
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
              imgUrl: "/img/goods/good3.jpg",
              productId:"1001"
            },
            {
              id: 2,
              name: "龙井一号",
              desc: "鲜爽甘醇 口粮首选",
              price: 68,
              imgUrl: "/img/goods/good4.jpg",
              productId:"1002"
            },
            {
              id: 4,
              name: "龙井一号",
              desc: "鲜爽甘醇 口粮首选",
              price: 68,
              imgUrl: "/img/goods/good5.jpg",
              productId:"1003"
            },
          ],
        },
        likes: {
          likeList: [
            {
              id: 1,
              name: "秒速5厘米",
              imgUrl: "/img/like/like2.jpg",
              price: "21",
              productId:"1004"
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "/img/like/like3.jpg",
              price: "21",
              productId:"1005"
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "/img/like/like4.jpg",
              price: "24",
              productId:"1006"
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "/img/like/like1.jpg",
              price: "25",
              productId:"1007"
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
              imgUrl: "/img/like/like2.jpg",
              price: "21",
              productId:"1008"
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "/img/like/like3.jpg",
              price: "21",
              productId:"1009"
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "/img/like/like4.jpg",
              price: "24",
              productId:"1010"
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "/img/like/like1.jpg",
              price: "25",
              productId:"1011"
            },
          ],
        },
        advertisements: {
          adImgs: [
            {
              id: 1,
              name: "ad1",
              imgUrl: "/img/ads/01.jpg",
              productId:"1014"
            },
          ],
        },
      },
    },
  });
});

//第2个tab的第一页的数据
router.get("/api/home/2/data/1", function (req, res, next) {
  console.log("req", req);
  res.send({
    //表示状态
    code: 0,
    data: {
      info: {
        advertisements: {
          adImgs: [
            {
              id: 2,
              name: "ad1",
              imgUrl: "/img/ads/02.jpg",
            },
          ],
        },
        likes: {
          likeList: [
            {
              id: 1,
              name: "秒速5厘米",
              imgUrl: "/img/like/like2.jpg",
              price: "21",
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "/img/like/like3.jpg",
              price: "21",
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "/img/like/like4.jpg",
              price: "24",
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "/img/like/like1.jpg",
              price: "25",
            },
          ],
        },
      },
    },
  });
});

//第2个tab的第一页的数据
router.get("/api/home/2/data/1", function (req, res, next) {
  console.log("req", req);
  res.send({
    //表示状态
    code: 0,
    data: {
      info: {
        advertisements: {
          adImgs: [
            {
              id: 3,
              name: "天气之子",
              imgUrl: "/img/like/like4.jpg",
              price: "24",
            },
          ],
        },
        likes: {
          likeList: [
            {
              id: 1,
              name: "秒速5厘米",
              imgUrl: "/img/like/like2.jpg",
              price: "21",
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "/img/like/like3.jpg",
              price: "21",
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "/img/like/like4.jpg",
              price: "24",
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "/img/like/like1.jpg",
              price: "25",
            },
          ],
        },
      },
    },
  });
});

//第3个tab的第一页的数据
router.get("/api/home/3/data/1", function (req, res, next) {
  console.log("req", req);
  res.send({
    //表示状态
    code: 0,
    data: {
      info: {
        advertisements: {
          adImgs: [
            {
              id: 4,
              name: "ad1",
              imgUrl: "/img/ads/04.jpg",
            },
          ],
        },
        likes: {
          likeList: [
            {
              id: 1,
              name: "秒速5厘米",
              imgUrl: "/img/like/like2.jpg",
              price: "21",
            },
            {
              id: 2,
              name: "言叶之庭",
              imgUrl: "/img/like/like3.jpg",
              price: "21",
            },
            {
              id: 3,
              name: "天气之子",
              imgUrl: "/img/like/like4.jpg",
              price: "24",
            },
            {
              id: 4,
              name: "你的名字",
              imgUrl: "/img/like/like1.jpg",
              price: "25",
            },
          ],
        },
      },
    },
  });
});

// 搜索商品数据
router.get("/api/search/goods", function (req, res, next) {
  console.log(req.query);
  let { keyword, commodity, type, seq } = req.query;

  console.log(keyword, commodity, type, seq);
  let url = "singer";
  if (keyword == "歌手") {
    url = "singer";
  }

  switch (keyword) {
    case "歌手":
      url = "singer";
      break;
    case "飞机":
      url = "feiji";
      break;
    case "海报":
      url = "haibao";
      break;
    case "坦克":
      url = "tanke";
      break;
    case "综艺":
      url = "zongyi";
      break;
    default:
      url = "singer";
  }

  let goods = [
    {
      id: 1,
      name: keyword + " " + "灯火阑珊",
      desc: "天长地久有时尽，此恨绵绵无绝期",
      price: "21.00",
      nums: "20",
      imgUrl: "/img/goods/" + url + "/01.png",
      productId:"1021"
    },
    {
      id: 2,
      name: keyword + " " + "人间有白头",
      desc: "呼万唤始出来，犹抱琵琶半遮面",
      price: "299.00",
      nums: "2",
      imgUrl: "/img/goods/" + url + "/02.png",
      productId:"1022"
    },
    {
      id: 3,
      name: keyword + " " + "我见青山",
      desc: "相恨不如潮有信，相思始觉海非深",
      price: "456.88",
      nums: "60",
      imgUrl: "/img/goods/" + url + "/03.png",
      productId:"1023"
    },
    {
      id: 4,
      name: keyword + " " + "见我应如是",
      desc: "此情可待成追忆，只是当时已惘然。",
      price: "462.99",
      nums: "100",
      imgUrl: "/img/goods/" + url + "/04.png",
      productId:"1024"
    },
    {
      id: 5,
      name: keyword + " " + "相如赋",
      desc: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。—",
      price: "123.99",
      nums: "10000",
      imgUrl: "/img/goods/" + url + "/05.png",
      productId:"1035"
    },
    {
      id: 6,
      name: keyword + " " + "脉脉此情",
      desc: "直道相思了无益，未妨惆怅是清狂",
      price: "298.00",
      nums: "20000",
      imgUrl: "/img/goods/" + url + "/06.png",
      productId:"1026"
    },
    {
      id: 7,
      name: keyword + " " + "天涯沦落人",
      desc: "深知身在情长在，怅望江头江水声",
      price: "992.00",
      nums: "2828",
      imgUrl: "/img/goods/" + url + "/07.png",
      productId:"1027"
    },
  ];

  // 价格、销量升序
  console.log(type, seq);
  if (type == "sale") {
    type = "nums";
  }
  if (type) {
    if (seq == "asc") {
      goods.sort(
        // 升序
        (a, b) => parseFloat(a[type]) - parseFloat(b[type])
      );
    } else if (seq == "desc") {
      goods.sort(
        // 降序
        (a, b) => parseFloat(b[type]) - parseFloat(a[type])
      );
    }
  }

  res.send({
    code: 0,
    data: {
      goods,
    },
  });
});

//分类的数据
router.get("/api/cate/list", function (req, res, next) {
  console.log("获取分类的数据", req.query);
  let level =
    "陆游、王安石、苏轼、杨万里、范仲淹、范成大、辛弃疾、刘克庄".split("、");
  let level3 = [
    "高山、奔流、雄关、沧海，大江、长风等",
    "沙漠、古道、落日、寒风、冷雨、梧桐、杜鹃鸟、芭蕉",
    "冰雪、松、菊、梅、竹",
    "苏幕遮、永遇乐、虞美人、清平乐、采桑子、卜算子",
    "忆江南、长相思、渔歌子",
    "菩萨蛮、醉花阴、浣溪沙、临江仙、生查子、定风波、渔家傲、水调歌头",
    "金、石、土、革、丝、木、匏(páo)、竹",
    "二胡、编钟、箫、笛、瑟、琴、埙、笙",
  ];

  let i = 1;
  let catelist = level.map((item, index1) => {
    //第三级数据
    let list = [];
    level3[index1].split("、").forEach((name, index2) => {
      //函数体
      let temp = {
        level3Id: index2,
        parentid: index1,
        name: name,
        imgUrl: "/img/avator/" + i + ".png",
      };
      i++;
      if (i > 43) {
        i = 1;
      }
      list.push(temp);
    });

    return {
      // 第二级数据
      level1Id: index1,
      name: item,
      list: {
        level2Id: index1,
        name: item,
        list: list,
      },
    };
  });

  res.send({
    code: 0,
    data: {
      catelist,
    },
  });
});

module.exports = router;
