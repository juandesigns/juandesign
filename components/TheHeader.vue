<template>

  <header>
    <nav>
      <NuxtLink class="logo" to="/">
        <img width="121" src="../assets/img/img-logo.svg" alt="JuanDesign">
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
                <img src="../assets/img/icon/i_line.svg"/>
                <a href="">Line@</a>
              </li>
              <li class="item flex col-6">
                <img src="../assets/img/icon/i_ig.svg"/>
                <a href="">Instagram</a>
              </li>
            </div>
            <li class="item">
              <MyNuxtLink class="h4" to="/">首頁</MyNuxtLink>
            </li>
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
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>

<style scoped>

</style>
