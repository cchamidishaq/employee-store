
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Heart,
  Grid3X3,
  LayoutList,
  SlidersHorizontal
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showEmployeeOnly, setShowEmployeeOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'Electronics', 'Accessories', 'Office Supplies', 'Health & Wellness', 
    'Books', 'Clothing', 'Home & Garden', 'Sports'
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      category: 'Electronics',
      badge: 'Best Seller',
      employeeOnly: false,
      inStock: true,
      description: 'Premium wireless headphones with noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'Electronics',
      badge: 'Employee Exclusive',
      employeeOnly: true,
      inStock: true,
      description: 'Advanced fitness tracking with heart rate monitor'
    },
    {
      id: 3,
      name: 'Ergonomic Laptop Stand',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 234,
      category: 'Office Supplies',
      badge: 'New Arrival',
      employeeOnly: false,
      inStock: true,
      description: 'Adjustable aluminum laptop stand for better posture'
    },
    {
      id: 4,
      name: 'Premium Coffee Maker',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 167,
      category: 'Accessories',
      badge: 'Sale',
      employeeOnly: false,
      inStock: false,
      description: 'Professional-grade coffee maker with timer'
    },
    {
      id: 5,
      name: 'Wireless Mouse & Keyboard Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 312,
      category: 'Electronics',
      employeeOnly: false,
      inStock: true,
      description: 'Ergonomic wireless combo for productivity'
    },
    {
      id: 6,
      name: 'Standing Desk Converter',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 78,
      category: 'Office Supplies',
      badge: 'Employee Exclusive',
      employeeOnly: true,
      inStock: true,
      description: 'Height-adjustable desk converter for healthier work'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesEmployeeFilter = !showEmployeeOnly || product.employeeOnly;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesEmployeeFilter;
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <Badge className={`text-xs ${
              product.badge === 'Employee Exclusive' 
                ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200'
                : product.badge === 'Best Seller'
                ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200'
                : product.badge === 'Sale'
                ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'
                : 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200'
            }`}>
              {product.badge}
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Add Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="bg-white/90 hover:bg-white text-gray-900 rounded-full px-6 py-2 shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Quick Add' : 'Out of Stock'}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
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
            ({product.reviews})
          </span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-500 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-500">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            disabled={!product.inStock}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Products</h1>
          <p className="text-gray-600 dark:text-gray-400">Discover our complete product catalog</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories Filter */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-white">
                Categories
                <SlidersHorizontal className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 mt-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <label 
                      htmlFor={category}
                      className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Employee Only Filter */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 dark:text-white">Special Filters</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="employee-only"
                  checked={showEmployeeOnly}
                  onCheckedChange={setShowEmployeeOnly}
                />
                <label 
                  htmlFor="employee-only"
                  className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  Employee Exclusive Only
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredProducts.length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* View Toggle */}
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="p-2"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="p-2"
                  >
                    <LayoutList className="w-4 h-4" />
                  </Button>
                </div>

                {/* Sort Dropdown */}
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
