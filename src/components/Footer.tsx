import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-pure-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-bright-pink to-rose-pink rounded-xl flex items-center justify-center">
                <span className="text-pure-white font-bold text-lg">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-bright-pink to-rose-pink bg-clip-text text-transparent">
                  EMSA
                </h3>
                <p className="text-sm text-gray-400">Premium Cleaning Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for high-quality, fragrant phenyl solutions. 
              Family-owned business committed to excellence and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pure-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#products" className="block text-gray-300 hover:text-bright-pink transition-colors text-sm">
                Our Products
              </a>
              <a href="#about" className="block text-gray-300 hover:text-bright-pink transition-colors text-sm">
                About Us
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-bright-pink transition-colors text-sm">
                Contact
              </a>
              <a href="https://wa.me/916304308774" target="_blank" rel="noopener noreferrer" className="block text-leaf-green hover:text-neon-green transition-colors text-sm">
                WhatsApp Support
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pure-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-leaf-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-leaf-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">WhatsApp</p>
                  <a href="https://wa.me/916304308774" className="text-leaf-green hover:text-neon-green transition-colors text-sm font-medium">
                    +91 6304308774
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-bright-pink/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-bright-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Business Hours</p>
                  <p className="text-gray-200 text-sm font-medium">24/7 WhatsApp Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 EMSA. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with care for your home&apos;s cleanliness
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <div className="w-2 h-2 bg-leaf-green rounded-full animate-pulse"></div>
                <span>Always Available</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <div className="w-2 h-2 bg-bright-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;