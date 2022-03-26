import React from 'react';
// import Choose from '../Choose/Choose';
import "./SelectCart.css"
const SelectCart = (props) => {
    const {cart,randomCart ,randomSelected} =props
    return (
        <div>
            
            {
                cart.map((cart) =><p>Name:{cart.name}</p>)
            }
            
            <button onClick={()=>(randomSelected(cart))}>Chose one</button>
            <h1>{randomCart.name}</h1>
            <button>remove all</button>
        </div>
    );
};

export default SelectCart;