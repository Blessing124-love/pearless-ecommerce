import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Shop', path: '/shop' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'FAQ', path: '/faq' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { label: 'Returns', path: '#' },
        { label: 'Shipping Info', path: '#' },
        { label: 'Size Guide', path: '#' },
        { label: 'Track Order', path: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '#' },
        { label: 'Terms & Conditions', path: '#' },
        { label: 'Cookie Policy', path: '#' },
        { label: 'Accessibility', path: '#' },
      ],
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold">PEAR</span>
              <span className="text-2xl font-bold text-accent">LESS</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Premium apparel for those who trust the process.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg p-6 mb-8"
        >
          <h3 className="font-bold text-white mb-4">Contact Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <Mail size={20} className="text-accent" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:hello@pearless.com" className="text-white hover:text-accent transition-colors">
                  hello@pearless.com
                </a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <Phone size={20} className="text-accent" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <MapPin size={20} className="text-accent" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} PEARLESS. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Secured by</span>
            <div className="flex gap-2">
              <div className="bg-gray-800 px-3 py-1 rounded text-xs text-accent font-semibold">
                SSL
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded text-xs text-accent font-semibold">
                PCI
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
