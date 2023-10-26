<template>
  <div>
    <main>
      <section class="banner-block flex justify-center">
        <div class="container">
          <div class="flex flex-col">
            <h1>打造你的專屬網站<br/><span class="h2">準時交件 <br class="mobile"/>價格優惠 <br class="mobile"/>用心負責</span></h1>
            <p class="h4">
              我們夥伴包含<br/>UIUX設計師、全端開發工程師！<br/>
              提供UI設計及畫面切版<br />能夠完美落地實現設計稿，<br/>
              工程師能支持前後端技術，<br/>開發品質高，容易擴充及維護！<br/>
              希望能有機會可以合作！<br />若有任何疑問都歡迎再討論！
            </p>
          </div>
        </div>
      </section>
      <TheService/>
      <section class="process-block flex flex-col items-center">
        <div class="container flex flex-col">
          <div class="flex flex-col items-center">
            <div class="flex justify-center relative">
              <img width="138" src="../assets/img/img-title-process.png">
              <span class="h2 title-tag whitespace-nowrap">服務流程</span>
            </div>
            <p class="en-txt">PROCESS</p>
          </div>
          <swiper-container
              class="swiper-index"
              :loop="false"
              :pagination="true"
              :slides-per-view="1"
              :centered-slides="false"
              :breakpoints="{
              1200: {
              slidesPerView: 7,
            },

             768: {
              slidesPerView: 5,
            },
            390: {
              slidesPerView: 1,
            },
             320: {
              slidesPerView: 1,
            },
          }"
              @progress="onProgress"
              @slidechange="onSlideChange"
          >
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">1.<br/>需求討論</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-1.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">2.<br/>提供報價</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-2.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">3.<br/>簽訂合約</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-3.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">4.<br/>預收訂金</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-4.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">5.<br/>驗收修正</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-5.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">6.<br/>完成交付</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-6.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">7.<br/>收取尾款</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-7.svg">
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
      <section class="case-block flex flex-col items-center">
        <div class="container flex flex-col">
          <div class="flex flex-row justify-between items-center">
            <div class="flex justify-center relative">
              <img width="125" src="../assets/img/img-title-case.png">
              <span class="h2 title-tag whitespace-nowrap">相關案例</span>
            </div>
            <p class="en-txt text-right">ABOUT<br/>CASE</p>
          </div>
          <swiper-container
              class="swiper-index"
              :loop="true"
              :pagination="true"
              :slides-per-view="4"
              :space-between="40"
              :breakpoints="{
              1200: {
              slidesPerView: 4,
              },

               768: {
                slidesPerView: 3,
              },
              390: {
                slidesPerView: 1,
              },
               320: {
                slidesPerView: 1,
              },
          }">
            <swiper-slide v-for="file in type" :key="file.title">
              <TheImgContent :href="file.href" :src="file.src" :title="file.title" :item_01="file.item_01"
                             :item_02="file.item_02"/>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
      <TheContact/>
    </main>
    <!--    <NuxtLink to="/service">To service page</NuxtLink>-->

  </div>
</template>

<script setup lang="ts">
import {register} from 'swiper/element/bundle';
import TheService from "../components/TheService.vue";
import TheImgContent from '../components/TheImgContent.vue';
import itemImg_01 from "../assets/img/img-case-01.png";
import itemImg_02 from "../assets/img/img-case-02.png";
import itemImg_03 from "../assets/img/img-case-03.png";
import itemImg_04 from "../assets/img/img-case-04.png";
import itemImg_05 from "../assets/img/img-case-05.png";
import itemImg_06 from "../assets/img/img-case-06.png";
import itemImg_07 from "../assets/img/img-case-07.png";
import itemImg_08 from "../assets/img/img-case-08.png";

register();

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress)
};

const onSlideChange = (e) => {
  console.log('slide changed')
}

useSeoMeta({
  title: 'JuanDesign｜打造屬於你的網站',
  ogTitle: 'JuanDesign-打造屬於你的網站',
  description: '提供高質感網站設計，擁有多元化客製方案，樹立獨一無二的品牌',
  ogDescription: '提供高質感網站設計，擁有多元化客製方案，樹立獨一無二的品牌',
  ogImage: 'https://juandesign.tw/favicon.ico',
  twitterCard: 'summary_large_image',
})

const type = [
  {
    href: '/case/shipping',
    title: '臺瑞集運官網建置',
    src: itemImg_08,
    item_01: '2023/10',
    item_02: '官網包含常見問題、客戶好評、品牌優勢等資訊傳遞，透過不同運送及品項，提供對應試算運費功能，降低人力負載，提高經營效率，採用AWS雲服務及專屬域名，同時展示品牌專業形象。',
  },
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


<style>

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-container {
  padding: 40px 0 0 0;
}

swiper-container::part(bullet-active) {
  background-color: #B38F8AFF;
}

</style>
