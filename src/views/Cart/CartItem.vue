<template>
  <div class="CartItem">
    <!-- 购物车列表 -->
    <van-checkbox-group v-model="checkedGroup" ref="checkboxGroup">
      <van-checkbox name="a">
        <van-checkbox-group v-model="checkedGroup" ref="checkboxGroup">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </template>
          </van-card>
        </van-checkbox-group></van-checkbox
      >
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {
      msg: "",
      checkedGroup: [],
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
</style>
