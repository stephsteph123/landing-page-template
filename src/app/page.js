"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Product from "@/components/ui/Product/Product";
import Form from "@/components/ui/Form/Form";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import { productData } from "@/data/productDataPlaceholder";
import Title from "@/components/ui/Title/Title";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useContentful } from "../hooks/useContentful";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [viewed, setViewed] = useState([false, false, false]);

  // const data = useContentful();
  // console.log(data);

  // set Mobile
  useEffect(() => {
    const handleMobile = () => setMobile(window.innerWidth < 800);
    handleMobile();
    window.addEventListener("resize", handleMobile);
    return () => window.removeEventListener("resize", handleMobile);
  }, []);

  // creates refs for each div
  const refs = viewed.map((_, index) => {
    const [ref, isVisible] = useIntersectionObserver({
      threshold: 0.2,
    });

    if (isVisible && !viewed[index]) {
      setViewed((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }

    return ref;
  });

  return (
      <div className={styles.container}>
        <div
          className={
            viewed[0] ? styles["page-view-active"] : styles["page-view"]
          }
          ref={refs[0]}
        >
          <Title title="Featured Products" />
          <Product items={mobile ? productData.slice(0, 1) : productData} />
        </div>
        <div
          className={
            viewed[1] ? styles["page-view-active"] : styles["page-view"]
          }
          ref={refs[1]}
        >
          <Title title="Our Story" />
          <AboutUs mobile={mobile} />
        </div>
        <div
          className={
            viewed[2] ? styles["page-view-active"] : styles["page-view"]
          }
          ref={refs[2]}
        >
          <Title title="Want to learn more?" />
          <Form />
        </div>
      </div>
  );
}
