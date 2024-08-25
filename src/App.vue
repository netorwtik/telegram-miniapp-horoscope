<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <LanguageSwitcher @language-changed="setLanguage" />
    <ZodiacGrid v-if="!selectedSign" @select-sign="selectSign" />
    <ZodiacDetail
      v-else
      :sign="selectedSign"
      :language="language"
      @back="selectedSign = null"
    />
  </div>
</template>

<script>
  import LanguageSwitcher from './components/LanguageSwitcher.vue';
  import ZodiacGrid from './components/ZodiacGrid.vue';
  import ZodiacDetail from './components/ZodiacDetail.vue';

  export default {
    components: {
      LanguageSwitcher,
      ZodiacGrid,
      ZodiacDetail,
    },
    data() {
      return {
        language: 'en',
        selectedSign: null,
      };
    },
    methods: {
      setLanguage(lang) {
        this.language = lang;
      },
      selectSign(sign) {
        this.selectedSign = sign;
      },
    },
    created() {
      this.language =
        window.Telegram.WebApp.initDataUnsafe?.user?.language_code === 'ru'
          ? 'ru'
          : 'en';
    },
  };
</script>
