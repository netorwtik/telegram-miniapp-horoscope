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
        {
          name: t('zodiac.gemini'),
          period: t('period.gemini'),
          icon: 'gemini.png',
        },
        {
          name: t('zodiac.cancer'),
          period: t('period.cancer'),
          icon: 'cancer.png',
        },
        {
          name: t('zodiac.leo'),
          period: t('period.leo'),
          icon: 'leo.png',
        },
        {
          name: t('zodiac.virgo'),
          period: t('period.virgo'),
          icon: 'virgo.png',
        },
        {
          name: t('zodiac.libra'),
          period: t('period.libra'),
          icon: 'libra.png',
        },
        {
          name: t('zodiac.scorpio'),
          period: t('period.scorpio'),
          icon: 'scorpio.png',
        },
        {
          name: t('zodiac.sagittarius'),
          period: t('period.sagittarius'),
          icon: 'sagittarius.png',
        },
        {
          name: t('zodiac.capricorn'),
          period: t('period.capricorn'),
          icon: 'capricorn.png',
        },
        {
          name: t('zodiac.aquarius'),
          period: t('period.aquarius'),
          icon: 'aquarius.png',
        },
        {
          name: t('zodiac.pisces'),
          period: t('period.pisces'),
          icon: 'pisces.png',
        },
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

<style scoped></style>
