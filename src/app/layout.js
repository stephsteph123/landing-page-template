"use client";

import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/ui/Footer/Footer";
import Backdrop from "@/components/ui/Backdrop/Backdrop";
import Banner from "@/components/ui/Banner/Banner";
import { useContentful } from "../hooks/useContentful";

// export const metadata = {
//   title: "",
//   description: "Template",
// };

export default function RootLayout({ children }) {
  // const data = useContentful();
  // console.log(data);
  return (
    <html lang="en">
      <body>
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

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
