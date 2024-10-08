import './App.css';
import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import ProductAll from './Pages/ProductAll';
import Login from './Pages/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';

// 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 1. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 2. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 3-1. 상품 디테일을 눌렀으나, 로그인이 안 되어 있을 경우 로그인 페이지가 먼저 나온다.
// 3-2. 로그인이 되어 있을 경우에는 상품 상세 페이지를 볼 수 있다.
// 4. 로그아웃 버튼을 누르면 로그아웃이 된다.
// 5. 로그아웃 되면 상품 상세 페이지를 볼 수 없다. 다시 로그인 페이지로 돌아온다.
// 6. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log("aaa", authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
