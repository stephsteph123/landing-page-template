'use client'

import React from "react";
import Button from "../Button/Button";
import "./Product.scss";

export default function ProductCard({
  buttonVariant = "primary",
  fontColor = "--primary",
  img = shirt1,
  name = "Test",
  price = "45",
  onClick = () => console.log("test"),
}) {
  return (
    <div className="product-card" onClick={onClick}>
      <img className="product-card-img" src={img} />
      <div className={`product-middle${fontColor}`}>
        <div className="product-card-name">{name}</div>
        <div className="product-card-price">${price}</div>
      </div>
      <Button
        className="product-card-btn"
        label="Buy Now"
        variant={buttonVariant}
      />
    </div>
  );
}
