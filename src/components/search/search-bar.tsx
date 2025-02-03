"use client"

import React from 'react';
import { Box } from '@mui/material';

interface SearchBarProps {
  translations: Record<string, string>;
  searchQuery: string;
  setSearchQuery: (newValue: string) => void;
  submitSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  translations,
  searchQuery,
  setSearchQuery,
  submitSearch,
}) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchQuery.trim() !== '') {
        console.log('User searched for:', searchQuery);
        submitSearch();
      }
    }
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        sx={{ marginTop: 2, width: '100%' }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={translations.placeholder}
          aria-label={translations.label}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: 'var(--background)', 
            color: 'var(--foreground)', 
          }}
          data-testid="search-input"
        />
      </Box>
    </div>
  );
};

export default SearchBar;
