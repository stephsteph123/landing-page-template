// app/[slug]/page.js

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Title from "@/components/ui/Title/Title";
import styles from "./page.module.css";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Product from "@/components/ui/Product/Product";
import Form from "@/components/ui/Form/Form";
import { useContentful } from "@/hooks/useContentful";
import { productData } from "@/data/productDataPlaceholder";

// The dynamic page component
export default function Page() {
  const params = useParams();
  const slug = params?.slug;

  // console.log("Fetching page data for slug:", slug);

  const [mobile, setMobile] = useState(false);
  const [viewed, setViewed] = useState([false, false, false]);

  // Create refs and initialize them for each section
  const refs = useRef([]);
  if (refs.current.length !== 3) {
    refs.current = Array(3)
      .fill()
      .map((_, i) => refs.current[i] || React.createRef());
  }

  // Set mobile view based on screen size
  useEffect(() => {
    const handleMobile = () => setMobile(window.innerWidth < 800);
    handleMobile();
    window.addEventListener("resize", handleMobile);
    return () => window.removeEventListener("resize", handleMobile);
  }, []);

  // Observe sections' visibility
  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !viewed[index]) {
            setViewed((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        }
      );

      observer.observe(ref.current);

      return observer;
    });

    // Cleanup observers
    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [viewed]);

  return (
    <div className={styles.container}>
      <div
        className={viewed[0] ? styles["page-view-active"] : styles["page-view"]}
        ref={refs.current[0]}
      >
        <Title title="Featured Products" />
        <Product items={mobile ? productData.slice(0, 1) : productData} />
      </div>
      <div
        className={viewed[1] ? styles["page-view-active"] : styles["page-view"]}
        ref={refs.current[1]}
      >
        <Title title="Our Story" />
        <AboutUs mobile={mobile} />
      </div>
      <div
        className={viewed[2] ? styles["page-view-active"] : styles["page-view"]}
        ref={refs.current[2]}
      >
        <Title title="Want to learn more?" />
        <Form />
      </div>
    </div>
  );
}
