import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
  const navigate = useNavigate()
  const goToLogin = () => {
    if (authenticate) {
      const confirmed = window.confirm("로그아웃 하시겠습니까?");
      if (confirmed) {
        setAuthenticate(false);
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }

  const goToHome = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const search = (event) => {
    if(event.key === "Enter"){
      // 입력한 검색어를 읽어와서 url로 바꿔준다.
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
        <div className="header">
          <div className="open-area" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="open-button"/>
          </div>
          <div className="login-area" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} className="login-button"/>
              <div className="login-button">{authenticate ? "로그아웃" : "로그인"}</div>
          </div>
        </div>
        <div className="nav-section" onClick={goToHome}>
          <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAaKiaRYNTRewPvMiE3pTI6o9LoTX1gpOtw&s" alt=""/>
        </div>
        <div className={ `slide-menu ${menuOpen ? "open" : "menu-area"}`}>
          <div className="close-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="nav-section reverse-list">
            <ul className="menu-list">
              {menuList.map((menu)=>(
                <li>{menu}</li>
              ))}
            </ul>
            <div className="search-input">
              <FontAwesomeIcon className="search-icon" icon={faSearch}/>
              <input className="input-area" type="text" placeholder="제품 검색" onKeyPress={(event)=>search(event)}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar