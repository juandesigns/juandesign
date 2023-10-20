<template>
  <div>
    <main>
      <section class="banner-block flex justify-center">
        <div class="container">
          <div>
            <h1>打造你的專屬網站<br/><span class="h2">準時交件 <br class="mobile"/>價格優惠 <br class="mobile"/>用心負責</span></h1>
            <p class="h5">
              我們夥伴包含<br class="mobile"/>UIUX設計師、全端開發工程師！<br/>
              提供UI設計及畫面切版<br class="mobile"/>能夠完美落地實現設計稿，<br/>
              工程師能支持前後端技術，<br class="mobile"/>開發品質高，容易擴充及維護！<br/>
              希望能有機會可以合作！<br class="mobile"/>若有任何疑問都歡迎再討論！
            </p>
          </div>
        </div>
      </section>
      <TheService/>
      <section class="process-block flex flex-col items-center">
        <div class="container flex flex-col">
          <div class="flex flex-col items-center">
            <div class="flex justify-center relative">
              <img width="138" src="../assets/img/img-title-process.png">
              <span class="h2 title-tag whitespace-nowrap">服務流程</span>
            </div>
            <p class="en-txt">PROCESS</p>
          </div>
          <swiper-container
              class="swiper-index"
              loop="true"
              pagination="true"
              :slides-per-view="7"
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
              @slidechange="onSlideChange"
          >
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">1.<br/>需求討論</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-1.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">2.<br/>提供報價</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-2.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">3.<br/>簽訂合約</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-3.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">4.<br/>預收訂金</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-4.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">5.<br/>驗收修正</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-5.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">6.<br/>完成交付</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-6.svg">
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="process-item">
                <p class="text-center h3">7.<br/>收取尾款</p>
                <div class="process-item-icon">
                  <img src="../assets/img/icon/icon-step-7.svg">
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
      <section class="case-block flex flex-col items-center">
        <div class="container flex flex-col">
          <div class="flex flex-row justify-between items-center">
            <div class="flex justify-center relative">
              <img width="125" src="../assets/img/img-title-case.png">
              <span class="h2 title-tag whitespace-nowrap">近期案例</span>
            </div>
            <p class="en-txt text-right">RECENT<br/>CASE</p>
          </div>
          <swiper-container
              class="swiper-index"
              loop="true"
              pagination="false"
              :slides-per-view="4"
              :breakpoints="{
              1200: {
              slidesPerView: 4,
              },

               768: {
                slidesPerView: 3,
              },
              390: {
                slidesPerView: 1,
              },
               320: {
                slidesPerView: 1,
              },
          }">
            <swiper-slide>
              <div class="img-content">
                <img src="../assets/img/img-service-01.png">
                <p class="h3">網站建置</p>
                <p>品牌形象網站</p>
                <p>一頁式網站</p>
                <div class="flex justify-end">
                  <UButton label="More" class="h4">
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right-20-solid"/>
                    </template>
                  </UButton>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-content">
                <img src="../assets/img/img-service-01.png">
                <p class="h3">網站建置</p>
                <p>品牌形象網站</p>
                <p>一頁式網站</p>
                <div class="flex justify-end">
                  <UButton label="More" class="h4">
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right-20-solid"/>
                    </template>
                  </UButton>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-content">
                <img src="../assets/img/img-service-01.png">
                <p class="h3">網站建置</p>
                <p>品牌形象網站</p>
                <p>一頁式網站</p>
                <div class="flex justify-end">
                  <UButton label="More" class="h4">
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right-20-solid"/>
                    </template>
                  </UButton>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-content">
                <img src="../assets/img/img-service-01.png">
                <p class="h3">網站建置</p>
                <p>品牌形象網站</p>
                <p>一頁式網站</p>
                <div class="flex justify-end">
                  <UButton label="More" class="h4">
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right-20-solid"/>
                    </template>
                  </UButton>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
      <TheContact/>
    </main>
<!--    <NuxtLink to="/service">To service page</NuxtLink>-->

  </div>
</template>

<script setup lang="ts">
import {register} from 'swiper/element/bundle';
import TheService from "../components/TheService";

register();

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress)
};

const onSlideChange = (e) => {
  console.log('slide changed')
}


useSeoMeta({
  title: 'JuanDesign',
  ogTitle: 'JuanDesign|打造屬於你的網站',
  description: '提供高質感網站設計，擁有多元化客製方案，打造屬於你的網站，樹立獨一無二的品牌',
  ogDescription: '提供高質感網站設計，擁有多元化客製方案，打造屬於你的網站，樹立獨一無二的品牌',
  ogImage: 'https://lurl.cc/NNKlV',
  // twitterCard: 'summary_large_image',
})


</script>

<style scoped>

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-container {
  padding: 40px 0 0 0;
}

swiper-container::part(bullet-active) {
  background-color: #B38F8AFF;
}

</style>
