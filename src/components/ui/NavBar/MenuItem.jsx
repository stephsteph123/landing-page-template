import React, { useState } from "react";
import { motion } from "framer-motion";
import Dialog from "../Dialog/Dialog";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const MenuItem = ({ i }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Dialog Logic
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}></Dialog>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="motion-li"
        onClick={openDialog}
      >
        <div className="text-placeholder">{i.name}</div>
      </motion.li>
    </>
  );
};
