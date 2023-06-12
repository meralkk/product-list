import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./pcard.scss";
import data from "./product.json";

const Card = (props) => {
  const { image, rate, title, firstPrice, price, brand, discount } = props;

  const renderStars = () => {
    const fullStars = Math.floor(rate);
    const emptyStars = 5 - Math.ceil(rate);

    const stars = Array(fullStars).fill(<FaStar className="star" />);
    stars.push(...Array(emptyStars).fill(<FaRegStar className="star" />));

    return stars;
  };
  

  return (
    <div className="product-card">
      <span className="discount">{discount} </span>
      <img src={image} alt={title} />
      <h6 className="brand">{brand}</h6>
      <h3 className="title">{title}</h3>
      <div className="rate">{renderStars()}</div>
      <div className="first-price">{firstPrice}</div>
      <p className="price">{price}</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list">
      {data.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
