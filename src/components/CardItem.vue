<template>
  <div class="card_item">
    <div class="card_inner">
      <img :src="book.bookCover" class="book_cover" />
      <div class="card_item_right">
        <div class="book_title">{{ `${book.bookName}${index + 1}` }}</div>
        <div class="book_author">{{ book.catlog }}</div>
        <div class="book_tags">
          <div class="book_tag" v-for="(item, index) in book.tags" :key="index">
            {{ item }}
          </div>
        </div>
        <div class="book_desc">
          {{ book.desc }}
        </div>
      </div>
      <!-- <script></script> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  book: any;
  index: any;
}>();
const { book, index } = toRefs(props);
</script>

<style lang="less" scoped>
.card_item {
  margin: 20px auto;
  content-visibility: auto;
  // contain-intrinsic-size: 200px;
}
.card_inner {
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background: skyblue;
}
.book_cover {
  width: 120px;
  height: 180px;
  margin-right: 8px;
}
.book_title {
  font-size: 20px;
  font-weight: 600;
}
.book_author {
  margin-bottom: 8px;
  font-weight: 500;
}
.book_tags {
  display: flex;
  margin-bottom: 8px;
  .book_tag {
    padding: 2px 6px;
    border-radius: 8px;
    margin-right: 4px;
    font-size: 14px;
    background: #eee;
  }
}
.book_desc {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #333;
}
</style>
