import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'lct2024',
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  localePrefix,
};
