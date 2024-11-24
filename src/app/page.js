import styles from "./page.module.css";
import Banner from "@/components/ui/Banner/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner/>
      <Banner/>
      <Banner/>
      <Banner/>
      <Banner/>
      <Banner/>
      <Banner/>
    </div>
  );
}