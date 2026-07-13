import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useUI } from '../context/UIContext'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToast } = useUI()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      addToast({ type: 'error', message: 'Please enter your email' })
      return
    }

    setLoading(true)
    setTimeout(() => {
      addToast({ type: 'success', message: 'Successfully subscribed to our newsletter!' })
      setEmail('')
      setLoading(false)
    }, 800)
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Stay Connected</h2>
          <p className="text-gray-400 text-lg mb-8">
            Get exclusive access to new collections, special offers, and insider updates
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-600 transition-all disabled:opacity-70"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>

        <p className="text-center text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export default NewsletterSection
