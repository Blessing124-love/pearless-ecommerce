import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'

function WishlistButton({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleWishlist(product)}
      className="p-3 rounded-full border-2 border-gray-200 hover:border-accent transition-colors"
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <motion.div
        initial={false}
        animate={{
          scale: inWishlist ? 1.2 : 1,
          fill: inWishlist ? '#eab308' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Heart
          size={24}
          className={inWishlist ? 'text-accent' : 'text-gray-600'}
        />
      </motion.div>
    </motion.button>
  )
}

export default WishlistButton
