<template>
  <div class="p-4">
    <button
      @click="$emit('back')"
      class="mb-4 text-blue-500 hover:text-blue-700"
    >
      Назад
    </button>
    <h2 class="text-2xl font-bold mb-4">{{ sign.name }}</h2>
    <p class="text-gray-700">{{ horoscope }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      sign: Object,
      language: String,
    },
    data() {
      return {
        horoscope: '',
      };
    },
    created() {
      this.fetchHoroscope();
    },
    watch: {
      sign: 'fetchHoroscope',
      language: 'fetchHoroscope',
    },
    methods: {
      fetchHoroscope() {
        axios
          .post('https://example.com/api/horoscope', {
            sign: this.sign.name.toLowerCase(),
            language: this.language === 'ru' ? 'original' : 'translated',
            period: 'today',
          })
          .then(response => {
            this.horoscope = response.data.horoscope;
          });
      },
    },
  };
</script>
