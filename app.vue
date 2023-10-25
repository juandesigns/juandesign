<template>
  <div>
    <TheHeader/>

    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <client-only>
      <nuxt-facebook-chat :options="options" />
    </client-only>
    <TheFooter/>

<!--    <UButton>123</UButton>-->
<!--    <UIcon name="i-heroicons-home"></UIcon>-->

  </div>
</template>

<script setup lang="ts">
import { NuxtFacebookChatOptions } from 'nuxt-facebook-chat';
// Define your chat options
const options: NuxtFacebookChatOptions = {
  locale:"zh_TW",
  pageId: "122487314278162",  // Your Facebook Page ID
  themeColor: "#f87171",      // Customize the chat theme color
  LoggedInGreeting:"哈囉！你好，若有任何疑問或合作機會，歡迎直接聯繫我們！😀",
  LoggedOutGreeting:"哈囉！你好，若有任何疑問或合作機會，歡迎直接聯繫我們！😀",
  greetingDialogDisplay:"hidden",
};
</script>

<style>

</style>
