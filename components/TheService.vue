<template>
  <section class="service-block flex justify-center">
    <div class="container">
      <div class="flex flex-col items-center w-20">
        <div class="flex justify-center relative">
          <img width="120" src="../assets/img/img-title-service.png">
          <span class="h2 title-tag whitespace-nowrap">服務項目</span>
        </div>
        <p class="en-txt">SERVICE</p>
      </div>
      <div class="flex flex-wrap justify-end w-80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="file in type" :key="file.title">
          <TheImgContent :href="file.href" :src="file.src" :alt="file.alt" :title="file.title" :item_01="file.item_01"
                         :item_02="file.item_02"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheImgContent from '../components/TheImgContent.vue'
import itemImg_01 from "../assets/img/img-service-01.png";
import itemImg_02 from "../assets/img/img-service-02.png";
import itemImg_03 from "../assets/img/img-service-03.png";
import itemImg_04 from "../assets/img/img-service-04.png";
import itemImg_05 from "../assets/img/img-service-05.png";

const type = [
  {
    href: '/service/website',
    title: '網站建置',
    alt:'網站建置',
    src: itemImg_01,
    item_01: '品牌形象網站',
    item_02: '一頁式網站',
  },
  {
    href: '/service/websetup',
    title: '網站架設與網域',
    alt:'網站架設與網域',
    src: itemImg_02,
    item_01: '客製化網域',
    item_02: '虛擬主機架設',
  },
  {
    href: '/service/develop',
    title: '軟體開發',
    alt:'軟體開發',
    src: itemImg_03,
    item_01: '前端/後端開發',
    item_02: '爬蟲程式服務',
  },
  {
    href: '/service/uiux',
    title: 'UIUX設計及切版',
    alt:'UIUX設計及切版',
    src: itemImg_04,
    item_01: 'UI/UX設計',
    item_02: '網頁切版服務',
  },
  {
    href: '/service/brand',
    title: '品牌經營與推廣',
    alt:'品牌經營與推廣',
    src: itemImg_05,
    item_01: 'LINE@BOT 建立',
    item_02: 'LINE@官方帳號 建立',
  },
]
</script>


<style scoped>

</style>
