'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalQuantity, isMoqApplied } = useCart();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    phone: '',
    pincode: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!customerDetails.name || !customerDetails.address || !customerDetails.phone || !customerDetails.pincode) {
      alert('Please fill in all required fields.');
      return;
    }

    const orderDetails = cartItems.map(item => `- ${item.name} x ${item.quantity}`).join('\n');
    const moqMessage = isMoqApplied ? ' (MOQ discount applied)' : '';

    const message = `
New Order Request 🚀
Name: ${customerDetails.name}
Address: ${customerDetails.address}, ${customerDetails.pincode}
Phone: ${customerDetails.phone}

Order Details:
${orderDetails}

Total: ₹${totalPrice.toFixed(2)}${moqMessage}

Notes: ${customerDetails.notes || 'None'}
    `;

    const whatsappUrl = `https://wa.me/916304308774?text=${encodeURIComponent(message.trim())}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Cart Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-pink-500 to-rose-500 text-white shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
            {totalQuantity > 0 && (
              <p className="text-xs sm:text-sm opacity-90">{totalQuantity} items</p>
            )}
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="text-4xl sm:text-6xl mb-4">🛒</div>
              <p className="text-gray-500 text-base sm:text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <>
              {/* MOQ Notice */}
              {isMoqApplied && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-600 font-semibold text-xs sm:text-sm">Bulk discount applied!</span>
                  </div>
                  <p className="text-green-600 text-xs mt-1">You&apos;ve unlocked bulk pricing for 8+ bottles</p>
                </div>
              )}
              
              {cartItems.map(item => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-3 sm:p-4 transition-all duration-200 hover:shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base truncate">{item.name}</h4>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-2">
                          <span>{item.flavor === 'Rose' ? '🌹' : '🍋'}</span>
                          <span>5L Bottle</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-base sm:text-lg font-bold text-gray-800">
                        ₹{(isMoqApplied ? item.moqPrice : item.price) * item.quantity}
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors text-xs sm:text-base"
                          >
                            −
                          </button>
                          <span className="w-8 h-6 sm:w-12 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors text-xs sm:text-base"
                          >
                            +
                          </button>
                        </div>
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Checkout Section */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
            {/* Total */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-lg font-semibold text-gray-800">Total Amount:</span>
                <span className="text-lg sm:text-2xl font-bold text-gray-800">₹{totalPrice.toFixed(2)}</span>
              </div>
              {isMoqApplied && (
                <div className="text-xs sm:text-sm text-green-600 font-semibold">
                  Bulk discount applied • {totalQuantity} bottles
                </div>
              )}
            </div>

            {/* Customer Details Form */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Delivery Details</h3>
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={customerDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all text-sm sm:text-base"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                  value={customerDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all text-sm sm:text-base"
                />
                <textarea
                  name="address"
                  placeholder="Complete Address *"
                  value={customerDetails.address}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all resize-none text-sm sm:text-base"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode *"
                  value={customerDetails.pincode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all text-sm sm:text-base"
                />
                <textarea
                  name="notes"
                  placeholder="Special instructions (optional)"
                  value={customerDetails.notes}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all resize-none text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              <span>Checkout via WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
