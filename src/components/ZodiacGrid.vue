<template>
  <div class="grid grid-cols-2 gap-4 p-4">
    <ZodiacCard
      v-for="sign in zodiacSigns"
      :key="sign.name"
      :sign="sign"
      @click="showDetails(sign)"
    />
  </div>
</template>

<script>
  import ZodiacCard from './ZodiacCard.vue';

  export default {
    components: { ZodiacCard },
    data() {
      return {
        zodiacSigns: [
          {
            name: 'Aries',
            period: 'March 21 - April 19',
            icon: './assets/image/aries.jpg',
          },
          { name: 'Taurus', period: 'April 20 - May 20', icon: 'taurus.png' },
          { name: 'Gemini', period: 'May 21 - June 20', icon: 'gemini.png' },
          { name: 'Cancer', period: 'June 21 - July 22', icon: 'cancer.png' },
          { name: 'Leo', period: 'July 23 - August 22', icon: 'leo.png' },
          {
            name: 'Virgo',
            period: 'August 23 - September 22',
            icon: 'virgo.png',
          },
          {
            name: 'Libra',
            period: 'September 23 - October 22',
            icon: 'libra.png',
          },
          {
            name: 'Scorpio',
            period: 'October 23 - November 21',
            icon: 'scorpio.png',
          },
          {
            name: 'Sagittarius',
            period: 'November 22 - December 21',
            icon: 'sagittarius.png',
          },
          {
            name: 'Capricorn',
            period: 'December 22 - January 19',
            icon: 'capricorn.png',
          },
          {
            name: 'Aquarius',
            period: 'January 20 - February 18',
            icon: 'aquarius.png',
          },
          {
            name: 'Pisces',
            period: 'February 19 - March 20',
            icon: 'pisces.png',
          },
        ],
      };
    },
    methods: {
      showDetails(sign) {
        this.$emit('select-sign', sign);
      },
    },
  };
</script>
