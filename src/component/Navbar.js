import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <div>
        <div className="login-area" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} className="login-button"/>
            <div className="login-button">로그인</div>
        </div>
        <div className="nav-section">
          <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAaKiaRYNTRewPvMiE3pTI6o9LoTX1gpOtw&s" alt=""/>
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu)=>(
              <li>{menu}</li>
            ))}
          </ul>
          <div className="search-input">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input className="input-area" type="text" placeholder="제품 검색"/>
          </div>
        </div>
    </div>
  )
}

export default Navbar