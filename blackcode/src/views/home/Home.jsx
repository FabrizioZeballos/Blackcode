import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://player.vimeo.com/video/995885691?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&transparent=1&playsinline=1"
        frameBorder="0"
        allow="autoplay; picture-in-picture;"
        title="Temporary Background"
        className={styles["iframe"]}
      ></iframe>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>b/ackcode_</h1>
        <a href={`mailto:inquiries@blackcode.ch`} className={styles.email}>
          inquiries@blackcode.ch
        </a>
      </div>
      {/* Add href attribute whenever social links are done */}
      <div className={styles.icons}>
        <a target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <FaXTwitter className={styles.icon} />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icon} />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
