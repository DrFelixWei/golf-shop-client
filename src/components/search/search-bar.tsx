"use client"

import React from 'react';
import { Box, TextField } from '@mui/material';

interface SearchBarProps {
  translations: Record<string, string>;
  searchQuery: string
  setSearchQuery: (newValue: string) => void
  submitSearch: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  translations,
  searchQuery,
  setSearchQuery,
  submitSearch,
}) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      if (searchQuery.trim() !== '') {
        console.log('User searched for:', searchQuery);
        submitSearch()
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
        <TextField
          label={translations.label}
          placeholder={translations.placeholder}
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          data-testid="search-input"
        />
      </Box>

    </div>
  );
  
}

export default SearchBar