<template>
  <main class="case">
    <TheBanner :title="'相關案例'" :description="'服務案例說明與分享'"/>
    <section class="case-block flex flex-col items-center">
      <div class="container flex flex-col">
        <div class="flex flex-row justify-between items-center">
          <div class="flex justify-center relative">
            <img width="125" src="../../assets/img/img-title-case.png">
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
import TheBanner from '../../components/TheBanner.vue'
import TheImgContent from '../../components/TheImgContent.vue'
import itemImg_01 from "../../assets/img/img-case-01.png";
import itemImg_02 from "../../assets/img/img-case-02.png";
import itemImg_03 from "../../assets/img/img-case-03.png";
import itemImg_04 from "../../assets/img/img-case-04.png";
import itemImg_05 from "../../assets/img/img-service-05.png";

const type = [
  {
    href: '/case/account',
    title: '數位存款帳戶線上開戶',
    src: itemImg_01,
    item_01: '2021/9-2021/10',
    item_02: '整體介面以簡潔、互動、動態呈現，優化數位線上開戶，訴求重新規劃流程及風格，提高互動性、親切，讓枯燥的開戶流程添加趣味性，提升整體鮮明的形象。',
  },
  {
    href: '',
    title: '行動企業金融APP',
    src: itemImg_02,
    item_01: '2021/5-2022/2',
    item_02: 'APP視覺風格翻新，企業金融核心功能重新規劃，以「快速切換」為操作模式，優化整體使用者操作流程，提升查詢效率，功能包含台外幣付款、帳務查詢、金融牌告、個人設定、客戶服務等等。',
  },
  {
    href: '',
    title: '個人金融友善服務',
    src: itemImg_03,
    item_01: '2021/3-2021/5',
    item_02: '針對無障礙族群個人金融專區，提供存匯帳務、金融資訊等核心功能，整體設計以提高辨別度、可視性、操作易用性目標。',
  },
  {
    href: '',
    title: '行動App登入優化',
    src: itemImg_04,
    item_01: '2021/2-2021/3',
    item_02: '使用者情境為行動銀行更新資訊時，若用戶遇到更新時間較長時，容易出現焦躁情緒，需提供轉移用戶注意力來解決等待的焦慮。',
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
