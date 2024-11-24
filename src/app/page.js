import styles from "./page.module.css";
import Banner from "@/components/ui/Banner/Banner";
import Product from "@/components/ui/Product/Product";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
      <Product />
    </div>
  );
}
