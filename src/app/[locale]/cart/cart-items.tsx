"use client";

import React, { useEffect, useState } from "react";
import { Button, Box, Typography, IconButton, CardMedia, Dialog, DialogActions, DialogContent } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartItemsProps {
  translations: {
    yourCart: string;
    cartEmpty: string;
    checkout: string;
    total: string;
    checkoutUnavailable: string;
  };
}

export const CartItems: React.FC<CartItemsProps> = ({ translations }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);  // State to control the dialog visibility

  // Fetch cart items from local storage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart-items") || "[]");
    setCartItems(storedItems);
  }, []);

  // Function to handle removing an item from the cart
  const handleRemoveItem = (itemId: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("cart-update"));
  };

  // Function to handle updating the quantity of an item
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart-items", JSON.stringify(updatedItems));
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle the checkout button click
  const handleCheckoutClick = () => {
    setDialogOpen(true);  // Open the dialog on checkout button click
  };

  // Function to close the dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        {translations.yourCart}
      </Typography>

      {/* Display cart items in a row layout */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
              padding: 2,
              marginBottom: 2,
            }}
          >
            {/* Item Image */}
            <CardMedia
              component="img"
              image={item.imageUrl.startsWith("/") ? item.imageUrl : `/${item.imageUrl}`}
              alt={item.name}
              sx={{
                width: 140,
                height: 140,
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: 2,
              }}
            />

            {/* Item Details */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                ${item.price.toFixed(2)}
              </Typography>

              {/* Quantity and Adjustment Buttons */}
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <Typography sx={{ margin: "0 10px" }}>{item.quantity}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </Box>
            </Box>

            {/* Delete Icon */}
            <IconButton
              onClick={() => handleRemoveItem(item.id)}
              color="error"
              sx={{ marginLeft: 2 }}
            >
              <Delete />
            </IconButton>
          </Box>
        ))
      ) : (
        <Typography variant="body1">{translations.cartEmpty}</Typography>
      )}

      {/* Display total price and checkout button */}
      <Box sx={{ marginTop: 3, textAlign: "center" }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {translations.total}: ${calculateTotalPrice().toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }} onClick={handleCheckoutClick}>
          {translations.checkout}
        </Button>
      </Box>

      {/* Dialog to show when the user clicks checkout */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          <Typography>
            {translations.checkoutUnavailable}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            X
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
