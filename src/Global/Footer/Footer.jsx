import React from "react";
import styles from "./Footer.module.css";
import logoOKEI from "../../../public/logoOKEI.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <div className={styles.img}>
            <img src={logoOKEI} alt="logoOKEI" />
          </div>
          <div className={styles.nav}>
            <p>Руководители</p>
            <p>Направления</p>
            <p>Работы</p>
            <p>Заявка</p>
          </div>
          <div className={styles.contacts}>
            <p>oksei24@mail.ru</p>
            <p>55-55-55</p>
          </div>
        </div>
      </div>
    </div>
  );
}
