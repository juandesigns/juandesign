<template>
  <section class="banner-block banner-page">
    <div class="container">
      <h1> {{ title }}</h1>
      <p class="h3">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {type: String, default: "Page Header"},
  description: {type: String, default: "Page Description"},
});
</script>


<style scoped>

</style>
