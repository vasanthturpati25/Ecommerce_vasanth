import {useContext} from 'react'

import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => {
  const value = useContext(CartContext)
  const {cartList} = value

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-content-container">
          <h1 className="cart-heading">My Cart</h1>

          {/* 🔧 REQUIRED: handle empty cart */}
          {cartList.length === 0 ? (
            <EmptyCartView />
          ) : (
            <CartListView />
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
