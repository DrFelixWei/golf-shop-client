"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from './search-bar';
import { Product } from './types';
import data from './dummy-data.json';
import SearchResults from './search-results';
import Fuse from 'fuse.js';

interface SearchStateProps {
  translations: Record<string, string>;
}

const SearchState: React.FC<SearchStateProps> = ({ translations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // Load dummy data
  useEffect(() => {
    setSearchResults(data.products);
  }, []);

  const submitSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults(data.products); // Reset to all products if query is empty
      return;
    }

    // Initialize fuse.js with the product data and options
    const fuse = new Fuse(data.products, {
      keys: ['name'], // We want to search by product name
      threshold: 0.3, // Controls the fuzziness, lower is stricter, higher is looser
    });

    // Perform the search
    const result = fuse.search(searchQuery);
    const filteredResults = result.map((resultItem) => resultItem.item); // Extracting the item from fuse result

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <SearchBar
        translations={translations}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitSearch={submitSearch}
        resetSearch={() => setSearchResults(data.products)} // Reset products when clearing the search
      />

      <br />

      {searchResults.length > 0 ? (
        <SearchResults translations={translations} results={searchResults} />
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
          Sorry! No Products Match Your Search
        </div>
      )}
    </div>
  );
};

export default SearchState;
