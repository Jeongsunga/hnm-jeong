import React from 'react'
import {Navigate} from 'react-router-dom'
import Shopping from '../page/Shopping'

const MypageRouteShop = ({authenticate, cart, setCart}) => {
  return authenticate === true ? <Shopping cart={cart} setCart={setCart}/> : <Navigate to="/login"/>
}

export default MypageRouteShop