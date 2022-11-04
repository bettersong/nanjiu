<template>
  <!-- <div>1111</div> -->
  <div class="meteor_bg">
    <canvas id="sky"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initMeteor } from "../utils/meteor.js";
// const initMeteor: any = require("../utils/meteor.js");

onMounted(() => {
  initMeteor();
});
</script>

<style scoped>
.meteor_bg {
  background: #000;
  /* background: url("../../public/bg.jpg") no-repeat;
  background-size: 100% 100%; */
}
</style>
