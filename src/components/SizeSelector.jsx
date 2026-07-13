import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function SizeSelector({ sizes, selectedSize, onSelect }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-3">
        Select Size
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {sizes.map((size) => (
          <motion.button
            key={size.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(size.id)}
            disabled={!size.available}
            className={`relative p-3 rounded-lg border-2 font-medium text-sm transition-all ${
              selectedSize === size.id
                ? 'border-accent bg-accent/10 text-gray-900'
                : 'border-gray-200 hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
            aria-label={`Size ${size.label}`}
            aria-pressed={selectedSize === size.id}
          >
            {size.label}
            {selectedSize === size.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1"
              >
                <Check size={16} className="text-accent" />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default SizeSelector
