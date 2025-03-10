import React from "react";
import styles from "./HomeCards.module.css";
import cardImage from "../../../../public/cardImage.png";

export default function HomeCards() {
  return (
    <div className={styles.homeCards}>
      <div className="gridLines">
        <div className={styles.homeCards__title}>
          <h2>
            Студенты получают реальный опыт, выполняя проекты под руководством
            наставников
          </h2>
          <div className={styles.cards_container}>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            {/* */}
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            {/* */}
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            {/* */}
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            {/* */}
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            {/* */}
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
}
