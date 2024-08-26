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
  import { useI18n } from 'vue-i18n';

  export default {
    components: {
      LanguageSwitcher,
      ZodiacGrid,
      ZodiacDetail,
    },
    setup() {
      const { locale } = useI18n(); // для получения текущего языка
      const selectedZodiac = ref(null);
      const zodiacDescription = ref('');

      const showZodiacDetail = async zodiac => {
        selectedZodiac.value = zodiac;
        try {
          const response = await fetch(
            'https://aztro.sameerkumar.website?sign=aries&day=today',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sign: zodiac.name.toLowerCase(),
                language: locale.value === 'ru' ? 'original' : 'translated',
                period: 'today',
              }),
            }
          );

          if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
          }

          const data = await response.json();
          zodiacDescription.value =
            data.description || 'No description available.';
        } catch (error) {
          console.error('Error fetching zodiac description:', error);
          zodiacDescription.value =
            'An error occurred while fetching the description.';
        }
      };

      return {
        selectedZodiac,
        zodiacDescription,
        showZodiacDetail,
      };
    },
  };
</script>

<style>
  /* Глобальные стили */
</style>
