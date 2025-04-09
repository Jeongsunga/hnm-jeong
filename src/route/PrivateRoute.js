import React from 'react'
import {Navigate} from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticate, cart, setCart, like, setLike}) => {
  return authenticate === true ? <ProductDetail cart={cart} setCart={setCart} like={like} setLike={setLike}/> : <Navigate to="/login"/>
}

export default PrivateRoute