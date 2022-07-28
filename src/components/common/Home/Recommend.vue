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
      v-for="item in recommendList"
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
  data() {
    return {
      recommendList: [
        {
          id: 1,
          name: "龙井一号",
          desc: "鲜爽甘醇 口粮首选",
          price: 68,
          imgUrl: require("@/assets/img/goods/good3.jpg"),
        },
        {
          id: 2,
          name: "龙井一号",
          desc: "鲜爽甘醇 口粮首选",
          price: 68,
          imgUrl: require("@/assets/img/goods/good4.jpg"),
        },
        {
          id: 1,
          name: "龙井一号",
          desc: "鲜爽甘醇 口粮首选",
          price: 68,
          imgUrl: require("@/assets/img/goods/good5.jpg"),
        },
      ],
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