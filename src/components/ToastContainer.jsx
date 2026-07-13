import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { useUI } from '../context/UIContext'

function ToastContainer() {
  const { toasts, removeToast } = useUI()

  const toastVariants = {
    initial: { opacity: 0, x: 300, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 300 },
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />
      case 'info':
        return <Info className="text-blue-500" size={20} />
      default:
        return null
    }
  }

  const getBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'info':
        return 'bg-blue-50 border-blue-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const getTextColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-green-800'
      case 'error':
        return 'text-red-800'
      case 'info':
        return 'text-blue-800'
      default:
        return 'text-gray-800'
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="mb-3 pointer-events-auto"
          >
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg ${
                getBgColor(toast.type)
              }`}
            >
              {getIcon(toast.type)}
              <p className={`text-sm font-medium ${getTextColor(toast.type)}`}>
                {toast.message}
              </p>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close notification"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ToastContainer
