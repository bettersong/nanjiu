<template>
  <div :class="$style.xq_outer">
    <div :class="$style.xq_bg"></div>
    <div :class="$style.xq_women"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" module>
.xq_outer {
  position: relative;
  width: 600px;
  height: 360px;
  margin: 20px auto;
  background: red;
}
.xq_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/public/xq_bg.jpeg");
  background-size: 100% 100%;
}
.xq_women {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/public/xq_women.jpeg");
  background-size: 100% 100%;
  -webkit-mask-image: linear-gradient(to right, transparent 30%, #fff 44%);
}
</style>
