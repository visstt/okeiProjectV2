import React from "react";
import styles from "./HomeLayout.module.css";
import HomeTitle from "./HomeComponents/HomeTitle/HomeTitle";
import HomeDescription from "./HomeComponents/HomeDescription/HomeDescription";
import gradientStripe from "../../../public/gradientStripe.svg";

export default function HomeLayout() {
  return (
    <div className={styles.homeLayout}>
      <div className="container">
        <HomeTitle />
        <HomeDescription />
      </div>
    </div>
  );
}
