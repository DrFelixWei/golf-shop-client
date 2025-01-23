// pages/search.tsx
import SearchBar from '@/components/search-bar';
import { useTranslations } from 'next-intl';

const SearchPage = () => {
  const t = useTranslations('Search');

  return (
    <div>
      <h1>{t('page_title')}</h1>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
