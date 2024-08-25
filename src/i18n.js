import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    zodiac: 'Zodiac',
    description: 'Description',
    back: 'Back',
    switchLanguage: 'Switch Language',
  },
  ru: {
    zodiac: 'Зодиак',
    description: 'Описание',
    back: 'Назад',
    switchLanguage: 'Переключить язык',
  },
};

export const i18n = createI18n({
  locale: 'en',
  messages,
});
