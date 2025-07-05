
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Heart,
  ArrowRight,
  Tag,
  Truck
} from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      quantity: 2,
      category: 'Electronics',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      quantity: 1,
      category: 'Electronics',
      inStock: true
    },
    {
      id: 3,
      name: 'Ergonomic Laptop Stand',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      quantity: 1,
      category: 'Office Supplies',
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === 'SAVE10') {
      setAppliedPromo({ code: 'SAVE10', discount: 0.1, description: '10% off' });
    } else if (promoCode === 'EMPLOYEE20') {
      setAppliedPromo({ code: 'EMPLOYEE20', discount: 0.2, description: '20% Employee Discount' });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Shopping Cart</h1>
          <p className="text-gray-600 dark:text-gray-400">{cartItems.length} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Your cart is empty</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Add some products to get started</p>
            <Link to="/products">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
                            {!item.inStock && (
                              <Badge variant="destructive" className="mt-1">Out of Stock</Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-blue-500">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${(item.originalPrice * item.quantity).toFixed(2)}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <Tag className="w-5 h-5 inline mr-2" />
                    Promo Code
                  </h3>
                  
                  {appliedPromo ? (
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div>
                        <p className="font-medium text-green-800 dark:text-green-200">{appliedPromo.code}</p>
                        <p className="text-sm text-green-600 dark:text-green-300">{appliedPromo.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setAppliedPromo(null)}
                        className="text-green-600 hover:text-green-700"
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={applyPromoCode}>
                        Apply
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {appliedPromo && (
                      <div className="flex justify-between text-green-600 dark:text-green-400">
                        <span>Discount ({appliedPromo.description})</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                        <span className="text-lg font-bold text-blue-500">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center text-blue-700 dark:text-blue-300">
                        <Truck className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          Add ${(100 - subtotal).toFixed(2)} more for free shipping
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6 space-y-3">
                    <Link to="/checkout">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    
                    <Link to="/products">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
