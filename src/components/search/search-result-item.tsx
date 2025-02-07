"use client";

import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Product } from "./types";

interface SearchItemProps {
  item: Product;
  translations: Record<string, string>;
}

const SearchResultItem: React.FC<SearchItemProps> = ({ 
  item,
  translations
}) => {
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");
    // Find the item in the cart
    const existingItemIndex = cartItems.findIndex((cartItem: Product) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // Update the quantity of the existing item
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add the new item with all its properties
      const newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: 1,
      };
      cartItems.push(newItem);
    }
    // Update local storage and trigger the custom event
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cart-update"));
  };
      

  return (
    <Card
      key={item.id}
      sx={{
        maxWidth: 345,
        maxHeight: 400,
        margin: "auto",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 2,
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: 140,
            overflow: "hidden",
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
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 1,
            marginBottom: 1,
          }}
        >
          {item.name}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center" }}>
          ${item.price.toFixed(2)}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          sx={{ marginTop: 2 }}
        >
          {translations.addToCart}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
