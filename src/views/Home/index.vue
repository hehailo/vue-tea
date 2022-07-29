<template>
  <div class="home">
    <div class="header">
      <Header></Header>
      <!-- Tab 标签页 -->
      <van-tabs v-model="active" swipeable duration="0.2">
        <van-tab v-for="(tab, index) in tabs" :title="tab.label" :key="index">
        </van-tab>
      </van-tabs>
    </div>

    <div class="main" ref="wrapper">
      <div class="scoreZone">
        <Swiper></Swiper>
        <Icons></Icons>
        <Recommend></Recommend>
        <Like></Like>
        <Ad></Ad>
      </div>
    </div>

    <div class="footer">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Home/Header.vue";
import Tabbar from "@/components/common/Tabbar.vue";
import Swiper from "@/components/common/Home/Swiper.vue";
import Icons from "@/components/common/Home/Icons.vue";
import Recommend from "@/components/common/Home/Recommend.vue";
import Like from "@/components/common/Home/Like.vue";
import Ad from "@/components/common/Home/Ad.vue";
import BetterScroll from "better-scroll";

export default {
  name: "Home",
  data() {
    return {
      active: 0,
      tabs: [
        { label: "推荐" },
        { label: "大红袍" },
        { label: "绿茶" },
        { label: "铁观音" },
        { label: "普洱" },
        { label: "茶具" },
        { label: "花茶" },
      ],
    };
  },
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Ad,
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        movable: true,
        zoom: true,
        mouseWheel: true, //开启鼠标滚轮
        disableMouse: false, // 启用鼠标拖动
        disableTouch: false, // 启用手指触摸
      });
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    // height: 30vw;
    margin-bottom: 2px;
  }
  .main {
    flex: 1;
    overflow: hidden;
  }
  .footer {
    height: 14vw;
  }
}
</style>