<template>
  <div>
    <van-nav-bar class="header" title="登录" />
    <div class="main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <van-button native-type="button">发送验证码</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.header {
  background-color: #2dbc51;
  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>