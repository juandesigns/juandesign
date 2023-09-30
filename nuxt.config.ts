// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-swiper'],
  css: ['~/assets/scss/index.scss'],
  swiper: {
    // Swiper options
    // ----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination'],

    // all modules are imported by default
  }

})
// import { defineNuxtModule } from 'nuxt'
