<template>
  <main class="case">
    <TheBanner :title="'相關案例'" :description="'服務案例說明與分享'"/>
    <section class="case-block flex flex-col items-center">
      <div class="container flex flex-col">
        <div class="flex flex-row justify-between items-center">
          <div class="flex justify-center relative">
            <img width="125" src="../assets/img/img-title-case.png">
            <span class="h2 title-tag whitespace-nowrap">相關案例</span>
          </div>
          <p class="en-txt text-right">SERVICE<br/>CASE</p>
        </div>
        <div class="flex flex-wrap justify-end w-full grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-6 mt-20">
          <div v-for="file in type" :key="file.title">
            <TheImgContent :href="file.href" :src="file.src" :title="file.title" :item_01="file.item_01"
                           :item_02="file.item_02"/>
          </div>
        </div>
      </div>
    </section>
    <TheContact/>
  </main>
</template>

<script setup>
import TheBanner from '../components/TheBanner.vue'
import TheImgContent from '../components/TheImgContent.vue'
import itemImg_01 from "../assets/img/img-service-01.png";
import itemImg_02 from "../assets/img/img-service-02.png";
import itemImg_03 from "../assets/img/img-service-03.png";
import itemImg_04 from "../assets/img/img-service-04.png";
import itemImg_05 from "../assets/img/img-service-05.png";

const type = [
  {
    href: '',
    title: '網站建置',
    src: itemImg_01,
    item_01: '品牌形象網站',
    item_02: '一頁式網站',
  },
  {
    href: '',
    title: '網站架設與網域',
    src: itemImg_02,
    item_01: '客製化網域',
    item_02: '虛擬主機架設',
  },
  {
    href: '',
    title: '軟體開發',
    src: itemImg_03,
    item_01: '前端/後端開發',
    item_02: '爬蟲程式服務',
  },
  {
    href: '',
    title: 'UIUX設計及切版',
    src: itemImg_04,
    item_01: 'UI/UX設計',
    item_02: '網頁切版服務',
  },
  {
    href: '',
    title: '品牌經營與推廣',
    src: itemImg_05,
    item_01: 'LINE@BOT 建立',
    item_02: 'FB messenger 交談功能',
  },
]
</script>

<style scoped>

</style>
