import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'out_for_delivery' 
  | 'delivered' 
  | 'cancelled';

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Order {
  id: string;
  orderDate: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  estimatedDelivery?: string;
  trackingHistory?: TrackingUpdate[];
}

export interface TrackingUpdate {
  status: OrderStatus;
  date: string;
  time: string;
  location?: string;
  description: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'orderDate' | 'trackingNumber' | 'trackingHistory'>) => void;
  getOrderById: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Generate tracking updates based on order status
function generateTrackingHistory(order: Order): TrackingUpdate[] {
  const history: TrackingUpdate[] = [];
  const orderDate = new Date(order.orderDate);
  
  const statusFlow: OrderStatus[] = ['pending', 'confirmed', 'processing', 'shipped', 'out_for_delivery', 'delivered'];
  const currentIndex = statusFlow.indexOf(order.status);
  
  statusFlow.slice(0, currentIndex + 1).forEach((status, index) => {
    const updateDate = new Date(orderDate);
    updateDate.setDate(updateDate.getDate() + index);
    
    let description = '';
    let location = '';
    
    switch (status) {
      case 'pending':
        description = 'Order placed successfully';
        location = 'Tarapith Store';
        break;
      case 'confirmed':
        description = 'Order confirmed and payment received';
        location = 'Tarapith Store';
        break;
      case 'processing':
        description = 'Order is being prepared for shipment';
        location = 'Warehouse';
        break;
      case 'shipped':
        description = 'Order has been shipped';
        location = 'Shipping Hub';
        break;
      case 'out_for_delivery':
        description = 'Out for delivery';
        location = 'Local Delivery Center';
        break;
      case 'delivered':
        description = 'Order delivered successfully';
        location = order.shippingAddress.city;
        break;
    }
    
    history.push({
      status,
      date: updateDate.toLocaleDateString('en-IN'),
      time: updateDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      location,
      description
    });
  });
  
  return history;
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (orderData: Omit<Order, 'id' | 'orderDate' | 'trackingNumber' | 'trackingHistory'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      orderDate: new Date().toISOString(),
      trackingNumber: `TRK${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      status: 'pending',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    };
    
    // Generate initial tracking history
    newOrder.trackingHistory = generateTrackingHistory(newOrder);
    
    setOrders((prev) => [newOrder, ...prev]);
    
    // Simulate order progression
    setTimeout(() => updateOrderStatus(newOrder.id, 'confirmed'), 1000);
    setTimeout(() => updateOrderStatus(newOrder.id, 'processing'), 3000);
    setTimeout(() => updateOrderStatus(newOrder.id, 'shipped'), 5000);
    setTimeout(() => updateOrderStatus(newOrder.id, 'out_for_delivery'), 7 * 24 * 60 * 60 * 1000 - 2 * 24 * 60 * 60 * 1000);
  };

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === orderId) {
          const updatedOrder = { ...order, status: newStatus };
          updatedOrder.trackingHistory = generateTrackingHistory(updatedOrder);
          return updatedOrder;
        }
        return order;
      })
    );
  };

  const getOrderById = (orderId: string) => {
    return orders.find((order) => order.id === orderId);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrderById,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
