import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function ColorSelector({ colors, selectedColor, onSelect }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-3">
        Select Color
      </label>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <motion.button
            key={color.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(color.id)}
            className="relative group"
            aria-label={`Color ${color.label}`}
            aria-pressed={selectedColor === color.id}
          >
            <motion.div
              className="w-12 h-12 rounded-lg border-3 transition-all"
              style={{
                backgroundColor: color.hex,
                borderColor: selectedColor === color.id ? '#eab308' : '#e5e7eb',
              }}
              whileHover={{ boxShadow: '0 0 20px rgba(234, 179, 8, 0.3)' }}
            />
            {selectedColor === color.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Check size={20} className="text-white drop-shadow-lg" />
              </motion.div>
            )}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {color.label}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ColorSelector
