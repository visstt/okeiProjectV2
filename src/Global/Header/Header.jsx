import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import logoOKEI from "../../../public/logoOKEI.svg";

export default function Header() {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: -50 }} // Хедер скрыт сверху
      animate={{ opacity: 1, y: 0 }} // Плавное появление вниз
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Логотип */}
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img src={logoOKEI} alt="logoOKEI" />
      </motion.div>

      {/* Навигация */}
      <motion.div
        className={styles.header_nav_container}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className={styles.nav}>
          <ul>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Работы
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Руководители
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Категории
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Заявка
            </motion.li>
          </ul>
        </div>

        {/* Кнопка */}
        <motion.button
          className={styles.button}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Заказать
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
