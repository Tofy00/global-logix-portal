
import { ru } from './ru';
import { en } from './en';
import { zh } from './zh';
import { tr } from './tr';

export type TranslationsType = {
  ru: typeof ru;
  en: typeof en;
  zh: typeof zh;
  tr: typeof tr;
};

export const translations: TranslationsType = {
  ru,
  en,
  zh,
  tr
};
