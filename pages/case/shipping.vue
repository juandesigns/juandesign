<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'臺瑞集運官方網站'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex-col grid gap-y-6 text-left lg:text-center">
          <h1>臺瑞集運官方網站</h1>
          <p>針對網站提升品牌形象與使用者體驗，整合常見問題、客戶好評與品牌優勢等功能，快速提供資訊，增進信任感。</p>
          <p>運費試算功能自動計算費用，減少人力成本，提升營運效率，為消費者帶來便捷。</p>
          <p>網站架設於AWS雲端，使用專屬域名，確保穩定與安全，展現品牌專業價值，是品牌與顧客的重要橋樑。</p>
          <img class="hidden md:block" alt="臺瑞集運" src="../../assets/img/shipping-banner.png"/>
          <img class="block md:hidden" alt="臺瑞集運" src="../../assets/img/img-case-08.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2024/10</li>
          <li>範圍：UI設計、前端頁面開發、試算功能、網站架設及自訂義網域</li>
          <li>狀態：已上線</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>合作商家：臺瑞集運</li>
          <li>網站類型：一頁式網站</li>
          <li>前往查看：<a target="_blank" href="https://terryshipping.tw/"
                            class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">terry.shipping.tw</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class=" lg:pb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-14">
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">採用服務</h3>
            <li>UIUX設計、含RWD動態網頁切版 <a target="_blank" href="/service/uiux"
                                              class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a>
            </li>
            <li>前端功能開發 <a target="_blank" href="/service/develop"
                                class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a>
            </li>
            <li>網站架設及自訂義網域 <a target="_blank" href="/service/websetup"
                                        class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a>
            </li>
          </ul>
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">相關技術</h3>
            <li>Figma(mockup、prototype)</li>
            <li>html、css、js、bootstrap</li>
            <li>AWS、Godaddy</li>
          </ul>
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">手機版</h3>
            <img class="shadow" src="../../assets/img/shipping-img-1.png"/>
          </ul>
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">電腦版</h3>
            <img class="shadow" src="../../assets/img/shipping-img-2.png"/>
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
