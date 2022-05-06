import React from "react";
import { useState } from "react";

const Product = ({ name, brand, price, imgURL }) => {
  const [display, setDisplay] = useState({ display: "none" });
  const [style, setStyle] = useState({ backgroundColor: "" });

  return (
    <div
      className="container"
      onMouseEnter={(e) => {
        setDisplay({ display: "flex" });
        setStyle({ backgroundColor: "#000000cc" });
      }}
      onMouseLeave={(e) => {
        setDisplay({ display: "none" });
        setStyle({ backgroundColor: "" });
      }}
      style={style}
    >
      <img src={imgURL} alt="" className="item-img" />
      <div className="img-text" style={display}>
        <div className="product-info">
          <h2>{name}</h2>
          <h4>{brand}</h4>
        </div>
        <div className="product-cart">
          <h6 style={{ cursor: "pointer" }}>+ Add to Cart</h6>
          <h4>${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
