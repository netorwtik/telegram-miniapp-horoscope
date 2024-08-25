<template>
  <div class="zodiac-detail p-4">
    <button @click="$emit('back')">Назад</button>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: ['name', 'description'],
  });
</script>

<style scoped></style>
