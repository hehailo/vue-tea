<template>
  <div class="Recommend">
    <TitleName>
      <template #title>
        <p>火爆推荐</p>
      </template>
    </TitleName>
    <van-card
      :price="item.price"
      :desc="item.desc"
      :title="item.name"
      v-for="item in recommends.recommendList"
      :key="item.id"
    >
      <template #thumb>
        <van-image fit="cover" :src="item.imgUrl" />
      </template>
    </van-card>
  </div>
</template>

<script>
import TitleName from "./TitleName.vue";
export default {
  name: "Recommend",
  components: {
    TitleName,
  },
  props:{
    recommends:Object
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.Recommend {
  .van-card .van-image {
    width: 160px;
    height: 160px;
  }
}
</style>