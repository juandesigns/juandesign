<template>
  <main class="question">
    <TheBanner :title="'常見問題'" :description="'合作過程與報價詢問常見問題'"/>
    <section class="process-block flex flex-col items-center">
      <div class="container flex flex-col">
        <div class="flex flex-col items-center">
          <div class="flex justify-center relative">
            <img width="138" src="../assets/img/img-title-process.png">
            <span class="h2 title-tag whitespace-nowrap">Q & A</span>
          </div>
          <!--          <p class="en-txt">Q&A</p>-->
        </div>

        <UAccordion :items="items">
          <template #item="{ item }">
            <p class="italic text-gray-900 dark:text-white text-center">
              {{ item.description }}
            </p>
          </template>

          <template #getting-started>
            <div class="text-gray-900 dark:text-white text-center">
              <Logo class="w-auto h-8 mx-auto"/>

              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Fully styled and customizable components for Nuxt.
              </p>
            </div>
          </template>

          <template #installation="{ description }">
            <div class="flex flex-col justify-center items-center gap-1 mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                Installation
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Install <code>@nuxt/ui</code> dependency to your project:
              </p>
              <p>
                {{ description }}
              </p>
            </div>

            <div class="flex flex-col items-center">
              <code>$ npm install @nuxt/ui</code>
              <code>$ yarn add @nuxt/ui</code>
              <code>$ pnpm add @nuxt/ui</code>
            </div>
          </template>
        </UAccordion>
      </div>
    </section>

  </main>
</template>


<script setup>
const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'getting-started'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  defaultOpen: true,
  slot: 'installation'
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  defaultOpen: true,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}];


</script>


<style scoped>

</style>
