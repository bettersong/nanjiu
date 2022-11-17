<template>
  <div class="card_list" v-for="item in 1000" :key="item">
    <cardItem :book="book" />
  </div>
</template>

<script setup lang="ts">
import cardItem from "../components/CardItem.vue";

import { ref } from "vue";

const book = ref({
  bookName: "斗罗大陆",
  catlog: "上山打老虎 · 分类 · 500万字",
  tags: ["东方玄幻", "无限流", "诸天流"],
  desc: "无敌挂王唐三无敌挂王唐三无敌挂王唐三无敌挂王唐三无敌挂王唐三无敌挂王唐三无敌挂王唐三无敌挂王唐三",
});
</script>

<style lang="less" scoped>
.card_list {
  padding: 0 4vw;
}
</style>
