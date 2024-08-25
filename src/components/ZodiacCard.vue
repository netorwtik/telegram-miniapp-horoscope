<template>
  <div class="zodiac-card p-4 border rounded-lg text-center cursor-pointer">
    <img :src="`./assets/icons/${icon}`" alt="" class="mx-auto w-16 h-16" />
    <h3 class="text-lg font-semibold mt-2">{{ name }}</h3>
    <p class="text-sm">{{ period }}</p>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: ['name', 'period', 'icon'],
  });
</script>

<style scoped>
  .zodiac-card {
    transition: transform 0.3s;
  }
  .zodiac-card:hover {
    transform: scale(1.05);
  }
</style>
