import React from 'react'
import {Navigate} from 'react-router-dom'
import Like from '../page/Like'

const MypageRouteLike = ({authenticate, like, setLike}) => {
  return authenticate === true ? <Like like={like} setLike={setLike}/> : <Navigate to="/login"/>
}

export default MypageRouteLike