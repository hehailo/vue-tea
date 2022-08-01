<template>
  <div class="SearchList">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>

    <!-- 商品列表 -->
    <van-grid :column-num="2">
      <van-grid-item v-for="value in 6" :key="value" class="good-item">
        <template #icon>
          <van-image
            class="goodImg"
            fit="cover"
            src="https://img01.yzcdn.cn/vant/apple-2.jpg"
          />
        </template>
        <template #text>
          <van-card price="2.00" title="帆船">
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
export default {
  name: "SearchList",
  props: {
    searchWord: String,
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "价格", value: 0 },
        { text: "从低到高", value: 1 },
        { text: "从高到低", value: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.SearchList {
  .good-item {
    // height: 50vw;
    .goodImg {
      height: 25vw;
      width: 100%;
    }
    /deep/ .van-grid-item__content{
       padding: 10px 10px 
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