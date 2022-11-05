<template>
  <div class="meteor_bg">
    <canvas id="sky"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initMeteor } from "../utils/meteor.js";

onMounted(() => {
  initMeteor();
});
</script>

<style scoped>
.meteor_bg {
  background: #000;
}
</style>
