"use client"

import React, { useState, useEffect } from 'react';
import SearchResultItem from './search-result-item';
import { Product } from './types'

interface SearchResultsProps {
  results: Product[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results
}) => {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}
    >
      {results.map((result: any) => (
        <SearchResultItem
            item={result}
        />
      ))}
    </div>
  );
  
}

export default SearchResults