import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig( async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locales.includes(locale as any)) {
        return notFound();
    }    

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});