import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const [localValue, setLocalValue] = useState(value)

  const handleChange = (newValue) => {
    if (newValue >= min && newValue <= max) {
      setLocalValue(newValue)
      onChange(newValue)
    }
  }

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value) || min
    handleChange(val)
  }

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleChange(localValue - 1)}
        disabled={localValue <= min}
        className="p-2 border border-gray-200 rounded-lg hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </motion.button>

      <input
        type="number"
        min={min}
        max={max}
        value={localValue}
        onChange={handleInputChange}
        className="w-16 text-center border border-gray-200 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Quantity"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleChange(localValue + 1)}
        disabled={localValue >= max}
        className="p-2 border border-gray-200 rounded-lg hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </motion.button>
    </div>
  )
}

export default QuantitySelector
