<template>
  <div class="service-inner">
    <TheBanner :title="'相關案例'" :description="'全台公車動態時刻查詢應用服務'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h1>全台公車動態時刻查詢應用服務 TransFree</h1>
          <p>
            TransFree意涵使用者能自由地暢遊，以全台公車應用服務為目標，使用者包含一般族群、外國旅客、長青族等等，期許每個人皆能友善使用。TransFree提供公車搜尋、附近站牌、常用公車、設定等服務，並適應多裝置尺寸，個性化多種設定能讓不同使用者皆能清楚地接收資訊。</p>
        </div>
        <swiper-container
            class="swiper-index"
            :loop="true"
            :pagination="true"
            :slides-per-view="1"
            :centered-slides="false"
            @progress="onProgress"
            @slidechange="onSlideChange"
        >
          <swiper-slide class="mb-10 object-cover">
            <img src="../../assets/img/transfree-banner-01.png"/>
          </swiper-slide>
          <swiper-slide class="mb-10 object-cover">
            <img src="../../assets/img/transfree-banner-02.png"/>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
    <section class="flex justify-center bg-tag">
      <div class="container p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <ul class="list-[square] pl-4 leading-8">
          <li>舉辦單位：六角學院、交通部聯合</li>
          <li>時程：2021/11</li>
          <li>團體名稱：TransFree</li>
          <li>獎項：團體組入圍獎</li>
          <li>成員：三位前端工程師、一位UIUX</li>
        </ul>
        <ul class="list-[square] pl-4 leading-8">
          <li>Figma：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://www.figma.com/file/RUxcSUqcSV7R3mQCXsaXBz/F2E-transfree_Mockup?node-id=0%3A1">線上UI設計稿</a>
          </li>
          <li>Github：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://begoniasuccess.github.io/transfree/index#/search-bus">線上觀看前端</a>
          </li>
          <li>The F2E：
            <a target="_blank"
               class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
               href="https://2021.thef2e.com/users/6296427084285739902/">團體組｜TransFree</a>
          </li>

          <li>介面設計：Figma、Zeplin</li>
          <li>使用技術：HTML、CSS、Vue</li>
        </ul>
      </div>
    </section>
    <section class=" inner-block flex justify-center">
      <div class="container">
        <div class="flex flex-col grid gap-y-6">
          <h2 class="color-title font-bold mb-8">User Experience</h2>
          <p>進行設計之前，我們必須更了解產品的使用者，才能精準的抓到使用者的特質與需求，團隊的討論與訪談，實際搭乘台北市公車進行觀察使用者行為，我們描繪出使用者的的樣貌。<br/><br/>
            使用者族群廣泛不同年齡、國別、無障礙，對於不同使用者提供友善的介面設定，我們選定以無障礙、多語系、字體大小，多種客製化將資訊傳達完整，分析同類型競品功能，將著重功能進行以卡片分類法進行分類。</p>
          <img src="../../assets/img/transfree-img-01.png"/>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div class="flex flex-col">
              <h2 class="color-title font-bold my-8">API(資源分配)</h2>
              <p>在決定需求功能後，未求整體開發順利，應該先初步評估現有資源，並妥善分配，掌握手中可用的系統、平台及硬體資源，並選擇最佳方案。</p>
            </div>
            <img alt="API(資源分配)" class="mt-8 sm:mt-0" src="../../assets/img/transfree-img-02.png"/>
          </div>

          <h2 class="color-title font-bold my-8">Wireframe</h2>
          <p>執行先前的步驟後，有效率的串起零散的概念與資訊，呈現出產品大致上的模樣、功能與流程，整體以卡片式設計及一頁式呈現，著重於使用者能快速搜尋有用資訊。</p>
          <img src="../../assets/img/transfree-img-03.png"/>

          <h2 class="color-title font-bold my-8">Guideline</h2>
          <p>整體配色以明亮做為設計，明亮是希望能讓使用者在找尋資訊的過程中，不會有壓迫及焦慮的情緒，但在色系特別選用容易辨別的顏色，在文字大小、公車不同狀態的呈現顏色依然很清楚的呈現。</p>
          <div class="flex grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <img alt="API(資源分配)" class="mt-8 sm:mt-0" src="../../assets/img/transfree-img-04.png"/>
            <div class="flex flex-col">
              <h2 class="color-title font-bold my-8">LOGO</h2>
              <img alt="API(資源分配)" class="mb-8" src="../../assets/img/transfree-img-05.png"/>
              <p>TransFree為從Trans及Free為發想，希望使用者能自由地暢遊，融合星球地標的元素，表達行動能夠無拘束地到達使用者想去的目的地。</p>
            </div>
          </div>
          <h2 class="color-title font-bold my-8">Mockup-Web(768px以上)</h2>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「公車搜尋」</span>以公車為搜尋條件，查詢對應公車，針對平常搭公車使用者提供動態公車顯示，共有動態列表及地圖顯示模式，用頁籤方式為快速切換，Icon呈現以書籤為發想。特別以動態鍵盤設計，協助快速找尋資訊，針對無障礙及長青族也能提高易用性。
              </li>
              <li><span class="font-bold">「附近站牌」</span>以站牌為查詢的條件，針對擁有明確目的地的使用者，能夠從目的地找尋前往搭乘的公車路線。</li>
            </ul>
          </div>
          <img src="../../assets/img/transfree-img-06.png"/>
          <div class="lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <ul class="list-[square] pl-4 leading-8">
              <li><span class="font-bold">「個人設定」</span>提供個人化設計，版本提供一般版本、友善專區(無障礙)，語言提供中文、英文(外國旅客)，字體大小提供長輩們更清楚觀看資訊。</li>
              <li><span class="font-bold">「附近站牌」</span>提供使用者將自己常用的公車加入清單，方便能下次使用，也能更快速找到自己常搭的公車及相關資訊。</li>
            </ul>
          </div>
          <img src="../../assets/img/transfree-img-07.png"/>
          <h2 class="color-title font-bold my-8">Mockup-Mobile(768px以下)</h2>
          <p>
            針對手機版呈現不同的header及側選單呈現，符合手機用戶操作，畫面以最有效率的方式呈現。像是公車相關資訊或動態鍵盤等等，延伸功能以彈跳視窗呈現，操作流程單一呈現，聚焦在當下使用者所需要資訊，不提供多餘資訊在畫面，以免造成使用者的混淆。</p>
          <img src="../../assets/img/transfree-img-08.png"/>
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
  console.log(progress)
};

const onSlideChange = (e) => {
  console.log('slide changed')
}
</script>

<style scoped>
</style>
