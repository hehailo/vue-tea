<template>
  <div class="Search">
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Search/Header.vue";
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  name: "Search",
  components: { Header, Tabbar },
  data() {
    return {
      flag: 0,
    };
  },
  methods: {
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
  },
};
</script>

<style lang="less" scoped>
.Search {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  .header {
    height: 15vw;
  }
  .main {
    flex: 1;
    overflow: hidden;
  }
  .footer {
    height: 13vw;
  }
}
</style>


