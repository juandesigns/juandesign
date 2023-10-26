<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'臺瑞集運官網建置'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>臺瑞集運官網建置</h1>
          <p>官網包含常見問題、客戶好評、品牌優勢等資訊傳遞，透過不同運送及品項，提供對應試算運費功能，降低人力負載，提高經營效率，採用AWS雲服務及專屬域名，同時展示品牌專業形象。</p>
          <img src="../../assets/img/shipping-banner.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2023/10</li>
          <li>範圍：UI設計、前端頁面開發、試算功能、網站架設及自訂義網域</li>
          <li>狀態：已上線</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>合作商家：臺瑞集運</li>
          <li>臺瑞集運 | <a target="_blank" href="https://terryshipping.tw/" class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">terry.shipping.tw</a></li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class=" lg:pb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">採用服務</h3>
            <li>UIUX設計、含RWD動態網頁切版 <a target="_blank" href="/service/uiux" class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a></li>
            <li>前端功能開發 <a target="_blank" href="/service/develop" class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a></li>
            <li>網站架設及自訂義網域 <a target="_blank" href="/service/websetup" class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a></li>
          </ul>
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">相關技術</h3>
            <li>Figma(mockup、prototype)</li>
            <li>html、css、js、bootstrap</li>
            <li>AWS、Godaddy</li>
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
