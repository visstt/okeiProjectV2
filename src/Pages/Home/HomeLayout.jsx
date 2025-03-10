import React from "react";
import styles from "./HomeLayout.module.css";
import HomeTitle from "./HomeComponents/HomeTitle/HomeTitle";
import HomeDescription from "./HomeComponents/HomeDescription/HomeDescription";
import HomeDirections from "./HomeDirections/HomeDirections";
import HomeCards from "./HomeCards/HomeCards";
import HomeForm from "../Home/HomeForm/HomeForm";

export default function HomeLayout() {
  return (
    <div className={styles.homeLayout}>
      <div className="container">
        <HomeTitle />
        <HomeDescription />
        <div className="gridLines">
          <HomeDirections />
          <HomeCards />
          <HomeForm />
        </div>
      </div>
    </div>
  );
}
