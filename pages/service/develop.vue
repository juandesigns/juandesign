<template>
  <div class="service-inner">
    <TheBanner :title="'服務項目'" :description="'軟體開發'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">

        <div class="flex flex-col">
          <h1>前端/後端開發</h1>
          <p class="font-bold">服務報價：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>提供全端技術，包含前後端開發</li>
            <li>程式維護與程式開發</li>
            <li>注重品質以容易維護、擴充，耦合性低的架構開發</li>
            <li>依賴注入管理</li>
            <li>配合案主版本管理</li>
            <li>可提供串指定其他第三方library</li>
            <li>報價以工作時數 * 700元</li>
          </ul>
          <p class="mt-8 font-bold">提供相關技術：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>Backend：Java、Spring、Spring Boot、Spring MVC</li>
            <li>Frontend：JavaScript、JQuery、ajax、VueJS</li>
          </ul>
          <p class="mt-4 color-title">
            備註：<br/>
            請聯絡討論開發需求，後續提供報價及工作時數
          </p>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>單ㄧ項目開發</h1>
          <p class="font-bold">服務報價：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>爬蟲程式、長期維護、單功能開發等等</li>
            <li>報價以工作時數 * 700元</li>
          </ul>
          <p class="mt-4 color-title">
            備註：<br/>
            請聯絡討論開發需求，後續提供報價及工作時數
          </p>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>保固說明</h1>
          <ul class="list-[square] pl-4 leading-8">
            <li>交付案件時會進行驗收測試，若有問題會完成修正</li>
            <li>完整交後原範圍內有7天保固時間</li>
            <li>若為急件加價，可依上述報價 * 1.5</li>
          </ul>
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
