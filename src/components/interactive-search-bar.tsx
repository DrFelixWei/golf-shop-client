"use client";

import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

interface InteractiveSearchBarProps {
  placeholder: string;
}

const InteractiveSearchBar: React.FC<InteractiveSearchBarProps> = ({
  placeholder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('User searched for:', searchQuery);
    }
  };

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

export default InteractiveSearchBar;
