<template>
  <div>
    <main>
      <section class="banner-block flex justify-center">
        <div class="container">
          <div class="flex flex-col">
            <h1>量身打造您的專屬網站<br/><span class="h2 font-medium">準時負責 <br class="mobile"/>重視品質 <br class="mobile"/> 價格合理</span></h1>
            <p class="h3">
              我們用心對待每一位客戶<br/>
              為您打造品牌專屬識別度<br/>
              客製方案多元選擇<br/>
              重視技術開發品質<br/>
              保持設計細節質量<br/>
              希望能有為您服務的機會<br/>
              若有疑問歡迎直接聯繫我們<br/>
            </p>
          </div>
        </div>
      </section>
      <TheService/>
      <section class="process-block flex flex-col items-center">
        <div class="container flex flex-col">
          <div class="flex flex-col items-center">
            <div class="flex justify-center relative">
              <img alt="服務流程" width="138" src="../assets/img/img-title-process.png">
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
          >
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">1.<br/>需求討論</p>
                <div class="process-item-icon">
                  <img alt="需求討論" src="../assets/img/icon/icon-step-1.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">2.<br/>提供報價</p>
                <div class="process-item-icon">
                  <img alt="提供報價" src="../assets/img/icon/icon-step-2.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">3.<br/>簽訂合約</p>
                <div class="process-item-icon">
                  <img alt="簽訂合約" src="../assets/img/icon/icon-step-3.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">4.<br/>預收訂金</p>
                <div class="process-item-icon">
                  <img alt="預收訂金" src="../assets/img/icon/icon-step-4.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">5.<br/>驗收修正</p>
                <div class="process-item-icon">
                  <img alt="驗收修正" src="../assets/img/icon/icon-step-5.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">6.<br/>完成交付</p>
                <div class="process-item-icon">
                  <img alt="完成交付" src="../assets/img/icon/icon-step-6.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">7.<br/>收取尾款</p>
                <div class="process-item-icon">
                  <img alt="收取尾款" src="../assets/img/icon/icon-step-7.svg">
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
              <img alt="相關案例" width="125" src="../assets/img/img-title-case.png">
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
              <TheImgContent :href="file.href" :src="file.src" :alt="file.alt" :title="file.title" :item_01="file.item_01"
                             :item_02="file.item_02"/>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
      <TheContact/>
    </main>

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
import itemImg_09 from "assets/img/img-case-09.png";

register();

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
};

const type = [
  {
    href: '/case/laundry',
    title: '新光白洗衣店LINE@預約訂單',
    alt:"新光白洗衣店LINE@預約訂單",
    src: itemImg_07,
    item_01: '2025/1',
    item_02: '整合LINE@與Google Sheet，實現自動訂單管理。訂單資訊自動記錄，商家即時查閱，透過LINE Notify即時接收通知。客戶同步收到預約確認，提升服務體驗與信任感。',
  },
  {
    href: '/case/chilindesign',
    title: '麒麟室內設計官方網站',
    alt:"麒麟室內設計官方網站",
    src: itemImg_09,
    item_01: '2024/10',
    item_02: '麒麟室內設計官方網站屬於品牌形象型網站，以暖色調、大理石元素為基調，結合大地色與金色細節，營造溫暖且高端的視覺體驗。透過精緻排版與互動模組，層次分明地展示作品與設計差異，突顯品牌的專業與獨特價值。',
  },
  {
    href: '/case/shipping',
    title: '臺瑞集運官方網站',
    alt:"臺瑞集運官方網站",
    src: itemImg_08,
    item_01: '2024/10',
    item_02: '網站整合常見問題、客戶好評與品牌優勢，快速提供資訊，提升信任感。運費試算功能自動計算費用，減少人力成本，提升效率。網站架設於AWS雲端，使用專屬域名，穩定安全，展現品牌專業價值。',
  },
  {
    href: '/case/transfree',
    title: '全台公車動態時刻查詢應用服務',
    alt:"全台公車動態時刻查詢應用服務",
    src: itemImg_06,
    item_01: '2021/11',
    item_02: '提供公車搜尋、附近站牌、常用公車、設定等服務，並適應多裝置尺寸，個性化多種設定讓使用者能清楚地接收資訊。',
  },
  {
    href: '/case/lotsoScrum',
    title: '熊抱科技Scrum新手村',
    alt:"熊抱科技Scrum新手村",
    src: itemImg_05,
    item_01: '2022/11',
    item_02: '六角學院舉辦2022 F2e挑戰賽，內容是介紹 Scrum 工作法，UI 設計關卡內容與網頁互動效果，透過動畫與互動呈現知識點，讓新手挑戰者藉更了解 Scrum。',
  },
  {
    href: '/case/account',
    title: '數位存款帳戶線上開戶',
    alt:"數位存款帳戶線上開戶",
    src: itemImg_01,
    item_01: '2021/9-2021/10',
    item_02: '整體介面以簡潔、互動、動態呈現，優化數位線上開戶，訴求重新規劃流程及風格，提高互動性、親切，讓枯燥的開戶流程添加趣味性，提升整體鮮明的形象。',
  },
  {
    href: '/case/enterprise',
    title: '行動企業金融APP',
    alt:"行動企業金融APP",
    src: itemImg_02,
    item_01: '2021/5-2022/2',
    item_02: 'APP視覺風格翻新，企業金融核心功能重新規劃，以「快速切換」為操作模式，優化整體使用者操作流程，提升查詢效率，功能包含台外幣付款、帳務查詢、金融牌告、個人設定、客戶服務等等。',
  },
  {
    href: '/case/a11y',
    title: '個人金融友善服務',
    alt:"個人金融友善服務",
    src: itemImg_03,
    item_01: '2021/3-2021/5',
    item_02: '針對無障礙族群個人金融專區，提供存匯帳務、金融資訊等核心功能，整體設計以提高辨別度、可視性、操作易用性目標。',
  },
  {
    href: '/case/login',
    title: '行動App登入優化',
    alt:"行動App登入優化",
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
