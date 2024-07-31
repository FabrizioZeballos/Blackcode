import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Home.module.css";
import backgroundVideo from "../../assets/temporary-background.mp4";

export const Home = () => {
  return (
    <div className={styles.container}>
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
      ></video>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>b/ackcode_</h1>
        <p className={styles.email}>inquiries@blackcode.ch</p>
      </div>
      <div className={styles.icons}>
        <FaLinkedin className={styles.icon} />
        <FaXTwitter className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaWhatsapp className={styles.icon} />
      </div>
    </div>
  );
};
