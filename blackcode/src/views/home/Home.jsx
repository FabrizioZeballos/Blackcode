import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Home.module.css";
import backgroundVideo from "/temp-background2.mp4";

export const Home = () => {
  return (
    <div className={styles.container}>
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.backgroundVideo}
      ></video>
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
