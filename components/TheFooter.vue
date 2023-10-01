<template>
  <footer>
    <div class="container">
      <div class="footer-warp">
        <div class="footer-1">
          <img width="121" src="../assets/img/img-logo-w.svg" alt="JuanDesign">

        </div>
        <div class="footer-2">
          <h3 class="footer-title">相關社群</h3>
          <ul class="community">
            <li>
              <a href="" target="_blank">
                <img src="../assets/img/icon/i_fb.svg" alt=""></a>
            </li>
            <li><a href="" target="_blank">
              <img src="../assets/img/icon/i_line.svg" alt=""></a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="../assets/img/icon/i_ig.svg" alt=""></a>
            </li>
          </ul>
          <h3 class="footer-title">聯絡信箱</h3>
          <p> juandesign.studios@gmail.com</p>
        </div>
        <div class="footer-3">
          <h3 class="footer-title">服務地圖</h3>
          <ul class="footer-menu">
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
    </div>
    <div class="footer-copyright">
      <div class="container text-center">
        Copyright © 2023 JuanDesign
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter.vue"
}
</script>

<style scoped>

</style>
