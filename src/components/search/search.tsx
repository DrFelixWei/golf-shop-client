import { useState } from 'react';
import { useTranslations } from 'next-intl'; // Assuming you're using next-intl for translations
import SearchBar from './search-bar'; // Make sure the path is correct

export default function Search() {
  const t = useTranslations('Search');
  
  // Use React state to manage searchQuery
  const [searchQuery, setSearchQuery] = useState('');

  // Update function to be passed down to the child
  const updateSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <div>
      <SearchBar 
        placeholder={t('search')} 
        updateSearchQuery={updateSearchQuery} 
      />

      {/* <SearchResults products={filteredProducts} /> */}
    </div>
  );
}
