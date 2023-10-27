<template>

  <header class="shadow">
    <nav>
      <NuxtLink class="logo" to="/">
        <img class="desk" width="121" src="../assets/img/img-logo.svg" alt="JuanDesign">
        <img class="mobile py-1.5" width="254" src="../assets/img/img-logo-m.svg" alt="juan design">
      </NuxtLink>

      <div class="menu-warp desk">
        <ul class="menu-list">
          <li class="item">
            <MyNuxtLink class="h4" to="/service">服務項目</MyNuxtLink>
          </li>
          <li class="item">
            <MyNuxtLink class="h4" to="/case">相關案例</MyNuxtLink>
          </li>
          <li class="item">
            <MyNuxtLink class="h4" to="/question">常見問題</MyNuxtLink>
          </li>
          <li class="item">
            <MyNuxtLink class="h4" to="/contact">聯絡我們</MyNuxtLink>
          </li>
        </ul>
      </div>
      <div class="menu-warp mobile" :class="{ active : isMenuOpen }">
        <div class="mobile-btn" @click="isMenuOpen = !isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-list-warp">
          <ul class="menu-list">
            <div class="flex w-100">
              <li class="item flex col-6">
                <img alt="juandesign.studios" src="../assets/img/icon/i_fb.svg"/>
                <a target="_blank" href="https://www.facebook.com/juandesign.studios">Facebook</a>
              </li>
              <li class="item flex col-6">
                <img alt="juandesign.studios" src="../assets/img/icon/i_line.svg"/>
                <a target="_blank" href="https://lin.ee/nrlTXAh">Line@</a>
              </li>
            </div>
            <li class="item">
              <MyNuxtLink class="h4 w-full" to="/" @click="isMenuOpen = !isMenuOpen">首頁</MyNuxtLink>
            </li>
            <li class="item">
              <MyNuxtLink class="h4 w-full" to="/service" @click="isMenuOpen = !isMenuOpen">服務項目</MyNuxtLink>
            </li>
            <li class="item">
              <MyNuxtLink class="h4 w-full" to="/case" @click="isMenuOpen = !isMenuOpen">相關案例</MyNuxtLink>
            </li>
            <li class="item">
              <MyNuxtLink class="h4 w-full" to="/question" @click="isMenuOpen = !isMenuOpen">常見問題</MyNuxtLink>
            </li>
            <li class="item">
              <MyNuxtLink class="h4 w-full" to="/contact" @click="isMenuOpen = !isMenuOpen">聯絡我們</MyNuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>

<style scoped>

</style>
