<template>
  <form action="/" class="headerContainer">
    <van-search
      v-model="searchVal"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      shape="round"
      background="#2dbc51"
    >
      <template #action>
        <div @click="onCancel">取消</div>
      </template>
    </van-search>
  </form>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchVal: "",
      searchHitories: [],
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
      // 跳转搜索结果页面
      this.$router.push({
        name: "SearchList",
        query: {
          searchWord: this.searchVal,
        },
      });
    },
    onCancel() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.headerContainer {
  .van-search__action {
    color: aliceblue;
  }
  .van-search__action:active {
    background-color: #27a747;
  }
}
</style>