import React, { createContext, useState, useCallback, useEffect } from 'react'

export const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('wishlist')
    return saved ? JSON.parse(saved) : []
  })

  // Persist wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }, [items])

  const toggleWishlist = useCallback((product) => {
    setItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id)
      if (exists) {
        return prevItems.filter(item => item.id !== product.id)
      }
      return [...prevItems, product]
    })
  }, [])

  const isInWishlist = useCallback(
    (productId) => items.some(item => item.id === productId),
    [items]
  )

  const removeFromWishlist = useCallback((productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId))
  }, [])

  const clearWishlist = useCallback(() => {
    setItems([])
  }, [])

  const value = {
    items,
    toggleWishlist,
    isInWishlist,
    removeFromWishlist,
    clearWishlist,
    count: items.length,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = React.useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}
