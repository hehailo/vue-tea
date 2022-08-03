<template>
  <div class="SearchList">
    <van-dropdown-menu active-color="#1989fa" @change="changeSelection">
      <van-dropdown-item
        v-model="value1"
        @change="changeSelection"
        :options="option1"
      />
      <van-dropdown-item
        v-model="value2"
        @change="changeSelection"
        :options="option2"
      />
      <van-dropdown-item
        v-model="value3"
        @change="changeSelection"
        :options="option3"
      />
    </van-dropdown-menu>

    <!-- 商品列表 -->
    <van-grid :column-num="2">
      <van-grid-item v-for="good in goods" :key="good.id" class="good-item">
        <template #icon>
          <van-image class="goodImg" fit="cover" :src="good.imgUrl" />
        </template>
        <template #text>
          <van-card :price="good.price" :title="good.name">
            <template #num>
              <van-tag type="danger">折扣商品</van-tag>
            </template>
            <template #footer>
              <van-button size="mini"
                ><van-icon name="cart-o" /> &nbsp;加入购物车</van-button
              >
            </template>
          </van-card>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
// import axios from "axios";
import {searchGoods} from '@/api/goods.js'
export default {
  name: "SearchList",
  props: {
    searchWord: String,
  },
  created(){
    this.getData();
  },
  data() {
    return {
      value1: 0,
      value2: "comment",
      value3: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "default" },
        { text: "好评排序", value: "comment" },
        { text: "销量排序", value: "sale" },
      ],
      option3: [
        { text: "价格", value: 0 },
        { text: "从低到高", value: 1 },
        { text: "从高到低", value: 2 },
      ],
      goods: [
        {
          id: 1,
          name: "灯火阑珊",
          desc: "天长地久有时尽，此恨绵绵无绝期",
          price: "21.00",
          imgUrl: "/img/goods/singer/01.png",
        },
        {
          id: 2,
          name: "人间有白头",
          desc: "呼万唤始出来，犹抱琵琶半遮面",
          price: "299.00",
          imgUrl: "/img/goods/singer/02.png",
        },
        {
          id: 3,
          name: "我见青山",
          desc: "相恨不如潮有信，相思始觉海非深",
          price: "456.88",
          imgUrl: "/img/goods/singer/03.png",
        },
        {
          id: 4,
          name: "见我应如是",
          desc: "此情可待成追忆，只是当时已惘然。",
          price: "462.99",
          imgUrl: "/img/goods/singer/04.png",
        },
        {
          id: 5,
          name: "相如赋",
          desc: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。—",
          price: "123.99",
          imgUrl: "/img/goods/singer/05.png",
        },
        {
          id: 6,
          name: "脉脉此情",
          desc: "直道相思了无益，未妨惆怅是清狂",
          price: "298.00",
          imgUrl: "/img/goods/singer/06.png",
        },
        {
          id: 7,
          name: "天涯沦落人",
          desc: "深知身在情长在，怅望江头江水声",
          price: "992.00",
          imgUrl: "/img/goods/singer/07.png",
        },
      ],
    };
  },
  methods: {
    changeSelection($event) {
      console.log("$event", $event);
    },
    async getData() {
      // let res = await axios.get("/api/search/goods", {
        let params =  {
           keyword:"1234",
           type:"price",
           seq:"asc"
        }
      // });


      let res = await searchGoods(params);
      console.log("res",res);
    },
  },
};
</script>

<style lang="less" scoped>
.SearchList {
  .good-item {
    // height: 50vw;
    .goodImg {
      height: 40vw;
      width: 100%;
    }
    /deep/ .van-grid-item__icon-wrapper {
      width: 90%;
    }
    /deep/ .van-grid-item__content {
      padding: 10px 10px;
    }
    .van-card {
      background-color: #fff;
      width: 100%;
      .van-card__header .van-card__content {
        min-height: 0;
      }
    }
  }
}
</style>