import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart, Heart, Download, Share2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useUI } from '../context/UIContext'
import Button from '../components/Button'
import QuantitySelector from '../components/QuantitySelector'
import SizeSelector from '../components/SizeSelector'
import ColorSelector from '../components/ColorSelector'
import WishlistButton from '../components/WishlistButton'
import Modal from '../components/Modal'
import { products } from '../data/products'

function ProductDetail() {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
  const { addToCart } = useCart()
  const { addToast } = useUI()

  // Get product from URL or use first product
  const product = products[0]

  const handleAddToCart = async () => {
    if (!selectedSize) {
      addToast({
        type: 'error',
        message: 'Please select a size',
      })
      return
    }

    if (!selectedColor) {
      addToast({
        type: 'error',
        message: 'Please select a color',
      })
      return
    }

    setLoading(true)
    setTimeout(() => {
      addToCart(product, {
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
      setLoading(false)
      addToast({
        type: 'success',
        message: 'Added to cart successfully!',
      })
      setQuantity(1)
      setSelectedSize(null)
      setSelectedColor(null)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/shop')}
          className="text-accent font-medium mb-8 hover:underline"
        >
          ← Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 h-96 lg:h-[600px] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Name & Tagline */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-xl text-accent font-semibold">{product.tagline}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600">4.8 (342 reviews)</span>
            </div>

            {/* Price */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-4xl font-bold text-gray-900"
            >
              ${product.price}
            </motion.div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>

            {/* Color Selector */}
            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />

            {/* Size Selector */}
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />
            <button
              onClick={() => setSizeGuideOpen(true)}
              className="text-sm text-accent font-medium hover:underline"
            >
              View Size Guide
            </button>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Quantity
              </label>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                loading={loading}
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <WishlistButton product={product} />
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Material</h3>
                <p className="text-gray-600 text-sm">100% Polyester with water-resistant coating and breathable lining</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Care Instructions</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Machine wash cold</li>
                  <li>• Do not bleach</li>
                  <li>• Tumble dry low</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Shipping</h3>
                <p className="text-gray-600 text-sm">Free standard shipping on orders over $100</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Size Guide Modal */}
      <Modal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        title="Size Guide"
        size="lg"
      >
        <div className="space-y-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 px-2 font-bold text-gray-900">Size</th>
                <th className="text-left py-2 px-2 font-bold text-gray-900">Chest</th>
                <th className="text-left py-2 px-2 font-bold text-gray-900">Length</th>
              </tr>
            </thead>
            <tbody>
              {product.sizes.map(size => (
                <tr key={size.id} className="border-b border-gray-100">
                  <td className="py-2 px-2 text-gray-600">{size.label}</td>
                  <td className="py-2 px-2 text-gray-600">{size.chest}"</td>
                  <td className="py-2 px-2 text-gray-600">{size.length}"</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-600 text-sm italic">All measurements are approximate</p>
        </div>
      </Modal>
    </div>
  )
}

export default ProductDetail
