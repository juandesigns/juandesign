<template>
  <div class="service-inner">
    <TheBanner :title="'服務項目'" :description="'品牌經營與推廣'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">

        <div class="flex flex-col">
          <h1>LINE @ 機器人服務</h1>
          <h3 class="font-bold">圖文選單方案 $3600</h3>
          <ul class="list-[square] pl-4 leading-8">
            <li>圖文選單功能：提供四格選單設定，含四張選單圖片製作，點選可指定回覆圖文訊息、開啟指定連結頁面</li>
            <li>推播功能：可推送指定用戶專屬訊息！</li>
            <li>工作天：預計 2 天</li>
            <li>保固：後續線上教學服務7天</li>
          </ul>
          <h3 class="mt-8 font-bold">機器人互動方案 $5000</h3>
          <ul class="list-[square] pl-4 leading-8">
            <li>含方案一 + <span class="color-title font-bold">互動文字指令：透過文字指令回應固定圖文訊息</span> (需自行提供搭配主機服務)</li>
            <li>工作天：預計 3 天</li>
            <li>保固：後續線上教學服務7天</li>
          </ul>
          <h3 class="mt-8 font-bold">客製自訂功能＋後台管理系統 $20000</h3>
          <ul class="list-[square] pl-4 leading-8">
            <li>含方案一＋方案二</li>
            <li>JAVA串LINE API開發功能，範例：註冊功能、管理物品狀態(送達/未送達/退回)、最新消息、佈告欄等等</li>
            <li>提供後台系統(含RWD)進行管理，含UI客製化設計 (需自行提供搭配主機服務)</li>
            <li>工作天：預計 14 天</li>
            <li>保固：後續線上教學服務7天</li>
          </ul>
          <p class="mt-8 font-bold color-title">若需要可加購：</p>
          <ul class="list-[square] pl-4 leading-8 color-title">
            <li>代管主機服務，每月固定$800代管費 + 實際使用流量費用 / 月(會出示帳單)</li>
          </ul>
          <p class="mt-4 color-title">
            備註：<br/>
            報價依動態複雜度而定，最終報價依報價單為主<br/>
            RWD自適應多裝置包含手機、平板、網頁
          </p>
        </div>
<!--        <hr class="my-10"/>-->
<!--        <div class="flex flex-col">-->
<!--          <h1>FB Messenger 交談按鈕外掛</h1>-->
<!--          <div class="flex grid grid-cols-1 lg:grid-cols-2">-->
<!--            <div class="flex flex-col">-->
<!--              <h3 class="font-bold">單一功能 $3000</h3>-->
<!--              <ul class="list-[square] pl-4 leading-8">-->
<!--                <li>可在網頁中顯示出可以直接與粉絲專頁對話</li>-->
<!--                <li>需提供粉絲專頁帳號、正式網域進行設定</li>-->
<!--                <li>可提供客製化調整模板</li>-->
<!--                <li>工作天：預計 3 天</li>-->
<!--                <li>保固：後續線上教學服務2天</li>-->
<!--              </ul>-->
<!--              <p class="mt-8 font-bold">優點：</p>-->
<!--              <ul class="list-disc pl-4 leading-8">-->
<!--                <li>讓訪客直接與粉絲專頁直接聯絡</li>-->
<!--                <li>增加訪客互動與訪客留存率</li>-->
<!--                <li>提高下次再行銷的機會</li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <img alt="FB Messenger交談按鈕" class="mt-8 sm:mt-0 max-w-xs" src="../../assets/img/img_fb_btn.png">-->
<!--          </div>-->

<!--        </div>-->
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
