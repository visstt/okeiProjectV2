import React from "react";
import styles from "./Header.module.css";
import logoOKEI from "../../../public/logoOKEI.svg";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logoOKEI} alt="logoOKEI" />
      </div>
      <div className={styles.header_nav_container}>
        <div className={styles.nav}>
          <ul>
            <li>Работы</li>
            <li>Руководители</li>
            <li>Категории</li>
            <li>Заявка</li>
          </ul>
        </div>
        <button className={styles.button}>Заказать</button>
      </div>
    </div>
  );
}
