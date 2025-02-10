"use client";

import React from 'react';
import { Box, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
  translations: Record<string, string>;
  searchQuery: string;
  setSearchQuery: (newValue: string) => void;
  submitSearch: () => void;
  resetSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  translations,
  searchQuery,
  setSearchQuery,
  submitSearch,
  resetSearch,
}) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchQuery.trim() !== '') {
        console.log('User searched for:', searchQuery);
        submitSearch();
      }
    }
  };

  const handleClearSearch = () => {
    setSearchQuery(''); // Clear the search query
    resetSearch(); // Reset the search results to show all products
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        sx={{ marginTop: 2, width: '100%', position: 'relative' }} // Relative positioning
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
            paddingRight: '30px', // Space for the "x" button
          }}
          data-testid="search-input"
        />
        {searchQuery && (
          <IconButton 
            onClick={handleClearSearch} 
            aria-label="clear search" 
            sx={{
              position: 'absolute', 
              right: '8px', // Position inside the input field
              top: '50%', 
              transform: 'translateY(-50%)',
            }}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Box>
    </div>
  );
};

export default SearchBar;
