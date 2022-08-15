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
          <div class="title">
            <van-tag type="warning">京东超市</van-tag> &nbsp;一站式囤生活好物
          </div>
          <div class="instructions">
            <div class="left">
              <van-tag type="warning">自营</van-tag> 韩束
              金刚侠面膜男女补水保湿紧致提拉淡化细纹 黄金肌肽蜂窝活效抚纹面膜5片
            </div>
            <div class="right">
              <div class="icon icon-shoucang"></div>
              <div class="favour">收藏</div>
            </div>
          </div>
        </div>
        <section>
          <div class="Discount">
            <div class="d_left">优惠</div>
            <div class="d_center">
              <div class="ellipsis">
                购买立享3件赠品（条件：购买3件及以上，赠完即止）
              </div>
              <div class="ellipsis">159元选3件</div>
              <div class="ellipsis">
                购买不超过10件时享受单件价￥109，超出数量以结算价为准，仅限购买一次
              </div>
            </div>
            <div class="d_right">
              <van-icon name="ellipsis" />
            </div>
          </div>

          <div class="select">
            <div class="part">
              <div class="s_left">已选</div>
              <div class="s_center">
                <div class="ellipsis">【紧致护肤】金刚侠面膜5片，5片，1个</div>
                <div class="ellipsis">
                  本商品支持京东保障服务、京东服务+，点击可选服务
                </div>
              </div>
              <div class="s_right">
                <van-icon name="ellipsis" />
              </div>
            </div>
            <div class="part">
              <div class="s_left">送至</div>
              <div class="s_center">
                <div class="ellipsis">北京朝阳区三环到四环之间</div>
                <div class="ellipsis">23:00前下单，预计明天(08月16日)送达</div>
              </div>
              <div class="s_right">
                <van-icon name="ellipsis" />
              </div>
            </div>
            <div class="part">
              <div class="s_left">重量</div>
              <div class="s_center">
                <div class="ellipsis">1.02kg</div>
              </div>
              <div class="s_right"></div>
            </div>
          </div>
        </section>
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
  font-size: 26px;
  .header {
    height: 13vw;
    /deep/ .van-nav-bar .van-icon {
      color: black;
    }
  }
  .main {
    flex: 1;
    overflow: scroll;
    background-color: #f5f7f9;
    section {
      padding: 16px;
    }
    .info {
      background-color: white;
      padding: 16px;
      overflow: hidden;
      >div {
        margin: 20px;
      }
      .van-card {
        background-color: white;
      }
      .instructions {
        background-color: white;
        display: flex;
        .left {
          font-size: 28px;
          font-weight: bold;
        }
        .right {
          &::befor {
            content: "";
            width: 10px;
            height: 20px;
            background-color: black;
            display: block;
          }
          width: 24vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          /deep/ .icon {
            font-size: 48px;
          }
        }
      }
    }
    .Discount {
      background-color: white;
      border-radius: 16px;
      display: flex;
      .d_left {
        width: 10vw;
        margin: 20px;
        text-align: center;
      }
      .d_right {
        width: 5vw;
        margin: 20px;
        text-align: center;
      }
      .d_center {
        flex: 1;
        overflow: hidden;
        .ellipsis {
          margin: 20px;
        }
      }
    }
    .select {
      background-color: white;
      border-radius: 16px;
      .part {
        margin-top: 20px;
        display: flex;
        .s_left {
          width: 10vw;
          margin: 20px;
          text-align: center;
        }
        .s_right {
          width: 5vw;
          margin: 20px;
          text-align: center;
        }
        .s_center {
          flex: 1;
          overflow: hidden;
          .ellipsis {
            margin: 20px;
          }
        }
      }
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