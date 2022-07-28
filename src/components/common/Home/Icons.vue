<template>
  <div class="IconsContainer">
    <van-grid :column-num="5" clickable >
      <van-grid-item :text="icon.title" v-for="icon in iconsList" :key="icon.id">
        <template #icon>
          <van-image :src="icon.imgUrl" />
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Icons",
  data() {
    return {
      iconsList: [
        {
          id: 1,
          title: "自饮茶",
          imgUrl: require("@/assets/img/icons/cha.png"),
        },
        {
          id: 2,
          title: "茶具",
        imgUrl: require("@/assets/img/icons/chaju.png"),
        },
        {
          id: 3,
          title: "茶礼盒",
          imgUrl: require("@/assets/img/icons/chalihe.png"),
        },
        {
          id: 4,
          title: "领福利",
          imgUrl: require("@/assets/img/icons/fuli.png"),
        },
        {
          id: 5,
          title: "官方验证",
          imgUrl: require("@/assets/img/icons/guanfangrenzheng.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.IconsContainer{
  .van-image{
    width:50px
  }
}
</style>