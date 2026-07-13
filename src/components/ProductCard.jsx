import React from 'react'
import { motion } from 'framer-motion'

function ProductCard({ product, onClick, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="skeleton rounded-lg h-80 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
    )
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-4 left-4 bg-accent text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
