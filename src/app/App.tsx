import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';
import { OrderProvider } from '@/context/OrderContext';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { ShopPage } from '@/app/pages/ShopPage';
import { GracePage } from '@/app/pages/GracePage';
import { ContactPage } from '@/app/pages/ContactPage';
import { CartPage } from '@/app/pages/CartPage';
import { CheckoutPage } from '@/app/pages/CheckoutPage';
import { OrderSuccessPage } from '@/app/pages/OrderSuccessPage';
import { ProfilePage } from '@/app/pages/ProfilePage';

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<ShopPage />} />
                <Route path="/grace" element={<GracePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-right" richColors />
          </div>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
