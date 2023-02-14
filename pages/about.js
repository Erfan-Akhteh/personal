import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";
import imag from "../assets/LA1.jpg";
import Link from "next/link";
const about = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.h2}>
          <h2>About us</h2>
        </div>
        <div className={styles.link}>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className={styles.countabt}>
        <div className={styles.cardimg}>
          <Image
            className={styles.img}
            src={imag}
            alt="image"
            height={600}
            width={400}
          />
        </div>
        <div className={styles.about}>
          <h1 className={styles.h1}> Do you know me !</h1>
          <p className={styles.p}>
            Hi! My name is Erfan Akhteh . iam a web Developer, and i'm very
            passionate and dedicated to my work. With 1+ years experience as a
            professional Web Developer,i have acquired the skills and knowledge
            necessary to make your project a success.
          </p>
          <div className={styles.Information}>
            <div>
              <p>Age:19</p>
              <p>Nationality:iranian</p>
              <p>Phone:-</p>
            </div>
            <div>
              <p>Freelancer:Not available</p>
              <p>Address:irna</p>
              <p>Email:kingerfan567@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
