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
    <div class="footer">
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
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  .header {
    height: 13vw;
    // background-color: #2dbc51;
    /deep/ .van-nav-bar__arrow,
    /deep/ .van-nav-bar__title {
      // color: black;
      color: white;
    }
    /deep/ .van-popover__wrapper {
      // color: black;
      font-weight: bold;
      color: white;
    }
    .van-nav-bar {
      background-color: #2dbc51;
      color: white;
    }
  }

  .main {
    padding: 15px 15px;
    flex: 1;
    overflow: scroll;
  }
  .footer {
    height: 13vw;
  }
}
</style>