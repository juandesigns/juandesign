<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'行動企業金融APP'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>行動企業金融APP</h1>
          <p>將既有APP視覺風格翻新，企業金融核心功能重新規劃，以「快速切換」為操作模式，優化整體使用者操作流程，提升查詢效率，功能包含台外幣付款、帳務查詢、金融牌告、個人設定、客戶服務等等。</p>
          <img src="../../assets/img/enterprise-banner.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2021/5-2022/2</li>
          <li>介面設計：Sketch</li>
          <li>視覺設計：Illustrator、Photoshop</li>
          <li>切版網頁：HTML、CSS</li>
          <li>成員：四位前端工程師、一位UIUX、兩位PM</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>視覺風格提案、使用者需求訪談</li>
          <li>定義guideline</li>
          <li>製作Mockup視覺稿</li>
          <li>切版轉換為HTML交付前端</li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h2 class="color-title font-bold mb-8">一、設計流程</h2>
          <p>規劃整理優化流程，與客戶溝通與說明會議</p>
          <img class="bg-white p-1 lg:p-8 rounded-2xl shadow-md" src="../../assets/img/enterprise-img-01.png"/>
          <h2 class="color-title font-bold my-8">二、UIUX設計策略</h2>
          <div class=" lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">UI 風格</h3>
              <li>採用Google material design質感設計</li>
              <li>整體以卡片式設計呈現</li>
              <li>運用陰影突顯層次間的關係</li>
              <li>扁平化(Flat Design)風格</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">UX 操作模式</h3>
              <li>透過訪談了解使用者訴求，簡化帳務、優化流程</li>
              <li>保留原先使用者慣性操作，減少使用者學習成本</li>
              <li>針對常用功能重新規劃提高易用性</li>
            </ul>
          </div>
          <p class="my-8">Guideline</p>
          <p class="mb-8">以品牌企業CIS色系為設計，定義顏色、文字統一規範，元件定義間距及使用情境，方便後續延伸畫面連貫定義，不造成混淆</p>
        </div>
        <swiper-container
            class="swiper-index"
            :loop="true"
            :pagination="true"
            :slides-per-view="1"
            :centered-slides="false"
            @progress="onProgress"
            @slidechange="onSlideChange"
        >
          <swiper-slide class="pb-10 object-cover">
            <img src="../../assets/img/enterprise-img-03.png"/>
          </swiper-slide>
          <swiper-slide class="pb-10 object-cover">
            <img src="../../assets/img/enterprise-img-04.png"/>
          </swiper-slide>
          <swiper-slide class="pb-10 object-cover">
            <img src="../../assets/img/enterprise-img-05.png"/>
          </swiper-slide>
          <swiper-slide class="pb-10 object-cover">
            <img src="../../assets/img/enterprise-img-06.png"/>
          </swiper-slide>
        </swiper-container>
        <div class="flex flex-col grid gap-y-6 mt-8">

          <h2 class="color-title font-bold my-8">三、功能設計說明</h2>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h3 class="font-bold mb-8">登入前後首頁</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>將功能分類出前後登入，不同情境分類出最常用區塊</li>
                <li>以扁平區塊呈現，用戶操作直覺</li>
                <li>即時確認待辦項目，通知不漏看</li>
              </ul>
            </div>
            <img alt="登入前後首頁" class="mt-8 sm:mt-0" src="../../assets/img/enterprise-img-07.png"/>
          </div>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">帳務查詢</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>帳務類型、金額以卡片式呈現</li>
                <li>明細、總計、列表獨立區分</li>
              </ul>
            </div>
            <img alt="帳務查詢" class="mt-8 sm:mt-0" src="../../assets/img/enterprise-img-08.png"/>
          </div>

          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">金融牌告</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>匯率類型以頁籤快速切換</li>
                <li>漲跌定義不同顏色，清楚辨別</li>
              </ul>
            </div>
            <img alt="金融牌告" class="mt-8 sm:mt-0" src="../../assets/img/enterprise-img-09.png"/>
          </div>

        </div>

      </div>
    </section>

    <TheContact/>
  </div>
</template>

<script setup>
import TheBanner from '../../components/TheBanner.vue'
import {register} from 'swiper/element/bundle';

register();

const spaceBetween = 20;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress)
};

const onSlideChange = (e) => {
  console.log('slide changed')
}
</script>

<style scoped>
</style>
