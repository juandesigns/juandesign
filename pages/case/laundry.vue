<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'新光白洗衣店LINE@預約訂單'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex-col grid gap-y-6 text-left lg:text-center">
          <h1>新光白洗衣店LINE@預約訂單</h1>
          <p>整合LINE@與Google Sheet，打造智慧化訂單管理系統，讓客戶感受到即時回應與貼心服務。</p>
          <p>當客戶下單後，系統自動將訂單資訊存入Google Sheet，確保資料即時更新與集中管理。</p>
          <p>透過LINE Notify功能，商家能即時接收訂單通知，有效減少漏單或延遲處理的風險，</p>
          <p>同時，系統自動向客戶發送LINE@通知，確認預約已成功登記。</p>
          <img class="hidden md:block" alt="新光白洗衣店" src="../../assets/img/laundry-banner.png"/>
          <img class="block md:hidden" alt="新光白洗衣店" src="../../assets/img/img-case-07.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2025/1</li>
          <li>範圍：開發預約收送通知功能</li>
          <li>狀態：已上線</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>合作商家：新白光洗衣店</li>
          <li>前往查看：<a target="_blank" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=978nvgpx"
                       class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">LINE@ 新白光洗衣店</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class=" lg:pb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">採用服務</h3>
            <li>品牌經營與推廣</li>
            <li>LINE @ 機器人服務</li>
            <li>機器人互動方案 <a target="_blank" href="/service/brand"
                                  class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a>
            </li>
          </ul>
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">相關技術</h3>
            <li>LINE@</li>
            <li>Google sheet</li>
            <li>Google Apps Script</li>
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
