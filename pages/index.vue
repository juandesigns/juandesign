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
      <section class="service-block flex justify-center">
        <div class="container">
          <div class="flex flex-col items-center w-20">
            <div class="flex justify-center relative">
              <img width="120" src="../assets/img/img-title-service.png">
              <span class="h2 title-tag whitespace-nowrap">服務項目</span>
            </div>
            <p class="en-txt">SERVICE</p>
          </div>
          <div class="flex flex-wrap justify-end w-80">
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
            <div class="img-content">
              <img src="../assets/img/img-service-02.png">
              <p class="h3">網站架設與網域</p>
              <p>客製化網域</p>
              <p>虛擬主機架設</p>
              <div class="flex justify-end">
                <UButton label="More" class="h4">
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid"/>
                  </template>
                </UButton>
              </div>
            </div>
            <div class="img-content">
              <img src="../assets/img/img-service-03.png">
              <p class="h3">軟體開發</p>
              <p>前端/後端開發</p>
              <p>爬蟲程式服務</p>
              <div class="flex justify-end">
                <UButton label="More" class="h4">
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid"/>
                  </template>
                </UButton>
              </div>
            </div>
            <div class="img-content">
              <img src="../assets/img/img-service-04.png">
              <p class="h3">UIUX設計及切版</p>
              <p>UI/UX設計</p>
              <p>網頁切版服務</p>
              <div class="flex justify-end">
                <UButton label="More" class="h4">
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid"/>
                  </template>
                </UButton>
              </div>
            </div>
            <div class="img-content">
              <img src="../assets/img/img-service-05.png">
              <p class="h3">品牌經營與推廣</p>
              <p>LINE@BOT 建立</p>
              <p>FB messenger 交談功能</p>
              <div class="flex justify-end">
                <UButton label="More" class="h4">
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid"/>
                  </template>
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TheContact/>
    </main>
    <NuxtLink to="/service">To service page</NuxtLink>

  </div>
</template>

<script setup lang="ts">
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

</style>
