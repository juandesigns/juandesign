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
  pageId: "122487314278162",  // Your Facebook Page ID
  locale: "zh_TW",            // Set the locale for the chat
  themeColor: "#E04040",      // Customize the chat theme color
};
</script>

<style>

</style>
