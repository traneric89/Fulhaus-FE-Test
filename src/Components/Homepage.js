import React from "react";
import furnitureImg from "../images/homepage.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="home-img">
        <img src={furnitureImg} alt="" />
      </div>
      <div className="title">
        <h1>Patio Furniture</h1>
        <button className="shop-btn btn">SHOP</button>
      </div>
    </div>
  );
};

export default Homepage;
