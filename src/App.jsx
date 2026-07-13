import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { UIProvider } from './context/UIContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ToastContainer from './components/ToastContainer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <UIProvider>
            <div className="flex flex-col min-h-screen bg-white">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation/:orderNumber" element={<OrderConfirmation />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <ToastContainer />
          </UIProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
