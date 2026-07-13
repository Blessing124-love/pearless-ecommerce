import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Filter, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Shop() {
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [priceRange, setPriceRange] = useState([0, 150])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesColor =
        selectedColors.length === 0 ||
        product.colors.some(c => selectedColors.includes(c.id))

      const matchesSize =
        selectedSizes.length === 0 ||
        product.sizes.some(s => selectedSizes.includes(s.id))

      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesColor && matchesSize && matchesPrice
    })
  }, [selectedColors, selectedSizes, priceRange, searchTerm])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Shop</h1>
          <p className="text-gray-300">Discover our premium windbreaker collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <motion.div
            className={`hidden lg:block w-64 flex-shrink-0`}
          >
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  ${priceRange[0]} - ${priceRange[1]}
                </p>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Colors
                </label>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(products.flatMap(p => p.colors))).map(color => (
                    <button
                      key={color.id}
                      onClick={() =>
                        setSelectedColors(prev =>
                          prev.includes(color.id)
                            ? prev.filter(c => c !== color.id)
                            : [...prev, color.id]
                        )
                      }
                      className="w-8 h-8 rounded-full border-2 transition-all"
                      style={{
                        backgroundColor: color.hex,
                        borderColor: selectedColors.includes(color.id) ? '#eab308' : '#e5e7eb',
                      }}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              {(selectedColors.length > 0 || selectedSizes.length > 0 || searchTerm || priceRange[1] < 150) && (
                <button
                  onClick={() => {
                    setSelectedColors([])
                    setSelectedSizes([])
                    setPriceRange([0, 150])
                    setSearchTerm('')
                  }}
                  className="w-full py-2 text-sm text-accent font-medium hover:bg-accent/10 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 text-lg mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedColors([])
                    setSelectedSizes([])
                    setPriceRange([0, 150])
                    setSearchTerm('')
                  }}
                  className="text-accent font-medium hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
