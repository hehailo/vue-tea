<template>
  <!-- 搜索历史记录 -->
  <div class="history">
    <van-cell-group inset>
      <!-- 标题 -->
      <van-cell class="historyTitle">
        <template #title>
          <van-icon name="clock-o" size="20px" />
          <div>历史搜索</div>
        </template>
        <template>
          <van-button size="mini" type="primary">清空</van-button>
        </template>
      </van-cell>
      <!-- 内容 -->
      <van-cell v-if="searchHistories && searchHistories.length > 0">
        <template #title>
          <van-tag
            class="history-tag"
            size="large"
            round
            type="warning"
            v-for="(his, index) in searchHistories"
            :key="index"
            >{{ his }}</van-tag
          >
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
  data() {
    return {
      searchHistories: [],
    };
  },
  created() {
    this.searchHistories =
      JSON.parse(localStorage.getItem("searchHistories")) || [];
      console.log(this.searchHistories);
  },
};
</script>

<style lang="less">
.history {
  .historyTitle .van-cell__title {
    display: flex;
    align-items: center;
  }
  .historyTitle .van-cell__value {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 10px;
  }
  .van-cell-group--inset {
    margin: 0;
    .history-tag {
      margin: 5px 10px;
    }
    .van-cell__title .van-icon-clock-o {
      line-height: 6.4vw;
      margin-right: 10px;
    }
  }
  .van-cell__label {
    width: 100%;
  }
}
</style>