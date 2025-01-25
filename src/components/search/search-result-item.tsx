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
        maxHeight: 400,
        margin: 'auto',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', 
            height: '100%',
            overflow: 'hidden', 
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <CardMedia
            component="img"
            image={item.imageUrl}
            alt={item.name}
            sx={{
                width: 140, 
                height: 140,
                objectFit: 'cover', 
            }}
          />
        </Box>
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
