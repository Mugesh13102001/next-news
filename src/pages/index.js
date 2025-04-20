import Head from "next/head";

import styles from "../styles/Home.module.css";
import { Toolbar } from "../../components/Toolbar";


export default function Home() {
  return (
   <div className="page-container">

    <Toolbar />
    <div className={styles.main}>
      <h1>Sunrise News App</h1>


      <h3>Buckle Up for the fast news deliveries</h3>
    </div>
   </div>
  );
}
