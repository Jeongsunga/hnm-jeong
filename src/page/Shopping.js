import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import ShoppingCard from '../component/ShoppingCard';

const Shopping = ({cart, setCart}) => {
  return (
    <Container>
        <Row>
          {cart.map((menu)=>(
            <Col lg={3} sg={12}><ShoppingCard item={menu} setCart={setCart}/></Col>
          ))}
        </Row>
    </Container>
  )
}

export default Shopping