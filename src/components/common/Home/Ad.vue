<template>
  <div class="Ad">
    <van-image
      class="adImg"
      fit="cover"
      v-for="ad in advertisements.adImgs"
      :key="ad.id"
      :src="ad.imgUrl"
    />
  </div>
</template>

<script>
export default {
  name: "Ad",
  props:{
    advertisements:Object
  },
  data() {
    return {
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