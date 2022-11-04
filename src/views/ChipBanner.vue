<template>
  <div class="chip_banner">
    <div class="img_list">
      <img class="bg" src="../../public/1.jpg" />
      <img class="bg" src="../../public/2.jpg" />
      <img class="bg" src="../../public/3.jpg" />
      <img class="bg" src="../../public/4.jpg" />
    </div>
    <canvas id="chip" ref="chip" width="800" height="530"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ChipBanner from "../utils/chipBanner";
console.log("sss");
onMounted(() => {
  // let ctx = document.querySelector("#chip")?.getContext("2d"),
  //   img = document.querySelector("img");
  // console.log(ctx, img, "----ss");

  // ctx.beginPath();
  // ctx.drawImage(img, 0, 0);
  // ctx.closePath();
  // ctx.stroke();
  var app = new ChipBanner();

  app.init();

  app.cvs.onclick = function (e) {
    app.chipClick(e);
  };
});
</script>

<style scoped lang="less">
.box {
  display: flex;
  width: 300px;
  height: 200px;
  background: chocolate;
  .title {
    width: 100px;
    background: antiquewhite;
  }
  .right_inner {
    width: calc(100% - 100px);
    background: hotpink;
  }
}
.chip_banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_list {
  display: none;
}
</style>
