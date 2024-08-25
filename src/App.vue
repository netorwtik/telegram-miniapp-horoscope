<template>
  <div class="app-container">
    <LanguageSwitcher />
    <ZodiacGrid @show-details="showZodiacDetail" />
    <ZodiacDetail
      v-if="selectedZodiac"
      :name="selectedZodiac.name"
      :description="zodiacDescription"
      @back="selectedZodiac = null"
    />
  </div>
</template>

<script>
  import { ref } from 'vue';
  import LanguageSwitcher from './components/LanguageSwitcher.vue';
  import ZodiacGrid from './components/ZodiacGrid.vue';
  import ZodiacDetail from './components/ZodiacDetail.vue';

  export default {
    components: {
      LanguageSwitcher,
      ZodiacGrid,
      ZodiacDetail,
    },
    setup() {
      const selectedZodiac = ref(null);
      const zodiacDescription = ref('');

      const showZodiacDetail = async zodiac => {
        selectedZodiac.value = zodiac;
        // Выполняем запрос к API для получения описания
        const response = await fetch('API_URL', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sign: zodiac.name.toLowerCase(),
            language: 'translated',
            period: 'today',
          }),
        });
        const data = await response.json();
        zodiacDescription.value = data.description;
      };

      return {
        selectedZodiac,
        zodiacDescription,
        showZodiacDetail,
      };
    },
  };
</script>

<style></style>
