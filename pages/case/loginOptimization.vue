<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'行動登入啟動優化APP'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>行動登入啟動優化APP</h1>
          <p>使用者情境為行動銀行更新資訊時，若用戶遇到更新時間較長時，容易出現焦躁情緒，需提供轉移用戶注意力來解決等待的焦慮。</p>
          <img src="../../assets/img/login-banner.png"/>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:py-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>時程：2021/2-2021/3</li>
          <li>介面設計：Sketch、Adobe XD</li>
          <li>切版網頁：HTML、CSS</li>
          <li>成員：一位前端工程師、一位UIUX、一位PM</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>使用者需求訪談，釐清優化方向</li>
          <li>提供多種版本方案</li>
          <li>製作Prototype模擬情境</li>
          <li>提供切版及CSS animations製作動態</li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class=" lg:pb-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">痛點分析</h3>
            <li>行動銀行更新時，當網路不良、更新資訊過多時，造成等待時間過長</li>
            <li>使用者情緒出現焦躁、不安、擔心</li>
          </ul>
          <ul class="list-[square] pl-4 leading-8">
            <h3 class="font-bold mb-4">優化方向</h3>
            <li>當更新過長時，提供轉移注意力動畫</li>
            <li>注意力轉移舒緩等待的焦慮</li>
          </ul>
        </div>
        <h2 class="color-title font-bold my-8">理財族群版本</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>針對的族群來推出不同的理財資訊，更能貼近用戶情境</li>
              <li>整體以專業、高質感風格呈現，轉場柔和輕鬆</li>
            </ul>
          </div>
          <iframe width="320" height="700" src="https://xd.adobe.com/embed/ee0028b4-29c0-42c8-858d-9d3557922f8a-bb53/"
                  frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">青年創業，挺你自己當頭家</h3>
              <li>愛用數位帳戶的年輕族群</li>
              <li>說明：現在很多產業的改變，讓更多的年輕人開始創業，每年都有逐漸增加的趨勢，在用戶等待的同時，強化陪伴與相挺的重要性。</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">財產安心，用心守護您的財產</h3>
              <li>不可或缺的家人和家庭</li>
              <li>說明：守護財富讓用戶安心就是銀行最大的使命。</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-6">
            <img alt="青年創業" class="mt-8 sm:mt-0" src="../../assets/img/login-img-01.png"/>
            <img alt="財產安心" class="mt-8 sm:mt-0" src="../../assets/img/login-img-02.png"/>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">奔向高利，外幣高利活存</h3>
              <li>數位APP購買外幣的族群</li>
              <li>說明：針對現今習慣使用數位APP購買外幣的族群，強調提供多元高利率的產品</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">數位帳戶隨手開戶超快速</h3>
              <li>使用數位帳戶的族群</li>
              <li>說明：數位用戶數量逐年在增加，展現重視數位化的趨勢，推廣快速開戶便利服務</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-6">
            <img alt="奔向高利" class="mt-8 sm:mt-0" src="../../assets/img/login-img-03.png"/>
            <img alt="數位帳戶隨手開戶超快速" class="mt-8 sm:mt-0" src="../../assets/img/login-img-04.png"/>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">創造財富，永續經營</h3>
              <li>綜合以上的方向是永續</li>
              <li>說明：不論是各個族群想要創造財富的同時，能持續的陪伴才是最重要的</li>
            </ul>
          </div>
          <div class="grid grid-cols-1 gap-x-6 gap-y-6">
            <img alt="創造財富，永續經營" class="w-1/2 mt-8 sm:mt-0" src="../../assets/img/login-img-05.png"/>
          </div>
        </div>
        <h2 class="color-title font-bold my-8">社會責任版本</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <li>以針對不同社會責任，努力推廣不同領域，呈現多元樣貌</li>
              <li>整體以畫報、插畫風格，轉場以翻轉立體呈現</li>
            </ul>
          </div>
          <iframe width="320" height="700" src="https://xd.adobe.com/embed/26a45271-a9eb-4c06-b985-f08d4d98e3cf-73f7/"
                  frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">樂活安養</h3>
              <li>多元樂活安養金融產品</li>
              <li>說明：針對銀髮退休族推廣安養金融產品，給予適當理財協助，讓銀髮族安心生活</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">公司治理評鑑</h3>
              <li>入選英國FTSE4</li>
              <li>說明：提供完整治理及金融指數，建置安心穩健金融體系</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-6">
            <img alt="樂活安養" class="mt-8 sm:mt-0" src="../../assets/img/login-img-06.png"/>
            <img alt="公司治理評鑑" class="mt-8 sm:mt-0" src="../../assets/img/login-img-07.png"/>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">扶植球隊</h3>
              <li>羽球、桌球、棒球球隊</li>
              <li>說明：推廣運動產業給予支持與幫助，能在國際國內賽事當中，培訓與比賽能擁有更好的環境</li>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">永續金融</h3>
              <li>發行綠色債券10億元</li>
              <li>說明：將用於綠色投資計畫或其相關放款的融資工具，其投資計畫之範圍包括氣候、環保、節能、減碳等。</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-6">
            <img alt="扶植球隊" class="mt-8 sm:mt-0" src="../../assets/img/login-img-08.png"/>
            <img alt="永續金融" class="mt-8 sm:mt-0" src="../../assets/img/login-img-09.png"/>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8">
          <div class="flex flex-col">
            <ul class="list-[square] pl-4 leading-8">
              <h3 class="color-title font-bold my-8">創減少碳排放量</h3>
              <li>減少碳約1.32個大安森林公園</li>
              <li>說明：致力於節能環保，關心人類共同議題，對於社會責任的義務義不容辭</li>
            </ul>
          </div>
          <div class="grid grid-cols-1 gap-x-6 gap-y-6">
            <img alt="減少碳排放量" class="w-1/2 mt-8 sm:mt-0" src="../../assets/img/login-img-10.png"/>
          </div>
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
