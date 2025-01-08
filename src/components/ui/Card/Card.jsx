import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = ({ children, title }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleReszie = () => {
      const screen = window.innerWidth;
      screen < 700 ? setMobile(true) : setMobile(false);
    };

    handleReszie();

    window.addEventListener("resize", handleReszie);

    return () => {
      window.removeEventListener("resize", handleReszie);
    };
  }, []);

  return (
    <div className={`card ${mobile ? "mobile" : ""}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
