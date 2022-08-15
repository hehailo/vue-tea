<template>
  <div class="goodDeatil">
    <div class="header">
      <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <div>
        <!-- 图片 -->
        <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg" />

        <!-- 详情 -->
        <div class="info">
          <van-card num="2" price="2.00" desc="描述信息" title="商品标题" />
        </div>

        <!-- 筛选区 -->
        <div class="select">
          <van-card num="2" price="2.00" desc="描述信息" title="商品标题" />
        </div>

        <!-- 评价区 -->
        <div class="comment">
          <van-card num="2" price="2.00" desc="描述信息" title="商品标题" />
        </div>

        <!-- 详情区 -->
        <div class="detail">
          <van-card num="2" price="2.00" desc="描述信息" title="商品标题" />
        </div>
      </div>
    </div>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { getGoodDeatil } from "@/api/goods.js";
export default {
  name: "GoodDeatil",
  props: {
    productId: {
      type: String,
    },
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let data = await getGoodDeatil({
        productId: this.productId,
      });
      console.log("data.", data);
    },
  },
};
</script>

<style lang="less" scoped>
.goodDeatil {
  .header {
    height: 13vw;
    /deep/ .van-nav-bar .van-icon {
      color: black;
    }
  }
  .main {
    flex: 1;
    overflow: scroll;
    +div {
      border-radius: 16px;
      border: 1px solid red;
    }
    .info {
      padding: 0;
      margin: 10px;
      overflow: hidden;
      .van-card {
        background-color: white;
      }
    }
    .select {
    }
    .comment {
    }
    .detail {
    }
  }
  .footer {
    height: 13vw;
  }
}
</style>