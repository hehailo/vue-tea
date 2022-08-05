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
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/Search/Header.vue";
export default {
  name: "Search",
  components: { Header, Tabbar },
  data() {
    return {
      flag: 0,
    };
  },
  methods: {
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


