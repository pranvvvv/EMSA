'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCartOpen, toggleCart } = useCart();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default AppLayout;