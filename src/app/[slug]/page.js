// app/[slug]/page.js

"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
import Title from "@/components/ui/Title/Title";
import styles from "./page.module.css";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Product from "@/components/ui/Product/Product";
import Form from "@/components/ui/Form/Form";
import { useContentful } from "@/hooks/useContentful";
import Dialog from "@/components/ui/Dialog/Dialog";
import Toast from "@/components/ui/Toast/Toast";
import Testimonial from "@/components/ui/Testimonial/Testimonial";

// The dynamic page component
export default function Page() {
  const params = useParams();
  const slug = params?.slug;
  const data = useContentful();
  const [mobile, setMobile] = useState(false);
  const [ipad, setIpad] = useState(false);
  const [viewed, setViewed] = useState([false, false, false]);
  const [newProductData, setNewProductData] = useState([]);
  const [newAboutData, setNewAboutData] = useState([]);
  const memoizedContentfulData = useMemo(() => data?.contentfulData, [data]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (Array.isArray(memoizedContentfulData)) {
      const update = memoizedContentfulData.filter(
        (input) => input.fields?.title === slug
      );

      if (update.length > 0) {
        setNewProductData([
          {
            cardLogo: update[0].fields.footerLogo.fields.file.url,
            productImg: `https:${update[0].fields.productImage1.fields.file.url}`,
            title: update[0].fields.productName1 || "Unnamed Product",
            productPrice: update[0].fields.productPrice1 || 0,
            function: openDialog,
          },
          {
            cardLogo: update[0].fields.footerLogo.fields.file.url,
            productImg: `https:${update[0].fields.productImage2.fields.file.url}`,
            title: update[0].fields.productName2 || "Unnamed Product",
            productPrice: update[0].fields.productPrice2 || 0,
            function: openDialog,
          },
          {
            cardLogo: update[0].fields.footerLogo.fields.file.url,
            productImg: `https:${update[0].fields.productImage3.fields.file.url}`,
            title: update[0].fields.productName3 || "Unnamed Product",
            productPrice: update[0].fields.productPrice3 || 0,
            function: openDialog,
          },
        ]);

        setNewAboutData([
          {
            src: `https:${update[0].fields.aboutUsImg1.fields.file.url}`,
            offset: 50,
          },
          {
            src: `https:${update[0].fields.aboutUsImg2.fields.file.url}`,
            offset: 100,
          },
          {
            src: `https:${update[0].fields.aboutUsImg3.fields.file.url}`,
            offset: 150,
          },
        ]);
      }
    }
  }, [slug, memoizedContentfulData]);

  // Create refs and initialize them for each section
  const refs = useRef([]);
  if (refs.current.length !== 3) {
    refs.current = Array(3)
      .fill()
      .map((_, i) => refs.current[i] || React.createRef());
  }

  // Set mobile view based on screen size
  useEffect(() => {
    const handleMobile = () =>
      setMobile(
        window.innerWidth < 800
          ? true
          : setIpad(window.innerWidth < 1200 ? true : false)
      );
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
          threshold: 0.2,
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
    event.preventDefault();
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

  console.log(newProductData);

  return (
    <div className={styles.container}>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}></Dialog>
      <Toast />
      <div
        className={viewed[0] ? styles["page-view-active"] : styles["page-view"]}
        ref={refs.current[0]}
      >
        <Title title="Featured Products" />
        <Product
          items={
            mobile
              ? newProductData.slice(0, 1)
              : ipad
              ? newProductData.slice(0, 2)
              : newProductData
          }
        />
      </div>
      <div
        className={viewed[1] ? styles["page-view-active"] : styles["page-view"]}
        ref={refs.current[1]}
      >
        <Title title="Our Story" />
        <AboutUs mobile={mobile} images={newAboutData} />
      </div>
      <div
        className={viewed[2] ? styles["page-view-active"] : styles["page-view"]}
        ref={refs.current[2]}
      >
        <Title title="Want to learn more?" />
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <Form onSubmit={openDialog} />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
