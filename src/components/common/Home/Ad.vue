<template>
  <div class="Ad">
    <van-image
      class="adImg"
      fit="cover"
      v-for="ad in advertisements"
      :key="ad.id"
      :src="ad.imgUrl"
    />
  </div>
</template>

<script>
export default {
  name: "Ad",
  data() {
    return {
      advertisements: [
        {
          id: 1,
          name: "ad1",
          imgUrl: require("@/assets/img/ads/01.jpg"),
        },
        {
          id: 2,
          name: "ad1",
          imgUrl: require("@/assets/img/ads/02.jpg"),
        },
        {
          id: 3,
          name: "ad1",
          imgUrl: require("@/assets/img/ads/03.jpg"),
        },
        {
          id: 4,
          name: "ad1",
          imgUrl: require("@/assets/img/ads/04.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.Ad {

  .adImg {
    width: 100%;
    height: 40vw;
  }
}
</style>