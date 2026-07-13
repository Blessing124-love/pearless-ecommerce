import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(0)
  const product = products[selectedProduct]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="collections" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Featured Collection</h2>
          <p className="text-gray-400 text-lg">Discover our premium windbreaker collection</p>
        </motion.div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-square">
              <motion.img
                key={product.id}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.span className="text-accent font-bold text-sm tracking-widest">NEW ARRIVAL</motion.span>
              <h3 className="text-4xl md:text-5xl font-black text-white mt-2">{product.name}</h3>
              <p className="text-2xl text-accent font-bold mt-2">{product.tagline}</p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>

            {/* Features */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
              {product.features?.map((feature, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Price and CTA */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
              <span className="text-3xl font-black text-white">${product.price}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-3 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-600 transition-all"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Product Selector Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center flex-wrap"
        >
          {products.map((p, i) => (
            <motion.button
              key={p.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProduct(i)}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                selectedProduct === i ? 'bg-accent text-gray-900' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {p.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
