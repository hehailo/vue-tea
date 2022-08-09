<template>
  <div>
    <!-- 登录头部 -->
    <div class="header">
      <van-nav-bar title="登录" class="page-nav-bar">
        <van-icon
          slot="left"
          name="arrow-left"
          size="18"
          @click="$router.back()"
        />
      </van-nav-bar>
    </div>

    <!-- 登录表单 -->
    <div class="main">
      <van-form @submit="onSubmit" ref="loginForm">
        <van-field
          v-model="user.mobile"
          name="mobile"
          placeholder="手机号"
          type="number"
          maxlength="11"
          :rules="rules.mobile"
        >
          <!-- 插槽的一种写法 -->
          <i slot="left-icon" class="iconfont icon-shouji"></i>
        </van-field>

        <!-- 验证码 -->
        <van-field
          v-model="user.code"
          name="code"
          placeholder="验证码"
          maxlength="6"
          type="number"
          size="large"
          :rules="rules.code"
          :disabled="disabledCode"
        >
          <!-- 插槽的一种写法 -->
          <i slot="left-icon" class="iconfont icon-yanzhengma"></i>

          <template #button>
            <!-- 发送验证码 -->
            <van-button
              v-if="showSendmessage"
              size="small"
              plain
              type="primary"
              @click="onSendSms"
              >发送验证码</van-button
            >

            <!-- 倒计时 -->
            <van-count-down
              v-else
              :time="time"
              format=" ss 后重新发送"
              @finish="finish"
            />
          </template>
        </van-field>
        <!-- 提交按钮 -->
        <div style="margin: 16px">
          <van-button
            class="login-btn"
            round
            block
            type="primary"
            native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { login, sendSms } from "@/api/user";
export default {
  name: "Login",
  data() {
    return {
      user: {
        mobile: "", // 手机号
        code: "", // 验证码
        password: "123456",
        disabledCode: true,
      },
      rules: {
        mobile: [
          { required: true, message: "手机号不能为空！" },
          // { pattern: /^1[3|5|7|8]\d{9}$/, message: "请输入正确内容" },
          // 函数
          {
            validator: this.validate,
            message: "请输入正确手机号！",
          },
        ],
        code: [{ pattern: /^\d{6}$/, message: "请输入正确验证码！" }],
      },
      time: 3 * 1000,
      showSendmessage: true,
    };
  },
  methods: {
    finish() {
      // 倒计时结束时触发
      this.showSendmessage = true;
    },
    // 点击发送短信验证码
    onSendSms() {
      this.showSendmessage = false;
    },
    // 校验
    validate(val) {
      return /^1[3|5|7|8]\d{9}$/.test(val);
    },
    // 点击表单提交
    async onSubmit() {
      let res = await login();
      console.log("res");
    },
    async onSendSms() {
      let params = {
        userMobile: this.user.mobile,
      };
      let { data } = await sendSms(params);
      // 接口返回的验证码是加密过的
      this.password = data.smscode;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
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
.main {
  .iconfont {
    font-size: 6vw;
    line-height: 12vw;
  }

  /deep/ .van-field__control {
    height: 12vw;
    font-size: 5vw;
    line-height: 12vw;
  }

  /deep/ input {
    box-shadow: inset 0 0 0 1000px white !important;
  }

  .login-btn {
    background-color: #6db4fb;
    border: none;
  }
}
</style>
