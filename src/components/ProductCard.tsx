'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, category, flavor, variant, price, moqPrice, size, description } = product;
  const { addToCart, isMoqApplied } = useCart();
  const [quantity, setQuantity] = useState(1);

  const currentPrice = isMoqApplied ? moqPrice : price;
  const savings = price - moqPrice;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const getProductIcon = () => {
    if (category === 'Phenyl') {
      return flavor === 'Rose' ? '🌹' : '🍋';
    }
    const iconMap: Record<string, string> = {
      'taski-r1-super': '🧽',
      'taski-r2': '🧹',
      'taski-r3': '🪟',
      'taski-r4-shine-up': '✨',
      'taski-r5': '🌸',
      'taski-r6': '🚿',
      'taski-r7': '🍳',
      'taski-r8': '🪣',
      'taski-r9': '🦠',
    };
    return iconMap[id] || '🧴';
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-secondary-100">
      <div className="relative h-40 w-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
        <div className="text-4xl animate-pulse">
          {getProductIcon()}
        </div>
        <div className="absolute top-2 left-2 bg-white/90 text-secondary-800 px-2 py-1 rounded-full text-xs font-semibold">
          {size}
        </div>
        {isMoqApplied && (
          <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Bulk
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="mb-3">
          <h3 className="text-sm font-bold text-secondary-900 mb-1 line-clamp-2">{name}</h3>
          {(flavor || variant) && (
            <p className="text-xs text-primary-600 font-medium mb-1">
              {flavor ? `${flavor} Scented` : variant}
            </p>
          )}
          <p className="text-xs text-secondary-600 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary-600">Price:</span>
            <div className="flex items-center gap-1">
              {isMoqApplied && (
                <span className="text-xs text-secondary-400 line-through">₹{price}</span>
              )}
              <span className="text-sm font-bold text-primary-600">₹{currentPrice}</span>
            </div>
          </div>
          {!isMoqApplied && (
            <div className="text-xs text-primary-600 mt-1">
              Save ₹{savings} on bulk orders!
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-center bg-secondary-50 rounded-lg p-1">
            <button
              onClick={decrementQuantity}
              className="w-6 h-6 rounded-md bg-white text-secondary-600 hover:bg-secondary-100 transition-colors flex items-center justify-center"
            >
              <MinusIcon className="h-3 w-3" />
            </button>
            <span className="flex-1 text-center font-semibold text-secondary-900 text-sm px-2">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-6 h-6 rounded-md bg-white text-secondary-600 hover:bg-secondary-100 transition-colors flex items-center justify-center"
            >
              <PlusIcon className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="mb-3 text-center">
          <div className="text-xs text-secondary-600">Subtotal</div>
          <div className="text-lg font-bold text-secondary-900">
            ₹{(currentPrice * quantity).toLocaleString()}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-1 text-sm"
        >
          <PlusIcon className="h-3 w-3" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;