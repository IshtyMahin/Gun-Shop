import React from "react";
import "./Card.css"
import {BsCartFill} from "react-icons/bs"
const Card = (props) => {
  const {product,handleAddToCart} =props
  const { id, name, price, img } = product;

  return (
   <div className='card'>
            <div className='image-container'>
            <img src={img} alt="" />
            </div>
            <div className="card-info">
            <h3>Product Id: {id}</h3>
            <p>Name:{name}</p>
            <p>Price :${price}</p>
            </div>
        <div className='add-to-cart'>
            <button onClick={()=>{handleAddToCart(product)}}><BsCartFill className='icon'/><span className="btn-name">Add to Cart</span></button>
            
        </div>
        </div>
  );
};

export default Card;
