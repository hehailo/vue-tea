<template>
  <div class="tabbar" > 
    <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000">
      <!-- tab项 -->
      <van-tabbar-item
        :to="tab.link"
        :icon="tab.icon"
        v-for="(tab, index) in tabList"
        :key="index"
        >{{ tab.tabName }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
      tabList: [
        { tabName: "首页", icon: "home-o", link: "/home" },
        { tabName: "分类", icon: "apps-o", link: "/list" },
        { tabName: "购物车", icon: "cart-o", link: "/cart" },
        { tabName: "我的", icon: "contact", link: "/my" },
      ],
    };
  },
};
</script>

<style>
</style>