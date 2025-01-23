import { useTranslations } from 'next-intl';
import SearchPage from "./search"

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p>


      <SearchPage/>



    </div>
  );
}
