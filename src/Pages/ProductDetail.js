import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './ProductDetail.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct]=useState(null)
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/Jeongsunga/hnm-jeonggit/products/${id}`
    let response = await fetch(url)
    let data = await response.json();
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Row className="product-area">
        <Col className="product-img">
          <img src={product?.img} alt=""/>
        </Col>
        <Col className="product-info">
          <h3 className="font-bold margin-side">{product?.title}</h3>
          <span style={{color : '#ff000080'}}>{product?.choice ? "인기상품 " : ""}</span>
          <span style={{color : '#0000ff80'}}>{product?.new ? "새상품" : ""}</span>
          <div className="font-bold margin-side">₩ {product?.price}</div>
          <DropdownButton id="dropdown-basic-button" className="margin-side" title="사이즈 선택">
            {product?.size.map((size, index) => (
              <Dropdown.Item href="#/action-index">{size}</Dropdown.Item>
            ))}
          </DropdownButton>
          <button className="product-button" style={{marginTop: "150px"}}>장바구니</button>
          <button className="product-button">찜</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail