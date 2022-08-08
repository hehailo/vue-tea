<template>
  <div class="My">
    <div class="header" @click="toLogin">
      <van-image
        class="logoImg"
        width="80"
        height="80"
        src="/img/bg/logo.png"
      />
      <div class="loginText">登 录 / 注 册</div>
    </div>
    <div class="main">
      <van-grid clickable :column-num="2">
        <van-grid-item icon="star-o" color="#fb7299" text="收藏" clickable />
        <van-grid-item icon="clock-o" color="#1989fa" text="历史" clickable />
      </van-grid>
      <van-cell-group>
        <van-cell title="消息通知" is-link icon="location-o" />
        <van-cell title="我的客服" is-link icon="service-o" />
        <van-cell title="地址管理" is-link icon="other-pay" />
        <van-cell title="设置" is-link icon="setting-o" />
        <van-cell title="退出登录" class="logout-cell" />
      </van-cell-group>
    </div>
    <div class="footer"><Tabbar></Tabbar></div>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";

export default {
  name: "My",
  components: { Tabbar },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.My {
  background-color: #f5f7f9;
  height: 100vh;
}
.header {
  height: 360px;
  background-color: #fff;
  background: url("/img/bg/bg10.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .loginText {
    color: white;
    margin-top: 10px;
  }
}
.main {
  padding: 5px;
  /deep/ .van-icon-star-o {
    color: #f94477;
  }

  /deep/ .van-icon-clock-o {
    color: #ff8c0e;
  }
  .logout-cell {
    margin-top: 10px;
    text-align: center;
  }
  .van-cell-group {
    background-color: #f5f7f9;
    margin: 10px 0;
  }
}
</style>