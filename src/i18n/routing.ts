
import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
    locales,
    defaultLocale,
    localeDetection: false,
    localePrefix: 'as-needed'
});
