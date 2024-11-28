"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";
import Product from "@/components/ui/Product/Product";
import Form from "@/components/ui/Form/Form";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import { productData } from "@/data/productDataPlaceholder";
import Title from "@/components/ui/Title/Title";

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleMobile = () => setMobile(window.innerWidth < 800);
    handleMobile();
    window.addEventListener("resize", handleMobile);
    return () => window.removeEventListener("resize", handleMobile);
  }, []);

  return (
    <div className={styles.container}>
      <Title />
      <Product items={mobile ? productData.slice(0, 1) : productData} />
      <AboutUs mobile={mobile} />
      <Form />
    </div>
  );
}
