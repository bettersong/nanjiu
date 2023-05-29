<template>
  <div :class="$style.paint_container">
    <!-- <div :class="$style.paint_title">paint 碎片效果</div> -->
    <img src="/public/3.jpg" :class="$style.paint_img" />
    <!-- <img src="/public/3.jpg" :class="$style.paint_img1" /> -->
    <!-- <div :class="$style.suipian_box"></div> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
// import paintSuipian from "../../utils/paintSuipian";

const paint = () => {
  if (CSS.paintWorklet) {
    CSS.paintWorklet.addModule("/src/utils/paintSuipian.js");
  }
};

onMounted(() => {
  //   console.log("------");
  paint();
});
</script>

<style lang="scss" module>
html {
  --color2: yellow;
}
.paint_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
}
.paint_title {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  --color3: skyblue;
}
@property --f {
  syntax: "<number>";
  inherits: false;
  initial-value: 1;
}
.paint_img {
  width: 400px;
  height: auto;
  --color: rgba(255, 255, 255, 1);
  --m: 10;
  --n: 10;
  --f: 1;
  -webkit-mask: paint(suipian);
  transition: --f 1s;
}
.paint_img:hover {
  --f: 0;
}
.paint_img1 {
  width: 400px;
  height: auto;
  --m: 10;
  --n: 10;
  --f: 1;
  -webkit-mask: paint(suipian1);
  transition: --f 1s;
}
.paint_img1:hover {
  --f: 0;
}
</style>
