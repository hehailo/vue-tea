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
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user: {
        mobile: "1998", // 手机号
        code: "123456", // 验证码
      },
      disabledCode: true,
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
    ...mapMutations("user", ["saveUserInfo"]),
    finish() {
      // 倒计时结束时触发
      this.showSendmessage = true;
    },
    // 点击发送短信验证码
    async onSendSms() {
      //1 验证手机号
      try {
        await this.$refs.loginForm.validate("mobile"); // 返回的是promise
      } catch (error) {
        return;
      }
      //2.开启倒计时
      this.showSendmessage = false;
      // 可以输入验证码
      this.disabledCode = false;
      //3 发送验证码
      try {
        await sendSms({
          mobile: this.mobile,
        });
        this.$toast("发送成功！");
      } catch (error) {
        // 关闭倒计时
        this.showSendmessage = false;
        this.$toast("发送失败，请稍后重试");
      }
    },
    // 校验
    validate(val) {
      return /^1[3|5|7|8|9]\d{2}$/.test(val);
    },
    // 点击表单提交
    async onSubmit() {
      let user = this.user;
      try {
        let res = await login(user);
        if (res.code == "200") {
          // 成功
          this.$toast("登录成功！");
          // 存放用户信息
          this.saveUserInfo(res.data.data);
          this.$router.push("/my");
        } else {
          this.$toast("登录失败，请稍后重试。原因：\n" + res.message);
        }
      } catch (error) {
        this.$toast("登录失败，请稍后重试。原因：\n" + error.message);
      }
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
