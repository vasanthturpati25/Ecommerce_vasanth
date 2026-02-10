import {useContext} from 'react'

import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'

import './index.css'

const CartListView = () => {
  // 🔧 REQUIRED: useContext instead of invalid use()
  const value = useContext(CartContext)
  const {cartList} = value

  return (
    <ul className="cart-list">
      {cartList.map(eachCartItem => (
        <CartItem
          key={eachCartItem.id}
          cartItemDetails={eachCartItem}
        />
      ))}
    </ul>
  )
}

export default CartListView
