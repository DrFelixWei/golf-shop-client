import { useTranslations } from 'next-intl';
import InteractiveSearchBar from './interactive-search-bar';

export default function SearchBar() {
  const t = useTranslations('Search');

  return (
    <div>
      <InteractiveSearchBar
        placeholder={t('search')}
      />
    </div>
  );
}
