import React from "react";
import "./Product.scss";

export default function ProductCard({
  cardLogo = "/images/placeholder-logo.png",
  productImg = "/images/product_shirt_1.png",
  title = "Testing",
  desc = "Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness",
  productCaption = "Basket Ball Collection",
  productPrice = "$25",
  onClick = () => console.log("hello world"),
}) {
  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="card-head">
          <img src={cardLogo} alt="logo" className="card-logo" />
          <img src={productImg} alt="product image" className="product-img" />
          <div className="product-detail">
            <h2>{title}</h2>
            <div className="product-detail-child">{desc}</div>
          </div>
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              {title}
              <span className="badge"> New </span>
            </span>
            <span className="product-caption">{productCaption}</span>
          </div>
          <div className="product-properties">
            <span className="product-prop-title">
              <h4>Colour</h4>
              <ul className="ul-props">
                <li>
                  <div>Hello</div>
                </li>
                <li>
                  <div>hello</div>
                </li>
                <li>
                  <div>hello</div>
                </li>
              </ul>
            </span>
            {/* <span className="product-price" onClick={onClick}>{productPrice}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
