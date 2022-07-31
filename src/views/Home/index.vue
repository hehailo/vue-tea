<template>
  <div class="home">
    <div class="header">
      <Header></Header>
      <!-- Tab 标签页 -->
      <van-tabs v-model="active" swipeable duration="0.2" @change="changeTab">
        <van-tab
          v-for="(tab, index) in tabData"
          :title="tab.label"
          :key="index"
        >
        </van-tab>
      </van-tabs>
    </div>

    <div class="main" ref="wrapper">
      <div class="scoreZone">
        <Swiper v-if="this.swipers"></Swiper>
        <Ad v-if="this.advertisements"></Ad>
        <Icons v-if="this.icons"></Icons>
        <Recommend v-if="this.recommends"></Recommend>
        <Like v-if="this.likes"></Like>
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
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      active: 0,
      tabData: [],
      scroll: null,
      advertisements: null,
      icons: null,
      likes: null,
      recommends: null,
      swipers: null,
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
  created() {
    this.getTab();
    this.getData();
  },
  mounted() {},
  methods: {
    async getData(index = 0) {
      try {
        let { data } = await axios({
          url: "/api/home/" + index + "/data/1",
        });
        let { advertisements, icons, likes, recommends, swipers } =
          Object.freeze(data.data.info);
        this.advertisements = advertisements || null;
        this.icons = icons || null;
        this.likes = likes || null;
        this.recommends = recommends || null;
        this.swipers = swipers || null;
        this.setBetterScroll();
      } catch (error) {
        console.log(error);
        this.reset();
      }
    },
    changeTab(name, title) {
      this.getData(name);
    },
    async getTab() {
      let { data } = await axios({
        url: "/api/home/tabs",
      });
      this.tabData = Object.freeze(data?.data?.tabData);
    },
    setBetterScroll() {
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
    reset() {
      this.advertisements = null;
      this.icons = null;
      this.likes = null;
      this.recommends = null;
      this.swipers = null;
    },
  },
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