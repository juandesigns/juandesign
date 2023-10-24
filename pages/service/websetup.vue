<template>
  <div class="service-inner">
    <TheBanner :title="'服務項目'" :description="'網站架設與網域'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container">

        <div class="flex flex-col">
          <h1>網站架設及自訂義網域 <span class="h2">$8000</span></h1>
          <p class="font-bold">服務說明：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>我們是採用顧問服務，包含協助業主申請帳號，採買斷式的形式，僅收取一次性設定費用，包含架設、相關設定、協助申請帳號，這是我們的特點！</li>
            <li>協助申請雲平台( <span class="font-bold ">Amazon Web Service/ Google Cloud Platform </span> )</li>
            <li>協助申請 <span class="font-bold">GoDaddy</span> 域名帳號</li>
            <li>後續每月流量服務或每年域名費用，由客戶專屬帳號的信用卡由平台直接跟收取，就不會透過我們</li>
            <li>特點：無需維護費跟手續費</li>
            <li>優點：較好的SEO</li>
            <li>適合族群：企業用途、推廣商業產品</li>
          </ul>
          <p class="mt-8 font-bold">提供平台說明：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>Amazon Web Service為全球最大雲平台，提供一年免費帳號使用限定服務及流量，相關說明：
              <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold"
                 href="https://aws.amazon.com/tw/s3/?did=ft_card&trk=ft_card">Amazon S3 免費方案
              </a>
            </li>
            <li>Google Cloud Platform為google提供雲平台，提供免費額度300美金，相關說明：
              <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold"
                 href="https://cloud.google.com/free?hl=zh-tw">GCP 免費方案產品
              </a>
            </li>
            <li>GoDaddy為全球最大購買域名平台，可預先試算的域名費用，
              <a class="border-b-2 border-red-300 text-red-400 pr-1 font-bold"
                 href="https://tw.godaddy.com/offers/godaddy?isc=disc965842&countryview=1&currencyType=TWD&cdtl=c_20012948307.g_146146597897.k_aud-957928787989:kwd-88659201.a_655882536885.d_c.ctv_g&bnb=b&gad_source=1&gclid=CjwKCAjwkNOpBhBEEiwAb3MvvY-K_3WViAitT8qhjgfaNNn73FxqATrJyER-KxdZZYp6tT7DnHD3bBoCQmkQAvD_BwE">前往試算域名價格
              </a>
            </li>
          </ul>
          <p class="mt-8 font-bold color-title">若需要可加購：</p>
          <ul class="list-[square] pl-4 leading-8 color-title">
            <li>代管主機服務，每月固定$800代管費 + 實際使用流量費用 / 月(會出示帳單)</li>
            <li>godaddy域名購買服務，每年固定$500代管費 + 實際godaddy域名購買費用 / 年</li>
          </ul>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>網站架設無需客製化域名 <span class="h2">$3000</span></h1>

          <p class="font-bold">服務說明：</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>適合族群：個人使用、工作室、作品集</li>
            <li>提供兩種方式(Github pages/ngrok)使用免費域名</li>
          </ul>
          <p class="mt-8 font-bold">1.使用Github pages 可存放靜態網頁代管服務！</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>優點：無需主機費用、可永久固定域名</li>
            <li>缺點：會需要使用Github pages 的子域名</li>
            <li>範例：https://ya850805.github.io/lotso-scrum/#/</li>
          </ul>

          <p class="mt-8 font-bold">2.使用ngrok 使用免費域名</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>優點：免費域名</li>
            <li>缺點：ngrok 動態提供的 url access、需要自行提供電腦當主機運行</li>
            <li>範例：http://xxxxxxxxxxx.ngrok.io</li>
          </ul>
        </div>
        <hr class="my-10"/>
        <div class="flex flex-col">
          <h1>保固說明</h1>
          <ul class="list-[square] pl-4 leading-8">
            <li>交付案件時會進行驗收測試，若有問題會完成修正</li>
            <li>完整交後原範圍內有14天保固時間</li>
            <li>若為急件加價，可依上述報價 * 1.5</li>
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
