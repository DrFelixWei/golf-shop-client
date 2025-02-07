"use client"

import React from 'react';
import SearchResultItem from './search-result-item';
import { Product } from './types'

interface SearchResultsProps {
  results: Product[]
  translations: Record<string, string>;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  translations
}) => {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}
    >
      {results.map((result: Product) => (
        <SearchResultItem
            key={result.id}
            item={result}
            translations={translations}
        />
      ))}
    </div>
  );
  
}

export default SearchResults