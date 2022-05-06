import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
      );
      const { data } = await res.json();
      setData(data.products);
    };
    fetchEvents();
  }, []);

  return (
    <div className="products-grid">
      {data.map((product) => (
        <Product
          key={product._id}
          imgURL={product.imageURLs[0]}
          name={product.fulhausProductName}
          brand={product.material}
          price={product.retailPrice}
        />
      ))}
    </div>
  );
};

export default Products;
