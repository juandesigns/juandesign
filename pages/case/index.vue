<template>
  <main class="case">
    <TheBanner :title="'相關案例'" :description="'過往經驗與案例說明'"/>
    <section class="case-block flex flex-col items-center">
      <div class="container flex flex-col">
        <div class="flex flex-row justify-between items-center">
          <div class="flex justify-center relative">
            <img width="125" src="../../assets/img/img-title-case.png">
            <span class="h2 title-tag whitespace-nowrap">相關案例</span>
          </div>
          <p class="en-txt text-right">ABOUT<br/>CASE</p>
        </div>
        <p class="mt-4">若是想要查看更多案例，或近期案例可直接聯繫我們！</p>
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-20">
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
import itemImg_05 from "../../assets/img/img-case-05.png";
import itemImg_06 from "../../assets/img/img-case-06.png";
import itemImg_07 from "../../assets/img/img-case-07.png";

const type = [
  {
    href: '/case/laundry',
    title: '新光白洗衣店LINE@預約收送',
    src: itemImg_07,
    item_01: '2023/9',
    item_02: '透過LINE@與Google sheet串接存取訂單，發送LINE Notify通知商家訂單，同時LINE@通知客人已收到預約訂單。',
  },
  {
    href: '/case/transfree',
    title: '全台公車動態時刻查詢應用服務',
    src: itemImg_06,
    item_01: '2021/11',
    item_02: '提供公車搜尋、附近站牌、常用公車、設定等服務，並適應多裝置尺寸，個性化多種設定讓使用者能清楚地接收資訊。',
  },
  {
    href: '/case/lotsoScrum',
    title: '熊抱科技Scrum新手村',
    src: itemImg_05,
    item_01: '2022/11',
    item_02: '六角學院舉辦2022 F2e挑戰賽，內容是介紹 Scrum 工作法，UI 設計關卡內容與網頁互動效果，透過動畫與互動呈現知識點，讓新手挑戰者藉更了解 Scrum。',
  },
  {
    href: '/case/account',
    title: '數位存款帳戶線上開戶',
    src: itemImg_01,
    item_01: '2021/9-2021/10',
    item_02: '整體介面以簡潔、互動、動態呈現，優化數位線上開戶，訴求重新規劃流程及風格，提高互動性、親切，讓枯燥的開戶流程添加趣味性，提升整體鮮明的形象。',
  },
  {
    href: '/case/enterprise',
    title: '行動企業金融APP',
    src: itemImg_02,
    item_01: '2021/5-2022/2',
    item_02: 'APP視覺風格翻新，企業金融核心功能重新規劃，以「快速切換」為操作模式，優化整體使用者操作流程，提升查詢效率，功能包含台外幣付款、帳務查詢、金融牌告、個人設定、客戶服務等等。',
  },
  {
    href: '/case/a11y',
    title: '個人金融友善服務',
    src: itemImg_03,
    item_01: '2021/3-2021/5',
    item_02: '針對無障礙族群個人金融專區，提供存匯帳務、金融資訊等核心功能，整體設計以提高辨別度、可視性、操作易用性目標。',
  },
  {
    href: '/case/login',
    title: '行動App登入優化',
    src: itemImg_04,
    item_01: '2021/2-2021/3',
    item_02: '使用者情境為行動銀行更新資訊時，若用戶遇到更新時間較長時，容易出現焦躁情緒，需提供轉移用戶注意力來解決等待的焦慮。',
  }
]
</script>

<style scoped>

</style>
