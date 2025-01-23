// components/SearchBar.tsx
'use client'; // This makes sure that this component is only rendered on the client

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const t = useTranslations('Search');

  const handleSearch = () => {
    if (query.trim()) {
      console.log('Search Query:', query); // Dummy function for now
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <p>{t('search')}</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={t('search_placeholder')}
      />
      <button onClick={handleSearch}>{t('search_button')}</button>
    </div>
  );
};

export default SearchBar;
