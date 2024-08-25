<template>
  <button @click="switchLanguage">
    {{ $t('switch_language') }}
  </button>
</template>

<script>
  import { useI18n } from 'vue-i18n';

  export default {
    setup() {
      const { locale } = useI18n();

      const switchLanguage = () => {
        locale.value = locale.value === 'ru' ? 'en' : 'ru';
      };

      return {
        switchLanguage,
      };
    },
  };
</script>

<style scoped></style>
