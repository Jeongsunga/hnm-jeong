import React, {useEffect, useState} from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    // eslint-disable-next-line
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
    let searchQuery = query.get('q') || "";
    console.log(searchQuery)
    let url = `http://localhost:5000/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    // 서버측 쿼리문 미작동으로 프론트 단에서 쿼리 기능 구현
    const filteredProduct = searchQuery ? data.filter((item)=>item.title.includes(searchQuery)) : data;
    if(filteredProduct.length === 0){
      alert("검색 결과가 없습니다. 다시 시도하십시오.")
      return;
    }
    setProductList(filteredProduct)
  }
  useEffect(()=>{
    getProducts()
    // eslint-disable-next-line
  },[query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll