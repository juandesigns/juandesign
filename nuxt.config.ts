// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@nuxtjs/tailwindcss', 'nuxt-facebook-chat'],
  css: ['~/assets/scss/index.scss'],
  app:{
      head: {
        title: 'JuanDesign｜量身打造您的專屬網站',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { key: 'description', name: 'description', content: '提供高質感網站設計，擁有多元化客製方案，樹立獨一無二的品牌' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      }
  }

})
