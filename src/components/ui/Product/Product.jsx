// Product.js

"use client";

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Product.scss";

export default function Product({
  items = [
    {
      img: "/images/product_shirt_1.png",
      name: "test 1",
      price: 1,
      function: openDialog,
    },
    {
      img: "/images/product_shirt_1.png",
      name: "test 2",
      price: 14,
      fontColor: "--Secondary",
      function: openDialog,
    },
    {
      img: "/images/product_shirt_2.png",
      name: "test 3",
      price: 147,
      buttonVariant: "secondary",
      function: openDialog,
    },
  ],
}) {
  return (
    <div className="product-card-parent">
      {items.map((item, index) => (
        <ProductCard
          key={index}
          img={item.img}
          name={item.name}
          price={item.price}
          fontColor={item.fontColor}
          buttonVariant={item.buttonVariant}
          onClick={item.function}
        />
      ))}
    </div>
  );
}
