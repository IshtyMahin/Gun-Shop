import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SelectCart from "../SelectCart/SelectCart";
import "./Shop.css"

const Shop = () => {
  const [guns, setGuns] = useState([]);
//   const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="card-container">
      {guns.map((gun) => (
        <Card gun={gun} key={gun.id}></Card>
      ))}
      </div>
      <div className="selectCart-container">
        <SelectCart></SelectCart>
      </div>
    </div>
  );
};

export default Shop;
