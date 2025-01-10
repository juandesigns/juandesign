<template>
  <main class="question">
    <TheBanner :title="'常見問題'" :description="'服務流程中常見問題'"/>
    <section class="process-block flex flex-col items-center">
      <div class="container flex flex-col">
        <div class="flex flex-col items-center">
          <div class="flex justify-center relative">
            <img alt="服務流程" width="138" src="../assets/img/img-title-process.png">
            <span class="h2 title-tag whitespace-nowrap">服務流程</span>
          </div>
        </div>
        <swiper-container
            class="swiper-index"
            :loop="false"
            :pagination="true"
            :slides-per-view="1"
            :centered-slides="false"
            :breakpoints="{
              1200: {
              slidesPerView: 7,
               },
               768: {
              slidesPerView: 5,
              },
               390: {
              slidesPerView: 1,
              },
               320: {
              slidesPerView: 1,
              },
          }"
            @progress="onProgress"
        >
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">1.<br/>需求討論</p>
              <div class="process-item-icon">
                <img alt="需求討論" src="../assets/img/icon/icon-step-1.svg">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">2.<br/>提供報價</p>
              <div class="process-item-icon">
                <img alt="提供報價" src="../assets/img/icon/icon-step-2.svg">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">3.<br/>簽訂合約</p>
              <div class="process-item-icon">
                <img alt="簽訂合約" src="../assets/img/icon/icon-step-3.svg">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">4.<br/>預收訂金</p>
              <div class="process-item-icon">
                <img alt="預收訂金" src="../assets/img/icon/icon-step-4.svg">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">5.<br/>驗收修正</p>
              <div class="process-item-icon">
                <img alt="驗收修正" src="../assets/img/icon/icon-step-5.svg">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">6.<br/>完成交付</p>
              <div class="process-item-icon">
                <img alt="完成交付" src="../assets/img/icon/icon-step-6.svg">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="process-item">
              <p class="text-center h3">7.<br/>收取尾款</p>
              <div class="process-item-icon">
                <img alt="收取尾款" src="../assets/img/icon/icon-step-7.svg">
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <UAccordion :ui="{ wrapper: 'QA-title' }"
                    color="text-red"
                    :items="items"
                    open-icon="i-heroicons-plus min-w-[24px] w-6 h-6"
                    close-icon="i-heroicons-minus min-w-[24px] w-6 h-6"
                    multiple>
          <template #QA-1>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>可以透過以下方式聯繫我們</p>
              <ul class="list-[square] pl-4 leading-8">
                <li>Facebook：Juan Design
                  <a target="_blank"
                     class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                     href="https://www.facebook.com/juandesign.studios">前往聯繫</a>
                </li>
                <li>IG：juandesign.studios
                  <a target="_blank"
                     class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                     href="https://www.instagram.com/juandesign.studios/">前往聯繫</a>
                </li>
                <li>Line：@798esgzv
                  <a target="_blank"
                     class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                     href="https://lin.ee/nrlTXAh">加入好友</a>
                </li>
                <li>Email：juandesign.studios@gmail.com
                  <a target="_blank"
                     class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                     href="mailto:juandesign.studios@gmail.com">立即寄信</a>
                </li>
              </ul>
            </div>
          </template>
          <template #QA-2>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>我們有提供以下服務，可依照需求進行選擇：</p>
              <ul class="list-[square] pl-4 leading-8">
                <li>網頁設計、或者已有設計稿需要切版，請參照
                  <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                     href="/service/uiux">UIUX設計服務</a>
                </li>
                <li>頁面有開發功能需求，請參照 <a
                    class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                    href="/service/uiux">軟體開發服務</a>
                </li>
                <li>網站需要架設及專屬域名，請參照 <a
                    class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                    href="/service/uiux">網站架設及域名服務</a>
                </li>
                <li>需要Fb交談按鈕 或 Line@機器人建置，請參照 <a
                    class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                    href="/service/uiux">品牌經營與推廣服務</a>
                </li>
              </ul>
            </div>
          </template>
          <template #QA-3>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>過往相關作品及案例，請參照
                <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                   href="/case">相關案例</a>
                有更詳細介紹及展示。
              </p>
              <p>如需了解更多案例或查看最新項目，歡迎直接與我們聯繫！</p>
            </div>
          </template>
          <template #QA-4>
            <div class="grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>請先準備以下報價資料，能夠加速報價過程</p>
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
          </template>
          <template #QA-5>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>會的，我們會提供合約，需要雙方簽署，保障雙方權益，若業主已有準備合約，可依照業主所提供合約進行簽約，若沒有，將會以由我們提供，同時在簽約過程當中若有需要補充條款，可在討論過程當中提出。</p>
            </div>
          </template>
          <template #QA-6>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>有的，合約當中也會註明各項保固天數及範圍，會依照合約原訂範圍進行保固，若需要處理非保固範圍內問題，將會認定為新需求，依對應服務進行報價。</p>
              <p>服務項目中有各項服務保固天數：</p>
              <ul class="list-[square] pl-4 leading-8">
                <li>網頁設計、或者已有設計稿需要切版，請參照
                  <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                     href="/service/uiux">UIUX設計服務</a>
                </li>
                <li>頁面有開發功能需求，請參照 <a
                    class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                    href="/service/uiux">軟體開發服務</a>
                </li>
                <li>網站需要架設及專屬域名，請參照 <a
                    class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                    href="/service/uiux">網站架設及域名服務</a>
                </li>
                <li>需要Fb交談按鈕 或 Line@機器人建置，請參照 <a
                    class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                    href="/service/uiux">品牌經營與推廣服務</a>
                </li>
              </ul>
            </div>
          </template>
          <template #QA-7>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>目前工作室尚未提供發票服務，但可配合勞報單。</p>
            </div>
          </template>
          <template #QA-8>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>完成簽約後需要支付訂金，訂金為總金額1/2，案件完成交付後才會收取尾款，若業主有固定訂金比例金額，也可以在簽署合約過程中提出。</p>
            </div>
          </template>
          <template #QA-9>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>我們提供台新銀行以匯款方式進行收取訂金及尾款。</p>
            </div>
          </template>
          <template #QA-10>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>在完成製作時，我們也會進行測試，包含多裝置RWD自適應(手機、平板、電腦)、跨瀏覽器測試，測試完成後提供給業主進行驗收。
              </p>
              <ul class="list-[square] pl-4 leading-8">
                <li>功能開發服務：若測試功能有問題，則修正至完成</li>
                <li>設計相關服務：將提供三次合理修正，若是大方向改動(如變換整體風格、新增額外版型頁面)，則認定為新需求，需額外報價。</li>
              </ul>
            </div>
          </template>
          <template #QA-11>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <ul class="list-[square] pl-4 leading-8">
                <li>若是在保固天數內且原先範圍將會提供免費技術支援</li>
                <li>若是已超出保固天數或非保固範圍，可直接聯繫我們提供修改需求，依照需求類別對應服務項目進行報價。</li>
              </ul>
              <br/>
              <p>服務項目報價，請參照
                <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                   href="/service">服務項目</a>
                有更詳細說明，若有其他疑問可直接聯繫我們。
              </p>
            </div>
          </template>
          <template #QA-12>
            <div class="flex grid gap-y-4 flex-col text-gray-900 text-base p-4 bg-[#FAF6F3] rounded-sm shadow">
              <p>業主驗收完成後需於5日內進行尾款支付，以匯款方式至我們所提供指定台新帳戶。
              </p>
            </div>
          </template>

        </UAccordion>
      </div>
    </section>
  </main>
</template>


<script setup>
import {register} from 'swiper/element/bundle';
import TheService from "../components/TheService";

register();

useSeoMeta({
  title: 'JuanDesign｜常見問題',
  ogTitle: 'JuanDesign-常見問題',
})

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
};

const items = [
  {
    label: '1.有什麼聯絡方式？',
    icon: 'i-heroicons-chat-bubble-oval-left-ellipsis mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: true,
    slot: 'QA-1'
  },
  {
    label: '2.有提供什麼服務？',
    icon: 'i-heroicons-chat-bubble-oval-left-ellipsis mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-2'
  },
  {
    label: '3.有什麼案例或作品可以參考？',
    icon: 'i-heroicons-chat-bubble-oval-left-ellipsis mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-3'
  },
  {
    label: '4.報價需要準備什麼？',
    icon: 'i-heroicons-envelope mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-4'
  },
  {
    label: '5.簽約是否會提供合約？',
    icon: 'i-heroicons-pencil-square mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-5'
  },
  {
    label: '6.合約是否有保固期限？',
    icon: 'i-heroicons-pencil-square mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-6'
  },
  {
    label: '7.是否可提供發票或勞報單？',
    icon: 'i-heroicons-currency-dollar mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-7'
  },
  {
    label: '8.是否需要支付訂金？需要支付多少？',
    icon: 'i-heroicons-currency-dollar mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-8'
  },
  {
    label: '9.有提供什麼支付方式？',
    icon: 'i-heroicons-currency-dollar mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-9'
  },
  {
    label: '10.驗收及修正可以幾次調整？',
    icon: 'i-heroicons-computer-desktop mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-10'
  },
  {
    label: '11.完成交付後又需要修改怎麼辦？',
    icon: 'i-heroicons-check-badge mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-11'
  },
  {
    label: '12.什麼時候收取尾款？',
    icon: 'i-heroicons-building-library mr-2 sm:mr-4 w-6 h-6',
    defaultOpen: false,
    slot: 'QA-12'
  },
]

</script>


<style>


</style>
