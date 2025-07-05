
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Package,
  Search,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Filter
} from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: 3,
      trackingNumber: 'TRK123456789',
      products: [
        { name: 'Wireless Headphones', quantity: 1, price: 149.99 },
        { name: 'Phone Case', quantity: 2, price: 75.00 }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'processing',
      total: 189.50,
      items: 2,
      trackingNumber: null,
      products: [
        { name: 'Bluetooth Speaker', quantity: 1, price: 99.99 },
        { name: 'USB Cable', quantity: 1, price: 89.51 }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-22',
      status: 'shipped',
      total: 449.99,
      items: 1,
      trackingNumber: 'TRK987654321',
      products: [
        { name: 'Smart Watch', quantity: 1, price: 449.99 }
      ]
    },
    {
      id: 'ORD-2024-004',
      date: '2024-01-25',
      status: 'cancelled',
      total: 99.99,
      items: 1,
      trackingNumber: null,
      products: [
        { name: 'Laptop Stand', quantity: 1, price: 99.99 }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>;
      case 'shipped':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"><Truck className="w-3 h-3 mr-1" />Shipped</Badge>;
      case 'processing':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"><Clock className="w-3 h-3 mr-1" />Processing</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"><XCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.products.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Orders</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and manage your order history</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search orders or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No orders found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchTerm || statusFilter !== 'all' ? 'Try adjusting your search or filters' : 'Start shopping to see your orders here'}
            </p>
            <Link to="/products">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 dark:bg-gray-800 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      {getStatusBadge(order.status)}
                      <span className="text-lg font-semibold text-blue-500">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Order Items */}
                    <div>
                      <h4 className="font-semibold mb-3">Items ({order.items})</h4>
                      <div className="space-y-2">
                        {order.products.map((product, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{product.name} (x{product.quantity})</span>
                            <span className="font-medium">${product.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Order Details */}
                    <div>
                      <h4 className="font-semibold mb-3">Order Details</h4>
                      <div className="space-y-2 text-sm">
                        {order.trackingNumber && (
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Tracking:</span>
                            <span className="font-mono">{order.trackingNumber}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Total Items:</span>
                          <span>{order.items}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    
                    {order.trackingNumber && (
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Truck className="w-4 h-4 mr-2" />
                        Track Package
                      </Button>
                    )}
                    
                    {order.status === 'delivered' && (
                      <Button variant="outline" size="sm">
                        Reorder Items
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
