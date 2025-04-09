import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import LikeCard from '../component/LikeCard';

const Like = ({like, setLike}) => {
  return (
    <Container>
        <Row>
          {like.map((menu)=>(
            <Col lg={3} sg={12}><LikeCard item={menu} setLike={setLike}/></Col>
          ))}
        </Row>
    </Container>
  )
}

export default Like