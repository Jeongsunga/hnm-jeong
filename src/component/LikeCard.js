import React from 'react'
import './ProductCard.css'
import {useNavigate} from 'react-router-dom'
import { Button} from 'react-bootstrap';

const LikeCard = ({item, setLike}) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
    const deleteProduct = (id) => {
        setLike((prevLike) =>
            prevLike.filter(
                (item) => !(item.id === id)
            )
        );
    }
  return (
    <div className="product-card">
      <div className="image-container" onClick={showDetail}>
        <img src={item?.img} alt={item?.title} className="product-image" />
      </div>
      <div className="list-product-info">
        <div className="product-label">
          {item?.choice === true ? "Conscious Choice" : "\u00A0"}
        </div>
        <div className="product-title">{item?.title}</div>
        <div className="product-price">￦{item?.price.toLocaleString()}</div>
        <div className="product-new">{item?.new === true ? "New!" : "\u00A0"}</div>
      </div>
      <Button className='delete-button' variant="secondary" onClick={()=>{deleteProduct(item.id)}}>삭제</Button>
    </div>
  )
}

export default LikeCard