import styles from '../styles/employee.module.css'; // adjust path as needed
import { Toolbar } from "../../components/Toolbar";

export const EOM = () => {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h2>Contact Us</h2>
        <div >

          <div className={styles.contactItem} onClick={() => window.location.href = "https://www.instagram.com/"}>
            <span>
            <img 
              src="https://th.bing.com/th/id/OIP.K59_wnuyTepdZnaRS7WyZgHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="Twitter logo"
              className={styles.icon}
            />
                 Instagram</span>
          </div>

          <div className={styles.contactItem} onClick={() => window.location.href = "https://www.twitter.com/"}>
            <span>🐦 Twitter</span>
           
          </div>

          <div className={styles.contactItem}>
            <a href="mailto:contact@example.com">📧 contact@example.com</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EOM;
