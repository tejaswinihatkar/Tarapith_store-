'use client';

import { useState } from 'react';
import { useOrders } from '@/context/OrderContext';
import { Link } from 'react-router-dom';
import {
  User,
  Package,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Copy,
  Home
} from 'lucide-react';
import { toast } from 'sonner';

type TabType = 'profile' | 'orders' | 'tracking';

export function ProfilePage() {
  const { orders } = useOrders();
  const [activeTab, setActiveTab] = useState<TabType>('orders');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  // Mock user profile data
  const [profileData] = useState({
    name: 'Devotee Customer',
    email: 'devotee@example.com',
    phone: '+91 9876543210',
    address: '123 Spiritual Street',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700001',
    joinDate: 'January 2024'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'out_for_delivery':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5" />;
      case 'out_for_delivery':
      case 'shipped':
        return <Truck className="w-5 h-5" />;
      case 'processing':
      case 'confirmed':
      case 'pending':
        return <Clock className="w-5 h-5" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const formatStatus = (status: string) => {
    return status
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const copyTrackingNumber = (trackingNumber: string) => {
    navigator.clipboard.writeText(trackingNumber);
    toast.success('Tracking number copied to clipboard');
  };

  const selectedOrderData = selectedOrder ? orders.find((o) => o.id === selectedOrder) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#D94436] hover:text-[#B8860B] transition-colors mb-4"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-[#D94436] mb-2">
            My Account
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your profile, orders, and tracking
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'text-[#D94436] border-b-2 border-[#D94436]'
                  : 'text-gray-600 hover:text-[#D94436]'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'orders'
                  ? 'text-[#D94436] border-b-2 border-[#D94436]'
                  : 'text-gray-600 hover:text-[#D94436]'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                <span>Orders ({orders.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'tracking'
                  ? 'text-[#D94436] border-b-2 border-[#D94436]'
                  : 'text-gray-600 hover:text-[#D94436]'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Track Order</span>
              </div>
            </button>
          </div>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-serif text-[#D94436] mb-6">Profile Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.name}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.email}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.phone}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <div className="flex items-start gap-3 p-3 border border-gray-300 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-gray-900">{profileData.address}</p>
                      <p className="text-gray-600">
                        {profileData.city}, {profileData.state} - {profileData.pincode}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{profileData.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="bg-[#D94436] text-white px-6 py-2 rounded-lg hover:bg-[#B8860B] transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Orders Yet</h3>
                <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                <Link
                  to="/"
                  className="inline-block bg-[#D94436] text-white px-6 py-3 rounded-lg hover:bg-[#B8860B] transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">Order #{order.id}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {getStatusIcon(order.status)}
                          {formatStatus(order.status)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.orderDate).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#D94436]">
                        ₹{order.totalAmount.toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-[#D94436] font-semibold">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        setSelectedOrder(order.id);
                        setActiveTab('tracking');
                      }}
                      className="flex items-center gap-2 px-4 py-2 border border-[#D94436] text-[#D94436] rounded-lg hover:bg-[#D94436] hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Track Order
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    {order.status === 'delivered' && (
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Reorder
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tracking Tab */}
        {activeTab === 'tracking' && (
          <div className="space-y-6">
            {!selectedOrderData && orders.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select an Order to Track</h3>
                <div className="space-y-2">
                  {orders.map((order) => (
                    <button
                      key={order.id}
                      onClick={() => setSelectedOrder(order.id)}
                      className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#D94436] hover:bg-[#FFF8F0] transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(order.orderDate).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {formatStatus(order.status)}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedOrderData ? (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                {/* Order Header */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-serif text-[#D94436] mb-2">
                        Order #{selectedOrderData.id}
                      </h2>
                      <p className="text-gray-600">
                        Placed on {new Date(selectedOrderData.orderDate).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                          selectedOrderData.status
                        )}`}
                      >
                        {getStatusIcon(selectedOrderData.status)}
                        {formatStatus(selectedOrderData.status)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tracking Number */}
                {selectedOrderData.trackingNumber && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-[#FFF8F0] to-[#F5E6D3] rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Tracking Number</p>
                        <p className="text-lg font-mono font-semibold text-[#D94436]">
                          {selectedOrderData.trackingNumber}
                        </p>
                      </div>
                      <button
                        onClick={() => copyTrackingNumber(selectedOrderData.trackingNumber!)}
                        className="p-2 text-[#D94436] hover:bg-white rounded-lg transition-colors"
                        title="Copy tracking number"
                      >
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Tracking Timeline */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Tracking</h3>
                  <div className="relative">
                    {selectedOrderData.trackingHistory?.map((update, index) => {
                      const isLast = index === selectedOrderData.trackingHistory!.length - 1;
                      const isActive = !isLast || selectedOrderData.status === 'delivered';
                      
                      return (
                        <div key={index} className="flex gap-4 mb-6">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                                isActive
                                  ? 'bg-[#D94436] text-white border-[#D94436]'
                                  : 'bg-gray-100 text-gray-400 border-gray-300'
                              }`}
                            >
                              {getStatusIcon(update.status)}
                            </div>
                            {!isLast && (
                              <div
                                className={`w-0.5 h-16 ${
                                  isActive ? 'bg-[#D94436]' : 'bg-gray-300'
                                }`}
                              />
                            )}
                          </div>
                          <div className="flex-grow pb-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                              <h4 className="font-semibold text-gray-900">{update.description}</h4>
                              <div className="text-sm text-gray-600">
                                {update.date} at {update.time}
                              </div>
                            </div>
                            {update.location && (
                              <p className="text-sm text-gray-600 flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {update.location}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Estimated Delivery */}
                {selectedOrderData.estimatedDelivery && selectedOrderData.status !== 'delivered' && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Estimated Delivery:</strong>{' '}
                      {new Date(selectedOrderData.estimatedDelivery).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                )}

                {/* Shipping Address */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Address</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">{selectedOrderData.shippingAddress.fullName}</p>
                    <p className="text-gray-600">{selectedOrderData.shippingAddress.address}</p>
                    <p className="text-gray-600">
                      {selectedOrderData.shippingAddress.city}, {selectedOrderData.shippingAddress.state} -{' '}
                      {selectedOrderData.shippingAddress.pincode}
                    </p>
                    <p className="text-gray-600 mt-2">
                      Phone: {selectedOrderData.shippingAddress.phone}
                    </p>
                  </div>
                </div>
              </div>
            ) : orders.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Truck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Orders to Track</h3>
                <p className="text-gray-600 mb-6">Place an order to track its delivery status</p>
                <Link
                  to="/"
                  className="inline-block bg-[#D94436] text-white px-6 py-3 rounded-lg hover:bg-[#B8860B] transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
