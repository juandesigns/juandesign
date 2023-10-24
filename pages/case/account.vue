<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'數位存款帳戶線上開戶'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>數位存款帳戶線上開戶</h1>
          <p>優化數位線上開戶，客戶認為整體太死板沒有數位化的感覺，訴求重新規劃流程及風格，新風格介面設計以簡潔、互動、動態呈現，提高互動性、親切印象。</p>
          <img src="../../assets/img/account-banner.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2021/9-2021/10</li>
          <li>介面設計：Sketch、Figma、AdobeXD</li>
          <li>切版網頁：HTML、CSS、JS</li>
          <li>成員：兩位前端工程師、一位UIUX、兩位PM</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>使用者需求訪談，釐清優化方向</li>
          <li>定義guideline</li>
          <li>製作Prototype模擬行為</li>
          <li>提供RWD切版及JS串流程</li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h2 class="color-title font-bold mb-8">一、規劃流程</h2>
          <p>規劃整理優化流程，與客戶溝通與說明會議</p>
          <img class="bg-white p-1 lg:p-8 rounded-2xl shadow-md" src="../../assets/img/account-img-uiux.png"/>
          <h2 class="color-title font-bold my-8">二、使用者調研</h2>
          <p>過數位問卷搜集數位帳戶張相關資料</p>
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
          <swiper-slide class="mb-10 bg-white lg:p-8 rounded-2xl shadow-sm object-cover">
            <img src="../../assets/img/account-img-01.png"/>
          </swiper-slide>
          <swiper-slide class="mb-10 bg-white lg:p-8 rounded-2xl shadow-sm object-cover">
            <img src="../../assets/img/account-img-02.png"/>
          </swiper-slide>
          <swiper-slide class="mb-10 bg-white lg:p-8 lg:pb-12 rounded-2xl shadow-sm object-cover">
            <img src="../../assets/img/account-img-03.png"/>
          </swiper-slide>
        </swiper-container>
        <div class="flex flex-col grid gap-y-6 mt-8">
          <p>數位帳戶使用者樣貌</p>
          <img class="lg:px-8" src="../../assets/img/account-img-04.png"/>

          <h2 class="color-title font-bold my-8">三、使用者痛點</h2>
          <div class=" lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">開戶前</h3>
              <li>不了解詳細優惠訊息</li>
              <li>不確定需準備什麼文件</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">開戶中</h3>
              <li>填寫資料欄位多，覺得很花時間</li>
              <li>網頁突然出現錯誤或意外跳出時，剛填好的資料被清空</li>
              <li>開戶時手邊不一定有證件</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">開戶後</h3>
              <li>不確定要等多久</li>
              <li>開完才知道有些功能如非約定轉帳還要跑臨櫃辦理</li>
              <li>轉帳時才發現有轉帳限額限制</li>
            </ul>
          </div>
          <h2 class="color-title font-bold my-8">四、整體解決策略</h2>
          <div class=" lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">開戶前</h3>
              <li>首頁優惠以數字方式顯示</li>
              <li>開戶入口以身分為頁籤切換</li>
              <li>優化開戶流程說明</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">開戶中</h3>
              <li>優化資料填寫欄位</li>
              <li>降低服務斷點流程</li>
              <li>優化手機畫面及操作</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="font-bold mb-4">開戶後</h3>
              <li>新增身分驗證說明</li>
              <li>透明化資訊傳達</li>
            </ul>
          </div>
          <h2 class="color-title font-bold mt-8">五、視覺風格設計</h2>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">圖文說明</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>原先僅以文字、表格說明，給使用者感受不到數位的變化</li>
                <li>以圖文搭配說明事項，不僅只是文字，搭配圖片後能讓開戶資訊更加鮮明化</li>
              </ul>
            </div>
            <img alt="圖文說明" class="mt-8 sm:mt-0" src="../../assets/img/account-img-05.png">
          </div>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">問候語</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>與用戶對話問候，提升體整互動、親切形象</li>
                <li>對話框中顯示問候語，以固定浮動方式顯示</li>
              </ul>
            </div>
            <img alt="問候語" class="mt-8 sm:mt-0" src="../../assets/img/account-img-06.png">
          </div>
          <div class="flex grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">多元顯示欄位</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>欄位問答採用親切、口語的文字為主，欄位跳脫一般開戶表單樣式，希望以活潑、有趣的欄位選項呈現。</li>
              </ul>
            </div>
            <img alt="多元顯示欄位" class="mt-8 sm:mt-0" src="../../assets/img/account-img-07.png">
          </div>
          <div class="flex grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">RWD自適應裝置</h3>
            </div>
            <img alt="RWD自適應裝置" src="../../assets/img/account-img-09.png">
          </div>
          <h2 class="color-title font-bold mt-8">六、UI操作畫面</h2>
          <div class="flex grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">Prototype</h3>
              <ul class="list-[square] pl-4 leading-8">
                <li>開戶欄位當前選項完成，即可往下滾動，若想往前修改，往上滾動即可修改</li>
                <li>整體以單頁式互動</li>
                <li>使用Adobe XD提供原型如下：</li>
              </ul>
            </div>
            <iframe class="sm:h-[640px] cursor-pointer" width="100%" height="320"
                    src="https://xd.adobe.com/embed/361b1586-b8f7-4e4e-a2e9-8e7ff4ae7cc0-6348/" frameborder="0"
                    allowfullscreen=""></iframe>
          </div>
          <div class="flex grid grid-cols-1 gap-x-6 gap-y-8">
            <div class="flex flex-col">
              <h3 class="font-bold my-8">Guideline</h3>
            </div>
            <img alt="Guideline" src="../../assets/img/account-img-08.png">
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
