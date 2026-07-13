import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'Sizing',
      questions: [
        {
          q: 'What is the fit of your windbreakers?',
          a: 'Our windbreakers are designed with a relaxed, comfortable fit. They run true to size.',
        },
        {
          q: 'How do I determine my size?',
          a: 'Check our detailed size guide on the product page. We provide measurements for chest, length, and sleeve.',
        },
        {
          q: 'Can I exchange my size?',
          a: 'Yes, we offer free exchanges within 30 days of purchase.',
        },
      ],
    },
    {
      category: 'Shipping & Returns',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 5-7 business days. Express and overnight options are available.',
        },
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return guarantee. Returns are free within the first 30 days.',
        },
        {
          q: 'Do you ship internationally?',
          a: 'Currently, we ship to the United States only. International shipping coming soon!',
        },
      ],
    },
    {
      category: 'Care & Materials',
      questions: [
        {
          q: 'How should I care for my windbreaker?',
          a: 'Machine wash cold, do not bleach, and tumble dry low. See the care tag for details.',
        },
        {
          q: 'What are the jackets made of?',
          a: '100% polyester with water-resistant coating and breathable lining.',
        },
        {
          q: 'Are the jackets waterproof?',
          a: 'They are water-resistant, designed to repel light rain and moisture.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Find answers to common questions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const itemIndex = catIndex * 10 + index
                  const isOpen = openIndex === itemIndex

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : itemIndex)}
                        className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900">{faq.q}</h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={20} className="text-gray-600" />
                          </motion.div>
                        </div>
                      </button>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          height: isOpen ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="p-4 text-gray-600 bg-white border-b border-gray-100">
                          {faq.a}
                        </p>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
