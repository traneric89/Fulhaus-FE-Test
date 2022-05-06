import React from "react";
import { useState } from "react";
import itemImg from "../images/chair.avif";

const Product = () => {
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
      <img src={itemImg} alt="" className="item-img" />
      <div className="img-text" style={display}>
        <div className="product-info">
          <h2>Product Name</h2>
          <h4>BRAND NAME</h4>
        </div>
        <div className="product-cart">
          <h6 style={{ cursor: "pointer" }}>+ Add to Cart</h6>
          <h4>$900</h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
