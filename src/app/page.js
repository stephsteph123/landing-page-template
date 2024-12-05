"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Product from "@/components/ui/Product/Product";
import Form from "@/components/ui/Form/Form";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import { productData } from "@/data/productDataPlaceholder";
import Title from "@/components/ui/Title/Title";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/ui/Footer/Footer";
import Backdrop from "@/components/ui/Backdrop/Backdrop";
import Banner from "@/components/ui/Banner/Banner";
import Dialog from "@/components/ui/Dialog/Dialog";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [viewed, setViewed] = useState([false, false, false]);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

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
          threshold: 0.1,
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


  // Dialog Logic
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

    // toggles no scroll on overflow
    useEffect(() => {
      if (isDialogOpen) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
      }
  
      // Cleanup on unmount
      return () => {
        document.documentElement.style.overflow = "";
      };
    }, [isDialogOpen]);

  return (
    <ThemeProvider
      primaryColor="#ff5733"
      secondaryColor="#33c1ff"
      fontFamily="'Arial, sans-serif'"
    >
      <Backdrop />
      <NavBar />
      <Banner
        bannerImage="/images/placeholder-image-1-public.png"
        blurDataURL="/images/placeholder-image-1-public-pixel.png"
        bannerLogo="/images/placeholder-banner-logo-public.png"
      />
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
      </Dialog>
      <div className={styles.container}>
        <div
          className={
            viewed[0] ? styles["page-view-active"] : styles["page-view"]
          }
          ref={refs.current[0]}
        >
          <Title title="Featured Products" />
          <Product items={mobile ? productData.slice(0, 1) : productData} />
        </div>
        <div
          className={
            viewed[1] ? styles["page-view-active"] : styles["page-view"]
          }
          ref={refs.current[1]}
        >
          <Title title="Our Story" />
          <AboutUs mobile={mobile} />
        </div>
        <div
          className={
            viewed[2] ? styles["page-view-active"] : styles["page-view"]
          }
          ref={refs.current[2]}
        >
          <Title title="Want to learn more?" />
          <Form />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
