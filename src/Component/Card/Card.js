import React from "react";
import "./Card.css"
import {BsCartFill} from "react-icons/bs"
const Card = ({ gun }) => {
  const { id, name, price, img } = gun;

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
            <button><BsCartFill className='icon'/><span className="btn-name">Add to Cart</span></button>
            
        </div>
        </div>
  );
};

export default Card;
