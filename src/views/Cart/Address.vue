<template>
  <div class="van-address-item van-address-item">
    <div class="van-cell van-cell--borderless">
      <div
        class="van-cell__value van-cell__value--alone van-address-item__value"
      >
        <div class="van-address-item__name">王五 1320000000</div>
        <div class="van-address-item__address">
          浙江省杭州市滨江区江南大道 15 号
        </div>
      </div>
      <i class="van-icon van-icon-edit van-address-item__edit"><!----></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
      ],
    };
  },
  methods: {
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
