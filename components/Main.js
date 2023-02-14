import Image from "next/image";
import React from "react";
import front from "../assets/header-img.svg";
import Type from "../components/Type";
import styles from "../styles/Main.module.css";
import avatar from "../assets/index1.jpg";
import arrow from "../assets/2.png";
import Item from "./Item";
import em from "../assets/email.svg";
import inst from "../assets/inst.svg";
import link from "../assets/link.svg";
import tel from "../assets/telegram.svg";
import github from "../assets/github.svg";

const Main = () => {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.type}>
          <button className={styles.button}>Front-End developer</button>
          <h1 className={styles.h1}>Welcome to Website me.</h1>
          <h2>
            <Type />
          </h2>
        </div>
        <div className={styles.imge}>
          <Image className={styles.front} src={front} alt="front" />
        </div>
      </div>
      <div className={styles.avatar}>
        <div className={styles.avatarImg}>
          <Image
            className={styles.img}
            src={avatar}
            alt="avatar"
            height={280}
            width={280}
          />
        </div>
      </div>

      <div className={styles.arrow}>
        <Image src={arrow} alt="arrow" height={400} width={400} />
      </div>
      <Item />
      <div className={styles.social}>
        <h1 className={styles.socialtext}>Social Media me :👇</h1>
      </div>
      <div className={styles.socialicon}>
        <div className={styles.svg}>
          <a href="https://www.instagram.com/erfan.akhteh/">
            {" "}
            <Image src={inst} alt="instagram" />
          </a>
        </div>
        <div className={styles.svg}> 
          <a href="https://t.me/imErfani">
            {" "}
            <Image src={tel} alt="telegram" />
          </a>
        </div>
        <div className={styles.svg}>
          <a href="https://www.linkedin.com/in/erfan-akhteh">
            {" "}
            <Image src={link} alt="linkdein" />
          </a>
        </div>
        <div className={styles.svg}>
          <a href="https://github.com/Erfan-Akhteh">
            {" "}
            <Image src={github} alt="github" />
          </a>
        </div>
        <div className={styles.svg}>
          <a href="mailto:kingerfan567@gmail.com">
            {" "}
            <Image src={em} alt="email" />
          </a>
        </div>
      </div>
      <div>
        <h3 className={styles.textgithub}>
          To see examples of my work, visit my GitHub.
        </h3>
      </div>
    </>
  );
};

export default Main;
