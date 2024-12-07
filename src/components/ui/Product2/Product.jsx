// Product2/Product.js

"use client";

import React from "react";
import ProductCard from "./ProductCard";
import "./Product.scss";

export default function Product({
  items = [
    {
      cardLogo: "/images/placeholder-logo.png",
      productImg: "/images/product_shirt_1.png",
      title: "test 1",
      price: 1,
      function: openDialog,
    },
    {
      cardLogo: "/images/placeholder-logo.png",
      productImg: "/images/product_shirt_1.png",
      title: "test 2",
      price: 14,
      function: openDialog,
    },
    {
      cardLogo: "/images/placeholder-logo.png",
      productImg: "/images/product_shirt_1.png",
      title: "test 3",
      price: 147,
      function: openDialog,
    },
  ],
}) {
  return (
    <div className="product-card-parent">
      {items.map((item, index) => (
        <ProductCard
          key={index}
          cardLogo={item.cardLogo}
          productImg={item.img}
          title={item.title}
          productPrice={item.price}
          onClick={item.function}
        />
      ))}
    </div>
  );
}

