"use client";

import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from './types';

interface SearchItemProps {
  item: Product;
}

const SearchResultItem: React.FC<SearchItemProps> = ({ item }) => {
  return (
    <Card
      key={item.id}
      sx={{
        maxWidth: 345,
        margin: 'auto',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.imageUrl}
        alt={item.name}
        sx={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 1,
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          ${item.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
