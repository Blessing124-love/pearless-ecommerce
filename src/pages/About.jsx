import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, TrendingUp } from 'lucide-react'

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About PEARLESS</h1>
          <p className="text-xl text-gray-300">Grown Not Given • Trust the Process</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            PEARLESS was born from a simple philosophy: quality apparel for those who understand that greatness is grown, not given. We believe in the process of creating premium products that stand the test of time.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our windbreaker collection represents more than just clothing—it's a statement of commitment to quality, authenticity, and the journey of self-improvement.
          </p>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Award,
              title: 'Quality First',
              description: 'We never compromise on materials or craftsmanship',
            },
            {
              icon: Users,
              title: 'Community',
              description: 'We build relationships with our customers',
            },
            {
              icon: TrendingUp,
              title: 'Growth',
              description: 'We believe in continuous improvement',
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 text-center"
            >
              <value.icon size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-gray-200"
        >
          {[
            { label: 'Customers Served', value: '10,000+' },
            { label: 'Satisfaction Rate', value: '98%' },
            { label: 'Years in Business', value: '5' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  )
}

export default About
