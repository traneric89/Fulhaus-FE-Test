import React from "react";
import { useState } from "react";

const Product = ({ name, brand, price, imgURL, onClick }) => {
  const [display, setDisplay] = useState({ display: "none" });

  const onAddToCart = () => {
    onClick({ name, brand, price, imgURL });
  };

  return (
    <div
      className="container"
      onMouseEnter={(e) => {
        setDisplay({ display: "flex" });
      }}
      onMouseLeave={(e) => {
        setDisplay({ display: "none" });
      }}
    >
      <img src={imgURL} alt="" className="item-img" />
      <div className="img-text" style={display}>
        <div className="product-info">
          <h3>{name}</h3>
          <h4>{brand}</h4>
        </div>
        <div className="product-cart">
          <h6 style={{ cursor: "pointer" }} onClick={onAddToCart}>
            + Add to Cart
          </h6>
          <h4>${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
