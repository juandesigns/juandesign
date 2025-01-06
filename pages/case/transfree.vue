<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'全台公車動態時刻查詢應用服務'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex-col grid gap-y-6 text-left lg:text-center">
          <h1>全台公車動態時刻查詢應用服務 TransFree</h1>
          <p>TransFree是一款專為全台公車服務打造的應用程式，旨在讓每位使用者都能輕鬆暢遊。<br/>無論是一般族群、外國旅客或長青族，TransFree皆提供友善且易於使用的介面。
          </p>
          <p>主要功能包含公車路線搜尋、附近站牌查詢、常用公車管理與個人化設定，滿足不同需求。<br/>系統能自適應各種裝置尺寸，確保資訊清楚呈現，提升使用體驗。
          </p>
          <p>希望透過便捷的公車資訊服務，讓每個人都能享受更自由的移動方式，打造無障礙、貼心的數位旅程助手。</p>
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
            <img class="hidden md:block" src="../../assets/img/transfree-banner-01.png"/>
            <img class="block md:hidden" src="../../assets/img/img-case-06.png"/>
          </swiper-slide>
          <swiper-slide class="mb-10 object-cover">
            <img class="hidden md:block" src="../../assets/img/transfree-banner-02.png"/>
            <img class="block md:hidden" src="../../assets/img/transfree-banner-02-m.png"/>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>舉辦單位：六角學院、交通部聯合</li>
          <li>時程：2021/11</li>
          <li>使用技術：Figma、Zeplin、HTML、CSS、Vue</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>The F2E：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://2021.thef2e.com/users/6296427084285739902/">團體組｜TransFree</a>
          </li>
          <li>Figma：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://www.figma.com/file/RUxcSUqcSV7R3mQCXsaXBz/F2E-transfree_Mockup?node-id=0%3A1">網頁設計</a>
          </li>
          <li>前往查看：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://begoniasuccess.github.io/transfree/index#/search-bus">TransFree</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="inner-block flex justify-center">
      <div class="container">
        <div class="flex-col grid gap-y-6">
          <h2 class="color-title font-bold mb-8">使用者體驗 User Experience</h2>
          <p>
            TransFree是一款專為全台公車服務設計的應用程式，致力於提供每位使用者流暢便捷的乘車體驗。為了精準掌握使用者需求與特質，團隊透過討論、訪談及實際搭乘台北市公車觀察，深入描繪使用者樣貌。</p>
          <p>
            針對不同年齡層、國籍及無障礙需求的使用者，設計出友善且彈性的介面設定。主要功能包括公車路線搜尋、附近站牌查詢、常用公車管理以及多元個人化設定。系統具備自適應能力，能完美適配各種裝置尺寸，確保資訊清晰易讀。</p>
          <p>
            特別著重於無障礙設計、多語系支援及字體大小調整，確保資訊能完整傳達，讓不同族群都能順暢使用。此外，團隊深入分析同類型競品，並透過卡片分類法精煉與強化核心功能。</p>

          <img src="../../assets/img/transfree-img-01.png"/>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h2 class="color-title font-bold my-8">API 資源分配</h2>
              <p>
                在確認需求功能後，為確保開發流程順利進行，應先對現有資源進行初步評估與妥善分配。全面掌握可用的系統、平台及硬體資源，並選擇最優解決方案，以提升整體開發效率與成果。</p>
            </div>
            <img alt="API(資源分配)" class="mt-8 sm:mt-0" src="../../assets/img/transfree-img-02.png"/>
          </div>

          <h2 class="color-title font-bold my-8">網站線框圖 Wireframe</h2>
          <p>
            經過前期規劃與執行，我們高效整合零散概念與資訊，逐步勾勒產品雛形、功能與流程。整體設計採用卡片式與一頁式呈現，強調使用者能迅速查找並獲取所需資訊，提升操作體驗與效率。</p>
          <img src="../../assets/img/transfree-img-03.png"/>

          <h2 class="color-title font-bold my-8">設計準則 Guideline</h2>
          <p>
            網站整體配色以明亮風格為核心，旨在營造舒適且無壓的查詢環境，降低使用者在尋找資訊時的焦慮感。我們精選高辨識度色系，確保不同公車狀態與文字資訊均能清晰呈現。透過適當的字體大小與色彩區分，使關鍵資訊一目了然，即使在視覺負擔較高的場景下，依然能確保流暢且直觀的操作體驗。</p>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <img alt="API(資源分配)" class="mt-8 sm:mt-0" src="../../assets/img/transfree-img-04.png"/>
            <div class="flex flex-col">
              <h2 class="color-title font-bold my-8">LOGO</h2>
              <img alt="API(資源分配)" class="mb-8" src="../../assets/img/transfree-img-05.png"/>
              <p>
                TransFree為從Trans及Free為發想，希望使用者能自由地暢遊，融合星球地標的元素，表達行動能夠無拘束地到達使用者想去的目的地。</p>
            </div>
          </div>
          <h2 class="color-title font-bold my-8">Mockup-Web(768px以上)</h2>
          <div class="lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">公車動態查詢，出行更輕鬆</h3></li>
              <img src="../../assets/img/transfree-img-06.png"/>
              <p>針對日常搭乘公車的使用者，我們提供即時動態公車資訊，結合動態列表與地圖顯示，讓您隨時掌握公車動態。</p>
              <p>頁籤式設計實現模式快速切換，Icon設計靈感來自書籤，簡單直觀，一鍵切換所需資訊。</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">附近站牌查詢，快速掌握搭車路線</h3></li>
              <img src="../../assets/img/transfree-img-07.png"/>
              <p>針對擁有明確目的地的使用者，我們提供站牌為核心的查詢方式，讓您能輕鬆從目的地反向查找合適的公車路線。</p>
              <p>無論是規劃行程或臨時出行，只需輸入站牌，即可即時獲取相關路線與班次資訊，幫助您快速找到最近的搭乘方式，提升出行效率。</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">個人化設定，滿足多元需求</h3></li>
              <img src="../../assets/img/transfree-img-08.png"/>
              <p>我們提供靈活的個人化設定，打造更貼心的使用體驗。版本分為一般模式與友善無障礙專區，確保每位使用者都能輕鬆操作。</p>
              <p>支援中文與英文語言切換，讓外國旅客也能無障礙查詢。同時提供字體大小調整功能，讓長輩能更清晰閱讀資訊，出行更安心</p>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">常用公車清單，出行更便捷</h3></li>
              <img src="../../assets/img/transfree-img-09.png"/>
              <p>打造個人化公車清單，讓日常搭乘更加高效。您可將常用公車路線加入清單，方便下次快速查找，隨時掌握班次與即時動態。</p>
              <p>支援一般模式與友善無障礙專區，並提供中英文切換，滿足不同使用者需求。字體大小可調整，確保資訊清晰易讀，無論是日常通勤或偶爾出行，都能享受更便捷的搭乘體驗。</p>
            </ul>
          </div>

          <h2 class="color-title font-bold my-8">Mockup-Mobile(768px以下)</h2>
          <div class="lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">公車搜尋更直覺，動態快速直達</h3></li>
              <img class="shadow" src="../../assets/img/transfree-img-10.png"/>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">路線即查即得，資訊一手掌握</h3></li>
              <img class="shadow" src="../../assets/img/transfree-img-11.png"/>
            </ul>
            <ul class="list-[square] pl-4 leading-8">
              <li><h3 class="font-bold mb-4">設定隨心調整，功能快速切換</h3></li>
              <img class="shadow" src="../../assets/img/transfree-img-12.png"/>
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
