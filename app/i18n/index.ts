import { defaultLocale } from './config';
import en from './translations/en.json';
import gu from './translations/gu.json';

const translations = {
  en,
  gu
};

export function getTranslations(locale: string = defaultLocale) {
  return translations[locale as keyof typeof translations] || translations[defaultLocale];
}

export function translate(key: string, locale: string = defaultLocale): string {
  const keys = key.split('.');
  let translation: any = getTranslations(locale);
  
  for (const k of keys) {
    if (!translation[k]) {
      return key; // Return the key if translation not found
    }
    translation = translation[k];
  }
  
  return translation;
}