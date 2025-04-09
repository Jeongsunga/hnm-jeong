import React from 'react'
import './ShoppingCard.css'
import {useNavigate} from 'react-router-dom'
import { Button} from 'react-bootstrap';

const ShoppingCard = ({item, setCart}) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.product.id}`)
    }
    const deleteProduct = (id, size) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) => !(item.product.id === id && item.size === size)
            )
          );
    }
  return (
    <div className="product-card">
      <div className="image-container" onClick={showDetail}>
        <img src={item.product?.img} alt={item.product?.title} className="product-image" />
      </div>
      <div className="list-product-info">
        <div className="product-label">
          {item.product?.choice === true ? "Conscious Choice" : ""}
        </div>
        <div className="product-title">{item.product?.title}({item?.size})</div>
        <div className="product-price">￦{item.product?.price.toLocaleString()}</div>
        <div className="product-new">{item.product?.new === true ? "New!" : ""}</div>
      </div>
      <Button className='delete-button' variant="secondary" onClick={()=>{deleteProduct(item.product.id, item.size)}}>삭제</Button>

    </div>
  )
}

export default ShoppingCard