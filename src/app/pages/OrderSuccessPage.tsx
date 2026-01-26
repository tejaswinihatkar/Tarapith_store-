'use client';

import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Home } from 'lucide-react';

export function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F5E6D3] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-serif text-[#D94436] mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-lg text-gray-500 mb-8">
            May Maa Tara bless your order with divine grace
          </p>

          {/* Order Details */}
          <div className="bg-gradient-to-r from-[#FFF8F0] to-[#F5E6D3] rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2">
              Your order has been confirmed and will be processed shortly.
            </p>
            <p className="text-gray-600 text-sm">
              You will receive an order confirmation email shortly with all the details.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D94436] to-[#F29F05] text-white px-8 py-3 rounded-lg hover:from-[#B8860B] hover:to-[#D94436] transition-all duration-300 font-semibold text-lg"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#D94436] px-8 py-3 rounded-lg border-2 border-[#D94436] hover:bg-[#D94436] hover:text-white transition-colors font-semibold text-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>

          {/* Devotional Message */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic">
              "ॐ ह्रीं स्त्रीं हूं फट्"
            </p>
            <p className="text-sm text-gray-500 mt-2">
              May the blessings of Maa Tara be with you always
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
