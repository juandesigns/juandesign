<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'熊抱科技Scrum新手村'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>熊抱科技Scrum新手村 Lotso</h1>
          <p>
            六角學院舉辦2022 F2e挑戰賽，Scrum為第三關主題，內容是介紹 Scrum 工作法的知識點，UI 設計關卡內容與網頁互動效果，透過動畫與互動呈現知識點，讓新手挑戰者藉更了解 Scrum。</p>
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
            <img src="../../assets/img/lotsoscrum-banner-01.png"/>
          </swiper-slide>
          <swiper-slide class="mb-10 object-cover">
            <img src="../../assets/img/lotsoscrum-banner-02.png"/>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>舉辦單位：六角學院</li>
          <li>時程：2022/11</li>
          <li>團體名稱：熊抱家族</li>
          <li>成員：一位工程師、一位UIUX</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>Github：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://ya850805.github.io/lotso-scrum/#/">線上觀看前端</a>
          </li>
          <li>介面設計：Figma
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://www.figma.com/file/cz74ywxLiqz1KCJPO43mQh/2022F2e-%E7%86%8A%E6%8A%B1Scrum?node-id=2%3A20&t=ipQqqHEg8N7VcSw0-1">線上UI設計稿</a>、
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://www.figma.com/proto/cz74ywxLiqz1KCJPO43mQh/2022F2e-%E7%86%8A%E6%8A%B1Scrum?page-id=1%3A6&node-id=2%3A20&starting-point-node-id=2%3A20&scaling=scale-down&show-proto-sidebar=1">Prototype操作</a>
          </li>
          <li>使用技術：HTML、CSS、Vue</li>
        </ul>
      </div>
    </section>
    <section class=" inner-block flex justify-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h2 class="color-title font-bold mb-8">使用情境模擬</h2>
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
          <h2 class="color-title font-bold my-8">User story (使用者故事)</h2>
          <ul class="list-[square] pl-4 leading-8">
            <li>我可以從網頁上了解 Scrum 包含的角色以及負責的事項</li>
            <li>我可以從網頁上了解 Sprint 流程</li>
          </ul>
          <h2 class="color-title font-bold my-8">Scrum 新手村 關卡資訊</h2>
          <div class="grid grid-cols-1 gap-x-6 gap-y-8">
            <h4 class="font-bold">關卡需包含以下知識點：</h4>
            <ul class="list-decimal pl-4 leading-8">
              <li>角色介紹（PO、SM、開發）</li>
              <li>產品待辦清單（Product Backlog）
                <ul class="list-[square] pl-4 leading-8">
                  <li>需加入 Jira 介紹、LOGO</li>
                </ul>
              </li>
              <li>Sprint Planning</li>
              <li>短衝清單</li>
              <li>Sprint Point</li>
              <li>Sprint 流程
                <ul class="list-[square] pl-4 leading-8">
                  <li>Daily</li>
                  <li>Review（適合使用 Confluence）</li>
                  <li>Retro（適合使用 Confluence）</li>
                </ul>
              </li>
            </ul>
          </div>

          <h2 class="color-title font-bold my-8">Guideline</h2>
          <p>採用玻璃擬態、新擬物化設計結合區塊拖移， 讓介面突破扁平設計更有層次！</p>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <img alt="Guideline" class="mt-8 bg-white rounded-xl shadow" src="../../assets/img/lotsoscrum-img-01.png"/>
            <div class="flex flex-col">
              <h2 class="color-title font-bold my-8">LOGO</h2>
              <img alt="LOGO" class="mb-8" src="../../assets/img/lotsoscrum-img-02.png"/>
            </div>
          </div>
          <h2 class="color-title font-bold my-8">Prototype</h2>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li>使用Figma製作原型，能夠模擬實際操作情形，可以點擊操作喔！</li>
            </ul>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fcz74ywxLiqz1KCJPO43mQh%2F2022F2e-%25E7%2586%258A%25E6%258A%25B1Scrum%3Ftype%3Ddesign%26node-id%3D2-20%26t%3D9V2oO4b2hR6dvuir-1%26scaling%3Dscale-down%26page-id%3D1%253A6%26starting-point-node-id%3D2%253A20%26mode%3Ddesign" allowfullscreen></iframe>
          </div>
          <h2 class="color-title font-bold my-8">Mockup</h2>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「首頁」</span>挑戰Srcrum新手任務！</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-03.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「產品負責人（Product Owner）」</span>介紹頁</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-04.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「待辦清單優先排序」</span>透過新手使用者情境，提供新增待辦任務、給予對應點數、結合開啟對應Jira功能，讓使用者能更深入了解</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-05.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「Scrum Master 」</span>介紹頁</li>
              <li><span class="font-bold">「短衝規劃會議 (Sprint Planning)、點數(Sprint Point)」</span>說明知識點</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-06.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「短衝待辦清單」</span>任務排到短衝待辦清單吧！</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-07.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「每日站立會議(Daily Scrum)、短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)」</span>說明，會議時程搭配日曆動畫說明時程，能夠讓新手更了解各會議時間點！</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-08.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「Sprint流程記憶大考驗」</span>拖曳挑戰！</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-09.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「Retro」</span>正面表述小測驗</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-10.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「挑戰成功」</span>結果頁！</li>
            </ul>
          </div>
          <img src="../../assets/img/lotsoscrum-img-11.png"/>


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
