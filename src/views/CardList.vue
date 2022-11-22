<template>
  <div class="card_list">
    <cardItem
      v-for="(item, index) in bookList"
      :key="index"
      :book="item"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import cardItem from "../components/CardItem.vue";

import { ref } from "vue";

const list = new Array(10).fill({
  bookName: "测试用例",
  catlog: "作者 · 分类 · 500万字",
  tags: ["标签一", "标签二", "标签三"],
  desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
  bookCover:
    "https://images.unsplash.com/photo-1615860697738-c9245d311b9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
});

const bookList = ref(list);

/** 
 const bookList = ref([
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1615860697738-c9245d311b9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1586724220920-ab7eafeaf663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668774833031-fa514917b190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668666709605-b2e707cc932d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668853853625-d38dbc599001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1667537506424-92ff65808b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668778304484-a9fac5b3a4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668787088962-04516e2829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668849410584-ebf1f4320029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://plus.unsplash.com/premium_photo-1661741527893-f58f069142a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    bookName: "测试用例",
    catlog: "作者 · 分类 · 500万字",
    tags: ["标签一", "标签二", "标签三"],
    desc: "忆在广陵初，移船问相识。君骑白马天上来，手把铜章好颜色。东风袅袅吹落花，下马邀予入酒家。 珊瑚宝玦不当事，箜篌锦瑟又琵琶。 掀髯啧啧爱我诗，三年与我闽中期。是时我尚有妻子，到家不肯轻别离。遂使君心长荆棘，老我至今有所失。 望君恕我如醉人，白头江上入骨贫。 残杯冷炙度朝夕，东邻西舍谁为亲。 感君常反仄，仰天徒叹息。 君当扣我胫，不死是为贼。",
    bookCover:
      "https://images.unsplash.com/photo-1668854084710-386c7d25f771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
]);
*/
</script>

<style lang="less" scoped>
.card_list {
  padding: 0 4vw;
}
</style>
