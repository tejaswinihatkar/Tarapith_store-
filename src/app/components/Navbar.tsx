import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { OmIcon } from './OmIcon';

export function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <OmIcon className="w-full h-full" />
            </div>
            <span className="text-2xl font-serif text-[#D94436]">
              Tarapith Store
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#D94436] transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/grace"
              className="text-gray-700 hover:text-[#D94436] transition-colors"
            >
              Grace of Maa
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#D94436] transition-colors"
            >
              Contact
            </Link>

            {/* Profile Icon */}
            <Link
              to="/profile"
              className="p-2 text-gray-700 hover:text-[#D94436] transition-colors"
              title="My Account"
            >
              <User className="w-6 h-6" />
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-[#D94436] transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D94436] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
