import React from "react";
import Item from "./Item";

const Cart = ({ itemsCart, removeItem }) => {
  const totalPrice = () => {
    let total = itemsCart.reduce((currentTotal, nextTotal) => {
      return currentTotal + nextTotal.price;
    }, 0);
    return total;
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {itemsCart.map((item) => (
          <Item
            removeItem={removeItem}
            name={item.name}
            brand={item.brand}
            price={item.price}
            imgURL={item.imgURL}
          />
        ))}
      </div>
      <div className="checkout">
        <div className="total">
          <h1>Total:</h1>
          <h1>${totalPrice()}</h1>
        </div>
        <button className="checkout-btn btn">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
