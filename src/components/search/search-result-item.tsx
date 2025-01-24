// components/SearchResultItem.tsx
"use client";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { Product } from "./types";

type SearchResultItemProps = {
  product: Product;
  onCardClick: (id: number) => void;
};

export default function SearchResultItem({ product, onCardClick }: SearchResultItemProps) {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`); // Dummy cart action
  };

  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => onCardClick(product.id)}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddToCart} fullWidth>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
