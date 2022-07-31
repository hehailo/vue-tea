<template>
  <div class="swiperContainer">
    <!-- :autoplay="3000" -->
    <van-swipe class="swiper" :autoplay="3000">
      <van-swipe-item class="swiperImg" v-for="image in swiperImgs" :key="image.id">
        <van-image fit="cover" :src="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      swiperImgs: [
        { id: "1", imgUrl: require("@/assets/img/swipers/swiper1.jpg") },
        { id: "2", imgUrl: require("@/assets/img/swipers/swiper2.jpg") },
        { id: "3", imgUrl: require("@/assets/img/swipers/swiper3.jpg") },
        { id: "4", imgUrl: require("@/assets/img/swipers/swiper4.jpg") },
      ],
    };
  },
  methods: {
    // onChange(index) {
    //   console.log("当前的Swipe 索引：" + index);
    // },
  },
};
</script>

<style lang="less" scoped>
.swiperContainer {
  height: 300px;
  .swiper {
    height: 300px;
    .swiperImg{
      width: 100%;
    }
  }

}
</style>

