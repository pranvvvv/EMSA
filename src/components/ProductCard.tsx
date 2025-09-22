'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface Product {
  name: string;
  flavor: 'Rose' | 'Lime';
  price: number;
  moqPrice: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, flavor, price } = product;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const isRose = flavor === 'Rose';
  const accentColorClass = isRose ? 'bg-bright-pink' : 'bg-leaf-green';
  const textColorClass = isRose ? 'text-bright-pink' : 'text-leaf-green';
  const gradientClass = isRose 
    ? 'bg-gradient-to-br from-light-pink to-rose-pink' 
    : 'bg-gradient-to-br from-lime-200 to-neon-green';

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} x ${name} added to cart!`);
  };

  return (
    <div className="group bg-pure-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in">
      <div className={`relative h-64 w-full ${gradientClass} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="relative text-6xl animate-bounce-gentle">
          {isRose ? '🌹' : '🍋'}
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-pure-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            5L
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Premium Quality
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">Regular Price:</span>
            <span className="text-2xl font-bold text-gray-800">₹{price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Bulk price (8+ bottles):</span>
            <span className={`text-lg font-bold ${textColorClass}`}>₹{product.moqPrice}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <label htmlFor={`quantity-${name}`} className="text-sm font-semibold text-gray-700">
            Quantity:
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              −
            </button>
            <input
              type="number"
              id={`quantity-${name}`}
              name={`quantity-${name}`}
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
              className="w-16 px-3 py-2 text-center border-0 focus:ring-0 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full ${accentColorClass} text-pure-white py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;