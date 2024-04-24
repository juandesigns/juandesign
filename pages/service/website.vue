<template>
  <div class="service-inner">
    <TheBanner :title="'服務項目'" :description="'網站建置'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">

        <div class="flex flex-col">
          <h1>品牌形象網站、一頁式網站</h1>
          <h3 class="font-bold">可依照自己需要服務，進行選擇：</h3>
          <ul class="list-[square] pl-4 leading-8">
            <li>網頁設計、或者已有設計稿需要切版，請參照
              <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                 href="/service/uiux">UIUX設計服務</a>
            </li>
            <li>頁面有開發功能需求，請參照 <a
                class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                href="/service/develop">軟體開發服務</a>
            </li>
            <li>網站需要架設及專屬域名，請參照 <a
                class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                href="/service/websetup">網站架設及域名服務</a>
            </li>
            <li>需要Fb交談按鈕 或 Line@機器人建置，請參照 <a
                class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                href="/service/brand">品牌經營與推廣服務</a>
            </li>
          </ul>
          <h3 class="mt-8 font-bold">網設設計需要自行提供什麼呢？</h3>
          <ul class="list-[square] pl-4 leading-8">
            <li>企業LOGO，會依照企業色系進行配色</li>
            <li>期望設計的風格，提供參考風格或網站，加速UI設計</li>
            <li>頁面所需呈現文案與內容</li>
          </ul>
          <h3 class="mt-8 font-bold">我想詢問報價需要提供什麼呢？</h3>
          <ul class="list-[square] pl-4 leading-8">
            <li>需要採用哪些服務？(網頁設計/功能開發/網域/fb交談按鈕/line@)</li>
            <li>若有網頁開發功能，請詳細說明需求</li>
            <li>若有網站架設及域名需求 ，請選擇「客製化域名」或「免費域名」</li>
            <li>開發或設計是否有指定技術或工具？</li>
            <li>期望開發時程及交付日為何？</li>
          </ul>

          <p class="mt-4 color-title">
            準備好報價資料後，請直接聯絡我們！<br/>
            會依照需要服務，提供對應報價及所需工作天
          </p>
          <MyNuxtLink class="h4" to="/contact">
            <UButton class="btn-primary h2" label="聯絡我們" :ui="{ rounded: 'rounded-full' }"/>
          </MyNuxtLink>
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
