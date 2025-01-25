"use client"

import React, { useState, useEffect } from 'react';
import SearchBar from './search-bar';

interface SearchStateProps {
  translations: any  // is an object containing strings for translations
}

const SearchState: React.FC<SearchStateProps> = ({
  translations
}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null)

  const submitSearch = () => {
    // call the api
  }

  return (
    <div>
      <SearchBar
        translations={translations}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitSearch={submitSearch}
      />


    </div>
  );
  
}

export default SearchState