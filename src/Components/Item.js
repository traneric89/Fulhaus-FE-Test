import React from "react";

const Item = ({ name, brand, price, imgURL, removeItem }) => {
  return (
    <div className="item-container">
      <img src={imgURL} alt="" />
      <div className="item-info">
        <div className="name">
          <h3>{name}</h3>
          <h4>{brand}</h4>
        </div>
        <div className="item-price">
          <h4>${price}</h4>
        </div>
      </div>
      <h2 onClick={() => removeItem(name)}>X</h2>
    </div>
  );
};

export default Item;
