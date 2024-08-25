<template>
  <div
    class="bg-white shadow-md rounded-lg p-4 flex items-center cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105"
    @click="$emit('click')"
  >
    <img :src="`/assets/icons/${sign.icon}`" alt="" class="w-12 h-12 mr-4" />
    <div>
      <h3 class="text-lg font-semibold">{{ sign.name }}</h3>
      <p class="text-sm text-gray-600">{{ sign.period }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      sign: Object,
    },
  };
</script>
