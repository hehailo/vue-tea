<template>
  <div>
    <Header></Header>
    <van-tabs v-model="active" swipeable duration="0.2">
      <van-tab v-for="(tab, index) in tabs" :title="tab.label" :key="index">
        内容 {{ tabs.label }}
      </van-tab>
    </van-tabs>
    <section>
      <Swiper></Swiper>
      <Icons></Icons>
    </section>
    <Recommend></Recommend>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/common/Home/Header.vue";
import Tabbar from "@/components/common/Tabbar.vue";
import Swiper from "@/components/common/Home/Swiper.vue";
import Icons from "@/components/common/Home/Icons.vue";
import Recommend from "@/components/common/Home/Recommend.vue";

export default {
  name: "Home",
  data() {
    return {
      tabs: [
        { label: "推荐" },
        { label: "大红袍" },
        { label: "绿茶" },
        { label: "铁观音" },
        { label: "普洱" },
        { label: "茶具" },
        { label: "花茶" },
      ],
    };
  },
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend
  },
};
</script>

<style>
</style>