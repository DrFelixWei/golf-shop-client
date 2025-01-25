import { useTranslations } from 'next-intl';
import SearchState from './search-state';

export default function Search() {
  const t = useTranslations('Search');

  return (
    <div>
      <SearchState
          translations={{
            searchLabel: t('label'), 
            placeholder: t('placeholder'), 
          }}
      />


    </div>
  );

}
