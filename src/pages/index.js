import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../../components/Toolbar";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Toolbar />
      <div className={styles.main}>
        <div>
          <h1>50% Off On Yearly <br /> Subscription</h1>
          <h3>Grab the offer before it ends!</h3>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://images.pexels.com/photos/3095621/pexels-photo-3095621.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Promo"
          />
        </div>
      </div>
    </div>
  );
}
