<template>
  <div class="SearchList">
    <div class="menu">
      <van-dropdown-menu active-color="#1989fa" @change="changeSelection">
        <van-dropdown-item
          v-model="commodityType"
          @change="changeSelection"
          :options="option1"
        />
        <van-dropdown-item
          v-model="sortType"
          @change="changeSelection"
          :options="option2"
        />
        <van-dropdown-item
          v-model="priceRanking"
          @change="changeSelection"
          :options="option3"
        />
      </van-dropdown-menu>
    </div>

    <!-- 商品列表 -->
    <div class="good_list" ref="wrapper">
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
  </div>
</template>

<script>
// import axios from "axios";
import { searchGoods } from "@/api/goods.js";
import BetterScroll from "better-scroll";
export default {
  name: "SearchList",
  props: {
    searchWord: String,
  },
  data() {
    return {
      commodityType: "all",
      sortType: "all",
      priceRanking: "defult",
      option1: [
        { text: "全部商品", value: "all" },
        { text: "新款商品", value: "new" },
        { text: "活动商品", value: "activity" },
      ],
      option2: [
        { text: "默认排序", value: "all" },
        { text: "好评排序", value: "comment" },
        { text: "销量排序", value: "sale" },
        { text: "价格排序", value: "price" },
      ],
      option3: [
        { text: "排序方式", value: "defult" },
        { text: "从低到高", value: "asc" },
        { text: "从高到低", value: "desc" },
      ],
      goods: [],
      scroll: null,
    };
  },
  watch: {
    searchWord: {
      immediate: true,
      handler(newVal) {
        this.getData();
      },
    },
  },
  methods: {
    changeSelection($event) {
      console.log("$event", $event);
      this.getData();
    },
    async getData() {
      let params = {
        keyword: this.searchWord,
        commodity: this.commodityType,
        type: this.sortType,
        seq: this.priceRanking,
      };
      console.log("params", params);
      let res = await searchGoods(params);
      this.goods = res?.data?.goods || [];
      // 触发滚动
      this.setBetterScroll();
    },
    setBetterScroll() {
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh();
        } else {
          this.scroll = new BetterScroll(this.$refs.wrapper, {
            movable: true,
            zoom: true,
            mouseWheel: true, //开启鼠标滚轮
            disableMouse: false, // 启用鼠标拖动
            disableTouch: false, // 启用手指触摸
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.SearchList {
  display: flex;
  flex-direction: column;
  height: 100%;
  .menu {
    height: 13vw;
  }
  .good_list {
    flex: 1;
    overflow: hidden;
    .good-item {
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
        padding: 10px 20px;
      }
      .van-card:not(:first-child) {
        margin-top: 0;
      }
    }
  }
}
</style>