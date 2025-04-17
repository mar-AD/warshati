
import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale, localeDetection } from './config';

export const routing = defineRouting({
    locales,
    defaultLocale,
    localeDetection
});
