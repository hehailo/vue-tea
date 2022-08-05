<template>
  <div class="Navbar">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.Navbar {
  background-color: #2dbc51;
  .van-nav-bar {
    background-color: #2dbc51;
    /deep/ .van-nav-bar__title {
      color: aliceblue;
    }
    /deep/ .van-icon {
      color: aliceblue;
    }
  }
}
</style>