<template>
  <div class="CartList">
    <!-- 购物车列表 -->
    <div class="cartItem" v-for="j in 3" :key="j">
      <div class="shop">
        <span class="icon icon-shangjia"></span>
        京东自营
      </div>
      <van-swipe-cell v-for="i in 2" :key="i">
        <van-cell>
          <div class="goods">
            <div class="left">
              <van-radio></van-radio>
            </div>
            <van-card
              class="right"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            >
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
              <template #num>
                <!-- Stepper 步进器 -->
                <van-stepper
                  v-model="value"
                  theme="round"
                  button-size="22"
                  disable-input
                />
              </template>
            </van-card>
          </div>
        </van-cell>
        <template #right>
          <van-button square type="danger" class="delete-button" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {
      msg: "",
      value: 1,
      shopcard: [
        {
          num: 1,
          price: "1999",
          title: "商品名商品名商品名商品商品名",
          desc: "商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
          thumb: "/img/goods/haibao/01.png",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.CartList {
  margin-top: 10px;
  .cartItem {
    padding: 24px;
    border-radius: 16px;
    background-color: white;
    margin-top: 17.5px;
    .shop {
      font-size: 32px;
      .icon-shangjia {
        font-size: 32px;
      }
    }
    .goods {
      display: flex;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right {
        flex: 1;
      }
    }
    .delete-button {
      height: 100%;
    }
  }
}
</style>
