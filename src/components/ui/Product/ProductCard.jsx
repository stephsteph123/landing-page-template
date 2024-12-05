// ProductCard.js

"use client";

import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./Product.scss";

export default function ProductCard({
  buttonVariant = "primary",
  fontColor = "--primary",
  img = shirt1,
  name = "Test",
  price = "45",
  onClick = () => console.log("Hello ProductCard"),
}) {
  return (
    <div className="product-card">
      <img className="product-card-img" src={img} />
      <div className={`product-middle${fontColor}`}>
        <div className="product-card-name">{name}</div>
        <div className="product-card-price">${price}</div>
      </div>
      <Button
        className="product-card-btn"
        label="Buy Now"
        variant={buttonVariant}
        onClick={onClick}
      />
    </div>
  );
}
