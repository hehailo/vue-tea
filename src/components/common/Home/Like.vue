<template>
  <div class="Like">
    <TitleName>
      <template #title>
        <p>猜你喜欢</p>
      </template>
    </TitleName>
    <van-grid :column-num="2">
      <van-grid-item v-for="like in likes.likeList" :key="like.id" :text="like.name">
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
  props:{
    likes:Object
  },
  data() {
    return {
    
    };
  },
  methods: {
  },
};
</script>

<style>
</style>