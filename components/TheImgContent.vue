<template>
  <a :href="href" class="img-content group hover:-translate-y-4 transition-all">
    <img :src="src">
    <p class="h3">{{ title }}</p>
    <p>{{ item_01 }}</p>
    <p>{{ item_02 }}</p>
    <div class="flex justify-end">
      <UButton :label="btn" class="h4">
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid"/>
        </template>
      </UButton>
    </div>
  </a>
</template>

<script setup>
import itemImg_01 from "../assets/img/img-service-01.png";

defineProps({
  href: {type: String, default: "#"},
  src: {type: String, default: "itemImg_01"},
  title: {type: String, default: "網站建置"},
  item_01: {type: String, default: "品牌形象網站"},
  item_02: {type: String, default: "一頁式網站"},
  btn: {type: String, default: "More"},
});
</script>


<style scoped>

</style>
