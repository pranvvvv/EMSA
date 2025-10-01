import ProductCard from '@/components/ProductCard';
import { phenylProducts, roomCareProducts } from '@/data/products';

export default function Home() {

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-primary-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                EMSA
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary-700 to-secondary-900 bg-clip-text text-transparent">
                Premium Cleaning
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional-grade <span className="font-semibold text-primary-600">cleaning solutions</span> for 
              <span className="font-semibold text-primary-700"> homes and businesses</span>. From phenyl to specialized room care products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#products" 
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Shop Now</span>
              </a>
              <a 
                href="https://wa.me/916304308774" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary-800 font-bold py-4 px-8 rounded-full border-2 border-secondary-200 hover:border-primary-500 hover:text-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                </svg>
                <span>Get Quote</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 text-pure-white" viewBox="0 0 1200 120" fill="currentColor">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Phenyl Products */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  Premium Phenyl Collection
                </span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Long-lasting fragrance floor cleaners for homes and commercial spaces
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {phenylProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Room Care Products */}
          <div>
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-secondary-700 to-secondary-900 bg-clip-text text-transparent">
                  Professional Room Care
                </span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Specialized cleaning solutions for every surface and space
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {roomCareProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Info Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl">💰</div>
          <div className="absolute bottom-20 right-20 text-6xl">📦</div>
          <div className="absolute top-32 right-32 text-4xl">✨</div>
          <div className="absolute bottom-32 left-32 text-4xl">🎯</div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
              Bulk Order Benefits
            </h2>
            <p className="text-lg md:text-xl text-secondary-700 mb-6">
              Order <span className="font-bold text-primary-600">8 or more bottles</span> from any category and unlock wholesale pricing!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="font-bold text-primary-800 mb-2">Phenyl Products</h3>
                <div className="flex items-center justify-center gap-4 text-lg font-bold">
                  <span className="bg-secondary-100 px-4 py-2 rounded-lg text-secondary-500 line-through">₹450</span>
                  <span className="text-primary-600">→</span>
                  <span className="bg-primary-100 px-4 py-2 rounded-lg text-primary-700">₹350</span>
                </div>
                <p className="text-sm text-primary-600 mt-2">Save ₹100 per bottle!</p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-xl">
                <h3 className="font-bold text-secondary-800 mb-2">Room Care Products</h3>
                <div className="flex items-center justify-center gap-4 text-lg font-bold">
                  <span className="bg-secondary-100 px-4 py-2 rounded-lg text-secondary-500 line-through">₹1649</span>
                  <span className="text-secondary-600">→</span>
                  <span className="bg-secondary-100 px-4 py-2 rounded-lg text-secondary-700">₹1499</span>
                </div>
                <p className="text-sm text-secondary-600 mt-2">Save ₹150 per bottle!</p>
              </div>
            </div>
            <div className="bg-primary-100 p-4 rounded-xl">
              <p className="text-sm text-primary-800 font-medium">
                🎯 Mix and match any products to reach the 8-bottle minimum!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-baby-blue to-light-pink">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-br from-bright-pink to-rose-pink p-4 rounded-2xl">
                <svg className="w-8 h-8 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12M13 7a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About EMSA</h2>
            <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We are a <span className="font-semibold text-bright-pink">family-owned business</span> dedicated to providing 
                high-quality, effective, and fragrant cleaning solutions for your home. Our phenyl is made with the 
                <span className="font-semibold text-leaf-green"> finest ingredients</span> to ensure a safe and 
                sparkling clean environment for you and your loved ones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  <h3 className="font-semibold text-gray-800">Natural Ingredients</h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <h3 className="font-semibold text-gray-800">Premium Quality</h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💚</div>
                  <h3 className="font-semibold text-gray-800">Eco-Friendly</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-br from-leaf-green to-neon-green p-4 rounded-2xl">
                <svg className="w-8 h-8 text-pure-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-secondary-700 mb-8">
                Have questions about our products or want to place a custom order? We&apos;d love to hear from you!
              </p>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/916304308774" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                    </svg>
                    <span>Contact Us on WhatsApp</span>
                  </div>
                  <div className="text-sm opacity-90 mt-1">+91 6304308774</div>
                </a>
                
                {/* Additional Contact Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <h4 className="font-semibold text-secondary-800 mb-2">📞 Call Us</h4>
                    <div className="space-y-1 text-sm text-secondary-600">
                      <a href="tel:+917330781970" className="block hover:text-primary-600">+91 7330781970</a>
                      <a href="tel:+916281055637" className="block hover:text-primary-600">+91 6281055637</a>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <h4 className="font-semibold text-secondary-800 mb-2">📍 Location</h4>
                    <p className="text-sm text-secondary-600">Bopu Nagar, Langar Houz</p>
                    <p className="text-sm text-secondary-600">Near Mahankalamma Temple</p>
                    <p className="text-xs text-secondary-500 mt-1">Hyderabad - 500008</p>
                  </div>
                </div>
                
                <div className="text-secondary-600 text-center">
                  <p className="text-sm">💬 Quick responses • 📞 Direct contact • 🚚 Fast delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
