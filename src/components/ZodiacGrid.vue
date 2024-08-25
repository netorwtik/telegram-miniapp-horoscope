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
          { name: 'Aries', period: 'March 21 - April 19', icon: 'aries.png' },
          { name: 'Taurus', period: 'April 20 - May 20', icon: 'taurus.png' },
          // ...добавьте остальные знаки
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
