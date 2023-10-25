<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'新光白洗衣店LINE@預約收送'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>新光白洗衣店LINE@預約收送</h1>
          <p>透過LINE@與Google sheet串接存取訂單，發送LINE Notify通知商家訂單，同時LINE@通知客人已收到預約訂單。</p>
          <img src="../../assets/img/laundry-banner.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2023/9</li>
          <li>範圍：開發預約收送通知功能</li>
          <li>狀態：已上線</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>合作商家：新白光洗衣店</li>
          <li>LINE@：<a target="_blank" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=978nvgpx" class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">立即加入LINE@</a></li>
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
            <li>機器人互動方案 <a target="_blank" href="/service/brand" class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300">前往了解</a></li>
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
