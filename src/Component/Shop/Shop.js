import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SelectCart from "../SelectCart/SelectCart";
import "./Shop.css"

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart)
  const [randomCart,setRandomCart] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    //do not do this:  cart.push(product)
    
    if(cart.length < 4 ){
      if(cart.length === 0){
        const newCart = [...cart, product];
        // console.log(cart)
        setCart(newCart);
      }
      for (let i = 0; i < cart.length; i++){
        console.log(cart[i]);
        if(cart[i].id !== product.id ){

          const newCart = [...cart, product];
          // console.log(newCart)
          setCart(newCart);
        }
      }
    }
  };
  
  const randomSelected = (cart) =>{
      // console.log(cart)
      if(cart.length > 0){
        const random = cart[Math.floor(Math.random()*cart.length)];
      // console.log(random)
      setRandomCart(random);
      }
  }
  const clearCart = () =>{
    setCart([]);
    setRandomCart([])
  }
  
  return (
    <div className="shop-container">
      <div className="card-container">
      {products.map((product) => (
        <Card product={product} handleAddToCart={handleAddToCart} key={product.id}></Card>
      ))}
      </div>
      <div className="selectCart-container">
        <SelectCart cart={cart} key={cart.id} randomSelected={randomSelected} randomCart={randomCart} clearCart={clearCart}></SelectCart>
      </div>
    </div>
  );
};

export default Shop;
