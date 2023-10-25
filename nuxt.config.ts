// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@nuxtjs/tailwindcss', 'nuxt-facebook-chat'],
  css: ['~/assets/scss/index.scss'],
})
