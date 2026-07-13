import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Fashion Influencer',
      content: 'The quality and design of PEARLESS jackets are unmatched. This is luxury streetwear done right.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Maria Santos',
      role: 'Entrepreneur',
      content: 'I wear my PEARLESS jacket everywhere. The attention to detail is incredible. Definitely worth every penny.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'James Wilson',
      role: 'Creative Director',
      content: 'Finally found a brand that understands premium quality. PEARLESS embodies everything I stand for.',
      rating: 5,
      image: '👨‍🎨',
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
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Customer Testimonials</h2>
          <p className="text-gray-400 text-lg">What our community is saying</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-accent transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
