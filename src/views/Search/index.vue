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
    onSearch() {
      if (!this.searchVal) {
        return;
      }
      // 存入缓存里面
      let searchHitories = [];
      if (!localStorage.getItem("searchHistories")) {
        localStorage.setItem("searchHistories", "[]");
      } else {
        searchHitories = JSON.parse(localStorage.getItem("searchHistories"));
      }
      searchHitories.unshift(this.searchVal);

      let newArr = [...new Set(searchHitories)];
      localStorage.setItem("searchHistories", JSON.stringify(newArr));

      // this.$router.push({
      //   name: "SearchList",
      //   query: {
      //     searchWord: this.searchVal,
      //   },
      // });
    },
    onCancel() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.Search {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  .header{
    height: 15vw;
  }
  .main {
    flex: 1;
    overflow: hidden;
  }
  .footer{
    height: 13vw;
  }
}
</style>


