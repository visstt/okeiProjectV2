import React from "react";
import styles from "./HomeDescription.module.css";
import hero from "../../../../../public/hero.png";
import gradientStripe from "../../../../../public/gradientStripe.svg";

export default function HomeDescription() {
  return (
    <div className={styles.gradient}>
      <div className={styles.desc_wrapper}>
        <div className={styles.wrapper__title}>
          <h2>Наша команда готова к любым задачам</h2>
        </div>
        <div className={styles.wrapper__subtitle}>
          <h3>Наша команда</h3>
          <p>
            Команда наших руководителей состоит только из самых опытных людей в
            своих областях
          </p>
        </div>
        <div className={styles.wrapper__subtitle}>
          <h3>Наша команда</h3>
          <p>
            Команда наших руководителей состоит только из самых опытных людей в
            своих областях
          </p>
        </div>
      </div>
      <button className={styles.button}>Узнать больше</button>

      <div className={styles.hero_wrapper}>
        <img src={hero} alt="hero" className={styles.wrapper__img1} />
        <img src={hero} alt="hero" className={styles.wrapper__img} />
        <img src={hero} alt="hero" className={styles.wrapper__bigImg} />
        <img src={hero} alt="hero" className={styles.wrapper__img} />
        <img src={hero} alt="hero" className={styles.wrapper__img} />
      </div>
      <div className={styles.gradientStripe}></div>
    </div>
  );
}
