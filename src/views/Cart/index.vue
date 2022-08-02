<template>
  <div class="Cart">
    <div class="header">
      <van-nav-bar
        title="购物车"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <van-popover
            v-model="showPopover"
            theme="dark"
            trigger="click"
            :actions="actions"
            placement="bottom-end"
          >
            <template #reference>
              <!-- <div>· · ·</div>  -->
              <div>· · ·</div>
            </template>
          </van-popover>
        </template>
      </van-nav-bar>
    </div>
    <div class="main">
      <Address></Address>
      <CartItem></CartItem>
    </div>
    <div>
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Address from "@/views/Cart/Address.vue";
import CartItem from "@/views/Cart/CartItem.vue";

export default {
  name: "Cart",
  components: { Tabbar, Address, CartItem },
  data() {
    return {
      showPopover: false,
      actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {},
  },
};
</script>

<style lang="less" scoped>
.Cart {
  background-color: #f2f2f2;
  .header {
    /deep/ .van-nav-bar__arrow {
      color: black;
    }
    /deep/ .van-popover__wrapper {
      color: black;
      font-weight: bold;
    }
  }
  .main {
    padding: 10px 20px;
  }
}
</style>