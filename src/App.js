import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [itemsCart, setItemsCart] = useState([]);

  const cartClicked = () => {
    setShowCart(!showCart);
  };

  const itemAdded = (itemDetails) => {
    setItemsCart([...itemsCart, itemDetails]);
  };

  const removeItem = (itemName) => {
    let itemsCartCopy = [...itemsCart];
    for (let i = 0; i < itemsCartCopy.length; i++) {
      if (itemsCartCopy[i].name == itemName) {
        itemsCartCopy.splice(i, 1);
        break;
      }
    }
    setItemsCart(itemsCartCopy);
  };

  return (
    <div>
      <Navbar onClick={cartClicked} />
      {showCart ? <Cart itemsCart={itemsCart} removeItem={removeItem} /> : null}
      <Homepage />
      <Products onClick={itemAdded} />
    </div>
  );
};

export default App;
