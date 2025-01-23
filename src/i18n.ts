import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'fr'];
 
export default getRequestConfig(async ({ requestLocale }) => {
  // eslint-disable-next-line prefer-const
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`../public/messages/${locale}.json`)).default
  };
});