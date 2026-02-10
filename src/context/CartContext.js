import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  incrementCartItem: () => {},
  decrementCartItem: () => {},
})

export default CartContext
