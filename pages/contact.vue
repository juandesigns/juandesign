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
                 href="https://www.facebook.com/juandesign.studios">Juan Design</a>
            </li>
            <li>IG |
              <a target="_blank"
                 class="text-red-400 pr-1 font-bold hover:text-[#B38F8AFF] hover:border-[#B38F8AFF] transition duration-300"
                 href="https://www.instagram.com/juandesign.studios/">@juandesign.studios</a>
            </li>
            <li>Email | <br class="mobile"/>
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
              ref="form"
              :schema="schema"
              :state="state"
              @submit="submit"
              class="grid gap-y-6"
          >
            <UFormGroup label="*姓名" name="name" class="dark:text-gray-900">
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
import { object, string, InferType } from 'yup'
import type {FormError, FormSubmitEvent} from '@nuxt/ui/dist/runtime/types'

const form = ref()

const schema = object({
  name: string().max(30, '姓名不得大於30字').required('請輸入聯絡人姓名'),
  email: string().email('email格式錯誤').required('請輸入聯絡信箱'),
  title: string().max(50, '主旨不得大於50字').required('請輸入主旨'),
  content: string().max(300, '訊息不得大於300字').required('請輸入訊息')
})

type Schema = InferType<typeof schema>

const state = ref({
  name: undefined,
  email: undefined,
  title: undefined,
  content: undefined,
})


async function submit(event: FormSubmitEvent<Schema>) {
  const message = `
  收到信息了！
  姓名：${event.data.name}
  聯絡信箱：${event.data.email}
  主旨：${event.data.title}
  訊息：${event.data.content}
  `

  const data = {
    message: message
  }

  fetch('https://script.google.com/macros/s/AKfycby-p3pkm46nnXAdHPESo1I8J6CgiyVDUpeRfKGc_q8L04ArtQScNclMoE3ciSGn6rcm/exec', {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'no-cors'
  }).then(res => {
    window.alert('發送表單成功！')
    form.value.clear() //clear errors
    event.data.name = ''
    event.data.email = ''
    event.data.title = ''
    event.data.content = ''
  }).catch(err => {
    window.alert('發送表單失敗...' + err)
    console.log(err)
  })
}

definePageMeta({
  colorMode: 'light',
})
</script>
<style scoped>

</style>
