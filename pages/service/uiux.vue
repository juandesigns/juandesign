<template>
  <main class="service-inner">
    <TheBanner :title="'服務項目'" :description="'UIUX設計及切版'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">

        <div class="flex flex-col">
          <h1>網頁動靜態切版、一頁式網站製作</h1>
          <p class="font-bold">服務報價(每頁)：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>一般靜態網頁切版：1500元</li>
            <li>一般動態網頁切版：1500元 ~ 5000元</li>
            <li>含 RWD 靜態網頁切版：2500元</li>
            <li>含 RWD 動態網頁切版：2500元 ~ 6000元</li>
          </ul>
          <p class="mt-8 font-bold">提供相關技術：</p>
          <ul class="list-disc pl-4 leading-8">
            <li>HTML、CSS、SCSS、SASS、tailwindcss</li>
            <li>Javascript、Bootstrap、Vue</li>
            <li>可配合使用版控</li>
          </ul>
          <p class="mt-4 color-title">
            備註：<br/>
            報價依動態複雜度而定，最終報價依報價單為主<br/>
            RWD自適應多裝置包含手機、平板、網頁
          </p>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>UIUX設計</h1>
          <p class="font-bold">服務報價：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>可配合不同階段製作(wireframe、mockup、prototype)</li>
            <li>可配合出不同風格提供案主選擇</li>
            <li>報價以工作時數 * 360元</li>
          </ul>
          <p class="mt-8 font-bold">提供相關技術：</p>
          <ul class="list-disc pl-4 leading-8">
            <li>Sketch、Figma、Zeplin</li>
          </ul>
          <p class="mt-4 color-title">
            備註：<br/>
            請聯絡討論設計需求，後續提供報價及工作時數
          </p>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>單一細項製作</h1>
          <p class="font-bold">服務報價：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>跑版修正、進行icon、製作banner等等</li>
            <li>報價以工作時數 * 360元</li>
          </ul>
          <p class="mt-4 color-title">
            備註：<br/>
            請聯絡討論設計需求，後續提供報價及工作時數
          </p>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>保固說明</h1>
          <ul class="list-[square] pl-4 leading-8">
            <li>交付案件可進行配合3次小調整，儘量滿足業主需求！</li>
            <li>若大方向調整需額外報價</li>
            <li>若為急件加價，可依上述報價 * 1.5</li>
          </ul>
        </div>
      </div>
    </section>
    <TheContact/>
  </main>
</template>

<script setup>
import TheBanner from '../../components/TheBanner.vue'
</script>

<style scoped>

</style>
