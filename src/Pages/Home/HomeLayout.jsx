import React from "react";
import Header from "../../Global/Header/Header";
import styles from "./HomeLayout.module.css";
import HomeTitle from "./HomeComponents/HomeTitle/HomeTitle";

export default function HomeLayout() {
  return (
    <div className={styles.homeLayout}>
      <div className="container">
        <Header />
        <HomeTitle />
      </div>
    </div>
  );
}
