<template>
  <div :class="$style.paint_container">
    <!-- <div :class="$style.paint_title">paint 碎片效果</div> -->
    <img src="/public/3.jpg" :class="$style.paint_img" />
    <!-- <div :class="$style.suipian_box"></div> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
// import paintSuipian from "../../utils/paintSuipian";

const paint = () => {
  if (CSS.paintWorklet) {
    console.log(CSS);
    CSS.paintWorklet.addModule("/src/utils/paintSuipian.js");
  }
  //   console.log(CSS, "css");
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
  --m: 6;
  --n: 6;
  --f: 1;
  -webkit-mask: paint(suipian);
  transition: --f 1s;
}
.paint_img:hover {
  --f: 0;
}
</style>
