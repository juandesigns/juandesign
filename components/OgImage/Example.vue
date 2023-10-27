<template>
  <div :class="[backgroundColor]" class="w-full h-full flex text-white items-center justify-center flex-col">
<!--    <img width="121" :src="itemImg_08" alt="JuanDesign">-->
    <h1 class="">
      {{ title }}
    </h1>
    <h2>
      {{ description }}
    </h2>
  </div>
</template>
<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})
defineOgImage({
  component: 'Example',
  title: 'JuanDesign｜打造屬於你的網站',
  description: '提供高質感網站設計，擁有多元化客製方案，樹立獨一無二的品牌',
  backgroundColor: 'bg-[#faf6f3] banner-block',
})
const props = defineProps({
  title: String,
  backgroundColor: String,
  description: String,
})

</script>
<style scoped>
h1, h2 {
  font-family: "Noto Serif TC";
  color: #796562;
}

/*//首頁*/
.banner-block {
  display: flex;
  width: 100%;
  height: 1280px;
  background-image: url("../../assets/img/banner-index.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
</style>
