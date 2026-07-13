import React, { createContext, useState, useCallback } from 'react'

export const UIContext = createContext()

export function UIProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const [modals, setModals] = useState({
    sizeGuide: false,
    imageGallery: false,
    mobileMenu: false,
  })

  const addToast = useCallback((toast) => {
    const id = Date.now()
    const toastWithId = { ...toast, id }
    setToasts(prev => [...prev, toastWithId])

    const duration = toast.type === 'error' ? 5000 : 3000
    const timeout = setTimeout(() => {
      removeToast(id)
    }, duration)

    return () => clearTimeout(timeout)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const toggleModal = useCallback((modalName) => {
    setModals(prev => ({
      ...prev,
      [modalName]: !prev[modalName],
    }))
  }, [])

  const openModal = useCallback((modalName) => {
    setModals(prev => ({
      ...prev,
      [modalName]: true,
    }))
  }, [])

  const closeModal = useCallback((modalName) => {
    setModals(prev => ({
      ...prev,
      [modalName]: false,
    }))
  }, [])

  const value = {
    toasts,
    addToast,
    removeToast,
    modals,
    toggleModal,
    openModal,
    closeModal,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = React.useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }
  return context
}
