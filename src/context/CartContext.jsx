import React, { createContext, useState, useCallback, useEffect } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addToCart = useCallback((product, selectedOptions) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item =>
          item.id === product.id &&
          item.color === selectedOptions.color &&
          item.size === selectedOptions.size
      )

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id &&
          item.color === selectedOptions.color &&
          item.size === selectedOptions.size
            ? { ...item, quantity: Math.min(item.quantity + selectedOptions.quantity, 10) }
            : item
        )
      }

      return [
        ...prevItems,
        {
          ...product,
          ...selectedOptions,
          cartItemId: `${product.id}-${selectedOptions.color}-${selectedOptions.size}-${Date.now()}`,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((cartItemId) => {
    setItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId))
  }, [])

  const updateQuantity = useCallback((cartItemId, quantity) => {
    if (quantity < 1 || quantity > 10) return
    setItems(prevItems =>
      prevItems.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = subtotal > 100 ? 0 : 5
  const tax = subtotal * 0.1
  const total = subtotal + shippingCost + tax

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shippingCost,
    tax,
    total,
    itemCount: items.length,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
