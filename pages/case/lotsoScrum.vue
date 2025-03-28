<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'熊抱科技Scrum新手村'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex-col grid gap-y-6 text-left lg:text-center">
          <h1>熊抱科技Scrum新手村 Lotso</h1>
          <p>沉浸式體驗Scrum工作法為核心，透過互動式UI設計與動態動畫，全面介紹Scrum的關鍵知識與實際應用。</p>
          <p>結合玻璃擬態與新擬物化設計，打造層次分明且具未來感的視覺介面。</p>
          <p>透過區塊拖移與動畫模擬專案流程，在互動中掌握敏捷開發的核心要素。</p>
        </div>
        <swiper-container
            class="swiper-index"
            :loop="true"
            :pagination="true"
            :slides-per-view="1"
            :centered-slides="false"
            @progress="onProgress"
        >
          <swiper-slide class="mb-10 object-cover">
            <img class="hidden md:block" src="../../assets/img/lotsoscrum-banner-01.jpg"/>
            <img class="block md:hidden" src="../../assets/img/img-case-05.png"/>
          </swiper-slide>
          <swiper-slide class="mb-10 object-cover">
            <img class="hidden md:block" src="../../assets/img/lotsoscrum-banner-02.png"/>
            <img class="block md:hidden" src="../../assets/img/lotsoscrum-banner-02-m.png"/>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:py-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>舉辦單位：六角學院</li>
          <li>時程：2022/11</li>
          <li>相關技術：Figma、HTML、CSS、Vue</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>The F2E：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://2022.thef2e.com/users/12061549261451831484/">團體組｜熊抱家族Lotso</a>
          </li>
          <li>Figma：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://www.figma.com/file/cz74ywxLiqz1KCJPO43mQh/2022F2e-%E7%86%8A%E6%8A%B1Scrum?node-id=2%3A20&t=ipQqqHEg8N7VcSw0-1">網頁設計</a>、
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://www.figma.com/proto/cz74ywxLiqz1KCJPO43mQh/2022F2e-%E7%86%8A%E6%8A%B1Scrum?page-id=1%3A6&node-id=2%3A20&starting-point-node-id=2%3A20&scaling=scale-down&show-proto-sidebar=1">Prototype操作</a>
          </li>
          <li>前往查看：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://ya850805.github.io/lotso-scrum/#/">熊抱科技Scrum新手村</a>
          </li>
        </ul>
      </div>
    </section>
    <section class=" inner-block flex justify-center">
      <div class="container">
        <div class="flex-col grid gap-y-6">
          <h2 class="color-title font-bold mb-8">使用者情境模擬</h2>
          <div class="items-start grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8">
              <h4 class="font-bold">使用者 A：需要了解 Scrum，以便加入團隊開發的新員工</h4>
              <ul class="list-[square] pl-4 leading-8">
                <li>情境：新加入的員工，必須快速地對 Scrum 流程有基本認識，建立團隊之間的共通語言。</li>
                <li>遇到問題：教育訓練資料還不齊全，且資深員工手邊也還有事情需要處理，無法馬上給予足夠的資源了解。</li>
                <li>解決方案：提供給他 THE F2E 上的 Scrum 新手村，讓他快速的對 Scrum 流程有初步的體驗與了解。</li>
              </ul>
            </div>
            <div class="grid grid-cols-1 gap-x-6 gap-y-8">
              <h4 class="font-bold">使用者 B：沒有聽過 Scrum，想快速上手知識點的任何人</h4>
              <ul class="list-[square] pl-4 leading-8">
                <li>情境：偶然聽到或是看到 Scrum 這個詞，想了解流程與基本概念。</li>
                <li>遇到問題：資料太多不知道從何看起，文字說明比較生硬難讀。</li>
                <li>解決方案：提供給他 THE F2E 上的 Scrum 新手村，透過拖拉式互動，對每個階段的流程更有感受度。</li>
              </ul>
            </div>
          </div>
          <div class="items-start grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8">
              <h2 class="color-title font-bold my-8">使用者故事 User story</h2>
              <ul class="list-[square] pl-4 leading-8">
                <li>我可以從網頁上了解 Scrum 包含的角色以及負責的事項</li>
                <li>我可以從網頁上了解 Sprint 流程</li>
              </ul>
            </div>
            <div class="grid grid-cols-1 gap-x-6 gap-y-8">
              <h2 class="color-title font-bold my-8">Scrum 新手村 關卡資訊</h2>
              <div class="grid grid-cols-1 gap-x-6 gap-y-8">
                <ul class="list-decimal pl-6 leading-8">
                  <li>角色介紹（PO、SM、開發）</li>
                  <li>產品待辦清單（Product Backlog）
                    <ul class="list-[square] pl-5 leading-8">
                      <li>需加入 Jira 介紹、LOGO</li>
                    </ul>
                  </li>
                  <li>Sprint Planning</li>
                  <li>短衝清單</li>
                  <li>Sprint Point</li>
                  <li>Sprint 流程
                    <ul class="list-[square] pl-5 leading-8">
                      <li>Daily</li>
                      <li>Review（適合使用 Confluence）</li>
                      <li>Retro（適合使用 Confluence）</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="color-title font-bold my-8">設計準則 Guideline</h2>
          <p>頁面設計採用玻璃擬態（Glassmorphism）與新擬物化（Neumorphism）雙重風格，透過細膩的層次區分與質感表現，突破傳統扁平設計的限制，營造出深度與立體感兼具的未來感視覺體驗。此外，搭配漸層配色與流行的UI設計，進一步提升畫面的動態層次與視覺衝擊，展現出極具潮流感的設計風格，使每次互動都更具沉浸感與吸引力。</p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <img alt="Guideline" class="mt-8 bg-white rounded-xl shadow" src="../../assets/img/lotsoscrum-img-01.png"/>
            <div class="flex flex-col">
              <h2 class="color-title font-bold my-8">LOGO</h2>
              <img alt="LOGO" class="mb-8" src="../../assets/img/lotsoscrum-img-02.png"/>
            </div>
          </div>
          <h2 class="color-title font-bold my-8 hidden md:block">Prototype</h2>
          <p class="hidden md:block">使用Figma製作原型，能夠模擬實際操作情形，可以點擊操作喔！</p>
          <div class="hidden md:block">
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fcz74ywxLiqz1KCJPO43mQh%2F2022F2e-%25E7%2586%258A%25E6%258A%25B1Scrum%3Ftype%3Ddesign%26node-id%3D2-20%26t%3D9V2oO4b2hR6dvuir-1%26scaling%3Dscale-down%26page-id%3D1%253A6%26starting-point-node-id%3D2%253A20%26mode%3Ddesign"
                    allowfullscreen></iframe>
          </div>

          <h2 class="color-title font-bold my-8">設計展示 Mockup</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">首頁</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-03.png"/>
              <p>挑戰Srcrum新手任務!</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">產品負責人 Product Owner</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-04.png"/>
              <p>介紹產品負責人</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">待辦清單優先排序</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-05.png"/>
              <p>透過新手使用者情境，提供新增待辦任務、給予對應點數、結合開啟對應Jira功能，讓使用者能更深入了解</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">敏捷教練 Scrum Master</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-06.png"/>
              <p>介紹「短衝規劃會議 (Sprint Planning)、點數(Sprint Point)</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">短衝待辦清單</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-07.png"/>
              <p>將任務排到短衝待辦清單，模擬專案管理的真實情境</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">認識會議時程</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-08.png"/>
              <p>每日站立會議(Daily Scrum)、短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)，搭配日曆動畫說明時程，能夠讓新手更了解各會議時程！</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">Sprint流程記憶大考驗</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-09.png"/>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">Retro正面表述小測驗</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-10.png"/>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold">挑戰成功</h3></li>
              <img class="my-4" src="../../assets/img/lotsoscrum-img-11.png"/>
            </ul>

          </div>

        </div>
      </div>
    </section>

    <TheContact/>
  </div>
</template>

<script setup>
import TheBanner from '../../components/TheBanner.vue'
import {register} from 'swiper/element/bundle';

register();

const spaceBetween = 20;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
};

</script>

<style scoped>
</style>
