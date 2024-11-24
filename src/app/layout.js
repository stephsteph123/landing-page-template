import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/ui/Footer/Footer";

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
          <NavBar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
