import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import HeroSection from '../sections/HeroSection'
import ProductShowcase from '../sections/ProductShowcase'
import FeaturesSection from '../sections/FeaturesSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import NewsletterSection from '../sections/NewsletterSection'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  )
}

export default Home
