<template>
  <main class="service">
    <TheBanner :title="'服務項目'" :description="'各項目服務報價說明及範圍'"/>
    <TheService/>
    <TheContact/>
  </main>
</template>

<script setup>
import TheBanner from '../../components/TheBanner.vue'
import TheService from "../../components/TheService";
useSeoMeta({
  title: 'JuanDesign｜服務項目',
  ogTitle: 'JuanDesign-服務項目',
})
</script>

<style scoped>

</style>
