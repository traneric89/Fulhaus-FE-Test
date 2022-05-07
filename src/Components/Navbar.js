import React from "react";

const Navbar = ({ onClick }) => {
  return (
    <div className="navbar">
      <h1>Fülhaus Shop</h1>
      <button className="cart-btn btn" onClick={onClick}>
        CART
      </button>
    </div>
  );
};

export default Navbar;
