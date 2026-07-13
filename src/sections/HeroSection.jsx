import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={20} className="text-accent" />
          <span className="text-accent font-medium tracking-widest text-sm">PREMIUM COLLECTION</span>
          <Sparkles size={20} className="text-accent" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter"
        >
          PEARLESS
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-accent font-bold mb-8">
          Grown Not Given
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Premium apparel collection designed for those who understand that true style is earned through dedication and
          commitment to excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-600 transition-all"
          >
            Shop Now
          </motion.a>
          <motion.a
            href="#collections"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all"
          >
            Explore Collection
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown size={32} className="text-accent" />
      </motion.div>

      {/* Parallax Background Elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
    </section>
  )
}

export default HeroSection
