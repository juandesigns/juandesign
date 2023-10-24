<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'個人金融友善服務'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>個人金融友善服務</h1>
          <p>針對無障礙族群個人金融專區，提供存匯帳務、金融資訊等核心功能，整體設計以提高辨別度、可視性、操作易用性目標，並且色彩對比度、字級規範符合無障礙標準，HTML標籤運用及架構順序符合視障報讀順序。</p>
          <img src="../../assets/img/a11y-banner.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2021/3-2021/5</li>
          <li>介面設計：Sketch</li>
          <li>切版網頁：HTML、CSS</li>
          <li>成員：兩位前端工程師、一位UIUX、一位PM</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>使用者需求訪談</li>
          <li>定義guideline</li>
          <li>製作Mockup視覺稿</li>
          <li>切版轉換為HTML交付前端</li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <h2 class="color-title font-bold my-8">整體色調</h2>
        <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>主色沿用相同色碼</li>
              <li>次要色符合無障礙對比分數</li>
              <li>調整符合無障礙「AA」及「AAA 」</li>
            </ul>
          </div>
          <img alt="整體色調" class="mt-8 sm:mt-0" src="../../assets/img/a11y-img-01.png"/>
        </div>
        <h2 class="color-title font-bold my-8">整體字級</h2>
        <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>標體文字：20-24字級</li>
              <li>內文文字：16字級、行高24</li>
              <li>表單文字：16-18字級</li>
              <li>表格文字：14-16字級</li>
              <li>按鈕文字：18-20字級</li>
            </ul>
          </div>
          <img alt="整體字級" class="mt-8 sm:mt-0" src="../../assets/img/a11y-img-02.png"/>
        </div>
        <h2 class="color-title font-bold my-8">功能導覽及登入頁</h2>
        <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>新增圖示加強辨別</li>
              <li>字級加大，增加可視性</li>
              <li>按鈕高度增高，更容易點擊</li>
            </ul>
          </div>
          <img alt="功能導覽及登入頁" class="mt-8 sm:mt-0 lg:grid-cols-2" src="../../assets/img/a11y-img-03.png"/>
        </div>
        <h2 class="color-title font-bold my-8">台幣轉帳</h2>
        <div class="flex  grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>「＄」無法報讀，台幣顯示TWD</li>
              <li>資訊以表格呈現，橫向報讀，讓使用者清楚了解</li>
            </ul>
          </div>
          <img alt="台幣轉帳" class="mt-8 sm:mt-0 lg:grid-cols-2" src="../../assets/img/a11y-img-04.png"/>
        </div>
        <h2 class="color-title font-bold my-8">交易明細查詢</h2>
        <div class="flex  grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>不使用正負號呈現資訊，報讀辨識不友善，建議明確資訊如「支出」、「存入」</li>
            </ul>
          </div>
          <img alt="交易明細查詢" class="mt-8 sm:mt-0 lg:grid-cols-2" src="../../assets/img/a11y-img-05.png"/>
        </div>
        <h2 class="color-title font-bold my-8">利匯率查詢</h2>
        <div class="flex  grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>橫向報讀無法對應欄位「買匯、賣匯」，建議單一匯率顯示</li>
              <li>日期顯示格式：yyyy年mm月dd日 HH時ii分ss秒，讓語音報讀傳達明確資訊</li>
            </ul>
          </div>
          <img alt="交易明細查詢" class="mt-8 sm:mt-0 lg:grid-cols-2" src="../../assets/img/a11y-img-06.png"/>
        </div>

      </div>
    </section>

    <TheContact/>
  </div>
</template>

<script setup>
import TheBanner from '../../components/TheBanner.vue'
</script>

<style scoped>
</style>
