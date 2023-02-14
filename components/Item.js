import React from 'react'
import Image from "next/image";
import styles from "../styles/Main.module.css";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import next from "../assets/next.svg";
import js from "../assets/jss.svg";
import html from "../assets/html.svg";
import git from "../assets/git.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootsrp.svg";
const Item = () => {
  return (
    
    <div className={styles.skillcount}>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={html} alt="html" />
        </span>
      </div>
      <div className={styles.textskills}>Html</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={css} alt="css" />
        </span>
      </div>
      <div className={styles.textskills}>Css</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={bootstrap} alt="bootstrap" />
        </span>
      </div>
      <div className={styles.textskills}>Bootstrap</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={tailwind} alt="tailwind" />
        </span>
      </div>
      <div className={styles.textskills}>Tailwind</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={js} alt="js" />
        </span>
      </div>
      <div className={styles.textskills}>JavaScripts</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={react} alt="react" />
        </span>
      </div>
      <div className={styles.textskills}>React</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={next} alt="next" />
        </span>
      </div>
      <div className={styles.textskills}>Next JS</div>
    </div>
    <div className={styles.skillcont}>
      <div>
        <span>
          <Image src={git} alt="git" />
        </span>
      </div>
      <div className={styles.textskills}>Git</div>
    </div>
  </div>
  )
}

export default Item