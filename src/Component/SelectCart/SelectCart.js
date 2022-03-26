import React from 'react';
// import Choose from '../Choose/Choose';
import "./SelectCart.css"
const SelectCart = (props) => {
    const {cart,randomCart ,randomSelected , clearCart} =props


    return (
        <div>
            
            <div>
            {
                cart.map((cart) =><h2>Name:{cart.name}</h2>)
            }
            </div>
            
            <button className='select' onClick={()=>(randomSelected(cart))}>Select one</button>
            <h1>{randomCart.name}</h1>
            <button className='remove' onClick={clearCart}>remove all</button>
        </div>
    );
};

export default SelectCart;