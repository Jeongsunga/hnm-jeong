import React from 'react'
import {Navigate} from 'react-router-dom'
import Like from '../page/Like'

const MypageRouteLike = ({authenticate}) => {
  return authenticate === true ? <Like/> : <Navigate to="/login"/>
}

export default MypageRouteLike