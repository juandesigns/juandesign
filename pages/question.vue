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

          <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
            <template #default="{ item, index, open }">
              <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded :'rounded-none', padding: { sm:'p-3' } }">
                <template #leading>
                  <div class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
                    <UIcon :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900" />
                  </div>
                </template>

                <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

                <template #trailing>
                  <UIcon
                      name="i-heroicons-chevron-right-20-solid"
                      class="w-5 h-5 ms-auto transform transition-transform duration-200"
                      :class="[open && 'rotate-90']"
                  />
                </template>
              </UButton>
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
