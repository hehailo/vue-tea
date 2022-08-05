<template>
  <div class="Header">
    <div class="left">
      <span> 北京</span>
      <van-icon name="arrow-down" />
    </div>
    <div class="right" @click="toSearch">
      <div class="search">
        <van-icon class="icon" name="search" />
        <span>请输入搜索关键词</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    // 获取设备dpr
    // console.log(window.devicePixelRatio);
  },
  methods: {
    toSearch($event) {
      this.$router.push("/search")
    },
  },
};
</script>

<style lang="less" scoped>
.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2dbc51;
  height: 15vw;
  padding: 0 10px;
  .left {
    color: white;
    width: 16vw;
    margin-right: 20px;
    span {
      margin-right: 1vw;
    }
  }
  .right {
    .search {
      width: 66vw;
      height: 8vw;
      background-color: #fff;
      border-radius: 4vw;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
        margin-right: 10px;
      }
      span{
        color: gray;
      }
    }
  }
}
</style>