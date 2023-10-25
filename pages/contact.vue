<template>
  <main class="question">
    <TheBanner :title="'聯絡我們'" :description="'我們擁有專業技術，實現你的想法'"/>
    <section class="inner-block flex flex-col items-center">
      <div class="container grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
        <div class="flex flex-col">
          <h1>聯絡資訊</h1>
          <p>服務時間 | 10:00 - 19:00</p>
          <p class="mt-4">聯絡方式</p>
          <ul class="list-[square] pl-4 leading-8">
            <li>Facebook |
              <a target="_blank"
                 class="text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                 href="https://www.facebook.com/profile.php?id=61550725657778">Juan Design</a>
            </li>
            <li>IG |
              <a target="_blank"
                 class="text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                 href="https://www.instagram.com/juandesign.studios/">@juandesign.studios</a>
            </li>
            <li>Email |<br class="mobile"/>
              <a target="_blank"
                 class="break-words text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                 href="mailto:juandesign.studios@gmail.com">juandesign.studios@gmail.com</a>
            </li>
            <li>官網 | 聯絡表單留下聯絡資訊</li>
            <li>官網 | 點選右下角按鈕，立即聯繫</li>
          </ul>
        </div>
        <div class="flex flex-col grid gap-y-6 max-w-md">
          <h1>聯絡表單</h1>
          <UForm
              :validate="validate"
              :state="state"
              @submit="submit"
              class="grid gap-y-6"
          >
            <UFormGroup label="*姓名" name="name">
              <UInput v-model="state.name" size="md" padding="md"/>
            </UFormGroup>
            <UFormGroup label="*聯絡信箱" name="email">
              <UInput v-model="state.email" size="md" padding="md" type="mail"/>
            </UFormGroup>
            <UFormGroup label="*主旨" name="title">
              <UInput v-model="state.title" size="md" padding="md"/>
            </UFormGroup>
            <UFormGroup label="*訊息" name="content">
              <UTextarea
                  v-model="state.content"
                  color="white"
                  size="md"
                  padding="md"
                  variant="outline"
                  name="textarea"
                  placeholder="若有需要透過其他方式聯繫，請在訊息備註。"
              />
            </UFormGroup>
            <div class="flex justify-center">
              <UButton type="submit" class="btn-primary h5 !my-4 !py-4 !px-10" label="送出"
                       :ui="{ rounded: 'rounded-full' }"/>
            </div>
          </UForm>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {FormError, FormSubmitEvent} from '@nuxt/ui/dist/runtime/types'

const state = ref({
  name: undefined,
  email: undefined,
  title: undefined,
  content: undefined,
})
const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({path: 'name', message: '請輸入聯絡人姓名'})
  if (!state.email) errors.push({path: 'email', message: '請輸入聯絡信箱'})
  if (!state.title) errors.push({path: 'title', message: '請輸入主旨'})
  if (!state.content) errors.push({path: 'content', message: '請輸入訊息'})
  return errors
}

async function submit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>
<style scoped>

</style>
