import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Copy, Download } from 'lucide-react'
import Button from '../components/Button'

function OrderConfirmation({ match }) {
  const orderNumber = 'ORD-' + Date.now()

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <CheckCircle size={80} className="text-green-500 mx-auto" />
          </motion.div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your order has been confirmed
          </p>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg p-6 md:p-8 mb-8 shadow-md"
          >
            <div className="mb-6">
              <p className="text-gray-600 mb-2">Order Number</p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-2xl font-bold text-gray-900 font-mono">
                  {orderNumber}
                </p>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Copy order number"
                >
                  <Copy size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4 text-left">
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="text-gray-900 font-medium">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="text-gray-900 font-medium">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
                    'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email Confirmation</p>
                <p className="text-gray-900 font-medium">
                  A confirmation email has been sent to your inbox
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg">
              <Download size={20} />
              Download Invoice
            </Button>
            <Link to="/shop">
              <Button variant="secondary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderConfirmation
