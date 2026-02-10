import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'

import CartContext from './context/CartContext'

import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  // ❗ KEEP AS-IS (as requested)
  const addCartItem = product => {
    setCartList(prev => [...prev, product])
  }

  // 🔧 REQUIRED: previously missing
  const deleteCartItem = id => {
    setCartList(prev => prev.filter(item => item.id !== id))
  }

  // 🔧 REQUIRED: for quantity buttons
  const incrementCartItem = id => {
    setCartList(prev =>
      prev.map(item =>
        item.id === id
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    )
  }

  // 🔧 REQUIRED: prevent quantity < 1
  const decrementCartItem = id => {
    setCartList(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    )
  }

  return (
    <BrowserRouter>
      {/* 🔧 IMPORTANT FIX: must use CartContext.Provider */}
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          deleteCartItem,
          incrementCartItem,
          decrementCartItem,
        }}
      >
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
