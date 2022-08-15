<template>
  <div class="home">
    <div class="header">
      <Header></Header>
      <!-- Tab 标签页 -->
      <van-tabs
        class="tabs"
        v-model="active"
        swipeable
        duration="0.2"
        @change="changeTab"
      >
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
        <Swiper v-if="this.swipers" :swipers="swipers"></Swiper>
        <Ad v-if="this.advertisements" :advertisements="advertisements"></Ad>
        <Icons v-if="this.icons" :icons="icons"></Icons>
        <Recommend v-if="this.recommends" :recommends="recommends"></Recommend>
        <Like v-if="this.likes" :likes="likes"></Like>
      </div>
    </div>

    <div class="footer">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/Home/Header.vue";
import Swiper from "@/components/Home/Swiper.vue";
import Icons from "@/components/Home/Icons.vue";
import Recommend from "@/components/Home/Recommend.vue";
import Like from "@/components/Home/Like.vue";
import Ad from "@/components/Home/Ad.vue";
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
  },
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
      this.getData();
    },
    setBetterScroll() {
      if (this.scroll) {
        this.scroll.refresh();
      } else {
        this.$nextTick(() => {
          this.scroll = new BetterScroll(this.$refs.wrapper, {
            movable: true,
            zoom: true,
            mouseWheel: true, //开启鼠标滚轮
            disableMouse: false, // 启用鼠标拖动
            disableTouch: false, // 启用手指触摸
            click:true,
            tap:true
          });
        });
      }
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
    .tabs {
      height: 11.5vw;
    }
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