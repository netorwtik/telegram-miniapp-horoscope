<template>
  <div class="flex justify-center mb-4">
    <button
      @click="switchLanguage('en')"
      class="px-4 py-2 bg-blue-500 text-white rounded-md mx-2 hover:bg-blue-600"
    >
      English
    </button>
    <button
      @click="switchLanguage('ru')"
      class="px-4 py-2 bg-blue-500 text-white rounded-md mx-2 hover:bg-blue-600"
    >
      Русский
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      switchLanguage(lang) {
        this.$emit('language-changed', lang);
      },
    },
  };
</script>
