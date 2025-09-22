'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { totalQuantity, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: 'products', label: 'Our Products' },
    { href: 'about', label: 'About Us' },
    { href: 'contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-pure-white/80 backdrop-blur-md shadow-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-bright-pink to-rose-pink rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-pure-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-bright-pink to-rose-pink bg-clip-text text-transparent">
                EMSA
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Premium Cleaning Solutions</p>
            </div>
          </div>          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="relative text-gray-700 hover:text-bright-pink transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-bright-pink/5 group"
            >
              <span className="relative z-10">Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-bright-pink/10 to-rose-pink/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 hover:text-bright-pink transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-bright-pink/5 group"
            >
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-bright-pink/10 to-rose-pink/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-700 hover:text-bright-pink transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-bright-pink/5 group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-bright-pink/10 to-rose-pink/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <a
              href="https://wa.me/916304308774"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-leaf-green to-neon-green text-pure-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-leaf-green/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <button 
              onClick={toggleCart} 
              className="relative p-3 rounded-2xl bg-gradient-to-br from-leaf-green to-neon-green text-pure-white hover:shadow-lg hover:shadow-leaf-green/25 transition-all duration-300 transform hover:scale-105 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-pink to-bright-pink text-pure-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce shadow-lg">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Modern Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden">
            <div 
              className="absolute inset-0" 
              onClick={toggleMobileMenu}
            />
            <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        scrollToSection(item.href);
                        toggleMobileMenu();
                      }}
                      className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-leaf-green hover:to-neon-green hover:text-white transition-all duration-300 transform hover:scale-[1.02] group"
                    >
                      <span className="font-medium group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {item.label}
                      </span>
                    </button>
                  ))}
                  
                  {/* WhatsApp Button in Mobile Menu */}
                  <a
                    href="https://wa.me/916304308774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white text-center font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                      </svg>
                      <span>WhatsApp</span>
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;