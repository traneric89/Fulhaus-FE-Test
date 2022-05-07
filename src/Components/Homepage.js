import React from "react";
import furnitureImg from "../images/homepage.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="home-img">
        <img src={furnitureImg} alt="" />
      </div>
      <div className="title">
        <h2 className="patio">Patio Furniture</h2>
        <button className="shop-btn btn">SHOP</button>
      </div>
    </div>
  );
};

export default Homepage;
