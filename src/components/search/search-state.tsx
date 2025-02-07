"use client"

import React, { useState, useEffect } from 'react';
import SearchBar from './search-bar';
import { Product } from './types'
import data from './dummy-data.json'
import SearchResults from './search-results';

interface SearchStateProps {
  translations: Record<string, string>;
}

const SearchState: React.FC<SearchStateProps> = ({
  translations
}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([])

  // Loading in dummy data
  useEffect(() => {
    setSearchResults(data.products)
  }, []); 

  const submitSearch = () => {
    // call the api

    // with dummy data just randomize the order
    const shuffledResults = [...searchResults].sort(() => Math.random() - 0.5);
    setSearchResults(shuffledResults);
  }

  return (
    <div>
      <SearchBar
        translations={translations}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitSearch={submitSearch}
      />

      <br/>

      <SearchResults
        translations={translations}
        results={searchResults}
      />

    </div>
  );
  
}

export default SearchState