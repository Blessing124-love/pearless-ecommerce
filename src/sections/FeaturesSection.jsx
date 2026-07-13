import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function FeaturesSection() {
  const features = [
    {
      icon: '🎨',
      title: 'Premium Design',
      description: 'Meticulously crafted with attention to every detail',
    },
    {
      icon: '♻️',
      title: 'Sustainable',
      description: 'Eco-friendly materials and ethical production',
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Fast and reliable worldwide delivery',
    },
    {
      icon: '✨',
      title: 'Quality Assured',
      description: '30-day money-back guarantee on all items',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Why Choose PEARLESS</h2>
          <p className="text-gray-400 text-lg">Experience luxury that's earned, not given</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-colors group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-5xl mb-4 inline-block group-hover:scale-110 transition-transform"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
