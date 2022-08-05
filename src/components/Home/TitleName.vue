<template>
  <div class="TitleName">
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: "TitleName",
};
</script>

<style lang="less" scoped>
.TitleName {
  text-align: center;
  position: relative;
  margin: 10px;
  p::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    top: 50%;
    margin-top: -4px;
    margin-left: -20px;
  }
  p::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    top: 50%;
    margin-top: -4px;
    margin-left: 10px;
  }
}
</style>