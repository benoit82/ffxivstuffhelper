import i18next from 'i18next';
import common_en from '@/translations/en/common.json';
import common_fr from '@/translations/fr/common.json';
import { store } from './redux';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: store.getState().user.favLng || 'en',
  resources: {
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
  },
});

export default i18next;
