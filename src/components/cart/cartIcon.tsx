"use client";

import { useEffect, useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function CartIcon() {
  const router = useRouter();
  const [cartItemCount, setCartItemCount] = useState(0);

  const getCartItemCount = () => {
    const cartItems = localStorage.getItem('cart-items');
    return cartItems ? JSON.parse(cartItems).length : 0;
  };

  useEffect(() => {
    setCartItemCount(getCartItemCount());
  
    const handleCartUpdate = () => {
      setCartItemCount(getCartItemCount());
    };
  
    window.addEventListener("cart-update", handleCartUpdate);
  
    return () => {
      window.removeEventListener("cart-update", handleCartUpdate);
    };
  }, []);
  

  const navigateToCart = () => {
    router.push('/cart');
  };

  return (
    <IconButton onClick={navigateToCart} color="inherit">
      <Badge
        badgeContent={cartItemCount}
        color="error"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}
