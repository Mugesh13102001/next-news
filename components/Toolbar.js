import styles from "../src/styles/Toolbar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export const Toolbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>URBANLY.</h1>

      {/* Hamburger icon */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav items */}
      <div className={`${styles.navItems} ${menuOpen ? styles.show : ""}`}>
        <div onClick={() => router.push("/")} className={styles.link}>Home</div>
        <div onClick={() => router.push("/feed/1")} className={styles.link}>News Feed</div>
        <div onClick={() => router.push("/bronzeperformer")} className={styles.link}>Contact</div>
        <div
          onClick={() => window.location.href = ""}
          className={styles.link}
        >
         Feedback
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
