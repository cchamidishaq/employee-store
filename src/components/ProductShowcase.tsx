
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      rating: 4.8,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      rating: 4.9,
      badge: 'Employee Exclusive'
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      rating: 4.7,
      badge: 'New Arrival'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      rating: 4.6,
      badge: 'Popular'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our most popular items loved by employees and customers alike
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  product.badge === 'Employee Exclusive' 
                    ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200'
                    : product.badge === 'Best Seller'
                    ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200'
                    : 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200'
                }`}>
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Quick Add Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white/90 hover:bg-white text-gray-900 rounded-full px-6 py-2 shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    ({product.rating})
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-500">
                    ${product.price}
                  </span>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3 rounded-lg border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
