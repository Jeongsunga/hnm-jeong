import React from 'react'
import {Navigate} from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticate, cart, setCart}) => {
  return authenticate === true ? <ProductDetail cart={cart} setCart={setCart}/> : <Navigate to="/login"/>
}

export default PrivateRoute