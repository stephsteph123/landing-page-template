import React, { useState, useEffect, forwardRef } from "react";
import "./Product.scss";

export default function ProductCard({
  cardLogo = "/images/placeholder-logo.png",
  productImg = "/images/product_shirt_1.png",
  title = "Testing",
  productCaption = "Placeholder Collection",
  productPrice = "$25",
  onClick = () => console.log("hello world"),
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover state change for each card
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="product-card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-card" onClick={onClick}>
        <div className="card-head">
          <img src={cardLogo} alt="logo" className="card-logo" />
          <img src={productImg} alt="product image" className="product-img" />
          <div className="product-detail">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              {title}
              {/* <span className="badge"> New </span> */}
            </span>
            <span className="product-caption">{productCaption}</span>
          </div>
          <div className="product-properties">
            <span className="product-prop-title">
              <h4>Details</h4>
              <ul className="ul-props">
                <li>
                  <div>High-Speed Performance</div>
                </li>
                <li>
                  <div>A sleek and stylish appearance</div>
                </li>
                <li>
                  <div>Built to last with quality materials</div>
                </li>
              </ul>
            </span>
            <div style={{ position: "relative" }}>
              <span className={`product-price`}>{`$${productPrice}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
