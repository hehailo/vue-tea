<template>
  <div class="IconsContainer">
    <van-grid :column-num="5" clickable >
      <van-grid-item :text="icon.title" v-for="icon in icons.iconsList" :key="icon.id">
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
  props:{
    icons:Object
  },
  data() {
    return {
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