import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Home.module.css";
import backgroundVideo from "../../assets/temporary-background.mp4";
import { useEffect, useRef } from "react";

export const Home = () => {
  const videoRef = useRef(null);

  /* useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []); */

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();

      const playVideo = () => {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play video:", error);
        });
      };

      videoRef.current.addEventListener("canplaythrough", playVideo, {
        once: true,
      });

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("canplaythrough", playVideo);
        }
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src={backgroundVideo}
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
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className={styles.icon} />
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
