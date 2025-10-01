'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the types
interface Product {
  id: string;
  name: string;
  category: 'Phenyl' | 'Room Care';
  flavor?: 'Rose' | 'Lime';
  variant?: string;
  price: number;
  moqPrice: number;
  size: string;
  image?: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}



interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalPrice: number;
  totalQuantity: number;
  isMoqApplied: boolean;
  isCartOpen: boolean;
  toggleCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const isMoqApplied = totalQuantity >= 8;

  const getPrice = (item: Product) => (isMoqApplied ? item.moqPrice : item.price);

  const totalPrice = cartItems.reduce((acc, item) => acc + getPrice(item) * item.quantity, 0);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalQuantity,
        isMoqApplied,
        isCartOpen,
        toggleCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
