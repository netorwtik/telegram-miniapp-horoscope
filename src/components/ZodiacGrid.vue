<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <ZodiacCard
      v-for="zodiac in zodiacs"
      :key="zodiac.name"
      :name="zodiac.name"
      :period="zodiac.period"
      :icon="zodiac.icon"
      @click="showDetails(zodiac)"
    />
  </div>
</template>

<script>
  import { useI18n } from 'vue-i18n';
  import ZodiacCard from './ZodiacCard.vue';

  export default {
    components: { ZodiacCard },
    setup(_, { emit }) {
      const { t } = useI18n();

      const zodiacs = [
        {
          name: t('zodiac.aries'),
          period: t('period.aries'),
          icon: 'aries.png',
        },
        {
          name: t('zodiac.taurus'),
          period: t('period.taurus'),
          icon: 'taurus.png',
        },
        // остальные знаки
      ];

      const showDetails = zodiac => {
        emit('show-details', zodiac);
      };

      return {
        zodiacs,
        showDetails,
      };
    },
  };
</script>

<style scoped>
  /* Адаптивные стили для сетки */
</style>
