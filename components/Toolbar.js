import styles from "../src/styles/Toolbar.module.css";

import { useRouter } from "next/router";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>NewsFeed</div>
      <div onClick={() => router.push("/bronzeperformer")}>Bronze Performer</div>
      <div onClick={() => window.location.href = "https://www.instagram.com/"}>
         Instagram
      </div>
      
    </div>
  );
};

export default Toolbar;
