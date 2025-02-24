import React from "react";
import styles from "./HomeTitle.module.css";

export default function HomeTitle() {
  return (
    <div className={styles.homeTitle_wrapper}>
      <div className={styles.wrapper__title}>
        <h1>Здесь студенты творят кейсы от компаний</h1>
        <button className={styles.button}>Заказать</button>
      </div>
    </div>
  );
}
