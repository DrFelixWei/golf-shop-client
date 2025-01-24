"use client";

import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';

interface SearchBarProps {
  placeholder: string;
  updateSearchQuery: (newValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  updateSearchQuery,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('User searched for:', searchQuery);
      updateSearchQuery(searchQuery)
    }
  };

  useEffect(() => {
    // updateSearchQuery(searchQuery)
  }, [searchQuery]); 

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      sx={{ marginTop: 2, width: '100%' }}
    >
      <TextField
        label={placeholder}
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        data-testid="search-input"
      />
    </Box>
  );
};

export default SearchBar;
