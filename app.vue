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

    <!--    <UButton>123</UButton>-->
    <!--    <UIcon name="i-heroicons-home"></UIcon>-->

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
</script>

<style>
.fb_dialog_content > iframe:not(:first-child) {
  display: none;
}
</style>
