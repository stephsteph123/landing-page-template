import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen, items, mobile }) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (isOpen && mobile) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [isOpen]);

  return (
    <motion.ul
      className={`motion-ul ${smallScreen ? "mobile" : isOpen ? "show" : ""}`}
      variants={variants}
    >
      {items.map((i, index) => (
        <MenuItem i={i} key={index} />
      ))}
    </motion.ul>
  );
};
