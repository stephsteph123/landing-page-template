import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/ui/Footer/Footer";
import Backdrop from "@/components/ui/Backdrop/Backdrop";
import Banner from "@/components/ui/Banner/Banner";

export const metadata = {
  title: "",
  description: "Template",
};

export default function RootLayout({ children }) {
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
          <Banner/>
          
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
