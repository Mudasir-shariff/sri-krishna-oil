"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('sri-raksha-cart');
    if (saved) {
      try { setCart(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  // Save to local storage when cart changes
  useEffect(() => {
    localStorage.setItem('sri-raksha-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant, price) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.variant === variant 
            ? { ...item, qty: item.qty + 1 } 
            : item
        );
      }
      return [...prev, { ...product, variant, price, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart((prev) => prev.filter(item => !(item.id === id && item.variant === variant)));
  };

  const updateQty = (id, variant, qty) => {
    if (qty < 1) {
      removeFromCart(id, variant);
      return;
    }
    setCart((prev) => prev.map(item => 
      item.id === id && item.variant === variant 
        ? { ...item, qty } 
        : item
    ));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider value={{
      cart, isCartOpen, setIsCartOpen,
      addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
