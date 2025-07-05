
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Minus, 
  Plus,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: parseInt(id || '1'),
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 129.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 156,
    category: 'Electronics',
    badge: 'Best Seller',
    employeeOnly: false,
    inStock: true,
    stockCount: 23,
    description: 'Experience premium sound quality with these wireless Bluetooth headphones featuring advanced noise cancellation technology. Perfect for work, travel, or leisure.',
    features: [
      'Advanced Noise Cancellation',
      '30-hour Battery Life',
      'Quick Charge Technology',
      'Premium Comfort Padding',
      'Voice Assistant Compatible',
      'Foldable Design for Travel'
    ],
    specifications: {
      'Brand': 'AudioTech Pro',
      'Model': 'AT-WH1000',
      'Connectivity': 'Bluetooth 5.0, 3.5mm Jack',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Warranty': '2 years'
    },
    deliveryInfo: {
      standard: '3-5 business days',
      express: '1-2 business days',
      employee: 'Next business day (Free for employees)'
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      rating: 5,
      date: '2024-01-15',
      title: 'Excellent quality!',
      comment: 'These headphones exceeded my expectations. The sound quality is amazing and the noise cancellation works perfectly.',
      verified: true
    },
    {
      id: 2,
      user: 'John D.',
      rating: 4,
      date: '2024-01-10',
      title: 'Great for work',
      comment: 'Perfect for my daily commute and video calls. Battery life is impressive.',
      verified: true
    },
    {
      id: 3,
      user: 'Emily R.',
      rating: 5,
      date: '2024-01-08',
      title: 'Love them!',
      comment: 'Comfortable to wear for long periods. The employee discount made it even better!',
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      rating: 4.7
    },
    {
      id: 4,
      name: 'USB-C Hub',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop',
      rating: 4.6
    }
  ];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedImageIndex 
                        ? 'bg-blue-500' 
                        : 'bg-white/50 dark:bg-gray-600/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    index === selectedImageIndex
                      ? 'border-blue-500'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              {product.badge && (
                <Badge className="mb-3 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
                  {product.badge}
                </Badge>
              )}
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {product.rating}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-blue-500">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="text-sm">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    In Stock ({product.stockCount} available)
                  </span>
                </>
              ) : (
                <>
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    Out of Stock
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 dark:text-white font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-lg font-medium min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? 'text-red-500 border-red-500' : ''}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Free Delivery</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {product.deliveryInfo.standard}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">2 Year Warranty</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full manufacturer warranty
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">30-Day Returns</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Easy returns and exchanges
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
            <TabsTrigger value="delivery">Delivery & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <span className="font-medium text-gray-900 dark:text-white">{key}</span>
                      <span className="text-gray-600 dark:text-gray-400">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {review.user}
                          </span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      {review.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {review.comment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Delivery Options
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Standard Delivery</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Free for orders over $50</p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {product.deliveryInfo.standard}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Express Delivery</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Additional $9.99</p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {product.deliveryInfo.express}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Employee Priority</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Free for all employees</p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {product.deliveryInfo.employee}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Returns Policy
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p>• 30-day return window from delivery date</p>
                    <p>• Items must be in original condition and packaging</p>
                    <p>• Free return shipping for defective items</p>
                    <p>• Refunds processed within 5-7 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-500 transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-500">
                      ${relatedProduct.price}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                        {relatedProduct.rating}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
