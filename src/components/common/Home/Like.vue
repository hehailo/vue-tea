<template>
  <div class="Like">
    <TitleName>
      <template #title>
        <p>猜你喜欢</p>
      </template>
    </TitleName>
    <van-grid :column-num="2">
      <van-grid-item v-for="like in likeList" :key="like.id" text="文字">
        <template #icon>
          <van-image :src="like.imgUrl"  />
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import TitleName from "@/components/common/Home/TitleName.vue";
export default {
  name: "Like",
  components: {
    TitleName,
  },
  data() {
    return {
      likeList: [
        {
          id: 1,
          name: "秒速5厘米",
          imgUrl: require("@/assets/img/like/like2.jpg"),
          price: "21",
        },
        {
          id: 2,
          name: "言叶之庭",
          imgUrl: require("@/assets/img/like/like3.jpg"),
          price: "21",
        },
        {
          id: 3,
          name: "天气之子",
          imgUrl: require("@/assets/img/like/like4.jpg"),
          price: "24",
        },
        {
          id: 4,
          name: "你的名字",
          imgUrl: require("@/assets/img/like/like1.jpg"),
          price: "25",
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style>
</style>