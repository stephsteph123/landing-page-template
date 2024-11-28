import styles from "./page.module.css";
import Product from "@/components/ui/Product/Product";
import Form from "@/components/ui/Form/Form";
import AboutUs from "@/components/ui/AboutUs/AboutUs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Product />
      <AboutUs />
      {/* <Form /> */}
    </div>
  );
}
