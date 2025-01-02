<template>
  <div>
    <TheHeader/>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <client-only>
      <nuxt-facebook-chat :options="options"/>
    </client-only>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import {NuxtFacebookChatOptions} from 'nuxt-facebook-chat';
// Define your chat options
const options: NuxtFacebookChatOptions = {
  locale: "zh_TW",
  pageId: "122487314278162",  // Your Facebook Page ID
  themeColor: "#f87171",      // Customize the chat theme color
};
definePageMeta({
  colorMode: 'light',
})

useSeoMeta({
  title: 'JuanDesign｜打造屬於你的網站',
  ogTitle: 'JuanDesign-打造屬於你的網站',
  description: '提供高質感網站設計，擁有多元化客製方案，樹立獨一無二的品牌',
  ogDescription: '提供高質感網站設計，擁有多元化客製方案，樹立獨一無二的品牌',
  ogImage: 'https://juandesign.tw/favicon.ico',
  twitterCard: 'summary_large_image',
})

</script>

<style>
.fb_dialog_content > iframe:not(:first-child) {
  display: none;
}
</style>
