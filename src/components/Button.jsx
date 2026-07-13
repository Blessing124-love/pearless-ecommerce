import React from 'react'
import { motion } from 'framer-motion'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  ...props
}) {
  const baseStyles = 'font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent'

  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-400',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-200',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-50 disabled:border-gray-400 disabled:text-gray-400',
    accent: 'bg-accent text-gray-900 hover:bg-yellow-600 disabled:bg-yellow-300',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} inline-flex items-center justify-center gap-2`}
      {...props}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
        />
      ) : null}
      {children}
    </motion.button>
  )
}

export default Button
