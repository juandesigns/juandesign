<template>
  <footer>
    <div class="container">
      <div class="footer-warp">
        <div class="footer-1">
          <img width="121" src="../assets/img/img-logo-w.svg" alt="JuanDesign">
          <p>打造專屬的網站</p>
        </div>
        <div class="footer-2">
          <h3 class="footer-title">相關社群</h3>
          <ul class="community">
            <li>
              <a href="https://www.facebook.com/juandesign.studios" target="_blank">
                <img src="../assets/img/icon/i_fb.svg" alt="juandesign.studios"></a>
            </li>
            <li>
              <a href="https://www.instagram.com/juandesign.studios/" target="_blank">
                <img src="../assets/img/icon/i_ig.svg" alt="juandesign.studios"></a>
            </li>
            <li><a href="https://lin.ee/nrlTXAh" target="_blank">
              <img src="../assets/img/icon/i_line.svg" alt="https://lin.ee/nrlTXAh"></a>
            </li>
          </ul>
          <h3 class="footer-title">聯絡信箱</h3>
          <a href="mailto:juandesign.studios@gmail.com">juandesign.studios@gmail.com</a>
        </div>
        <div class="footer-3">
          <h3 class="footer-title">服務地圖</h3>
          <ul class="footer-menu">
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
    </div>
    <div class="footer-copyright h5">
      <div class="container text-center">
        Copyright © 2025 JuanDesign
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
